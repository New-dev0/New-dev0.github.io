import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pulisic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pulisic"/>
        <meta name="description" content="Trending News about Pulisic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pulisic</h1>
            <Image width={800} height={500} src="https://i3-img.p7s1.io/pis/ezone/5fa9qgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXar255psZunNxEf6nIbS_ptHLX5IFtTKiVdkmIxzXpYobtJ3eJld165bbiDPrKgf3XN8Vt3dp-1o4Cfgc93GY7ez2dl9_t0-_mTNcyK9xibDnkj2Q1MJH-TEf2tbz8lrgoqGXQV6V82HVmI0_F03jZwFrKCkGPtIAtRAwOQr-eHAp5P0ZpaF19pb9WKqeMnB0Y-nTtAd53b4-6KYCknh8pLLNG_EKAZqE1uetNjboZ5anTeMR8LV8FAs1-KFDgNNoOz5yvcYTInONqv91A/profile:ezone-teaser620x348?source" alt="Pulisic"/>
            <h3>Recent News</h3>
            <a href='https://www.ran.de/fussball/weltmeisterschaft/bildergalerien/wm-2022-england-usa-messi-maguire-lahme-loewen-und-x-faktor-pulisic'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weltmeisterschaft - WM 2022: England - USA: Messi Maguire, lahme ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7W1p-cQ1a5zibnnTor3JWUvFZnCU-U7NEqdbcUnH5DcqZUAh6i3MSKa94ca4Icja6zYMPyZ5X" alt="Weltmeisterschaft - WM 2022: England - USA: Messi Maguire, lahme ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England ein Favorit auf den Titel? Und die USA nicht reif für die K.o.-Runde? Das direkte Duell brachte keine Tore, aber einige Erkenntnisse. ran nennt sie.</p></div>
            </div>
        </a>
        </Template></>;
}