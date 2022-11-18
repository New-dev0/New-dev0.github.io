import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Roisin Ingle</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Roisin Ingle"/>
        <meta name="description" content="Trending News about Roisin Ingle" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Roisin Ingle</h1>
            <Image width={800} height={500} src="" alt="Roisin Ingle"/>
            <h3>Recent News</h3>
            <a href='https://www.irishtimes.com/opinion/letters/2022/11/18/roisin-ingle-and-blackrock-college/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Róisín Ingle and Blackrock College</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Róisín Ingle and Blackrock College" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A chara, – Róisín Ingle clearly intended to remind readers that the horrors of institutional abuse in Ireland were not limited to correctional schools or&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}