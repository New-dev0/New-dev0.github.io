import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nigeria FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nigeria FC"/>
        <meta name="description" content="Trending News about Nigeria FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nigeria FC</h1>
            <Image width={800} height={500} src="https://www.voice-online.co.uk/wp-content/uploads/2022/11/unnamed-2-1.jpg" alt="Nigeria FC"/>
            <h3>Recent News</h3>
            <a href='https://www.voice-online.co.uk/sport/football/2022/11/17/power-rangers-fc-producing-young-superheroes-on-the-football-fields-of-nigeria/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Power Rangers FC producing young superheroes on the football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFsLHRVkpEL4NewIiOgF1YLf8Eh1qItz5nKc1DUD07qm5BoONDNZ7cc1zZT_pUZeOV-vkdaz86" alt="Power Rangers FC producing young superheroes on the football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VISIONARY FOOTBALL lover Ajayi Olumide is the founder and manager of Power Rangers FC, a Nigerian community team looking to make a difference.</p></div>
            </div>
        </a>
        </Template></>;
}