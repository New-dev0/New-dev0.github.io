import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jean-Marie Bigard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jean-Marie Bigard"/>
        <meta name="description" content="Trending News about Jean-Marie Bigard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jean-Marie Bigard</h1>
            <Image width={800} height={500} src="https://media.zenfs.com/fr/purepeople_fr_articles_981/24f25934d98aee937295dd42d7c7fcc9" alt="Jean-Marie Bigard"/>
            <h3>Recent News</h3>
            <a href='https://fr.news.yahoo.com/jean-marie-bigard-s%C3%A9par%C3%A9-claudia-172300368.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jean-Marie Bigard séparé de Claudia : rares photos de la mère de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRn-iFroQJiFcTF6l0KciKrcE2NlGcTYRrr4y5LdzzyUiKYEUmy4cK0YDpgaDIlkuA4kGFlGUHC" alt="Jean-Marie Bigard séparé de Claudia : rares photos de la mère de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fou d&#39;amour pour Lola Marois, Jean-Marie Bigard a été, avant ça, en couple avec une jolie danseuse. Avec Claudia, il...</p></div>
            </div>
        </a>
        </Template></>;
}