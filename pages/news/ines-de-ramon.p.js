import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ines De Ramon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ines De Ramon"/>
        <meta name="description" content="Trending News about Ines De Ramon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ines De Ramon</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7442994/46-191505826.jpg" alt="Ines De Ramon"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/stars/brad-pitt-und-ines-de-ramon-insider-packt-ueber-ihre-romanze-aus/402242322'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad Pitt und Ines De Ramon: Insider packt über ihre Romanze aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkrpvWsr8cHzTktOOcQhALQ1D4-Yl4RX75bXIo5glxQ4KvY3BqgwlUCIcpgaBZ2cyDT9Tu89Zs" alt="Brad Pitt und Ines De Ramon: Insider packt über ihre Romanze aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Was genau läuft da zwischen Brad Pitt und der Ex-Frau von Paul Wesley? Mitte November wurden der Hollywoodstar und Ines De Ramon zusammen backstage bei&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2870390'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Es wird ernst! - Brad Pitt träumt schon von Kindern mit neuer Liebe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVH05JOG0_ktKOv5ZnTvZ8mi2oW-DbaxWHhKGMIYNvPjFYq45QBwdBZbBUf1KXXChehCKLoUPY" alt="Es wird ernst! - Brad Pitt träumt schon von Kindern mit neuer Liebe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turtel-Fotos von Brad Pitt haben vor Kurzem die Gerüchte um eine neue Liebe des Hollywoodstars hochkochen lassen. Jetzt plaudert ein Insider aus: Ja, ...</p></div>
            </div>
        </a>
        </Template></>;
}