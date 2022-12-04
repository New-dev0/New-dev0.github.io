import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gakpo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gakpo"/>
        <meta name="description" content="Trending News about Gakpo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gakpo</h1>
            <Image width={800} height={500} src="" alt="Gakpo"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/futebol/destaque-da-holanda-gakpo-evita-falar-do-futuro-e-van-dijk-o-coloca-no-real-madrid,459f2ef6835c76d65d26e6bc64bc1a65mqwi8zen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Destaque da Holanda, Gakpo evita falar do futuro e Van Dijk &#39;o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Destaque da Holanda, Gakpo evita falar do futuro e Van Dijk &#39;o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jovem revelação do ataque holandês é alvo de clubes europeus e deve ser disputado na próxima janela de transferências.</p></div>
            </div>
        </a>
        </Template></>;
}