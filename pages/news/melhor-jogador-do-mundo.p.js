import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Melhor jogador do mundo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Melhor jogador do mundo"/>
        <meta name="description" content="Trending News about Melhor jogador do mundo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Melhor jogador do mundo</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/26/img_5537-uv5toeot2o1h.jpg" alt="Melhor jogador do mundo"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/futebol/copa-2022/com-bandeira-da-argentina-torcedor-diz-que-cr7-e-o-melhor-do-mundo-e-revela-torcida-por-portugal,c081c34dce1cbf8250c6ec2ee76e6a9b4whucfc8.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com bandeira da Argentina, torcedor diz que CR7 é o melhor do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzjSAqVZ6gJO-QFkYoQ8EKfb2pbmxccf5D-CHRlE6ohj4PqoNzoMjnk5yUg5cfNFqO_jsNMjzM" alt="Com bandeira da Argentina, torcedor diz que CR7 é o melhor do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indiano mostrou que tinha uma camiseta da seleção europeia embaixo da blusa vermelha na porta do estádio de Lusail.</p></div>
            </div>
        </a>
        </Template></>;
}