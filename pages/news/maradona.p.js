import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maradona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maradona"/>
        <meta name="description" content="Trending News about Maradona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maradona</h1>
            <Image width={800} height={500} src="https://azertag.az/files/2022/3/1200x630/16705912405362914010_1200x630.jpg" alt="Maradona"/>
            <h3>Recent News</h3>
            <a href='https://azertag.az/de/xeber/Argentinischer_Fubball_Weltmeister_von_1986_vergleicht_Messi_mit_Maradona-2403614'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentinischer Fußball-Weltmeister von 1986 vergleicht Messi mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSil5oAZ1ZkgMGDqKsf7aZZsDz_D0nQNZkeI5kxYjHuq0AAhIcEOVS6Yw15LYVNUNflOT1AYeVZ" alt="Argentinischer Fußball-Weltmeister von 1986 vergleicht Messi mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jorge Valdano, argentinischer Fußball-Weltmeister von 1986, hat mit großer Bewunderung von Lionel Messi und dessen Umgang mit der weltweiten Berühmtheit&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}