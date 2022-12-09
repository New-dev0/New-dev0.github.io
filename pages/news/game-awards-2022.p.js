import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Game Awards 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Game Awards 2022"/>
        <meta name="description" content="Trending News about Game Awards 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Game Awards 2022</h1>
            <Image width={800} height={500} src="https://images.mein-mmo.de/medien/2022/12/Game-Awards-Live-Ticker.jpg" alt="Game Awards 2022"/>
            <h3>Recent News</h3>
            <a href='https://mein-mmo.de/game-awards-2022-ankuendigungen-trailer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game Awards 2022 Live-Ticker: Alle Leaks, Ankündigungen und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBas2sxQ16VyhbWS-L74pXT-K8IyOxq0Y2dlDHP_be-zmOsDqfI7axfzo0_LZHNPkSSjl7MduC" alt="Game Awards 2022 Live-Ticker: Alle Leaks, Ankündigungen und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Game Awards 2022 finden am 8./9. Dezember statt. Wir begleiten das Event mit einem Live-Ticker und sammeln alle Infos und Trailer.</p></div>
            </div>
        </a><a href='https://www.netzwelt.de/news/211269-the-game-awards-2022-live-stream-so-seht-oscars-videospiele-geoff-keighley.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards 2022 im Live-Stream: So seht ihr die Oscars der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdlQ5x97JIcHcwQ6raR3waPC_tfj1UPmLOjpnn8pu90kBxbQ7ojyq1uAP9UPPO7im8p3UZ2Pq5" alt="The Game Awards 2022 im Live-Stream: So seht ihr die Oscars der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Während den Game Awards kürt Geoff Keighley anhand von Spieler-Votes die besten Spiele 2022. Wir verraten euch, wie ihr das Event im Live-Stream sehen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.play3.de/2022/12/08/the-game-awards-2022-ankuendigungen-heute-nacht-im-livestream/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards 2022: Ankündigungen heute Nacht im Livestream</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqoAhkKMALKw2_xP_iVqcZTF3lAHUAhko8GLPreHd153e577RavkdvdRFr1arSomgbCMSlexTJ" alt="The Game Awards 2022: Ankündigungen heute Nacht im Livestream" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In wenigen Stunden werden die Game Awards 2022 veranstaltet und ihr könnt dabei sein: Einmal mehr erfolgt die Ausstrahlung der Show live über das Internet.</p></div>
            </div>
        </a><a href='https://www.gameswelt.at/the-game-awards-2022/news/hier-koennt-ihr-heute-nacht-live-dabei-sein-317693'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards 2022: Hier könnt ihr heute Nacht live dabei sein!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPJO0eqYeO6YKPnHTdl3eEQtly1a3gmKNCPgKG5_-lvW-chFJ-ONw6LdaJFbhbH6DYIgmpeYQl" alt="The Game Awards 2022: Hier könnt ihr heute Nacht live dabei sein!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heute Nacht ist es soweit: Mit den The Game Awards 2022 steigt das letzte große Event des Spielejahres - und das verspricht auch dieses Mal wieder etliche&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rnd.de/digital/the-game-awards-2022-am-8-dezember-livestream-uhrzeit-kategorien-und-spieleankuendigungen-VBQLSAHO5RCHLK3XGSMFIS3SJ4.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards 2022 am 8. Dezember: Livestream, Uhrzeit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLrnzs7LdW1NqkIiaSyxpP2-O5HKf7yz5n-UNweZ5xMu-K4A9Z5isCKHdOvPxeaANXalpWzmMN" alt="The Game Awards 2022 am 8. Dezember: Livestream, Uhrzeit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Welches Game wird Spiel des Jahres 2022 und auf welche neuen Spielankündigungen können Fans sich freuen? Die diesjährigen Game Awards verraten es am 8.</p></div>
            </div>
        </a><a href='https://jpgames.de/2022/12/the-game-awards-2022-betaetigte-spiele-bisherige-geruechte-und-der-livestream/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards 2022: Bestätigte Spiele, bisherige Gerüchte und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcST83bvEnTVef3NyB8sdp2Fg-Uvf34Ce9ghTa9IVhZDv1Yew8eQsdvm5NOO-DSL5hQa1NOMbvBu" alt="The Game Awards 2022: Bestätigte Spiele, bisherige Gerüchte und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der Nacht von Donnerstag auf Freitag darf uns Geoff Keighley bei The Game Awards 2022 wieder seine geliebten „World Premieres“ um die Ohren hauen.</p></div>
            </div>
        </a><a href='https://www.pcgameshardware.de/The-Game-Awards-Event-259744/News/Livestream-Diablo-4-1409115/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards im Livestream: Krasse Steam-Deck-Verlosung ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXfTe7o6Qe530MFoiOXcbU9Oy0wIaXT5HPXD3lMCmYOCacwuBSe3ukD7pqjTO52Z8Zuu3sJ_G9" alt="The Game Awards im Livestream: Krasse Steam-Deck-Verlosung ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um kurz nach 1 Uhr am frühen Freitagmorgen starten die Game Awards 2022, die unter anderem auf Youtube im Livestream zu sehen sind.</p></div>
            </div>
        </a><a href='https://www.pcgameshardware.de/The-Game-Awards-Event-259744/News/Daniel-Craig-und-Cyberpunk-2077-1409061/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards laut Gerücht mit James Bond und Cyberpunk ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdAha5Lhn4ywxSBGDLyG3bHHKOMGzJKVxp-S5xhIAJcMScuE48WPXHvvqvyCFCOy_2w71FiXtU" alt="The Game Awards laut Gerücht mit James Bond und Cyberpunk ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neue Leaks und Gerüchte zu den Game Awards 2022: Angeblich soll Daniel Craig höchstpersönlich vor Ort sein.</p></div>
            </div>
        </a>
        </Template></>;
}