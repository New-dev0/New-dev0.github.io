import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal vs Uruguay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal vs Uruguay"/>
        <meta name="description" content="Trending News about Portugal vs Uruguay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal vs Uruguay</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221128154625-01-portugal-uruguay-match-pitch-invader-1128.jpg?c=16x9&q=w_800,c_fill" alt="Portugal vs Uruguay"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/28/football/pitch-invader-rainbow-flag-2022-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pitch invader with rainbow flag interrupts World Cup match between ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGNy2_8hUBM4PbOgDZfS3LhzyY5tEFx0jTwfzLLxwGqSUNRYUkrefzYZktZYvL27lCo_zOcgzu" alt="Pitch invader with rainbow flag interrupts World Cup match between ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup match between Portugal and Uruguay was briefly interrupted by a pitch invader waving a rainbow flag on the field at the Lusail Iconic Stadium&nbsp;...</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/portugal-vs-uruguay-live-updates-confirmed-line-ups-score-stats-and-highlights-qatar-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal vs Uruguay summary: Fernandes double, score and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmzuwW_K8sH8NpVTlnbhxtTDPgvdhGl1RqGl0BxB4t97hYRnSQz1TFF2PFXL6W46O0Q-WqVXoC" alt="Portugal vs Uruguay summary: Fernandes double, score and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal beat Uruguay and make it out of the group stages with a game to spare, likely avoiding Brazil on their path.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/portugal-vs-uruguay-world-cup-2022-live-score-updates-result/5mJsBHpHA2XL/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup result: Portugal advances to knockout stage with 2-0 win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyIRuoFdfYIq4dQNo-UUA--u58OFUZSyT1dee-KomiJETcoUz8lsNI-wX1wBjfkfBmYmBKSR9h" alt="World Cup result: Portugal advances to knockout stage with 2-0 win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal have become the third team to qualify for the last 16 of the 2022 World Cup. Bruno Fernandes scored a double to ensure his country joined France&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/633817'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal vs. Uruguay - Football Match Report - November 28, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_PdYGISPh9Zyv-RbeO5wkdADaVtt_NPM6NAvqpAd-mqN_4bzwA-7eDwVIPScsYMAXTopCWZOo" alt="Portugal vs. Uruguay - Football Match Report - November 28, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bruno Fernandes scored a pair of goals as Portugal beat Uruguay 2-0 to move to six points in Group H at Lusail Iconic Stadium in Qatar on Monday night.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/portugal-vs-uruguay-world-cup-live-score-result/cwjvawnksshgahvh2kt86wto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal vs Uruguay final score, result: Bruno Fernandes double ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6VKmPqVwXLFUSIrY-G8drpXRsdrgPm_uqbf_TMmUcfBYJ3bQhDrhbEZ9frJESjKHNF2Jf9DR3" alt="Portugal vs Uruguay final score, result: Bruno Fernandes double ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A second-half double from Bruno Fernandes took Portugal into the Round of 16 at World Cup 2022 and left Uruguay&#39;s hopes of joining them in progressing from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/world-cup-2022-portugal-vs-uruguay-start-time-betting-odds-lines-top-expert-picks-fifa-predictions-bets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 Portugal vs. Uruguay start time, betting odds, lines ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQclr7quiTIxJ4TiQDmNVxsi7bMfhXNMweL10KoyXXUnkPoAeUSIjIoAscxDnUjSXV5TG6pd6BS" alt="World Cup 2022 Portugal vs. Uruguay start time, betting odds, lines ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Soccer expert Brandt Sutton has locked in his 2022 World Cup picks and predictions for Uruguay vs. Portugal in Group H play.</p></div>
            </div>
        </a>
        </Template></>;
}