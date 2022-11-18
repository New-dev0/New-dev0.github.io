import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amistosos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amistosos"/>
        <meta name="description" content="Trending News about Amistosos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amistosos</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/628/s1.trrsf.com/live/thumbs/irlanda-x-noruega-74924.png" alt="Amistosos"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/futebol/ao-vivo/irlanda-x-noruega/74924/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irlanda x Noruega - Ao vivo - Amistosos de Seleções - Minuto a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXgdIfhr2UHqEPAjvqjO1LRxuir5IeWCShTIUP16sdEsekkL2ZenkOMS5UgWOmDYE4TWwBPIkB" alt="Irlanda x Noruega - Ao vivo - Amistosos de Seleções - Minuto a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fim do Jogo, Republic of Ireland 1, Norway 2. 2º Tempo.</p></div>
            </div>
        </a>
        </Template></>;
}