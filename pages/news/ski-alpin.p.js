import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ski Alpin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ski Alpin"/>
        <meta name="description" content="Trending News about Ski Alpin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ski Alpin</h1>
            <Image width={800} height={500} src="https://www.spox.com/de/sport/mehrsport/wintersport/2211/Bilder/ferstl-1200.jpg" alt="Ski Alpin"/>
            <h3>Recent News</h3>
            <a href='https://www.spox.com/de/sport/mehrsport/wintersport/2211/Artikel/ski-alpin-uebertragung-abfahrt-der-herren-in-lake-louise-heute-live-im-tv-livestream-und-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski alpin: Darum findet die Abfahrt der Herren in Lake Louise heute ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSN9CL8WXHhb_OyD4bE8eFRWpweRR4kT-rfsj0-cYPwis5u7fuTD2qmPzKFTSH85xAvnt0UxHgK" alt="Ski alpin: Darum findet die Abfahrt der Herren in Lake Louise heute ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im kanadischen Lake Louise musste heute die erste Herren-Abfahrt der Ski-alpin-Saison 2022/23 abgesagt werden. Warum, erklärt Euch SPOX in diesem Artikel.</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/wintersport/ski-alpin/weltcup-herren/ski-weltcup-live--startliste-fuer-herren-abfahrt-in-lake-louise/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski Weltcup: Abfahrt der Herren in Lake Louise erst am Samstag</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9q0mC7HUodR5P4CKabFiFJnmfEBoZ3ske_qQkkM--QBRARaEZgHqETtwN42gHvsVw62SGY0It" alt="Ski Weltcup: Abfahrt der Herren in Lake Louise erst am Samstag" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die erste Abfahrt der Männer in dieser Saison muss wetterbedingt auf Samstag verschoben werden. - Wintersport, Ski Alpin, Weltcup Herren.</p></div>
            </div>
        </a><a href='https://sport.orf.at/stories/3103621/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski alpin: Herren-Abfahrt in Lake Louise abgesagt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHCawyQdN-aR6_lbOHlwzpJXQdgjkshyfExq667LHiqbX6lRj6pfwnyMV1GJzVlZxK3LxtbDXK" alt="Ski alpin: Herren-Abfahrt in Lake Louise abgesagt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weltcup-Winter steht weiter unter keinem guten Stern. Nachdem bereits die Speed-Rennen im Schatten des Matterhorns sowie die Parallel-Bewerbe in Zürs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/ski-alpin/kein-speed-auftakt-abfahrt-in-lake-louise-abgesagt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kein Speed-Auftakt: Abfahrt in Lake Louise abgesagt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTc9FpE8mTonC38CdRVuWV99Cpl3MrkBtUq2r5hQNnwHFkZ5dMoS1KCfq0HHzBfXoT5w44wEZRt" alt="Kein Speed-Auftakt: Abfahrt in Lake Louise abgesagt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Ski-Weltcup 2022/23 bleibt von einer Absagen-Flut verfolgt. Die Abfahrt in Lake Louise (CAN) kann nicht wie geplant am Freitag stattfinden.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/wintersport/ski-alpin/2022/11/ski-alpin-manner-abfahrt-auf-samstag-verschoben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski alpin: Speed-Auftakt muss verschoben werden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUUUmqXLO-OMzYP2fsORFy_ony6ug12p-Zctft1x0TKaykb1VNoaebgz81hRigsb_b8aqNbWXP" alt="Ski alpin: Speed-Auftakt muss verschoben werden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Freitag war der Weltcup-Start der Abfahrer eingeplant. Aber die Speed-Spezialisten müssen weiter auf den ersten Start des Winters warten.</p></div>
            </div>
        </a><a href='https://www.sueddeutsche.de/sport/mikaela-shiffrin-ski-alpin-wintersport-1.5703636'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski alpin: Mikaela Shiffrin kommt im Jetzt an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSe2rnxZ5Tqu07QZxkqDdqu_SsgrTqi9diLc8Gwl7e4I0ZniNHih3Y-CZ9Ji3OytLwQR3qSTOPt" alt="Ski alpin: Mikaela Shiffrin kommt im Jetzt an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Drama von Peking ist abgehakt. Mikaela Shiffrin bricht mit alter Siegesgewissheit in den neuen Winter auf – und mit rasanten Plänen.</p></div>
            </div>
        </a><a href='https://www.chiemgau24.de/wintersport/ski-alpin/ski-alpin-heute-im-liveticker-abfahrt-der-herren-in-lake-louise-abgesagt-zr-91937941.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski alpin heute im Liveticker: Abfahrt der Herren in Lake Louise ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGDasrAKy5vUln-eZxvNChcDVSEBj8EA_0LyTK9qsbIagylCoSgHNeaccYfk0u1GmE_2cyCuq1" alt="Ski alpin heute im Liveticker: Abfahrt der Herren in Lake Louise ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weltcup 2022/23 im Ski alpin sollte am Freitag mit der Abfahrt in Lake Louise fortgesetzt werden. In Kanada drehte sich das Wetter, das Rennen wurde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.swp.de/unterhaltung/tv/ski-alpin-2022-lake-louise-zeitplan-startzeiten-uebertragung-tv-livestream-weltcup-ard-sportschau-eurosport-67741405.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ski Weltcup in Lake Louise 2022: TV-Übertragung Livestream ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJq9238RoScBMyudqw1juaJocZxfkETWN2qzQTzOxuIxNXDwif1KIltnOUeF_3FolXPg7jQTC9" alt="Ski Weltcup in Lake Louise 2022: TV-Übertragung Livestream ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am heutigen Freitag beginnt der Ski Alpin Weltcup in Lake Louise. Auf dem Programm heute steht die Abfahrt. Alle Infos zum Zeitplan und Übertragung im TV.</p></div>
            </div>
        </a>
        </Template></>;
}