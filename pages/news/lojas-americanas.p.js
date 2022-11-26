import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lojas Americanas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lojas Americanas"/>
        <meta name="description" content="Trending News about Lojas Americanas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lojas Americanas</h1>
            <Image width={800} height={500} src="https://diariodorio.com/wp-content/uploads/2022/11/Funcionarios-abordam-jovens-que-furtavam-produtos-na-Americanas-da-Prado-Junior.jpg" alt="Lojas Americanas"/>
            <h3>Recent News</h3>
            <a href='https://diariodorio.com/delinquentes-invadem-lojas-americanas-em-copacabana-xingam-e-jogam-pedras-nos-funcionarios-da-unidade/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delinquentes invadem Lojas Americanas, em Copacabana, xingam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNMup4IKW4gGnMz-VEc5ce2ub7otD1k-n5go89zq_1JAALWNVz1g-QCIZr4j2RzONj-wQ5G1yR" alt="Delinquentes invadem Lojas Americanas, em Copacabana, xingam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cada dia a coisa piora. Não sei onde vamos parar. Verão chegando, e esses desocupados invadindo Copacabana lamentável,” disse uma internauta.</p></div>
            </div>
        </a>
        </Template></>;
}