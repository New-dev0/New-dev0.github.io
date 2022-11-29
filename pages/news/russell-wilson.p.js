import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Russell Wilson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Russell Wilson"/>
        <meta name="description" content="Trending News about Russell Wilson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Russell Wilson</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1128%2Fr1098129_1296x729_16%2D9.jpg" alt="Russell Wilson"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nfl/story/_/id/35126310/can-broncos-russell-wilson-fixed-answering-10-questions-qb-future-struggles-blame-next'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Can Denver, Russell Wilson be fixed? Answering 10 questions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzHbChZUBa83UorHn4eqsOLGaN4REz_xN7pGmuUWT-0HwCkEsb8NWYyYZAVdVfEFwTUlUBENlL" alt="Can Denver, Russell Wilson be fixed? Answering 10 questions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russell Wilson and the Broncos weren&#39;t supposed to be 3-8. Now, after another game in which the offense sputtered, could big changes be on the way?</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/broncos-qb-russell-wilson-dt-mike-purcell-downplay-sideline-exchange-during-loss'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Broncos QB Russell Wilson, DT Mike Purcell downplay sideline ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjhji-SXSqZ-H_CbzCb3yBb4gJaRGR-Hqd89Au7mHOn_81AvAbaqvje35zYI4quzrnukOfsKL4" alt="Broncos QB Russell Wilson, DT Mike Purcell downplay sideline ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Broncos DT ﻿Mike Purcell﻿ was seen yelling at QB Russell Wilson on the sideline during Sunday&#39;s loss to the Panthers, highlighting another disappointing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/2022/11/28/broncos-mike-purcell-explains-incident-with-russell-wilson'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Broncos&#39; Mike Purcell Explains Incident With Russell Wilson</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSVYD4s9sNuqvjahe9VRuhyGaOkNQSMK1oNYu8H57SgMIol52HFj0m_Zyf4I9ktRTPMTab9ePu" alt="Broncos&#39; Mike Purcell Explains Incident With Russell Wilson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Denver defensive tackle described the exchange as just “frustration,” and his quarterback also gave his side of the story.</p></div>
            </div>
        </a><a href='https://kdvr.com/sports/denver-broncos/is-russell-wilson-getting-sacked-more-than-he-normally-does/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is Russell Wilson getting sacked more than he normally does?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_ZE7qQYc7Wv7WIoFltalhVU7FRnf-K11qY2kzC1bIXQ9no4UKVpl_pRJtiui3Q3x918I8Cndl" alt="Is Russell Wilson getting sacked more than he normally does?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While many have said the blame for the poor season falls on head coach Nathaniel Hackett, others say it&#39;s due to poor play by Wilson. Wilson has already been&nbsp;...</p></div>
            </div>
        </a><a href='https://www.denverpost.com/2022/11/28/russell-wilson-broncos-bench-debate/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kiszla vs. Gabriel: Should the Broncos bench quarterback Russell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnBuZnXIwgmHDKPUT7L3M19-NeJdrIM8Cm7fCM2yxk9k5Dbi0CxpAkgalXZgQGNCPT7rVDsjDe" alt="Kiszla vs. Gabriel: Should the Broncos bench quarterback Russell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Week to week, Wilson shows no signs of improvement. He&#39;s getting worse and beat up behind a shaky offensive line. Should the Broncos consider benching him&nbsp;...</p></div>
            </div>
        </a><a href='https://seahawkswire.usatoday.com/2022/11/28/russell-wilson-pff-grades-stunningly-low-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russell Wilson PFF grade ranks lower than 4 QBs who have been ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNCTtp6BODbXkIeuTYQzbLLc7-DUKk1h3-1_KUsGYzLUi9XFYd20DCL36-I5DsDHJo39wCRHHL" alt="Russell Wilson PFF grade ranks lower than 4 QBs who have been ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pro Football Focus grades out Broncos QB Russell Wilson No. 22 among 24 starterss who haven&#39;t been benched this season.</p></div>
            </div>
        </a><a href='https://www.yardbarker.com/nfl/articles/russell_wilson_trade_worse_than_infamous_herschel_walker_deal/s1_13132_38178957'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russell Wilson trade worse than infamous Herschel Walker deal?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgZq1HKB0L7b2Z52efAQqav9cVkmz-7oD0eU5oHs79HgDgycvYgtlFeAc5UFltxVoCdg82Q0wH" alt="Russell Wilson trade worse than infamous Herschel Walker deal?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Five games into the 1989 season, with the Cowboys 0-5 and rebuilding, the team sent Walker and three draft picks to the Vikings for four players and eight&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}