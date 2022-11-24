import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pique</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pique"/>
        <meta name="description" content="Trending News about Pique" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pique</h1>
            <Image width={800} height={500} src="https://akns-images.eonline.com/eol_images/Entire_Site/2022108/rs_1024x759-221108072159-1024-shakira-serious-gj.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top" alt="Pique"/>
            <h3>Recent News</h3>
            <a href='https://www.eonline.com/br/news/1355804/o-valioso-conselho-feminista-de-shakira-apos-sua-crise-com-gerard-pique'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O valioso conselho feminista de Shakira após sua crise com Gerard ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3zyp3G3COFMREUizrudlvnJ88hESbNB4qWdEFv4cEkDgs-Cj982YR0Rb1u-LkY2-sJG8ZwNb9" alt="O valioso conselho feminista de Shakira após sua crise com Gerard ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora, mais uma vez, compartilha sua experiência pessoal com o mundo. Veja detalhes de sua nova entrevista!</p></div>
            </div>
        </a><a href='https://www.ofuxico.com.br/polemica/aposentadoria-de-gerard-pique-foi-provocacao-a-shakira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aposentadoria de Gerard Piqué foi provocação à Shakira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6caQTsOs1TxtSGB9dtDORBo70mZnn1S7vl2Acp-A1CFPEdijMwp_hWIk79D1d5pHMlpdK9a9-" alt="Aposentadoria de Gerard Piqué foi provocação à Shakira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vivendo em Barcelona desde que eles começaram sua relação, Shakira também alega que decidiu fazer sua vida na Espanha para apoiar Piqué em sua carreira, e com&nbsp;...</p></div>
            </div>
        </a><a href='https://esporte.ig.com.br/futebol/internacional/2022-11-23/pique-chorou-nos-bracos-de-shakira-e-tristeza-o-fez-deixar-o-barcelona.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Piqué chorou nos braços de Shakira e tristeza o fez deixar o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjVTFjFAvXruDWsezK9s1LVFFjbjoTZqzknNZUOL5aBaFskFSfQqI1XYvTMtrcwbOMzCsfa9Wv" alt="Piqué chorou nos braços de Shakira e tristeza o fez deixar o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o portal &#39;Look, o ex-jogador do Barcelona chegou ao local &quot;muito emocionado&quot;. Durante as conversas houve &quot;recriminações, mal-entendidos, posições&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}