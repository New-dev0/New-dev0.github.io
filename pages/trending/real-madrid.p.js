import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Real Madrid</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Real Madrid"/>
        <meta name="description" content="Trending News about Real Madrid" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Real Madrid</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/790kgy/article65998732.ece/alternates/FREE_1200/2022-10-11T201223Z_1055439522_UP1EIAB1K4LG0_RTRMADP_3_SOCCER-CHAMPIONS-SHK-MAD-REPORT.JPG" alt="Real Madrid"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/football/uefa-champions-league-live-commentary-shakhtar-donetsk-vs-real-madrid-group-f-highlights/article65998500.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shakhtar Donetsk 1-0 Real Madrid LIVE, Champions League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQcmb9LXzFj_b6ZVUsyFx1G2VNFyBDNSKs41vKSsV9GhI_9YcJaH4RouHE8oOZwEQQyUEyoaKNH" alt="Shakhtar Donetsk 1-0 Real Madrid LIVE, Champions League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shakhtar Donetsk vs Real Madrid, Champions League: Catch the live score, updates, and commentary from the Group F match at the Parken Stadium, Denmark.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/real-madrid-progress-champions-league-knockouts-last-minute-equaliser-bloodied-rudiger-shakhtar/blt9892febc1163ac7d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Still unbeaten, but only just! Real Madrid progress to Champions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScju8SDCMggg_8lhkHDzhUaMJbUGnVv77BqWOjLbNvIbYniay3I07Om9zbNAnz8h8Z6EUJ__J1" alt="Still unbeaten, but only just! Real Madrid progress to Champions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Still unbeaten, but only just! Real Madrid progress to Champions League knockouts thanks to last-minute equaliser from bloodied Rudiger against Shakhtar. Ed&nbsp;...</p></div>
            </div>
        </a><a href='https://therealchamps.com/2022/10/11/real-madrid-mbappe-transfer-decision/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid have made Kylian Mbappe transfer decision</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_vaMujR9syhElIgoSrJxe21cRZ3nVAD-YV_pNr8qxQW3KliEo-kywOSPaRFsRni_kuMwjTRmz" alt="Real Madrid have made Kylian Mbappe transfer decision" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid have already made their decision surrounding Kylian Mbappe, who is looking for an exit from Paris Saint-Germain.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/shakhtar-donetsk-real-madrid-live-online-scores-stats-and-updates-champions-league-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shakhtar Donetsk 1-1 Real Madrid summary: Rudiger goal, score ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMyZga8g32cfJOe6EircBUfF05Ks3hgU8Cz8QDmSDcoFc3eDVsWtiQh22zwGDeWyZVDBykLDtJ" alt="Shakhtar Donetsk 1-1 Real Madrid summary: Rudiger goal, score ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid equalised in the 95th minute thanks to a Rudiger header and advance to the last 16 of the Champions League.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/shakhtar-donetsk-vs-real-madrid-predictions-tips-and-betting-odds/blte36fadf7adb637f8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shakhtar Donetsk vs Real Madrid: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJKw4Mu-yZ7xkyxGXF-7ct0mHAy0Sw2qS9zcDXhU2fShL_rZFX1ngVOkKzlMJEyoag3HATyL7E" alt="Shakhtar Donetsk vs Real Madrid: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid travel to Warsaw to face Shakhtar Donetsk on matchday four the Champions League with Carlo Ancelotti&#39;s men looking for their fourth consecutive&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/real-madrid-legend-roberto-carlos-best-ever-goal-brazil-free-kick/blta9c8f7f6103f560e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid legend Roberto Carlos picks his best-ever goal - and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQezxC4uhVGsuLG3tExCA1wVgokQFfx7FReJGHWQTDtMY8jdQmUed3daMSXz7sMtIO_D-D-ODF-" alt="Real Madrid legend Roberto Carlos picks his best-ever goal - and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid legend Roberto Carlos has named the best goal he ever scored, but it is not his famous curling free-kick for Brazil against France in 1997.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report?gameId=652641'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shakhtar Donetsk vs. Real Madrid - Football Match Report - October ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1NkxIudUZ06EsQdFkZ1rz5xrz9fDbIjya0zL9EDg0uimOHT_8l4Mu9p2VvbEclTv0gG9nvGr9" alt="Shakhtar Donetsk vs. Real Madrid - Football Match Report - October ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Shakhtar Donetsk vs. Real Madrid 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://therealchamps.com/2022/10/11/real-madrid-star-deserves-starting-role/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid star proves that he deserves starting role</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRp0Ny8MoK5Od8MTMNZr-4lKx6NnRcr70gkVAp9VGXfOcG7uSb1nMir_L6JuRVPuVQ8vsQmiF87" alt="Real Madrid star proves that he deserves starting role" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid managed to qualify for the knockout stages of the UEFA Champions League with two games to spare in the group stage, thanks to a late winner from&nbsp;...</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=652641'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shakhtar Donetsk vs. Real Madrid - Football Match Report - October ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkZDBIDHIkIWNZ4AQa5K3oCXtM8w8gPTgfpTFAjXW15Y0w-mEO80iPA0bVa0DFL1HM1Tr7IlQ9" alt="Shakhtar Donetsk vs. Real Madrid - Football Match Report - October ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Shakhtar Donetsk vs. Real Madrid 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/real-madrid/2022/10/11/6345a571e2704e707c8b45b7.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid&#39;s future does not lie with Kylian Mbappe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxZvqY3V6ULfyUVOhNghVJUsej5FFhbq_EJ2r9qNlWjcXPjiOoR3TC3XUB4VBKQm_NCUz5a6ic" alt="Real Madrid&#39;s future does not lie with Kylian Mbappe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid are not surprised by what is happening at Paris Saint-Germain with Kylian Mbappe. Los Blancos are following the story as mere witnesses of the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}