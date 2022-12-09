import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christkindlmarkt</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christkindlmarkt"/>
        <meta name="description" content="Trending News about Christkindlmarkt" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christkindlmarkt</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/722451/vfc0996/og_image.jpg" alt="Christkindlmarkt"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2877217'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wirbel um Betrunkenen - Christkindlmarkt-Besucher mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrCqheR6IKFoyCNc-Qx119M2nySQpwDQq27UhVQUN_6cFHQs8NV0hGNHYtke2PFyJpI16918eD" alt="Wirbel um Betrunkenen - Christkindlmarkt-Besucher mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Große Aufregung am Mittwochabend in Kufstein in Tirol: Ein stark betrunkener Einheimischer bedrohte auf einem Christkindlmarkt mehrere Besucher mit ...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/kufstein/c-lokales/mann-drohte-auf-christkindlmarkt-mit-messer_a5759509'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gefährliche Drohung in Kufstein: Mann drohte auf Christkindlmarkt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSHIdbbqYHrPFHEa3Z31ZOFOJq5T0vfDGNmGdwb5xm1ZQIDiiKBtzuy44sK1lJF2ThjLE0XMys" alt="Gefährliche Drohung in Kufstein: Mann drohte auf Christkindlmarkt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 07.12.2022, gegen 21:00 Uhr bedrohte ein stark alkoholisierter, 38-jähriger Österreicher, auf einem „Christkindlmarkt“ in Kufstein mehrere Personen mit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.heute.at/s/diese-sternzeichen-vergnuegen-sich-am-christkindlmarkt-100242429'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diese Sternzeichen lieben den Christkindlmarkt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxfsKzaIsMHXeL7AbmN6tvtmbCU0I0DT9mANW-7VcD7uAjDkQ6TtOsfiSuy0Jjn-onySAumNff" alt="Diese Sternzeichen lieben den Christkindlmarkt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es erfreut sich nicht jeder an Glühwein und Weihnachtsdeko. Doch diese Sternzeichen sorgen am Christkindlmarkt immer für gute Laune.</p></div>
            </div>
        </a><a href='https://www.heute.at/s/christkindlmarkt-eskalation-messer-mann-bedroht-gaeste-100243054'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christkindlmarkt-Eskalation: Messer-Mann bedroht Gäste</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJuMWt1r8AEAyv6_IJp1Zb_LPE3Fskey2QzHqDq-NiFha1bP1lk6w6JSO5nBiI7zBlkzg6FaoG" alt="Christkindlmarkt-Eskalation: Messer-Mann bedroht Gäste" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auf einem Christkindlmarkt in Kufstein war am Mittwoch von der Weihnachtsstimmung nichts zu spüren. Mehrere Besucher wurden mit einem Messer bedroht.</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/ried/c-leute/weihnachtswunderwelt-in-ried_a5759593'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rieder Christkindlmarkt, 8.-11. Dezember: Weihnachtswunderwelt in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQo-_FekjH-yACuo-t0DWvo5g2ZAW5vlU9RmQApP6c99LyNkNUMuEaka5pdl0pL0nHzYNH-_a8I" alt="Rieder Christkindlmarkt, 8.-11. Dezember: Weihnachtswunderwelt in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kunstvolles Handwerk neben geschmackvollen Dekorationsartikel warteten auf die Besucher. Zwei putzige Alpakas erfreuten die Kinderherzen und die Erwachsenen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}