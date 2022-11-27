import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sanju Samson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sanju Samson"/>
        <meta name="description" content="Trending News about Sanju Samson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sanju Samson</h1>
            <Image width={800} height={500} src="https://www.sakshi.com/sites/default/files/article_images/2022/11/26/sanju.jpg" alt="Sanju Samson"/>
            <h3>Recent News</h3>
            <a href='https://www.sakshi.com/telugu-news/sports/ipl-2023-mini-auction-sanju-samson-big-heart-comes-kunnummal-aid-1505222'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023: యువ బ్యాటర్‌ కోసం సంజూ శాంసన్‌ ప్లాన్‌! భారీ ధర పలికే అవకాశం?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSO-zrAr2wmeKMo7x-AJ7yPKThCEMN8rkGimcBcoQFLbcQ2jWcxnDQoHp5dKyQrYEsSh-BvyjMn" alt="IPL 2023: యువ బ్యాటర్‌ కోసం సంజూ శాంసన్‌ ప్లాన్‌! భారీ ధర పలికే అవకాశం?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023 Mini Auction: యువ బ్యాటర్‌ కోసం సంజూ శాంసన్‌ ప్లాన్‌! కేరళ ఆటగాడిపై రాజస్తాన్‌ కన్ను! 26 Nov,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}