import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Update existing meta tags for mobile browser color scheme */}
          <meta name="theme-color" content="#0f172a" /> {/* Assuming this is your background-start color */}
          <meta name="msapplication-navbutton-color" content="#0f172a" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
