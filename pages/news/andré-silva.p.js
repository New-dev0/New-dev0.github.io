import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>André Silva</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,André Silva"/>
        <meta name="description" content="Trending News about André Silva" /></Head><Template>
            <h1 style={{fontSize: "30"}}>André Silva</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=6435cf50-fbc5-484a-9f92-780cb5245952&w=800&h=420&watermark=true&t=20221117100900" alt="André Silva"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/modalidades/motores/noticias/portugueses-em-quinto-e-sexto-lugar-nos-treinos-livres-do-grande-premio-de-macau-15360598.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugueses em quinto e sexto lugar nos treinos livres do Grande ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTo-wDdZ01BIBkHc2RDRsSByAxYGYaOWQ8roOD9ZdbrAOAL22pqy1PDcw04CKOY4KHvtJX2xf9g" alt="Portugueses em quinto e sexto lugar nos treinos livres do Grande ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No primeiro treino livre para a prova de motos, Sheridan Wesley Morais ficou em quinto lugar, a 6,1 segundos do primeiro. Um lugar atrás, com mais 0,7&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}