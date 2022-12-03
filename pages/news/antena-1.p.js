import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ANTENA 1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ANTENA 1"/>
        <meta name="description" content="Trending News about ANTENA 1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ANTENA 1</h1>
            <Image width={800} height={500} src="" alt="ANTENA 1"/>
            <h3>Recent News</h3>
            <a href='https://www.antena1.com.br/noticias/stellantis-faz-parceria-para-converter-vans-comerciais-a-combustao-em-eletricas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stellantis faz parceria para converter vans comerciais a combustão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Stellantis faz parceria para converter vans comerciais a combustão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MILÃO, Itália (Reuters) - A Stellantis anunciou nesta sexta-feira parceria com a Qinomic, uma empresa francesa de tecnologia focada em mobilidade,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.antena1.com.br/noticias/charlie-puth-completa-31-anos-confira-a-homenagem-especial-da'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Charlie Puth completa 31 anos: confira a homenagem especial da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Charlie Puth completa 31 anos: confira a homenagem especial da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em 2 de dezembro de 1991, na cidade de Nova Jersey, nascia Charlie Otto Puth Jr. O garoto apaixonado por música não tinha ideia de que se tornaria um grande&nbsp;...</p></div>
            </div>
        </a><a href='https://www.antena1.com.br/noticias/departamento-de-seguranca-dos-eua-investigara-ataques-digitais-ligados-a-grupo-lapsus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Departamento de Segurança dos EUA investigará ataques digitais ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Departamento de Segurança dos EUA investigará ataques digitais ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BENGALURU, Índia (Reuters) - O Departamento de Segurança Interna dos Estados Unidos (DHS) disse nesta sexta-feira que um de seus grupos vai investigar os&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}