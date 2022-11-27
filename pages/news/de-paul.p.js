import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>De Paul</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,De Paul"/>
        <meta name="description" content="Trending News about De Paul" /></Head><Template>
            <h1 style={{fontSize: "30"}}>De Paul</h1>
            <Image width={800} height={500} src="https://whiplash.net/imagens_promo_22/kikozambianchi_promo.jpg" alt="De Paul"/>
            <h3>Recent News</h3>
            <a href='https://whiplash.net/materias/news_713/347219-kikozambianchi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que Kiko Zambianchi rejeitou próprio sucesso mesmo após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWy1XzaxhP8fvMfvC8Hk9zLGi4qfROl_ADQ48Nv4qbxBbpBrtoy9FeYbr7_MxssRTvSfRxDtJD" alt="Por que Kiko Zambianchi rejeitou próprio sucesso mesmo após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O megahit &quot;Hey Jude&quot;, dos Beatles, é um dos maiores sucessos da banda britânica e foi regravado por Kiko Zambianchi, em uma versão em português.</p></div>
            </div>
        </a><a href='https://igormiranda.com.br/2022/11/steven-tyler-paul-mccartney-mictorio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A curiosa ocasião em que Steven Tyler e Paul McCartney se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3znJO2_8eYsUDQrjIpiYtiUbmFkzIr60zDpQZ6aUB4HqjWDk0Hsq0LDntkZAF46qUuTL9sJ1C" alt="A curiosa ocasião em que Steven Tyler e Paul McCartney se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista à revista Uncut em 2007, o frontman do Aerosmith explicou como se deu a interação em uma lendária casa de shows de Londres. “Estava urinando no&nbsp;...</p></div>
            </div>
        </a><a href='https://comoinvestir.thecap.com.br/paul-samuelson-o-homem-que-ajudou-a-economia-a-se-tornar-uma-ciencia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paul Samuelson, o Homem que Ajudou a Economia a se Tornar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSfNGf5bTOTw_fhcx4NEbN7fNOosdZfq3zkIGbXAw-w-DgzZ1BpNfkXSyvtUnnoIL-WAnnY_NeF" alt="Paul Samuelson, o Homem que Ajudou a Economia a se Tornar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quem é Paul Samuelson? Conheça a trajetória do homem que ajudou a economia a se tornar uma ciência, e se tornou um dos economistas mais influentes do século&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}