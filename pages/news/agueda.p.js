import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Agueda</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Agueda"/>
        <meta name="description" content="Trending News about Agueda" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Agueda</h1>
            <Image width={800} height={500} src="https://imagens.publico.pt/imagens.aspx/1751859?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Fugas.png" alt="Agueda"/>
            <h3>Recent News</h3>
            <a href='https://www.publico.pt/2022/11/16/fugas/noticia/agueda-ergue-maior-pai-natal-mundo-so-visivel-microscopio-2027995'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Águeda ergue o Maior Pai Natal do Mundo. E o mais pequeno, só ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5pOFZbyf5QkYNA7f57waqC75mG3YNKI-FEzH8EdBg8kNGsz1McENE-sUJSQAU15HyXyTwiZHd" alt="Águeda ergue o Maior Pai Natal do Mundo. E o mais pequeno, só ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Pai Natal gigante de Águeda, com 21 metros, já é uma tradição. Mas este ano, além da animação e celebrações habituais, há um Pai Natal que só se pode ver&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bairradainformacao.pt/2022/11/16/agueda-e-natal-ilumina-se-ja-na-proxima-sexta-feira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Águeda é Natal” ilumina-se já na próxima sexta-feira | Bairrada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVYhrUgWnsbIWUA7zjoZNy0WN0_ZfmXSyLI1BcKRIshxZhCU9h86EdSZZ7dOXWCfofDLVLImpQ" alt="“Águeda é Natal” ilumina-se já na próxima sexta-feira | Bairrada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O “Águeda é Natal” arranca na próxima sexta-feira, dia 18 de novembro, com a cerimónia simbólica do acender das luzes por toda a cidade, às 18 horas,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}