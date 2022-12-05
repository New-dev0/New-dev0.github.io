import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Saka</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Saka"/>
        <meta name="description" content="Trending News about Saka" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Saka</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/YrZBDNR-UiS-QlrpuUbMZEBkXRU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/r/5/PBAZtsReOCjszaNL2JDA/2022-11-21t143432z-912663723-up1eibl14hhpr-rtrmadp-3-soccer-worldcup-eng-irn-report.jpg" alt="Saka"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/inglaterra/noticia/2022/12/04/quem-e-saka-promessa-ja-foi-eleita-melhor-da-inglaterra-e-ate-hoje-agradece-david-luiz.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Saka? Promessa já foi eleita melhor da Inglaterra e até hoje ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1Ldftjsxb7wDKNXfwWL16iEWWzaJi0iR_Wt37v0WfmGXlIjyHDJsUYTM7Lbrugs1txv7-K6pa" alt="Quem é Saka? Promessa já foi eleita melhor da Inglaterra e até hoje ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meia foi companheiro do zagueiro brasileiro no Arsenal e tem dois gols na Copa.</p></div>
            </div>
        </a><a href='https://br.bolavip.com/flamengo/Ele-e-um-cara-muito-bom-Saka-esquece-Arrascaeta-e-manda-a-real-sobre-outro-craque-do-Flamengo-20221204-0077.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ele é um cara muito bom&quot;; Saka &#39;esquece&#39; Arrascaeta e manda a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOCBfiQkzat6g7e--QckT7KdgPYMwiFOJG0R_EO5XANrhOVoS_pKzWJTev13XESdDyKmvYV3pq" alt="&quot;Ele é um cara muito bom&quot;; Saka &#39;esquece&#39; Arrascaeta e manda a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao ser questionado em entrevista, o inglês não pensou duas vezes antes de fazer elogios ao titular do Rubro-Negro.</p></div>
            </div>
        </a>
        </Template></>;
}