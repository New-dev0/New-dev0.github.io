import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christoph Fälbl</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christoph Fälbl"/>
        <meta name="description" content="Trending News about Christoph Fälbl" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christoph Fälbl</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2857229/va47fea/og_image.jpg" alt="Christoph Fälbl"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2857234'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fridolin ist da! - Und noch ein Baby für Christoph Fälbl</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVQL3j7Y7_EPWg1VltkuN0ZLW0PLOn8OBqW61LONf938LlEGEWDlSCu1Yy9LAudt8uQPMepR1w" alt="Fridolin ist da! - Und noch ein Baby für Christoph Fälbl" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schluss mit lustig? Nicht für Publikumsliebling Christoph Fälbl. Der 56-jährige Schauspieler und Kabarettist wurde heimlich still und leise zum ...</p></div>
            </div>
        </a><a href='https://kurier.at/stars/austropromis/kabarettist-christoph-faelbl-wieder-papa-baby-nummer-5-ist-da/402218340'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kabarettist Christoph Fälbl wieder Papa: Baby Nummer 5 ist da!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-8lOni5g533hAeQ15MRNopQHH0X_0PCj-XmI-T4OCBy_6-vIffNm-1Q-9AGZrwPcMQ0G5oQt6" alt="Kabarettist Christoph Fälbl wieder Papa: Baby Nummer 5 ist da!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Sommer feierten Kabarettist Christoph Fälbl und seine Vanessa romantisch Hochzeit, jetzt schweben die beiden im erneuten Elternglück. &middot; Nach Sohn Casper (2020)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}