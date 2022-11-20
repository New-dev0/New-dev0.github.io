import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Texas A&M football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Texas A&M football"/>
        <meta name="description" content="Trending News about Texas A&M football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Texas A&M football</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTkwMDIxODY3OTA0NDQ0MTU4/jimbo-fisher-texas-am-football.jpg" alt="Texas A&M football"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/fannation/college/cfb-hq/ncaa-football/texas-am-football-stadium-empties-umass-game'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Texas A&amp;M football stadium empties during UMass game (Video)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWKMWm6mlCkJjj7163Wp-_khauqirG5Uqk8WUU0aMN5LGiIL_Pj2kmCRWf8w5AMR6Zt2-2Vxjf" alt="Texas A&amp;M football stadium empties during UMass game (Video)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Texas A&amp;M is usually home to one of the most raucous home field advantages in college football, but that wasn&#39;t the case on Saturday.</p></div>
            </div>
        </a><a href='https://dailycollegian.com/2022/11/umass-football-hangs-close-in-20-3-loss-to-texas-am/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UMass football hangs close in 20-3 loss to Texas A&amp;M</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxHvU6wtm4YoSQUQjENejUFTSv60rkz9C21PPg_l1UQZasM3tX-hHz0NzReHhvrLZzX_UQ-2Ge" alt="UMass football hangs close in 20-3 loss to Texas A&amp;M" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UMass football kept Saturday&#39;s game with Texas A&amp;M close throughout, but couldn&#39;t convert when it needed to.</p></div>
            </div>
        </a><a href='https://www.si.com/extra-mustard/2022/11/19/texas-am-stands-empty-out-after-aggies-tepid-start-vs-umass-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Texas A&amp;M Stands Empty Out After Aggies&#39; Tepid Start vs. UMass ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbfDcCHnCEVCaQ8hdGyHkaff5F7FW-ZBg38XGmE9BQ7J74l_bJJTirjRhIzsVz7tY_2M-8q9KD" alt="Texas A&amp;M Stands Empty Out After Aggies&#39; Tepid Start vs. UMass ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As the second half began in College Station, a video shows Aggies fans cleared out during the break. There were so many open seats that it seemed like Texas A&amp;M&nbsp;...</p></div>
            </div>
        </a><a href='https://www.masslive.com/umassfootball/2022/11/umass-vs-texas-am-live-stream-tv-how-to-watch-college-football.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UMass vs Texas A&amp;M: Live stream, TV, how to watch college football</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6pKVVz3ip9qoC4LWFBTb1PGV4h5B0s16dBToAMvbypWs6S6o40olzfvo-Or_-FYI6Mw5eijdO" alt="UMass vs Texas A&amp;M: Live stream, TV, how to watch college football" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It has been a season of struggles for UMass, having only won one game and suffered nine losses. However, things have begun to look up after competing to a&nbsp;...</p></div>
            </div>
        </a><a href='https://touchdownwire.usatoday.com/2022/11/19/texas-ams-kyle-field-empties-at-halftime-of-umass-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Texas A&amp;M&#39;s Kyle Field empties ... at halftime of UMass game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRD7KjYJ6bxwzFtK2ZR_rJVjd24NLN1PHVsbvb9qrU4JLPufWPlEi3prSs0-H6QdYbYGz1JHjHb" alt="Texas A&amp;M&#39;s Kyle Field empties ... at halftime of UMass game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The announced crowed was more than 90,000. However, after the band performed at halftime, there was an exit, en masse. By looks of the image, it appears as if&nbsp;...</p></div>
            </div>
        </a><a href='https://12thman.com/sports/football/stats/2022/umass/boxscore/18478'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football vs UMass on 11/19/2022 - Box Score</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Football vs UMass on 11/19/2022 - Box Score" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Massachusetts - Individual Defensive Statistics ; Schofield,Dominic, -, 1 ; Dumont,Ethan, -, 1 ; Ross,Isaac, 1, - ; Carson,Cameron, -, -&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}