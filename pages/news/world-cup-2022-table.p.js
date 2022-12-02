import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup 2022 table</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup 2022 table"/>
        <meta name="description" content="Trending News about World Cup 2022 table" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup 2022 table</h1>
            <Image width={800} height={500} src="http://cdn.wionews.com/sites/default/files/2022/12/01/314997-collage-maker-01-dec-2022-0724-pm.jpg" alt="World Cup 2022 table"/>
            <h3>Recent News</h3>
            <a href='https://www.wionews.com/sports/fifa-world-cup-2022-rankings-points-table-team-standings-of-all-groups-after-day-11-539174'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Rankings- Points table, team standings of all ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8nkxvPDwAMioqjkJ-Fm0I2RyohUAKP1v89ocD-3WAt2UKGZIwG2luxbLtbaVEHWXBOTE0U3JY7g" alt="FIFA World Cup 2022 Rankings- Points table, team standings of all ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup 2022 Points Table &amp; Standings: After four enthralling matches on day 10 of the FIFA World Cup 2022, we saw Argentina and Poland from Group C&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/fifa-world-cup-points-table-live-updates-qatar-2022-group-e-f-stage-standings-matches-goals-gf-ga/article66210820.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup points table Group E: Japan, Spain through to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnlPqzEAd1SXe55q37tBZT-ZoWlwMMXA6wG3KxUlj7UNZHx6oHsX4tUTbjJyl4PgxFQ6OqF3Z5" alt="FIFA World Cup points table Group E: Japan, Spain through to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Group E, Japan stunned Spain 2-1 to take spot. Germany and Costa Rica were knocked out dispite the former&#39;s 4-2 win.</p></div>
            </div>
        </a><a href='https://soccer.nbcsports.com/2022/12/01/world-cup-2022-group-a-qatar-senegal-netherlands-ecuador-schedule-fixtures-rankings-table/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 Group A: Qatar, Senegal, Netherlands, Ecuador ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHgvQmzUWRROwFItrmhnoKxzaPSna_lCswMvVeENd5UqcPMtDKjYmpxKGX59P3CoqA0kM-di3T" alt="World Cup 2022 Group A: Qatar, Senegal, Netherlands, Ecuador ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Group A in the 2022 World Cup was intriguing, as African champs Senegal and the Netherlands made it into the last 16 ahead of Ecuador and Qatar.</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20609875/world-cup-2022-group-f-live-table-croatia-belgium-morocco-canada/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 Group F LIVE TABLE: Standings as Morocco TOP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT01dACJXhF3GB8wa2HFkZeGTzFdAH3Jl780SYRjDeC7IW_iJ1M_abv1EQL4qztIgH2m4lbk_xG" alt="World Cup 2022 Group F LIVE TABLE: Standings as Morocco TOP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IT is all to play for in Group F as Croatia, Belgium and Morocco can all still qualify for the last-16 of the 2022 World Cup.Morocco are ahead against.</p></div>
            </div>
        </a><a href='https://www.thequint.com/sports/fifa-world-cup-2022-points-table-updated-team-standings-here-check-the-top-teams-and-other-details'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Points Table: Updated Top Teams Standings ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_H_nl8Ol7IUucMda5w6jrm93zw3E7ttvPBypJrLprLDQQaLuAsPSLB9gmcY7_qZIw-8bujmlx" alt="FIFA World Cup 2022 Points Table: Updated Top Teams Standings ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The FIFA World Cup 2022 Points Table is updated here after every match. You can take a look at the points table of all groups to see the top teams.</p></div>
            </div>
        </a>
        </Template></>;
}