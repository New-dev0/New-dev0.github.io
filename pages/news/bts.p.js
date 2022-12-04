import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BTS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BTS"/>
        <meta name="description" content="Trending News about BTS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BTS</h1>
            <Image width={800} height={500} src="https://imagens.publico.pt/imagens.aspx/1757058?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Impar.png" alt="BTS"/>
            <h3>Recent News</h3>
            <a href='https://www.publico.pt/2022/12/02/impar/noticia/jin-bts-faz-30-anos-domingo-inicia-recruta-13-dezembro-2030006'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jin, dos BTS da Coreia, faz 30 anos no domingo e inicia recruta a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8OErCMASkpDX5cx9SYIxHkmjfBO1Ig50v3W6IUvL-ekqdZnxrO0X6so6fEFT8dciR7E9RsNm6" alt="Jin, dos BTS da Coreia, faz 30 anos no domingo e inicia recruta a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de terem beneficiado de um adiamento com uma revisão de lei, os membros da banda de K-pop vão mesmo cumprir serviço militar obrigatório.</p></div>
            </div>
        </a><a href='https://www.dgabc.com.br/Noticia/3898448/jin-do-bts-completa-30-anos-de-idade-no-domingo-e-ganha-data-de-inicio-no-servico-militar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jin, do BTS, completa 30 anos de idade no domingo e ganha data ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Jin, do BTS, completa 30 anos de idade no domingo e ganha data ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parabéns! Kim Seok-Jin, do grupo sul-coreano BTS, já completou 30 anos de idade no país - isso porque o fuso-horário do país está 12 horas a frente do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}