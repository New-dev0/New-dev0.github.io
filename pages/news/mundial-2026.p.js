import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MUNDIAL 2026</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MUNDIAL 2026"/>
        <meta name="description" content="Trending News about MUNDIAL 2026" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MUNDIAL 2026</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/11/16/615x300/1_whatsapp_image_2022_11_16_at_08_03_15-22032296.jpeg" alt="MUNDIAL 2026"/>
            <h3>Recent News</h3>
            <a href='https://radiojornal.ne10.uol.com.br/esportes/2022/11/15124213-copa-de-2026-fifa-define-onde-sera-copa-do-mundo-de-2016-veja-cidades-e-pais.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COPA DE 2026: FIFA define onde será COPA DO MUNDO de 2026 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQkr0gIhmst1HDVNMGJ4ojv2yxHVrDmMFh5YSgSv2SOpEXU-zJRjcD6j3P1UpAii_laBrBCZtZ" alt="COPA DE 2026: FIFA define onde será COPA DO MUNDO de 2026 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em 2026, Copa do Mundo acontecerá em três países ao mesmo tempo e somará 48 seleções.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/mexico/noticia/2022/11/20/representante-do-mexico-vai-a-abertura-da-copa-do-catar-pensando-na-cerimonia-de-2026.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Representante do México, sede da próxima Copa, vê festa no Catar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBhIjKgHmOnzzr6bkKEs8kVhCkC_70tkyOUzmIgFbQLo2GRtuvOqJ5Kfc4V5C5eK2LCHqkSl9d" alt="Representante do México, sede da próxima Copa, vê festa no Catar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Político mexicano esteve em Doha buscando referências da cerimônia que pode ser feita pela terceira vez na história no estádio Azteca; México sediará&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}