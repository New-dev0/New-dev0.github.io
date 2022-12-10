import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SK Rapid</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SK Rapid"/>
        <meta name="description" content="Trending News about SK Rapid" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SK Rapid</h1>
            <Image width={800} height={500} src="https://assets.skrapid.at/media/img/box/cc/2e/f4/scrs04-zimmermann-gepa.jpg?variant=072a175e" alt="SK Rapid"/>
            <h3>Recent News</h3>
            <a href='https://www.skrapid.at/de/startseite/news/news/aktuelles/2022/12/remis-mit-pflichtspielcharakter'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Remis mit Pflichtspielcharakter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDhbTbChlliCIweoc7-df2mJDWtpbvg2bhilk3twTRVZUeISmmlBMILERAydT0kS6uaVk3erWZ" alt="Remis mit Pflichtspielcharakter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im internationalen Testspiel empfingen unsere Grün-Weißen somit den deutschen Traditionsverein Schalke 04 in Hütteldorf. Trotz eisiger Kälte ließen sich 9.100&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}