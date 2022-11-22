import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pulisic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pulisic"/>
        <meta name="description" content="Trending News about Pulisic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pulisic</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/11/21/637bde1abc8bd.jpeg" alt="Pulisic"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/fora-de-campo/lebron-james-do-futebol-web-brinca-com-apelido-de-pulisic-apos-assistencia-na-copa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;LeBron James do futebol&#39;, web brinca com &#39;apelido&#39; de Pulisic após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLk4OxhjeB6GRNCnsyNEF4bGFe4-VBb1BriqKBJSz-nQxI4ThodWsUyDZbrGCOMOzqmkGlZhaj" alt="&#39;LeBron James do futebol&#39;, web brinca com &#39;apelido&#39; de Pulisic após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O primeiro gol da partida foi marcado por Timothy Weah após passe de Christian Pulisic, meia-atacante do Chelsea. Depois do começo promissor do jogador do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sambafoot.com/br/copa/lebron-james-do-futebol-internautas-brincam-com-estrela-da-selecao-americana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“LeBron James do Futebol”: internautas brincam com estrela da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQT2UytnR1oZo4Uvn1RfqWX0x-MqtvMh90wSWYLqWKwDEli2zu60CpBzAFPv8U0SiAel2BE_Vhg" alt="“LeBron James do Futebol”: internautas brincam com estrela da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atleta do Chelsea, da Inglaterra, Christian Pulisic, de 24 anos, é o nome mais conhecido internacionalmente da seleção americana.</p></div>
            </div>
        </a>
        </Template></>;
}