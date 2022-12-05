import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Iansã</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Iansã"/>
        <meta name="description" content="Trending News about Iansã" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Iansã</h1>
            <Image width={800} height={500} src="https://www.canoas.rs.gov.br/wp-content/uploads/2021/07/santuário-sincrético_gustavo-garbino-5-1024x683.jpg" alt="Iansã"/>
            <h3>Recent News</h3>
            <a href='https://www.canoas.rs.gov.br/noticias/canoas-celebra-o-dia-da-orixa-iansa-como-data-oficial-do-municipio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Canoas celebra o dia da Orixá Iansã como data oficial do Município ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_cDvhCuPm4hq8e7JWyMbjdNGwN91ZgrJuqK_Mfv1i2rnqM7HU1IkSW-KePVAQGjWo1YxtvL5c" alt="Canoas celebra o dia da Orixá Iansã como data oficial do Município ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neste domingo, 4 de dezembro, as comunidades religiosas de matriz africana comemoram em Canoas, pela primeira vez, o dia da orixá Oyá, ou Iansã.</p></div>
            </div>
        </a>
        </Template></>;
}