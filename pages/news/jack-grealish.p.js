import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jack Grealish</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jack Grealish"/>
        <meta name="description" content="Trending News about Jack Grealish" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jack Grealish</h1>
            <Image width={800} height={500} src="https://i2-prod.dailystar.co.uk/incoming/article28650984.ece/ALTERNATES/s1200/0_GREALISH.jpg" alt="Jack Grealish"/>
            <h3>Recent News</h3>
            <a href='https://www.dailystar.co.uk/sport/football/jack-grealish-waistcoat-world-cup-28650966'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jack Grealish mortified by dad&#39;s &#39;market&#39; waistcoat but he won&#39;t ditch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8w7SY5NmSdqFn-fiCx0PS9mk2HF2N0L1cWHaB2ERqQDz8azR4cEorw30nsVRYhZHGyuvdvEBq" alt="Jack Grealish mortified by dad&#39;s &#39;market&#39; waistcoat but he won&#39;t ditch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jack Grealish has pleaded with his dad to drop the Union Jack waistcoat - but Kevin thinks it will take England all the way to the World Cup final later&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}