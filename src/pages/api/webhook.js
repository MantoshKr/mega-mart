import { buffer } from 'micro';
import * as admin from 'firebase-admin';

// Import the Firebase service account credentials
let serviceAccount = require('../../../permissions.json');

// Secure a connection to Firebase from the backend
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// Establish a connection to Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Stripe webhook secret
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

// Function to fulfill an order and save it to Firestore
const fulfillOrder = async (session) => {
  console.log('Fulfilling order', session);
  const amount = Math.floor(session.amount_total / 9296);
  const amountShipping = Math.floor(session.total_details.amount_shipping / 9296);

  const orderData = {
    amount,
    amount_shipping: amountShipping,
    images: JSON.parse(session.metadata.images),
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  };

  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set(orderData)
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been added to the database`);
    });
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    // Verify that the event posted came from Stripe
    try {
      const event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);

      // Handle the checkout.session.completed event
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        // Fulfill the order
        return fulfillOrder(session)
          .then(() => res.status(200).send('Success'))
          .catch((err) => {
            console.error('Webhook Error:', err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
          });
      }
    } catch (err) {
      console.error('Webhook Error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
};

// Configuration for the API route
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
