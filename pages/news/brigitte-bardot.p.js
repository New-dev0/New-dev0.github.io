import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brigitte Bardot</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brigitte Bardot"/>
        <meta name="description" content="Trending News about Brigitte Bardot" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brigitte Bardot</h1>
            <Image width={800} height={500} src="https://media.sudouest.fr/13208746/1200x-1/sudouest-photo-1-8015155.jpg" alt="Brigitte Bardot"/>
            <h3>Recent News</h3>
            <a href='https://www.sudouest.fr/environnement/chasse/landes-accusee-de-diffamation-la-fondation-brigitte-bardot-fixee-sur-son-sort-le-13-decembre-13208746.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Landes : accusée de diffamation, la Fondation Brigitte Bardot fixée ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkYKcXyPr664NXRpiSkHvlc3tm3ezJVlu4kHm3VIUfzo6f0KhJU31hk9kFC4md8ybe-iKPyeAi" alt="Landes : accusée de diffamation, la Fondation Brigitte Bardot fixée ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après une multitude de renvois, le dossier sur les panneaux portant l&#39;inscription « Chasseurs, sauvez des vies, restez chez vous », installés par la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}