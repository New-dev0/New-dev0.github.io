import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Munster Rugby</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Munster Rugby"/>
        <meta name="description" content="Trending News about Munster Rugby" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Munster Rugby</h1>
            <Image width={800} height={500} src="https://d2cx26qpfwuhvu.cloudfront.net/munster/wp-content/uploads/2022/11/26222318/inpho_02139616-scaled-e1669501490329.jpg" alt="Munster Rugby"/>
            <h3>Recent News</h3>
            <a href='https://www.munsterrugby.ie/report/report-bonus-point-win-for-munster-over-connacht/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Report | Bonus-Point Win For Munster Over Connacht - Munster Rugby</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYm42m3cDUoW8bDfC_PEy5asKq1mBpmwW1IQYBCy8InXh8ktZVv5ctvVeUw44cgm7IfFovG2s1" alt="Report | Bonus-Point Win For Munster Over Connacht - Munster Rugby" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Calvin Nash, Roman Salanoa, John Ryan and Niall Scannell were the Munster try-scorers with Joey Carbery kicking two conversions. The scoreline was 10-all at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.limerickleader.ie/news/sport/973971/munster-rugby-score-precious-bonus-point-win-over-connacht-in-urc.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Munster Rugby score precious bonus point win over Connacht in URC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSFyBqN_871EOzASE1w09unU5CJvERfeTis8RM05fjv48XSlR_jH-IAC5NyRhL5TRSm4_LXfS9" alt="Munster Rugby score precious bonus point win over Connacht in URC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MUNSTER Rugby secured just their third win of the United Rugby Championship season when securing a bonus point in a hard fought 24-17 success over Connacht&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rte.ie/sport/united-rugby-championship/2022/1126/1338467-munster-into-top-eight-after-crucial-win-over-connacht/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Munster into top eight after crucial win over Connacht</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtVaQvoMybHZIPnx7Ppl_sdh2fek9Se6-4BmavqKC-FRWGLgjZCnRAZfZiClYLdg3gTQZh9I6M" alt="Munster into top eight after crucial win over Connacht" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Munster ground out a 24-17 derby win over Connacht at Thomond Park to move up to eighth in the BKT United Rugby Championship table.</p></div>
            </div>
        </a><a href='https://www.sportsnewsireland.com/news/munster-24-connacht-17-in-united-rugby-championship/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Munster 24 Connacht 17 in United Rugby Championship</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwIPxgSA7TYLsL9bCSASgJcZBuI0bvPlbP8xxZyG9WTNU4TyEoZVu428gVSlfDvktjwZirKDji" alt="Munster 24 Connacht 17 in United Rugby Championship" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a game played in windy conditions, the home side scored&nbsp;...</p></div>
            </div>
        </a><a href='https://www.limerickleader.ie/news/rugby/972945/referees-confirmed-for-munster-rugby-s-opening-heineken-champions-cup-pool-fixtures.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Referees confirmed for Munster Rugby&#39;s opening Heineken ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwnHSGFErYiRQvZ0TnFFU0V1kltH1KT6Wgq8vbshPix_h1eLkUg-ERbJpQtsXxvD4azfG7Y1fd" alt="Referees confirmed for Munster Rugby&#39;s opening Heineken ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THE referees have been confirmed for Munster Rugby&#39;s opening two Heineken Champions Cup pool fixtures. English official Christophe Ridley will be in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/sport/rugby/arid-41015828.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bonus-point derby win catapults Munster back within striking distance</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQLkdK14lpZkpYb9OQdOSCUVxOmyTB0rEMLgEeK-elanyScGMo3jiv5AT50qqNHoYSoMUhFFka" alt="Bonus-point derby win catapults Munster back within striking distance" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Graham Rowntree&#39;s men upwardly mobile again with a battling 24-17 derby victory over Connacht at Thomond Park.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/sport/rugby-union/munster-v-connacht-live-score-28592030'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Munster v Connacht result and recap from URC clash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQew4W0NXHRtzEEIU8OZKAsSN2QrQVXBy71owBrsmapeIYActPvRWMSwtwsurrqn_6kXHceBUYe" alt="Munster v Connacht result and recap from URC clash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It was a second win of the season for Munster as they beat Connacht in Thomond.</p></div>
            </div>
        </a><a href='https://uk.sports.yahoo.com/news/united-rugby-championship-munster-maul-223400146.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>United Rugby Championship: Munster maul helps them past ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8yddlxezQ5Yion6zYTFTY0jBlPX71m6j40dAUzgre6QtDdz8Nda3yft2i5rCRvMQl_VbM0iZmDA" alt="United Rugby Championship: Munster maul helps them past ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There were United Rugby Championship wins for Munster, Leinster, the Bulls and Benetton over Connacht, Glasgow, Ospreys and Edinburgh on Saturday.</p></div>
            </div>
        </a>
        </Template></>;
}