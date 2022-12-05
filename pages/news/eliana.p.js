import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eliana</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eliana"/>
        <meta name="description" content="Trending News about Eliana" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eliana</h1>
            <Image width={800} height={500} src="" alt="Eliana"/>
            <h3>Recent News</h3>
            <a href='https://www.sbt.com.br/auditorio/eliana/fiquepordentro/232382-eliana-revela-se-ainda-e-amiga-de-xuxa-e-angelica-ou-nao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eliana revela se ainda é amiga de Xuxa e Angélica ou não</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCnv5GjtwrAcWt7nJTQUzufGEmanB1jCymJ-WJP5kNK40DMklyfWgvAFBWJurt-RvjE3jt3WME" alt="Eliana revela se ainda é amiga de Xuxa e Angélica ou não" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neste domingo (04), o Programa Eliana foi para Maldivas comemorar o aniversário de 50 anos da nossa apresentadora e aproveitamos o momento para fazer com que&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}