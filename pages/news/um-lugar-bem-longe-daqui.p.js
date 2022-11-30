import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Um Lugar Bem Longe Daqui</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Um Lugar Bem Longe Daqui"/>
        <meta name="description" content="Trending News about Um Lugar Bem Longe Daqui" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Um Lugar Bem Longe Daqui</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/cFEVYvQEh2CmtFWxWyCJMS0Ps5g=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/f/q/k6LP11TYKX8ACc1OvGhw/where-the-crawdads-sing-justwatch-techtudo.jpg" alt="Um Lugar Bem Longe Daqui"/>
            <h3>Recent News</h3>
            <a href='https://www.techtudo.com.br/noticias/2022/11/um-lugar-bem-longe-daqui-veja-sinopse-trailer-elenco-e-onde-assistir-streaming.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Um Lugar Bem Longe Daqui: veja sinopse, trailer, elenco e onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZzscewyDig5ll1k8SFKPjAGeyQLaEBW4vnA3X4zoL52G0HcuN_dDI4_HzdFkfFyaY2S4b3Veu" alt="Um Lugar Bem Longe Daqui: veja sinopse, trailer, elenco e onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adaptação de best-seller americano está disponível no HBO Max. Produção que mescla drama e suspense tem canção original de Taylor Swift e produção de Reese&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/entretenimento/televisao/um-lugar-bem-longe-daqui-estreia-no-streaming-pela-hbo-max-saiba-mais'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Um Lugar Bem Longe Daqui estreia no streaming pela HBO Max ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSVjAGdnOHSfNI7EGkJoT_y8bty8lL7APeTNdOQ7Csg1tnaiQfkahB5AusYW33_kNDvUXbj8_l" alt="Um Lugar Bem Longe Daqui estreia no streaming pela HBO Max ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O elenco conta com Daisy Edgar-Jones, Taylor John Smith, Harris Dickinson, Ahna O&#39;Reilly e David Strathairn. A atriz Reese Witherspoon é uma das produtoras da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}