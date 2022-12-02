import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";
import { getAnalytics, isSupported } from "firebase/analytics";
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
app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);


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
          <meta name="theme-color" content="#003399" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4464694750922288"
   crossOrigin="anonymous"></script>
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
