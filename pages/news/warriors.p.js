import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Warriors</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Warriors"/>
        <meta name="description" content="Trending News about Warriors" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Warriors</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221117104349-steph-curry.jpg?c=16x9&q=w_800,c_fill" alt="Warriors"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/17/sport/steph-curry-golden-state-warriors-phoenix-suns-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steph Curry explodes for 50 points but Golden State Warriors still ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR25_rDpFZ9lNNGlgqxhVbiQpszNg1rFuHEWEwWsZuZAQux9jbW3CKqqSoADrPLtIwgs4GyYxZd" alt="Steph Curry explodes for 50 points but Golden State Warriors still ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Steph Curry scored 50 points for the 11th time in his NBA career, but his efforts weren&#39;t enough for the struggling Golden State Warriors against the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nba/warriors/news/new-shocking-stat-about-warriors-championship-odds'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Shocking Stat About Warriors Championship Odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRE24IA9loxqDyLwwKMDxh57ekpp2GySE68MKXsgxkEEyQ8EfW4-xUEs7QeaOtsy3rSiX5YXwo" alt="New Shocking Stat About Warriors Championship Odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Having started the season 6-9, the Golden State Warriors are not in a good spot. Steph Curry is playing some of the best basketball of his legendary career,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/11/17/stephen-curry-is-better-than-ever-warriors-are-floundering/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stephen Curry is better than ever, but the Warriors are floundering</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJbebgm2p9XST5K1lyUMSPNKWyK2yDpBx29sOgGcRO4p52stwEvQOn_-dpIbS6vOL0rG9phXCf" alt="Stephen Curry is better than ever, but the Warriors are floundering" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While the all-star guard posts MVP-like numbers, Golden State is off to a slow start after winning a championship.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/warriors/news/steph-curry-reveals-what-warriors-must-avoid-during-struggles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steph Curry Reveals What Warriors Must Avoid During Struggles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBRnKbj9fJeld5VXfS6xtRmu46wrp0Zc_oA7OctFZhVoq5CWafJAmXsybSxCpfywlB31GzjwwP" alt="Steph Curry Reveals What Warriors Must Avoid During Struggles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Golden State Warriors have not been a good basketball team this season. The team currently has a 6-9 record, with a fresh loss against the Phoenix Suns&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/warriors/warriors-badly-miss-gary-payton-ii-grit-provided-championship-role-players'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors badly miss Gary Payton II, grit provided by championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-oZb-zXT3RfMHARkuYHlxki6g-I-5LDdR9a-RYwZ1BAY_83WZJHPYzdcLkZpVhtZOg6yKFxVg" alt="Warriors badly miss Gary Payton II, grit provided by championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grit is in short supply with the Warriors&#39; current roster. Golden State lost five players in the offseason whose hearts beat for their roles on the team.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/warriors/steph-curry-pleads-warriors-need-change-loser-mentality-creeps'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steph Curry pleads Warriors need to change before &#39;loser mentality ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT1B7ycrVTgwb25p5Tw63ub0WDZSdPxp7PpW4bq0TVALjbpM2PDrqbh30gdH04eTlqhvn79HRM9" alt="Steph Curry pleads Warriors need to change before &#39;loser mentality ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In 14 games, Curry is averaging 32.8 points, 6.8 rebounds and 6.4 assists per game. He&#39;s nailing 5.1 3-pointers per game on a 44.7 percent clip. But his latest&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/warriors-drop-to-6-9-despite-50-from-curry-kerr-says-ive-failed-140336819.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors drop to 6-9 despite 50 from Curry, Kerr says &#39;I&#39;ve failed&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR62vA2zDilowUtoYKJ0U250RCsyMM3N2vF7u0yJUEtc_0o62QPhiyz3soRpAkHDCCP4TPN5E3V" alt="Warriors drop to 6-9 despite 50 from Curry, Kerr says &#39;I&#39;ve failed&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Steph Curry scored 50 points for the 11th time in his career but the Warriors still lost, 130-119. It was the biggest defeat for the team since a 14-point loss&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goldenstateofmind.com/2022/11/17/23463734/warriors-suns-grades-steph-curry-klay-thompson'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steph Curry, Klay Thompson graded in Warriors loss to Suns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2nvcUk6yHYXD7u9h4U4miNXRjEts914AhBPJHPL_44_Yp-i8rbGkYtT3kHKmyL_3XJ2Kvtjdm" alt="Steph Curry, Klay Thompson graded in Warriors loss to Suns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grading Steph Curry, Klay Thompson, and the rest of the Golden State Warriors in the teams 130-119 loss to the Phoenix Suns on Wednesday night on ESPN.</p></div>
            </div>
        </a><a href='https://www.goldenstateofmind.com/2022/11/17/23463927/warriors-suns-steph-curry-klay-thompson-draymond-green-devin-booker-film-breakdown'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors defense falters despite Steph Curry&#39;s 50 points vs. Suns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTImA8j8loeDR8Nv0mDn5vm9k611t5X7zhu9X_YPusDNjcD8Q4YLyKP_wjNBwrrnBcgmBSaOWSY" alt="Warriors defense falters despite Steph Curry&#39;s 50 points vs. Suns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>You can&#39;t blame them for the comparisons. Stephen Curry had perhaps his best individual season save for his unanimous-MVP campaign, a carry job of a year where&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/why-moses-moody-relishes-warriors-184410469.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Moses Moody relishes Warriors&#39; NBA championship in rookie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUR27UCY7OxEdz-zG0XUfOxVjQ_wIcYbVgKeBRWkgk4NGArlOPOdkNeNrqZzdfvwMXY415UUYd" alt="Why Moses Moody relishes Warriors&#39; NBA championship in rookie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Winning a championship in his rookie season is not lost on Moses Moody and he is appreciative of the opportunity to win.</p></div>
            </div>
        </a>
        </Template></>;
}