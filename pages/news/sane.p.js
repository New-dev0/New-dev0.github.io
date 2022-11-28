import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sane"/>
        <meta name="description" content="Trending News about Sane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sane</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/S8sAIRcrke9GwNDbxyvGHChk-Xg=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/w/X/kzAlRPSImmXv3GuMpg4Q/sane-123.jpg" alt="Sane"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/times/atletico-mg/noticia/2022/11/27/goretzka-sane-atletico-mg-ja-enfrentou-estrelas-da-alemanha-em-2016-pela-florida-cup.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goretzka, Sané... Atlético-MG já enfrentou estrelas da Alemanha em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdlM9c5Pn2DJ_OZMpikRDSW2bRrcHNvLnU_MZ3JAOnhZniskC0ghPnhkY7Zuza9JkSEa75spah" alt="Goretzka, Sané... Atlético-MG já enfrentou estrelas da Alemanha em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em clima de Copa do Mundo, ge relembra o duelo do Galo contra o Schalke 04 em 2016.</p></div>
            </div>
        </a>
        </Template></>;
}