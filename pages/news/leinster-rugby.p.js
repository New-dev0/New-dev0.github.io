import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leinster rugby</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leinster rugby"/>
        <meta name="description" content="Trending News about Leinster rugby" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leinster rugby</h1>
            <Image width={800} height={500} src="" alt="Leinster rugby"/>
            <h3>Recent News</h3>
            <a href='https://carlow-nationalist.ie/2022/11/18/leinster-rugby-visit-tullow-rfc/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leinster Rugby visit Tullow RFC</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Leinster Rugby visit Tullow RFC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LAST week, the Leinster rugby team trained at Blackgates the home ground of Tullow Rugby Club. It was a special occasion. One that the hundreds of children&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}