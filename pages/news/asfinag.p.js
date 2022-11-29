import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Asfinag</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Asfinag"/>
        <meta name="description" content="Trending News about Asfinag" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Asfinag</h1>
            <Image width={800} height={500} src="https://www.vol.at/2022/11/Design-ohne-Titel26-4-3-2932814021052-1402x1052.jpg" alt="Asfinag"/>
            <h3>Recent News</h3>
            <a href='https://www.vol.at/schneepfluge-und-salzlager-asfinag-gerustet-fur-winter/7759126'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schneepflüge und Salzlager: Asfinag gerüstet für Winter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOEST03n2KPbJpBoNf0o4SjGloC7jjT02-hkCOHl10_tcn6NY4Sq5A7NtLBUxhB9W1k5f_PF1i" alt="Schneepflüge und Salzlager: Asfinag gerüstet für Winter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Donnerstag ist der meteorologische Winteranfang. Erste Schneefälle gab es in Vorarlberg bereits. Die Asfinag sieht sich gut vorbereitet auf etwaige&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}