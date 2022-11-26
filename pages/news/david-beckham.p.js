import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DAVID BECKHAM</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DAVID BECKHAM"/>
        <meta name="description" content="Trending News about DAVID BECKHAM" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DAVID BECKHAM</h1>
            <Image width={800} height={500} src="" alt="DAVID BECKHAM"/>
            <h3>Recent News</h3>
            <a href='https://www.acmilan.com/en/news/articles/internationals/2022-11-25/world-cup-rossoneri-david-beckham'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WORLD CUP ROSSONERI: DAVID BECKHAM</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJfa8k8xHiIMJq-5rD47O87X4W9nm5Gw7K5SH4hvLgCBxXJ3goZJDA_ZRuCI2n8UbJ-MJfX_Fk" alt="WORLD CUP ROSSONERI: DAVID BECKHAM" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of England v USA: let&#39;s go back to 1998, with David the star man against Colombia.</p></div>
            </div>
        </a>
        </Template></>;
}