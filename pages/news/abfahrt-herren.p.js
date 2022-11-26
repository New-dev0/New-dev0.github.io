import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Abfahrt Herren</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Abfahrt Herren"/>
        <meta name="description" content="Trending News about Abfahrt Herren" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Abfahrt Herren</h1>
            <Image width={800} height={500} src="https://api-tvthek.orf.at/assets/segments/0145/81/6d239672e8ac2e5d9d5865259f508e2b95aa6163.jpeg" alt="Abfahrt Herren"/>
            <h3>Recent News</h3>
            <a href='https://tvthek.orf.at/live/Skiweltcup-Abfahrt-der-Herren-in-Lake-Louise/14200780'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skiweltcup: Abfahrt der Herren in Lake Louise abgesagt vom 25.11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpPJStC4MLVaGS1KiUfUqCCaWlJgpWPYsZx4gXP4ZINEA3xcpVRhg76caWqq50aA4TkMLqQNyT" alt="Skiweltcup: Abfahrt der Herren in Lake Louise abgesagt vom 25.11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weltcup-Winter steht weiter unter keinem guten Stern. Nachdem bereits die Speed-Rennen im Schatten des Matterhorns sowie die Parallel-Bewerbe in Zürs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/wintersport/ski-alpin/weltcup-herren/ski-weltcup-live--startliste-fuer-herren-abfahrt-in-lake-louise/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski Weltcup: Abfahrt der Herren in Lake Louise erst am Samstag</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9q0mC7HUodR5P4CKabFiFJnmfEBoZ3ske_qQkkM--QBRARaEZgHqETtwN42gHvsVw62SGY0It" alt="Ski Weltcup: Abfahrt der Herren in Lake Louise erst am Samstag" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die erste Abfahrt der Männer in dieser Saison muss wetterbedingt auf Samstag verschoben werden. - Wintersport, Ski Alpin, Weltcup Herren.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/mehrsport/wintersport/2211/Artikel/ski-alpin-uebertragung-abfahrt-der-herren-in-lake-louise-heute-live-im-tv-livestream-und-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski alpin: Darum findet die Abfahrt der Herren in Lake Louise heute ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSN9CL8WXHhb_OyD4bE8eFRWpweRR4kT-rfsj0-cYPwis5u7fuTD2qmPzKFTSH85xAvnt0UxHgK" alt="Ski alpin: Darum findet die Abfahrt der Herren in Lake Louise heute ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im kanadischen Lake Louise musste heute die erste Herren-Abfahrt der Ski-alpin-Saison 2022/23 abgesagt werden. Warum, erklärt Euch SPOX in diesem Artikel.</p></div>
            </div>
        </a><a href='https://skiweltcup.tv/index.php/live-abfahrt-der-herren-in-lake-louise-2022-vorbericht-startliste-und-liveticker-startzeit-20-30-uhr/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Abfahrt der Herren in Lake Louise ist für heute abgesagt – Neue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTFMwPfnJm4yenGmIlGqjRAHOPOJ-Fob40_6-_5j0wTBdRfJ-5rljxKQcnAg-RSkkEHtKmExz7H" alt="Abfahrt der Herren in Lake Louise ist für heute abgesagt – Neue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lake Louise – Nach der Absage der ersten Abfahrten in Zermatt/Cervinia, die zwei Premierenrennen gleichgekommen wären, trainierten die weltbesten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nachrichten.at/sport/wintersport/ski-alpin/herren-abfahrt-in-lake-louise-wetterbedingt-abgesagt;art73891,3749389'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Herren-Abfahrt in Lake Louise wetterbedingt abgesagt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8IERvMMJGHi2-9HZcMVGB-A1em6PGaOKwMvoMzoQKk9xsq9eesY6fBTZQs6KTu6MgnJJxrbyn" alt="Herren-Abfahrt in Lake Louise wetterbedingt abgesagt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LAKE LOUISE. Der Speed-Auftakt der alpinen Ski-Männer verzögert sich weiter. Die für Freitag in Lake Louise (Kanada) geplante Weltcup-Abfahrt wurde wegen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}