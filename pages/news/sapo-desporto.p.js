import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SAPO Desporto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SAPO Desporto"/>
        <meta name="description" content="Trending News about SAPO Desporto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SAPO Desporto</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fdesporto.sapo.pt%2Fassets%2Fimg%2Fdesporto-sapo%2Ffacebook-overlay.png&epic=MTMxlV8fwaiA6ZJ+JX+sX4A4HQ63A+LUXttChBTJQxAP0EI9byhiiX+1G6XoO2vYpIXuDx7xQoBmKG34FyxXfAm1/Ld6RSkgM3u/zF4of6JiLb0=" alt="SAPO Desporto"/>
            <h3>Recent News</h3>
            <a href='https://desporto.sapo.pt/futebol/mundial/artigos/video-rafael-leao-podera-ser-um-dos-grandes-prejudicados-na-selecao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO: &quot;Rafael Leão poderá ser um dos grandes prejudicados na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRURnspCk8vYxpEGQtXUPVhC-LuaoKTRO6dpcA81FVWtlRvbeltSwzsqVnwjsnAcm6dXRREtezK" alt="VÍDEO: &quot;Rafael Leão poderá ser um dos grandes prejudicados na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Como encaixar Rafael Leão no Onze de Portugal? O avançado continua a brilhar no AC Milan onde é a principal figura da equipa mas na Seleção de Portugal,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}