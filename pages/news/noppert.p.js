import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Noppert</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Noppert"/>
        <meta name="description" content="Trending News about Noppert" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Noppert</h1>
            <Image width={800} height={500} src="" alt="Noppert"/>
            <h3>Recent News</h3>
            <a href='https://football-italia.net/noppert-netherlands-goalkeeper-had-to-pay-the-mafia-to-get-stolen-car-back-when-in-italy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Noppert: Netherlands goalkeeper had to &#39;pay the Mafia&#39; to get stolen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQG5rd4istDerQO6V1UwEg2WxC500VWH7KsAiEQHoAbD0_lDrd2zgt2lIACoVVbfiKybYROjts6" alt="Noppert: Netherlands goalkeeper had to &#39;pay the Mafia&#39; to get stolen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Foggia goalkeeper Andries Noppert, who started for the Netherlands against Senegal today, had revealed in February that he had to &#39;pay the Mafia&#39; to.</p></div>
            </div>
        </a>
        </Template></>;
}