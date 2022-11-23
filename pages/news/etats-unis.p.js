import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Etats Unis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Etats Unis"/>
        <meta name="description" content="Trending News about Etats Unis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Etats Unis</h1>
            <Image width={800} height={500} src="" alt="Etats Unis"/>
            <h3>Recent News</h3>
            <a href='https://www.diplomatie.gouv.fr/fr/dossiers-pays/etats-unis/evenements/article/etats-unis-premier-anniversaire-de-la-villa-albertine-22-11-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>États-Unis - Premier anniversaire de la Villa Albertine (22.11.22)</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="États-Unis - Premier anniversaire de la Villa Albertine (22.11.22)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mme Catherine Colonna, Ministre de l&#39;Europe et des Affaires étrangères, réunit ce jour pour la première fois le Conseil d&#39;Orientation Stratégique (…)</p></div>
            </div>
        </a>
        </Template></>;
}