import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Le Guetteur</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Le Guetteur"/>
        <meta name="description" content="Trending News about Le Guetteur" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Le Guetteur</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/vincent-kaminski-mathieu-kassovitz-le-guetteur.png?ver=1" alt="Le Guetteur"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/le-guetteur-pourquoi-la-participation-de-mathieu-kassovitz-a-t-elle-ete-complexe-5507421/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Guetteur : pourquoi la participation de Mathieu Kassovitz a-t-elle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzDpoMovK0Pw2v5F2JmQp83xo-Rp7_z2mOGrYvO_i_5rKFsoZWZaGBZlREWJJyEBpOvqzJ0E6h" alt="Le Guetteur : pourquoi la participation de Mathieu Kassovitz a-t-elle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour son film &quot;Le Guetteur&quot;, Michele Placido constitue un casting de grande tenue avec Daniel Auteuil, Olivier Gourmet et Mathieu Kassovitz.</p></div>
            </div>
        </a>
        </Template></>;
}