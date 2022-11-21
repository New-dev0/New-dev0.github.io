import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Camille Cottin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Camille Cottin"/>
        <meta name="description" content="Trending News about Camille Cottin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Camille Cottin</h1>
            <Image width={800} height={500} src="https://media.zenfs.com/fr/purepeople_fr_articles_981/418d5658171241d6436279079a17a038" alt="Camille Cottin"/>
            <h3>Recent News</h3>
            <a href='https://fr.news.yahoo.com/camille-cottin-benjamin-gauthier-rarissimes-170900736.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Camille Cottin et Benjamin Gauthier : rarissimes photos de leurs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRlJ11sDijWJMIziQtKpiPHSjJJenDUBdDjeBQZOWh7gNyBVnwi_WIbwUjMIDSCTiPq44AQglr" alt="Camille Cottin et Benjamin Gauthier : rarissimes photos de leurs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France 2 diffuse ce dimanche 20 novembre au soir le film &quot;Larguées&quot; (2018) avec Camille Cottin dans le rôle de Rose....</p></div>
            </div>
        </a>
        </Template></>;
}