import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spanien WM</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spanien WM"/>
        <meta name="description" content="Trending News about Spanien WM" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spanien WM</h1>
            <Image width={800} height={500} src="https://www.spox.com/de/sport/fussball/wm/wm2010/2212/Bilder/jap.jpg" alt="Spanien WM"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/wm-2022-japan-ueberrumpelt-naechsten-ex-weltmeister-spanien-gluecklich-weiter-528657'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Japan überrumpelt nächsten Ex-Weltmeister - Spanien ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="WM 2022: Japan überrumpelt nächsten Ex-Weltmeister - Spanien ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AL-RAJJAN (dpa-AFX) - Spanien und Japan sind in einem Thriller zum Gruppenfinale gemeinsam ins Achtelfinale eingezogen - und haben den deutschen WM-Traum&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2010/2211/Artikel/japan-vs-spanien-gruppenspiel-heute-im-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Japan vs. Spanien: Gruppenspiel bei der WM 2022 - Das 2:1 im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdJQLfpnHdF6yo5ZtQ-PYDjibB9taJDTE5y4feaeFbvMeF-tQ5LUUnXbCQ6IAPvdC_p_KlYKQg" alt="Japan vs. Spanien: Gruppenspiel bei der WM 2022 - Das 2:1 im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am letzten Spieltag der WM-Gruppenphase gewinnt Japan gegen Spanien und sichert sich das Ticket für das WM-Achtelfinale. Das Gruppenspiel im Liveticker zum&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/12/wm-2022-ausgerechnet-spanien-und-japan-verlangern-kooperation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Ausgerechnet! Spanien und Japan verlängern Kooperation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsrg-TwLoV61G9mh1RGZO0yQQpH_vfP9Gwm96IhK4sC4UnWgtpx_UGFH7LTJVJ4GOQFIqt-HuN" alt="WM 2022: Ausgerechnet! Spanien und Japan verlängern Kooperation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ausgerechnet kurz vor dem entscheidenden Gruppenspiel verlängern Spaniens und Japans Fußballverbände ihre Kooperation. Das letzte Gruppenspiel der DFB-Elf&nbsp;...</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/fussball/wm-2022/gruppe-e/fifa-wm-2022-heute--japan---spanien/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Japan nach Sensationssieg über Spanien im Achtelfinale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTe1drXiM4zzu3U-HU-i1WkSkGFaFIYrsRknjuBHuSxSWGCLmPpNQnELsnELIhDR4IECzuEIQUm" alt="WM 2022: Japan nach Sensationssieg über Spanien im Achtelfinale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Japan dreht gegen Spanien das Spiel. Damit fixieren die Asiaten sensationell den Achtelfinaleinzug. Spanien steht trotz Niederlage ebenfalls im Achtelfinale&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/sport/sportschau/japan-spanien-101.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball-WM 2022: Japan schlägt Spanien mit 2:1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSePYY_eUKR0CSGmCM7TTf4YHmoiHaOQETdpj9bASDcvM0AMT9JucUlqT7rzOo1XfH0i1ONuJsB" alt="Fußball-WM 2022: Japan schlägt Spanien mit 2:1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Japan hat das letzte Gruppenspiel gegen Spanien mit 2:1 gewonnen und ist als Tabellenerster ins WM-Achtelfinale eingezogen. Aber auch Spanien ist weiter.</p></div>
            </div>
        </a><a href='https://www.krone.at/2870662'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nun im Achtelfinale - Irre! Japans „Samurai“ blamieren Ex-Champ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnwO0GB25G_DjWhRd3GjYqpRxBCRzh--3woJds43-fCM0bmKTM8fADip7AkD4cr99TiKJGT1Dh" alt="Nun im Achtelfinale - Irre! Japans „Samurai“ blamieren Ex-Champ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unfassbar, aber wahr: Außenseiter Japan hat bei der Fußball-WM in Katar im abschließenden Vorrunden-Gruppenspiel Ex-Weltmeister Spanien eine ...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141429664/deutschland-in-der-gruppenphase-gescheitert-japan-schlaegt-spanien-beide-teams'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deutschland bei WM ausgeschieden – Japan schlägt Spanien ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxFZvpL9Roz5HVuyqUDvF3pazajWOZz5ivByz8rfNP9HMRaEVdV4LvcVsqkhA4ReKdcOKt2Njk" alt="Deutschland bei WM ausgeschieden – Japan schlägt Spanien ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deutschland bezwingt Costa Rica 4:2, muss aber nach Hause fahren. Spanien gibt den ersten Tabellenplatz mit einer 1:2-Niederlage an Japan ab.</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/wm-2022-japan-spanien-im-liveticker/282302'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Japan - Spanien im Liveticker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGxaF2--CowGTetGxPcu8Gl37Q5ZfFkzcdMF2YgfaWjlKBaYMH7R-4B401xtfLC7QYTncBGxQK" alt="WM 2022: Japan - Spanien im Liveticker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das WM-Match zwischen Japan und Spanien im Liveticker auf PULS 24 und live auf zappn.tv.</p></div>
            </div>
        </a>
        </Template></>;
}