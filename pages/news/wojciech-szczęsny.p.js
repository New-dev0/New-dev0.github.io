import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wojciech Szczęsny</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wojciech Szczęsny"/>
        <meta name="description" content="Trending News about Wojciech Szczęsny" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wojciech Szczęsny</h1>
            <Image width={800} height={500} src="https://www.sofoot.com/IMG/img-france-pologne-le-showman-wojciech-szczesny-un-dernier-rempart-d-excellence-1670097845_x600_articles-alt-522434.jpg" alt="Wojciech Szczęsny"/>
            <h3>Recent News</h3>
            <a href='https://www.sofoot.com/france-pologne-le-showman-wojciech-szczesny-un-dernier-rempart-d-excellence-522434.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Showman Szczesny</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBynzgvaFEvKY9SV-97pVchLwgJQwLStzAxegh7LzMgqj2JO7wL377KWlO3qdMUl7hsfqdAKdC" alt="Showman Szczesny" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>» Nous sommes le 2 janvier 2011, et Wojciech Szczęsny tweete ses états d&#39;âme. Plus jeune gardien d&#39;Arsenal en Premier League à peine trois semaines plus tôt&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}