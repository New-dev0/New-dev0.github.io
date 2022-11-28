import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Croatia FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Croatia FC"/>
        <meta name="description" content="Trending News about Croatia FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Croatia FC</h1>
            <Image width={800} height={500} src="" alt="Croatia FC"/>
            <h3>Recent News</h3>
            <a href='https://football-italia.net/why-serie-a-fans-remember-croatia-world-cup-star-livaja/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Serie A fans remember Croatia World Cup star Livaja - Football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTn8RX7Lw2cOraYDNaECqO7iPh9jDjDguEzVGOMJEV81P8197V-0X4jG6zLvmjfu7ztbiPs0RAX" alt="Why Serie A fans remember Croatia World Cup star Livaja - Football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marko Livaja scored in Croatia&#39;s World Cup victory over Canada, but Serie A fans may well remember him as the bad boy of the Inter academy who punched an.</p></div>
            </div>
        </a>
        </Template></>;
}