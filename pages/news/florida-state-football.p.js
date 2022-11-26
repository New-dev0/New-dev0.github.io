import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Florida State football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Florida State football"/>
        <meta name="description" content="Trending News about Florida State football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Florida State football</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/26/PTAL/27927b9a-9967-41b3-a6c7-6dad5cbcd3b5-FSU_v_UF_first_half342.JPG?auto=webp&crop=4063,2285,x0,y133&format=pjpg&width=1200" alt="Florida State football"/>
            <h3>Recent News</h3>
            <a href='https://www.gatorsports.com/story/football/2022/11/25/florida-gators-football-5-takeaways-loss-florida-state-seminoles-rivalry-game/10762081002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twenty-eight yards short: 5 takeaways from Florida&#39;s loss to FSU in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRA8VxWVVzQ9gs72az4CcTS9q63Uxk5w8ncfTBXJowUDOasrrqyx0GzmFKi3E1-1DAs9LlI6mZn" alt="Twenty-eight yards short: 5 takeaways from Florida&#39;s loss to FSU in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida drove to the FSU 28 with 39 seconds remaining, but on a 4th-and-11 play, quarterback Anthony Richardson&#39;s pass fell incomplete in the end zone.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-football/news/florida-vs-florida-state-live-stream-watch-online-tv-channel-prediction-pick-football-game-odds-spread/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida vs. Florida State live stream, watch online, TV channel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWcL_pwtjoFaBDxt8f8GjcbCgO4mkeWPxg_vaDk5w_GvNqY9K8KcgmAocyOcSvGOBdwWBo9ul-" alt="Florida vs. Florida State live stream, watch online, TV channel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Seminoles look to snap a three-game losing streak to the Gators at home on Black Friday.</p></div>
            </div>
        </a><a href='https://247sports.com/college/florida-state/LongFormArticle/FSU-Football-Florida-Gators-Live-Gameday-Updates-198504970/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live Gameday Updates: FSU vs. Florida - Pregame Observations ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5W0EjOHd5Rzs_ql4rQz8DCcrJrQQWgFl9lrpgfO5dwFJ_hInohHIE7NmpVPP39fN5Ffm3FzxF" alt="Live Gameday Updates: FSU vs. Florida - Pregame Observations ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TALLAHASSEE -- No. 16 Florida State hosts Florida on Friday at Doak Campbell Stadium (79,560) at 7:30 p.m. The game will be broadcast nationally on ABC.</p></div>
            </div>
        </a><a href='https://www.tomahawknation.com/florida-state-seminoles-football-recruiting-fsu-class-commit-visit-offer/2022/11/25/23476976/official-visitor-list-norvell-players-cfb-acc-gators-game-schedule-247-sports-on3-rivals-rankings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida State football recruiting visitor list for FSU vs. UF</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-RPEXK6wqo8svEVBdVsPP9EA1Or5Jjf4Ns6JQLRoWWbYKvj8WI7OKeWU640flTSIW6zsXn6-8" alt="Florida State football recruiting visitor list for FSU vs. UF" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Norvell&#39;s Florida State Seminoles with a massive visitor list for rivalry game vs. Florida Gators Friday night in Tallahassee.</p></div>
            </div>
        </a><a href='https://floridagators.com/news/2022/11/24/football-the-opening-kickoff-gators-at-no-16-florida-state'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Opening Kickoff: Gators at No. 16 Florida State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAalSUV1MjoGVQR7amItbpVKTRtQEkenmq4mWM-l_PQ-vWjuwAZb7jx4i5flU1fupKs2dpPjme" alt="The Opening Kickoff: Gators at No. 16 Florida State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida (6-5) and Florida State (8-3) close the regular season with the first Friday night showdown in the rivalry&#39;s storied history.</p></div>
            </div>
        </a><a href='https://www.tallahassee.com/story/sports/college/fsu/football/2022/11/25/fsu-florida-game-score-live-updates-florida-state-football-highlights-seminoles-gators/10759217002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game recap: Florida State Seminoles defeat Florida Gators for first ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWlzRpLSKCAqR8wUb348SGv-gd-yyt2bf9SnbYt0S5r0d5zOHLoYGTHZc9Do4PnQMNfgLtRP6S" alt="Game recap: Florida State Seminoles defeat Florida Gators for first ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jordan Travis and the FSU Seminoles host Anthony Richardson and the Florida Gators on November 25, 2022 at Doak Campbell Stadium in Tallahassee.</p></div>
            </div>
        </a><a href='https://247sports.com/college/florida-state/Article/FSU-Football-Recruiting-4-star-WR-Visit-Florida-State-Seminoles-News-198486157/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIP SCOOP: Florida State to host 4-star WR committed to another ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmDisa3-2Kyguk3zPts6f73vZ2pXb6IvOT_D6qEq0KwBkMSEiVuRmCWYpFpuZgp7ClLcA5Aj_K" alt="VIP SCOOP: Florida State to host 4-star WR committed to another ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VIP SCOOP: Florida State to host 4-star WR committed to another ACC program today &middot; Edit &middot; Slot to 247Sports Home &middot; Slot to Florida State Seminoles Newsletter&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}