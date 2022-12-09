import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marco Paulo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marco Paulo"/>
        <meta name="description" content="Trending News about Marco Paulo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marco Paulo</h1>
            <Image width={800} height={500} src="https://cdn.flash.pt/images/2021-06/img_1200x676$2021_06_13_16_48_13_279080_im_637652378337490136.png" alt="Marco Paulo"/>
            <h3>Recent News</h3>
            <a href='https://www.flash.pt/celebridades/nacional/detalhe/marco-paulo-provou-do-proprio-veneno-e-foi-metido-na-ordem-por-ana-marques-e-jose-figueiras-na-sic'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marco Paulo provou do próprio &quot;veneno&quot; e foi metido na ordem por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBbvN4cl-kLsc1S-c8Gfmv-KDT1wbwjyZx062Xf0CU4I-1fqC7l9xAKQNTR9bCnaDsvc7eAS5c" alt="Marco Paulo provou do próprio &quot;veneno&quot; e foi metido na ordem por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marco Paulo tentou dominar o &#39;Alô Portugal&#39; e levou reprimenda de Ana Marques, que muitas vezes tem sido alegadamente inferiorizada no programa do cantor.</p></div>
            </div>
        </a><a href='https://www.novagente.pt/marco-paulo-mete-os-pes-pelas-maos-no-programa-da-sic-e-e-obrigado-pedir-desculpa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marco Paulo - Mete &#39;os pés pelas mãos&#39; no programa da SIC e é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-oKYQK4TNDCBDZOHUvrG1wG0kpkV_ir4fCZwHN2AjvkRhAMotdh5ys2dduTGojk_IMSewHBcV" alt="Marco Paulo - Mete &#39;os pés pelas mãos&#39; no programa da SIC e é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marco Paulo voltou a protagonizar um momento polémico na SIC. O cantor não gostou de ser interrompido por José Figueiras e Ana Marques acabou por pôr tudo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maria.pt/noticias-e-tv/marco-paulo-esteve-no-alo-portugal-e-acabou-a-pedir-desculpa-a-ana-marques-e-jose-figueiras/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marco Paulo esteve no Alô Portugal e acabou a pedir desculpa a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFAYt5G9LBwZjdG6MpPqh_l8EMt7aEOpNLaaRRadhaFjyPso_GzqebU_uWwd_o8w1jCW2Runzz" alt="Marco Paulo esteve no Alô Portugal e acabou a pedir desculpa a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marco Paulo não gostou de ser interrompido por José Figueiras no Alô Portugal, SIC. Ana Marques acabou por pôr tudo em pratos limpos.</p></div>
            </div>
        </a><a href='https://www.hiper.fm/oops-marco-paulo-colocado-no-lugar-por-ana-marques-e-jose-figueiras-este-e-o-nosso-programa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oops! Marco Paulo colocado &#39;no lugar&#39; por Ana Marques e José ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsQQFgoGYrAuVFKkwNcoYSqWOwPgpUvilvvAW147Ac4f7qfr1ZJKsuV0qqiCSMCbcSGOsoxXBB" alt="Oops! Marco Paulo colocado &#39;no lugar&#39; por Ana Marques e José ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta quinta-feira, dia 08 de dezembro, Marco Paulo esteve presente no programa &#39;Alô Portugal&#39;, da SIC. José Figueiras e Ana Marques receberam o artista&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/sic/ups-marco-paulo-leva-resposta-de-ana-marques-e-jose-figueiras-este-e-o-nosso-programa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ups! Marco Paulo leva resposta de Ana Marques e José Figueiras ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2H3SEXEcvS1rLewG5wZ5hS39XU7ZUvn3lYOmwWdutaAukyihy336Scl5QCPsXN9WkfNJOeDgu" alt="Ups! Marco Paulo leva resposta de Ana Marques e José Figueiras ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na manhã desta quinta-feira, dia 8 de dezembro, Marco Paulo esteve no programa &#39;Alô Portugal&#39;, da SIC. O cantor promoveu o seu regresso aos palcos, uma vez.</p></div>
            </div>
        </a>
        </Template></>;
}