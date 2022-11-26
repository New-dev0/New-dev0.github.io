import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vans</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vans"/>
        <meta name="description" content="Trending News about Vans" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vans</h1>
            <Image width={800} height={500} src="https://cidadeverde.com/assets/uploads/noticias/016a4a83b895bf0d42f3f61a86e9dc0e.jpg" alt="Vans"/>
            <h3>Recent News</h3>
            <a href='https://cidadeverde.com/noticias/381798/3-modelos-de-tenis-vans-para-usar-com-estilo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3 modelos de tênis Vans para usar com estilo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8GaER1n2RPLCV10W-YdlXuiPpfxYB-UnN_dis1U3R3FJlNtxMhpPIO71gZSlKJEBid_CS1K93" alt="3 modelos de tênis Vans para usar com estilo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Vans Era é um clássico tênis de skate de cano baixo com cadarço. O estilo apresenta cabedal de lona durável com costura dupla da Vans e língua acolchoada. É&nbsp;...</p></div>
            </div>
        </a><a href='https://www.capital.sp.gov.br/noticia/sptrans-disponibiliza-vans-do-atende-durante-eventos-no-fim-de-semana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SPTrans disponibiliza vans do Atende+ durante eventos no fim de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVpogn1kIaeSUSlvG0R1Qsf56xKMjQEmfaTleA4t3vcYxFgKMsMbrP3N866ZSQT7vVamv_c4_c" alt="SPTrans disponibiliza vans do Atende+ durante eventos no fim de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Estarão à disposição 117 veículos, de graça, para pessoas com autismo, surdocegueira ou deficiência física com alto grau de severidade e dependência.</p></div>
            </div>
        </a>
        </Template></>;
}