import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lionel Messi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lionel Messi"/>
        <meta name="description" content="Trending News about Lionel Messi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lionel Messi</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/26/1296585655-63814603acd8e.jpeg" alt="Lionel Messi"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/criticas-de-zico-a-lionel-messi-repercutem-na-imprensa-argentina,6cebfc467f188ca851f0da30a1614af24k2p90kb.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Críticas de Zico a Lionel Messi repercutem na imprensa argentina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvtJWoEhWEk8NFidRWrctXY-Zf9041uaHLI02mtKMtCXflX5h970JIhlKE9YNOO1szd1yk0iTz" alt="Críticas de Zico a Lionel Messi repercutem na imprensa argentina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Convidado da live &#39;Primeiro Lance&#39; na última quinta-feira, Zico repercutiu na imprensa argentina. Durante o papo com os jornalistas Marcos Uchôa e Chandy&nbsp;...</p></div>
            </div>
        </a><a href='https://observatoriodegames.uol.com.br/mobile/pubg-mobile-revela-itens-do-lionel-messi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PUBG MOBILE revela itens do Lionel Messi | Observatório de Games</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR9-gUoHWRlquEqBe3M1MibyHh3QgwDWX964RNi4SmQld-RDr6M5HYbUnjGG5c6OPLU6a3yGxeV" alt="PUBG MOBILE revela itens do Lionel Messi | Observatório de Games" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogadores poderão se tornar lendas com várias roupas e skins do jogador Messi, além de novos acessórios, paraquedas, frigideira e muito mais. O grupo de itens&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/argentina-conta-com-lideranca-de-messi-para-evitar-tragedia.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina conta com liderança de Messi para evitar tragédia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvszb6Q59-_CqpQZGghBgqKyuodoM_TiiWXTOmXcpYrjCa29uZwHnBxnvAvNBkVXY7BhPfRHlP" alt="Argentina conta com liderança de Messi para evitar tragédia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em 2010, no Mundial da África do Sul, o craque tropeçou no discurso antes da partida contra a Grécia. O então técnico Diego Maradona decidiu que ele seria&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}