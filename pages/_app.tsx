import React,{useEffect} from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import store from '../components/redux/store'

const MyApp = ({ Component, pageProps }: AppProps) => {

  useEffect(()=>{

    //@ts-ignore
    if(window.Cypress){
      // @ts-ignore
      window.store = store
    }
    
  },[])


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}



export default MyApp
