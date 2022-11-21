import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Patriots</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Patriots"/>
        <meta name="description" content="Trending News about Patriots" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Patriots</h1>
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/ruyn00x1hwlfrmwdku43" alt="Patriots"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/rookie-cb-marcus-jones-goes-the-distance-returns-punt-for-patriots-14th-straight'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rookie CB Marcus Jones goes &#39;the distance,&#39; returns punt for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXVwmz6EX2Yu98p7gnHEkqmsXUC-cNimDaK5n86FRFTYcNyhA1CMj5u1xHqtH2YhqnxbFR-8Q1" alt="Rookie CB Marcus Jones goes &#39;the distance,&#39; returns punt for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patriots rookie Marcus Jones scored a miraculous 84-yard punt return with five seconds remaining, helping New England overcome a pedestrian offensive day&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boston.com/sports/new-england-patriots/2022/11/20/patriots-jets-takeaways-defense-marcus-jones-punt-return/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 takeaways from the Patriots&#39; dramatic win over the Jets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwTgwC12ibXWdcmHwXsiE2KYx-nm2GuPexNRpeK1m7UvXTRdNTtAS9raT73thrS_GTSK0MLLC1" alt="5 takeaways from the Patriots&#39; dramatic win over the Jets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patriots takeaways: Punt returner Marcus Jones won the matchup with the Jets, but it was also down to New England&#39;s defense.</p></div>
            </div>
        </a><a href='https://www.patriots.com/news/new-england-patriots-postgame-quotes-11-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New England Patriots Postgame Quotes 11/20</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSN3p9kxp786KoXcJ0RmxyTSV717mYIDwxYYltGm8rpasgFFPjbrFe-BkDGeu1fqTL1egw51ogu" alt="New England Patriots Postgame Quotes 11/20" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New England Patriots Head Coach Bill Belichick and select players comment on their game against the New York Jets on Sunday, November 20, 2022.</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/recap?gameId=401437850'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcus Jones&#39; late punt return lifts <b>Patriots</b> over Jets 10-3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAzqMOzSsEEyhdgRd8GQG82ikZVXOrjrwb7Xjz6HgUHGBBt5IwS1pS1Y8E9gPzhapiEykLhluW" alt="Marcus Jones&#39; late punt return lifts <b>Patriots</b> over Jets 10-3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The New England rookie returned a punt 84 yards for a touchdown with 5 seconds remaining and the <b>Patriots</b> outlasted the stunned New York Jets 10-3 on Sunday. Jones&#39; score was the lone TD of the game and broke a stalemate on a day when both offenses&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/patriots/patriots-vs-jets-takeaways-marcus-jones-late-punt-return-touchdown-seals-wild-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots vs. Jets takeaways: Marcus Jones&#39; late punt-return ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ9tnYdVM2SJC57JfcEXB4ur3FuBwB5sznB0gONzof5mcvfKGJu5PCWTkXnOxbGYk0K0n2fDpD" alt="Patriots vs. Jets takeaways: Marcus Jones&#39; late punt-return ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Patriots and Jets were locked in low-scoring slog before Marcus Jones broke free for an 84-yard, game-winning punt return touchdown.</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/11/20/patriots-jets-marcus-jones-punt-touchdown/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots stun Jets with game-winning punt return in final seconds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5FDCfetVK0g9uA9-scPLxp56pABdkIjQeVnSNA7NstaJVPMTZWDmwZ17ODMrIw270O0P7FgqP" alt="Patriots stun Jets with game-winning punt return in final seconds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New England scores the game&#39;s only touchdown with five seconds to spare in regulation, winning its 14th straight against the Jets in gut-wrenching fashion.</p></div>
            </div>
        </a>
        </Template></>;
}