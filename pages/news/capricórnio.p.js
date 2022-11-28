import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Capricórnio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Capricórnio"/>
        <meta name="description" content="Trending News about Capricórnio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Capricórnio</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/27/1962795630-peixes-e-capricornio.jpg" alt="Capricórnio"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/vida-e-estilo/horoscopo/peixes-e-capricornio-oferecem-dia-mais-introspectivo-aos-signos,a65e5a00d403e4ec907ae118345a68d4u7w6gvzd.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Peixes e Capricórnio oferecem dia mais introspectivo aos signos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSlf_8ZtedQM8sznKGZGI5iwVVUIBJ6PNl45WEsH4PPo3xFPNnzTdG6RrgIOiF5dWv7vNGJ6p3c" alt="Peixes e Capricórnio oferecem dia mais introspectivo aos signos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>E aí, bebê, bateu aquela moleza e zero vontade de levantar da cama? Normal, afinal é domingo, o ...</p></div>
            </div>
        </a>
        </Template></>;
}