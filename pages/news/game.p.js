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
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/a937d08808ea5168ec076acfd190d5da02d21bad/0_0_1800_1080/master/1800..jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=962b88614721d54c80db7aaebce83e86" alt="Game"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/games/2022/nov/25/i-didnt-get-my-sons-favourite-video-game-but-it-got-me'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I didn&#39;t get my son&#39;s favourite video game – but it got me</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRrQUPg6jptop3lcIZFTVRi48gyxY_Cb4AckKG2HR9jjznru8K9Vy7wL3GYF_S66SuxtRS9iKd" alt="I didn&#39;t get my son&#39;s favourite video game – but it got me" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dominik Diamond desperately wanted to like Outer Wilds so he wouldn&#39;t disappoint my son. But the profound joy of gaming provides a universal bond,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/games/2022/nov/25/history-pong-video-game-atari-nolan-bushnell-al-alcorn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;No one had seen anything like it&#39;: how video game Pong changed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5WlzMz4q61HEkbI79CLvVtrrt0mUIWJr4a3R3vMloJF8LwOuSMT0V6A-TqFeU36RQHvtE5dob" alt="&#39;No one had seen anything like it&#39;: how video game Pong changed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following his success with early arcade game Computer Space, Atari founder Nolan Bushnell tricked 24-year-old computer engineer Al Alcorn into creating Pong. “&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}