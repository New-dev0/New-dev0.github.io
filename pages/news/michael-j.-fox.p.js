import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michael J. Fox</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michael J. Fox"/>
        <meta name="description" content="Trending News about Michael J. Fox" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michael J. Fox</h1>
            <Image width={800} height={500} src="https://www.nit.pt/wp-content/plugins/madmen-opengraph-image-v2/madmen-opengraph-image.php?post_id=985974&ts=20221121101126" alt="Michael J. Fox"/>
            <h3>Recent News</h3>
            <a href='https://www.nit.pt/cultura/cinema/michael-j-fox-distinguido-com-oscar-honorario-pela-luta-contra-o-parkinson'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael J. Fox distinguido com Óscar honorário pela luta contra o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRzMuxhfrRbFkyPYH1Hr-D878AMB5djqB-6ckn6dcGrIfjUtTx_9QaktGd0dlfsxyCcU46LmDGa" alt="Michael J. Fox distinguido com Óscar honorário pela luta contra o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Estão a fazer-me tremer, parem!”, brincou o ator de “Regresso ao Futuro” ao receber o prémio simbólico.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/diversao/entre-telas/michael-j-fox-ganha-oscar-por-seu-ativismo-humanitario,d595812852e4f5dfd25dcd1851981fcad508288s.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael J. Fox ganha Oscar por seu ativismo humanitário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTpBaA2QNBv1HwweMGF8Xn8W8x73rFJZl_dxrqykDS5z7F8D9Z2UKVcbSfokj4y0sZZbpMEYP2" alt="Michael J. Fox ganha Oscar por seu ativismo humanitário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ator Michael. J. Fox, que estrelou a trilogia &quot;De Volta Para o Futuro&quot; nos anos 1980, recebeu ...</p></div>
            </div>
        </a><a href='https://aloalobahia.com/notas/ator-michael-j-fox-recebe-oscar-honorario-por-trabalho-humanitario'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ator Michael J. Fox recebe Oscar honorário por trabalho humanitário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4N33F7wTYko52nl9Qfxrr4kry1t3a_F8J8ZmFxrOu4pJ00nRilCtaHRmcZwe-BwHTMmpCc5nx" alt="Ator Michael J. Fox recebe Oscar honorário por trabalho humanitário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ator Michael J. Fox, conhecido pelo papel de Marty McFly na trilogia &quot;De Volta Para o Futuro&quot;, recebeu, no últi...</p></div>
            </div>
        </a><a href='https://www.gazetaweb.com/noticias/diversao-variedades/tv-e-celebridades/michael-j-fox-recebe-oscar-honorario-por-trabalho-humanitario/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael J. Fox recebe Oscar honorário por trabalho humanitário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT14hiLmCXIkBZgSXnOg8Fn6eleES5MVrtrClKYEOVU6whH3PdUDmD0RgI8svqwWXoRX3_NwNrh" alt="Michael J. Fox recebe Oscar honorário por trabalho humanitário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Conhecido por &#39;De volta para o futuro&#39;, ele foi premiado por sua campanha para arrecadar fundos para pesquisas sobre a doença de Parkinson, com a qual foi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}