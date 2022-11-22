import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coreia do Sul</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coreia do Sul"/>
        <meta name="description" content="Trending News about Coreia do Sul" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coreia do Sul</h1>
            <Image width={800} height={500} src="https://imagens.publico.pt/imagens.aspx/1753299?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Fugas.png" alt="Coreia do Sul"/>
            <h3>Recent News</h3>
            <a href='https://www.publico.pt/2022/11/21/fugas/noticia/seguranca-tesla-julgamento-coreia-sul-apos-acidente-fatal-2028535'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Segurança da Tesla em julgamento na Coreia do Sul após acidente ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRT5zPY1IwfA3z0W3N5r0qpuj7DI-qB0_LraT6JxXb5SM4lqvM0ISswnbr4mvfjKzp-5z_NL-4C" alt="Segurança da Tesla em julgamento na Coreia do Sul após acidente ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um Model X incendiou-se com um homem no banco traseiro, sem que as portas se abrissem e sem que os bancos da frente reclinassem. O homem morreu.</p></div>
            </div>
        </a>
        </Template></>;
}