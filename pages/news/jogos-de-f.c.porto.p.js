import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogos de f.c.porto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogos de f.c.porto"/>
        <meta name="description" content="Trending News about Jogos de f.c.porto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogos de f.c.porto</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/sicnot/2022-09-27-Bola-de-Futebol.jpg-b1c525ff-1/1.91x1?wm=true&outputFormat=jpeg" alt="Jogos de f.c.porto"/>
            <h3>Recent News</h3>
            <a href='https://sicnoticias.pt/desporto/2022-12-08-Taca-da-Liga-Chaves---FC-Porto-ao-minuto-1e2e2243'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Chaves - FC Porto ao minuto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVOOCARp36q4oqvm4tJDbJLsUtsz3GDwqPAAJ5qeoa68ijXDOZf7redrSA--wnu-uW2tvb_WKl" alt="Taça da Liga: Chaves - FC Porto ao minuto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suplentes &middot; 94. Samuel Portugal &middot; 17. Rodrigo Conceição &middot; 4. David Carmo &middot; 20. André Franco &middot; 87. Bernardo Folha &middot; 70. Gonçalo Borges &middot; 9. Mehdi Taremi &middot; 30. Evanilson.</p></div>
            </div>
        </a>
        </Template></>;
}