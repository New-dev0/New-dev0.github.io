import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Malaga</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Malaga"/>
        <meta name="description" content="Trending News about Malaga" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Malaga</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2858809/v9cc1df/og_image.jpg" alt="Malaga"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2858807'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rund 150 ÖFB-Fans - Trostlose Stimmung in Malaga - eine Warnung!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYFcMGNpPANDyj9zcefyaZv6ifRyPH_hTBE5wwbraaRqYBQG-hUsy894NZyaa7Fh6B2rxY4xgd" alt="Rund 150 ÖFB-Fans - Trostlose Stimmung in Malaga - eine Warnung!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trostlos war gestern die Atmosphäre in Malaga. Logisch, keinen Spanier kratzte der Test von Marcel Sabitzer, der die Kapitänsschleife trug, und Co. ...</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/fussball/international/spanien/segunda-division/niedergang-des-fc-malaga--nicht-mal-george-clooney-konnte-helfen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Niedergang des FC Malaga: Nicht mal George Clooney konnte helfen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMKItv35OqC16rOrX0bHcgDPSwX8G2qX2DSixPotz_OTPVfjCnm_X6Di2o97NnorUWrv-EBbfJ" alt="Niedergang des FC Malaga: Nicht mal George Clooney konnte helfen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das ÖFB-Team gastiert in Malaga, wo vor zehn Jahren noch Champions League gespielt wurde. Heute ist der Verein Letzter - in der 2. Liga.</p></div>
            </div>
        </a>
        </Template></>;
}