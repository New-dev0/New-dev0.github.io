import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/ekqi23/article65973141.ece/alternates/LANDSCAPE_615/image%20-%202022-10-05T212027.978.jpg" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/other-sports/indian-sports-news-wrap/article65972311.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indian sports news wrap, October 5</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuY9mHnrIz_9IG4katzhskVVE-L1xiGK1gXHMzA1aLxHFkeW5yZd5Xfz0vluwe2AzCCPIa9AmI" alt="Indian sports news wrap, October 5" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ramkumar goes down fighting in Tokyo $2,108,110 ATP tennis tournament. Qualifier Ramkumar Ramanathan was edged out 6-4, 3-6, 7-6(1) by Rio Noguchi of Japan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/uttar-pradesh/noida-ncr-noida-news-more-than-40-thousand-investors-of-sports-city-can-get-relief-23120171.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Noida Sports City: स्पोर्ट्स सिटी के 40 हजार से अधिक निवेशकों को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS43hSnueTVhVW75Ph_9LRTY9WPaFXxBqM6DDzu1aPgqCB_Zb-tDg_A1RbwBrQuKeveNaiCkmj-" alt="Noida Sports City: स्पोर्ट्स सिटी के 40 हजार से अधिक निवेशकों को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>सेक्टर-78, 79, 101, 150, 152 में चार बिल्डरों को 33,30,500 वर्ग मीटर में जमीन आवंटित की गई। इसमें 360&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haribhoomi.com/local/uttar-pradesh/more-than-40-thousand-investors-of-noida-sports-city-can-get-relief-till-diwali-481133'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Noida: नोएडा स्पोर्ट्स सिटी में फंसे 40 हजार परिवारों के लिए बड़ी खबर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTI5XKtromrxxxydIbS8x-DV7b3DPbgEdGNZYzFaoeV4f0drRdPxHlKM7EK72eKQ-_91uqY336B" alt="Noida: नोएडा स्पोर्ट्स सिटी में फंसे 40 हजार परिवारों के लिए बड़ी खबर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>नोएडा प्राधिकरण ने खेलों को आगे बढ़ाने के लिए सेक्टर-150 में स्पोर्ट्स सिटी विकसित करने&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}