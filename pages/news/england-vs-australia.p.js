import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>England vs Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,England vs Australia"/>
        <meta name="description" content="Trending News about England vs Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>England vs Australia</h1>
            <Image width={800} height={500} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349300/349375.6.jpg" alt="England vs Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.espncricinfo.com/series/england-in-australia-2022-23-1317467/australia-vs-england-1st-odi-1317489/match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>David Warner, Steve Smith star as Australia ease to six-wicket win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR60uM1dsrTAgnmm1VTrk4uq-EWIwob5uQ_t7dQSYVKinToImQ_KmbFTAArVqJS5t8whEnLHSs9" alt="David Warner, Steve Smith star as Australia ease to six-wicket win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Malan makes century for England but aftermath of T20 World Cup victory hangs over contest.</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/cricket/australia-vs-england-1st-odi-live-cricket-updates-and-scores-3527465'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs England, 1st ODI, Highlights: David Warner, Steve Smith ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSr2Z1s20vKQOwORS7k6rwSbOoFpEau6kq9MgdrLJLzeEeiUK5krWQqoP21j3naChF0auUtSnFD" alt="Australia vs England, 1st ODI, Highlights: David Warner, Steve Smith ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England vs Australia, 1st T20I Highlights: Australia beat England by six wickets to take a 1-0 lead in the three-match series.</p></div>
            </div>
        </a><a href='https://www.skysports.com/live-scores/cricket/australia-v-england/38178/commentary'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs England | Sky Sports Live Cricket</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStPzdyWjloi4bBVdnQiUtiBocBKpPnNlbqzciI9_2CDH9p61TY-Kz2FBlNRGdkf43gJaYqcJTz" alt="Australia vs England | Sky Sports Live Cricket" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Preview followed by live coverage of the November 17th 2022 cricket match between Australia and England - commentary, stats, photos, videos, scores &amp; match&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/cricket/article-11436801/Englands-Moeen-Ali-slams-one-day-cricket-series-vs-Australia-ticket-sales-nosedive.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England&#39;s Moeen Ali slams one-day cricket series vs Australia as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRl7Hgkt-D2sjyxO24M0QRbod-ZaFMD9mK9oxbcyzahv63p8zxWw-Sn1p-ncrq0RQdNRcTSaHSK" alt="England&#39;s Moeen Ali slams one-day cricket series vs Australia as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ticket sales for Australia&#39;s ODI cricket match against England today in Adelaide are so low that officials aren&#39;t giving out sales figures - and even&nbsp;...</p></div>
            </div>
        </a><a href='https://m.cricbuzz.com/cricket-commentary/48205/malan-stands-tall-with-fighting-100'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs England, 1st ODI, England tour of Australia, 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Australia vs England, 1st ODI, England tour of Australia, 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CRR: 6.83. RR : 4.13. Batting, R(B), 4s, 6s, SR. Marnus Labuschagne*, 4(5), 0, 0, 80. Steven Smith, 38(35), 6, 0, 108.57. Bowling, O, M, R, W.</p></div>
            </div>
        </a><a href='https://timesofindia.indiatimes.com/sports/cricket/news/australia-vs-england-1st-odi-match-2022-live-cricket-score-updates/liveblog/95568924.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs England, 1st ODI Highlights: Australia beat England by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQbvNROMMqTe06-tIAuN2YXD4F1dffiX0oACFNEAZHAM8Bkf-IQaFmJB_p0TGCnew73bI09AQw" alt="Australia vs England, 1st ODI Highlights: Australia beat England by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get live cricket score updates of 1st ODI match between Australia and England. Check live scorecard, ball-by-ball commentary, cricket score online on.</p></div>
            </div>
        </a><a href='https://www.icc-cricket.com/news/2910545'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Zealand vs India, Australia vs England and Sri Lanka vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTKk-6aldHs9p35KmbvE6NONB0lWti0jUQbisswxna2QmlX77qc9_XqK5VKf3KRciTvCfvwsZu" alt="New Zealand vs India, Australia vs England and Sri Lanka vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The T20 World Cup may be over but the live cricket action does not stop. Days after winning the coveted title at the Melbourne Cricket Ground, Jos Buttler&#39;s&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}