import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michael J. Fox</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michael J. Fox"/>
        <meta name="description" content="Trending News about Michael J. Fox" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michael J. Fox</h1>
            <Image width={800} height={500} src="https://orf.at/mojo/1_4_1/storyserver//news/common/images/og-fallback-news.png" alt="Michael J. Fox"/>
            <h3>Recent News</h3>
            <a href='https://orf.at/stories/3294538/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Parkinson: Schauspieler Michael J. Fox erhält Ehrenoscar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTpZtR1Ne14Cxdy2nLt-iELF3KTQJInNpVPKyTO4uuNKtVScaD_3FF4uuKrfFXMlYlt7Go_Sbed" alt="Parkinson: Schauspieler Michael J. Fox erhält Ehrenoscar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schauspieler Michael J. Fox ist mit dem Ehrenoscar für humanitäre Verdienste ausgezeichnet worden. Damit würdigte die Oscar-Akademie gestern Abend bei&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/lifestyle/leute/michael-j--fox--woody-harrelson-uebergibt-ihm-einen-ehrenoscar-32929860.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael J. Fox: Woody Harrelson übergibt ihm einen Ehrenoscar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaaaL1fCwRM_O8L-FBPQQlVRa8ONHg1aL7O0lfdAUSwlPF93OIlzMIxziKUj8L0TECckHAEbSW" alt="Michael J. Fox: Woody Harrelson übergibt ihm einen Ehrenoscar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michael J. Fox wurde mit dem Jean Hersholt Humanitarian Award geehrt. Der Ehrenoscar wurde ihm von Woody Harrelson überreicht.</p></div>
            </div>
        </a><a href='https://www.rnd.de/promis/michael-j-fox-erhaelt-ehren-oscar-fuer-kampf-gegen-parkinson-ZUTGWGS4WTYYOQND4FKQI7ILVQ.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael J. Fox erhält Ehren-Oscar für Kampf gegen Parkinson</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSio63k_xgn4PFKQM6vcF6lEUFrwuAZORqXuFAJB6OP4x82c_aS9d4Hy40nGLxlvwlriq40hoVK" alt="Michael J. Fox erhält Ehren-Oscar für Kampf gegen Parkinson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die «Governors Awards» sind ein kleiner Vorgeschmack auf die Oscars. Zu den Preisträgern gehört in diesem Jahr auch «Zurück in die Zukunft»-Star Michael J.</p></div>
            </div>
        </a><a href='https://www.tag24.de/unterhaltung/promis/kampf-gegen-parkinson-michael-j-fox-mit-ehren-oscar-ausgezeichnet-2669500'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kampf gegen Parkinson: Michael J. Fox mit Ehren-Oscar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTA27cAyU6LKF1XzPn7o5Qh9FI1yjgfeo4bRMJXstfrpHLWmh-neuAHhdfsJkWPD3GKux2ARfJe" alt="Kampf gegen Parkinson: Michael J. Fox mit Ehren-Oscar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rund vier Monate vor der 95. Oscar-Gala sind im kalifornischen Los Angeles am Samstagabend die Ehren-Oscars verliehen worden. | TAG24.</p></div>
            </div>
        </a><a href='https://www.br.de/nachrichten/meldung/ehrenoscar-fuer-michael-j-fox-und-seinen-kampf-gegen-parkinson,30051f862'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ehrenoscar für Michael J. Fox und seinen Kampf gegen Parkinson</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ehrenoscar für Michael J. Fox und seinen Kampf gegen Parkinson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles: Rund vier Monate vor der Oscar-Gala sind die Ehrenoscars verliehen worden. Ausgezeichnet wurde unter anderen Schauspieler Michael J. Fox für&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}