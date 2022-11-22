import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sport TV</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sport TV"/>
        <meta name="description" content="Trending News about Sport TV" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sport TV</h1>
            <Image width={800} height={500} src="https://marketeer.sapo.pt/wp-content/uploads/2022/11/guilty-stadium.png" alt="Sport TV"/>
            <h3>Recent News</h3>
            <a href='https://marketeer.sapo.pt/tem-olho-para-o-jogo-restaurantes-olivier-e-sportv-tv-voltam-a-dar-mensalidades/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tem olho para o jogo? Restaurantes Olivier e Sportv TV voltam a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGCRU_-tTN0YRF3HEgwOiAikbIxKLDHGpbTpvJjEzgTZXMdjWIpAbNZHIjuvEk8iRXiK1fvkou" alt="Tem olho para o jogo? Restaurantes Olivier e Sportv TV voltam a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Preparados para acolher em Lisboa e no Porto os adeptos no Campeonato do Mundo de Futebol, o Grupo Olivier Restaurantes, em parceria com a Sport TV e a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}