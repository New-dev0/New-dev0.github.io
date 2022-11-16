import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Reuters</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Reuters"/>
        <meta name="description" content="Trending News about Reuters" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Reuters</h1>
            <Image width={800} height={500} src="" alt="Reuters"/>
            <h3>Recent News</h3>
            <a href='https://economia.uol.com.br/noticias/reuters/2022/11/15/fluxo-no-oleoduto-druzhba-e-suspenso-em-partes-do-leste-europeu.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fluxo no oleoduto Druzhba é suspenso em partes do Leste Europeu</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Fluxo no oleoduto Druzhba é suspenso em partes do Leste Europeu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por Krisztina Than e Jan Lopatka BUDAPESTE/PRAGA (Reuters) - O fornecimento de petróleo para partes do Leste Europeu e da Europa Central por meio de uma&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}