import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Belgium vs Morocco</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Belgium vs Morocco"/>
        <meta name="description" content="Trending News about Belgium vs Morocco" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Belgium vs Morocco</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt66aa821f7a387d32/6200f7291ec7e81a326ca5cc/GettyImages-1237070947.jpg" alt="Belgium vs Morocco"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-us/news/belgium-vs-morocco-predictions-world-cup-group-stage-odds-and-best-bets/blt38ae785959467ef0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs Morocco Predictions: World Cup Group Stage Odds ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSc5ctq4ZCwEBTA8ZIo2M4hAHDwZG-sb5KclWnUWXfWsXwyy0iTd7WiWAVSd5eSeX-WugNw4OT6" alt="Belgium vs Morocco Predictions: World Cup Group Stage Odds ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An exciting high scoring game looks like being on the cards when these two continental powerhouses meet in Group F this weekend.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/au/soccer/news/belgium-vs-morocco-world-cup-live-score-result/b54gadr36j1z8wkcdkrtjwbo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs Morocco final score, result: Atlas Lions claim stunning ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSylMfwEGDrj0G0v2q99eW0eNAky_mqmNynzjCUJgZJujIGEQLdYsZTCLlOJKs10Hn-1oR99skD" alt="Belgium vs Morocco final score, result: Atlas Lions claim stunning ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sporting News tracked live scoring updates and highlights for Belgium vs Morocco at the 2022 World Cup. Follow for complete results from the Group F match&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/belgium-vs-morocco-we-hope-to-be-champions-in-qatar-dendonker/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs Morocco: We hope to be champions in Qatar — Dendonker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwiSDcmyL7QnNbnTp0fblyq471lm_iS5AYu9zgOtsKHYpstqkpwktmlZj1BDoPvYidhBpicEFn" alt="Belgium vs Morocco: We hope to be champions in Qatar — Dendonker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Belgium midfielder, Leander Dendonker says his team is optimistic they can win the 2022 World Cup in Qatar. The Aston Villa man was among the squad that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/liveblog/2022/11/27/live-belgium-vs-morocco-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs Morocco 0-2: World Cup 2022 – as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxg94DVsiqtmTAfft020eVGUlEhLmabXJ_zfPfraMF6N1oRXb9D_LNE0r9H4L8wMW1ODsgyy2Y" alt="Belgium vs Morocco 0-2: World Cup 2022 – as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Live updates from the FIFA World Cup 2022 match between Belgium and Morocco at Al Thumama Stadium.</p></div>
            </div>
        </a><a href='https://www.pulse.ng/sports/football/qatar-2022-belgium-vs-morocco-live/skxryse'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs Morocco Live</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaSywv4Mt19UYkhWWdrEvvsqsUaiT9c53Y_jl6dsFqQKLVHPnknJ1XJu25PtMQB4AKqxFQT8ZW" alt="Belgium vs Morocco Live" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hello, welcome to our afternoon coverage of the day 8 of the Qatar 2022 FIFA World Cup. | Pulse Nigeria.</p></div>
            </div>
        </a>
        </Template></>;
}