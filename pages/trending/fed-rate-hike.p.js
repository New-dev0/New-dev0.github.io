import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fed Rate Hike</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fed Rate Hike"/>
        <meta name="description" content="Trending News about Fed Rate Hike" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fed Rate Hike</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/11/03/600x338/INDIA-MARKETS_1663128119810_1667480586856_1667480586856.JPG" alt="Fed Rate Hike"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/market/stock-market-news/how-will-fed-s-fourth-75-bps-rate-hike-impact-indian-stocks-11667480383701.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How will Fed&#39;s fourth 75 bps rate hike impact Indian stocks? | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkRdOgx8JVHWq0ElMmhn9QhPfQNpTDvhWupgffwy_V2e89T3CytcsC5Oc2q8V22alCFoLB8-Jq" alt="How will Fed&#39;s fourth 75 bps rate hike impact Indian stocks? | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FOMC anticipates that ongoing increases in the target range will be appropriate in order to attain a stance of monetary policy that is sufficiently&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/industry/banks/story/rbi-mpc-meeting-heres-what-to-expect-in-indian-market-post-fed-rate-hike-351727-2022-11-03'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RBI MPC meeting: Here&#39;s what to expect in Indian market post Fed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQtwwo5GhZY1a8_2Su7Cz6fAPgdaQbdEokjVZMIKY1cOQITT7OYXX9yZtTF9yC0GOP6aqHqKYo2" alt="RBI MPC meeting: Here&#39;s what to expect in Indian market post Fed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As per market analysts, this 0.75 per cent hike in the interest rate was already discounted. It was the hawkish guidance by the Fed Chair, which led to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/markets/europe/futures-signal-more-losses-feds-rate-hike-view-2022-11-03/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wall St down for fourth straight day on Fed rate hike worry</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZB4oZHwdKwkx90Plg6vBq5lA0SUwqU9yazjQwPuIYBqzmibbZHCHYA5M1Ptl3jFWn5vj4ogAw" alt="Wall St down for fourth straight day on Fed rate hike worry" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U.S. stocks closed lower for a fourth consecutive session on Thursday as economic data did little to alter expectations the Federal Reserve would continue&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/markets/stocks/news/fed-hikes-again-by-75-basis-points-hints-at-entering-end-phase/articleshow/95262457.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fed hikes again by 75 basis points, hints at entering end phase</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYXUk5vpUZuaiSYH-i8Z4CfWQvk9dmQtm9kmkHTwStwaeAddzhAf5OoVmhUZGkggCQJY5dGRGu" alt="Fed hikes again by 75 basis points, hints at entering end phase" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The unanimous decision lifts the target for the benchmark federal funds rate to a range of 3.75% to 4%, its highest level since 2008.</p></div>
            </div>
        </a><a href='https://www.indiatv.in/paisa/business/us-fed-rate-hike-us-central-bank-hikes-interest-rate-by-75-basis-points-again-these-five-big-impacts-will-be-on-india-2022-11-03-898796'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Fed Rate Hike: अमेरिकी केंद्रीय बैंक ने ब्‍याज दर में फिर 75 बेसिस ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTkJZ6nM_sXggE3WFJRD71T-KW1ZgvVHqyFVP3wVV3SDk_Nz_uE1rjCLTqc56R2W7nKSRD4AeqZ" alt="US Fed Rate Hike: अमेरिकी केंद्रीय बैंक ने ब्‍याज दर में फिर 75 बेसिस ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इस बढ़ोतरी के बाद भारत में भी ब्याज दर में और बढ़ोतरी की संभावना बढ़ गई है।</p></div>
            </div>
        </a><a href='https://www.onmanorama.com/news/business/2022/11/03/us-fed-interest-rate-india-rupee.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Fed hikes interest rates, Indian markets and rupee to be hit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJbvlZKWIcewRH13C1wm8XaO_zfvB6C_IMTs6LtDllyrB3mxSewC77FGRKUEmOwjDfluUTHehK" alt="US Fed hikes interest rates, Indian markets and rupee to be hit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Fed Chairman, Jerome Powell was quoted as saying by reports that the bank is firmly committed to lowering inflation..US Fed Rate. Dollar.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/03/us-bonds-treasury-yields-as-markets-absorb-fed-rate-hike.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yield on 2-year Treasury note hits highest level since July 2007 as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNNvUeIYmOlmw_cipbXXtRo07FTILNo0-ZumvMe9KmhckUbfDjQUSJgvX9YCUDfZIRUST1uLld" alt="Yield on 2-year Treasury note hits highest level since July 2007 as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The yield on the 2-year U.S. Treasury note climbed to its highest level since July 2007 on Thursday as the Federal Reserve warned of more hikes ahead.</p></div>
            </div>
        </a><a href='https://www.abplive.com/business/federal-reserve-hike-benchmark-rates-by-0-75-percent-fourth-time-in-a-row-2251086'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Federal Reserve Rate Hike: फिर बढ़ा दी फेडरल रिजर्व ने ब्याज दरें, किया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfxQwlg8P3AHAkwM6eIPB_-Ba-hfbMxPTc5eq8kKnigvUL-HQWUyR_JjR7qigtc5Gxvjzt7TDW" alt="Federal Reserve Rate Hike: फिर बढ़ा दी फेडरल रिजर्व ने ब्याज दरें, किया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Federal Reserve Rate Hike: अमेरिकी फेडरल रिजर्व ने कल अपनी बैठक में लगातार चौथी बार ब्याज दरों में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.naidunia.com/business/trade-us-fed-rate-hike-us-federal-reserve-raises-benchmark-interest-rates-highest-level-since2008-7916635'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Fed Rate Hike: अमेरिकी फेडरल रिजर्व ने बढ़ाई बेंचमार्क ब्याज दरें ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQz77BNq8R19NfYoq8qupnAEU5xakWKLyhSGFEayD8zQ2fNxSH5wCJQ_AUkBSa8tLPKmao1uRjh" alt="US Fed Rate Hike: अमेरिकी फेडरल रिजर्व ने बढ़ाई बेंचमार्क ब्याज दरें ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US Fed Rate Hike: यूएस फेडरल रिजर्व ने अपनी चौथी सीधी 75 आधार-बिंदु ब्याज दर में वृद्धि की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/world/america-us-federal-reserve-hikes-interest-rate-for-the-sixth-time-this-year-23178817.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Federal Reserve Rate Hike: अमेरिकी फेडरल रिजर्व ने ब्याज दरों को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4R9PDtQpTpInpcm2Uf8rRmv0UtzpA5J0pnrWyXuw3d_ye9wgOOPa9CvYAwO36BYq_DQyX92Z3" alt="US Federal Reserve Rate Hike: अमेरिकी फेडरल रिजर्व ने ब्याज दरों को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>यह इस साल केंद्रीय बैंक की छठी वृद्धि है। फेड अध्यक्ष जेरोम पॉवेल ने कहा कि फेड अपनी दर&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}