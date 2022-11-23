import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mbappe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mbappe"/>
        <meta name="description" content="Trending News about Mbappe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mbappe</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/entretenimento/ef/2022/10/31/selecao-francesa-na-uefa-nations-league-league-1667241243137_v2_615x300.jpg" alt="Mbappe"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/ecoa/ultimas-noticias/2022/11/22/mbappe-dembele-e-tchouameni-por-que-ha-tantos-jogadores-negros-na-franca.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mbappé, Dembélé e Tchouameni: Por que há tantos jogadores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSA2QemjRTAAFTOvHPoYggWh5szy1huPbpjkoaj2Fe5oyG5JA2UCzuJnvT6I6avxsyWUeWvAqSp" alt="Mbappé, Dembélé e Tchouameni: Por que há tantos jogadores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vinte anos separam os dois títulos mundiais da seleção francesa. Em 1998, Zinédine Zidane brilhou e, em 2018, o jovem Kylian Mbappé foi o grande destaque&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}