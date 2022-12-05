import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Russian President Vladimir Putin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Russian President Vladimir Putin"/>
        <meta name="description" content="Trending News about Russian President Vladimir Putin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Russian President Vladimir Putin</h1>
            <Image width={800} height={500} src="https://image.cnbcfm.com/api/v1/image/107078393-1655823493476-gettyimages-1238175129-AFP_9Y362B.jpeg?v=1670159874&w=1920&h=1080" alt="Russian President Vladimir Putin"/>
            <h3>Recent News</h3>
            <a href='https://www.cnbc.com/2022/12/04/op-ed-authoritarian-rulers-suffered-new-setbacks-in-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Op-ed: Authoritarian rulers suffered new setbacks in 2022. Here&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmRJeFd8gRDTX4BZF4HU8_3Q63SuPMh3Eqz80tih8797JWF8LCcYLQ-pCh2qi_zOfzaHNJyXMQ" alt="Op-ed: Authoritarian rulers suffered new setbacks in 2022. Here&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This year has been a tough one for the world&#39;s worst authoritarians: Russian President Vladimir Putin, Chinese President Xi Jinping, and Iranian Supreme&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}