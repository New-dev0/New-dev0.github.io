import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup 2023</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup 2023"/>
        <meta name="description" content="Trending News about World Cup 2023" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup 2023</h1>
            <Image width={800} height={500} src="https://static-ai.asianetnews.com/images/01ghv1naz7m6f5zc42hh596se8/world-cup2023_1200x630xt.jpg" alt="World Cup 2023"/>
            <h3>Recent News</h3>
            <a href='https://hindi.asianetnews.com/cricket/icc-mens-cricket-world-cup-2023-in-india-know-cities-name-where-match-will-be-played-mda-rlc7wg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC World Cup 2023: पहली बार भारत अकेले करेगा मेजबानी, इन 10 शहरों ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0OyJu5SsNqJV3k-4A0DzK9cZSkQO8H_a4ko7adDQ3sBuxBdd3NJ8MLrebfZmIGcUHQv__T_Pw" alt="ICC World Cup 2023: पहली बार भारत अकेले करेगा मेजबानी, इन 10 शहरों ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टी20 विश्वकप के बाद अगले साल वनडे क्रिकेट वर्ल्डकप भी खेला जाएगा। भारत को वनडे विश्वकप&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}