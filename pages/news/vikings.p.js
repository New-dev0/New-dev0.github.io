import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vikings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vikings"/>
        <meta name="description" content="Trending News about Vikings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vikings</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/patriots/l78avxm17lpcibnt8wcu" alt="Vikings"/>
            <h3>Recent News</h3>
            <a href='https://www.patriots.com/news/betting-breakdown-week-12-vs-vikings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Betting Breakdown: Week 12 vs. Vikings</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnbmwXiPYM5u--ID5cfayYQz4x4nN68zH4YJzGAuPptu5EwAmAeDeK313rV45wMruzCPY-uVbD" alt="Betting Breakdown: Week 12 vs. Vikings" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Five bets to watch throughout the Patriots - Vikings Thanksgiving matchup.</p></div>
            </div>
        </a><a href='https://www.sportsgrid.com/real-sports/nfl/patriots-vikings-spread-moneyline-total-game-picks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots-Vikings: Spread, Moneyline, Total Game Picks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLs6OLqRBG8rnCMDCtSc9zKejOO6skAYYdsyr77yY0MKiP1lON3dgq1Ppn1TSBEsSurckws33P" alt="Patriots-Vikings: Spread, Moneyline, Total Game Picks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two teams looking to improve their standing in the playoff race will collide tonight, with the New England Patriots visiting the Minnesota Vikings.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/boston/patriots/patriots-vikings-preview-kirk-cousins-justin-jefferson-matchups'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots vs. Vikings preview: Five matchups that will determine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ9tnYdVM2SJC57JfcEXB4ur3FuBwB5sznB0gONzof5mcvfKGJu5PCWTkXnOxbGYk0K0n2fDpD" alt="Patriots vs. Vikings preview: Five matchups that will determine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Do the Patriots have a path to victory against Kirk Cousins and the 8-2 Vikings? Phil Perry explains what New England must do to keep things close in this&nbsp;...</p></div>
            </div>
        </a><a href='https://www.patspulpit.com/2022/11/24/23477184/patriots-vs-vikings-week-12-inactives-david-andrews-ruled-out-thanksgiving'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots vs. Vikings inactives: David Andrews out for Thanksgiving ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoyIpgqTnvx3XgVuVWfjfCOnmhjr3I8-BNkUyxiur041lehe3THajIub2Rp6_arN6g423nsZc1" alt="Patriots vs. Vikings inactives: David Andrews out for Thanksgiving ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Find out who won&#39;t participate in the Week 12 matchup between the Patriots and Vikings.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/patriots-vs-vikings-odds-spread-line-2022-thanksgiving-day-nfl-picks-predictions-by-expert-who-is-52-28/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patriots vs. Vikings odds, spread, line: 2022 Thanksgiving Day NFL ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGlJLfI-6CNmZI1Xah9Ro1S8FciV_bi0-bRldUXbzsr81YgcG4vVmSjUUEUG09wFZajxncx7jM" alt="Patriots vs. Vikings odds, spread, line: 2022 Thanksgiving Day NFL ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>R.J. White has his finger on the pulse of Kirk Cousins, Dalvin Cook, Justin Jefferson, and the Minnesota Vikings.</p></div>
            </div>
        </a><a href='https://www.vikings.com/news/touchdowns-turduckens-vikings-thanksgiving-games'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Touchdowns &amp; Turduckens: Vikings Thanksgiving Games</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdAyfEZXyr0MEwlPfg2aUEWpuqFDOiklpCK459S5AC6bwOHhjFv2q0zieNNi_j7iAA5JUEQTgd" alt="Touchdowns &amp; Turduckens: Vikings Thanksgiving Games" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Go, Nellie: Darrin Nelson closed out the game with a 24-yard touchdown run to cap his hallmark holiday showing with 161 scrimmage yards, which also included a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/bringmethesports/vikings/vikings-patriots-5-things-you-can-count-on'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vikings-Patriots: 5 things you can count on</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCwemP9ppDLy8jxYKweFoltkFJn0NZG0nYRg56n4CPmdj3j0DW67ZreadjE7kx_oFn1PvXgMxZ" alt="Vikings-Patriots: 5 things you can count on" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If the turkey doesn&#39;t put you to sleep on Thursday night, perhaps the Minnesota Vikings and New England Patriots will. Thursday night will be the first time&nbsp;...</p></div>
            </div>
        </a><a href='https://www.patriots.com/news/inactive-analysis-patriots-center-david-andrews-inactive-vs-vikings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inactive Analysis: Patriots Center David Andrews (Thigh) Inactive for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjYMjo6QDN8JJ-NEVQBdM3yGkrFTN8VugllwO4Deqhi0ddfCeF_aK2uOUKYlskA5SYkPitR187" alt="Inactive Analysis: Patriots Center David Andrews (Thigh) Inactive for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Minneapolis — The Patriots are readying for a Thanksgiving night clash with the Minnesota Vikings but will try to earn a road win without their captain on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vikings.com/news/vikings-patriots-week-12-inactives'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vikings vs. Patriots Week 12 Inactives</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9O_1Qytb8QadBYhdb-FWlQl4h7BheyzzqPR9FGwNvR1hkvzjHrF2J4qJ5XAkiYsG9CF1L9Vyn" alt="Vikings vs. Patriots Week 12 Inactives" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cornerback Andrew Booth, Jr. Outside linebacker Luiji Vilain. Tackle Vederian Lowe. Tackle Christian Darrisaw. Defensive lineman Esezi Otomewo. Defensive&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/bringmethesports/vikings/vikings-patriots-inactive-list-key-players-missing-for-both-teams'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vikings-Patriots inactive list: Key players missing for both teams</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROio-ukWj1-lV8izxVV4GByuqExJxNqrvTKGt-tDOukoRA4QPMaDesAVN-fwG8iF0dNsGCYHtT" alt="Vikings-Patriots inactive list: Key players missing for both teams" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pressure on Patriots quarterback Mac Jones will be a big thing to watch because Minnesota is without cornerbacks Akayleb Evans (concussion) and Andrew Booth Jr.</p></div>
            </div>
        </a>
        </Template></>;
}