import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jude Bellingham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jude Bellingham"/>
        <meta name="description" content="Trending News about Jude Bellingham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jude Bellingham</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/Mundial2022/FotosDR/JackGrealishEnglandIGDR.jpg" alt="Jude Bellingham"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-12-04/manchester-city-grealish-pode-ser-vendido-para-contratar-bellingham/967284'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grealish pode ser vendido para contratar Bellingham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSK70AjfOIljBhwCnwvP9Om8ic9_zVisNmk4XNRSzRXdgLVW4yb9fbZT_JAyF2_6cuLKAyBPtI" alt="Grealish pode ser vendido para contratar Bellingham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o portal de informação futebolística inglês Football Insider, o Manchester City estará a considerar vender Jack Grealish para obter os fundos&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}