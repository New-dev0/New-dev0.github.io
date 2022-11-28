import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dani Olmo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dani Olmo"/>
        <meta name="description" content="Trending News about Dani Olmo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dani Olmo</h1>
            <Image width={800} height={500} src="https://img.bundesliga.com/tachyon/sites/2/2022/11/tsg_rbl_2223_olmo_nkunku_1920.jpg?crop=0px,0px,1920px,1080px&fit=533,300" alt="Dani Olmo"/>
            <h3>Recent News</h3>
            <a href='https://www.bundesliga.com/en/bundesliga/news/how-rb-leipzig-will-replace-injured-christopher-nkunku-dani-olmo-szoboszlai-21994'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RB Leipzig pair Dani Olmo and Dominik Szoboszlai set to soften the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsLt06cH-xkPl5oF1q7E1HehJH3yQLqbzbWO91lLKrabk8UQQEAWXFdzdaR7Md4fQ7dShyVEz9" alt="RB Leipzig pair Dani Olmo and Dominik Szoboszlai set to soften the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christopher Nkunku&#39;s knee injury was not just a setback for France and their bid to defend their World Cup title, but also a big blow for RB Leipzig.</p></div>
            </div>
        </a>
        </Template></>;
}