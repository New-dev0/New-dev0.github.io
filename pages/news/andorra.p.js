import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andorra</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Andorra"/>
        <meta name="description" content="Trending News about Andorra" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andorra</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7355040/46-192036127.jpg" alt="Andorra"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/sport/fussball/rangnicks-ideen-beim-oefb-und-andorra-eine-premiere-beim-ungeliebten-test/402219132'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rangnicks Ideen und Andorra: Eine Premiere beim ungeliebten Test</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT1n09LyupSLPAzMPDzgw1Q4Xn9-BllJWZUZxHSeLsd1zvwzy4vjqIhF7rONIA1aD_xI0BFYXhj" alt="Rangnicks Ideen und Andorra: Eine Premiere beim ungeliebten Test" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erstmals trifft Österreich auf Andorra. Der Test von Malaga unterbricht jedoch eine Trainingswoche, in der Teamchef Rangnick gerne noch mehr an der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oe24.at/sport/fussball/nationalteam/rangnick-hofft-auf-weiterentwicklung-gegen-andorra/536096142'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rangnick hofft auf Weiterentwicklung gegen Andorra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShokWYg6vZA17HxauesvcoCqlUyMjPLykYwwX4yVIbk0f45lOg6GquN2SiS9YdBiJRA5w4Lm9u" alt="Rangnick hofft auf Weiterentwicklung gegen Andorra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für das österreichische Nationalteam geht es am Mittwoch in das erste von zwei Testspielen. Zunächst geht es im spanischen Malaga gegen Fußballzwerg Andorra&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news.at/a/rangnick-andorra-weiterentwicklung-12788111'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rangnick will gegen Andorra Weiterentwicklung sehen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSG6HO9NX_HJ-de0FtDZy5Dor7AYyjXvCi9r5Mh9UWF7kWOXPIc9nizbIFXi7Mf86c2W2yagOXG" alt="Rangnick will gegen Andorra Weiterentwicklung sehen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es ist ein etwas ungeliebter Test, den das österreichische Fußball-Nationalteam am Mittwoch (18.00 Uhr/live ORF 1) in Malaga gegen Andorra absolvieren muss.</p></div>
            </div>
        </a><a href='https://www.vol.at/oefb-spieler-sehen-andorra-test-als-wettkampfeinheit/7745785'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖFB-Spieler stellen sich Sinnfrage vor Andorra-Test nicht</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKOPOwknpNaxy9RcojhtMLlzXvz9x3SfFQDVaYHcysGABef2BHumF9PgMnBZZcgKX6tajZWeCP" alt="ÖFB-Spieler stellen sich Sinnfrage vor Andorra-Test nicht" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor dem abschließenden Länderspiel-Highlight des Jahres am Sonntag (20.45 Uhr) in Wien gegen Europameister Italien haben Österreichs Fußball-Nationalspieler&nbsp;...</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/fussball/oefb-nationalteam/a-team/news/test-gegen-andorra-fuer-oefb-kicker-eine--wettkampfeinheit-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Test gegen Andorra für ÖFB-Kicker eine &quot;Wettkampfeinheit&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6eIOCguViY8EhbkudR5zS7Fp46LIcSFMSZYn1WpwgNDqsSeCXWBPuHcqff6L0moIC5Gdpuu5h" alt="Test gegen Andorra für ÖFB-Kicker eine &quot;Wettkampfeinheit&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für ÖFB-Kicker stellt sich Sinnfrage des Tests gegen Andorra nicht. Xaver Schlager will nicht wissen, was im Falle einer Niederlage passiert.</p></div>
            </div>
        </a><a href='https://www.nachrichten.at/sport/fussball/nationalteam/oefb-team-gegen-andorra-hilft-der-rangnick-bonus;art191893,3742673'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖFB-Team: Gegen Andorra hilft der Rangnick-Bonus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS31tSSwAKQldztnnRseGxu1eZ1jZ1GcAwf9EEtbptfU289sqhcphQw13JrkYSo6Oz9YRGaWJFW" alt="ÖFB-Team: Gegen Andorra hilft der Rangnick-Bonus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MARBELLA / MALAGA. Länderspiel: Trotz des unattraktiven Gegners gab es keine Absagen im Kader.</p></div>
            </div>
        </a><a href='https://www.wettbasis.com/sportwetten-tipps/andorra-vs-oesterreich-tipp-prognose-quoten-16-11-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andorra vs. Österreich Tipp, Prognose &amp; Quoten 16.11.2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSV0e9mwAWBBdPxxUZeIVSnK66a-bGokn1ZWZ1o8hu78CV9O7I3RMUuqIfoWiJ6-epoegnZYT8c" alt="Andorra vs. Österreich Tipp, Prognose &amp; Quoten 16.11.2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zu Letzteren zählt auch die österreichische Nationalmannschaft. Die ÖFB-Elf hatte den Einzug in die WM 2022 verpasst. In den Playoffs scheiterte die Mannschaft&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}