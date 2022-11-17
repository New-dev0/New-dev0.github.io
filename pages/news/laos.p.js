import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Laos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Laos"/>
        <meta name="description" content="Trending News about Laos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Laos</h1>
            <Image width={800} height={500} src="" alt="Laos"/>
            <h3>Recent News</h3>
            <a href='https://www.prensalatina.com.br/2022/11/16/visita-de-heroi-da-republica-de-cuba-fortalece-lacos-com-laos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Visita de Herói da República de Cuba fortalece laços com Laos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Visita de Herói da República de Cuba fortalece laços com Laos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vientiane, 16 nov (Prensa Latina) A visita do Herói da República de Cuba, Fernando González, constitui um momento especial para estreitar os laços&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}