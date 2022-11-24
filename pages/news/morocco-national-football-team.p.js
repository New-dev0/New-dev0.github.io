import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Morocco national football team</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Morocco national football team"/>
        <meta name="description" content="Trending News about Morocco national football team" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Morocco national football team</h1>
            <Image width={800} height={500} src="https://netstorage-sportsbrief.akamaized.net/images/bb2d380fdba801d3.jpg" alt="Morocco national football team"/>
            <h3>Recent News</h3>
            <a href='https://sportsbrief.com/facts/teams/28332-morocco-world-cup-2022-squad-left-moroccos-world-cup-squad/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco World Cup 2022 squad: Who was left out of Morocco&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYm9RAYF-o69f4lD2lQbxmiCWa5-B38mKtmQIVjX-ytv52uIjsZH5vt89Sy3X28fzdye8_yttN" alt="Morocco World Cup 2022 squad: Who was left out of Morocco&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsBrief.com News ☆ The Atlas Lions are representing Africa in the most prestigious football tournament, World Cup 2022. Find out who was left out of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}