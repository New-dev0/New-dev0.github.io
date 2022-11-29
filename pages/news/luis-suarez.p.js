import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Luis suarez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Luis suarez"/>
        <meta name="description" content="Trending News about Luis suarez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Luis suarez</h1>
            <Image width={800} height={500} src="https://static.gazetaesportiva.com/uploads/imagem/2022/11/28/cristiano-ronaldo_suarez.jpg" alt="Luis suarez"/>
            <h3>Recent News</h3>
            <a href='https://www.gazetaesportiva.com/copa-do-mundo/cristiano-ronaldo-x-luis-suarez-artilheiros-se-enfrentam-pela-12a-vez/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo x Luis Suárez: artilheiros se enfrentam pela 12ª vez</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8m6cLKY_SGC3a52QV-PLAiTA_YG890V_SomAMAXgzP6Ntk7rVbyyg-Jd3FvQOu5fXtFc9f97I" alt="Cristiano Ronaldo x Luis Suárez: artilheiros se enfrentam pela 12ª vez" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atacantes Cristiano Ronaldo e Luis Suárez se reencontram no Catar em Portugal x Uruguai com um grande histórico de confrontos.</p></div>
            </div>
        </a>
        </Template></>;
}