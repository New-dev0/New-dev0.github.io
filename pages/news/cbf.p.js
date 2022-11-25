import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>CBF</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,CBF"/>
        <meta name="description" content="Trending News about CBF" /></Head><Template>
            <h1 style={{fontSize: "30"}}>CBF</h1>
            <Image width={800} height={500} src="" alt="CBF"/>
            <h3>Recent News</h3>
            <a href='https://www.nossomeio.com.br/parceria-entre-cbf-e-onefootball-passa-a-incluir-conteudo-em-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Parceria entre CBF e OneFootball passa a incluir conteúdo em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS21zACnV6wvNH-M-CC5SPzuztIJDhjARrWypJQodV3OztrJt_7WMnthgKYWxqO-zf48ejkEFbg" alt="Parceria entre CBF e OneFootball passa a incluir conteúdo em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Agora, a tempo da Copa do Mundo da FIFA Catar 2022, a CBF traz toda a sua gama de conteúdo de vídeo para as plataformas OneFootball – incluindo o recém-lançado&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}