import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Squid Game</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Squid Game"/>
        <meta name="description" content="Trending News about Squid Game" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Squid Game</h1>
            <Image width={800} height={500} src="https://www.cheatsheet.com/wp-content/uploads/2022/11/Wi-Ha-joon-and-Lee-Jung-jae-in-Squid-Game-K-drama.jpg?w=1200" alt="Squid Game"/>
            <h3>Recent News</h3>
            <a href='https://www.cheatsheet.com/entertainment/squid-game-season-2-wi-ha-joon-teases-may-or-may-not-meet-director.html/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Squid Game&#39; Season 2: Wi Ha-joon Teases He May or May Not ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTykUpmzYKc6pGnExJIF9JmpqkmpH2pSM93sb0pju5vYyGIM4cttUY7l8IvQxUZZYBFxqjmlA9d" alt="&#39;Squid Game&#39; Season 2: Wi Ha-joon Teases He May or May Not ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Director Hwang Dong-hyuk is in the process of creating the script and storyline for the new installment. He has previously revealed that the K-drama will&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}