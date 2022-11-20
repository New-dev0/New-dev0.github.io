import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>76ers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,76ers"/>
        <meta name="description" content="Trending News about 76ers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>76ers</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/i2DWO3UqQHXNdWTplqavlycM1_k=/0x115:2552x1451/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24211953/Screen_Shot_2022_11_19_at_1.51.33_PM.png" alt="76ers"/>
            <h3>Recent News</h3>
            <a href='https://www.sbnation.com/nba/2022/11/19/23468064/giannis-antetokounmpos-ladder-shoving-controversy-video-76ers-montrezl-harrell'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giannis Antetokounmpo&#39;s ladder-shoving controversy with 76ers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQhCT2A8aIyNh0fLmTmZwL8YQkAkaJmgtQsH8RcETYKqyzgjl67hgNfLdHQvJ-2n0PKjBCgctj" alt="Giannis Antetokounmpo&#39;s ladder-shoving controversy with 76ers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Giannis Antetokounmpo shoved over a ladder, argued with Montrezl Harrell, and started a new rivalry with 76ers.</p></div>
            </div>
        </a><a href='https://theathletic.com/3913502/2022/11/19/76ers-tyrese-maxey-foot-injury/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>76ers&#39; Tyrese Maxey to miss approximately 3-4 weeks with foot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuLJt7QmprRyxxJugF44dx1X8QFFB73rzZ1PuXwraUgEe4QNnfu_ta5agPjDvXKJzWC2AfyVWh" alt="76ers&#39; Tyrese Maxey to miss approximately 3-4 weeks with foot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maxey exited Friday night&#39;s win over the Bucks with the injury and underwent an MRI on Saturday.</p></div>
            </div>
        </a><a href='https://www.nba.com/sixers/news/76ers-vs-minnesota-timberwolves-nov-19-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sixers Game Tonight: Philadelphia 76ers vs. Timberwolves, 11/19/22</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKymcBmG7pWgJuvv7OYKWU_uyuboWwxcKl1w1NcTiqujNI5jTy8ItVAOfg9y-s_2iSxzlGLPSG" alt="Sixers Game Tonight: Philadelphia 76ers vs. Timberwolves, 11/19/22" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Sixers won 110-102 vs. the Milwaukee Bucks. The next game for the 76ers is Saturday Nov. 19 vs. the Minnesota Timberwolves at home.</p></div>
            </div>
        </a><a href='https://www.nba.com/news/bucks-giannis-antetokounmpo-explains-ladder-incident-after-loss-to-76ers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bucks&#39; Giannis Antetokounmpo explains ladder incident after loss to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhTIPY1JrU-OCE0h-KrTApPFDb0Oy-9cn0ENmXbmoW-cnS2tVWrrRdeFzFI6QsRcj6ChstYK7k" alt="Bucks&#39; Giannis Antetokounmpo explains ladder incident after loss to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A verbal exchange between the Milwaukee superstar and an arena worker at Wells Fargo Center led to a 12-foot ladder falling to the ground.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/76ers/news/76ers-tyrese-maxey-receives-injury-diagnosis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>76ers&#39; Tyrese Maxey Receives Injury Diagnosis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRkjx48Ad3D6T1_IBrxwhRPIP7q0y9uTQS8Z5U2pkulpH8xg-1KUj9gs54U0-thtR3Lp8S-ad3" alt="76ers&#39; Tyrese Maxey Receives Injury Diagnosis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Friday night, Philadelphia 76ers guard Tyrese Maxey suffered a lower-body injury during the second quarter of the matchup against the Milwaukee Bucks.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/76ers/news/76ers-vs-timberwolves-betting-odds-game-notes-prediction-11-19-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>76ers vs. Timberwolves: Betting Odds, Game Notes &amp; Prediction</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2zmtSmpy44dLgitDKbNpUxF6JeVPwhB-AqUyMtHHeiLDcBAbekt86upiBtR6WxkgZwA-G74CR" alt="76ers vs. Timberwolves: Betting Odds, Game Notes &amp; Prediction" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plan on tuning in to watch the 76ers and the Timberwolves battle it out? Here is all of the betting information you need!</p></div>
            </div>
        </a><a href='https://www.fox29.com/sports/76ers-guard-tyrese-maxey-to-miss-3-to-4-weeks-with-left-foot-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>76ers Tyrese Maxey out weeks with broken left foot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaqqdwBiXKSPoUETRRM8a5NT-5-drTpYazWAF-PMPiL5NbepF22FmpSARzIkwrQXcYm_GNp2Sj" alt="76ers Tyrese Maxey out weeks with broken left foot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Philadelphia 76ers guard Tyrese Maxey will miss at least two weeks after breaking his left foot Friday night.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/11/18/giannis-antetokounmpo-loses-temper-76ers-workers-ladder-nba-milwaukee-bucks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giannis Antetokounmpo Loses Temper W/ 76ers Workers, Knocks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT2eDWrqIiA3ta9XSC4kXXyNF5u-p4PoJrNaM8Yf7PbYUcoP-_-_KaGYcGvfaGXsiMqIz6c36al" alt="Giannis Antetokounmpo Loses Temper W/ 76ers Workers, Knocks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Giannis Antetokounmpo wanted to practice free throws after his Bucks squad lost to the 76ers, but when several arena employees got in his way, he lost it,&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056154-bucks-giannis-explains-confrontation-with-76ers-arena-workers-on-court-after-loss'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bucks&#39; Giannis Explains Confrontation With 76ers Arena Workers On ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuZq65e0IbJ0btY27NCQIKMb9ipb7PQVf22NCwwhpvQPWUtVou8tMfEhTBviNyLmlYDdP9dlTM" alt="Bucks&#39; Giannis Explains Confrontation With 76ers Arena Workers On ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milwaukee Bucks superstar Giannis Antetokounmpo called his postgame confrontation with Philadelphia 76ers center Montrezl Harrell and a Wells Fargo Center.</p></div>
            </div>
        </a><a href='https://clutchpoints.com/nba-odds-timberwolves-vs-76ers-prediction-odds-and-pick-11-19-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA Odds: Timberwolves-76ers prediction, odds and pick</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7tmrFmJp6vkjdxv1dA41bFZoOxFXpnZxed1ppE0PBJovUdUVtr1oj_C1r9Ood6C0e27p9JGMw" alt="NBA Odds: Timberwolves-76ers prediction, odds and pick" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The surging Minnesota Timberwolves will take on the Philadelphia 76ers who are in the middle of a lengthy home stand. It is time to check out our NBA odds&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}