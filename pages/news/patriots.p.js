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
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/patriots/nkslhppbtcnawifbfxrs" alt="Patriots"/>
            <h3>Recent News</h3>
            <a href='https://www.patriots.com/news/previewing-a-patriots-post-thanksgiving-peak-revival'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Previewing a Patriots post-Thanksgiving peak revival</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRanlwADzhPIpoKhO5q7NNoolDgs7cpsqolIB1eOqETJddOWYg0LT21wZq5LmJAkvN1uVQoLwMI" alt="Previewing a Patriots post-Thanksgiving peak revival" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With the win over the Jets the Patriots have positioned themselves for a post-Thanksgiving push to the playoffs.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/patriots/nfl-odds-week-12-patriots-vs-vikings-spread-line-thanksgiving-game'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL odds Week 12: Patriots vs. Vikings spread, line for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ9tnYdVM2SJC57JfcEXB4ur3FuBwB5sznB0gONzof5mcvfKGJu5PCWTkXnOxbGYk0K0n2fDpD" alt="NFL odds Week 12: Patriots vs. Vikings spread, line for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Patriots didn&#39;t score a single offensive touchdown in their Week 11 win over the Jets, and yet oddsmakers still like their chances of playing the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pressherald.com/2022/11/21/patriots-still-looking-for-answers-on-offense/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots still looking for answers on offense</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGLs3QALBDyBVKmKNuSmlRk5_7Rk7JlmWR7-z78wIpFBpyIm4n3Zo6ZRzERt2Ou4VanT4_E_Qv" alt="Patriots still looking for answers on offense" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FOXBOROUGH, Mass. — In the postgame locker room euphoria of the Patriots&#39; 10-3 win over the Jets on Sunday, references to Marcus Jones&#39; 84-yard punt return&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/rookie-cb-marcus-jones-goes-the-distance-returns-punt-for-patriots-14th-straight'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rookie CB Marcus Jones goes &#39;the distance,&#39; returns punt for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXVwmz6EX2Yu98p7gnHEkqmsXUC-cNimDaK5n86FRFTYcNyhA1CMj5u1xHqtH2YhqnxbFR-8Q1" alt="Rookie CB Marcus Jones goes &#39;the distance,&#39; returns punt for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patriots rookie Marcus Jones scored a miraculous 84-yard punt return with five seconds remaining, helping New England overcome a pedestrian offensive day&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boston.com/sports/new-england-patriots/2022/11/21/overshadowed-by-an-incompetent-offense-can-the-patriots-defense-remain-among-nfls-best/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Overshadowed by an incompetent offense, can the Patriots&#39; defense ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRudgYHPYpPlmrGwc-v6IujL7b04JEG6mMesmiW6T-8C1MVIenTqjfrNt8KApA3AZJgWYR-xbFx" alt="Overshadowed by an incompetent offense, can the Patriots&#39; defense ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At 6-4, the Patriots are still in the heat of the competition thanks to a defense that has quietly become one of the best in the NFL. Matthew Judon sacked Jets&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35070582/patriots-punt-return-td-seconds-remaining-stuns-jets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots&#39; punt return TD with seconds remaining stuns Jets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQpt1KpFl1IMF5dWeMZMUENhCZHSKXGGlAqFZ9d14WJpIGZ3QaBrpqIUM_cD8vWwTS1xTleb88a" alt="Patriots&#39; punt return TD with seconds remaining stuns Jets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patriots rookie Marcus Jones had an 84-yard punt return for a touchdown with five seconds remaining to give New England its 14th straight win over the Jets.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/patriots/david-andrews-injury-report-scott-zolak-day-to-day'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scott Zolak says Patriots&#39; David Andrews could return from injury ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ9tnYdVM2SJC57JfcEXB4ur3FuBwB5sznB0gONzof5mcvfKGJu5PCWTkXnOxbGYk0K0n2fDpD" alt="Scott Zolak says Patriots&#39; David Andrews could return from injury ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>David Andrews suffered an injury Sunday that reportedly could end his season, but 98.5 The Sports Hub&#39;s Scott Zolak believes the veteran Patriots center&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/patriots/what-should-we-make-patriots-after-win-over-jets-still-hard-say'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What should we make of Patriots after win over Jets? Still hard to say</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ9tnYdVM2SJC57JfcEXB4ur3FuBwB5sznB0gONzof5mcvfKGJu5PCWTkXnOxbGYk0K0n2fDpD" alt="What should we make of Patriots after win over Jets? Still hard to say" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s hard to view the Patriots as an objectively good team after watching Sunday&#39;s offensive display. And yet as Tom Curran writes, they continue to find a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/patriots/patriots-release-rb-jj-taylor-sign-kicker-tristan-vizcaino-practice-squad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots release RB J.J. Taylor, sign kicker Tristan Vizcaino to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ9tnYdVM2SJC57JfcEXB4ur3FuBwB5sznB0gONzof5mcvfKGJu5PCWTkXnOxbGYk0K0n2fDpD" alt="Patriots release RB J.J. Taylor, sign kicker Tristan Vizcaino to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Patriots made a pair of roster moves Monday evening after beating the rival Jets in Week 11.</p></div>
            </div>
        </a><a href='https://www.patriots.com/news/new-england-patriots-postgame-quotes-11-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New England Patriots Postgame Quotes 11/20</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSN3p9kxp786KoXcJ0RmxyTSV717mYIDwxYYltGm8rpasgFFPjbrFe-BkDGeu1fqTL1egw51ogu" alt="New England Patriots Postgame Quotes 11/20" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New England Patriots Head Coach Bill Belichick and select players comment on their game against the New York Jets on Sunday, November 20, 2022.</p></div>
            </div>
        </a>
        </Template></>;
}