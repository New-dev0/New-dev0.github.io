import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Oritsejafor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Oritsejafor"/>
        <meta name="description" content="Trending News about Oritsejafor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Oritsejafor</h1>
            <Image width={800} height={500} src="https://thewillnigeria.com/news/wp-content/uploads/2022/12/ayo-oritsejafor-wife.jpg" alt="Oritsejafor"/>
            <h3>Recent News</h3>
            <a href='https://thewillnigeria.com/news/ex-can-president-oritsejafors-marriage-crashes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-CAN President Oritsejafor&#39;s Marriage Crashes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWeQIYplruz3Q7-vipvYz8VqOw5bS05y3IswHXz7F2fXJK2S3T0iBJCxkcMBlfvi0iyjpuhLIJ" alt="Ex-CAN President Oritsejafor&#39;s Marriage Crashes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 25-year-old marriage of Ayodele Oritsejafor, a former president of the Christian Association of Nigeria, with his wife Helen, has shockingly collapsed.</p></div>
            </div>
        </a><a href='https://pmnewsnigeria.com/2022/12/08/ex-can-president-ayo-oritsejafors-marriage-crashes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-CAN President, Ayo Oritsejafor&#39;s marriage crashes - P.M. News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTrEJ5h6hbClbDDTiCQMq_lqfL9He0cT282EIsiQIQZwyV4IsHilQKfGTcR6iHhtxXI2kC8mL9R" alt="Ex-CAN President, Ayo Oritsejafor&#39;s marriage crashes - P.M. News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former President of CAN, Pastor Ayo Oritsejafor&#39;s 25-year-old marriage to his wife Ufuoma Bernard, Helen, has reportedly crashed.</p></div>
            </div>
        </a><a href='https://infoguidenigeria.com/ex-can-president-pastor-ayo-oritsejafor-divorces-wife-after-25-years-of-marriage-over-infidelity/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex CAN president Pastor Ayo Oritsejafor divorces wife after 25 years ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmlSeGMl7jX7e4hDkptnm89y-A_P86_Z2mPIj68_RCiSnsNfvpwgW7Kj0AogJDgtYaXKwxWkAt" alt="Ex CAN president Pastor Ayo Oritsejafor divorces wife after 25 years ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ayo Oritsejafor, the former president of the Christians Association of Nigeria (CAN), and Helen, his wife of 25 years, have reportedly divorced.</p></div>
            </div>
        </a><a href='https://ibrandtv.com/pastor-ayo-oritsejafor-wife-allegedly-path-ways-after-25-years/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pastor Ayo Oritsejafor, Wife Allegedly Path Ways After 25 Years ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8m9cmKF6tW55Q3YGdYAlf456w7Plt_rcHmNRqqt7bQBunUIDcfVyFfTVK8DZazyuTzQhiGcGx" alt="Pastor Ayo Oritsejafor, Wife Allegedly Path Ways After 25 Years ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former president of the Christian Association of Nigeria (CAN) Ayo Oritsejafor and his wife, Helen have allegedly separated after 25 years of been&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mojidelano.com/2022/12/pastor-ayo-oristejafor-wife-allegedly-part-ways-after-25-years-of-marriage/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pastor Ayo Oristejafor, Wife Allegedly Part Ways After 25 Years Of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR2z2pLZqbb1iGQjMBi9AFItpWFz8imBb78yzMxCGwquYQKHZh35aq7RPbs5vm0HJCfgZvPetm0" alt="Pastor Ayo Oristejafor, Wife Allegedly Part Ways After 25 Years Of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The marriage of the former president of the Christian Association of Nigeria (CAN), Pastor Ayo Oritsejafor and his wife, Helen has reportedly.</p></div>
            </div>
        </a>
        </Template></>;
}