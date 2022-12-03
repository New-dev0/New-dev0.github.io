import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kelly Family</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kelly Family"/>
        <meta name="description" content="Trending News about Kelly Family" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kelly Family</h1>
            <Image width={800} height={500} src="https://static.schlager.de/uploads/2019/12/www.schlager.de-silbereisen-adventsfest-suhl-30-11-2019-frank-weichert-017.jpg" alt="Kelly Family"/>
            <h3>Recent News</h3>
            <a href='https://www.schlager.de/news/2022/12/02/kelly-family-todes-drama-bei-konzert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kelly Family: Todes-Drama bei Konzert - Schlager.de</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1CSNqw71QRQ-cJv7Av_5LUnUzsONy2f-EuMEROtscgaHMLMvxUMQp6FzRu9aFhfuy_E8FH-AO" alt="Kelly Family: Todes-Drama bei Konzert - Schlager.de" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die &quot;Christmas Show&quot; der Kelly Family in Halle/Westfalen wurde abgebrochen! Der Grund: Ein tragischer Todesfall im Publikum!</p></div>
            </div>
        </a><a href='https://www.bild.de/unterhaltung/leute/leute/kelly-family-mann-stirbt-bei-weihnachts-konzert-82137990.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kelly Family: Mann stirbt bei Weihnachts-Konzert | Unterhaltung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyomeF-6O7yfVohkm_ElAFzSBgqcjaDlJimqKyfzB-5JKIa2WdIqDXMD_GwoybLodo2xZaoJeU" alt="Kelly Family: Mann stirbt bei Weihnachts-Konzert | Unterhaltung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es ist ein Schock für alle Anwesenden: Am Freitag starb ein Fan der Kelly Family bei einem Konzert der Band in Halle, Westfalen.</p></div>
            </div>
        </a><a href='https://www.n-tv.de/panorama/Besucher-stirbt-bei-Konzert-der-Kelly-Family-article23760077.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Veranstaltung abgebrochen: Besucher stirbt bei Konzert der Kelly ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSFwKMfiijad9w-CaoN-bffZbnEV88urhDVmLf2HDe5MchHLVOY1NXw2HFjY7c0dOJZsSAvh-uB" alt="Veranstaltung abgebrochen: Besucher stirbt bei Konzert der Kelly ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tragischer Zwischenfall im westfälischen Halle: Inmitten des Konzerts der Kelly Family erleidet ein Besucher einen medizinischen Notfall.</p></div>
            </div>
        </a><a href='https://www.goldenekamera.de/news/article237059959/The-Kelly-Family-Konzert-abgebrochen-Todesfall-Fans.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Kelly Family: Konzert wegen Todesfall im Publikum abgebrochen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSLpVmpZKgRU-YjW05K__I_MZqcDtVDVkA-zQKJjDJ8-RM9AJIUXtnQByAz7UB9vn7YswMthaJ" alt="The Kelly Family: Konzert wegen Todesfall im Publikum abgebrochen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schocknachricht aus Halle/Westfalen: Kurz nach dem Konzertbeginn der Kelly Family kam ein Besucher der Veranstaltung ums Leben.</p></div>
            </div>
        </a><a href='https://www.welt.de/vermischtes/article242466663/Halle-Westfalen-Fan-stirbt-bei-Konzert-der-Kelly-Family.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Halle/Westfalen: Fan stirbt bei Konzert der Kelly Family</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSO-ITRPJlUf-aHethANq9Uz1L4tQqA-KIyr9m_DN7QR0J3vrjKkoQD4PeXYDvBpAPl_vSFKDLh" alt="Halle/Westfalen: Fan stirbt bei Konzert der Kelly Family" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trotz Bemühungen eines ärztlichen Notfallteams in der Halle ist ein Besucher eines Konzerts der Kelly Family gestorben. Die Veranstaltung in Halle/Westfalen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.westfalen-blatt.de/owl/kreis-guetersloh/halle/kelly-family-bricht-konzert-ab-2669840'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kelly-Family bricht Konzert ab</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTR-vQ0u3PBU3KaLgOGxm-qEaVUAqzkmTZ4dgQbvo6XMcNL1uIruVc54t5uF-a-urXEDAUHR4Bd" alt="Kelly-Family bricht Konzert ab" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Kelly-Family hat am Freitagabend ihr Konzert in der OWL-Arena in Halle/Westfalen abgebrochen. Grund ist ein medizinischer Notfall.</p></div>
            </div>
        </a><a href='https://www.radiobielefeld.de/nachrichten/lokalnachrichten/detailansicht/todesfall-im-publikum-kelly-family-bricht-konzert-in-halle-ab.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Todesfall im Publikum: Kelly Family bricht Konzert in Halle ab</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQlFbTD67KgoRY9lujfWU9DOd87ROLpi4dRq4EbeH1sRdxkEn8jQEBlXRdFr3tcMkKid3LGeisx" alt="Todesfall im Publikum: Kelly Family bricht Konzert in Halle ab" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In dessen Folge ist ein Fan der Kellys gestorben. Rettungskräfte hatten zuvor versucht das Leben des Mannes zu retten. „Wir bitten Euch um Verständnis, dass wir&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}