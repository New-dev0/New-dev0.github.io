import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Game</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Game"/>
        <meta name="description" content="Trending News about Game" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Game</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/1c3bb9448ffda79a58d8f21896c0da87a491cfaf/0_9_2480_1488/master/2480.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=82b43643388f13d74332b1412d742591" alt="Game"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/games/2022/nov/25/history-pong-video-game-atari-nolan-bushnell-al-alcorn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;No one had seen anything like it&#39;: how video game Pong changed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5WlzMz4q61HEkbI79CLvVtrrt0mUIWJr4a3R3vMloJF8LwOuSMT0V6A-TqFeU36RQHvtE5dob" alt="&#39;No one had seen anything like it&#39;: how video game Pong changed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following his success with early arcade game Computer Space, Atari founder Nolan Bushnell tricked 24-year-old computer engineer Al Alcorn into creating Pong. “&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}