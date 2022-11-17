import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mexico vs Sweden</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mexico vs Sweden"/>
        <meta name="description" content="Trending News about Mexico vs Sweden" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mexico vs Sweden</h1>
            <Image width={800} height={500} src="https://e00-marca.uecdn.es/assets/amp/AMP-DIRECTO-futbol-en.png" alt="Mexico vs Sweden"/>
            <h3>Recent News</h3>
            <a href='https://www.marca.com/en/football/national-team-friendlies/mexico-suecia-directo/2022/11/16/01_0112_20221116_659_361.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mexico 1-2 Sweden: Goals and highlights - Pre-World Cup friendly</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsi53DxQNUr2XeLy5ulMRf1IpNU1KdDzkDBK2gtTlnheZrnG-kRf6Pl-Ml9Qw4JR_a8DytaNta" alt="Mexico 1-2 Sweden: Goals and highlights - Pre-World Cup friendly" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mexico 1-2 Sweden A late goal form Svanberg was enough to see Sweden beat Mexico ahead of the 2022 World Cup. The Scandinavian side took the lead just.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/mexico-vs-sweden-live-online-score-stats-updates-world-cup-2022-friendly-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mexico vs Sweden summary: Svanberg winner, score, goals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRn2L8f7ou95cw3oCBOILd93x2xM7kLsenq_xf01FjV2BsINramN1UFKSpuKk7FcT0u-wXqrBjf" alt="Mexico vs Sweden summary: Svanberg winner, score, goals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mattias Svanberg scored late at Montilivi as Sweden soaked up heavy Mexican possession to win 2-1 in El Tri&#39;s final 2022 World Cup warm-up.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/ca/soccer/news/mexico-vs-sweden-live-score-result-world-cup-friendly/n4o9q4sxxt8gefinu6tmrung'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mexico vs. Sweden result: Raul Jimenez returns, but El Tri fall in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLMfYWcwwxn4wc-uhvaPmJPgCc4wEQgw-JDolqBDfGfloKPRy5dFlJfbkZ4cQr7serWMwIOv3D" alt="Mexico vs. Sweden result: Raul Jimenez returns, but El Tri fall in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mexico may have fallen to an alarming 2-1 defeat in their pre-World Cup friendly against Sweden, El Tri did come away with the most important victory: a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/645231'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mexico vs. Sweden - Football Match Report - November 16, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmDDCkprwb2aLR6eINNh014jRhFDpCQdkWfHEziMZ78NwQ1SfhydMfc4UHprx9M5IjYaQplZy0" alt="Mexico vs. Sweden - Football Match Report - November 16, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sweden, who failed to qualify for the World Cup, took the lead in the 54th minute when Svanberg dribbled past several opponents and crossed from the left for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/mexico-vs-sweden-live-score-result-world-cup-friendly/n4o9q4sxxt8gefinu6tmrung'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mexico vs. Sweden result: Raul Jimenez returns, but El Tri fall in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRaYermDgB0YV4g46yd7hN3iOjfC2T7PnkLJSMroQtdK93909ywErrJRqupOKOnBwhf36LpHe6P" alt="Mexico vs. Sweden result: Raul Jimenez returns, but El Tri fall in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mexico may have fallen to an alarming 2-1 defeat in their pre-World Cup friendly against Sweden, El Tri did come away with the most important victory: a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}