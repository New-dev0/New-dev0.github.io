import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Uruguay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Uruguay"/>
        <meta name="description" content="Trending News about Uruguay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Uruguay</h1>
            <Image width={800} height={500} src="https://images.hindustantimes.com/img/2022/12/03/1600x900/uruguay_1670051459180_1670051510976_1670051510976.png" alt="Uruguay"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/sports/football/watch-uruguay-players-scuffle-with-referee-chase-him-to-the-tunnel-after-shocking-exit-from-fifa-world-cup-2022-101670050689617.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Uruguay players scuffle with referee, chase him to the tunnel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfXjmtV2bCAlIFPuJO9V6IzbEZLPnj7Atyw7NVmN_i-bpMiR1nJbljSxwWgruYT041ob7h7gIf" alt="Watch: Uruguay players scuffle with referee, chase him to the tunnel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguay won 2-0 against Ghana in their last group stage match on Friday but their shocking exit despite winning , didn&#39;t go down well with their players.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/fifa-world-cup/story/4823313/uruguay-beat-ghana-again-at-world-cup-but-suffer-early-exit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay beat Ghana again at World Cup but suffer early exit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvdACwxoMA8wNO0tQrfjPbyG0TJaIvf2trj37AscmZrJMBEy0ddCNWHte9-KN6qLO1gHLZ2YWS" alt="Uruguay beat Ghana again at World Cup but suffer early exit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AL WAKRAH, Qatar -- Luis Suarez thought the job was done. The veteran forward exited Uruguay&#39;s final group stage match with a 2-0 lead and received good&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/uruguay-players-lose-their-calm-after-world-cup-exit-as-they-chase-referee-down-the-tunnel-watch-video/articleshow/95947588.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay players lose their calm after World Cup exit as they chase ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3A4zc3D5srX1XyaycnBBHs1NagNSinAfawtVi9kpewG_i7QKdofQQXL1uvtfo16u8HFrlT80v" alt="Uruguay players lose their calm after World Cup exit as they chase ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uruguayan players chase the referee down the tunnel after a humiliating early exit from the 2022 FIFA World Cup.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/explained/the-hand-of-the-devil-and-why-the-ghana-uruguay-game-is-such-a-big-deal-8302414/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Hand of the Devil&#39; and why the Ghana-Uruguay game is such a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQPO266RpMbTeCGg-70xoEfzsKhFDoz3Hq-ThhYHp7HAez8uqbzUvtviAUwOHiW52pnVaBPUs7" alt="&#39;The Hand of the Devil&#39; and why the Ghana-Uruguay game is such a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Ghana and Uruguay face each other to decide who goes through to the next round of this World Cup, a look-back at what happened in 2010,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/fifa-2022/stunned-uruguay-win-but-dumped-out-of-world-cup-on-goals-scored-457317'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stunned Uruguay win but dumped out of World Cup on goals scored</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIC7vDjdtBD8Jb4hrVZggOTR3zc2lHjG1q_ysCGAAh4tfYkIZ6GWqyUbHjmE4lreFU3jpg1Uae" alt="Stunned Uruguay win but dumped out of World Cup on goals scored" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Giorgian de Arrascaeta netted twice in six minutes as a resurgent Uruguay beat Ghana 2-0 on Friday in a battle for their World Cup survival, only to crash&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/12/03/638b2c1622601d3e0f8b4607.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguay vs. Ghana fallout: Cavani and Gimenez to face punishment ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHDJ8vwud9VBbT2g06wedMQHEgeYM_ArCLVEa2u9ooZLjxP7s0spUFzFOpdixmJcaAP5rOXLv3" alt="Uruguay vs. Ghana fallout: Cavani and Gimenez to face punishment ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup group game between Uruguay and Ghana was far from settled after the final whistle. Following a decision to ignore a penalty appeal by referee&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}