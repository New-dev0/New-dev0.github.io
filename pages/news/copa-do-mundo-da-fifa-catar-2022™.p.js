import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Copa do Mundo da FIFA Catar 2022™</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Copa do Mundo da FIFA Catar 2022™"/>
        <meta name="description" content="Trending News about Copa do Mundo da FIFA Catar 2022™" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Copa do Mundo da FIFA Catar 2022™</h1>
            <Image width={800} height={500} src="https://s.yimg.com/ny/api/res/1.2/u4L_CQCygBZ.qUV1Mdsxug--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/c85a0610-6a59-11ed-aedf-fa1633adf39d" alt="Copa do Mundo da FIFA Catar 2022™"/>
            <h3>Recent News</h3>
            <a href='https://esportes.yahoo.com/noticias/navio-da-marinha-do-paquistao-vai-ao-catar-para-seguranca-da-copa-115048196.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Navio da Marinha do Paquistão vai ao Catar para segurança da Copa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScqGmvfvLRtiQu-uGLh4hG7z4Eb6K_OTMzGyaJEnnRsrClE4loQoieaRR29eFnHdo1iVqs-G76" alt="Navio da Marinha do Paquistão vai ao Catar para segurança da Copa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com os detalhes, a nação anfitriã do principal torneio de futebol entre nações, juntamente com os diplomatas paquistaneses, saudou a chegada do PNS&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}