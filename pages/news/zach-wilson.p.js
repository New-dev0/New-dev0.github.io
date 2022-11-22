import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zach Wilson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zach Wilson"/>
        <meta name="description" content="Trending News about Zach Wilson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zach Wilson</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1121%2Fr1094615_1296x729_16%2D9.jpg" alt="Zach Wilson"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nfl/story/_/id/35078058/jets-robert-saleh-commit-zach-wilson-qb-sunday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets&#39; Robert Saleh won&#39;t commit to Zach Wilson as QB Sunday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpPgx80qwtpJTTwAnOFRtLPv5mCKLoY3ktj1HbWB5Zb6DFa56a8Xa8378pvulDfTZL9lIOUYlQ" alt="Jets&#39; Robert Saleh won&#39;t commit to Zach Wilson as QB Sunday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jets coach Robert Saleh on Monday would not commit to Zach Wilson starting at quarterback in Sunday&#39;s game against the Bears.</p></div>
            </div>
        </a><a href='https://www.golfdigest.com/story/sauce-gardner-zach-wilson-tweet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sauce Gardner&#39;s excuse for liking a tweet bashing Zach Wilson is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRuJcmvUSqAsUe-KVZDMdRGtYwbXH0CjDMC4YwRoM0FTeUCOuvBtnef4uj5v15yNKYr2lvGah4I" alt="Sauce Gardner&#39;s excuse for liking a tweet bashing Zach Wilson is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jets star cornerback swears he &quot;didn&#39;t mean&quot; to like a tweet that was critical of his team&#39;s starting quarterback.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/2022/11/21/jets-quinnen-williams-defends-zach-wilson'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jets Star Quinnen Williams Defends Zach Wilson Amid Criticism</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSC0P4qZYGIpalFI98boEKKAAJHkrl9UQg10UC3yYn691vf-EUVoy75OPK7TOvyJ8tdWcHv6uWa" alt="Jets Star Quinnen Williams Defends Zach Wilson Amid Criticism" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The defensive tackle defended his quarterback after reports surfaced about his level of accountability.</p></div>
            </div>
        </a><a href='https://deadspin.com/the-truth-about-zach-wilson-is-becoming-clear-1849808408'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The truth about Zach Wilson is becoming clear</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfYCwNUShK40p3aU3eTE2XhSQwmf3lPt1-0KBVwbqslngAnTMhUrPDcCoIBhWd0dJk9ZJefF0P" alt="The truth about Zach Wilson is becoming clear" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>And the turmoil brewing beneath the Jets&#39; surface is too.</p></div>
            </div>
        </a><a href='https://www.sbnation.com/nfl/2022/11/21/23470854/zach-wilson-jets-patriots-press-conference'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zach Wilson needs to grow the hell up and stop acting like a child</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTFD7-sItK7cAQPyKUaV9YMbOMn9B-CSrpUEhxJ9rj4Oe7ACFsbxv_g849LEt6MEasuzbtTHuT" alt="Zach Wilson needs to grow the hell up and stop acting like a child" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zach Wilson has been a terrible quarterback since the Jets took him with the No. 2 pick in the 2021 NFL Draft, but horrific performance is far from the&nbsp;...</p></div>
            </div>
        </a><a href='https://nesn.com/2022/11/does-robert-saleh-believe-zach-wilson-has-lost-jets-locker-room/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Does Robert Saleh Believe Zach Wilson Has Lost Jets Locker Room?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvzxFusnGnq4hcY6wUbIbWK-IoAqfVc-tRVQy7y2uEqhpjHtxdGO_YgHw5RP3_NFnXCLajqQzR" alt="Does Robert Saleh Believe Zach Wilson Has Lost Jets Locker Room?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zach Wilson reportedly didn&#39;t make any fans in the Jets locker room due to his lack of accountability, but Robert Saleh backed the QB.</p></div>
            </div>
        </a>
        </Template></>;
}