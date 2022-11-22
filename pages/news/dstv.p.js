import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DSTV</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DSTV"/>
        <meta name="description" content="Trending News about DSTV" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DSTV</h1>
            <Image width={800} height={500} src="https://thepaypers.com/images/social_media/mobile-superapp-integration_LI.png" alt="DSTV"/>
            <h3>Recent News</h3>
            <a href='https://thepaypers.com/mobile-payments/vodacom-tanzania-dstv-launch-mydstv-app-on-m-pesa--1259211'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vodacom Tanzania, DSTV launch MyDStv app on M-Pesa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_qD3aoTSvQttPHw41OP_Og6RYPYqc1qHSmfuf1o82AuFpJ1RB8eoXGXVjTnNzCLMW7yVtQc6o" alt="Vodacom Tanzania, DSTV launch MyDStv app on M-Pesa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vodacom Tanzania has partnered with DSTV Tanzania to enable DSTV customers to access the MyDStv app within the M-Pesa app.</p></div>
            </div>
        </a>
        </Template></>;
}