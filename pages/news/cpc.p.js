import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>CPC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,CPC"/>
        <meta name="description" content="Trending News about CPC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>CPC</h1>
            <Image width={800} height={500} src="https://www.saude.ce.gov.br/wp-content/uploads/sites/9/2022/11/IMG_9711-1.jpg" alt="CPC"/>
            <h3>Recent News</h3>
            <a href='https://www.saude.ce.gov.br/2022/11/22/cancer-infantojuvenil-hospital-infantil-albert-sabin-e-referencia-em-diagnostico-precoce-e-tratamento/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Câncer infantojuvenil: Hospital Infantil Albert Sabin é referência em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBneZ9MmWWcsOeBOeH52JpCl1bSGjJlC-WZRUyahfq_JivT7gIdQBhijL7SRo4THYNADIVaNe7" alt="Câncer infantojuvenil: Hospital Infantil Albert Sabin é referência em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Centro Pediátrico do Câncer, estrutura do Hias, acolhe, por ordem de chegada, pacientes de todo o Ceará encaminhados por profissionais de qualquer nível de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}