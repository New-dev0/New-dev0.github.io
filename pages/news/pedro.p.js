import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pedro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pedro"/>
        <meta name="description" content="Trending News about Pedro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pedro</h1>
            <Image width={800} height={500} src="https://colunadofla.com/wp-content/uploads/2022/11/pedro-treino-selecao-brasileira-1.jpg" alt="Pedro"/>
            <h3>Recent News</h3>
            <a href='https://colunadofla.com/2022/12/pedro-e-everton-ribeiro-tem-data-para-desembarcar-no-brasil-apos-eliminacao-na-copa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedro e Everton Ribeiro têm data para desembarcar no Brasil após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8zIRw_Kv9YtQl7tLcR8UVGF-xBP2AyNLPa08m-AHuuetDTF46BIqEyHfJOlZWrw92td6XxzgW" alt="Pedro e Everton Ribeiro têm data para desembarcar no Brasil após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pedro e Everton Ribeiro terão férias após desclassificação na Copa do Mundo Depois de uma temporada inesquecível, com os títulos da Copa do Brasil e Maior&nbsp;...</p></div>
            </div>
        </a><a href='https://ww4.al.rs.gov.br/index.php/noticia/329928'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Solenidade no Theatro São Pedro marca a entrega dos prêmios ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTV3HMwvjGD7fn0BI4na_8X8ex9qvoAwJx-MajXEQmpFb_-Yuq8JapIGxwnVYCBf5029Hxxg1PL" alt="Solenidade no Theatro São Pedro marca a entrega dos prêmios ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Prêmio Vitor Mateus Teixeira (Teixeirinha) foi instituído por meio da Resolução 2.708, de 19 de agosto de 1997, em homenagem ao músico, cantor, compositor e&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}