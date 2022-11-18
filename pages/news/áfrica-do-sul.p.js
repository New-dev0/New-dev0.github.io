import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>África do Sul</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,África do Sul"/>
        <meta name="description" content="Trending News about África do Sul" /></Head><Template>
            <h1 style={{fontSize: "30"}}>África do Sul</h1>
            <Image width={800} height={500} src="https://agencia.fiocruz.br/sites/agencia.fiocruz.br/files/imagemDestaque/bacteria_ioc_d.jpg" alt="África do Sul"/>
            <h3>Recent News</h3>
            <a href='https://agencia.fiocruz.br/artigo-discute-restricoes-para-pesquisa-nas-legislacoes-do-brasil-india-e-africa-do-sul'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artigo discute restrições para pesquisa nas legislações do Brasil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRff6kaQxutth_l-6Z22VxAIRg72Yj0r6Esk0wzyLvVAMgiN0Fp8TBF9yo_TUGN5iWE_NfEUzKs" alt="Artigo discute restrições para pesquisa nas legislações do Brasil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Análise publicada na revista científica Trends in Microbiology aponta que, em instituições brasileiras como a Fiocruz, o impacto das restrições foi sentido&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}