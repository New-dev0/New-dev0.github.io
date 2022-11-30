import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harry Kane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harry Kane"/>
        <meta name="description" content="Trending News about Harry Kane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harry Kane</h1>
            <Image width={800} height={500} src="https://cdn.unitycms.io/images/CJ6NWdTwKXh8uQkzzWOaEH.jpg?op=focus&val=1200,675,754,701,0,195,506,367&sum=mZwan1xwDXQ" alt="Harry Kane"/>
            <h3>Recent News</h3>
            <a href='https://www.20min.ch/story/nur-ein-katar-spieler-schlechter-als-bale-kane-auf-den-spuren-von-beckham-238735833972'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alle Fakten zum WM-Spieltag: Gareth Bale versagt, Harry Kane wie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlMi4sA66jwz1EsQb1z26Kqofyr8kKP8RFJ174B97k30f-VIvHL8YLD_CWdZkr1j3PxTXtTqnP" alt="Alle Fakten zum WM-Spieltag: Gareth Bale versagt, Harry Kane wie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lange Durststrecke vorbei: Senegal wurde zum ersten afrikanischen Team, das bei einer Fifa-Weltmeisterschaft gegen ein südamerikanisches Team gewinnt,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}