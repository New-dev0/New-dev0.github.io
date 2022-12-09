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
            <Image width={800} height={500} src="https://www.wienerzeitung.at/_em_daten/SOCCER-WORLDCUP-ESP/LUIS-ENRIQUE/452415/_/1xZPOhT3Rx3h3lJnagDWVi1P73CikkDhIt_bIMvSenNLD8Zkew1LkeYKecB8UVtTNirDqXO1kcVSp7-hvWe7OTqJC2vOPYnli9UCJEqD6VW9QpUonNzJm7tJvMMUwdSmeIcokhHpgA2AfIMsXOHIQhQe2sBh_hADPAkTeCyQUzWR4/221208-1816-file-photo-fifa-world-cup-qatar-2022-round-of-16-morocco-v-spain.jpg" alt="Luis Enrique"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/spanien-trainer-luis-enrique-ist-raus-nachfolger-schon-klar-530416'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spanien-Trainer Luis Enrique ist raus, Nachfolger schon klar</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Spanien-Trainer Luis Enrique ist raus, Nachfolger schon klar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach der WM-Achtelfinal-Niederlage Spaniens gegen Marokko (Spielbericht&gt;&gt;&gt;) gibt es bei der &quot;Furia Roja&quot; erste personelle Konsequenzen.</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/sport/fussball-wm-2022/2171071-Luis-Enrique-nicht-mehr-spanischer-Nationalcoach.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luis Enrique nicht mehr spanischer Nationalcoach</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTpOQiIZkLFbFlM-a8YVAa-R6Wt_qjrWlYW40axzh_TybUUnZGsjLJuowuSNGYkjoXtizf91v9" alt="Luis Enrique nicht mehr spanischer Nationalcoach" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spanien schied im Achtelfinale gegen Marokko im Elfmeterschießen aus. Es war das letzte Spiel von Luis Enrique als Cheftrainer. © reuters / Dylan Martinez.</p></div>
            </div>
        </a><a href='https://www.fussballeuropa.com/news/nationalmannschaft-luis-enrique-vor-spanien-abschied-wer-jetzt-ubernehmen-soll-2022-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verband bestätigt Trennung von Luis Enrique – wer jetzt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdqDrtyzABbx-FjsMy4zZmr9GyWpH6UfQ2_VWA7LidJpnkmp5PNhH3AZu2JPF3GnuUBlQ8AH6p" alt="Verband bestätigt Trennung von Luis Enrique – wer jetzt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luis Enrique (52) steht nach dem Aus der spanischen Nationalmannschaft im Achtelfinale der WM in der Kritik. Medienberichten zufolge wird der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/sport/fussball-wm/fussball-wm-luis-enrique-nicht-mehr-spaniens-nationaltrainer-18519386.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach WM-Aus in Qatar: Spanien trennt sich von Nationaltrainer Luis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQEWs5-tqxDVpaGw7Lr0vH2sqqhCwdUJZY0oBpkk4KNbfNDqPEQwfzvmtvx5ZK5TRvgQcwjCbcC" alt="Nach WM-Aus in Qatar: Spanien trennt sich von Nationaltrainer Luis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die überraschende Niederlage im WM-Achtelfinale war Luis Enriques letztes Spiel als spanischer Fußball-Nationaltrainer. Zwei Tage später...</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/auch-sportdirektor-molina-verlaesst-spanische-nationalmannschaft/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Luis Enrique: Auch Spaniens Sportdirektor muss gehen - Sky ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROXnQW8K3F9GyG0Y8m9JbxzVcHTVVzFPJtu7JWPngNS9mEwKHWhvksa9tfZ_RzF1o1YCiPmxBf" alt="Nach Luis Enrique: Auch Spaniens Sportdirektor muss gehen - Sky ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das enttäuschende Abschneiden der spanischen Fußball-Nationalmannschaft bei der WM in Katar führt zu einem weiteren Personalwechsel: Nach dem Aus von.</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/fussball/wm/6225178/Nach-WMAus_Luis-Enrique-muss-als-spanischer-Nationalteamtrainer-gehen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luis Enrique muss als spanischer Nationalteamtrainer gehen, Luis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR88Q04A7izUYk7i9QzWq3czYZASgUdMech_VwARvdVgCuZ1iCkIOlO-KlQvZ07Bp0yj7nRo7U6" alt="Luis Enrique muss als spanischer Nationalteamtrainer gehen, Luis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dies teilte der spanische Fußballverband RFEF am Donnerstag mit. &quot;Sowohl Präsident Luis Rubiales als auch Sportdirektor José Francisco Molina haben dem Trainer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6225210/elfmeter-flop-kostet-luis-enrique-den-job'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elfmeter-Flop kostet Luis Enrique den Job</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRWbx_MNCIp4E3p3VvCOfffktg2YxpeTEaXaL_XPr3JCkfvfa9kOjdUOu0chtMrBIhsz54MrEaE" alt="Elfmeter-Flop kostet Luis Enrique den Job" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spaniens Verband zog nach dem WM-Aus die Konsequenzen. Luis de la Fuente, der bisherige U21-Coach, übernimmt „La Roja“.</p></div>
            </div>
        </a>
        </Template></>;
}