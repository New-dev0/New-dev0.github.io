import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Angela Baumgartner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Angela Baumgartner"/>
        <meta name="description" content="Trending News about Angela Baumgartner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Angela Baumgartner</h1>
            <Image width={800} height={500} src="https://www.noen.at/image/1920x1080-c-jpg/4268149/440_0008_8530263_mar47stadt_baumgartner_photo_simonis.jpg" alt="Angela Baumgartner"/>
            <h3>Recent News</h3>
            <a href='https://www.noen.at/gaenserndorf/bezirk-gaenserndorf-internet-wirbel-baumgartner-brueskiert-buerger-bezirk-gaenserndorf-angela-baumgartner-teuerung-print-343948593'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Internet-Wirbel: Baumgartner brüskiert Bürger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtZ7DILSZXwBKHZvIV-FUCfaAwE5WBLnLZlwQJZvgYcrqmLlRUjzIIEdZyS_RLpiT8TXRELNMD" alt="Internet-Wirbel: Baumgartner brüskiert Bürger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ÖVP-Politikerin erklärte in Rede, dass sich die Menschen die Teuerung nur einbilden. Die ÖVP-Nationalratsabgeordnete aus dem Bezirk, Angela Baumgartner, sorgt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2860787'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter: „Säuft die?“ - ÖVP-Abgeordnete: Bilden uns Teuerung nur ein</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5E1thi-O2__smIE2r-G45QuMsT0xskT6AzmiGPkvNulolF8z9_G82ey7bvKkyeHRccEvI_2Fq" alt="Twitter: „Säuft die?“ - ÖVP-Abgeordnete: Bilden uns Teuerung nur ein" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Teuerung befindet sich auf einem 70-Jahre-Hoch. Nicht nur die Energiekosten werden höher, auch die Preise für alltägliche Dinge wie Lebensmittel ...</p></div>
            </div>
        </a><a href='https://www.ots.at/presseaussendung/OTS_20221119_OTS0020/baumgartner-waehrend-die-bundesregierung-die-teuerung-bekaempft-zeichnet-sich-die-opposition-durch-destruktivitaet-aus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baumgartner: „Während die Bundesregierung die Teuerung ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSygiCPagDYWd2YnzDslKMjXbXEc4J4DTD5QtH5If9Y8cZVgB9O1KukEMzJdc_ySZ0vf4UkUObn" alt="Baumgartner: „Während die Bundesregierung die Teuerung ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das habe ich auch in meiner Nationalratsrede zum Ausdruck gebracht, die von den Oppositionsparteien nun böswillig verzerrt wird“, betont die Abgeordnete zum&nbsp;...</p></div>
            </div>
        </a><a href='https://zackzack.at/2022/11/18/oevp-abgeordnete-teuerung-nur-ein-gefuehl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖVP-Abgeordnete: Teuerung nur ein »Gefühl«</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLpLSzOzcO9ztERRrjycrMpBcesOeP3ftS7JrCR4mephonv-2zPGSOaMMJTlLggFfvswapPGDBSA" alt="ÖVP-Abgeordnete: Teuerung nur ein »Gefühl«" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vielleicht aber bilden wir uns die Teuerung auch einfach nur ein? So sieht das zumindest die ÖVP-Abgeordnete Angela Baumgartner. In einer Rede am Dienstag im&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}