import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Radio Renascença</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Radio Renascença"/>
        <meta name="description" content="Trending News about Radio Renascença" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Radio Renascença</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/francisca_jorge_tenis_feminino_guimaraes_foto_tennis_stars_facebook166845b4_socialshare.jpg" alt="Radio Renascença"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/bola-branca/noticia/modalidades/2022/11/28/francisca-jorge-e-a-melhor-portuguesa-do-ranking-de-tenis/309794/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Francisca Jorge é a melhor portuguesa do &quot;ranking&quot; de ténis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjiTU6jupk_8XxQWFcMeGllgH-HEbJ8NWFDfVRSX6OSR6mjTV49PpCZPk_tKxDqXXItrEkCLf7" alt="Francisca Jorge é a melhor portuguesa do &quot;ranking&quot; de ténis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A tenista, de 22 anos, ocupa a 301.ª posição. No topo, nada se altera: a polaca Iga Swiatek lidera de forma muito confortável.</p></div>
            </div>
        </a>
        </Template></>;
}