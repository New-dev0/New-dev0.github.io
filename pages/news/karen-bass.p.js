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
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221117144651-karen-bass-1117.jpg?c=16x9&q=w_800,c_fill" alt="Karen Bass"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/17/politics/karen-bass-los-angeles-mayor-homelessness/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karen Bass vows to &#39;solve homelessness&#39; and to be an agent of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThVeUWXUQMrBjBYRe1HeRibITtvWQCQpfgiZy5QFgqpXVBoYxDwQQiWfv60SuqI0gclozmobni" alt="Karen Bass vows to &#39;solve homelessness&#39; and to be an agent of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a speech Thursday at the historic Wilshire Ebell Theatre, the Democratic congresswoman called on voters from across the city to become part of the solution&nbsp;...</p></div>
            </div>
        </a><a href='https://www.larchmontbuzz.com/featured-stories-larchmont-village/mayor-elect-karen-bass-holds-first-press-event-at-historic-ebell-of-los-angeles/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mayor-Elect Karen Bass Holds First Press Event at Historic Ebell of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxzBOIJ3flgXnsccuhhZ3DQbIXjLf-nrlBPRxkL3UPZhNBg034na5oKOp67kGyUQevgE0g27FU" alt="Mayor-Elect Karen Bass Holds First Press Event at Historic Ebell of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles Mayor-Elect Karen Bass, the first woman mayor in the city&#39;s held her first press conference since winning the election, at the historic Ebell of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/california/story/2022-11-17/karen-bass-first-appearance-as-mayor-elect'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It&#39;s still all sinking in for L.A. Mayor-elect Karen Bass</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwbpW0Hx9j4gH7gYw_achfQ8T1UdvoJtx8uKQv8QotZgW0ez6LD5S55aMWXhXeuj36HiHsQdPB" alt="It&#39;s still all sinking in for L.A. Mayor-elect Karen Bass" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rep. Karen Bass has just three weeks before she is sworn in as the first woman elected mayor of Los Angeles.</p></div>
            </div>
        </a><a href='https://calmatters.org/commentary/2022/11/karen-bass-mayor-los-angeles-coalition-election/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karen Bass victory in Los Angeles mayor&#39;s race is a referendum on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRE2ORNQOiwFrlXeqCGnzOn8e5A7Pe8McA1G2CQfdrTucXIXaEJ0cv9LkwT198lHmRRhmkz_Qr2" alt="Karen Bass victory in Los Angeles mayor&#39;s race is a referendum on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With heightened attention on the Los Angeles mayoral race, Karen Bass&#39; victory should be viewed as a referendum against division.</p></div>
            </div>
        </a><a href='https://www.pbs.org/newshour/show/news-wrap-karen-bass-elected-as-mayor-of-los-angeles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>News Wrap: Karen Bass elected as mayor of Los Angeles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRda5XxcIkGo79AFe0-J3bb_nJIQ0jt2emsmyXc1ky4_wnX1ScJiHmdamAyBQR0Wq8RFU8eGcV8" alt="News Wrap: Karen Bass elected as mayor of Los Angeles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In our news wrap Thursday, Los Angeles voters elected Karen Bass as the city&#39;s first female mayor, air raid sirens blared across Ukraine as Russian missiles&nbsp;...</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/11/17/karen-bass-los-angeles-mayor-00069281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bass promises quick action on homelessness in first remarks since ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS55z-Yh0D1smVyphcKCw1GEYNZLHowCiwUQhHq4fxQYLRwOpZLuc_w3GP8tZQjOEFa-f0ZjxBf" alt="Bass promises quick action on homelessness in first remarks since ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>She takes over a city reeling from spiking homeless population, a housing shortage and controversy at City Hall.</p></div>
            </div>
        </a>
        </Template></>;
}