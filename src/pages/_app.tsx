import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import '@/styles/globals.css'
import '@/styles/react-slick.css'
import ThemeCustomization from '@/config/theme'
import animationData from '../../public/animation/bus.json'
import Lottie from 'react-lottie'
import { Box } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '@/store'

export default function App({ Component, pageProps }: AppProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(animationData);

  useEffect(() => {
    const delay = setTimeout(() => {
      setAnimation(animationData);
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(delay);
  }, [animationData]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:title" content='Lịch sử, văn hóa và du lịch huyện Cầu Kè' />
        <meta name="description" content="Lịch sử, văn hóa và du lịch huyện Cầu Kè" />
        <title>Du lịch huyện Cầu Kè</title>
        <link rel="icon" href="/images/logo-doan-tncs-hcm.png" />
      </Head>
      <Provider store={store}>
          <ThemeCustomization>
            {loading ? (
              <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie
                  options={defaultOptions}
                  height={300}
                  width={300}
                />
              </Box>

            ) : (
              <Component {...pageProps} />
            )}
          </ThemeCustomization>
      </Provider>
    </>
  )
}
