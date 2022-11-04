import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man City</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man City"/>
        <meta name="description" content="Trending News about Man City" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man City</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/upload/c_crop,w_3000,h_1687,x_0,y_218/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01ggy9cgcktarvz04g7g.jpg" alt="Man City"/>
            <h3>Recent News</h3>
            <a href='https://www.90min.com/posts/man-city-vs-fulham-premier-league-team-news-lineups-prediction-5-11-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City vs Fulham - Premier League: Team news, lineups ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpZ5jbQDu6uLqs7E8zoZjh3xxbKJKnG9Zd8bN_f9xodqhftiyr6BwcuRVieC4NrPOiiXcFbHYu" alt="Man City vs Fulham - Premier League: Team news, lineups ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City host Fulham on Saturday afternoon in a meeting between the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mancity.com/news/club/manchester-city-club-statement-v-sevilla-63803097'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Club statement: Manchester City v Sevilla FC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnYXPHSi-DhoO_7ATgV5sM0SulJ6-FvgbiYub1DmjV2QcC37zGXqmzgTOq_xOVkDvz_yEkJJBe" alt="Club statement: Manchester City v Sevilla FC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City strongly condemns the racist abuse that Rico Lewis was subject to from Sevilla supporters at yesterday&#39;s match.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/fantastic-man-city-wonderkid-lewis-lauded-guardiola-stunning-debut-sevilla/blt295d5090e55c11b2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Fantastic&#39; Man City wonderkid Lewis lauded by Guardiola after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-ZhXO6XmVIw-m3a2veus2ABqGFsm009xpXwMyIjnx19fUyFO5eXBizF77G0FYkJzUDyu-lnGH" alt="&#39;Fantastic&#39; Man City wonderkid Lewis lauded by Guardiola after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pep Guardiola hailed Manchester City&#39;s 17-year-old sensation Rico Lewis after he scored on his full senior debut against Sevilla.</p></div>
            </div>
        </a><a href='https://www.mancity.com/citytv/mens/manchester-city-pre-fulham-training-video-63803094'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All eyes on Premier League clash with Fulham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQtpnCU2lufMjht1B8HZbHJXYy-VZE8jNotNcPpdqiEkh8JSOxXc3JLCNaz0soBoITssCSOuVYT" alt="All eyes on Premier League clash with Fulham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It was straight back to work for City on Thursday as the focus switched to domestic issues – and Saturday&#39;s crucial Premier League home game against Fulham.</p></div>
            </div>
        </a><a href='https://www.mancity.com/news/club/cityplay-launch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester City and Playermaker launch CITYPLAY wearable ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdIjPpnFBQWsKIdYPGCtVM9EjwHi-EEpz_7mH-bv2z7xwPuu6PJMoadYTYqjaPPSa6gSAUL9qj" alt="Manchester City and Playermaker launch CITYPLAY wearable ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CITYPLAY combines Playermaker&#39;s smart wearable football tracker - currently used within Man City&#39;s Academy to drive insight and provide analysis - with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.westlondonsport.com/fulham/silva-wants-fulham-to-embrace-daunting-trip-to-man-city'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Silva wants Fulham to &#39;embrace&#39; daunting trip to Man City</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLkAd_HuLqLLexXNl-vl4i7Cq0A3cRRUu9TE4iOrjflD_AvmVG4QjQ26IoWaNSLU3EOuCNgGdD" alt="Silva wants Fulham to &#39;embrace&#39; daunting trip to Man City" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marco Silva admits Fulham face a daunting prospect taking on Manchester City on Saturday, but wants his players to relish the challenge.</p></div>
            </div>
        </a><a href='https://www.mancity.com/citytv/mens/manchester-city-champions-league-group-stage-goals-63803079'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Every goal from City&#39;s Champions League group games</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWu7xIJZ32jwMJG2NgHwu-HyM3xE8oBj9WLdUBUs_cOYNzIGJfmg7c3SyeJqY2a-ntaM1kIEXa" alt="Watch: Every goal from City&#39;s Champions League group games" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Champions League football put to bed until February 2023, you can relive all the goals from our games with Dortmund, Copenhagen and Sevilla in the video&nbsp;...</p></div>
            </div>
        </a><a href='https://www.insidesport.in/man-city-vs-fulham-live-streaming-high-flying-manchester-city-targets-top-spot-of-points-table-against-fulham-check-team-news-playing-xi-live-streaming-follow-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City vs Fulham LIVE Streaming: High Flying Manchester City ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbdW209pRUtbi9KILZWiLrgpe3BpkvhL_0LGaKrppMUA42rtjd4bBmw7DCr9g23XU05Vu-Rzbv" alt="Man City vs Fulham LIVE Streaming: High Flying Manchester City ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Man City vs Fulham LIVE Streaming: Premier League LIVE – Manchester City will be eyeing to topple Arsenal as they eye all 3 points against Fulham.</p></div>
            </div>
        </a><a href='https://www.sportsmole.co.uk/football/man-city/preview/preview-man-city-vs-fulham-prediction-team-news-lineups_498706.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preview: Manchester City vs. Fulham - prediction, team news, lineups</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRM1zqFBSkrBRNy4L8HZtJkTuC1ozPdSxKW4hQy42iuyQSE34PFz_ahNikZfPQSdiCVS7xVqHid" alt="Preview: Manchester City vs. Fulham - prediction, team news, lineups" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports Mole previews Saturday&#39;s Premier League clash between Manchester City and Fulham, including predictions, team news and possible lineups.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/man-city-transfer-news-guardiola-25423716'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City may have exposed two transfer priorities with Sevilla ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSP99ABCEAOh8I9KI8oCFbhuiQbZmATzWgTc3Q-zUirjZ2eVNx6JNKNrtQBvzRf55WuLbMvw9Wp" alt="Man City may have exposed two transfer priorities with Sevilla ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City beat Sevilla in the Champions League on Wednesday thanks to a second-half comeback inspired by key men coming off the bench.</p></div>
            </div>
        </a>
        </Template></>;
}