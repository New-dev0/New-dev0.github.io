import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IND</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IND"/>
        <meta name="description" content="Trending News about IND" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IND</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/10/19/750x506/t20-world-cup_1666165965.jpeg" alt="IND"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/live/cricket/cricket-news/ind-vs-nz-warm-up-live-cricket-score-t20-world-cup-2022-india-vs-new-zealand-practice-match-at-brisbane-ground'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: भारत और न्यूजीलैंड के बीच अभ्यास मैच बारिश के कारण धुला ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPm0KmArS14layzWgSwgcTPmWTItlHFQv2r1d-O5vhHkopGQVCDP-CIG0lDegAzDmSkLQcYcni" alt="IND vs NZ: भारत और न्यूजीलैंड के बीच अभ्यास मैच बारिश के कारण धुला ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ: भारत और न्यूजीलैंड के बीच अभ्यास मैच बारिश के कारण धुला, ब्रिस्बेन में टॉस भी नहीं&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/match-report-ind-vs-nz-warm-match-live-updates-india-fight-with-new-zealand-in-2nd-warm-up-match-live-at-gabba-brisbane-23150666.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ Match: बारिश के कारण रद हुआ भारत और न्यूजीलैंड के बीच ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQ4WPvxOIHZcrAXXm-EGhL7nrP4qqVWLZo_1JdMOTtlOg9KLv8vCwAhV9t2XhjlFfJ0TfBVKa4" alt="IND vs NZ Match: बारिश के कारण रद हुआ भारत और न्यूजीलैंड के बीच ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ Match भारत और न्यूजीलैंड के बीच दूसरा वॉर्म-अप मैच बारिश के कारण रद हो गया है।</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/ind-vs-pak-t20-world-cup-2022-team-india-equation-against-pakistan-know-strength-and-weakness'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs PAK: पाकिस्तान के खिलाफ मुकाबले के लिए कितनी तैयार टीम इंडिया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5_elRVn55i0vofq1eE07dDcVlKEshx_J-oPM_ukkqRwGqIm6sPac6gXNTfBRZGG-zCIZurjUb" alt="IND vs PAK: पाकिस्तान के खिलाफ मुकाबले के लिए कितनी तैयार टीम इंडिया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पाकिस्तान के खिलाफ मैच में भारत के लिए गेंदबाजी चिंता का विषय होगी। वहीं, पिच मुश्किल&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ind-vs-pak-how-babar-azam-select-the-bat-and-how-many-bats-he-carry-know-here-2241786'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs PAK: टीम इंडिया के सामने किस बैट से बल्लेबाजी करेंगे बाबर आजम ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRs4mdeaXFIf5XFtdXQULzdxZ1CQs6NYnDDLEONSPpIx7pGZ7gBSb-lmQKhaEN1le60ypzB0CAn" alt="IND vs PAK: टीम इंडिया के सामने किस बैट से बल्लेबाजी करेंगे बाबर आजम ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Babar Azam: भारत के खिलाफ महामुकाबले से पहले पाकिस्तान के कप्तान बाबर आजम ने बताया कि वह&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/zee-hindustan/sports-news/live-updates/ind-vs-nz-warm-up-match-live-score-india-vs-new-zealand-t20-world-cup-2022-warm-up-ball-by-ball-commentary-follow-live-updates/1401377'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: भारत-न्यूजीलैंड के वार्मअप मैच पर</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQL5_AkQ78XpeA9zpbXltjavAYj0KPTjyUK4boi6aUwgjGn4KjRHwuTvQNtcpvhhio0gBOWBZ5X" alt="IND vs NZ: भारत-न्यूजीलैंड के वार्मअप मैच पर" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ Live Score: ऑस्ट्रेलिया की मेजबानी में खेले जा रहे टी20 विश्वकप 2022 में पहले दौर का खेल&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/india-vs-new-zealand-live-score-t20-world-cup-2022-warm-up-match-ind-vs-nz-today-latest-scorecard-at-brisbane-101666159656248.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ, T20 World Cup warm-up highlights: Match called off due ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTSSfBgH01HlC-h3DWOImvlxCQNX7cwiJ3m2pjgKGf1A7K6xxzhPfV5Gl4KmwvmnDHBf6FuzhQ" alt="IND vs NZ, T20 World Cup warm-up highlights: Match called off due ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ, T20 World Cup warm-up highlights: Relentless rain in Brisbane prevented the match from going forward.</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ind-vs-nz-t20-world-cup-2022-warm-up-match-has-been-called-off-due-to-rain-india-vs-new-zealand-practice-match-2241515'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ T20 Warm-Up Match: बारिश की वजह से रद्द हुआ भारत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_9lM0mboPa5J0KomhIknQDJzru7eo0BVjZZiC3CGGtdscdXbiNy0t_JkQW3IeNpt1JgCFDBay" alt="IND vs NZ T20 Warm-Up Match: बारिश की वजह से रद्द हुआ भारत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ T20 Warm-Up Match: भारत और न्यूजीलैंड के बीच खेले जाने वाला वॉर्म-अप मैच बारिश की वजह से&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/t20-world-cup-2022-supe-sunday-ind-vs-pak-match-rohit-sharma-babar-azam-india-pakistan-tspo-1559671-2022-10-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs PAK T20 WC: वार्म-अप के बाद अब टीम इंडिया का असली इम्तिहान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQh25e602Dt7-YUgmFdvsLHcrQMaA9NlKnp3I__n_HD0gq45aqkHxlou_Xci8aLmMxIn2KzgquD" alt="IND vs PAK T20 WC: वार्म-अप के बाद अब टीम इंडिया का असली इम्तिहान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रोहित शर्मा की कप्तानी वाली भारतीय टीम अपने अभियान की शुरुआत 23 अक्टूबर को पाकिस्तान&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-india-vs-new-zealand-t20-world-cup-2022-warm-up-match-may-washout-due-to-rain-also-possible-of-5-over-a-side-game-7240538.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ Warm up match: भारत बनाम न्यूजीलैंड वॉर्म-अप मैच बारिश के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRnarIwu46VLJuAblHURLlJGxibIbCKjbesnXvlr2MPWtJPdLWdfkmUJgGdXXFmOiqQMnQT8Ci" alt="IND vs NZ Warm up match: भारत बनाम न्यूजीलैंड वॉर्म-अप मैच बारिश के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत और न्यूजीलैंड के बीच टी20 वर्ल्ड कप 2022 का वॉर्म-अप मैच आज ब्रिस्बेन में होना था,&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-india-vs-new-zealand-warm-up-match-t20-world-cup-live-score-and-updates-4768221.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ T20I Warm Up Match Highlights: बारिश की वजह से भारत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-42M3PQU0G6u2NR-5D-RyML_sMGE33jaBfDw8bI98A6PIPqkrrQBmMS8gCpPq5kQqP91JufLq" alt="IND vs NZ T20I Warm Up Match Highlights: बारिश की वजह से भारत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs New Zealand T20 World Cup Warm Up Match Highlights: भारतीय टीम को अपना दूसरा वॉर्म-अप मुकाबला बुधवार को&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}