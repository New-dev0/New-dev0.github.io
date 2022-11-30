import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matt Turner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matt Turner"/>
        <meta name="description" content="Trending News about Matt Turner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matt Turner</h1>
            <Image width={800} height={500} src="https://images.wsj.net/im-675479/social" alt="Matt Turner"/>
            <h3>Recent News</h3>
            <a href='https://www.wsj.com/livecoverage/fifa-world-cup-2022-usa-iran/card/how-america-s-goalkeeper-turned-it-around-after-an-epic-blunder-etOrLoAkDWuRWmk6RPcA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USA Vs Iran 1-0 Live: World Cup 2022 as USA Wins, Will Take on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSm2tGK3tpNiLemsqd06oec7uiUrQ1d2z0jhUXAHX7MiD4_MuVUPBVl-S-eB8fAs-kj4JWkv2x" alt="USA Vs Iran 1-0 Live: World Cup 2022 as USA Wins, Will Take on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There are a couple surprising things about U.S. goalkeeper Matt Turner. The first is that he played at a small Jesuit college, Fairfield University,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wric.com/sports/former-richmond-kicker-matt-turner-helps-team-usa-move-on-to-round-of-16/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Richmond Kicker Matt Turner helps Team USA move on to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQiDAMKM50T_DUe_ThFLPYveRFCYZMjXqmrmRwzej4QoZgAHtNTYG9m2qUbP6WaJImDnBLWXrRn" alt="Former Richmond Kicker Matt Turner helps Team USA move on to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turner, who now plays for English Premier League side Arsenal, got his start in professional soccer with the Richmond Kickers of USL League One while on&nbsp;...</p></div>
            </div>
        </a><a href='https://bronx.news12.com/fairfield-soccer-players-and-coaches-watch-former-teammate-play-against-iran'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fairfield soccer players and coaches watch former teammate play ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT74kJFA-9Q0DnS5a-kz32RpQ9yh32lcU3qNDRvDLL2pKJgN3N75QyA4C4gBsyXBl86PsbH4hWl" alt="Fairfield soccer players and coaches watch former teammate play ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USA starting goalkeeper Matt Turner graduated from Fairfield in 2017. Fairfield University&#39;s Lessing Field is where Turner built his college soccer chops before&nbsp;...</p></div>
            </div>
        </a><a href='https://dailyvoice.com/connecticut/fairfield/sports/former-fairfield-university-standout-goalie-shuts-out-iran-as-team-usa-advances-in-world-cup/850449/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Fairfield University Standout Goalie Shuts Out Iran As Team ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbFiVPXWkMeFiCiBsGQI7c1L4Ze35xDbn42icZNwmGwalFR3aUo-DORqzDVnIUQdU6Uc_WRwrU" alt="Former Fairfield University Standout Goalie Shuts Out Iran As Team ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team USA is advancing in the World Cup after its dramatic win against Iran, in large part thanks to its goalkeeper, who played collegiate soccer in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}