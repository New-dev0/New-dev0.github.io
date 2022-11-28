import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lukaku</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lukaku"/>
        <meta name="description" content="Trending News about Lukaku" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lukaku</h1>
            <Image width={800} height={500} src="https://www.chelseafcbrasil.com/wp-content/uploads/2022/11/fc-internazionale-v-viktoria-plzen-group-c-uefa-champions-league-scaled.jpg" alt="Lukaku"/>
            <h3>Recent News</h3>
            <a href='https://www.chelseafcbrasil.com/2022/11/27/inter-trabalha-para-renovar-emprestimo-de-romelu-lukaku-para-a-proxima-temporada/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inter trabalha para renovar empréstimo de Romelu Lukaku para a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1e_PIlv6OMDPrJqHFEJds7wY0H3YUmBL1oDEWq7HtbUw9zXXSEMP2aGeQsOW8Qx7io6_iwOGA" alt="Inter trabalha para renovar empréstimo de Romelu Lukaku para a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em agosto de 2021, o Chelsea contratou Lukaku junto a própria inter pela bagatela de 97,5 milhões de libras. Embora o belga tenha marcado 15 gols em 44 jogos,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}