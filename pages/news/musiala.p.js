import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Musiala</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Musiala"/>
        <meta name="description" content="Trending News about Musiala" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Musiala</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/qaf_l3wichEisGk98y4GwR4G8-I=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/11171230.jpg" alt="Musiala"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/alemanha/noticia/2022/12/01/musiala-da-alemanha-e-cacado-por-costarriquenhos-a-la-denilson-em-2002-veja-lance.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musiala, da Alemanha, é caçado por costarriquenhos à la Denilson ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqqplpganco_wTbKR9w3NMDSRcm1rY1PI7pvs8R1fXOYuBcJ56g1y8-cQ9l114Ujlw_6Il3gMk" alt="Musiala, da Alemanha, é caçado por costarriquenhos à la Denilson ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com apenas 19 anos, o atacante Jamal Musiala vem se tornando um dos principais jogadores da Alemanha na Copa do Mundo do Catar.</p></div>
            </div>
        </a>
        </Template></>;
}