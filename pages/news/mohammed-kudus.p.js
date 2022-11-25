import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mohammed Kudus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mohammed Kudus"/>
        <meta name="description" content="Trending News about Mohammed Kudus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mohammed Kudus</h1>
            <Image width={800} height={500} src="https://i2-prod.football.london/incoming/article25595066.ece/ALTERNATES/s1200/0_GettyImages-1443112675.jpg" alt="Mohammed Kudus"/>
            <h3>Recent News</h3>
            <a href='https://www.football.london/tottenham-hotspur-fc/players/mohammed-kudus-tottenham-dejan-kulusevski-25594977'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mohammed Kudus and the World Cup stars who can become new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDQPRwEEiL9pElG4EocFbDC7VazeXCQVOCWdaJXnz8V7CisfW8WAfqXygivHRkJk3e3zcxReD-" alt="Mohammed Kudus and the World Cup stars who can become new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here we take a look at seven players at the World Cup who could help Fabio Paratici solve Tottenham&#39;s Dejan Kulusevski dilemma.</p></div>
            </div>
        </a>
        </Template></>;
}