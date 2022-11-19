import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arouca FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arouca FC"/>
        <meta name="description" content="Trending News about Arouca FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arouca FC</h1>
            <Image width={800} height={500} src="https://media.gazetadopovo.com.br/sites/3/2022/11/18111421/treino-parana-140-albari-rosa-ag-br-1668780826223-660x372.jpg" alt="Arouca FC"/>
            <h3>Recent News</h3>
            <a href='https://www.umdoisesportes.com.br/parana-clube/joao-basso-parana-destaque-arouca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Revelação do Paraná tem se destacado no futebol português</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzrh7GR2TNf0Yho5QP_ybmaF1B0wGnei9VKwQEYE21s_iCinuIQRGidbQafh4ElIZxZBB1DSX7" alt="Revelação do Paraná tem se destacado no futebol português" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Revelado pelo Paraná, o zagueiro João Basso hoje é destaque na primeira divisão do Campeonato Português. Leia mais no UmDois Esportes!</p></div>
            </div>
        </a>
        </Template></>;
}