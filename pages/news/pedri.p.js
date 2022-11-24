import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pedri</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pedri"/>
        <meta name="description" content="Trending News about Pedri" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pedri</h1>
            <Image width={800} height={500} src="https://e0.365dm.com/22/11/1600x900/skysports-football-world-cup_5976234.jpg?20221123205623" alt="Pedri"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/news/12098/12753821/pedri-and-gavi-evoke-memories-of-xavi-hernandez-and-andres-iniesta-in-spain-rout-world-cup-hits-and-misses'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedri and Gavi evoke memories of Xavi Hernandez and Andres ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRC7Xjqr8qHdh4PJrks3ixpnqOXywpKDW6ZdTO6JQBXX1noDHYQcqwm1Z42aVOJ7qjyEiJ8sAFu" alt="Pedri and Gavi evoke memories of Xavi Hernandez and Andres ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pedri and Gavi showed that Spains future is now as La Roja routed Costa Rica 7-0, while Luka Modrics influence showed signs of waning for Croatia against&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}