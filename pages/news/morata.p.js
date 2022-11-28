import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Morata</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Morata"/>
        <meta name="description" content="Trending News about Morata" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Morata</h1>
            <Image width={800} height={500} src="https://cdn.unitycms.io/images/9VReI-UPqkVBqAFCHnE3oW.png?op=ocroped&val=1200,1200,1000,1000,0,0&sum=qS20Nixrbpo" alt="Morata"/>
            <h3>Recent News</h3>
            <a href='https://www.20min.ch/video/morata-ist-eiskalt-und-trifft-zum-1-0-fuer-spanien-gegen-deutschland-444452352053'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morata ist eiskalt und trifft zum 1:0 für Spanien gegen Deutschland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwDRdr2J68VXbnt0X_eWFWO1TjxRh6baQwaDQVvUbtsl8NGtC7SmMuLENbBiqCWvk493f51Ena" alt="Morata ist eiskalt und trifft zum 1:0 für Spanien gegen Deutschland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mittelstürmer Morata bezwingt im Spiel gegen Deutschland Manuel Neuer bei der WM 2022 in Katar.</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/fussball/wm/6220631/Spanien-Deutschland-0_0_Joshua-Kimmich-vergibt-die-grosse-Chance'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Álvaro Morata bringt die Spanier in Führung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQp4ckZ-Gu0pEkRa95RV11juRi0OEHFJg8oLAvge8Fzih963TIvsnGfCFu9kDK0djy-ymhhwJRD" alt="Álvaro Morata bringt die Spanier in Führung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gegen Spanien sind Manuel Neuer &amp; Co. nach der Auftaktniederlage gefordert. Alvaro Morata brachte die Spanier im Duell in Führung (63.).</p></div>
            </div>
        </a>
        </Template></>;
}