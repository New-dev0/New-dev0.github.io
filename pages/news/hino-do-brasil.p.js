import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hino do Brasil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hino do Brasil"/>
        <meta name="description" content="Trending News about Hino do Brasil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hino do Brasil</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/R7RAltRMVUvfIYJBobvsktw7aSs=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11152071.jpg" alt="Hino do Brasil"/>
            <h3>Recent News</h3>
            <a href='https://gshow.globo.com/tudo-mais/copa-do-mundo/noticia/marilia-nery-mostra-hino-do-brasil-tocando-em-radio-no-catar.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marília Nery mostra hino do Brasil tocando em rádio no Catar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJ3BbcGYgjRAb6EXOlMFxG6MFESRpwYrOPzWUcxli9naK5wKIDqhHeb2CLeVIIiYuyp1MD2b4_" alt="Marília Nery mostra hino do Brasil tocando em rádio no Catar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em clima de estreia de Copa, as esposas dos jogadores da Seleção Brasileira estão no Catar mostrando o que está rolando por lá.</p></div>
            </div>
        </a>
        </Template></>;
}