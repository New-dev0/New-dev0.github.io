import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andy Farrell</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Andy Farrell"/>
        <meta name="description" content="Trending News about Andy Farrell" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andy Farrell</h1>
            <Image width={800} height={500} src="https://img.fresherslive.com/latestnews/images/articles/origin/2022/12/08/who-are-andy-farrell-parents-where-is-andy-farrell-parents-from-what-is-andy-farrell-parents-nationality-6391c7d2f1424-1670498258.jpg" alt="Andy Farrell"/>
            <h3>Recent News</h3>
            <a href='https://latestnews.fresherslive.com/articles/who-are-andy-farrell-parents-where-is-andy-farrell-parents-from-what-is-andy-farrell-parents-nationality-1116751'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who are Andy Farrells Parents? Andy Farrell Biography, Parents ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6lbZoMQxNOa_DlCv6i1qgyukUToupjmYCzZNCNDrIJED-FKjbY3d0Ea21rCGU3twh3wa2Qv_S" alt="Who are Andy Farrells Parents? Andy Farrell Biography, Parents ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andy Farrell is an Rugby union player and a former coach born on 30 May 1975. Many people are eager to know their favorite personalities personal life, so Andy&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}