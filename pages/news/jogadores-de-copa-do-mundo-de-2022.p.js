import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogadores de Copa do Mundo de 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogadores de Copa do Mundo de 2022"/>
        <meta name="description" content="Trending News about Jogadores de Copa do Mundo de 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogadores de Copa do Mundo de 2022</h1>
            <Image width={800} height={500} src="https://bolavip.com/__export/1669838633928/sites/bolavip/img/2022/11/30/gettyimages-1339376093.jpg_242310155.jpg" alt="Jogadores de Copa do Mundo de 2022"/>
            <h3>Recent News</h3>
            <a href='https://br.bolavip.com/futebol/Daniel-Alves-no-topo...-Veja-os-jogadores-brasileiros-mais-velhos-na-historia-das-Copas-do-Mundo-20221130-0176.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Daniel Alves no topo...&quot;; Veja os jogadores brasileiros mais velhos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFoznIrRPQJGMblhL2mN9AM9nD_ZOzfYr6Rp-r4VdqG4jHlizVVrg7wmPr3ieuV4iD7hQE_qA8" alt="&quot;Daniel Alves no topo...&quot;; Veja os jogadores brasileiros mais velhos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral-direito se tornará o jogador mais velho a atuar com a camisa da Seleção Brasileira em Mundiais.</p></div>
            </div>
        </a>
        </Template></>;
}