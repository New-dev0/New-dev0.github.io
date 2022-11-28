import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Luis Enrique</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Luis Enrique"/>
        <meta name="description" content="Trending News about Luis Enrique" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Luis Enrique</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/325c12bd-9154-4f4d-aa33-ba33a45979f6/1200x630" alt="Luis Enrique"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-luis-enrique-mit-ruhrender-botschaft-an-verstorbene-tochter-spanien-coach-emotional-vor-duell-mit-deutschland'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Luis Enrique mit rührender Botschaft an verstorbene ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSEZLAxczL6bi3avYxzsvdbp0PDSQceXv3G3igMUDYnnss9fScKn7OVT3VBvCXYSrNXz4Tpf0h8" alt="WM 2022: Luis Enrique mit rührender Botschaft an verstorbene ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dieser Tag ist für Spaniens Trainer Luis Enrique ein ganz besonderer - und das nicht nur wegen des Spiels gegen Deutschland. In einem Video gedenkt Enrique&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tz.de/sport/fussball/wm-spanien-luis-enrique-deutschland-tochter-tod-geburtstag-nachricht-zr-91941622.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM-Spiel gegen Deutschland: Luis Enriques emotionale Botschaft ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSN6YkEqdn2p4Cx1WRup-rHwXuzHXAXIzvGRq0yIzJ1Ks0GdV_hU6aCLG1skX5OaV952xldFFmf" alt="WM-Spiel gegen Deutschland: Luis Enriques emotionale Botschaft ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der 27. November ist für Spaniens Trainer Luis Enrique nicht nur wegen des WM-Spiels gegen Deutschland ein besonderer Tag. Seine Tochter Xana wäre heute 13&nbsp;...</p></div>
            </div>
        </a><a href='https://fussball.news/a/vor-dfb-luis-enrique-gedenkt-verstorbener-tochter'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vor Deutschland-Spiel: Luis Enrique gedenkt verstorbener Tochter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRIAtS7tlA-dMfri00rfSshtyqGDCI1PLGCcbYUFi3mBFTwUVUycYg4eT2ZUZvDcZ_J9FpR0hB_" alt="Vor Deutschland-Spiel: Luis Enrique gedenkt verstorbener Tochter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Sonntagabend kann Spanien gegen Deutschland den nächsten Schritt in Richtung WM-Achtelfin.</p></div>
            </div>
        </a><a href='https://www.kicker.de/luis-enrique-wir-sind-erster-in-der-todesgruppe-927441/artikel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luis Enrique: &quot;Wir sind Erster in der Todesgruppe&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQDVZ_MbfThVKYx6dWhbi9BzL6ijnoWdhL2K1pqBGpsHKMyPF694BUacd325mrqOgaQBx9q4pTp" alt="Luis Enrique: &quot;Wir sind Erster in der Todesgruppe&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Führung und vorzeitige Qualifikation für das Achtelfinale verpasst, doch Spaniens Nationaltrainer Luis Enrique betont das Positive des 1:1 gegen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/stars/id_100087886/wm-2022-spanischer-nationaltrainer-trauert-um-seine-verstorbene-tochter.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 | Spanischer Nationaltrainer trauert um seine verstorbene ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWG7y_MrwMqdXRFZDM8ucXKZR7NfZndy3teFaDS93wtqtexMRXQa2ckIW10Br8-YFd8N_48JDr" alt="WM 2022 | Spanischer Nationaltrainer trauert um seine verstorbene ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Sonntag spielt Spanien gegen Deutschland. Für Luis Enrique ein wichtiger Tag. Doch der 27. November stimmt ihn auch aus privaten Gründen sehr emotional.</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/wm-in-katar-spaniens-nationaltrainer-gratuliert-toter-tochter-vor-deutschland-duell-zum-geburstag-5018326.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM in Katar: Spaniens Nationaltrainer gratuliert toter Tochter vor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnLyAaT-ODqSZ0qzye5btLa-9lXgeHtA7-3NhPNCshRw83o_TdKsChzkupQU9bhSQMizMk6XZn" alt="WM in Katar: Spaniens Nationaltrainer gratuliert toter Tochter vor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Klassiker Deutschland gegen Spanien bei der Fußball-WM in Katar wird ein großer Kracher, doch für Spaniens Trainer Luis Enrique ist es ein schwerer Tag.</p></div>
            </div>
        </a><a href='https://www.krone.at/2867700'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wäre 13 Jahre geworden - Vor WM-Hit: Spanien-Coach gedenkt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJHmqwuif4AypxRDyeIOXlPxrxCvYLE2EOdoL1rfo0OE711qCYr3nIHRXOQL0FuJf6doTb_aAR" alt="Wäre 13 Jahre geworden - Vor WM-Hit: Spanien-Coach gedenkt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alles Gute zum Geburtstag, Xana!“ - mit diesem Posting rührt Spanens Teamchef Luis Enrique seine Follower auf Instagram. Exakt am Tag des Showdowns ...</p></div>
            </div>
        </a>
        </Template></>;
}