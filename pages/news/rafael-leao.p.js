import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rafael leao</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rafael leao"/>
        <meta name="description" content="Trending News about Rafael leao" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rafael leao</h1>
            <Image width={800} height={500} src="" alt="Rafael leao"/>
            <h3>Recent News</h3>
            <a href='https://somosfanaticos.fans/br/transferencias/Destaque-de-Portugal-Rafael-Leao-e-alvo-de-dois-dos-maiores-clubes-do-mundo-20221128-0022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Destaque de Portugal, Rafael Leão é alvo de dois dos maiores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTI12cOERjTEbxRgvz1D5UpKrFXDlb_vGTDP3T8d2_PeqYm7L0JbuEq4yZ2GI6V8rbUeFntw5_P" alt="Destaque de Portugal, Rafael Leão é alvo de dois dos maiores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grande parte do sucesso do Milan na última temporada europeia, passou pelos pés do português Rafael Leão, de apenas 23 anos de idade.</p></div>
            </div>
        </a>
        </Template></>;
}