import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leicester City vs Crystal Palace</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leicester City vs Crystal Palace"/>
        <meta name="description" content="Trending News about Leicester City vs Crystal Palace" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leicester City vs Crystal Palace</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1015%2Fr1075958_1296x729_16%2D9.jpg" alt="Leicester City vs Crystal Palace"/>
            <h3>Recent News</h3>
            <a href='http://www.espn.in/football/report?gameId=637923'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City vs. Crystal Palace - Football Match Report - October ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTFcfybgd87U6vX-AwMBgXivAuUIQPn7kF95t8o9oa4H7pmM8xChn93kCaL0pZEeMwF4JLrluv9" alt="Leicester City vs. Crystal Palace - Football Match Report - October ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Leicester City vs. Crystal Palace 2022-23 English Premier League football match.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/leicester-city-vs-crystal-palace-live-stream-tv-channel-kick-off-time-and-how-to-watch/bltdfd59fa0fb5bba66'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City vs Crystal Palace: Live stream, TV channel, kick-off ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9iyWwzfCSnaiDwGv1fSkCbJ_4yW2RTlFMioqxWGKBjbJj0vhJ3ua9B_rNVjMsgXbvdnvBAIOx" alt="Leicester City vs Crystal Palace: Live stream, TV channel, kick-off ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s how you can watch Leicester City against Crystal Palace on TV and stream the game live...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/leicester-city-vs-crystal-palace-125046121.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester&#39;s struggles continue as they battle to scrappy draw vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCJ73t3tMtPLsk1Z4nnA93Rb0MXnHILE4V1rsVFV49TOedzvuztg_oOWdnDKXSRhS4XpXcZG2Y" alt="Leicester&#39;s struggles continue as they battle to scrappy draw vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leicester City and Crystal Palace battled to a scrappy draw at the King Power Stadium on Saturday as the Foxes remain in the relegation zone.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/637923'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City vs. Crystal Palace - Football Match Report - October ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Leicester City vs. Crystal Palace - Football Match Report - October ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LEICESTER, England, Oct 15 (Reuters) - Leicester City&#39;s poor start to the Premier League season dragged on with a dour goalless draw at home to Crystal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leicestermercury.co.uk/sport/football/football-news/leicester-player-ratings-palace-maddison-7708167'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City player ratings v Crystal Palace as Faes leads solid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREAZ_9945kW-oKeTtlGzNVFsK3ogBKicjmHwjGs-ierfDPC3BpL9MVig_XQoAGtQJplF4E-fu1" alt="Leicester City player ratings v Crystal Palace as Faes leads solid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Leicester City players are assessed after they played out a goalless draw with Crystal Palace at the King Power Stadium that failed to appease&nbsp;...</p></div>
            </div>
        </a><a href='https://soccer.nbcsports.com/2022/10/15/leicester-city-vs-crystal-palace-live-score-updates-how-to-watch-stream/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City vs Crystal Palace live! Score, updates, how to watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSUvCISI3YaVLsHFgM6AN_neg6cMiTaHJs6kbIorfC3jfnsWnG9jiemEHIKb-sg4ebFS77hoVpS" alt="Leicester City vs Crystal Palace live! Score, updates, how to watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leicester City host Crystal Palace on Saturday at the King Power Stadium as both teams aim to kick on after slow starts to the season.</p></div>
            </div>
        </a>
        </Template></>;
}