import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sigma</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sigma"/>
        <meta name="description" content="Trending News about Sigma" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sigma</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/c3W-yr89Haenl5xgvkSFy-76Htk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/V/I/sjFnENRVOVZTj81dyazQ/sigma-battle-royale-studio-arm-free-fire-android-smartphone-mobile-arte.jpg" alt="Sigma"/>
            <h3>Recent News</h3>
            <a href='https://www.techtudo.com.br/noticias/2022/11/conheca-sigma-jogo-gratis-estilo-free-fire-para-celulares-android-esports.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conheça Sigma, jogo grátis &#39;estilo&#39; Free Fire para celulares Android</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhb7q7VUdkaCtxQ_HD3pMpS6CwkNFD3il363YK9eb59u_ePwvLqSvw6Brm0mKe-Rm9J22nk1xI" alt="Conheça Sigma, jogo grátis &#39;estilo&#39; Free Fire para celulares Android" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novo Battle Royale grátis Sigma traz experiência bastante semelhante a Free Fire Battlegrounds durante seu período de teste em acesso antecipado.</p></div>
            </div>
        </a>
        </Template></>;
}