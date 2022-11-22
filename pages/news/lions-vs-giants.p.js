import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lions vs Giants</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lions vs Giants"/>
        <meta name="description" content="Trending News about Lions vs Giants" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lions vs Giants</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/r72ciYWxL_ZgAO_J3Hz2Br23-_c=/0x381:3646x2290/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24215968/usa_today_19474629.jpg" alt="Lions vs Giants"/>
            <h3>Recent News</h3>
            <a href='https://www.prideofdetroit.com/2022/11/21/23470745/lions-giants-report-card-grades-dominates-trenches-upset-win-week-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lions vs. Giants report card: Detroit dominates the trenches in upset ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDK2OptXIQhwQIwBKNQwLgWWuozvZbSPK-lO0GfMVpPNmkz6g2GtyXk-3rP8ZCEOPpVW-SlghM" alt="Lions vs. Giants report card: Detroit dominates the trenches in upset ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Handing out grades after the Detroit Lions&#39; physically dominant win over the New York Giants.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/giants-vs-lions-odds-line-spread-2022-nfl-picks-week-11-predictions-from-proven-computer-model/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giants vs. Lions odds, line, spread: 2022 NFL picks, Week 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmNenadfNnhLPgmYhaxlNQYbAhc-dEb3kuzaI4R5E7XI4rG17sdfE5OdgdvfR1_IBUYEp6T5-B" alt="Giants vs. Lions odds, line, spread: 2022 NFL picks, Week 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New York has raced out to a 7-2 start this year, going 7-1 in one-score games. Meanwhile, Detroit snapped a 13-game road losing streak with a 31-30 win at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/recap/_/gameId/401437852'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lions vs. Giants - Game Recap - November 20, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3Yol6YZ70EutDQYgLVeBYjvSt4JYj8V88HCjE6vUz8HYRFstXf-TPvsbxadFLrYU-nXLnEowL" alt="Lions vs. Giants - Game Recap - November 20, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a recap of the Detroit Lions vs. New York Giants football game.</p></div>
            </div>
        </a><a href='https://clutchpoints.com/lions-grades-week-11-win-giants'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lions grades from Week 11 win vs. Giants</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEBZUnmlxTp4PAKlbaBYblAIuHLYQaHkizXiwzpjzBRO2O1zd0bMu8VD_07EQI1DegsvA5LBxX" alt="Lions grades from Week 11 win vs. Giants" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Lions pulled off a shocking Week 11 upset over the Giants, so let&#39;s hand out grades for Detroit in this game.</p></div>
            </div>
        </a><a href='https://www.detroitlions.com/news/recap-lions-at-giants-hutchinson-williams-joseph-swift'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RECAP: Lions at Giants</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0tB4zPaELbLp893bZde0iRgo-FP1It2wC1BP6-tnmPPIxct4SrGKucJ4LJGSp-e6uparIPXtk" alt="RECAP: Lions at Giants" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Lions&#39; defense did a terrific job containing Giants running back Saquon Barkley, who entered the game as the league&#39;s leading rusher. Barkley had just 22&nbsp;...</p></div>
            </div>
        </a><a href='https://www.northjersey.com/story/sports/nfl/giants/2022/11/20/ny-giants-vs-detroit-lions-live-updates-saquon-barkley-daniel-jones-brian-daboll/69660364007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Lions 31, NY Giants 18: Worst performance of the season ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMaycPH72ObouOIXh0O0zf1Xpz0IIqlFGicp7PKLqsZI2IgWtAZ0XI2zlmtxCXcy_4MwTzf2wW" alt="Detroit Lions 31, NY Giants 18: Worst performance of the season ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saquon Barkley was taken out of the game by the Lions and neutralized. Daniel Jones threw a pair of interceptions, his first since Week 3. The Giants turned the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}