import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Granit Xhaka</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Granit Xhaka"/>
        <meta name="description" content="Trending News about Granit Xhaka" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Granit Xhaka</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/copadomundo/2018/imagem/59/2018/06/22/granit-xhaka-comemora-gol-da-suica-em-duelo-contra-a-servia-1529695108539_v2_615x300.jpg" alt="Granit Xhaka"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/28/familia-perseguida-e-expatriada-a-historia-de-granit-xhaka-capitao-suico.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pai preso, espancado e perseguido: a dramática história do capitão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDeyQ8QWxt3NIs-nbpYvHy3FyXabjSgClIqxnPqZj_w3HXF5S5bDKCUT_c-htjVQ6ggyd4rLns" alt="Pai preso, espancado e perseguido: a dramática história do capitão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Granit Xhaka, um dos principais jogadores no duelo contra o Brasil na Copa do Mundo, tem uma história de vida marcada pelos conflitos geopolíticos.</p></div>
            </div>
        </a>
        </Template></>;
}