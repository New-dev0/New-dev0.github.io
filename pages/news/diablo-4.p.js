import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Diablo 4</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Diablo 4"/>
        <meta name="description" content="Trending News about Diablo 4" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Diablo 4</h1>
            <Image width={800} height={500} src="https://images.cgames.de/images/gamestar/4/diablo-4-gs_6209403.jpg" alt="Diablo 4"/>
            <h3>Recent News</h3>
            <a href='https://www.gamestar.de/artikel/diablo-4-open-beta-start-alle-infos,3387774.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diablo 4: So kommt ihr in die Open Beta, das ist bekannt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTM5nsvn83ez2eFMffxeIMh2EuaNF9aBrma3apHDM1CLF4cTeRxGAEA4wraCkH_VKxLxscOGxkD" alt="Diablo 4: So kommt ihr in die Open Beta, das ist bekannt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Open Beta für Diablo 4 bietet vorab Zugang für alle. Hier sammeln wir alle Infos, die schon bekannt sind, zum Beispiel Early Access und Startzeit.</p></div>
            </div>
        </a><a href='https://www.pcgameshardware.de/Diablo-4-Spiel-55956/News/Release-Termin-1409145/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diablo 4: Release-Datum in neuem Trailer angekündigt, das sind ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSO2dHNa4dXqEHyYxfRpAtKLF6HQdWlTrx1MY3htHYY-33BmqF3mZm48-tu3OkEJlYOHF-Iu-zL" alt="Diablo 4: Release-Datum in neuem Trailer angekündigt, das sind ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>09.12.2022 um 10:45 Uhr von Jonathan Harsch - Blizzard hat Diablo IV ein offizielles Erscheinungsdatum verpasst. Wie schon seit einiger Zeit gemunkelt wurde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pcgames.de/Diablo-4-Spiel-55956/News/Diablo-4-droht-ein-aehnliches-Fiasko-wie-bei-Cyberpunk-2077-1409223/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diablo 4 - droht ein ähnliches Fiasko wie bei Cyberpunk 2077?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNffVMgrvE8u_XEX6idl6I3NGmI-FM78uERk7GCbMqBglOyhuVAaQFPa15T4MUrNKNORhtp_d0" alt="Diablo 4 - droht ein ähnliches Fiasko wie bei Cyberpunk 2077?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chaos, Crunch und schlechte Führung. Ehemalige Entwickler bezweifeln, ob Blizzard Diablo 4 zum Release in einem fertigen Zustand abliefert.</p></div>
            </div>
        </a><a href='https://www.gamepro.de/artikel/diablo-4-release-ist-offiziell-der-leak-lag-knapp-daneben,3387730.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diablo 4 Release ist offiziell, der Leak lag knapp daneben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS2FZImQ-E-amkvcycjeo2wAPn3FOo6XLuo5METQqVKUQtvdpgL9o2X4qm12NbWGQVZXS04FABg" alt="Diablo 4 Release ist offiziell, der Leak lag knapp daneben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wann erscheint Diablo 4? Am 6. Juni 2023 sagen wir auf PS4, PS5, Xbox One, Xbox Series X/S und den PC den Schergen der Hölle den Kampf an. Knapp daneben&nbsp;...</p></div>
            </div>
        </a><a href='https://www.buffed.de/World-of-Warcraft-Spiel-42971/News/Amalgam-der-Wut-Mount-Diablo-4-Vorbestellung-1409136/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WoW: Amalgam der Wut - das ist das Mount aus der Diablo-4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNWxD_DmoHZ9KoBBMySqkhybeEWWY9hYrYwnXiDh7V8GNpa9mU8hNT3bp0JTPAj2p1rAb0esEX" alt="WoW: Amalgam der Wut - das ist das Mount aus der Diablo-4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wer sich Diablo 4 vorbestellt, kann sich für World of Warcraft ein neues Mount sichern: das Amalgam der Wut. Wie gefällt euch das Reittier?</p></div>
            </div>
        </a><a href='https://www.heise.de/news/Neuer-Diablo-4-Trailer-kuendigt-Releasetermin-am-6-Juni-2023-an-7371717.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Diablo 4&quot;: Release am 6. Juni – dank Überstunden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXVquEYL03HPpxKpsU9G6NXmRaxRteBtpw7lmIyjVvoPQp0nzJXee1XJU2JKiQD1F89gfEHNko" alt="&quot;Diablo 4&quot;: Release am 6. Juni – dank Überstunden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das geht aus einem neuen Trailer hervor, den das Studio bei den Game Awards 2022 veröffentlicht hat. Das Render-Video gibt einen Vorgeschmack auf die Story des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.buffed.de/Diablo-4-Spiel-55956/Specials/Release-Termin-2023-Ankuendigung-Trailer-Game-Awards-2022-Vorbestellung-Sammlerbox-Editionen-1409130/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diablo 4: Termin, Vorbestellung, Sammlerbox - alle Infos zum ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcRQGnpDHu4NtRKJ5393WhH0x9f67RPjP8x301lj_zkMnZzGYOkU-PJLbcOwlVhRoCCAaBCSce" alt="Diablo 4: Termin, Vorbestellung, Sammlerbox - alle Infos zum ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Zuge der Game Awards 2022 gab es die erwartete Info-Breitseite zum Release von Diablo 4. Wir verraten euch, was ihr zur Vorbestellung des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pcgames.de/Diablo-4-Spiel-55956/News/Neue-Klassen-quasi-bereits-bestaetigt-1409118/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diablo 4: Komplett neue Klassen angeteasert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSghHp70MohfJB00kG1VuQfKwWKCroo9kOoG1mbykndUP-nwrVSjPLPKieS8fmc31TA3suUo9l" alt="Diablo 4: Komplett neue Klassen angeteasert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In einem Interview mit Joe Shely erhielt PCGamesN quasi bereits die Bestätigung, dass mehr Klassen für Diablo 4 veröffentlicht werden.</p></div>
            </div>
        </a><a href='https://mein-mmo.de/wow-amalgam-der-wut-mount-diablo-4/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In WoW gibt&#39;s jetzt ein irres Höllen-Mount – Aber dafür müsst ihr ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSEjjxFFziKLIPNY4VwZujTQVg-ZWer71WuWalNz48CXPuQwIvzHLXzZnQkeCFEN8o3x8iGc8kQ" alt="In WoW gibt&#39;s jetzt ein irres Höllen-Mount – Aber dafür müsst ihr ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Amalgam der Wut in World of Warcraft sieht extrem düster aus. Wenn ihr es wollt, müsst ihr allerdings Diablo IV kaufen – und es gibt noch einen Haken.</p></div>
            </div>
        </a>
        </Template></>;
}