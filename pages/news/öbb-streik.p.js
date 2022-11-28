import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ÖBB Streik</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ÖBB Streik"/>
        <meta name="description" content="Trending News about ÖBB Streik" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ÖBB Streik</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2627278/va62a07/og_image.jpg" alt="ÖBB Streik"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2867588'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kompletter Ausfall - ÖBB-Chef: „Mir fehlt Verständnis für den Streik“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3-g-Q35RqKdJM4aYL9pTMxiaisGHKYexMLUZwg8QKtOyNb5wYjPLffZ9mY-3sSgh_gRgtgPTl" alt="Kompletter Ausfall - ÖBB-Chef: „Mir fehlt Verständnis für den Streik“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ab 0 Uhr wird der Bahnverkehr in Österreich zum Erliegen kommen, ganze 24 Stunden streiken die Eisenbahner am Montag. Grund für die ...</p></div>
            </div>
        </a><a href='https://orf.at/stories/3295486/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bahn-KV: Verhandlungen gescheitert – morgen Streik</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT15QaimHI9RXcT4brb41DB90pRWZq-s2RScVZxIMg10Lm5wzd3k4_JyqtWjaBWHl6AksrMpI_B" alt="Bahn-KV: Verhandlungen gescheitert – morgen Streik" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die fünfte Verhandlungsrunde zu einem neuen Bahn-KV ist gescheitert. Arbeitgeber- und Arbeitnehmervertreter gaben sich gegenseitig die Schuld am ganztägigen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/innsbruck/c-lokales/lr-zumtobel-appell-fuer-homeoffice-und-fahrgemeinschaften_a5735695'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖBB-Streik: LR Zumtobel Appell für Homeoffice und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSidIS2KuoKHos1Hpw2hGXy2JhmIQSuc1yP4hym-2VcbSsc27Omh_d7AzZRlMJ2yo5dMye8Qd1o" alt="ÖBB-Streik: LR Zumtobel Appell für Homeoffice und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LR Rene Zumtobel appelliert im Zusammenhang mit dem Streik der ÖBB, wenn möglich auf Homeoffice umzustellen, Fahrgemeinschaften zu bilden sowie nicht&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141264193/24-stunden-streik-was-bahnreisende-jetzt-wissen-muessen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>24 Stunden Streik: Was Bahnreisende jetzt wissen müssen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR4aAC2UtPZF9M4i92Rrkvb3owJ2cJZ-TlYAFizv9S57rAp4Vwbx3yI0BoaWm8H7ggkbBea-8xF" alt="24 Stunden Streik: Was Bahnreisende jetzt wissen müssen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Österreich steht ein 24-stündiger, landesweiter Eisenbahnstreik bevor. Nur Busse und kommunale Verkehrsbetriebe fahren, aber keine Regional-, Fern- und&nbsp;...</p></div>
            </div>
        </a><a href='https://vorarlberg.orf.at/stories/3183927/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verkehr: Streik fix: Am Montag fahren keine Züge</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRO1qW7xLqyaY5Ekzzfd6Vh1Ap_8nIsqlbjgev4RkNYfjIplZvN61j1nztqltwD8iB0wrILIYxx" alt="Verkehr: Streik fix: Am Montag fahren keine Züge" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die fünfte Verhandlungsrunde zu einem neuen Bahn-KV ist am Sonntag gescheitert. Das bestätigten sowohl Arbeitgeber- als auch Arbeitnehmervertreter.</p></div>
            </div>
        </a><a href='https://www.heute.at/s/bahnstreik-in-oesterreich-am-montag-ist-fix-verhandlungen-sind-gescheitert-100240879'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖBB-Hammer! Zug-Streik ab Montag ist jetzt fix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQumCzz2uAZbO2BO2EgJkjPzBg8rnQi5nJJQOlzt206zXxWZjkwexVv78qSCyiaYTPYajvgaItd" alt="ÖBB-Hammer! Zug-Streik ab Montag ist jetzt fix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die ÖBB streiken - ab Montag droht österreichweit Zug-Chaos.Tobias Steinmaurer / picturedesk.com. Die Lohnverhandlungen für rund 50.000 Eisenbahner und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/wirtschaft/oesterreich/2169621-Bahn-Verhandlungen-starten-heute-um-11-Uhr.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verhandlungen gescheitert - Bahn-Streik am Montag</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFR2KdvcS9mOLi1Kx22U3o4yN5Q-F4d9_lThQu6dlbXXzBIdJFMGNLfo4BCE8YzeQRwS8WVpnI" alt="Verhandlungen gescheitert - Bahn-Streik am Montag" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Regional-, Fern- und Nachtzüge sowie S-Bahnen fahren nicht. Auch kommunale Angebote sind betroffen.</p></div>
            </div>
        </a><a href='https://www.krone.at/2867727'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖBB-Totalausfall - Wer in Niederösterreich auf der Strecke bleibt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAtWWtEHLgdTg03ZzidMr5oKcxSr1nW9jQSdZyNFc11WR50g5aT8B6JTxNmXqkFe0CEi6wQZV4" alt="ÖBB-Totalausfall - Wer in Niederösterreich auf der Strecke bleibt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An kurzfristige Alternativen wie einen Schienenersatzverkehr auf der Straße will man beim Verkehrsverbund Ostregion aber nicht einmal denken. „Das können wir in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}