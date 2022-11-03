import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Novak Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Novak Djokovic"/>
        <meta name="description" content="Trending News about Novak Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Novak Djokovic</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/Novak-Djokovic-beetle-20221009.jpg" alt="Novak Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/tennis/novak-djokovic-beats-cressy-in-straight-sets-at-paris-masters-8244009/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic beats Maxime Cressy in straight sets at Paris Masters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAWn8VQYXVB5-m9WJo05Ye_s9GC1q_7eekiEG8-HajX0fEuuCGtglyHm68h-L1qhN0CCi_o5rW" alt="Novak Djokovic beats Maxime Cressy in straight sets at Paris Masters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After lifting trophies in Israel and Kazakhstan, Djokovic stretched his winning streak to 10 matches since a loss at the Laver Cup in September.</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/sports/clinical-victory-for-novak-djokovic/cid/1895852'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clinical victory for Novak Djokovic</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfmbGql2zAL7Z-Lu2UR1PKyvKycCrH5psbEyUwLFGeZRXBWzUKAivGcJ583d7CCCHyeDDdlXi6" alt="Clinical victory for Novak Djokovic" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Serbian raised his game in the second set, breaking his opponent at 4-4 before serving out the match with ease.</p></div>
            </div>
        </a><a href='https://scroll.in/field/1036425/paris-masters-clinical-novak-djokovic-beat-maxime-cressy-to-start-title-defence'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris Masters: Clinical Novak Djokovic beat Maxime Cressy to start ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSE-SFET02AeoK65JY2o4Lm_h-BiQxOMUwSXjz9fodHsy6890QFEgiZVg-M7a-ClOBjy3uUZ-vX" alt="Paris Masters: Clinical Novak Djokovic beat Maxime Cressy to start ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The number six seed is targeting his fifth title from just 11 events after a season heavily curtailed by his opposition to being vaccinated against Covid.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/tennis/watch-novak-djokovic-beats-maxime-cressy-to-make-winning-start-in-title-defence-at-paris-masters-2529947.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Novak Djokovic beats Maxime Cressy to make winning ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvSArd_K1rhZWXqOJeSLw7noBBFusaFPrQsCmSp16EYXejMYKCFL79D2mbUnCarvqJ2ICvw8jO" alt="WATCH: Novak Djokovic beats Maxime Cressy to make winning ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Rolex Paris Masters&#39; Tuesday match saw Novak Djokovic play for the first time since early October when he won back-to-back indoor championships and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aninews.in/news/sports/tennis/novak-djokovic-makes-winning-start-in-title-defence-at-paris-masters20221102101245'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic makes winning start in title defence at Paris Masters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRa9bT_lSMIDrvv0CI9H-j_wJDlUc4AHaHXGs2ynHItJN_9t3602JBJoxgXdAGLp8LdQYIh49Kw" alt="Novak Djokovic makes winning start in title defence at Paris Masters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic defeated the Paris-born American 7-6(1), 6-4 as he dominated the serve and was able to use that freedom to try to stop Cressy&#39;s thunderous delivery&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/tennis/novak-djokovic-hits-the-ground-running-in-paris-3482339'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic Hits The Ground Running In Paris</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIwh3ASXANZqGSh785DeoJuMs_a12J_zBFmX7_QebOMPMr8lrrd4o2SgSzMBjE5MpEsgHBugXf" alt="Novak Djokovic Hits The Ground Running In Paris" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic began the defence of his Paris Masters title with a clinical 7-6 (7/1), 6-4 second round win against American Maxime Cressy on Tuesday.</p></div>
            </div>
        </a>
        </Template></>;
}