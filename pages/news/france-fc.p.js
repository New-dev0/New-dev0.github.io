import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France fc</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France fc"/>
        <meta name="description" content="Trending News about France fc" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France fc</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTkzODg3NTIyMDgwNjk1NzQ3/dcovfrance_notext.jpg" alt="France fc"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/soccer/2022/11/22/france-world-cup-2022-laicite-daily-cover'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;When You Win, You&#39;re a French Player. When You Lose, You&#39;re Not.&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTISDDCh_H-U1Dojht07YHsypx1xRMk3boVGT61V_1U72ycWaHf-fmpuphYcYLuXp8W6HcmbBbP" alt="&#39;When You Win, You&#39;re a French Player. When You Lose, You&#39;re Not.&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In her search for a more inclusive environment, Houalef eventually discovered Les Hijabeuses—from “hijab” and “footballeuses,” or female soccer players—an&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}