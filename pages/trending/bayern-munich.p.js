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
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/2reRfCSpvfp63CpIeNCgYP_jSzs=/0x7:3713x1951/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24069824/1429112682.jpg" alt="Bayern Munich"/>
            <h3>Recent News</h3>
            <a href='https://www.bavarianfootballworks.com/2022/9/30/23378655/match-awards-player-ratings-bayern-munich-win-bayer-leverkusen-bundesliga-kimmich-musiala-sane-mane'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Match awards from Bayern Munich&#39;s 4-0 win over Bayer Leverkusen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCiISqKpKWKjvB7Jfj5rkZdT-_sfPCHF6v0qqy2MNU70dhoB7CDj0kPv0B8BaMtwZKaP4A7pa2" alt="Match awards from Bayern Munich&#39;s 4-0 win over Bayer Leverkusen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jonathan Tah was one of the few Leverkusen players who actually did something defensively. Bayern concentrated their attacks down the left flank, with Tah often&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/bundesliga/cronica/2022/09/30/6337546cca47413d758b45bb.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich trounce Leverkusen and return to winning ways after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_kH7s0N0VgnDn9t7u0IzayRSGT6XTnR0l08bfQu7bmcdQX4pkOnUv4q9LJE3WilmQOGxABior" alt="Bayern Munich trounce Leverkusen and return to winning ways after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bayern Munich returned to action after the international break and did so in style with a comfortable Bundesliga win over a Bayer Leverkusen side that&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/football/bayern-munich-vs-bayer-leverkusen-bundesliga-when-and-where-to-watch-live-telecast-live-streaming-3392859'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich vs Bayer Leverkusen, Bundesliga: When And Where ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFawuvilLNmsJx7RWj_rU3CP214tA4rjIVNQYVLLrpzgKYr_QLZLGkpsTpyfsayohWEj59uq70" alt="Bayern Munich vs Bayer Leverkusen, Bundesliga: When And Where ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bayern Munich are winless since mid-August, an unfamiliar position for a club which is vying for 11 titles in a row, and currently sit fifth in the points&nbsp;...</p></div>
            </div>
        </a><a href='https://footballexpress.in/bayern-munich-were-desperate-to-sign-a-barcelona-starlet/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bayern Munich were desperate to sign a Barcelona starlet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnyafSA5uag0MUog85sCv6Ht-eSNLWq3SM9e2XLOihTfz20fpA8PqPs7F1YmI5dp1JbE2uihJY" alt="Bayern Munich were desperate to sign a Barcelona starlet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bayern Munich target Gavi turned 18 on August 5<sup>th</sup>. Yet the young midfielder has taken the world by surprise. His rise through the academy ranks into a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/sep/30/musiala-and-mane-help-bayern-end-winless-run-in-style-against-leverkusen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musiala and Mané help Bayern end winless run in style against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQ2UhFOaZiSszWk1qQ-BWXXXDwf7gwAYeOgQZ9mmlX18Y6js-HYvG1aughyl8h41d_hQ8j-XKz" alt="Musiala and Mané help Bayern end winless run in style against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamal Musiala scored once and set up two more goals as champions Bayern Munich cruised past Bayer Leverkusen 4-0 on Friday to snap a four-game winless run&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.co.uk/football/bundesliga/2022-2023/bayern-munich-v-bayer-leverkusen-bundesliga-live_sto9162328/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sadio Mane breaks drought as Bayern Munich hit four past Bayer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRoFe5BvpSrdQlWlqdT0MVdLmtEr_dirKmU34T9DHRJuix8JKrjhwxgMehTAqBbHujNuz3flhSF" alt="Sadio Mane breaks drought as Bayern Munich hit four past Bayer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bayern Munich ended their mini-Bundesliga slump with a crushing victory over Bayer Leverkusen at the Allianz Arena on Friday.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/football/nagelsmann-not-responsible-for-everything-amid-bayerns-league-struggles-8182313/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nagelsmann &#39;not responsible for everything&#39; amid Bayern&#39;s league ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8IGjEF86itluQKKawNjyG9XsOZrU_5ISLSY5BiGwaAtD82kr_TseVg8_ScIHiQdsE8mfUMvBK" alt="Nagelsmann &#39;not responsible for everything&#39; amid Bayern&#39;s league ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bayern Munich head coach Julian Nagelsmann said he is not solely to blame for the German champions&#39; poor start to the Bundesliga campaign and that the whole&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}