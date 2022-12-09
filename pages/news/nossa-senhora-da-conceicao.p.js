import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nossa Senhora da conceicao</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nossa Senhora da conceicao"/>
        <meta name="description" content="Trending News about Nossa Senhora da conceicao" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nossa Senhora da conceicao</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/loe6_vcjItAejS18vHbCmy4jIPY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/R/y/o41cAvQP6AWe8RrhPvKA/4.jpg" alt="Nossa Senhora da conceicao"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/ba/bahia/noticia/2022/12/08/entenda-por-que-na-bahia-nossa-senhora-da-conceicao-e-da-praia.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entenda por que, na Bahia, Nossa Senhora da Conceição é &#39;da Praia&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpNLN6DW-OQDnGIHKTs4w5auLHzyQXEAwVdYCJYTGRU1usITV3gehF1-OHdso1vegHyfo1kbTn" alt="Entenda por que, na Bahia, Nossa Senhora da Conceição é &#39;da Praia&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Imaculada Nossa Senhora recebeu, ao longo do tempo, várias denominações da Igreja Católica – todas elas com base no local ou circunstância em que apareceu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}