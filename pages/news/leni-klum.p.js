import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leni Klum</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leni Klum"/>
        <meta name="description" content="Trending News about Leni Klum" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leni Klum</h1>
            <Image width={800} height={500} src="https://heute-at-prod-images.imgix.net/2022/11/21/6cabce5c-8290-4688-acdf-82565735dbce.jpeg?rect=0%2C29%2C1920%2C960&w=1280&auto=format" alt="Leni Klum"/>
            <h3>Recent News</h3>
            <a href='https://www.heute.at/s/life-fashion-beauty-heiss-heidi-und-leni-klum-laeuten-die-weihnachtszeit-ein-100239852'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heiß! Heidi und Leni Klum läuten die Weihnachtszeit ein</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSLi0e11XwStI9EVlveXg96DPjTCDeN0MaziJ54uGN7IRzWfoCk8MkctCdoP2QyZ6PLy_EhIDsM" alt="Heiß! Heidi und Leni Klum läuten die Weihnachtszeit ein" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heidi Klum und Töchterchen Leni sehen jetzt rot: Für in Intimissimi sind die beiden Beautys in die Xmas-Collection geschlüpft und verteilen Küsschen.</p></div>
            </div>
        </a><a href='https://www.weekend.at/lifestyle/fashion/heidi-und-leni-klum-dessous-intimissimi-rot'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Freudiges Fest: Heidi und Leni warten auf Santa Claus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfWiCcgoA8Xt9KSL6czUel-Mv8Tyt5mo3Q7cETtPIIvxNHT-l-1U69XNB2PC_xdH0LWxbKGjw9" alt="Freudiges Fest: Heidi und Leni warten auf Santa Claus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In der schönsten Zeit des Jahres tragen wir Rot. Auch die Klum-Powerfrauen stehen auf die Signalfarbe. Jetzt präsentieren die Beautys die neuen Designs aus&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}