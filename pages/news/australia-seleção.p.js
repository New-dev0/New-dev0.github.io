import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Australia seleção</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Australia seleção"/>
        <meta name="description" content="Trending News about Australia seleção" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Australia seleção</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/_layout/v3/logoUOL2021/default-share/esporte.png" alt="Australia seleção"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/lancepress/2022/12/04/messi-recebeu-premio-de-melhor-em-campo-das-maos-de-popular-cantor-argentino.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi recebeu prêmio de melhor em campo das mãos de popular ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Messi recebeu prêmio de melhor em campo das mãos de popular ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após marcar um belo gol e brilhar na vitória da Argentina sobre a Austrália por 2 a 1, pelas oitavas de final da Copa do Mundo, o craque Lionel Messi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}