import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enade</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enade"/>
        <meta name="description" content="Trending News about Enade" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enade</h1>
            <Image width={800} height={500} src="https://www.ufms.br/wp-content/uploads/2022/11/Confraternizacao_Enade_2022_Portal.jpg" alt="Enade"/>
            <h3>Recent News</h3>
            <a href='https://www.ufms.br/esquenta-para-o-enade-2022-tem-atracao-musical-e-entrega-de-kits/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esquenta para o Enade 2022 tem atração musical e entrega de kits ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRppne_sRxx7fMl81YBNLmNRcr3nhSnKHeftwMeHisNGiWQiiXtxayFHq7RpAW7W1p6eF68t2Jm" alt="Esquenta para o Enade 2022 tem atração musical e entrega de kits ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cerca de 600 estudantes da UFMS devem fazer a prova e, no esquenta para a data, os concluintes da graduação serão recebidos com uma confraternização nas Quadras&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gov.br/inep/pt-br/assuntos/noticias/enade/preenchimento-do-questionario-do-estudante-vai-ate-26-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preenchimento do Questionário do Estudante vai até 26/11</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Preenchimento do Questionário do Estudante vai até 26/11" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Instrumento é utilizado para contextualizar os resultados da prova e subsidiar os processos de avaliação de cursos e instituições de educação superior.</p></div>
            </div>
        </a>
        </Template></>;
}