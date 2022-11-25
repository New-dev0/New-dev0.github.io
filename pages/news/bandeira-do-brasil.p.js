import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bandeira do Brasil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bandeira do Brasil"/>
        <meta name="description" content="Trending News about Bandeira do Brasil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bandeira do Brasil</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/24/856502719-11-24-report-sennabandeira.jpg" alt="Bandeira do Brasil"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/automobilismo/formula1/como-a-comemoracao-de-senna-com-a-bandeira-do-brasil-surgiu-por-causa-da-copa,52a0555aff210a912d3050bcb98a7e6ern4w6qle.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como a comemoração de Senna com a bandeira do Brasil surgiu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaqiLY-zoJThBt6Au_NXXIzNcvFp45hxaPCsQO0oNk1n6-WpcKD3gYitijITPStphyhZmKGztX" alt="Como a comemoração de Senna com a bandeira do Brasil surgiu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durante a Copa do Mundo de 1986, Ayrton Senna quis responder aos franceses por conta da derrota brasileira e inventou uma tradição.</p></div>
            </div>
        </a>
        </Template></>;
}