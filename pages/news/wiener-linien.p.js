import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wiener Linien</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wiener Linien"/>
        <meta name="description" content="Trending News about Wiener Linien" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wiener Linien</h1>
            <Image width={800} height={500} src="" alt="Wiener Linien"/>
            <h3>Recent News</h3>
            <a href='https://www.meinbezirk.at/wien/c-lokales/wiener-linien-versteigern-alte-bim-sitzgarnituren_a5736973'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Licht ins Dunkel: Wiener Linien versteigern alte Bim-Sitzgarnituren ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5OiWvu6BWsEgs965ikqd5JHnq9nqd_nIraTTf4lM_WoANRtzW-wjb7Zl1dnCF4t0NL6YJbDDi" alt="Licht ins Dunkel: Wiener Linien versteigern alte Bim-Sitzgarnituren ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kurios: Die Wiener Linien versteigern die alten Sitzgarnituren des seit Sommer 2022 ausgemusterten Bim-Modells E1. Der Erlös geht an die ORF-Hilfskampagne&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}