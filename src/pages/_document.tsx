import React from 'react'
import theme from '@/config/theme'
import { NextComponentType } from 'next'
import { AppInitialProps } from 'next/app'
import { EmotionCache } from '@emotion/cache'
import { createEmotionCache } from '@/utils'
// import createEmotionServer from '@emotion/server/create-instance'
import { AppContextType, AppPropsType } from 'next/dist/shared/lib/utils'
import { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

interface DocumentProps {
  emotionStylesTags: any[]
}

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        {process.env.NEXT_PUBLIC_NODE_PRODUCTION && (
          <link rel="preconnect" href={process.env.NEXT_PUBLIC_NODE_PRODUCTION} />
        )}
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/logo-doan-tncs-hcm.png" />
        {/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}

        {/* PWA primary color */}


        <meta content="#fbfbfb" name="theme-color" />
        <meta content="#fbfbfb" name="msapplication-navbutton-color" />
        <meta content="#fbfbfb" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="apple-mobile-web-app-capable" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap"
          rel="stylesheet"
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

