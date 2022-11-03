import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tottenham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tottenham"/>
        <meta name="description" content="Trending News about Tottenham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tottenham</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1101%2Fr1084727_1296x729_16%2D9.jpg" alt="Tottenham"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/report/_/gameId/652670'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marseille vs. Tottenham Hotspur - Football Match Report ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1_p46jW4dLtiheCg9iYXUGx3d_r7KyZStIoCojRKyPnr7AM1pOCpq-cUak26yIWaJy1wDX3qc" alt="Marseille vs. Tottenham Hotspur - Football Match Report ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Marseille vs. Tottenham Hotspur 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/tottenham-qualify-champions-league-knockout-stages-late-win-rampant-marseille/blt7cc59c51d514f915'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Panic over! Tottenham qualify for Champions League knockout ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfhUd-q0-d3NJiXUo6eeItoQJMdrb16wO4d_E5yP7eH_JQf68neX9ylbV4BmDb5xG1lT6lM9yu" alt="Panic over! Tottenham qualify for Champions League knockout ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A late strike from Pierre-Emile Hojbjerg secured Tottenham&#39;s place in the Champions League last 16 with a 2-1 win away to Marseille.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/tottenham-frankfurt-advance-in-champions-league-bayern-stays-perfect-101667357177705.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham, Frankfurt advance in Champions League; Bayern stays ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTu6-Vl1RRVoW3vibwmXB0t37dKjoZB4tSBrWPNuaoXH-e6ETQJ7R7Df6vezO9QQJKLY-7Touo" alt="Tottenham, Frankfurt advance in Champions League; Bayern stays ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At halftime in the final round of group matches on Tuesday, Marseille and Sporting Lisbon were going through from Group D. But instead it was their&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/marseille-vs-tottenham-hotspur-ucl-live-scores-mar-vs-tot-uefa-champions-league-updates-highlights/article66083182.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MAR vs TOT, UEFA Champions League HIGHLIGHTS: Hojbjerg&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFFVgJ60DsOGXk67QLHmcTO44tcKvpQFuCLCKZ9cWRzEi22S70EyRcb2DAqAOho3y_jIwMVIOH" alt="MAR vs TOT, UEFA Champions League HIGHLIGHTS: Hojbjerg&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MAR vs TOT, UCL 2022-23: Follow the highlights of the UEFA Champions League match being played at the Orange Velodrome, Marseille.</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/uefa-champions-league-2022-23-tottenham-hotspur-leaves-it-late-to-advance-to-the-round-of-16-in-pics-photos-234102'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League 2022-23: Tottenham Hotspur Leaves It ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTO6G191C-JR91FMTCR8fUEvyeviFfn7-jVeoJyDgqRiGgWxTqztvvQXCdvlzx7WvcwZKFCJlPb" alt="UEFA Champions League 2022-23: Tottenham Hotspur Leaves It ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>English Premier League side Tottenham Hotspur advanced to the Champions League last 16 as Group D winners after Pierre-Emile Hojbjerg scored in stoppage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/toteenham-hotspur-eintracht-frankfurt-into-champions-league-last-16-as-liverpool-beat-napoli-530417'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham Hotspur, Eintracht Frankfurt into Champions League last ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTLOs03HPhRFHW0p2GTFPTC7BJjea-l-q_yj4-P6EjipnpwfDljFDPxmAdB3F4P9eYM9kShzeQ9" alt="Tottenham Hotspur, Eintracht Frankfurt into Champions League last ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pierre-Emile Hojbjerg scored a 95th-minute winner as Tottenham Hotspur came from behind to beat Marseille 2-1 and reach the Champions League knockout stage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/football/1691321/tottenham-antonio-conte-ngolo-kante-barcelona-transfer-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham boss Antonio Conte &#39;likes&#39; N&#39;Golo Kante but transfer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbcOGp6ADuMNRtu5eYuXjw63SbUofWyJvEfSDho46Nk8fW2ZMePRh6Zcg44cwMjPNORmLnkrq-" alt="Tottenham boss Antonio Conte &#39;likes&#39; N&#39;Golo Kante but transfer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tottenham and Barcelona could go head to head for N&#39;Golo Kante&#39;s signature next summer.</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/football/1691092/Tottenham-Harry-Kane-transfer-news-Bayern-Munich-Antonio-Conte-gossip'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham star Harry Kane urged to snub Bayern Munich interest as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzibUWD0t79TnbemUXyoju7jE1x0cnKibrvZkUZRRyxYluVYr7IUPChiNeX-j-yOhP5K-zsptd" alt="Tottenham star Harry Kane urged to snub Bayern Munich interest as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tottenham striker Harry Kane has been linked with Bayern Munich.</p></div>
            </div>
        </a>
        </Template></>;
}