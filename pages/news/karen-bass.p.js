import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Karen Bass</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Karen Bass"/>
        <meta name="description" content="Trending News about Karen Bass" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Karen Bass</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/6ba1389/2147483647/strip/true/crop/5760x3024+0+408/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F57%2F61%2F76f11e6d4378bfd1743c20ece64e%2F1217842-me-1117-karen-bass-mayor-gem-017.jpg" alt="Karen Bass"/>
            <h3>Recent News</h3>
            <a href='https://www.latimes.com/california/story/2022-11-17/karen-bass-first-appearance-as-mayor-elect'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It&#39;s still all sinking in for L.A. Mayor-elect Karen Bass</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwbpW0Hx9j4gH7gYw_achfQ8T1UdvoJtx8uKQv8QotZgW0ez6LD5S55aMWXhXeuj36HiHsQdPB" alt="It&#39;s still all sinking in for L.A. Mayor-elect Karen Bass" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rep. Karen Bass has just three weeks before she is sworn in as the first woman elected mayor of Los Angeles.</p></div>
            </div>
        </a><a href='https://www.larchmontbuzz.com/featured-stories-larchmont-village/mayor-elect-karen-bass-holds-first-press-event-at-historic-ebell-of-los-angeles/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mayor-Elect Karen Bass Holds First Press Event at Historic Ebell of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxzBOIJ3flgXnsccuhhZ3DQbIXjLf-nrlBPRxkL3UPZhNBg034na5oKOp67kGyUQevgE0g27FU" alt="Mayor-Elect Karen Bass Holds First Press Event at Historic Ebell of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles Mayor-Elect Karen Bass, the first woman mayor in the city&#39;s held her first press conference since winning the election, at the historic Ebell of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/17/politics/karen-bass-los-angeles-mayor-homelessness/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karen Bass vows to &#39;solve homelessness&#39; and to be an agent of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThVeUWXUQMrBjBYRe1HeRibITtvWQCQpfgiZy5QFgqpXVBoYxDwQQiWfv60SuqI0gclozmobni" alt="Karen Bass vows to &#39;solve homelessness&#39; and to be an agent of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles Mayor-elect Karen Bass promised to solve the city&#39;s homelessness crisis in her first address after winning election as the first woman to lead&nbsp;...</p></div>
            </div>
        </a><a href='https://calmatters.org/commentary/2022/11/karen-bass-mayor-los-angeles-coalition-election/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karen Bass victory in Los Angeles mayor&#39;s race is a referendum on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRE2ORNQOiwFrlXeqCGnzOn8e5A7Pe8McA1G2CQfdrTucXIXaEJ0cv9LkwT198lHmRRhmkz_Qr2" alt="Karen Bass victory in Los Angeles mayor&#39;s race is a referendum on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With heightened attention on the Los Angeles mayoral race, Karen Bass&#39; victory should be viewed as a referendum against division.</p></div>
            </div>
        </a><a href='https://ktla.com/news/local-news/mayor-elect-karen-bass-addresses-angelenos-after-declaring-victory/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I will be a mayor for you&#39;: Karen Bass vows to tackle homelessness ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReO50AfhH3pTF4RiY7PMj0uQw16QDO9Jymrx4VvcuisrszrrcpPZI7soBCD6-uR7AdsAm2RNVl" alt="&#39;I will be a mayor for you&#39;: Karen Bass vows to tackle homelessness ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In her first address as mayor-elect of Los Angeles, Karen Bass thanked Angelenos and vowed to tackle the &quot;big things&quot; like homelessness and crime as the new&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-17/bass-first-black-woman-in-la-mayor-post-confronts-fed-up-city'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bass, First Black Woman in LA Mayor Post, Faces Fed-Up City</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0t7Q_m7V3FxvAbJiLT6dhRfaesYrGMULp_aA9e2bxQ90gozXSmxF-TFyGbHtpLXmM_U6EnCKB" alt="Bass, First Black Woman in LA Mayor Post, Faces Fed-Up City" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bass will join a growing group of Black women leading major cities in the US, including San Francisco Mayor London Breed and Chicago Mayor Lori Lightfoot. Once&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}