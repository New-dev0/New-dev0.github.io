import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anabela Moreira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anabela Moreira"/>
        <meta name="description" content="Trending News about Anabela Moreira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anabela Moreira</h1>
            <Image width={800} height={500} src="https://sic.pt/wp-content/uploads/2022/11/3-13.png" alt="Anabela Moreira"/>
            <h3>Recent News</h3>
            <a href='https://sic.pt/sic/anabela-moreira-estagiou-em-bar-de-alterne-para-interpretar-personagem-aquela-experiencia-marcou-me-muito/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anabela Moreira estagiou em bar de alterne para interpretar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwTCbKauO2xaETYDs9VSW0zIiN1Y8fTmoKA34UktzNvIuo4gnW5T8CWzFSPliu0ZD5ERwONl_S" alt="Anabela Moreira estagiou em bar de alterne para interpretar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para interpretar uma personagem do filme de 2004 &#39;Noite Escura&#39;, de João Canijo, a atriz teve de realizar um estágio como alternadeira.</p></div>
            </div>
        </a>
        </Template></>;
}