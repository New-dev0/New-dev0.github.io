import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Servus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Servus"/>
        <meta name="description" content="Trending News about Servus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Servus</h1>
            <Image width={800} height={500} src="https://i.ds.at/nUaHaA/rs:fill:1200:600/plain/2022/11/23/Handy-in-den-See.jpg" alt="Servus"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141126223/vertippt-vertan-versendet-ihre-peinlichsten-fehler-mit-mails'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mühsame Whatsapp-Gruppen verlassen: Sagen Sie beim Abschied ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7UJhH85h6asY43kO6zRtiobW1q-PyPpABT0w7vFNEWpXPe5BWrgQNvvFCqTnj4kGlbFytDZsH" alt="Mühsame Whatsapp-Gruppen verlassen: Sagen Sie beim Abschied ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irrelevante Nachrichten, Audioaufnahmen, Diskussionen zwischen zwei Personen: Vor manchen Chat-Gruppen will man einfach nur davonrennen.</p></div>
            </div>
        </a>
        </Template></>;
}