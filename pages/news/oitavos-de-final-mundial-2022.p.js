import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Oitavos de final Mundial 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Oitavos de final Mundial 2022"/>
        <meta name="description" content="Trending News about Oitavos de final Mundial 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Oitavos de final Mundial 2022</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/6388ff330cf2aea7857fdc86/og/maisfutebol" alt="Oitavos de final Mundial 2022"/>
            <h3>Recent News</h3>
            <a href='https://maisfutebol.iol.pt/mundial-2022/oitavos-de-final/mundial-2022-data-e-hora-dos-jogos-dos-oitavos-de-final'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial 2022: data e hora dos jogos dos oitavos de final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSz1Kh6ScHsbLnYmnMWsQ6PPJwnLTlCcLFaByHdPp9GNJwtLPc-g6wxEmlWcb9fKzRDrNccF5-O" alt="Mundial 2022: data e hora dos jogos dos oitavos de final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Primeiro jogo, agendado para sábado, opõe Países Baixos aos Estados Unidos.</p></div>
            </div>
        </a>
        </Template></>;
}