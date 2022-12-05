import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Epic Games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Epic Games"/>
        <meta name="description" content="Trending News about Epic Games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Epic Games</h1>
            <Image width={800} height={500} src="https://cdn2.unrealengine.com/fortnite-creative-v23-00-update-social-1920x1080-26f201c16e74.jpg" alt="Epic Games"/>
            <h3>Recent News</h3>
            <a href='https://www.epicgames.com/fortnite/fr/news/fortnite-creative-v23-00-update'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lisez le contenu de la mise à jour 23.00 du mode Créatif de Fortnite</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1y-23gh4V_IsPDfJa4omhox7b4-yq0Q1gkqhg8Gbjtk9F8T1weEEsSym_GPsOyPVP42sSOPWu" alt="Lisez le contenu de la mise à jour 23.00 du mode Créatif de Fortnite" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La mise à jour 23.00 du mode Créatif de Fortnite contient des changements pour les îles de Battle Royale comme l&#39;enjambement, de nouvelles armes,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}