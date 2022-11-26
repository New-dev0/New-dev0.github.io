import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rußland Ukraine-Krieg</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rußland Ukraine-Krieg"/>
        <meta name="description" content="Trending News about Rußland Ukraine-Krieg" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rußland Ukraine-Krieg</h1>
            <Image width={800} height={500} src="https://www.sn.at/haelfte-der-haushalte-in-kiew-noch-ohne-strom-41-102992078.jpg/size-1600x840/130.353.118" alt="Rußland Ukraine-Krieg"/>
            <h3>Recent News</h3>
            <a href='https://www.sn.at/politik/weltpolitik/russland-ukraine-krieg-haelfte-der-haushalte-in-kiew-noch-ohne-strom-130314523'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russland-Ukraine-Krieg: Hälfte der Haushalte in Kiew noch ohne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzBnYlFMOL_igN9Fhm9AwcG_sgPb0TS760349GbH05Nd93NubHwtfF4-W7N--in9MKJWiwYfxr" alt="Russland-Ukraine-Krieg: Hälfte der Haushalte in Kiew noch ohne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zwei Tage nach den schweren russischen Raketenangriffen auf die ukrainische Strom- und Wasserversorgung hat die Hälfte der Verbraucher in der Hauptstadt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/politik/russlanddeutsche-protest-ukraine-krieg-russland-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warum protestiert &quot;ihr&quot; nicht gegen Putin?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwN19nUuX8uA0syntmR3tIy1_neP5r11bYwLSBklmoFxeeVhNpvJmrHhSij7EJ5I1tI94MawvX" alt="Warum protestiert &quot;ihr&quot; nicht gegen Putin?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erst &quot;Deutsche&quot;, jetzt &quot;Russen&quot;: Der Rechtfertigungsdruck für Russlanddeutsche angesichts des Ukraine-Kriegs ist groß. Über ein Missverständnis.</p></div>
            </div>
        </a><a href='https://www.tagesschau.de/newsticker/liveblog-ukraine-freitag-203.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Krieg gegen die Ukraine: ++ Getreideexporte stocken erneut ++</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGnbNFzLwGsfEBdhPQaaI0gGqBlXff031gH-qaf4JBU0EvbAvyZxXyejko_Ufp4s8w91t7eEL1" alt="Krieg gegen die Ukraine: ++ Getreideexporte stocken erneut ++" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trotz der Verlängerung des Abkommens stocken die Getreideexporte über das Schwarze Meer. Nach weiteren russischen Raketenangriffen werden im ukrainischen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fr.de/politik/militaer-truppen-nato-news-ukraine-news-krieg-russland-selenskyj-putin-zr-91930072.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>++ Ukraine News: Russland bombardiert Entbindungsstation ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMxFbpjwKyDeUR65bQfICmdfrVc6_xGqRfeRZFl03Cl-KR7Jbq5laD1Z-uzNQvdr0uE9B3XC_y" alt="++ Ukraine News: Russland bombardiert Entbindungsstation ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russland attackiert die Ukraine massiv mit Luftangriffen. Bei den Attacken wird eine Entbindungsstation in Saporischschja getroffen. Der News-Ticker.</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/politik/verlauf-ukraine-krieg-russland-cherson-donbass-krim-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine auf Rückeroberungs-Kurs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbjjCHSqMtLNJkRIAftN1TLCs3Vbp4MkFeccp3oadbs4n6jQpp6d5lgb6Tt-UzMSTh1wQHPp4w" alt="Ukraine auf Rückeroberungs-Kurs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Ukraine will Land und Menschen befreien, doch zwischen den besetzten Gebieten bestehen Unterschiede. Russlands Interesse am Donbass scheint derweil&nbsp;...</p></div>
            </div>
        </a><a href='https://web.de/magazine/politik/russland-krieg-ukraine/ukraine-krieg-live-ticker-selenskyj-kritisiert-klitschkos-arbeit-37506852'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine-Krieg im Live-Ticker: Selenskyj kritisiert Klitschkos Arbeit in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQhA49o9OZcb8_z_bx-zdr1Gw34wpBwB-VWNISXWLu4jjkNuEWLSRDQQHYwszPnDbZgeecVKHwS" alt="Ukraine-Krieg im Live-Ticker: Selenskyj kritisiert Klitschkos Arbeit in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Papst Franziskus hat sich in einem Brief an das ukrainische Volk gewandt. Die News zum Krieg in der Ukraine im Live-Ticker.</p></div>
            </div>
        </a><a href='https://www.welt.de/politik/ausland/article242323759/Ukraine-News-Selenskyj-kritisiert-Arbeit-von-Buergermeister-Klitschko.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine-News ++ Selenskyj kritisiert Arbeit von Bürgermeister ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3QCRpP4zs5h5yud4DW3STQoyrdjlE5WfltNeCETuIaDXpmCfbykLuwnd6SiH4rfriYesNSJed" alt="Ukraine-News ++ Selenskyj kritisiert Arbeit von Bürgermeister ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Kriegsschäden in der Ukraine bekommen eine innenpolitische Dimension: Präsident Wolodymyr Selenskyj hat der Stadtverwaltung in Kiew vorgeworfen,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}