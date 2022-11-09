import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Breaking News</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Breaking News"/>
        <meta name="description" content="Trending News about Breaking News" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Breaking News</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/06/08/750x506/live-amarujala_1654670439.jpeg" alt="Breaking News"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/live/haryana/hr-latest-and-breaking-news-today-in-hindi-live-up-ke-taaja-samachar-9-november-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqkf_1fja1RIQ_v4lgCDHwgwF0zNRVbPJ4sRGOZpuaKpDSHprM7hbTDtEMKo-5GUhkR-YFiGy4" alt="HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HR News Today Live: हरियाणा ब्रेकिंग न्यूज़, पढ़ें 9 नवम्बर के मुख्य और त&nbsp;...</p></div>
            </div>
        </a><a href='https://timesofindia.indiatimes.com/india/breaking-news-live-updates-india-and-world-november-9/liveblog/95386896.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Breaking news live updates: Earthquake in Nepal, tremours felt in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_sjIepNg0UGhlfLXQnXiBWnon5kqrz2BMyhIKPKefgWk69QtPe2BTE4AeT3-_eFGYtX7HyC0X" alt="Breaking news live updates: Earthquake in Nepal, tremours felt in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stay here for real-time updates on breaking news from India and across the world that you can&#39;t miss:</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/live/jharkhand-breaking-news-live-updates-08-november-2022-tuesday-news-today-in-hindi-grj-smj-rgj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jharkhand Breaking News: पलामू में ट्रेन की चपेट में आने से एक व्यक्ति ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR849eyqiZTXim1iavEhGPeSlgshG8-d36X2GbloL7x3WcKx2CpAvAIaQubFTm9o7crRDDj1ySW" alt="Jharkhand Breaking News: पलामू में ट्रेन की चपेट में आने से एक व्यक्ति ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jharkhand Breaking News: पलामू में ट्रेन की चपेट में आने से एक व्यक्ति का पैर कटा, MMCH में भर्ती.</p></div>
            </div>
        </a>
        </Template></>;
}