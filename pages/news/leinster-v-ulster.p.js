import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leinster v Ulster</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leinster v Ulster"/>
        <meta name="description" content="Trending News about Leinster v Ulster" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leinster v Ulster</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cf01d-1600.jpg" alt="Leinster v Ulster"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/sport/rugby/2022/1203/1339827-united-rugby-championship-leinster-v-ulster-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recap: Leinster 38-29 Ulster</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5S8chv7EyXuqeSSpV-mHQX9p142cROMuKBbPJQdvYv4A3N_GGfz_Sn32A0Zl0IzQexaJjXMQY" alt="Recap: Leinster 38-29 Ulster" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ulster: Michael Lowry; Ethan McIlroy, James Hume, Stuart McCloskey, Stewart Moore; Billy Burns, John Cooney; Andy Warwick, Tom Stewart, Marty Moore; Alan O&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/sport/rugby-union/leinster-v-ulster-live-score-28646332'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leinster 38-29 Ulster: Hosts lead after stunning comeback</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRECNi5z8pi9Yh5UqRrX1TrS2bdG60QbY3NND2HY6V1dudRzLnx2AXLjDi3Rkjq1YXC1eiuIEZc" alt="Leinster 38-29 Ulster: Hosts lead after stunning comeback" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moments later, temporary substitute Rob Herring powered past Ross Byrne and dived over the line for an Ulster try. The ever reliable Cooney nailed the touchline&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.ie/sport/rugby/pro14/leinster-v-ulster-northern-province-look-to-lay-down-marker-at-rds-42192909.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leinster v Ulster: Northern province look to lay down marker at RDS</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSj_nRfZqT7WtZv1N02xvzpP2xqyG7FTLyQ7Q87nV4TgYjdfkqF7IO_hv2clil8m-WcCTwH5eBG" alt="Leinster v Ulster: Northern province look to lay down marker at RDS" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ulster&#39;s Jacob Stockdale arrives before the United Rugby Championship match against Leinster at the RDS Arena in Dublin. Photo: Harry Murphy/Sportsfile.</p></div>
            </div>
        </a><a href='https://www.belfasttelegraph.co.uk/sport/rugby/ulster-rugby/leinster-v-ulster-top-two-sides-in-urc-go-head-to-head-in-crucial-inter-provincial-derby-at-rds-arena-42193231.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leinster v Ulster LIVE: Top two sides in URC go head-to-head in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRsEswTr7Ev6y7fU3WjGb2tpPb5pzn5QD0ofjujyZCpc2g7DrXdkJXoq6rD76AWm4dgyxwbMjN" alt="Leinster v Ulster LIVE: Top two sides in URC go head-to-head in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s a massive inter-provincial clash at the RDS Arena this evening as Leinster and Ulster, the top two sides in the United Rugby Championship,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishpost.com/sport/leinster-vs-ulster-details-for-the-game-later-today-244122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leinster vs Ulster details for the game later today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwEnIQYkqTPAcReHJY3lSUlMdcsgYl04sZv2WK_kzktXkaYIXziaMQffkV-S8UOqtwEXLkA574" alt="Leinster vs Ulster details for the game later today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leinster take on Ulster at 7.35pm in the RDS later todayThe game will see a number of internatio...</p></div>
            </div>
        </a><a href='https://www.leinsterrugby.ie/report/match-report-leinster-rugby-38-ulster-rugby-29/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Match report: Leinster Rugby 38 Ulster Rugby 29 - Leinster Rugby</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtiEhyH64TIO5duayS8RZ2nQPbCtl81MMfKRpYmordrtJ7yCk2gjRBSWEoJcayY2FC97UIwLrM" alt="Match report: Leinster Rugby 38 Ulster Rugby 29 - Leinster Rugby" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>14-man Leinster mounted a brilliant second-half comeback to earn a bonus point win over Ulster at the RDS in the BKT United Rugby Championship.</p></div>
            </div>
        </a>
        </Template></>;
}