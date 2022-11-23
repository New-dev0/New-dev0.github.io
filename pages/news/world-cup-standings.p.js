import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup standings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup standings"/>
        <meta name="description" content="Trending News about World Cup standings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup standings</h1>
            <Image width={800} height={500} src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-11/world-cup-qatar-2022-logo.png?itok=x3uFWbm0" alt="World Cup standings"/>
            <h3>Recent News</h3>
            <a href='https://www.sportingnews.com/us/soccer/news/world-cup-standings-2022-table-live-updated-group-qatar/lv5qodvbdsecrwf0gwelqzn0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 standings: Live updated table, points for every ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKP4DMhsrunikZgHckxl8e4mwxxYpnRKyZ0WoNJqNNgBdfFtFWax0grviv8u5dDKsxwHwGU9VB" alt="World Cup 2022 standings: Live updated table, points for every ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Only the top two teams in each group advance to the knockout rounds at the 2022 FIFA World Cup, and based on how evenly matched each group appears on paper,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pulse.ng/sports/football/fifa-world-cup-qatar-2022-all-results-fixtures-scores-live-standings-goalscorers/8gwktmv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: All results, fixtures, scores, live standings</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7ZR189-zV-Lbd4MDNxWp54SebDVDDIr8qvi-aZx7sxu3CIe8RgVWs7i4jCQ3GGINK3FQgWK-f" alt="FIFA World Cup 2022: All results, fixtures, scores, live standings" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Click here to see all the World Cup results, fixtures, scores, live standings, goalscorers, and group tables | Pulse Nigeria.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/trending/sports/news-qatar-fifa-world-cup-2022-results-group-wise-points-table-standings-pool-lionel-messi-cristiano-ronaldo-neymar-brazil-argentina-209162'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>(France 4-1 Australia) FIFA World Cup 2022: Results, Group Wise ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDazZfxZO6wYsmVSszD57DIzwrFZjEM2oYGgPkpJDt-M_LfBN8zNII7IQtsxr-5AE7KoIbRu3G" alt="(France 4-1 Australia) FIFA World Cup 2022: Results, Group Wise ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup 2022: Check out the comprehensive points tally, results, goal scorers, group-wise points table, pool standings, fixtures, and full match&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thequint.com/sports/fifa-world-cup-2022-points-table-updated-top-teams-denmark-vs-tunisia-group-d-points-table'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Points Table: Top Teams, Updated After ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7V3pK6aq6V-3lXTNGpe9ePhP1fFcAw4qIupvRRzrcmaRsZIc1s7HvVtr36YEAWntNd86UWjW2" alt="FIFA World Cup 2022 Points Table: Top Teams, Updated After ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The FIFA World Cup 2022 Points Table after Denmark vs Tunisia match, on 22 November is here. You can take a look at the updated points table of Group D here&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latestly.com/sports/football/fifa-world-cup-2022-points-table-updated-live-check-team-standings-qualification-status-of-each-group-with-goal-difference-of-football-tournament-in-qatar-4481221.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Points Table Updated Live: France Grab ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6fFe99lNcbgAk3WaaZExhyeWRnojo7vNcqLv2YFTs_bvJqgWSYs0I4uPXSUGD4O-8QM7pSNPm" alt="FIFA World Cup 2022 Points Table Updated Live: France Grab ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Check complete and updated Football World Cup Qatar 2022 points table and team standings. The group stage of the FIFA World Cup 2022 will be played in a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}