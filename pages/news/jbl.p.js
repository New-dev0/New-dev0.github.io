import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>JBL</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,JBL"/>
        <meta name="description" content="Trending News about JBL" /></Head><Template>
            <h1 style={{fontSize: "30"}}>JBL</h1>
            <Image width={800} height={500} src="https://tm.ibxk.com.br/2022/11/25/25100157790054.jpg" alt="JBL"/>
            <h3>Recent News</h3>
            <a href='https://www.tecmundo.com.br/produto/254979-jbl-boombox-conheca-caixa-som-usada-richarlison-selecao.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JBL Boombox: conheça caixa de som usada por Richarlison da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPxHAyxCTrjjHmfEFi1opGJQgjNNHT3kszsKlc20ZOKLzw3aAGPLcw_rvMptTtFWs53h0Y6w45" alt="JBL Boombox: conheça caixa de som usada por Richarlison da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>E se o assunto é duração da bateria, o JBL Boombox 3 é elite! A tecnologia Low Energy Audio, aliada ao seu bluetooth 5.3, diminuiu o consumo de energia elétrica&nbsp;...</p></div>
            </div>
        </a><a href='https://adnews.com.br/jbl-apresenta-novos-embaixadores-da-marca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JBL apresenta novos embaixadores da marca</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjh_b6g40Q8q42OYM65_t4htoSzd7n-oe1NBCyVwrXAHwz-gY-yMJKU6whh-5STegs0tM1HzFDMA" alt="JBL apresenta novos embaixadores da marca" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inspirada na Geração Z e seu comportamento objetivo e autêntico, a JBL reuniu um time de peso, simbolizando o novo momento da marca no país.</p></div>
            </div>
        </a>
        </Template></>;
}