import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Estádio da Cidade da Educação</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Estádio da Cidade da Educação"/>
        <meta name="description" content="Trending News about Estádio da Cidade da Educação" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Estádio da Cidade da Educação</h1>
            <Image width={800} height={500} src="https://jovempan.com.br//jpimg.com.br/uploads/2018/04/logo-jovempan-black.png" alt="Estádio da Cidade da Educação"/>
            <h3>Recent News</h3>
            <a href='https://jovempan.com.br/podcasts/programas/jovem-pan-top-news/brasil-volta-a-campo-hoje-ao-meio-dia-para-mais-um-mata-mata-na-copa-do-catar-agora-contra-a-croacia-no-estadio-da-cidade-da-educacao.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil volta a campo hoje, ao meio-dia, para mais um mata-mata na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIy572f1dpKAzyAb7dx59Y6beLMp9H9V-GFXXbeeSWurIJUVA6jIFZH6Or0d-zEwJJgObgE1T7" alt="Brasil volta a campo hoje, ao meio-dia, para mais um mata-mata na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina garante vaga nas oitavas de final com vitória sobre a Polônia por 2 a 0, e torcida transforma Doha em Buenos Aires ... Bem-vindo! A JOVEM PAN usa&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}