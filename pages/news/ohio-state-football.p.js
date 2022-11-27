import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ohio State football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ohio State football"/>
        <meta name="description" content="Trending News about Ohio State football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ohio State football</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1126%2Fr1097286_1296x729_16%2D9.jpg" alt="Ohio State football"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/college-football/story/_/id/35116043/doubt-osu-deserves-cfp-spot'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Big Ten boss Kevin Warren: &#39;Without a doubt&#39; OSU deserves CFP spot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwDICQsyUmvXu20D4UqeMKRhC__2YCLzKCg-PoOM7dQ1eit-AOCTbiplWEhY0uqA1VdD209V--" alt="Big Ten boss Kevin Warren: &#39;Without a doubt&#39; OSU deserves CFP spot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Big Ten commissioner Kevin Warren made the case for Ohio State to make the College Football Playoff despite its 45-23 loss to Michigan on Saturday.</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/college/cfb-hq/ncaa-football/michigan-football-players-plant-flag-ohio-state'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Michigan football players plant flag at Ohio State&#39;s midfield ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-MjiqiJMtHoTcW_uhRg7G7sNAqRSpS7KyqhjgpuM7XnC-bkhN5aa5AmG_vR8usuF7KOwcxH-0" alt="WATCH: Michigan football players plant flag at Ohio State&#39;s midfield ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan has turned the tables in its rivalry with Ohio State, for the second straight season using a win over the Buckeyes to earn College Football Playoff&nbsp;...</p></div>
            </div>
        </a><a href='https://mgoblue.com/news/2022/11/26/football-postgame-notes-michigan-at-ohio-state.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Postgame Notes: #3 Michigan 45, #2 Ohio State 23</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXulf2Lc5ma_JNjdiWbVjsxBXIV6km-VXKAcTxuy2lBB9koZkMjTstwlH0muRInSS2pTaYzXVG" alt="Postgame Notes: #3 Michigan 45, #2 Ohio State 23" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U-M picked up its first road win against a top-five team since 2006 (at Notre Dame). • The Wolverines ended the Buckeyes&#39; 29-game home Big Ten winning streak&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cleveland.com/osu/2022/11/michigan-sets-ohio-state-football-back-two-decades-by-beating-the-buckeyes-at-their-own-game-doug-lesmerises.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan sets Ohio State football back 2 decades by beating the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBsH9tCS9PMNMIA1S54JAyOXaM3Gii3aM_ZcFXIowmr8pvJSw6ZZpfX6d5IHOVS6ahNS-d-x_h" alt="Michigan sets Ohio State football back 2 decades by beating the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On the Buckeyes and the Wolverines in the 118th edition of The Game, as Michigan beat Ohio State 45-23.</p></div>
            </div>
        </a><a href='https://www.ncaa.com/live-updates/football/fbs/michigan-vs-ohio-state-football-score-updates-series-history'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan vs. Ohio State football: Score, updates, series history</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQSbjOpssNvX5s5CLa79fvGntvA2GfhKcy3lRJlar4UrIMqF6U88owypdQ7iJF7qGrPSg-Gokf" alt="Michigan vs. Ohio State football: Score, updates, series history" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 2 Ohio State and No. 3 Michigan play for the Big Ten East title in an undefeated showdown on Saturday, Nov. 26. Follow along here for updates throughout&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ncaa.com/news/football/article/2022-11-26/no-3-michigan-rocks-no-2-ohio-state-south-carolina-stuns-no-8-clemson-and-more-college'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No. 3 Michigan rocks No. 2 Ohio State, South Carolina stuns No. 8 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5YgyMqOOXqIM2gke0vaqv4Efp7wRUIRwyuLvN0NzjFMOjQmzSRRafybNU1XKOE2oxB5VcjhPm" alt="No. 3 Michigan rocks No. 2 Ohio State, South Carolina stuns No. 8 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rivalry week around college football featured marquee matchups, in-state showdowns and battles across state lines. The top-10 upsets and heavy implications&nbsp;...</p></div>
            </div>
        </a><a href='https://www.freep.com/story/sports/college/university-michigan/wolverines/2022/11/26/michigan-football-game-ohio-state/69678781007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan stuns Ohio State 45-23 behind J.J. McCarthy for 1st ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsfuVHWu9LMIQSMYPf7u-bee8rNdITEa3SYNyJPx0Nuhy1cKSf3YCUqgU2fDaSKgmf-_XKSNd5" alt="Michigan stuns Ohio State 45-23 behind J.J. McCarthy for 1st ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>J.J. McCarthy threw for 3 TDs and scored 1 and Donovan Edwards struck for TDs of 75 and 85 yards late as Michigan Wolverines beat Ohio State Buckeyes.</p></div>
            </div>
        </a><a href='https://www.espn.com/college-football/story/_/id/35110769/ohio-state-rb-miyan-williams-back-michigan-game-sources-say'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State RB Miyan Williams back for Michigan game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsTtK_2GzvA9LpTAmh-xYrf5pqmHZusAPYTPnf7QEUZDgAc87D0ryqXyOTmVKm14vp7GqVQGl6" alt="Ohio State RB Miyan Williams back for Michigan game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio State tailback Miyan Williams will return for Saturday&#39;s rivalry game against No. 3 Michigan, while running back TreVeyon Henderson and wide receiver&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dispatch.com/story/sports/college/football/2022/11/26/ohio-state-football-score-michigan-vs-osu-2022-live-updates/69665057007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Replay: Michigan beats Ohio State, Wolverines remain undefeated ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsx0oqnHA58PKqQE3xWoT06pEsOcMBGswYVT9kahZX8tM5FXK-L6GBQ6QmrLZpmhX5JtNu2TWG" alt="Replay: Michigan beats Ohio State, Wolverines remain undefeated ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio State Buckeyes play the Michigan Wolverines in the final 2022 regular season game of the year with big College Football Playoffs implications.</p></div>
            </div>
        </a><a href='https://wolverineswire.usatoday.com/lists/what-jim-harbaugh-said-after-michigan-football-beat-ohio-state/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Jim Harbaugh said after Michigan football beat Ohio State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBkInZADfU_SaPUidORyZ9H5mRa96FZC31ksQiJ-R6vuKvhyV4TKGWigm_gH9j1LrV31Ea2RiB" alt="What Jim Harbaugh said after Michigan football beat Ohio State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Everything the Michigan football head coach said in the postgame press conference after the Wolverines beat Ohio State.</p></div>
            </div>
        </a>
        </Template></>;
}