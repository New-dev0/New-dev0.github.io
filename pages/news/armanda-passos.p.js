import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Armanda Passos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Armanda Passos"/>
        <meta name="description" content="Trending News about Armanda Passos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Armanda Passos</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/armanda-passos-foto-fundacao-champlaimaud9389ba95_socialshare.jpg" alt="Armanda Passos"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/noticia/vida/2022/11/16/planeta-armanda-passos-em-exposicao-retrospetiva-na-champalimaud/308321/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Planeta Armanda Passos&quot; em exposição retrospetiva na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPyMmS4Lmt6GpfxZatB49FaC5jX7BMJgYGEkr9Eq9J_S245-TxHzra1b6wVvPDLRIt4C3jWcXg" alt="&quot;Planeta Armanda Passos&quot; em exposição retrospetiva na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pouco mais de um ano depois da morte da artista, a Fundação Champalimaud, em Lisboa, inaugura uma exposição retrospetiva. São 80 telas de Armanda Passos que&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}