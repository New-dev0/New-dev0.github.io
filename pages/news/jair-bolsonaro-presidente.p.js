import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jair Bolsonaro presidente</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jair Bolsonaro presidente"/>
        <meta name="description" content="Trending News about Jair Bolsonaro presidente" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jair Bolsonaro presidente</h1>
            <Image width={800} height={500} src="https://media.gazetadopovo.com.br/2022/10/31161600/WhatsApp-Image-2022-07-07-at-16.46.57-300x214.jpeg" alt="Jair Bolsonaro presidente"/>
            <h3>Recent News</h3>
            <a href='https://www.gazetadopovo.com.br/republica/jair-bolsonaro-eleicoes-presidente/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O que explica o silêncio do presidente Jair Bolsonaro após as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQodxpbg5O1SC9_QvgkvW7DVgo9FHPC3XX3LD6afGcCWhPhFyUExSjqSm4vCPWUlLNmYN7A9l0m" alt="O que explica o silêncio do presidente Jair Bolsonaro após as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Episódio do podcast 15 Minutos fala sobre o silêncio do presidente Jair Bolsonaro (PL) desde o fim da eleição. Ouça na Gazeta do Povo.</p></div>
            </div>
        </a>
        </Template></>;
}