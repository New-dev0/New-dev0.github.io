import { useEffect } from 'react';
import '../styles/globals.css';
import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    logEvent(analytics(), "page_view", {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title
    })
  }, []
  );

  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
