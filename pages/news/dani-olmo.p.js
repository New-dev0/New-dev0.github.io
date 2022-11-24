import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dani Olmo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dani Olmo"/>
        <meta name="description" content="Trending News about Dani Olmo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dani Olmo</h1>
            <Image width={800} height={500} src="https://medias.itatiaia.com.br/generic/contra-a-costa-rica-dani-olmo-marcou-o-centesimo-gol-da-espanha-em-copas-do-mundo-c508f0c0-8836-4e06-8896-c7f9df2daed9.large.jpg" alt="Dani Olmo"/>
            <h3>Recent News</h3>
            <a href='https://www.itatiaia.com.br/editorias/esportes/2022/11/23/dani-olmo-marca-100-gol-da-espanha-em-copas-do-mundo-brasil-atingiu-o-feito-com-pele-em-1970'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dani Olmo marca 100º gol da Espanha em Copas do Mundo; Brasil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjai2qpblQmjumFE2b6g8PPFn9DPwWGTA4gkRUnJFvybU3livH53Srjq2oTQqgpS_L5m6uzHpj" alt="Dani Olmo marca 100º gol da Espanha em Copas do Mundo; Brasil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enquanto a Espanha aplicou a sexta maior goleada da história das estreias em Copas do Mundo, Brasil chegou ao 100º gol em Mundiais na final de 1970,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}