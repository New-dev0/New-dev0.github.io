import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Clara Luciani</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Clara Luciani"/>
        <meta name="description" content="Trending News about Clara Luciani" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Clara Luciani</h1>
            <Image width={800} height={500} src="" alt="Clara Luciani"/>
            <h3>Recent News</h3>
            <a href='https://www.lesinrocks.com/musique/alysson-paradis-nous-parle-de-clara-luciani-cetait-comme-rencontrer-quelquun-de-sa-propre-famille-507024-20-11-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alysson Paradis nous parle de Clara Luciani : “C&#39;était comme ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Alysson Paradis nous parle de Clara Luciani : “C&#39;était comme ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[Clara Luciani rédactrice en chef] La chanteuse est entourée d&#39;une bande d&#39;amies, de sœurs de cœur ou de sang. Avec la comédienne Alysson Paradis,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}