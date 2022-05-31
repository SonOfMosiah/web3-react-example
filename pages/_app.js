import 'tailwindcss/tailwind.css'
import '../styles/index.scss'
import '../styles/globals.css'
import '../styles/App.css'
import '../styles/index.css'
import '../styles/style.css'
import '../styles/Home.module.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import Header from '../components/Header'

import { wrapper } from '../redux'

function getLibrary(provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Header/>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </div>
    
  )
}

export default wrapper.withRedux(MyApp)
