import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Preco combustiveis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Preco combustiveis"/>
        <meta name="description" content="Trending News about Preco combustiveis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Preco combustiveis</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fpoligrafo.sapo.pt%2Fassets%2Fimg%2Fpoligrafo%2Ffacebook-overlay-true.png&epic=ZDdkNvxO5oQxW9a/owfkc2ObNWDC+oUArtotR2b0Zcv672V+dR4t9pul1tuYYBJCpDFdtsl5Up8trgL9U49y6t26DRYMmvMZThbiAe60lz+j3No=" alt="Preco combustiveis"/>
            <h3>Recent News</h3>
            <a href='https://poligrafo.sapo.pt/fact-check/carga-fiscal-sobre-os-combustiveis-volta-a-aumentar-em-dezembro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carga fiscal sobre os combustíveis &quot;volta a aumentar em dezembro&quot;?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcScznC5uvy9Mg1n64zXWvLv4WZHYWQlVxSZC-gDxsDNGCgDX80rE7Y5CI2379G85shVYM956aDh" alt="Carga fiscal sobre os combustíveis &quot;volta a aumentar em dezembro&quot;?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A denúncia surge em recente publicação no Facebook, apontando baterias contra os &quot;gatunos&quot; responsáveis pelo aumento da carga fiscal sobre os combustíveis&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}