import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mandous cyclone</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mandous cyclone"/>
        <meta name="description" content="Trending News about Mandous cyclone" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mandous cyclone</h1>
            <Image width={800} height={500} src="https://c.ndtvimg.com/2019-09/tmnr768g_cyclone-generic-pixabay_625x300_24_September_19.jpg" alt="Mandous cyclone"/>
            <h3>Recent News</h3>
            <a href='https://www.ndtv.com/india-news/cyclone-mandous-to-cross-coast-near-chennai-rescue-teams-deployed-in-tamil-nadu-3591156'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyclone Mandous To Cross Coast Near Chennai, Rescue Teams ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQUCS5AumhQ19OHKhG0Q_GrpsancudUtGyNGDTt4HLgNIKbVh83367HNSqqzAiauh2twmzfY-bq" alt="Cyclone Mandous To Cross Coast Near Chennai, Rescue Teams ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moderate to heavy rainfall is expected in Tamil Nadu as cyclonic storm &#39;Mandous&#39; over Bay of Bengal is likely to intensify into a severe cyclonic storm soon&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/cyclone-mandous-imd-issues-rain-wind-alert-for-tamil-nadu-andhra-pradesh-puducherry-101670527126969.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IMD issues rain, wind alert for Tamil Nadu, Andhra Pradesh ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThVoYtGr_1DscXpkMKR8NC5mU--0zZn8hVeQ42JRAm6UgByuVnPWVuBU5KWHq5TauTD3MRoY3n" alt="IMD issues rain, wind alert for Tamil Nadu, Andhra Pradesh ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cyclone will intensify into a severe cyclonic storm on Thursday night and Friday morning and will weaken into a cyclonic storm again by Friday evening&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/india/mandous-cyclone-storm-to-cross-coast-near-chennai-ndrf-teams-deployed-in-tamil-nadu-2546176.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mandous cyclone storm to cross coast near Chennai, NDRF teams ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyqxpShpJtceNs9oWS-h5USFycfDR_b7tpIhI8h_xIjU0JcSEX-GGOT-Sh0EHA-xfjolP2e6Sq" alt="Mandous cyclone storm to cross coast near Chennai, NDRF teams ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chennai: Heavy rainfall is expected in Tamil Nadu as cyclonic storm &#39;Mandous&#39; over Bay of Bengal intensified into a severe cyclonic storm and is predicted&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/cities/Visakhapatnam/alert-sounded-in-six-districts-of-andhra-pradesh-due-to-cyclone-mandous/article66240051.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alert sounded in six districts of Andhra Pradesh due to Cyclone ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTz299AbzWMrEH4CqJK8mP9ufOqXh9tsuzH89k_JrQkXHC0LfeSqBhRpqFOcn8bsxbV6ehITcl0" alt="Alert sounded in six districts of Andhra Pradesh due to Cyclone ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cyclone Mandous is likely cross the coast between Sriharikota in Tirupati district and Puducherry with a maximum sustained wind speed of 65-75 kmph on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/cyclone-mandous-moving-at-speed-of-12-kmph-heavy-rains-expected-in-these-states-11670505929635.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyclone Mandous moving at speed of 12 kmph, heavy rains ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSf9daPOiwm_h14BftCRSBhg193BlLcCnL64pibF0iPdUwnZbWb8fkqQMcxcAaEc7jLZwrWoTOf" alt="Cyclone Mandous moving at speed of 12 kmph, heavy rains ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IMD also issued a storm surge warning forecasting a storm surge of about 0.5 m height above the astronomical tide.</p></div>
            </div>
        </a>
        </Template></>;
}