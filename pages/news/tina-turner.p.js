import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tina Turner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tina Turner"/>
        <meta name="description" content="Trending News about Tina Turner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tina Turner</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Flifestyle-sapo%2Ffacebook-overlay.png&epic=MWQ1W57VOTQl/PRRAVMHgFhpgIacAJolebsghLWXZvFy9Za4ZUKnbVYNb1It8f/JG3QxnvsQ3BBDSpJVmlpZ8Q4TIovh3JuUhah9SVC94BrJ7aw=" alt="Tina Turner"/>
            <h3>Recent News</h3>
            <a href='https://lifestyle.sapo.pt/fama/noticias-fama/artigos/tina-turner-10-factos-que-quase-ninguem-sabe-sobre-a-iconica-cantora'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tina Turner: 10 factos que quase ninguém sabe sobre a icónica ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTplci1fI1x_bCIy38RfswMQzwHMam97OU9lvwv9qb5yTcEj-208CeaoGXW5TL0yAr6UDnnrQq" alt="Tina Turner: 10 factos que quase ninguém sabe sobre a icónica ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tina Turner é uma das cantoras mais icónicas de sempre, tendo sido apelidada como a grande rainha do rock and roll. Nasceu a 26 de novembro de 1939,&nbsp;...</p></div>
            </div>
        </a><a href='https://glamurama.uol.com.br/cultura-e-entretenimento/no-aniversario-de-tina-turner-relembre-5-momentos-simply-the-best-da-eterna-diva-musical/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tina Turner faz 83: veja 5 momentos &#39;simply the best&#39; da diva musical</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWivAIF7_vv8hgs3rJSo9MFz6mykHXJ0Ydbm8fk3w009y4YFbu0Mz2tc3HvipX5XtL9FtHUH2N" alt="Tina Turner faz 83: veja 5 momentos &#39;simply the best&#39; da diva musical" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No aniversário de 83 anos de Tina Turner, relembre cinco momentos &#39;simply the best&#39; da eterna diva musical.</p></div>
            </div>
        </a>
        </Template></>;
}