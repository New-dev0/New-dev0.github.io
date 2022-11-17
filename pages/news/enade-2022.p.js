import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enade) 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enade) 2022"/>
        <meta name="description" content="Trending News about Enade) 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enade) 2022</h1>
            <Image width={800} height={500} src="https://www.ufms.br/wp-content/uploads/2022/11/Confraternizacao_Enade_2022_Portal.jpg" alt="Enade) 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.ufms.br/esquenta-para-o-enade-2022-tem-atracao-musical-e-entrega-de-kits/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esquenta para o Enade 2022 tem atração musical e entrega de kits ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRppne_sRxx7fMl81YBNLmNRcr3nhSnKHeftwMeHisNGiWQiiXtxayFHq7RpAW7W1p6eF68t2Jm" alt="Esquenta para o Enade 2022 tem atração musical e entrega de kits ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cerca de 600 estudantes da UFMS devem fazer a prova e, no esquenta para a data, os concluintes da graduação serão recebidos com uma confraternização nas Quadras&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}