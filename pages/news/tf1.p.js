import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TF1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TF1"/>
        <meta name="description" content="Trending News about TF1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TF1</h1>
            <Image width={800} height={500} src="https://www.challenges.fr/assets/img/2022/12/07/cover-r4x3w1200-6390cf1d56341-sipa-sipausa30333309-000015.jpg" alt="TF1"/>
            <h3>Recent News</h3>
            <a href='https://www.challenges.fr/media/audiovisuel/coupe-du-monde-2022-tf1-enregistre-ses-pires-audiences-depuis-20-ans-au-premier-tour_838034'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du Monde 2022 : TF1 enregistre ses pires audiences depuis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSkl7k1wk5F7BLgXDMCCfRe9ZvWFG3MoXhujaDSpNKh5Hkn6Katgqy_eAeQdz-iXVpch2bdbOaC" alt="Coupe du Monde 2022 : TF1 enregistre ses pires audiences depuis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon les calculs de Challenges, les audiences TV de la phase de poule de la Coupe du Monde 2022 au Qatar n&#39;ont jamais été aussi mauvaises pour TF1 depuis&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/social/tf1-offre-un-bilan-predictif-a-ses-quadras-20221209'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TF1 offre un bilan prédictif à ses quadras</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGiRRtINYm3KrDZpKvdSvdKwUTdSOqR_8UrXFfoFeLoYM4N1k5SGWZrxF_OQYNmnlLHPvvKMVl" alt="TF1 offre un bilan prédictif à ses quadras" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Réalisé en toute confidentialité, ce bilan permet de prédire le risque de survenance des principaux cancers et des maladies cardio-vasculaires, dans une&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}