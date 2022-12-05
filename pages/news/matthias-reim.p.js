import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matthias Reim</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matthias Reim"/>
        <meta name="description" content="Trending News about Matthias Reim" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matthias Reim</h1>
            <Image width={800} height={500} src="https://static.schlager.de/uploads/2022/07/www.schlager.de-matthias-reim-christin-stark-neue-details-ueber-die-geburt-von-tochter-zoe-h-01689659-e1657990497607.jpg" alt="Matthias Reim"/>
            <h3>Recent News</h3>
            <a href='https://www.schlager.de/news/2022/12/02/matthias-reim-mieser-verrat-hat-er-seine-junge-frau-schamlos-ausgenutzt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthias Reim: Mieser Verrat? Hat er seine junge Frau schamlos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0rIuk9aAuDBrBRCxsBgeT6ESNkJ7l01jHOx2fs2HyRdz97FcFWsAO-gDY2dCJ8VBzxFFkMqka" alt="Matthias Reim: Mieser Verrat? Hat er seine junge Frau schamlos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Baby Zoe ist gerade mal neun Monate alt und auch Christin Stark möchte vielleicht ihre Tour nachholen. Doch Matthias Reim denkt nur an sich!</p></div>
            </div>
        </a><a href='https://www.derwesten.de/panorama/promi-tv/matthias-reim-ard-florian-silbereisen-adventsfest-id300335567.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthias Reim spricht über schweres Jahr – „Ich muss mir was ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoUMziEfdeIyFjkD8Xf27JHTOmbPUWYglmRfAlnN-_5i-di6J1gwDBWGoA4FEfa9i07UKS4aUB" alt="Matthias Reim spricht über schweres Jahr – „Ich muss mir was ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schlagersänger wollte eigentlich viel auf der Bühne stehen, gemeinsam mit seinen Fans feiern, Konzerte spielen und die Musik genießen. Doch seine Gesundheit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mdr.de/meine-schlagerwelt/matthias-reim-adventsfest-auftritt-comeback-nach-burnout-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthias Reims Comeback beim Adventsfest: &quot;Ich bin wieder da!&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrx7t5lTm0WgG6VpsOZPFWVYSxTlKN_3oiuf8aaSY5-G3X9TGIoJ29h1yQFhrhRJJw07bW6SQd" alt="Matthias Reims Comeback beim Adventsfest: &quot;Ich bin wieder da!&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit einem ganz besonderen Song kehrte Matthias Reim zurück auf die TV-Bühne. Bei Florian Silbereisens Adventsfest sang er seinen Song &quot;Kindertraum&quot;.</p></div>
            </div>
        </a><a href='https://www.salsa-und-tango.de/matthias-reim-2023-konzerte-neue-termine-und-orte/167060/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matthias Reim 2023 Konzerte: Neue Termine und Orte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQt4cmr1Ul2IaybvZCvJpJvbFdZBaZsTXbO7G-JckQzPFXhxlvTqxyNh1keW6vL_jf7lps9WI0X" alt="Matthias Reim 2023 Konzerte: Neue Termine und Orte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matthias Reim gibt wieder viele Konzerte 2023. Einige der Matthias-Reim-Konzerte 2023 sind neue Termine, einige Nachholkonzerte vom letzten Jahr.</p></div>
            </div>
        </a><a href='https://www.moz.de/lokales/eisenhuettenstadt/konzerte-sommer-2023-david-garrett_-matthias-reim-und-gestoert-aber-geil-sind-live-in-eisenhuettenstadt-67937325.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konzerte Sommer 2023: David Garrett, Matthias Reim und Gestört ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-Bc6XbVAPpR0ZBSEQwvT-CDsLiQgOM27q6WAf6t1VFUjXDqst9E5OcJ_QrpehYbo1HzJcPdZZ" alt="Konzerte Sommer 2023: David Garrett, Matthias Reim und Gestört ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diese Namen sind in der Musik-Branche mehr als nur bekannt: David Garrett, Matthias Reim und Gestört aber Geil. Sie alle kommen 2023 nach Eisenhüttenstadt.</p></div>
            </div>
        </a>
        </Template></>;
}