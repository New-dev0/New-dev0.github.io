import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bares für Rares</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bares für Rares"/>
        <meta name="description" content="Trending News about Bares für Rares" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bares für Rares</h1>
            <Image width={800} height={500} src="https://content5.promiflash.de/article-images/video_1080/daniel-meyer-posiert.jpg" alt="Bares für Rares"/>
            <h3>Recent News</h3>
            <a href='https://www.promiflash.de/news/2022/11/16/das-war-bares-fuer-rares-daniels-groesste-verkaufspleite.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das war &quot;Bares für Rares&quot;-Daniels größte Verkaufspleite!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR72UB553smhfmUru5TaY0ZmwmjXSHe6AobqpgIjJ74jKRR1aySd6HScMR0H6PGTgsnoNdtagXW" alt="Das war &quot;Bares für Rares&quot;-Daniels größte Verkaufspleite!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch einem Superhändler passiert mal ein Fehler! Bei Bares für Rares feilscht Daniel Meyer (49) zusammen mit seinen Kollegen um die besten Preise für die&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.de/promi-und-show/bares-fuer-rares-haendlerin-laesst-sich-zu-mega-summe-hinreissen-371307'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bares für Rares: Händlerin lässt sich zu Mega-Summe hinreißen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-ELv_a-0KxBLz99m4uhmw6EHG3MvEltF6GgITuolzKS_Grt7-b61kXtKer_NlC-eyT2p_7pd-" alt="Bares für Rares: Händlerin lässt sich zu Mega-Summe hinreißen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Völlig schockverliebt in ein besonders schönes Paar von Lampen ließ sich „Möbelaktivistin“ Esther Ollick bei „Bares für Rares“ zu einer wahren Mega-Summe&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kino.de/film/bares-fuer-rares-die-troedel-show-mit-horst-lichter/news/desaster-bei-bares-fuer-rares-sturer-verkaeufer-lehnt-alle-gebote-ab-und-geht/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Desaster bei „Bares für Rares”: Sturer Verkäufer lehnt alle Gebote ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgt6Qs0HOztovqcDcB6pi67ZpD2jykR0XrSvutv5r93a_ijGhrTW8NTQrfKv5AvqV1d7_xLF8Q" alt="Desaster bei „Bares für Rares”: Sturer Verkäufer lehnt alle Gebote ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die 1872 von Gaylord Watson (nicht zu verwechseln mit Gaylord Focker) entworfene Karte stieß im Händlerraum auf gemischte Reaktionen. Susanne Steiger konnte gar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}