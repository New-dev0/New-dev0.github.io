import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BYD</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BYD"/>
        <meta name="description" content="Trending News about BYD" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BYD</h1>
            <Image width={800} height={500} src="https://www.finanztrends.de/wp-content/uploads/2022/12/business_newspaper6.jpg" alt="BYD"/>
            <h3>Recent News</h3>
            <a href='https://www.finanztrends.de/barrons-top-wochenend-aktienpicks-byd-coinbase-doordash-warum-musk-held-sein-wuerde/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barron&#39;s Top-Wochenend-Aktienpicks: BYD, Coinbase, DoorDash ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1OOpUP6t5GIrdsXSJIUF1AiSL3dAk7AeDIArfb-3fUXBaoPWhqWN6RtRzp4g-ZYNLc0h0UOpe" alt="Barron&#39;s Top-Wochenend-Aktienpicks: BYD, Coinbase, DoorDash ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tesla wird Toyota in einem wichtigeren Rennen überholen; Musk soll Twitter-Account verbieten. In “A Big Chill Is Here for the Housing Market. Next Year Could&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}