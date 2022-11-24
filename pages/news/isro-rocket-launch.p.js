import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ISRO Rocket Launch</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ISRO Rocket Launch"/>
        <meta name="description" content="Trending News about ISRO Rocket Launch" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ISRO Rocket Launch</h1>
            <Image width={800} height={500} src="http://cdn.wionews.com/sites/default/files/2022/11/23/312905-isro.jpg" alt="ISRO Rocket Launch"/>
            <h3>Recent News</h3>
            <a href='https://www.wionews.com/technology/isro-conducts-200th-launch-of-rh-200-sounding-rocket-heres-all-you-need-to-know-536716'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO conducts 200th consecutive launch of RH-200 sounding ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSed0V_nvUZwq2510Chh3nXKZx69Z9UNz784RJTpfDWdZrU8CrQb8bM5TASQ94qhm1Sj8fWUQgH" alt="ISRO conducts 200th consecutive launch of RH-200 sounding ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ISRO has largely been focusing on launching towering rockets like the PSLV (Polar Satellite Launch Vehicle), GSLV (Geosynchronous Satellite Launch Vehicle)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/current-affairs/isro-successfully-launches-200th-rh-200-rohini-sounding-rocket-122112301372_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO successfully launches 200th RH-200 Rohini sounding rocket</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtplcmkMlJ0kntHkB0G6Oo0uhVxOQLHGT24ob-ZLp1cxkaP5GLV6cNMQ1MnuxqPmDLKYC_d3Hl" alt="ISRO successfully launches 200th RH-200 Rohini sounding rocket" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Honorable former President Shri Ram Nath Kovind witnessed the 200th successive successful launch of RH200 which took off at 11.55 AM IST today, November 23,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/isro-conducts-200th-consecutive-launch-of-rh-200-sounding-rocket-3548112'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO Conducts 200th Consecutive Launch Of &#39;RH-200&#39; Sounding ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRs3P6R_lE7TuQI65TjdPuiiQF6au2uK5-EDkGa6nJl4gCpLWOTRotschjro2eUjUmFY9Pg_bzF" alt="ISRO Conducts 200th Consecutive Launch Of &#39;RH-200&#39; Sounding ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RH200, the versatile sounding rocket of ISRO, on Wednesday registered its 200th consecutive successful launch from the shores of Thumba, Thiruvananthapuram.</p></div>
            </div>
        </a><a href='https://www.newindianexpress.com/states/karnataka/2022/nov/24/isro-completes-200th-consecutive-launch-of-rohini-rocket-2521489.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO completes 200th consecutive launch of Rohini rocket...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiQt5y_gWTa1cc_YuPAfw4zcq3eQvg1qyHAY1YpmdAXsxyU38eILiPrcN4177-WugkhihaLPlZ" alt="ISRO completes 200th consecutive launch of Rohini rocket..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The RH-200 is one of three sounding rockets currently operational with ISRO, the other two being the RH-300 Mk 2 and the RH-560 Mk 2.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/kerala/isros-rh-200-sounding-rocket-records-200th-consecutive-successful-flight/article66174909.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISRO&#39;s RH-200 sounding rocket records 200th consecutive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBfDWmLeprRTniKzpY-a0tdiPimwNs0coV2h73tiVgMWJYvmk1sNmF5jiwLb3hXLhXyLkI4lo3" alt="ISRO&#39;s RH-200 sounding rocket records 200th consecutive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former President Ram Nath Kovind, ISRO chairman S. Somanath witness milestone event.</p></div>
            </div>
        </a>
        </Template></>;
}