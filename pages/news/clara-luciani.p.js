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
            <a href='https://www.lesinrocks.com/musique/clara-luciani-peut-etre-qua-72-ans-quand-je-chanterai-la-grenade-jen-aurai-marre-3-3-506578-18-11-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clara Luciani : “Peut-être qu&#39;à 72 ans, quand je chanterai &#39;La ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Clara Luciani : “Peut-être qu&#39;à 72 ans, quand je chanterai &#39;La ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Souvent, je referme un livre et j&#39;ai des idées de thématiques, de chansons. Celles qui m&#39;ont le plus marquée, c&#39;est Duras et Ernaux. Duras dans la façon dont&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}