import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Glock</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Glock"/>
        <meta name="description" content="Trending News about Glock" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Glock</h1>
            <Image width={800} height={500} src="https://orf.at/mojo/1_4_1/storyserver//news/common/images/og-fallback-news.png" alt="Glock"/>
            <h3>Recent News</h3>
            <a href='https://orf.at/stories/3293874/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pistolenproduzent Glock mit Rekordeinnahmen im Jahr 2021</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsGlgAfWJy2c47jTospQQdxcRHAZxC5iLW1yhbH1iKbHcXnC20oQFJP9qMijLrMMHWshVNaWF2" alt="Pistolenproduzent Glock mit Rekordeinnahmen im Jahr 2021" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der österreichische Pistolenhersteller Glock hat 2021 – wie bereits im Jahr zuvor – wieder einen Rekordumsatz erzielt. Der Umsatzanstieg lag bei 13,9&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/wirtschaft/waffenfirma-glock-erzielt-rekord-umsatz-und-gewinn/402219255'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Waffenfirma Glock erzielt Rekord-Umsatz und -Gewinn</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT21HviuJNPgN6oJHfkwPLbJmvg2PQlH25ebUb4Ti8WbKRHRS0mbnSRc51LAEnzmglRa7yMVakf" alt="Waffenfirma Glock erzielt Rekord-Umsatz und -Gewinn" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor allem die starke Nachfrage in den USA brachten das Traditionsunternehmen mit Sitz in Ferlach 2021 an den Rand seiner Kapazitätsgrenzen,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}