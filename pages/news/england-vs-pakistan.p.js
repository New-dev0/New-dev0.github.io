import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>England vs Pakistan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,England vs Pakistan"/>
        <meta name="description" content="Trending News about England vs Pakistan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>England vs Pakistan</h1>
            <Image width={800} height={500} src="https://content.api.news/v3/images/bin/15a668c8a2ca3a88d7e0da8538dd2ab7" alt="England vs Pakistan"/>
            <h3>Recent News</h3>
            <a href='https://www.foxsports.com.au/cricket/countries/england/cricket-2022-england-vs-pakistan-second-test-bazball-collapse-ben-stokes-abrar-ahmed/news-story/bf8d580987f02722c1d0d6ed5c2d3e21'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England&#39;s Bazball under siege as Pakistan debutant&#39;s SEVEN ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQAXFoB8TbCKRa73lM_Y-R9vqrSw3LAAh5pSr3nvrBqeX3POxmKQRt0UmIwHC72WSQ_1FBtwR6R" alt="England&#39;s Bazball under siege as Pakistan debutant&#39;s SEVEN ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England&#39;s Bazball revolution has been sorely tested on day one of the second Test after Pakistan debutant Abrar Ahmed sparked a mini collapse with a record&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/uk/england-vs-pakistan-test-update-abrar-ahmed-makes-dream-debut-taking-five-wickets/articleshow/96114477.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England vs Pakistan Test update: Abrar Ahmed makes dream debut ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS3Nwf6z1u0FodcZeAJ96Xy0bEu97cQ4kGFCgEMVqxFwBO_-oascdbgBOIWKR6IuDseer3Qn2ds" alt="England vs Pakistan Test update: Abrar Ahmed makes dream debut ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of Pakistan&#39;s best bowlers in domestic cricket this year has been the leg-spinner Abrar Ahmed, whose absence from the first Test has sparked a lot of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/cricket/news/12123/12764595/pakistan-vs-england-abrar-ahmed-takes-seven-wickets-on-test-debut-as-hosts-impress-in-multan'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan vs England: Abrar Ahmed takes seven wickets on Test ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXcFSBe2X83U4sIXxJqeiu8AW4oPa5IA8m0yxKa9WfY-3AiGgwca421_ko_ESGlAttoBGICbR6" alt="Pakistan vs England: Abrar Ahmed takes seven wickets on Test ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England dismissed for 281 after brilliant 7-114 by Abrar Ahmed; Ben Duckett (63) and Ollie Pope (60) impress for the tourists; Pakistan reached 107-2 when&nbsp;...</p></div>
            </div>
        </a><a href='https://www.india.com/sports/pakistan-vs-england-2nd-test-day-1-cricket-score-updates-dec-9-friday-multan-wtc-points-ball-commentary-pak-v-eng-live-streaming-sonyliv-shaifaque-leach-wood-anderson-babar-nawaz-abrar-livenews-5791106/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HIGHLIGHTS | PAK Vs ENG, 2nd Test Day 1 Score: Pakistan Finish ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9gRgKpQ53miXSf1psyFU2bPydZ5LDgnuZNp98MY9k5ihc6O1Q-Dd9AH9QDr56_AH00aGwkLuc" alt="HIGHLIGHTS | PAK Vs ENG, 2nd Test Day 1 Score: Pakistan Finish ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 24-year-old mystery spinner grabbed 7-114 and got plenty of help from the dry wicket at Multan Cricket Stadium to dismiss England for 281 inside the first&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/story/pak-vs-eng-2nd-test-stats-abrar-ahmed-record-breaking-debut-and-a-rare-all-ten-for-pakistan-spinners-1348811'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stats - Abrar&#39;s record-breaking debut, and a rare all-ten for Pakistan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRD0uJ-QkOUYptioC7UjHwqOl_4KK60A0Zybx3_T8nJHa9t-EfHBkZXZnXUwSK8g_hbx8t7T4pj" alt="Stats - Abrar&#39;s record-breaking debut, and a rare all-ten for Pakistan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England, meanwhile, smash the most runs scored by a team before lunch on the first day of a Test.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/pakistan-mystery-spinner-abrar-ahmed-picked-up-seven-wickets-on-his-test-debut-against-england-8315491/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan mystery spinner Abrar Ahmed picked up seven wickets on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTuQXdx42wSzRElfmuLM8IbqvuZtyUba3JMSU4K-31gI7P-N0oc28gs47eK6GVkx65Idb5nj_3f" alt="Pakistan mystery spinner Abrar Ahmed picked up seven wickets on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 24-year-old Ahmed, 7-114, on the first day of the second test against Pakistan in Multan. He had the England opener Zak Crawley clean bowled off his&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}