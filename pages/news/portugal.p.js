import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal"/>
        <meta name="description" content="Trending News about Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal</h1>
            <Image width={800} height={500} src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1123%2Fr1095421_1296x729_16%2D9.jpg" alt="Portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/soccer/fifa-world-cup/story/4808571/cristiano-ronaldo-circus-engulfs-portugal-after-man-united-exit-but-will-it-impact-world-cup-hopes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo&#39;s Man United exit circus engulfs Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGdmAEUmm01ok9b6GYT48WMgVFIjSnPlZGibM8oM7GkOy1wogyVWvJS42yhz6WhewyYUIJ_EXA" alt="Cristiano Ronaldo&#39;s Man United exit circus engulfs Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AL SHAHANIYA, Qatar -- Portugal midfielder Bernardo Silva tried his best to say all the right things. Speaking at Portugal&#39;s first news conference since&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/nov/23/portugal-ronaldo-switch-focus-ghana-world-cup-group-h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal try to put Ronaldo to one side and switch focus on to Ghana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTyaDLFYYbEynqjFynsb4heiVn8hTkPp0485ZFgv2JgKyw3aPVm3X2vlzcKigXwawGkNV2EF3o" alt="Portugal try to put Ronaldo to one side and switch focus on to Ghana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fernando Santos, Portugal&#39;s coach, says the squad are as integrated as they have been in years despite the enduring soap opera.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/portugal-vs-ghana-predictions-tips-and-betting-odds/bltfad0c4811a5d7ec0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal vs Ghana: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpSs7TyaHWntYo7dRab6UNbkx0zJFARmkbn8stao6DEbfoJDchcb9Zd6IhLE-cWSnFP8wM_ByG" alt="Portugal vs Ghana: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Iberian nation boast some exceptional players yet with a negative coach they might fail to rack up the goals in their opening game.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11460865/Cristiano-Ronaldo-skip-Portugals-final-press-conference.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo to skip Portugal&#39;s final press conference before ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBtCesRuk1bpFF092MaKZOzt3ahf4M3NymV16zwqq_6V0xgflCpioZvVSg-b6Xc-srCPPLBeIu" alt="Cristiano Ronaldo to skip Portugal&#39;s final press conference before ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ronaldo would normally be expected to take his place alongside manager Fernando Santos to take questions from the media, but it is understood that he will&nbsp;...</p></div>
            </div>
        </a><a href='https://khelnow.com/football/2022-11-world-football-fifa-world-cup-2022-portugal-vs-ghana-predicted-lineup-injury-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal vs Ghana: Predicted lineup, injury news, head-to-head</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9UsqpLzrZvOSQrX-ukW2RWgyLq4GY99ZoQxTK4GzRcGfLKL1meQueX2sOWjgDWk_SCjgDyQOO" alt="Portugal vs Ghana: Predicted lineup, injury news, head-to-head" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal&#39;s first FIFA World Cup 2022 game will begin against young and exciting Ghana at Stadium 974 on Thursday.</p></div>
            </div>
        </a><a href='https://www.sportsmole.co.uk/football/portugal/world-cup-2022/feature/world-cup-2022-portugal-vs-ghana-head-to-head-record_500407.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Portugal vs. Ghana head-to-head record</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQj8JVQ4H7jB3N06ZWLPxZEOd9tHKgSsFlXt5A2uYij9AjIbi-p9Pxn-v7Oy4Gs1JiHEZyX5UNF" alt="World Cup 2022: Portugal vs. Ghana head-to-head record" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of Thursday&#39;s World Cup clash between Portugal and Ghana, Sports Mole looks back at the previous meeting between the two sides.</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-23/ronaldo-out-to-impress-in-portugal-s-first-game-at-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo Out to Impress in Portugal&#39;s First Game At World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1etBteUx2qtLFwm-2kpVosIoS2bZ7IrXkQX3KArxrsMPOWWj_i5JzL3mdNOY8iKfVVAckensA" alt="Ronaldo Out to Impress in Portugal&#39;s First Game At World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doha, Qatar (AP) -- Cristiano Ronaldo is in the shop window as he starts his fifth and probably final World Cup with Portugal.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/portugal-possible-starting-lineup-for-game-1-of-the-group-stage-vs-ghana-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal possible starting lineup for game 1 of the group stage vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIhszF-MPeCKz3fvQmnBRA3XH-8eLgg4m7vPyg6UFweKVAo3UriZRP8UJnNqxWs-J8CaayeVNE" alt="Portugal possible starting lineup for game 1 of the group stage vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo headlines the Portuguese team as they face Ghana in game 1 of their campaign to raise the trophy at the 2022 FIFA World Cup in Qatar.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-ng/lists/2022-world-cup-ghana-s-predicted-xi-to-face-cristiano-ronaldo-s-portugal/blt5d62b256a074675d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: Ghana&#39;s predicted XI to face Cristiano Ronaldo&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlhtTjy0BilYH6XseFZI71l5D025pi3ipbXN4KExS2Dmdbq2sh8H29si__VO_ebVICWD8TZ7-e" alt="2022 World Cup: Ghana&#39;s predicted XI to face Cristiano Ronaldo&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GOAL predicts Ghana&#39;s starting line-up as the Black Stars take aim at the Portugal in a 2022 World Cup match on Thursday.</p></div>
            </div>
        </a><a href='https://soccernet.ng/2022/11/after-missing-portugal-friendly-super-eagles-star-gets-return-date-from-hamstring-injury.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>After missing Portugal friendly, Super Eagles star gets return date ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTiUyou-bglFVNA3BEKqURe3RXBfgiot65U_GMqXx7lLw6E5U-hXX2yRs1YjWfr8bJmQ_Wzrmnu" alt="After missing Portugal friendly, Super Eagles star gets return date ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Nigeria international has missed recent games for club and country due to an injury. Super Eagles defender Ola Aina is a few days from returning to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}