import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Iran</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Iran"/>
        <meta name="description" content="Trending News about Iran" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Iran</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/entretenimento/0d/2022/11/25/a-fazenda-2022-babi-se-emociona-com-a-decoracao-da-festa-e-e-consolada-por-iran-1669429917753_v2_615x300.jpg" alt="Iran"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/splash/noticias/2022/11/25/babi-se-emociona-com-decoracao-de-festa-e-iran-diz-isso-tudo-e-para-voce.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babi se emociona com decoração de festa e Iran diz: &#39;Isso tudo é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIZlorpkczyelB81BTNN4hpXl5jF3UIp3tb8knWq9EM6YDUV2llCl6VcBDcS7JoPNA7lj_1zo8" alt="Babi se emociona com decoração de festa e Iran diz: &#39;Isso tudo é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bárbara se emocionou ao ver a decoração da décima festa de A Fazenda 2022 e Iran a consolou. Confira.</p></div>
            </div>
        </a>
        </Template></>;
}