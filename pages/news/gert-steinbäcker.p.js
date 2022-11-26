import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gert Steinbäcker</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gert Steinbäcker"/>
        <meta name="description" content="Trending News about Gert Steinbäcker" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gert Steinbäcker</h1>
            <Image width={800} height={500} src="https://media04.meinbezirk.at/article/2022/11/25/6/31854076_XXL.jpg" alt="Gert Steinbäcker"/>
            <h3>Recent News</h3>
            <a href='https://www.meinbezirk.at/murtal/c-leute/die-legende-gert-steinbaecker-startete-ihre-letzte-tour_a5710054'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spielberg: Die Legende Gert Steinbäcker startete ihre &quot;letzte Tour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRCUm0fNNTKKTJ7SCZGe0shZEDsJ-MwMHV9SqiQp0rAYdOIkKPwZ8OQmG7EDFU39gGwOw8QQSl" alt="Spielberg: Die Legende Gert Steinbäcker startete ihre &quot;letzte Tour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor einem ausverkauften Haus in Spielberg präsentierte die Austro-Pop Legende zusammen mit seiner Band zahlreiche ältere und neuere Hits des begnadeten&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/kultur/gert-steinbaecker-beruehmt-werden-muss-ich-nicht-mehr/402237621'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gert Steinbäcker: &quot;Berühmt werden muss ich nicht mehr&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3-rIpyOlqaVmZQONyLeUGU5WvPXb-m0AUWiPrzdNs8GAYCM3PxckZMP_1yRQVtkK7GJ7VvjKS" alt="Gert Steinbäcker: &quot;Berühmt werden muss ich nicht mehr&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Interview: Die Austropop-Legende wird 70 und geht auf eine letzte große Tournee. von Guido Tartarotti. Heute, 15:22.</p></div>
            </div>
        </a>
        </Template></>;
}