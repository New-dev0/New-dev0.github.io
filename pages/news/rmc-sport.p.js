import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rmc Sport</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rmc Sport"/>
        <meta name="description" content="Trending News about Rmc Sport" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rmc Sport</h1>
            <Image width={800} height={500} src="https://images.bfmtv.com/RVmKP40mE8rxFZ5-OAd4vstGidk=/0x212:2048x1364/images/Lucas-Hernandez-lors-de-France-Australie-1525927.jpg" alt="Rmc Sport"/>
            <h3>Recent News</h3>
            <a href='https://rmcsport.bfmtv.com/football/coupe-du-monde/en-direct-coupe-du-monde-suivez-france-australie-en-live_LS-202211220437.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EN DIRECT - France-Australie: Coupe du monde terminée pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjmf40PwR4jqr5elACivV0iE0J4ZlCoIa3KENszR-mfGwqJ3nI5b5r5rGql9X8zUpmtcTbqbLA" alt="EN DIRECT - France-Australie: Coupe du monde terminée pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour son entrée en lice dans cette Coupe du monde 2022, l&#39;équipe de France s&#39;impose 4-1 face à l&#39;Australie avec un doublé d&#39;Olivier Giroud.</p></div>
            </div>
        </a>
        </Template></>;
}