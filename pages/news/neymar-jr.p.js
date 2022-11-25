import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Neymar Jr</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Neymar Jr"/>
        <meta name="description" content="Trending News about Neymar Jr" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Neymar Jr</h1>
            <Image width={800} height={500} src="https://www.xboxdynasty.de/wp-content/uploads/2022/11/image_001-15.jpg" alt="Neymar Jr"/>
            <h3>Recent News</h3>
            <a href='https://www.xboxdynasty.de/news/pubg-battlegrounds/neue-neymar-jr-kollaborations-gegenstaende-enthuellt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PUBG: Battlegrounds: Neue Neymar Jr. Kollaborations ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStqjEBAesthQ_dCTvSTvsshKMyGlH1iEH6QrgYMBnULC10aqE8T3c4l2HBcgKT0r8f_7DJz6CD" alt="PUBG: Battlegrounds: Neue Neymar Jr. Kollaborations ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als Teil seiner Partnerschaft als offizieller Botschafter des Titels hat Neymar Jr. an der Kreation der kosmetischen Gegenstände im Spiel mitgewirkt, darunter&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}