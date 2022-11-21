import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Moreirense</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Moreirense"/>
        <meta name="description" content="Trending News about Moreirense" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Moreirense</h1>
            <Image width={800} height={500} src="https://cdn.record.pt/images/2022-11/img_1200x676$2022_11_21_00_13_57_2064734.jpg" alt="Moreirense"/>
            <h3>Recent News</h3>
            <a href='https://www.record.pt/futebol/futebol-feminino/detalhe/moreirense-benfica-0-17-bastou-a-aguia-acelerar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moreirense-Benfica, 0-17: bastou à aguia acelerar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYZXUaGKsvLlJhmxLxFppA2KZPn2tzcaaEUqAP5UoDBjnQo3Mod4i8DkL8Med0CeeQXAwtwijv" alt="Moreirense-Benfica, 0-17: bastou à aguia acelerar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foi com naturalidade que o Benfica garantiu o apuramento para os oitavos-de-final da Taça de Portugal. A expressiva goleada imposta ao Moreirense,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}