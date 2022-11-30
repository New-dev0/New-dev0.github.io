import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Willow</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Willow"/>
        <meta name="description" content="Trending News about Willow" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Willow</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/warwick-davis-1-2fe83a-0@1x.jpeg" alt="Willow"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/video-warwick-davis-interview-disney-ce-n-est-pas-facile-d-etre-une-personne-de-petite-taille-dans-ce-monde-le-heros-de-willow-se-confie-2240260.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO - &quot;Ce n&#39;est pas facile d&#39;être une personne de petite taille dans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuMRfppureq9eRo7V2My-uub1ezI1SICVWyKfvxjHLM80RZ55lseI8wJK7yH5cq5vl00wd3Dd3" alt="VIDÉO - &quot;Ce n&#39;est pas facile d&#39;être une personne de petite taille dans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Atteint de nanisme, l&#39;acteur britannique Warwick Davis est devenu célèbre à 18 ans en incarnant le héros de &quot;Willow&quot;. 34 ans plus tard,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}