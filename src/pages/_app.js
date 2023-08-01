import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { Open_Sans } from "next/font/google";


const open_sans=Open_Sans({
  subsets:["latin"],
  variable:"--font-open-sans",
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store} className={`${open_sans.variable} font-sans`} >
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
