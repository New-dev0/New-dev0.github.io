import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pique</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pique"/>
        <meta name="description" content="Trending News about Pique" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pique</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1103%2Fr1085551_1296x729_16%2D9.jpg" alt="Pique"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/barcelona-espbarcelona/story/4789910/barcelonas-gerard-pique-announces-shock-retirement-will-play-last-game-saturday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona&#39;s Gerard Pique announces sudden retirement</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTYpX9-WliRMuQ-7lTJn_71m0iKU8nH0TL-T5purjGSq1CoIebi4ajnmuHw0CjXrOktua3xyAt" alt="Barcelona&#39;s Gerard Pique announces sudden retirement" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona defender Gerard Pique has announced that he will retire from football when the Spanish league breaks for the World Cup this month.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/football/barcelonas-pique-to-retire-will-play-last-home-game-on-saturday/article66093171.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona&#39;s Pique to retire, will play last home game on November 5</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGwwMTTSsHxhxgSyDCOUmfPVJVcIKOOUjY8rxNcbJIQP5c_GnwOGGZnU-esDu-82ZCKNFGg2jX" alt="Barcelona&#39;s Pique to retire, will play last home game on November 5" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saturday&#39;s league clash with Almeria will be Gerard Pique&#39;s last at Barcelona&#39;s Camp Nou after 14 years with the Catalan giants.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/pique-announces-he-will-retire-from-football-after-barcelona-s-next-la-liga-game/blt0ccb2aed507fe9c9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pique announces he will retire from football after Barcelona&#39;s next ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRppP9nyN6pZLMmly1R-r23wHosRvCvIwM-jZCNIlDjIio7Q3RBkIxzrG9T4jn4_nVkRxzIXcXl" alt="Pique announces he will retire from football after Barcelona&#39;s next ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gerard Pique has announced he is retiring from football and Saturday&#39;s La Liga match against Almeria willl be his last.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/soccer-barcelonas-pique-to-retire-will-play-last-home-game-on-saturday-531022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelonas Pique to retire, will play last home game on Saturday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWfHTz9s2CKi8RYxsFn9JBfgVixM6r3eC7BRd7_6LnNpbtR9pepPJcyT-1qc4hmc3-BUFduhTz" alt="Barcelonas Pique to retire, will play last home game on Saturday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona defender Gerard Pique called time on his glittering career on Thursday, saying he will retire from football when LaLiga breaks for the World Cup&nbsp;...</p></div>
            </div>
        </a><a href='https://playingfor90.com/2022/11/03/barcelona-gerard-pique-set-retire/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona&#39;s Gerard Pique set to retire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9SCJ5eZK1M3so8E0m_gojmjNrMMan3-eFndjThsg04z98q72eqcn5C1Rtrz_L_aqZjYb5McmM" alt="Barcelona&#39;s Gerard Pique set to retire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona center back Gerard Pique has announced his retirement. The Catalan is set to play his final game at the Camp Nou against Almeria.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/barcelona-star-gerard-pique-announces-retirement-will-play-last-home-game-against-almeria-this-week-101667498656263.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona&#39;s Gerard Pique announces retirement, to play last home ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPnRCo4igKphPlTnTVUADPByayL1fefW8JbtjcJkEzi760-UJTD8EnIdeGBZ-tCG54hiDNQgpc" alt="Barcelona&#39;s Gerard Pique announces retirement, to play last home ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gerard Pique will play his final game at Camp Nou this week against Almeria. | Football News.</p></div>
            </div>
        </a>
        </Template></>;
}