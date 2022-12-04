import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Valladolid</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Valladolid"/>
        <meta name="description" content="Trending News about Valladolid" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Valladolid</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=56637559-f608-441c-bd9c-cb1bcebb4dc4&w=800&h=420&watermark=true&t=20221203190800" alt="Valladolid"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/internacional/cartas-armadilhadas-foram-enviadas-de-valladolid-15422861.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cartas armadilhadas foram enviadas de Valladolid</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQM8_WM8XJbHy-csMfCfDrJT3drEY9FSEzfbQ50Ds05Nuge7YS5sC7-8B7y92QKhOYiFXWyyHpj" alt="Cartas armadilhadas foram enviadas de Valladolid" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polícia identificou a origem, mas não o responsável pelo envio de seis envelopes a entidades do Estado espanhol, caso do primeiro-ministro, e às embaixadas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/mundo/cartas-com-explosivos-foram-enviadas-da-cidade-espanhola-de-valladolid-15422791.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cartas com explosivos foram enviadas da cidade espanhola de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbtM6UHbLd1ocqN6CcPe2UHjDXAsxhhD1aeeYcMh-EYefKL981mW7eOWUwCQLtE1YycML0ys6y" alt="Cartas com explosivos foram enviadas da cidade espanhola de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As autoridades concluíram que as cartas com material explosivo enviadas para várias entidades espanholas saíram da cidade de Valladolid.</p></div>
            </div>
        </a><a href='https://expresso.pt/internacional/2022-12-03-Espanha-encomendas-armadilhadas-com-origem-em-Valladolid-367e0ef0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha: encomendas armadilhadas com origem em Valladolid</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSST0n_Wg4pLv1L4cKIOBYZxFQK0kzjPlofoOE5DXgWiZTW7XrPaQGGn2KvdrHM-BATSA_DL8ff" alt="Espanha: encomendas armadilhadas com origem em Valladolid" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Investigadores espanhóis admitem que as cartas-bomba tenham origem naquela cidade do norte de Espanha e que tenham um único responsável.</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundo/espanha-cartas-armadilhadas-foram-enviadas-a-partir-de-valladolid_v1451249'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha. Cartas armadilhadas foram enviadas a partir de Valladolid</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRBDInsQdEDPBp0F-dMg5y7JEnt7MU8DrD-gvnlcVw2ahTXZiNhwhsnlzGdmC5QeU7l_tu6XyVK" alt="Espanha. Cartas armadilhadas foram enviadas a partir de Valladolid" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foram até agora 17 as embaixadas e missões diplomáticas espalhadas pelo mundo que receberam cartas armadilhadas ou ensanguentadas.</p></div>
            </div>
        </a><a href='https://observador.pt/2022/12/03/policia-espanhola-localiza-cidade-de-origem-das-cartas-com-explosivos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polícia espanhola localiza cidade de origem das cartas com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuXoo6JSHRTjMZJfIymlqMRN-WhlniTAprq76kS0UD-tu_XiYi260xdxZsigk10iL26oGxcG4N" alt="Polícia espanhola localiza cidade de origem das cartas com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autoridades ainda não conseguiram identificar o responsável pelas cartas com explosivos entregues em Espanha, mas sabem que Valladolid está na origem da&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/atualidade/artigos/policia-espanhola-identifica-cidade-de-origem-das-cartas-armadilhadas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polícia espanhola identifica cidade de origem das cartas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSig-f6NQH4eWpXmmw_HnBiSiYLn9OpYvpYNQLOTnujkQqxJm_MpwYNwPbSoDPHvTglYghBsUUQ" alt="Polícia espanhola identifica cidade de origem das cartas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A polícia espanhola sabe que as cartas armadilhadas tiveram origem na cidade de Valladolid, mas não foi identificado o responsável....</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/mundo/2022-12-03-Espanha-ja-se-sabe-de-onde-foram-enviados-os-envelopes-armadilhados-31075f43'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha: já se sabe de onde foram enviados os envelopes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZxCm_w-vFlWaJQq1Q_nsG_nav1F4MW1qpVisBL2Evm3SixeSthuGFrE3deJY15ul1YR9bQq3W" alt="Espanha: já se sabe de onde foram enviados os envelopes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A polícia espanhola diz que os seis pacotes armadilhados que chegaram a representações diplomáticas e Ministérios foram enviados da cidade de Valladolid.</p></div>
            </div>
        </a>
        </Template></>;
}