import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Restaurante Solar dos Presuntos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Restaurante Solar dos Presuntos"/>
        <meta name="description" content="Trending News about Restaurante Solar dos Presuntos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Restaurante Solar dos Presuntos</h1>
            <Image width={800} height={500} src="https://media-manager.noticiasaominuto.com/1280/naom_637b5b29a7886.jpg" alt="Restaurante Solar dos Presuntos"/>
            <h3>Recent News</h3>
            <a href='https://www.noticiasaominuto.com/pais/2117319/solar-dos-presuntos-conta-de-9400-euros-nao-e-nem-de-costa-nem-de-lula'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Solar dos Presuntos. Conta de 9.400 euros não é nem de Costa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEnsES38aSRQAO_daD1FD5i2nPk_mz4TykiET_2uB08CzvpqqZbzgTpHZnDxWX2Cgd7-KgI_st" alt="Solar dos Presuntos. Conta de 9.400 euros não é nem de Costa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O talão de 9.400 euros, alegadamente, do restaurante Solar dos Presuntos, em Lisboa, não é de um almoço do primeiro-ministro, António Costa,&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/comprova/ultimas-noticias/2022/11/21/lula-nao-gastou-94-mil-euros-em-restaurante-portugues.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula não gastou 9,4 mil euros em restaurante português</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7-xjFGZrJTR-v1fNReQ1lrFoHzUZJpznTDUnUNERZEQmlOjFauxdUv_anNTw7pGWnAfpXSjSm" alt="Lula não gastou 9,4 mil euros em restaurante português" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>É falso que o presidente eleito tenha gastado 9,4 mil euros no restaurante Solar dos Presuntos, em Portugal, em 16 de novembro.</p></div>
            </div>
        </a><a href='https://www.novagente.pt/antonio-costa-polemica-fatura-de-10-mil-euros-verdade-sobre-o-jantar-do-primeiro-ministro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>António Costa - A polémica fatura de 10 mil euros. A verdade sobre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQE2wxm9KHos3YqdVgBiaQOuMn_9aPv8BRn9N1uHQo2PtDe81T10xz-B1FU7BLB-iLAqKddv7fS" alt="António Costa - A polémica fatura de 10 mil euros. A verdade sobre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um rumor nascido nas redes sociais dava conta que António Costa teria desembolsado perto de 10 mil euros num jantar no Solar dos Presuntos.</p></div>
            </div>
        </a><a href='https://oantagonista.uol.com.br/fact-checking/fake-lula-gastou-94-mil-euros-em-restaurante-em-lisboa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fake: Lula gastou 9,4 mil euros em restaurante em Lisboa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWLJw5Dbt9LfFhvc9ZFYPw0h_swUomRl4EpfC_KNBaWqbIgHa4x7jfd77UM9V-z88uHiuzMQIm" alt="Fake: Lula gastou 9,4 mil euros em restaurante em Lisboa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O recibo do pagamento de uma conta de 9,4 mil euros no restaurante Solar dos Presuntos, em Lisboa, Portugal, está sendo atribuído ao presidente eleito Lula&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}