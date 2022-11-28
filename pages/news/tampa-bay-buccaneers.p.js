import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tampa Bay Buccaneers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tampa Bay Buccaneers"/>
        <meta name="description" content="Trending News about Tampa Bay Buccaneers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tampa Bay Buccaneers</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/buccaneers/vh5qbrg4y1dnqanlylsa" alt="Tampa Bay Buccaneers"/>
            <h3>Recent News</h3>
            <a href='https://www.buccaneers.com/news/bucs-cleveland-browns-week-12-recap-postgame-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bucs Suffer Painful Overtime Loss in Cleveland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqY5oRNSvDxos80zKqik6x2hIDszDwuPKKTqt98osTxcutNYR_AQcJyRs-2CJdVLJqNT17iRyJ" alt="Bucs Suffer Painful Overtime Loss in Cleveland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bucs Suffer Painful Overtime Loss in Cleveland &middot; The Bucs lost a 17-10 lead in the game&#39;s final minute on a stunning fourth-down catch by TE David Njoku, then&nbsp;...</p></div>
            </div>
        </a><a href='https://www.beaconjournal.com/story/sports/pro/browns/2022/11/27/browns-vs-buccaneers-score-updates-highlights-analysis-nfl-week-12-tom-brady-myles-garrett/69671038007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Replay: Browns defeat Buccaneers 23-17 with clutch performances ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwOgXRPt45e7FOD0PTm9MBTbpLGAFaDB-7Xfu1xbhhUHVk1f-tkWQsSUKon4HTNyMq3C_f8lFn" alt="Replay: Browns defeat Buccaneers 23-17 with clutch performances ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Check back throughout today for the latest scoring and updates on the Cleveland Browns game vs. Tom Brady and the Tampa Bay Buccaneers.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/buccaneers/gameday/gameday-recap-the-tampa-bay-buccaneers-fail-to-win-third-straight'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gameday Recap: The Tampa Bay Buccaneers Fail to Win Third ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnAIhgZoitB6mCqz5MibRUoKETr9bzoKq_YNv8TtT0dZXp7VgcUUYBvPh_gaCJFAiKu4BSmDeT" alt="Gameday Recap: The Tampa Bay Buccaneers Fail to Win Third ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tampa Bay Buccaneers can&#39;t continue their momentum in a 23-17 OT loss to the Cleveland Browns.</p></div>
            </div>
        </a><a href='https://www.dawgsbynature.com/2022/11/27/23480505/cleveland-browns-tie-the-game-late-finish-it-23-17-against-tampa-bay-buccaneers-in-overtime'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cleveland Browns tie the game late, finish it 23-17 against Tampa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPDJGzjipawEWcLMhqKYY3vXu9qMTTT8Jy_-hs3ygT2JmIFqAEZ6Wa3BO4vhn8WXuRMKrCBd7j" alt="Cleveland Browns tie the game late, finish it 23-17 against Tampa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Would the result be any different this week? QB Jacoby Brissett was 3-of-3 for 28 yards, but RB Nick Chubb had a 15-yard run, and then WR Anthony Schwartz&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bucsnation.com/2022/11/27/23480218/tampa-bay-buccaneers-at-cleveland-browns-week-12-inactives-leonard-fournette'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tampa Bay Bucs at Cleveland Browns: Week 12 Inactives</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkV4yeN592IfwnJb9lKVR64fIlMX_YVLTXZOS4KkBBU1D0cqmihxcaHZOKH2jq3u3bbFskjDTt" alt="Tampa Bay Bucs at Cleveland Browns: Week 12 Inactives" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leonard Fournette is out for the Bucs as they look to win their third straight.</p></div>
            </div>
        </a><a href='https://www.tampabay.com/sports/bucs/2022/11/27/bucs-browns-live-updates-tom-brady-rachaad-white-chris-godwin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live updates: Browns beat Bucs in overtime</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQt0TMT2lsoV9IC-mn8jk_ywwGWlz8d3jlNY_PmoZYQnmuwYuO6jnUaDT_eRP_-EkE-v9nvcOyP" alt="Live updates: Browns beat Bucs in overtime" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>David Njoku&#39;s one-handed touchdown reception with less than a minute remaining in regulation ties the game, and Cleveland wins in the extra period.</p></div>
            </div>
        </a>
        </Template></>;
}