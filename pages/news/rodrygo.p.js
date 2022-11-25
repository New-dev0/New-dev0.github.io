import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rodrygo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rodrygo"/>
        <meta name="description" content="Trending News about Rodrygo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rodrygo</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/RsXvQneP0mM3Z6YDIoVRJ8_N_k0=/1200x/smart/filters:cover():strip_icc()/s02.video.glbimg.com/x720/11153633.jpg" alt="Rodrygo"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecao-brasileira/noticia/2022/11/24/rodrygo-e-apontado-como-possivel-substituto-de-neymar-por-comentaristas-do-troca-de-passes.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rodrygo é apontado como possível substituto de Neymar por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0fmTZFjx6fKcJc5fObb4W4z2ZXSUmiOJyBQbogeozu3BX4vwcNHt5wxLg3lsRZluzT2NSNzXS" alt="Rodrygo é apontado como possível substituto de Neymar por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com a possibilidade da ausência de Neymar no próximo jogo do Brasil, segunda-feira, contra a Suíça, por conta de um possível lesão no tornozelo direito,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}