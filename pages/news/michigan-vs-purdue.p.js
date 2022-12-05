import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michigan vs Purdue</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michigan vs Purdue"/>
        <meta name="description" content="Trending News about Michigan vs Purdue" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michigan vs Purdue</h1>
            <Image width={800} height={500} src="https://sportshub.cbsistatic.com/i/r/2022/11/30/069c8b68-76d8-4364-b755-c243fee1feb3/thumbnail/1200x675/1ee0505a884e420663236f981142c216/jj.jpg" alt="Michigan vs Purdue"/>
            <h3>Recent News</h3>
            <a href='https://www.cbssports.com/college-football/news/how-to-watch-michigan-vs-purdue-tv-channel-live-stream-online-big-ten-championship-game-kickoff-time-pick/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Michigan vs. Purdue: TV channel, live stream online ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGy-rrP1ZKI4rsh2Cf1IXMTvQK84duwgG6kI1-G1c1Dpjxym7XLprwvyeMryEz4bVB61-_jgK5" alt="How to watch Michigan vs. Purdue: TV channel, live stream online ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan seems destined for the College Football Playoff, but Purdue looks to steal the Big Ten title.</p></div>
            </div>
        </a><a href='https://www.maizenbrew.com/football/2022/12/3/23491334/game-thread-michigan-purdue-wolverines-boilermakers-jim-harbaugh-mccarthy-big-ten-championship-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game thread: No. 2 Michigan vs. Purdue</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTg7uJVyaQocWKl93X5IWHA7axfLw8fFhwTkWPRkhKLLqYrYqD5OoZW9m1k9KUikSpScSP3ysAP" alt="Game thread: No. 2 Michigan vs. Purdue" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan has the opportunity to cement itself as the top dog in the Big Ten once again.</p></div>
            </div>
        </a><a href='https://www.mlive.com/wolverines/2022/12/how-to-watch-michigan-vs-purdue-in-big-ten-championship-free-live-stream-kickoff-time-channel.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Michigan vs. Purdue in Big Ten championship: Free ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ17Fup6BkcHHmH6C97WsUCHQVH58Gtw9lEPWznlBpcmuhzFaUwb_g205jyHkiddR-vKnnZrNXi" alt="How to watch Michigan vs. Purdue in Big Ten championship: Free ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan and Purdue will play for the Big Ten championship tonight in Indianapolis. The 12-0 Wolverines are back in the title game after knocking off Ohio&nbsp;...</p></div>
            </div>
        </a><a href='https://www.digitaltrends.com/movies/big-ten-championship-michigan-purdue-where-to-watch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan vs. Purdue live stream: How to watch 2022 Big Ten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-DKfJqjVPHmt-NHjG_YVvZwP5-08EqWienaAvOWLGvpLZqbGO42_LGC1LXyhRyyA2hEGHWOFz" alt="Michigan vs. Purdue live stream: How to watch 2022 Big Ten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Saturday night, the Big Ten will decide its conference champion when the No. 2 Michigan Wolverines battle the Purdue Boilermakers.</p></div>
            </div>
        </a><a href='https://www.cleveland.com/sports/college/2022/12/michigan-vs-purdue-football-how-to-watch-big-ten-championship-game-2022-free-12322.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan vs. Purdue football: How to watch Big Ten Championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRr60mM69OoPrHdmMY85uwKugg8Ou2ttHr1cyYoCnpxrjzwVIQeHRUggfx-lLaRW4eM5BFHmYmw" alt="Michigan vs. Purdue football: How to watch Big Ten Championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Find out when and where to watch Michigan face Purdue in the Big Ten Championship Game for free.</p></div>
            </div>
        </a><a href='https://www.indystar.com/story/sports/college/purdue/2022/12/03/big-10-championship-game-michigan-vs-purdue-score-live-updates-indianapolis-wolverines-boilermakers/69698729007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Big Ten Championship game updates: Can Purdue play ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFDNvtnjsij_eDDowGbYAoGGGAPHmQ0fCyr7dV0TWn-Y8gXJ_eRJcjcGhgAjHExMb4vRjw4QNy" alt="Big Ten Championship game updates: Can Purdue play ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ll keep you updated on Saturday night&#39;s Big Ten Championship game at Lucas Oil Stadium.</p></div>
            </div>
        </a><a href='https://www.detroitnews.com/story/sports/college/university-michigan/2022/12/03/live-updates-michigan-wolverines-purdue-boilermakers-big-ten-championship-game/69684630007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live updates: Michigan football vs. Purdue, Big Ten championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdRyiolR_JE5lGQy7SxAimzi6WAKGIKB2F3fagO1Y8QT7WPupYpHFuHQ-CZPHlUO1hworX6r0l" alt="Live updates: Michigan football vs. Purdue, Big Ten championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow along here for live updates from Detroit News contributor Matthew Scheidel as Michigan takes on Purdue in the Big Ten championship game.</p></div>
            </div>
        </a>
        </Template></>;
}