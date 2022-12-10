import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maladie de Charcot</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maladie de Charcot"/>
        <meta name="description" content="Trending News about Maladie de Charcot" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maladie de Charcot</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/I_Tx30cvmhMlPg0iDGzC2EIgAeU/1500x843/2022/12/09/6393a9946d40b_findevie.jpg" alt="Maladie de Charcot"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/societe/euthanasie/fin-de-vie-portrait-de-christophe-malsot-atteint-de-la-maladie-de-charcot_5535411.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fin de vie : portrait de Christophe Malsot, atteint de la maladie de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS77yChyX3yyTzEYbHWQJtI3h8Mpn2h-aPBUvfaduG48Gb48y4v-MnaaNdPinTOLhY49q1lx21D" alt="Fin de vie : portrait de Christophe Malsot, atteint de la maladie de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une convention citoyenne sur la fin de vie a débuté vendredi 9 décembre. Des milliers de personnes sont admises chaque année en soins palliatifs et gardent&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}