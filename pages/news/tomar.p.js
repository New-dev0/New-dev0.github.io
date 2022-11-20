import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tomar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tomar"/>
        <meta name="description" content="Trending News about Tomar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tomar</h1>
            <Image width={800} height={500} src="https://tomarnarede.pt/wp-content/uploads/2019/08/turismo-turistas-IMG_20180930_113057.jpg" alt="Tomar"/>
            <h3>Recent News</h3>
            <a href='https://tomarnarede.pt/economia/tomar-atinge-as-200-unidades-de-alojamento-local/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tomar atinge as 200 unidades de alojamento local | Tomar na Rede</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1y2tm37pLlZ9w0GSwBdoRa91hp9lYNv1Nu0NBjM2OlTfjM-XMzrHzVck6JYEOycDQ1JRxpdty" alt="Tomar atinge as 200 unidades de alojamento local | Tomar na Rede" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Esta semana o concelho de Tomar atingiu a marca das 200 unidades de alojamento local (AL), segundo a listagem publicada no site do Turismo de Portugal, o.</p></div>
            </div>
        </a><a href='https://tomarnarede.pt/cultura/serie-sobre-saramago-passou-por-tomar-constancia-e-azinhaga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Série sobre Saramago passou por Tomar, Constância e Azinhaga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXsOpFuwj-V8dFjjwGE-Hf6RrxVueWeXLICeoJ9nhRi0n6hu4vFLfLK-FoVcfEC37EuZsv_dKX" alt="Série sobre Saramago passou por Tomar, Constância e Azinhaga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois, o restaurante citado por Saramago no livro Viagem a Portugal, o Beira Rio, estava fechado no dia das filmagens em Tomar. Foi neste restaurante que.</p></div>
            </div>
        </a>
        </Template></>;
}