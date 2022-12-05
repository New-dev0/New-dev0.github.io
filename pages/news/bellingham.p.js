import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bellingham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bellingham"/>
        <meta name="description" content="Trending News about Bellingham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bellingham</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/Mundial2022/FotosDR/JackGrealishEnglandIGDR.jpg" alt="Bellingham"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-12-04/grealish-pode-ser-vendido-para-contratar-bellingham/967284'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grealish pode ser vendido para contratar Bellingham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSK70AjfOIljBhwCnwvP9Om8ic9_zVisNmk4XNRSzRXdgLVW4yb9fbZT_JAyF2_6cuLKAyBPtI" alt="Grealish pode ser vendido para contratar Bellingham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o portal de informação futebolística inglês Football Insider, o Manchester City estará a considerar vender Jack Grealish para obter os fundos&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/12/04/viralizou-empolgacao-com-volta-de-neymar-e-bellingham-rei-da-inglaterra.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viralizou: empolgação com volta de Neymar e Bellingham &quot;rei&quot; da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBH7x4egw0Pzzwz2h_gCcR3cIcjxCKCWyeRsGZtE3htDOlt7nXiw5aiM8AnV122bquy6pPNaKW" alt="Viralizou: empolgação com volta de Neymar e Bellingham &quot;rei&quot; da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veja o que mais chamou a atenção nas redes sociais durante este domingo de Copa do Mundo 2022.</p></div>
            </div>
        </a><a href='https://br.bolavip.com/futebol/Real-Madrid-define-valor-de-proposta-para-Bellingham-e-arma-alternativa-de-R-440-mi-Nao-pagara-mais-de...-20221204-0033.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid define valor de proposta para Bellingham e arma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQol6bT_lADgJF9TQ9eNiX3dDfl0JRu-PR5jkmh1VQoGLNg21p652WR2_unn7o3Dwm25PQD08dm" alt="Real Madrid define valor de proposta para Bellingham e arma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florentino Pérez decide quando deve pagar por prioridade e segunda opção para o meio de campo dos merengues.</p></div>
            </div>
        </a><a href='https://jogada10.com.br/manchester-city-disposto-a-abrir-mao-de-grealish-por-bellingham/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester City disposto a abrir mão de Grealish por Bellingham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRynpFmvKa9glRhwPN45CYnz6KgNaAcDMztye0K8HEfwg9Ql4pOwm0Vg-EM2zxTo8zfEdm5Mcfu" alt="Manchester City disposto a abrir mão de Grealish por Bellingham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Manchester City (ING) cresceu os olhos sobre Bellingham, meia que se destaca pela Inglaterra nesta Copa do Mundo e pertence ao Borussia Dortmund (ALE).</p></div>
            </div>
        </a>
        </Template></>;
}