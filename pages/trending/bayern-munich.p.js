import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bayern Munich</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bayern Munich"/>
        <meta name="description" content="Trending News about Bayern Munich" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bayern Munich</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/K8pijRgsn6mk4gTKS5n1wYXrN0g=/0x0:6151x3220/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24067054/1425771686.jpg" alt="Bayern Munich"/>
            <h3>Recent News</h3>
            <a href='https://www.bavarianfootballworks.com/2022/10/1/23379845/alexander-nubel-bayern-munich-manuel-neuer-as-monaco-transfer-salihamidzic-nagelsmann-brazzo-muller'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alexander Nübel reiterates that he won&#39;t return to Bayern Munich if ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT63VdxTpkqtrb5JQB-2GitLcHcTko9iVxgYvyr-ezmudTLG0fG4jtuuEj2klkh7fGaI-YM4ozh" alt="Alexander Nübel reiterates that he won&#39;t return to Bayern Munich if ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Would he consider a return to Bavaria? Not if Manuel Neuer is there the starter with Bayern Munich. Nübel does not dislike Neuer — quite the contrary actually —&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report/_/gameId/638507'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich vs. Bayer Leverkusen - Football Match Report ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmpXYMvyr3KRII3lAYMrDjAUzu-0cm38aXdk8L6XDQQbh5d9_tRdhYDjYdMuoSOwszQy8eJvWq" alt="Bayern Munich vs. Bayer Leverkusen - Football Match Report ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Bayern Munich vs. Bayer Leverkusen 2022-23 German Bundesliga football match.</p></div>
            </div>
        </a><a href='https://www.bavarianfootballworks.com/2022/10/1/23381409/bayern-munich-bayer-leverkusen-bundesliga-man-buns-sabitzer-leroy-sane-gnabry-haaland-bale-van-dijk'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It&#39;s Man Bun Mania at Bayern Munich</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQplcnZq8cKzP3H26g3y2kCCQDXLvwXx3r6azqM_I0BKo9ixfsusBlaSjv5JSn8CD59_Q0DDnsO" alt="It&#39;s Man Bun Mania at Bayern Munich" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marcel Sabitzer, then Leroy Sané, now Serge Gnabry: man buns are all the rage in Bavaria with the German Rekordmeister. Find out why and what it all means.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/sports/football/superb-jamal-musiala-guides-bayern-munich-to-brutal-win-over-bayer-leverkusen-article-94573989'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Superb Jamal Musiala guides Bayern Munich to &#39;brutal&#39; win over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiBucAgYFuoX_uzkJhWvBusTqtRqJXkgTwZuVqexhylIIZwX99ZPGjkE-KHuvO5Kv_oXJjfZTq" alt="Superb Jamal Musiala guides Bayern Munich to &#39;brutal&#39; win over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A masterclass from Jamal Musiala, as well as a first goal in five games for Sadio Mane, helped Bayern Munich thump hapless Bayer Leverkusen 4-0 at home on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/jamal-musiala-sparkles-as-bayern-munich-crush-bayer-leverkusen-4-0-to-snap-winless-run-101664590192442.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musiala sparkles as Bayern crush Leverkusen 4-0 to snap winless run</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSy0pk-LkRNHx1WFEwkqJP1WoBMpxkv0BZOgg6x6o3dZUQKCPxQJ7J1vDc1lVEowitiyuf5LP9w" alt="Musiala sparkles as Bayern crush Leverkusen 4-0 to snap winless run" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamal Musiala scored once and set up two more goals as champions Bayern Munich cruised past Bayer Leverkusen 4-0 on Friday to snap a four-game winless run&nbsp;...</p></div>
            </div>
        </a><a href='https://www.insidesport.in/bayern-munich-vs-viktoria-plzen-live-bayern-munich-aim-for-hat-trick-of-wins-against-viktoria-plzen-check-team-news-injuries-suspensions-live-telecast-starting-xi-predictions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich vs Viktoria Plzen LIVE: Bayern Munich AIM for HAT ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRgMfDyNWsq8M5u3-TSvbZ0n4TSF2q2fJI-wQdnHH-PQI70R8xT9eCoy0lhjxIk3DNy0f5yCQcz" alt="Bayern Munich vs Viktoria Plzen LIVE: Bayern Munich AIM for HAT ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Young German star Jamal Musiala has been the star of the show, with former Liverpool striker Sadio Mane also continuing his impressive form since switching to&nbsp;...</p></div>
            </div>
        </a><a href='http://english.news.cn/20221001/971c8086d18f4909944380ead8384fc2/c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>German Bundesliga football match: Bayern Munich vs. Bayer 04 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCgjIp0Z7NVdp0yF9fOqtBSJnfWc1HZsNPYsx4BllQVkLv39rtaQXydKId8WNHlfXTockvFMdU" alt="German Bundesliga football match: Bayern Munich vs. Bayer 04 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamal Musiala (bottom) of Bayern Munich vies with Robert Andrich of Leverkusen during the German first division Bundesliga football match between Bayern&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}