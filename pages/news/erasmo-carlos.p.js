import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Erasmo Carlos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Erasmo Carlos"/>
        <meta name="description" content="Trending News about Erasmo Carlos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Erasmo Carlos</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-11-22-erasmo-carlos-28ad092e/1.91x1?wm=true&outputFormat=jpeg" alt="Erasmo Carlos"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-11-22-Morreu-Erasmo-Carlos-pioneiro-do-rock-brasileiro-6cf3f5da'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Erasmo Carlos, pioneiro do rock brasileiro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4cL7qqYR2avg-O0FPGenkxFz1WrWVfqZdgG4nmfoLBoiSMzxLf6UgIH0IXtwznKy8Fc_egzcl" alt="Morreu Erasmo Carlos, pioneiro do rock brasileiro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O cantor e compositor brasileiro, ícone da Jovem Guarda, morreu esta terça-feira aos 81 anos. Há três dias, ganhou um Grammy Latino pelo seu último álbum,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/cultura/erasmo-carlos-parceiro-de-roberto-e-pioneiro-do-rock-brasileiro-morre-aos-81-anos-15377305.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erasmo Carlos, parceiro de Roberto e pioneiro do rock brasileiro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxDu7b4fxwO_cbsX2r7ir5a-UdJq5-nrMrsarC83n0gYDASkoT2iurKkfyC52K665JJd_trYer" alt="Erasmo Carlos, parceiro de Roberto e pioneiro do rock brasileiro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autor de mais de 600 músicas, a maioria delas a par do eterno parceiro Roberto Carlos, estava internado há duas semanas no Rio de Janeiro com síndrome&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/22/morreu-o-cantor-e-compositor-brasileiro-erasmo-carlos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu o cantor e compositor brasileiro Erasmo Carlos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMoFdzfU_JqkzqXCXAB_TGuWQGr6NC1w26_CTjNVJE7B92mMGq5Le-rAcYdM-szjDTxz-SkeCk" alt="Morreu o cantor e compositor brasileiro Erasmo Carlos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A causa da morte ainda não foi divulgada, mas sabe-se que esteve recentemente internado com um quadro de edema. Erasmo Carlos tinha 81 anos.</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/cultura/morre-cantor-erasmo-carlos-pioneiro-da-musica-e-do-rock-brasileiro_n1448821'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre cantor Erasmo Carlos, pioneiro da música e do rock brasileiro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXvh37XM0Y_UjOnK-mUWpq_Us9zveiI_96tX_3A29v7WJvPU8dWffNeri9AV03CZ6eNjItt9F4" alt="Morre cantor Erasmo Carlos, pioneiro da música e do rock brasileiro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O cantor Erasmo Carlos, 81 anos, símbolo do movimento musical e cultural que surgiu na década de 1960 e 1970 no Brasil conhecido como Jovem Guarda,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/22/culturaipsilon/noticia/morreu-cantor-compositor-brasileiro-erasmo-carlos-19412022-exjovem-guarda-2028753'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu o cantor e compositor brasileiro Erasmo Carlos (1941-2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKgnu0hEOhFhHwAQFL7W6Odrd2k4zl302Q8B9CrgAbndCm2jxYBE6ornWQQQNlaYKEtVyr2Pdc" alt="Morreu o cantor e compositor brasileiro Erasmo Carlos (1941-2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sofria de um edema e voltou a ser internado esta segunda-feira, de urgência. Tinha 81 anos.</p></div>
            </div>
        </a>
        </Template></>;
}