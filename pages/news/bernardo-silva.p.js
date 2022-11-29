import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bernardo Silva</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bernardo Silva"/>
        <meta name="description" content="Trending News about Bernardo Silva" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bernardo Silva</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/6384decd0cf2254fb2852f07/og/selfie" alt="Bernardo Silva"/>
            <h3>Recent News</h3>
            <a href='https://selfie.iol.pt/bernardo-silva/futebol/bernardo-silva-o-craque-da-selecao-nacional-que-anda-de-smart/20221128/6384e4e40cf2254fb28531d5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bernardo Silva, o craque da Seleção Nacional que anda... de Smart</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOBFc6olYFCOWLPdySxwcdYHKAtaKq9kIori4fy68gFApWn-U6o0sOJJo-9Zge0-SWQHtA63_V" alt="Bernardo Silva, o craque da Seleção Nacional que anda... de Smart" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal defronta o Uruguai na noite desta segunda-feira, dia 28, no Mundial do Catar, naquele que é o segundo jogo da Seleção Nacional na competição.</p></div>
            </div>
        </a>
        </Template></>;
}