import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTv518AQlwNWO2RMgcLMQilFelf4xp3q8",
  authDomain: "sitedev-75486.firebaseapp.com",
  projectId: "sitedev-75486",
  storageBucket: "sitedev-75486.appspot.com",
  messagingSenderId: "330395980635",
  appId: "1:330395980635:web:c0693ddd438c0f581d407e",
  measurementId: "G-R8EX2K8DB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#90cdf4" />
          </Head>
        <body>
          <Main />
          <NextScript />
          <p>
          <script src='https://inklinkor.com/tag.min.js' data-zone="5399934" async></script>
          </p>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
