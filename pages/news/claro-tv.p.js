import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Claro tv</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Claro tv"/>
        <meta name="description" content="Trending News about Claro tv" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Claro tv</h1>
            <Image width={800} height={500} src="https://www.correiodosmunicipios-al.com.br/wp-content/uploads/2022/11/WhatsAppImage20221121at14.22.49.jpeg" alt="Claro tv"/>
            <h3>Recent News</h3>
            <a href='https://www.correiodosmunicipios-al.com.br/2022/11/claro-fibra-chega-arapiraca-com-banda-larga-de-ultravelocidade-com-ate-1-giga-e-o-melhor-do-conteudo-em-todas-as-telas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Claro Fibra chega a Arapiraca com banda larga de ultravelocidade ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxRd14CVQ2IhXDH-zD77aq5iWp2PbTQIxLieDnZ5_3FUtkh515ggBq4lOYiJiprRk4tlE2AFPy" alt="Claro Fibra chega a Arapiraca com banda larga de ultravelocidade ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Claro, que incorporou o portfólio de serviços residenciais da NET, lança em Arapiraca a mais moderna tecnologia de banda larga de ultravelocidade e TV por&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}