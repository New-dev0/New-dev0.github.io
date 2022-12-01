import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gary Lineker</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gary Lineker"/>
        <meta name="description" content="Trending News about Gary Lineker" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gary Lineker</h1>
            <Image width={800} height={500} src="https://cdn.images.express.co.uk/img/dynamic/67/1200x712/4432181.jpg?r=1669836959556" alt="Gary Lineker"/>
            <h3>Recent News</h3>
            <a href='https://www.express.co.uk/sport/football/1703732/World-Cup-Gary-Lineker-BBC-birthday-cake-Alan-Shearer-Argentina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alan Shearer brutally mocks Gary Lineker twice as he presents ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQb_7ip2wVZWKCJG0IFkCq9TTbF8L9SWgDhsTRnPSa2RkkLBwbkzbizdsnKXULe1FdCIEl_dyg" alt="Alan Shearer brutally mocks Gary Lineker twice as he presents ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gary Lineker was presented with a birthday cake live on air at the World Cup.</p></div>
            </div>
        </a><a href='https://www.lcfc.com/news/2920858/leicester-city-in-100-players-gary-lineker'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City In 100 Players: Gary Lineker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGFZREyHhqoXoxitbtQkmh9nC2hYengQe0AO91t3rDmO3h8iYG9-zg4u7-obfx9tnT30Plvw2h" alt="Leicester City In 100 Players: Gary Lineker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Club Historian John Hutchinson&#39;s series reviewing the careers of the most outstanding players to represent the Club continues with Gary Lineker,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}