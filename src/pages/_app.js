import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
// import { Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
};

export default MyApp;

// className={`${open_sans.variable} font-sans`}
