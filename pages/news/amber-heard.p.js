import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amber Heard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amber Heard"/>
        <meta name="description" content="Trending News about Amber Heard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amber Heard</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2022/06/15/165530217462a9e81e90321_1655302174_3x2_rt.jpg" alt="Amber Heard"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/ilustrada/2022/12/amber-heard-pede-novo-julgamento-contra-johnny-depp-apos-derrota.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard pede novo julgamento contra Johnny Depp após derrota</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSzeSqywAOo62rtXLphPAqxf4cLKd_MJ_XHHl_49tv1ZcdANBekJoz5408werU1jxcoTiZl99Q" alt="Amber Heard pede novo julgamento contra Johnny Depp após derrota" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Advogados apontam erros em resolução que condenou atriz a pagar US$ 10 milhões a ex-marido.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/diversao/entre-telas/advogados-de-amber-heard-pedem-novo-julgamento-contra-johnny-depp,b7ed1c44e7a91368fad903b3feb331cca0bsg1ya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Advogados de Amber Heard pedem novo julgamento contra Johnny ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTC9OenF6fzMA6F94sOlDECpOOmi-3xYO_7ZugzE9kZCqJNspNKafoImjeQxPin221bAHa7ICzV" alt="Advogados de Amber Heard pedem novo julgamento contra Johnny ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os advogados da atriz Amber Heard entraram com um pedido para um novo julgamento do processo de ...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/cultura/noticia/2022/12/apos-derrota-para-johnny-depp-amber-heard-pede-novo-julgamento.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após derrota para Johnny Depp, Amber Heard pede novo julgamento</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmFvSLjtjUXHYwgk5LcHwZeXS4tTTHdaeJoj7nUmPGd9ptRW-miB688S3N82TbFdnVreLR96o1" alt="Após derrota para Johnny Depp, Amber Heard pede novo julgamento" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Advogados de atriz afirmam que evidências favoráveis a ela foram descartadas e que julgamento deveria ter ocorrido na Califórnia.</p></div>
            </div>
        </a><a href='https://www.correiodopovo.com.br/arteagenda/amber-heard-pede-novo-julgamento-ap%C3%B3s-derrota-para-johnny-depp-em-processo-1.932585'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard pede novo julgamento após derrota para Johnny ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSICb_HTEGAkX9wFr6IC1-UiaFczmxfhR94c3I8JqJGXnTEPpT3nMaj8KTWnZCHAhEPYD9S7Qjn" alt="Amber Heard pede novo julgamento após derrota para Johnny ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o jornal The New York Times, os advogados de Amber Heard entraram com um novo pedido de julgamento após a atriz perder o processo de difamação para&nbsp;...</p></div>
            </div>
        </a><a href='https://d24am.com/plus/famosos/amber-heard-exige-novo-julgamento-apos-derrota-contra-johnny-depp/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amber Heard exige novo julgamento após derrota contra Johnny ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVhJ2u_SZMcEJrblR5AtR8rmfYiZ5ZvCquyDnBb4h9TvNcBHLPy0t1TNPX0Mk9gY6M-RbecH59" alt="Amber Heard exige novo julgamento após derrota contra Johnny ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Angeles – Os advogados da atriz Amber Heard decidiram entrar com novo pedido de julgamento após ela perder o recente processo de difamação para seu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}