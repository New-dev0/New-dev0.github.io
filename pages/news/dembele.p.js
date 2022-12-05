import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dembele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dembele"/>
        <meta name="description" content="Trending News about Dembele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dembele</h1>
            <Image width={800} height={500} src="https://bolavip.com/__export/1670176802808/sites/bolavip/img/2022/12/04/gettyimages-1445759233_crop1670176802006.jpg_242310155.jpg" alt="Dembele"/>
            <h3>Recent News</h3>
            <a href='https://br.bolavip.com/corinthians/Qatar-2022-Melhor-que-qualquer-jogador-do-Corinthians-Fiel-ignora-Mbappe-e-pede-a-Duilio-a-contratacao-de-outro-titular-de-Deschamps-20221204-0080.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022: “Melhor que qualquer jogador do Corinthians”; Fiel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQpv7kcr0pQ1JV3QYgDCDt7BQpoBjI0f6fbuhHEcsa9HFHt2NeHdy5nfk1maRSU0JLQIgktb8Mq" alt="Qatar 2022: “Melhor que qualquer jogador do Corinthians”; Fiel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador vem fazendo uma boa campanha com a França, que está nas quartas de final da Copa do Mundo.</p></div>
            </div>
        </a>
        </Template></>;
}