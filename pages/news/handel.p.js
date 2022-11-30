import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Handel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Handel"/>
        <meta name="description" content="Trending News about Handel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Handel</h1>
            <Image width={800} height={500} src="https://i.ds.at/ttZNoA/rs:fill:1200:600/plain/2022/11/29/einkaufssamstagapaerwinscheriau.jpg" alt="Handel"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141338406/die-streikbereitschaft-ist-im-handel-hoch-was-ist-die-arbeit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Streiks im Handel sind vom Tisch – Gehälter steigen im Schnitt um 7 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1fWp_a8XJ1Pqh3sVZ1fxa--nIpkMuvvZDEks6HmgSDbJwgOhPpEzFjA0koupjrB1HCWsYrJlT" alt="Streiks im Handel sind vom Tisch – Gehälter steigen im Schnitt um 7 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weihnachtsfrieden in Österreichs Geschäften stand auf der Kippe. Am späten Dienstagabend einigten sich die Sozialpartner dann doch auf einen neuen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/kv-handel-gehaelter-steigen-um-bis-zu-867--527844'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KV-Handel: Gehälter steigen um bis zu 8,67 %</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="KV-Handel: Gehälter steigen um bis zu 8,67 %" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einmalzahlungen vom Tisch – dauerhaft wirksame Gehaltserhöhung für alle Angestellten gesichertDie Gehälter der 430.000 Angestellten des Handels steigen um 7&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/dem-fairen-handel-in-westafrika-auf-der-spur-527600'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dem fairen Handel in Westafrika auf der Spur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEOxHWXfeTmwv7A4-p2TmPG1PHpKglXeIQ1shhtb29qokOTTE0Ag0NcCSisH96KsuTIszzfEeb" alt="Dem fairen Handel in Westafrika auf der Spur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NÖM überzeugte sich vor Ort bei Bauern und Kooperativen vom Einsatz rund um das FAIRTRADE-SiegelHinter der Niederösterreichischen Molkerei stehen 2.500&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sn.at/wirtschaft/oesterreich/streik-im-handel-droht-am-freitag-und-samstag-130502773'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Streik im Handel droht am Freitag und Samstag</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRruLZSLZz2yf-agCGQe2i3M7H6hNd1BkZFO6eNi5k1QAT2u5Q_aX4gHrvHuTVspUjZ2KB-Dwfg" alt="Streik im Handel droht am Freitag und Samstag" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach knapp zehn Stunden haben sich Arbeitgeber und Gewerkschaft in der fünften Verhandlungsrunde Dienstagabend auf einen neuen Kollektivvertrag für die rund&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.de/story/2000141338406/die-streikbereitschaft-ist-im-handel-hoch-was-ist-die-arbeit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Streiks im Handel sind vom Tisch – Gehälter steigen im Schnitt um 7 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1fWp_a8XJ1Pqh3sVZ1fxa--nIpkMuvvZDEks6HmgSDbJwgOhPpEzFjA0koupjrB1HCWsYrJlT" alt="Streiks im Handel sind vom Tisch – Gehälter steigen im Schnitt um 7 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weihnachtsfrieden in Österreichs Geschäften stand auf der Kippe. Am späten Dienstagabend einigten sich die Sozialpartner dann doch auf einen neuen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/wirtschaft/6221133/Im-Schnitt-plus-73-Prozent_Streiks-abgewendet_Gehaelter-im-Handel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Streiks abgewendet: Gehälter im Handel steigen um bis zu 8,67 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRv9dOYsvbi2Sh52uwrZRKTZ2ysYN0t0Q4l43B_31E4qbwJvPCfVg4tPl0GI7_DF38jYh4vL0l" alt="Streiks abgewendet: Gehälter im Handel steigen um bis zu 8,67 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einigung oder Streik lautete die Losung vor der fünften KV-Runde im Handel: Arbeitgeber und Arbeitnehmer erzielten in der fünften Runde doch noch einen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6221814/einigung-im-handel-gehaelter-steigen-um-bis-zu-867-prozent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Einigung im Handel: Gehälter steigen um bis zu 8,67 Prozent</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Einigung im Handel: Gehälter steigen um bis zu 8,67 Prozent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der angedrohte Streik für Freitag und Samstag ist somit abgesagt. Durchschnittlich steigen die Gehälter der Handelsangestellten um 7,19 Prozent.</p></div>
            </div>
        </a><a href='https://orf.at/stories/3295820/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Einigung im Handel: Gehälter steigen im Schnitt um 7,3 Prozent</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXWADv87P1QZvf9PJb9q4-nU3nLmdMTlTjtzCxDeVTKeLXkJ289FIb-1BZ2xtsEvEO-YAauxtm" alt="Einigung im Handel: Gehälter steigen im Schnitt um 7,3 Prozent" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach knapp zehn Stunden haben sich Arbeitgeber und Gewerkschaft in der fünften Verhandlungsrunde Dienstagabend auf einen neuen Kollektivvertrag für die rund&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}