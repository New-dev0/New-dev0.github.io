import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paris à tout prix</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paris à tout prix"/>
        <meta name="description" content="Trending News about Paris à tout prix" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paris à tout prix</h1>
            <Image width={800} height={500} src="" alt="Paris à tout prix"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/reem-kherici-partage-une-impressionnante-photo-de-son-accident-sur-le-tournage-du-film-paris-a-tout-prix-743862'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reem Kherici partage une impressionnante photo de son accident ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVAMQOKMvwL4QrztHN7wf6SaTyS2WFys6jwS_StU3U1DK5bHXuSJnas4aaq6UtKFhsm7t02Yl5" alt="Reem Kherici partage une impressionnante photo de son accident ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour leur dimanche soir, les téléspectateurs pourront visionner Paris à tout prix sur W9 ce 27 novembre 2022. Ce film réalisé par Reem Kherici, dan...</p></div>
            </div>
        </a>
        </Template></>;
}