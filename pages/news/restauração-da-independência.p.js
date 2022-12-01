import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Restauração da Independência</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Restauração da Independência"/>
        <meta name="description" content="Trending News about Restauração da Independência" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Restauração da Independência</h1>
            <Image width={800} height={500} src="https://pombaltv.pt/wp-content/uploads/2022/11/yoga-1146277_960_720.jpg" alt="Restauração da Independência"/>
            <h3>Recent News</h3>
            <a href='https://pombaltv.pt/2022/11/30/meirinhas-assinala-restauracao-da-independencia-com-vasto-programa-de-atividades/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meirinhas assinala Restauração da Independência com vasto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQFO10JXtujbKapbZ_eTqSbqvuBP3BPOKBDMzTsrcMytacMDXGLLP3_3F_Xfl_GO7VfN_FOAy4U" alt="Meirinhas assinala Restauração da Independência com vasto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Restauração da Independência, que se comemora no dia 1 de dezembro, será assinalada em Meirinhas com um vasto programa de atividades abertas à comunidade,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}