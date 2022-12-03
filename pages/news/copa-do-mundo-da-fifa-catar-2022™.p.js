import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Copa do mundo da fifa catar 2022™</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Copa do mundo da fifa catar 2022™"/>
        <meta name="description" content="Trending News about Copa do mundo da fifa catar 2022™" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Copa do mundo da fifa catar 2022™</h1>
            <Image width={800} height={500} src="" alt="Copa do mundo da fifa catar 2022™"/>
            <h3>Recent News</h3>
            <a href='https://oglobo.globo.com/esportes/catar-2022/noticia/2022/12/fifa-divulga-uniformes-das-oitavas-da-copa-do-mundo-veja.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA divulga uniformes das oitavas da Copa do Mundo; veja</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRM51uugj9k1-rcMO3sbuwJIiO2t2sPZIInkYArO381olsDY--z153mDTVfA1O_3nTeBMTfhDhn" alt="FIFA divulga uniformes das oitavas da Copa do Mundo; veja" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Todas as equipes jogam com seus uniformes titulares, exceto a Espanha.</p></div>
            </div>
        </a>
        </Template></>;
}