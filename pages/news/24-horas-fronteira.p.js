import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>24 horas fronteira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,24 horas fronteira"/>
        <meta name="description" content="Trending News about 24 horas fronteira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>24 horas fronteira</h1>
            <Image width={800} height={500} src="" alt="24 horas fronteira"/>
            <h3>Recent News</h3>
            <a href='https://www.autosport.pt/todooterreno/24-horas-tt-vila-de-fronteira-classificacoes-resultados/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>24 horas TT Vila de Fronteira: Classificações, Resultados,</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTYoytzN8jyhVXxNTiFmYvtpK56DCKcRbuJwyyX-hxQEuhAuiINwmx7qxuVg63zHxSyNN3y86_3" alt="24 horas TT Vila de Fronteira: Classificações, Resultados," height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Infelizmente o Autosport não pode continuar a disponibilizar os seus artigos gratuitamente. Já não é viável ter uma equipa de jornalistas profissionais sem que&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}