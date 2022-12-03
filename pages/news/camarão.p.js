import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Camarão</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Camarão"/>
        <meta name="description" content="Trending News about Camarão" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Camarão</h1>
            <Image width={800} height={500} src="https://www.diariodolitoral.com.br/application/themes/diariodolitoral.com.br/images/img-nada.jpg" alt="Camarão"/>
            <h3>Recent News</h3>
            <a href='https://www.diariodolitoral.com.br/colunistas/reporter-da-terra/dezembro-e-mes-de-altas-capturas-de-polvo-manjuba-camarao-rosa-pescada-e-badejo/1202/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dezembro é mês de altas capturas de polvo, manjuba, camarão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5sP0juUMl9X_CRbRmGmI_TZwu3us_b4s_yV9BKN-UdperEgZhGQd1G_LhEuXbNxoOeGfdMeTy" alt="Dezembro é mês de altas capturas de polvo, manjuba, camarão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tradicionalmente, dezembro é mês de fartura de badejos, camarão rosa, manjuba, namorado, pescada amarela e polvo nos terminais pesqueiros do Sul e do&nbsp;...</p></div>
            </div>
        </a><a href='https://cbnmaringa.com.br/noticia/petisco-para-assistir-o-jogo-do-amendoim-ao-camarao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petisco para assistir o jogo, do amendoim ao camarão.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsRrgFXVGcFxx6ewxdwOpZ9Sz5_XeJnp_z7-FmpOT7KdS95LgPQlxNMQdW9FQgbWC9WaWCcjg4" alt="Petisco para assistir o jogo, do amendoim ao camarão." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andrea Shima dá dicas e sugestões de culinária no CBN Gastronomia.</p></div>
            </div>
        </a>
        </Template></>;
}