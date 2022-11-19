import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vicky Leandros</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vicky Leandros"/>
        <meta name="description" content="Trending News about Vicky Leandros" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vicky Leandros</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2860027/v5181e7/og_image.jpg" alt="Vicky Leandros"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2860021'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Abschied von der Bühne - Vicky Leandros: „Denke, es wird Zeit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTxbR6dU-C7MOnMmmh2IyHsNQwwFcdBSrN7fTHMtl9dqaBRhJRDxHz26GTZt1w7Au2MsvLPrxqb" alt="Abschied von der Bühne - Vicky Leandros: „Denke, es wird Zeit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>„Ich denke, es wird Zeit aufzuhören“, sagte Leandros der „Bild“-Zeitung. „Im Sommer bin ich 70 Jahre alt geworden. Da fängt man an, über die Endlichkeit des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndr.de/kultur/Vicky-Leandros-kuendigt-Karriereende-und-Abschiedstournee-an,kulturkurzmeldung2606.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vicky Leandros kündigt Karriereende und Abschiedstournee an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3_nFtuxXR4RzA3cpeNvIHlm7SBqBPV503gqEgWA1fvgKi4j4uCS1IGIh7fYFeYgcds7i8BN5J" alt="Vicky Leandros kündigt Karriereende und Abschiedstournee an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seit mehr als 50 Jahren ist Vicky Leandros im Showbusiness. Hits wie &quot;Ich liebe das Leben&quot; und &quot;Theo, wir fahr&#39;n nach Lodz&quot; machten sie berühmt.</p></div>
            </div>
        </a><a href='https://www.merkur.de/boulevard/mit-70-vicky-leandros-beendet-schlagerkarriere-und-tritt-neuen-job-an-91923987.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mit 70: Vicky Leandros beendet Schlagerkarriere und tritt neuen Job ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7JKJs6EgFHUQfpzJz_mDGHQa9kOCyqBBwrKrks9SCySNT6N8drRepAWh8ydbUynBxhJ8Vj6DQ" alt="Mit 70: Vicky Leandros beendet Schlagerkarriere und tritt neuen Job ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die gebürtige Griechin Vicky Leandros beendet ihre Schlagerkarriere mit 70 Jahren. Doch die Sängerin mit deutschem Pass plant bereits ihr neues Leben&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tz.de/stars/alle-daten-der-abschiedstour-von-vicky-leandros-2023-schlager-91923938.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alle Daten der Abschiedstour von Vicky Leandros 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRLnGUIrUAAvhrW88oqADhjGk0xhHzzW-ik0zLqWls1IHt1jEuM7nxP8s73v0882-jHWNKjQH_" alt="Alle Daten der Abschiedstour von Vicky Leandros 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vicky Leandros schaut auf eine strahlende Karriere zurück. Nach 58 Jahren verabschiedet sie sich von der Bühne. Jetzt wurden die Daten für ihre große&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/leute/Vicky-Leandros-kuendigt-Karriereende-an-article23726971.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Irgendwann muss es vorbei sein&quot;: Vicky Leandros kündigt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZ-uEV59qNyr6XUhvl4dMHe847ZMvR59fop62lHWKbGxGmJt-fOYQUmCvx663zp9FrTmEVIcyg" alt="&quot;Irgendwann muss es vorbei sein&quot;: Vicky Leandros kündigt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beben in der Schlagerwelt: Vicky Leandros hat in einem Interview mit der &quot;Bild&quot;-Zeitung verraten, dass ihre Tour im Herbst 2023 die letzte sein soll und sie&nbsp;...</p></div>
            </div>
        </a><a href='https://rp-online.de/kultur/musik/vicky-leandros-kuendigt-abschiedstournee-fuer-2023-an_aid-80136057'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vicky Leandros kündigt Abschiedstournee für 2023 an​</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlZg84kajszp0h_xYh8S0t0dcUjL3PT28HJ9wCGQFdCGaYuDaO3n7tH2N8xM95JDKJ-GazKLK8" alt="Vicky Leandros kündigt Abschiedstournee für 2023 an​" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seit mehr als 50 Jahren ist Vicky Leandros im Showbusiness. Hits wie „Theo, wir fahr&#39;n nach Lodz“ kann fast jeder mitsingen. Nun will sich Leandros von der&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}