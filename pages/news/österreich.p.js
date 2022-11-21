import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Österreich</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Österreich"/>
        <meta name="description" content="Trending News about Österreich" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Österreich</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal422x79-546x222/f/a/b/6217643/9FE79412-113A-47EC-85D4-4E591E5AE987_v0_h.jpg" alt="Österreich"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/sport/fussball/oesterreich/nationalteam/6217643/Oesterreich-gegen-Italien_Was-fuer-Oesterreich-auf-dem-Spiel-steht'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Was für Österreichs Fußballteam heute auf dem Spiel steht</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT744JY366cShpGD0P5uCQxqurnsjc4o4sVWBQ-DGpKTK6lJZlDzWZk4HZrVb0V1QqJoFy4IdqU" alt="Was für Österreichs Fußballteam heute auf dem Spiel steht" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für die RAI hat die Tanzshow &quot;Ballando con le stelle&quot; absoluten Vorrang. Das Gegenangebot, am Samstag um 18.30 Uhr zu spielen, und das Match auf Rai Sport und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vienna.at/oesterreich-schloss-sich-koalition-gegen-plastikverschmutzung-an/7755247'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Österreich schloss sich Koalition gegen Plastikverschmutzung an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTiOt-cOlTX_jlOHT8mYvTQDQmuwSv32MXOlyXjHOCs9yHBNb1XxsA9zlgaMRWT7wnA-Mk_rep_" alt="Österreich schloss sich Koalition gegen Plastikverschmutzung an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um das Ende der weltweiten Plastikverschmutzung abzutreiben, hat sich Österreich der internationalen High Ambition Coalition angeschlossen.</p></div>
            </div>
        </a><a href='https://kurier.at/sport/fussball/testspiel-kracher-in-wien-oesterreich-fordert-den-europameister-italien/402229629'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Testspiel-Kracher live: Österreich bezwingt Europameister Italien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0a7Dpa5BNkyNVHMKpWaliVwB2vwQ7yv81ViO9Y4Y3BeNiNp1ojbbR7RTJ6t3Mcw_HtpbZAI2I" alt="Testspiel-Kracher live: Österreich bezwingt Europameister Italien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Während in Katar die WM gespielt wird, empfing das ÖFB-Team Europameister Italien und gewann 2:0.</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/fussball/oefb-nationalteam/a-team/spiele/einzelkritik--noten-zum-laenderspiel-oesterreich-gegen-italien/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Einzelkritik: Noten zum Länderspiel Österreich gegen Italien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQYHd-GvsGkT1ysktLcVKP8czB-G67Ci5d-RjcOuGw3lhSiIWFMC4nhwHxW--ohMMkJPIUmwZCl" alt="Einzelkritik: Noten zum Länderspiel Österreich gegen Italien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LAOLA1-Einzelkritik zum Testspiel Österreich gegen Italien. Wer hat sich die besten Noten verdient? - Fussball, ÖFB-Nationalteam, A Team.</p></div>
            </div>
        </a><a href='https://www.sn.at/sport/fussball/nationalteam/paukenschlag-zum-abschluss-oesterreich-schlaegt-italien-130001434'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paukenschlag zum Abschluss: Österreich schlägt Italien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnSwQNH0dpevFk1u3gksZJi_eeYIO7flZ7CKulYQGXyd2c1rqS22eaaB2eWrswqnfT2iDthIxO" alt="Paukenschlag zum Abschluss: Österreich schlägt Italien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zum Abschluss des Länderspieljahres gab es für Österreich einen versöhnlichen Abschluss. Die ÖFB-Elf besiegte am Sonntag im Wiener Ernst-Happel-Stadion&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/fussball/oesterreich/nationalteam/6217643/Oesterreich-Italien-2_0_Alaboooom-David-Alaba-stellt-per'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schlager und Alaba schießen Österreich zu 2:0-Erfolg gegen Italien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSqCwGIzSin4BMv4p61FU-yewzfrQDtlLtRxOyBzsxJ0FHeM_ZM_GOmYAYFWTmutzWYJzTmnOK" alt="Schlager und Alaba schießen Österreich zu 2:0-Erfolg gegen Italien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Österreichs Fußballnationalteam feierte erstmals seit 1960 wieder einen Sieg gegen Italien. Xaver Schlager (6.) und David Alaba (35.)</p></div>
            </div>
        </a><a href='https://www.derstandard.de/story/2000141029670/oesterreich-bezwingt-europameister-italien-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Österreich bezwingt Europameister Italien 2:0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7SFDdQYI3wmr4h48u6bsXRu94OhKQUkPxqLzjXDtyQaCrY9RWbh3z872kAe1fKz7JF2GF22Fa" alt="Österreich bezwingt Europameister Italien 2:0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team von Rangnick feiert im Testspiel den ersten Sieg gegen die Squadra Azzurra seit 62 Jahren. Schlager und Alaba trafen.</p></div>
            </div>
        </a><a href='https://www.spox.com/at/sport/fussball/oesterreich/2211/Artikel/erster-sieg-seit-1960-oesterreich-dominiert-italien-bei-heimsieg.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erster Sieg gegen Italien seit 1960: Österreich dominiert Squadra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSCbUTzLE0Pwgq2_Sz9uNG0iOZ4eyi7ZFfyIubmiLeX5TPAZn5jJiZacyENqV1BnrPrnk2do7nR" alt="Erster Sieg gegen Italien seit 1960: Österreich dominiert Squadra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Österreich hat Italien am Sonntagabend im Testspiel erstmals seit 62 Jahren besiegen können. Speziell in der ersten Halbzeit zeigte die Mannschaft von&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/fussball/oesterreich/nationalteam/6217964/Nach-2_0-gegen-Italien_Oesterreich-hat-sich-mit-aeusserst'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Österreich hat sich mit äußerst attraktivem Fußball profiliert und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLQHNjNlvvSKKrRcShBSYZJ80i7uLpDk4lktQ4sym_qdH25d0bdl60p84HP8VnxT_6w3FxBeCZ" alt="Österreich hat sich mit äußerst attraktivem Fußball profiliert und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Niederlagen in der Nations League gegen Topnationen des internationalen Fußballs hatten zuletzt nach einem fulminanten Auftakt für eine gewisse&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/c-politik/oesterreich-sagt-plastikverschmutzung-den-kampf-an_a5720089'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>High Ambition Coalition: Österreich sagt Plastikverschmutzung den ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6mGQ654k2nYJQ-YkVDvJjoWFxqhBEL-4o3mS23uDpoc_WTzPuuslDkuTY2wBywMkAd2u_UXr7" alt="High Ambition Coalition: Österreich sagt Plastikverschmutzung den ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ziel der internationalen Koalition ist das Ende der weltweiten Plastikverschmutzung voranzubringen. Im März ebnete die UNO-Umweltversammlung den Weg für ein&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}