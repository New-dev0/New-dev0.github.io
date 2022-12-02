import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gvardiol</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gvardiol"/>
        <meta name="description" content="Trending News about Gvardiol" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gvardiol</h1>
            <Image width={800} height={500} src="https://bmg-images.forward-publishing.io/2022/12/01/ff74906d-3995-4bbb-b747-76b0db46ac14.jpeg?rect=0%2C209%2C4000%2C2250&w=1024" alt="Gvardiol"/>
            <h3>Recent News</h3>
            <a href='https://rblive.de/news/wm-star-josko-gvardiol-halb-europa-jagt-den-rb-verteidiger-3496974'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM-Star Josko Gvardiol: Halb Europa jagt den RB-Verteidiger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7OYwUyVcv_EgmhgMCg2QZ8W6Obw8gGrIv6uZFdwe6733SK7Q11X2EVHGk_QQm6M9eQ_zzCOIw" alt="WM-Star Josko Gvardiol: Halb Europa jagt den RB-Verteidiger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für Josko Gvardiol geht es am Donnerstag (16 Uhr) mit Kroation gegen Belgien um den Einzug ins WM-Achtelfinale.</p></div>
            </div>
        </a><a href='https://www.kicker.de/dalic-adelt-gvardiol-der-beste-der-welt-927964/artikel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 - Dalic adelt Gvardiol: &quot;Der Beste der Welt&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSLDGywOW62GPCiHKiUuQJXTmvnqN1kic6PYMjdxKjoWqu4Vn0nmEw81dkuSgcKmUJekaBHj1hE" alt="WM 2022 - Dalic adelt Gvardiol: &quot;Der Beste der Welt&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das 0:0 gegen Belgien reicht den Kroaten zum Einzug in die K.-o.-Phase. In den Reihen des Vizeweltmeisters spielt sich in Katar ein aus der Bundesliga&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}