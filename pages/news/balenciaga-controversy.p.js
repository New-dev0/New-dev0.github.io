import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Balenciaga controversy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Balenciaga controversy"/>
        <meta name="description" content="Trending News about Balenciaga controversy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Balenciaga controversy</h1>
            <Image width={800} height={500} src="https://imagez.tmz.com/image/12/16by9/2022/11/26/124838206fc745d3b5fce83505048b89_xl.jpg" alt="Balenciaga controversy"/>
            <h3>Recent News</h3>
            <a href='https://www.tmz.com/2022/11/26/kanye-west-balenciaga-scandal-alex-jones-twitter-new-interview/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West Talks Balenciaga Scandal, Alex Jones in New Interview</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1eTonYKWNBx9mf0lgmLOEhturqVbSHYCsKdlLzWp62Dc_akeS0vbop2NkEVx2eUIlQotwEwDm" alt="Kanye West Talks Balenciaga Scandal, Alex Jones in New Interview" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kanye West says Alex Jones should be allowed back on Twitter because he&#39;s a Christian ... and America is a &quot;Christian country.&quot;</p></div>
            </div>
        </a>
        </Template></>;
}