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
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTM4WL7gyL5_ISEi_PBz4c0xYi40v3pO-hQrZ9tXjZcdmzKeATEuqGPxEhoI9VVTmTvm3_9FA-B" alt="Former Richmond Kicker Matt Turner helps Team USA move on to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turner, who now plays for English Premier League side Arsenal, got his start in professional soccer with the Richmond Kickers of USL League One while on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11483765/Matt-Turner-helps-16-bound-USA-post-multiple-shutouts-World-Cup-time-92-YEARS.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Turner helps last-16 bound USA post multiple shutouts at a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4iPgKDGR5nCV3ueEsPZwJ3TBNBcWvwYSfmaT6RNSDbKF_GDKeclLT8kALVsGOcXD6aJRsjEXR" alt="Matt Turner helps last-16 bound USA post multiple shutouts at a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turner has helped the USMNT make history in Qatar, as the team posted multiple clean sheets at a World Cup for the first time since 1930 - and the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.arsenal.com/news/turner-creates-history-usa-reach-knockout-stage'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turner creates history as USA reach knockout stage | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4x_wUlPiEHHZF8-vljQw4B5HEMTwri19VjYdNXyJRIa3L2S75HZ4jzI1WZ5Z7TxxikUpuYKFb" alt="Turner creates history as USA reach knockout stage | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Our shot-stopper has played a key role in helping his nation into the last-16 of the 2022 World Cup.</p></div>
            </div>
        </a><a href='https://985thesportshub.com/episodes/mike-riley-and-revs-editor-jeff-lemiuex-chat-world-cup-matt-turner-and-more/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mike Riley and Revs Editor Jeff Lemiuex chat World Cup, Matt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdp4N0KO0GAY5Tv2XQhag6n7kBeBmj-TG8soxtFqR2kFcKGmYJ7bQqCy6h7QLfxNtawzfkE2yn" alt="Mike Riley and Revs Editor Jeff Lemiuex chat World Cup, Matt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike “Sarge” Riley chats with Revolution Senior Staff Writer and Editor Jeff Lemieux discussing the United States Men&#39;s National Team&#39;s 1-0 win over Iran as&nbsp;...</p></div>
            </div>
        </a><a href='https://brooklyn.news12.com/fairfield-soccer-players-and-coaches-watch-former-teammate-play-against-iran'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fairfield soccer players and coaches watch former teammate play ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT74kJFA-9Q0DnS5a-kz32RpQ9yh32lcU3qNDRvDLL2pKJgN3N75QyA4C4gBsyXBl86PsbH4hWl" alt="Fairfield soccer players and coaches watch former teammate play ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USA starting goalkeeper Matt Turner graduated from Fairfield in 2017. Fairfield University&#39;s Lessing Field is where Turner built his college soccer chops before&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}