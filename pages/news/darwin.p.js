import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Darwin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Darwin"/>
        <meta name="description" content="Trending News about Darwin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Darwin</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/tsf/image.jpg?brand=TSF&type=generate&guid=d13cad70-ad95-4ab7-ab60-1d7c7c8780c8&w=800&h=420&watermark=true&t=20221128143300" alt="Darwin"/>
            <h3>Recent News</h3>
            <a href='https://www.tsf.pt/desporto/darwin-vai-marcar-um-golo-contra-portugal-15395279.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Darwin vai marcar um golo contra Portugal&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcBPy9pOoO86gptXDHr9g44qFcubRg_ASpRp00m-09GYelkHXGs10CsWuRK6hx2FTx9y8LzF-C" alt="&quot;Darwin vai marcar um golo contra Portugal&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eduardo Panasco vai cantar o hino português, mas vestir a camisola azul-celeste.</p></div>
            </div>
        </a><a href='https://visao.sapo.pt/exameinformatica/noticias-ei/ciencia-ei/2022-11-28-correspondencia-de-charles-darwin-disponivel-online/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Toda a correspondência de Charles Darwin está disponível online</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6FcNtcwE7KFE_bImZq-ro4xuElNV12Cq12dSx9xibNsR1rWFRnH9qSv1-QY1s_J6HpuSejduI" alt="Toda a correspondência de Charles Darwin está disponível online" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Universidade de Cambridge publica um espólio de mais de 15000 cartas escritas por Charles Darwin entre 1822 e 1882, incluindo importantes notas de rodapé e&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}