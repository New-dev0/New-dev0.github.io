import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Choupo-Moting</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Choupo-Moting"/>
        <meta name="description" content="Trending News about Choupo-Moting" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Choupo-Moting</h1>
            <Image width={800} height={500} src="https://s.yimg.com/ny/api/res/1.2/LivC8VZokIEYBNAIJ8X8bQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-12/27382450-7234-11ed-9f7f-7987168fbfb3" alt="Choupo-Moting"/>
            <h3>Recent News</h3>
            <a href='https://br.noticias.yahoo.com/polemicas-e-parca-de-neymar-veja-mais-sobre-choupo-moting-112806739.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polêmicas e parça de Neymar: veja mais sobre Choupo-Moting</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlFykmzs9XPmUJ5C4aAgJIkH-9ZC8WS29ozQVRhWIyS9zVt39tcdTdcZxa7f34O9x02np6hB4g" alt="Polêmicas e parça de Neymar: veja mais sobre Choupo-Moting" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O atacante é a esperança de gol de Camarões no confronto desta sexta-feira (2) frente ao Brasil.</p></div>
            </div>
        </a>
        </Template></>;
}