import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Guy Savoy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Guy Savoy"/>
        <meta name="description" content="Trending News about Guy Savoy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Guy Savoy</h1>
            <Image width={800} height={500} src="https://static1.purepeople.com/articles/9/50/05/79/@/7285200-guy-savoy-et-sonia-mabrouk-soiree-du-9-opengraph_1200-3.jpg" alt="Guy Savoy"/>
            <h3>Recent News</h3>
            <a href='https://www.purepeople.com/article/guy-savoy-en-couple-sonia-mabrouk-une-rencontre-due-au-hasard-leur-histoire-d-amour-une-evidence_a500579/1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guy Savoy en couple Sonia Mabrouk : une rencontre due au hasard ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2pV0fZm2ETTcSBU7IfxGPF_1EVemsfQ9-miW2q3SJ4GWycjD6DbYg6ziZa0vhi9Q0DeePFifc" alt="Guy Savoy en couple Sonia Mabrouk : une rencontre due au hasard ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leur coup de foudre a eu lieu devant les caméras de Public Sénat en 2013. Déjà en couple, Guy Savoy et Sonia Mabrouk ont attendu cinq ans avant&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}