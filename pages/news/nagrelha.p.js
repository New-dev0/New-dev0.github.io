import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nagrelha</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nagrelha"/>
        <meta name="description" content="Trending News about Nagrelha" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nagrelha</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-11-18-na-grelha-dos-lambas.jpg-503d8604/1.91x1?wm=true&outputFormat=jpeg" alt="Nagrelha"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-11-18-Morreu-aos-36-anos-o-cantor-Nagrelha-bbf39edb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu aos 36 anos o cantor Nagrelha</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTqQuNbXoURz7J_CRYq-XmbdiNlnn58I9cdZ6QpBUdfWzY5tL-rfy5Auuwlx3fuKUbSqnXpCJ8" alt="Morreu aos 36 anos o cantor Nagrelha" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O angolano Gelson Caio Manuel Mendes, de seu nome verdadeiro, era um dos artistas mais conhecidos de kuduro.</p></div>
            </div>
        </a><a href='https://novojornal.co.ao/sociedade/interior/morreu-nagrelha-o-estado-maior-do-kuduro-em-actualizacao-110918.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Nagrelha, o ″Estado Maior″ do Kuduro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRA5mH4m5djlPkSIkgs-Xz_OWNsTeybmrQnk0rZca11YK3Ip0NNhX9MUDqf_YBkcrJLTZE5jtjz" alt="Morreu Nagrelha, o ″Estado Maior″ do Kuduro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morreu esta sexta-feira,18, na cidade de Luanda, o músico Gelson Caio Manuel Mendes &quot;Nagrelha&quot; do grupo os Lambos, aos 36 anos, vítima de doença,&nbsp;...</p></div>
            </div>
        </a><a href='https://bantumen.com/nagrelha-morre/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Nagrelha, Estado Maior do Kuduro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKXj1T4-FTuPyBb2vdheQA3r5vanzJ3UYLsV1hLWMZUEQSgr_mAL2uqUpeUY0EBHanuoXKDSTd" alt="Morreu Nagrelha, Estado Maior do Kuduro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo um comunicado do Complexo Hospitalar de Doenças Cardio-Pulmonares Cardeal Dom Alexandre do Nascimento, em Luanda, o artista faleceu às 12h50 desta sexta&nbsp;...</p></div>
            </div>
        </a><a href='https://www.angola24horas.com/politica/item/25657-morreu-o-artista-nagrelha-dos-lambas-estado-maior-do-kuduro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu o artista Nagrelha dos Lambas “Estado Maior do Kuduro”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDeqLrJsNwlwuMCO4QTbNxIrj-vJeQIBsxKrjhJmY5quDKO8vqF-v5WfZYJPo88AOPuVwkT8X8" alt="Morreu o artista Nagrelha dos Lambas “Estado Maior do Kuduro”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morreu esta sexta-feira o kudurista Nagrelha (dos Lambas), no Hospital Cardeal Dom Alexandre do Nascimento, em Luanda, vítima de cancro do pulmão, seg...</p></div>
            </div>
        </a>
        </Template></>;
}