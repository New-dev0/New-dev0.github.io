import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Casas Bahia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Casas Bahia"/>
        <meta name="description" content="Trending News about Casas Bahia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Casas Bahia</h1>
            <Image width={800} height={500} src="" alt="Casas Bahia"/>
            <h3>Recent News</h3>
            <a href='https://pontospravoar.com/black-friday-smiles-casas-bahia-oferecem-ate-13-milhas-real-gasto-produtos-selecionados/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shopping Smiles e Casas Bahia - Até 13 milhas por real gasto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYqSXndtteWC0HjNVaPEaPhBSo7ZZ2zSvM1u-BDK1hWWYZ5K05Ok7_p3kVXvJR7Rp4l7x8ge-h" alt="Shopping Smiles e Casas Bahia - Até 13 milhas por real gasto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta campanha o acúmulo extra de milhas está estruturado da seguinte forma: Até 13 Milhas – Clientes Diamante ou Clube Smiles; Até 07 Milhas – Demais clientes&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}