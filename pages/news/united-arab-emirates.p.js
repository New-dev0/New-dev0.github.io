import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>United arab emirates</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,United arab emirates"/>
        <meta name="description" content="Trending News about United arab emirates" /></Head><Template>
            <h1 style={{fontSize: "30"}}>United arab emirates</h1>
            <Image width={800} height={500} src="" alt="United arab emirates"/>
            <h3>Recent News</h3>
            <a href='https://www.lexology.com/library/detail.aspx?g=4753f45f-c0ed-4f73-be92-3f3b99346211'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Evidential Law- United Arab Emirates</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Evidential Law- United Arab Emirates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1. The Federal Law No. 10 of 1992 which lays down provisions vis-a-vis evidence in Civil and Commercial Transactions. 2. Federal Decree by Law No. 46 of 2021 on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}