# Mega Mart Project

Mega Mart is an e-commerce project built with Next.js, React.js, Redux, Firebase, MongoDB, Stripe, and Tailwind CSS. It offers a wide range of features and functionalities. This README file provides an overview of the project, its features, and how to set it up.

## Table of Contents

- [Features](#features)
- [Tech Stack Used](#tech-stack-used)
- [Challenges Faced](#challenges-faced)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

## Features

Mega Mart boasts a variety of features that enhance the shopping experience for both customers and sellers:

- **User Authentication**: Users can sign up and log in using Google authentication to access their accounts.

- **Product Listings**: Sellers can list their products, which are displayed in the product list once added.

- **Shopping Cart**: Users can add products to their cart, save items for later, and easily manage their cart contents.

- **Wishlist**: Users can add items to their wishlist from any page, including the start page, cart page, or product page.

- **Search Functionality**: A search feature allows users to find products they like quickly.

- **Payment Integration**: Stripe is used for secure payment processing.

- **Responsive Design**: The website is fully responsive, providing an optimal viewing experience on various devices, including mobile, tablet, laptop, and large monitors.

- **Mega Menu**: A mega menu with categories helps users navigate the website efficiently.

## Tech Stack Used

- Next.js
- React.js
- Redux for state management (e.g., cart, wishlist, search)
- Firebase for authentication and product ratings
- MongoDB for storing and fetching data
- Stripe for payment processing
- Tailwind CSS for styling
- Google Authentication for user login

## Challenges Faced

During the development of Mega Mart, several challenges were encountered and successfully addressed:

- **Wishlist error**: Adding a product to the wishlist was not in sync from all the pages due to a data type mismatch issue with product IDs from various APIs, which occurred when adding the product to the wishlist from the product details page. To resolve this, all product IDs were converted to strings to ensure consistent data types.

- **Rating and Rating Count Error**: An error related to product ratings and counts was resolved in the checkout page.

- **Handling Multiple APIs**: Difficulty in handling three APIs simultaneously.

- **Critical image loading error in the Vercel deployed app**:

  - Installed the 'next-optimized-images' package to resolve the image upload issue during the deployment process.
  - Reorganized the project's folder structure for images:
    - Moved image assets from 'public/assets/images' to 'public/static/images' to adhere to recommended project structure guidelines.

- **CORS Issue**:
  Cross-Origin Resource Sharing (CORS) issue was resolved by using both the front-end and API on the same Vercel domain, eliminating CORS-related issues.

## Getting Started

To get the Mega Mart project up and running on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/mantoshdev2/mega-mart.git`
2. Navigate to the project directory: `cd mega-mart`
3. Install dependencies: `npm install`
4. Set up Firebase and Stripe credentials (follow the documentation).
5. Start the development server: `npm run dev`

## Deployment

The app is deployed on Vercel. To deploy your own instance of the app on Vercel, follow these steps:

1. Install the Vercel CLI globally (if not already installed):

   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account using the CLI:

   ```bash
   vercel login
   ```

3. Deploy the app to Vercel:

   ```bash
   vercel
   ```
   
