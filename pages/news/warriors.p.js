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
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1102%2Fr1085125_1024x576_16%2D9.jpg" alt="Warriors"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nba/story/_/id/35044121/stephen-curry-50-help-warriors-hold-dubious-road-futility-mark'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors, lacking &#39;collective grit,&#39; waste Steph Curry&#39;s 50</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5r2eYmWcDjQfVKS5_kbAEKPyC5Zg9Bn58arr4TIM5ZHtK7YF1i7Bh-mqCWkPsyRFF7Htd-0Nv" alt="Warriors, lacking &#39;collective grit,&#39; waste Steph Curry&#39;s 50" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Warriors dropped to 0-8 on the road despite a 50-point outburst from Stephen Curry against the Suns. Said coach Steve Kerr: &quot;We lack collective grit.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/17/sport/steph-curry-golden-state-warriors-phoenix-suns-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steph Curry explodes for 50 points but Golden State Warriors still ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR25_rDpFZ9lNNGlgqxhVbiQpszNg1rFuHEWEwWsZuZAQux9jbW3CKqqSoADrPLtIwgs4GyYxZd" alt="Steph Curry explodes for 50 points but Golden State Warriors still ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Steph Curry scored 50 points for the 11th time in his NBA career, but his efforts weren&#39;t enough for the struggling Golden State Warriors against the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/warriors/steph-curry-pleads-warriors-need-change-loser-mentality-creeps'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steph Curry pleads Warriors need to change before &#39;loser mentality ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT1B7ycrVTgwb25p5Tw63ub0WDZSdPxp7PpW4bq0TVALjbpM2PDrqbh30gdH04eTlqhvn79HRM9" alt="Steph Curry pleads Warriors need to change before &#39;loser mentality ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In 14 games, Curry is averaging 32.8 points, 6.8 rebounds and 6.4 assists per game. He&#39;s nailing 5.1 3-pointers per game on a 44.7 percent clip. But his latest&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nba/warriors/news/new-shocking-stat-about-warriors-championship-odds'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Shocking Stat About Warriors Championship Odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRE24IA9loxqDyLwwKMDxh57ekpp2GySE68MKXsgxkEEyQ8EfW4-xUEs7QeaOtsy3rSiX5YXwo" alt="New Shocking Stat About Warriors Championship Odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Having started the season 6-9, the Golden State Warriors are not in a good spot. Steph Curry is playing some of the best basketball of his legendary career,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/warriors/warriors-badly-miss-gary-payton-ii-grit-provided-championship-role-players'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors badly miss Gary Payton II, grit provided by championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_U9D0TD2m6vmL2sJnEkKYZWbGMIuTAgDAiilzkWdYc_oSVW6YArGqQ5LFs-efWg63tdJkF_MM" alt="Warriors badly miss Gary Payton II, grit provided by championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grit is in short supply with the Warriors&#39; current roster. Golden State lost five players in the offseason whose hearts beat for their roles on the team.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/warriors/news/steph-curry-reveals-what-warriors-must-avoid-during-struggles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steph Curry Reveals What Warriors Must Avoid During Struggles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBRnKbj9fJeld5VXfS6xtRmu46wrp0Zc_oA7OctFZhVoq5CWafJAmXsybSxCpfywlB31GzjwwP" alt="Steph Curry Reveals What Warriors Must Avoid During Struggles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Golden State Warriors have not been a good basketball team this season. The team currently has a 6-9 record, with a fresh loss against the Phoenix Suns&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sfchronicle.com/sports/warriors/article/Steve-Kerr-calls-out-Warriors-low-morale-lack-17593583.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steve Kerr calls out Warriors&#39; low morale, lack of commitment to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSK_U_nQmcvcZccNl3UUuAjikf4WjJ_lbwEwcAUl61zgCxIGQiFpkd7to251AfVcX2XGyUqW7m6" alt="Steve Kerr calls out Warriors&#39; low morale, lack of commitment to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How the Golden State Warriors squandered Stephen Curry&#39;s 50-point night in Phoenix...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/11/17/stephen-curry-is-better-than-ever-warriors-are-floundering/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stephen Curry is better than ever, but the Warriors are floundering</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJbebgm2p9XST5K1lyUMSPNKWyK2yDpBx29sOgGcRO4p52stwEvQOn_-dpIbS6vOL0rG9phXCf" alt="Stephen Curry is better than ever, but the Warriors are floundering" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While the all-star guard posts MVP-like numbers, Golden State is off to a slow start after winning a championship.</p></div>
            </div>
        </a><a href='https://www.truehoop.com/p/turnovers-toughness-killing-the-warriors'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turnovers, toughness killing the Warriors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLYWFmUU6ehLObVGjOXtkV3eBu5QRgk63gWC8l_2YMZIyN2JylkljEC1BV-YaSgJ2NDBUG-hrc" alt="Turnovers, toughness killing the Warriors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jordan Poole chooses to make a crosscourt pass with four Kings players between him and his target: Andrew Wiggins. A plethora of bad things could have happened&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goldenstateofmind.com/2022/11/17/23463927/warriors-suns-steph-curry-klay-thompson-draymond-green-devin-booker-film-breakdown'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors defense falters despite Steph Curry&#39;s 50 points vs. Suns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTImA8j8loeDR8Nv0mDn5vm9k611t5X7zhu9X_YPusDNjcD8Q4YLyKP_wjNBwrrnBcgmBSaOWSY" alt="Warriors defense falters despite Steph Curry&#39;s 50 points vs. Suns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A 6-9 record with a top-heavy roster is sending the team reeling.</p></div>
            </div>
        </a>
        </Template></>;
}