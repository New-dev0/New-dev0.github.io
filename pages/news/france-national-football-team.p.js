import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France national Football team</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France national Football team"/>
        <meta name="description" content="Trending News about France national Football team" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France national Football team</h1>
            <Image width={800} height={500} src="https://assets.khelnow.com/news/uploads/2022/11/Most-Appearances-France-1024x614.png" alt="France national Football team"/>
            <h3>Recent News</h3>
            <a href='https://khelnow.com/football/2022-11-world-football-france-national-football-team-most-appearances-players-caps'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top 10 players with most appearances for France football team</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSR40TDQsgVK-5v62GYkpd4iiWch_ZJ4qKvfj8N6Mjze17M1nVSOWDqrvDgHKpDRPVvlroi5XHI" alt="Top 10 players with most appearances for France football team" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>However, some of its seasoned players, such as Hugo Lloris, Karim Benzema, and Antoine Griezmann, are just unbreakable. Over the years, these players have made&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}