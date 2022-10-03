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
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/PAK-ENG-6.jpg" alt="England vs Pakistan"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/pak-vs-eng-7th-t20-live-score-updates-8185712/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PAK vs ENG 7th T20 Highlights: England defeat Pakistan by 67 runs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRT2FxJ6_8l-g1f-13ZnTqCuGhXTxa0wxsRmf3jp3EsEVEG_Au03GtEQtJbRAi_1DlsoXkMehiv" alt="PAK vs ENG 7th T20 Highlights: England defeat Pakistan by 67 runs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistan vs England 7th T20 Match Highlights: A sublime fifty from Dawid Malan and three wickets for Chris Woakes guided England to a thumping 67-run win&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/series/england-in-pakistan-2022-1327226/pakistan-vs-england-7th-t20i-1327234/match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dawid Malan, Chris Woakes star with bat and ball as England power ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQytp9C247H7j1KcsDwNGz4cppXHGEXEScRmcBN4nhmuNzCdKgmUDjKRaWc7rhWBUZIg6GZaAn_" alt="Dawid Malan, Chris Woakes star with bat and ball as England power ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dawid Malan, Chris Woakes star with bat and ball as England power to series win &middot; England 209 for 6 (Malan 78*, Brook 46*) beat Pakistan 142 for 8 (Shan 56,&nbsp;...</p></div>
            </div>
        </a><a href='https://m.cricbuzz.com/live-cricket-scores/51201/eng-vs-pak-7th-t20i-england-tour-of-pakistan-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan vs England, 7th T20I, England tour of Pakistan, 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Pakistan vs England, 7th T20I, England tour of Pakistan, 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow Pakistan vs England, 7th T20I, Oct 02, England tour of Pakistan, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz.</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/cricket/pakistan-vs-england-7th-t20i-live-score-updates-3397196'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan vs England, 7th T20I Highlights: England Beat Pakistan By ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSMiBbdurDI9bDAYkIlOamDb-CsaQx8wnamZ9hDo8C-V1FJPCD9XrjE55SbT0MjFuyyhhAbL_D" alt="Pakistan vs England, 7th T20I Highlights: England Beat Pakistan By ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PAK vs ENG Highlights: England beat Pakistan in the seventh T20I to win the series 4-3.</p></div>
            </div>
        </a><a href='https://cricketaddictor.com/fantasy-cricket/pak-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-england-tour-of-pakistan-7th-t20i/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PAK vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJSBmNGNIAvKcU2ksQXzbVxkeNsxWDWsHI49r81R5Gbv7bHSAajjVzC2SBW63B6_Ff6Ot7j-mJ" alt="PAK vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PAK vs ENG Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- England Tour of Pakistan, 7th T20I.</p></div>
            </div>
        </a>
        </Template></>;
}