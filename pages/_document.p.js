import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";

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
