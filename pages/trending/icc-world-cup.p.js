import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ICC World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ICC World Cup"/>
        <meta name="description" content="Trending News about ICC World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ICC World Cup</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/10/16/600x338/PTI10-15-2022-000082B-0_1665912332315_1665912332315_1665912352497_1665912352497.jpg" alt="ICC World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/sports/cricket-news/icc-t20-cricket-world-cup-opening-ceremony-schedule-timings-streaming-details-11665910096686.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 Cricket World Cup Opening Ceremony: Schedule, timings ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRllgoUkINpvily36vD3KD8tPokWTRmxrI-LXxbVW7UTD7Vodg1oxiDQ_ExLM1-o8CsPJvaoAMH" alt="ICC T20 Cricket World Cup Opening Ceremony: Schedule, timings ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The most awaited Cricket T20 World Cup 2022 will have a grand opening ceremony on Sunday, at the magnificent Australian grounds. The ceremony which is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.icc-cricket.com/news/2853736'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Namibia stun Sri Lanka to claim T20 World Cup opener</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRijQ6VtjMVmO5PAa2rIw3zHnmmVgl9JrCsRFxXkxEWOnrlp1QGhibgZzFZUQDr00CrIAHcxCT6" alt="Namibia stun Sri Lanka to claim T20 World Cup opener" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A strong team performance has helped Namibia register a stunning 55-run upset victory over Sri Lanka in the ICC Men&#39;s T20 World Cup clash opener in Geelong&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t20worldcup.com/news/2852683'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All the commentators at the ICC Men&#39;s T20 World Cup 2022 – The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQw3XVrul6JSuXBGRt-GCOcQu7sI7Eq1loAklTwMZC3HSeO2kIXHvB0IgUktN-Hla0qg6b8uAMp" alt="All the commentators at the ICC Men&#39;s T20 World Cup 2022 – The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The ICC have revealed the commentary team for the 16-team tournament with several popular names featuring alongside some recently retired cricketers like Eoin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t20worldcup.com/news/2853120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The big selection decisions and predicted first XI for every T20 World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDGMXae06xa6T4fjvCwsweosWv000jXbQ1baTvIbRJQNoolJRNuDYNH8JXuGgFPPvEFQikhjKB" alt="The big selection decisions and predicted first XI for every T20 World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Which big names will miss selection for the starting XI of every team at the ICC Men&#39;s T20 World Cup 2022?</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/t20-world-cup/uae-vs-ned-live-streaming-info-online-tv-uae-vs-netherlands-world-cup-live-telecast-details/article66016907.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UAE vs NED Live Streaming Info T20 World Cup 2022 Netherlands ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSOQ0ujUqW_gJ8S9i4-AmZhRJYYmzDvD0DLqu2giOqYaGSxqTY-LBvjRd96jJf6NLRoc0Ztgag" alt="UAE vs NED Live Streaming Info T20 World Cup 2022 Netherlands ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UAE vs NED: Get the Live Streaming Info, Telecast Details as UAE takes on the Netherlands in the Group A encounter of the ICC T20 World Cup 2022.</p></div>
            </div>
        </a><a href='https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/sri-lanka-vs-namibia-icc-t20-world-cup-2022-live-cricket-score-updates-1st-match-group-a-oct-16/liveblog/94889515.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sri Lanka vs Namibia, ICC T20 World Cup 2022: Namibia stun Sri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6RJTFNGZVNHoC10HhqrvbAjb8EtJCOE0zjrTBrsawgbdlliw3tjR53vAcOIW4moWS78ok58Q7" alt="Sri Lanka vs Namibia, ICC T20 World Cup 2022: Namibia stun Sri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get live cricket score updates of ICC T20 World Cup match between Sri Lanka and Namibia. Check live scorecard, ball-by-ball commentary, cricket score.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/trending/sports/news-icc-t20-world-cup-2022-sri-lanka-vs-namibia-squads-venue-when-and-where-to-watch-sl-vs-nam-match-live-streaming-203386'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup 2022 Sri Lanka vs Namibia: Squads, venue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQf9U-SHBCJ_E5JimjeKYfpogKrH60xoAl9coXU6HHBPTtIQ-ctUSd2SdiEb0PH6AO5Pr7QnmQ-" alt="ICC T20 World Cup 2022 Sri Lanka vs Namibia: Squads, venue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022 Sri Lanka vs Namibia Match, First Round - Match 1: The 2022 T20 World Cup kicks off in Australia on Sunday, October 16.</p></div>
            </div>
        </a><a href='https://www.icc-cricket.com/news/2853922'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands win a final-over thriller against the UAE</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRw_LkoRqMrXnMn1C_6m8HQYFVDhuu8g7G4_Qit13w8TxraU6wmSDJykHRydf-ntSEfYftY3HU4" alt="Netherlands win a final-over thriller against the UAE" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The second match of the ICC Men&#39;s T20 World Cup turned out to be a thriller as Netherlands edged past UAE by three wickets in the final over to gain a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/icc-t20-world-cup-2022-minnows-namibia-crush-sri-lanka-by-55-runs-on-opening-days-in-pics-photos-230363'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup 2022: Minnows Namibia Crush Sri Lanka By 55 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpjhj40aAoG1mzP0O7H8RIKEqsBf1Bbx8Ycz0V70RJRhTdyuFHGcEPFSoXfGStCjgS0vB1byrZ" alt="ICC T20 World Cup 2022: Minnows Namibia Crush Sri Lanka By 55 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Namibia caused a massive upset on the opening day of the ICC T20 World Cup 2022 with a 55-run win over 2014 champions and reigning Asia Cup winners Sri&nbsp;...</p></div>
            </div>
        </a><a href='https://sportscafe.in/cricket/articles/2022/oct/16/icc-world-t-20-twitter-reacts-to-netherland-eking-out-three-wicket-victory-over-the-uae-in-low-scoring-thriller'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC World T20 | Twitter reacts to Netherland eking out three-wicket ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ICC World T20 | Twitter reacts to Netherland eking out three-wicket ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Netherlands and the United Arab Emirates produced the greatest advertisement ever for associate cricket on Sunday with an edge-of-the-seat thriller that&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}