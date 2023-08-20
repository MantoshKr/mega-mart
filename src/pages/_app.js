import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
// import { Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react"


// const open_sans=Open_Sans({
//   subsets:["latin"],
//   variable:"--font-open-sans",
// });

const MyApp = ({ Component, pageProps }) => {
  return (
     <>
    <SessionProvider session={pageProps.session} >
    <Provider store={store} >
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
    </>

  )
}

export default MyApp;


// className={`${open_sans.variable} font-sans`} 