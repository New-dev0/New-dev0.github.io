import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Today</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Today"/>
        <meta name="description" content="Trending News about Today" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Today</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/06/08/750x506/live-amarujala_1654670439.jpeg" alt="Today"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/live/haryana/hr-latest-and-breaking-news-today-in-hindi-live-up-ke-taaja-samachar-9-november-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqkf_1fja1RIQ_v4lgCDHwgwF0zNRVbPJ4sRGOZpuaKpDSHprM7hbTDtEMKo-5GUhkR-YFiGy4" alt="HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य और त&nbsp;...</p></div>
            </div>
        </a><a href='https://in.investing.com/news/todays-most-important-initiations-432SI-3410834'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Today&#39;s most important initiations</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTs0VoViNbu4eLPebaR2gAsmR_A4B5x6tT09h016RFHwk3FRyneq5_mUZQFXwoh-i_wOgbkuZhc" alt="Today&#39;s most important initiations" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Davit Kirakosyan. Raymond James reinstated coverage on Duolingo Inc (NASDAQ:DUOL) with an Outperform rating and a price target of $111 ahead of the Q3&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}