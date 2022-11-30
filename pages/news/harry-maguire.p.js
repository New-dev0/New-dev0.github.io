import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harry Maguire</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harry Maguire"/>
        <meta name="description" content="Trending News about Harry Maguire" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harry Maguire</h1>
            <Image width={800} height={500} src="https://i.ds.at/BQ6_5g/rs:fill:1200:600/plain/2022/11/29/harry.jpg" alt="Harry Maguire"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141293980/harry-maguire-ein-englisches-mobbing-opfer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Maguire, ein englisches Mobbing-Opfer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5kXXlwJF8d_fQEbflbZb-zjssRkfBtZ1Mc-lK1BeRnPt2S50NTMBye9gy9KJnBv2fXP54ZGBx" alt="Harry Maguire, ein englisches Mobbing-Opfer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Verteidiger symbolisierte einmal die Wiederauferstehung der Three Lions. Doch aus dem Spieler von Manchester United wurde ein Spottobjekt.</p></div>
            </div>
        </a>
        </Template></>;
}