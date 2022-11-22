import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Roschdy Zem</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Roschdy Zem"/>
        <meta name="description" content="Trending News about Roschdy Zem" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Roschdy Zem</h1>
            <Image width={800} height={500} src="" alt="Roschdy Zem"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/vous-ne-lappelez-pas-papa-la-fille-de-roschdy-zem-surprend-une-chroniqueuse-de-c-a-vous-zaptv-743424'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Vous ne l&#39;appelez pas papa ? » : la fille de Roschdy Zem surprend ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYuMsFjIg5_YW5LOQDTvrQp8GscfLDwuRbi2vkME55cHkFirS7TnAHQfME2MH6Rcq2PtPnSjdN" alt="« Vous ne l&#39;appelez pas papa ? » : la fille de Roschdy Zem surprend ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roschdy Zem était présent sur le plateau de C à vous pour parler de son dernier film, ce lundi 21 novembre 2022 sur France 5. À ses côtés, sa fille...</p></div>
            </div>
        </a><a href='https://positivr.fr/roschdy-zem-coup-gueule-gafam/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO. Roschdy Zem pousse un coup de gueule salutaire et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9nudFJko6YR7HAW_Z6J6SDH3vOqV8U_mlSWOSotPx9-wwL8r89SAy82y_qAO-W4zhqLVxFMmM" alt="VIDÉO. Roschdy Zem pousse un coup de gueule salutaire et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;acteur accuse les GAFAM de tout faire pour nous enfermer dans nos maisons, nous rendre fainéants et dénués de curiosité.</p></div>
            </div>
        </a>
        </Template></>;
}