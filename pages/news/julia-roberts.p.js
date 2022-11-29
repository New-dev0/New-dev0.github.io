import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Julia Roberts</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Julia Roberts"/>
        <meta name="description" content="Trending News about Julia Roberts" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Julia Roberts</h1>
            <Image width={800} height={500} src="" alt="Julia Roberts"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/julia-roberts-ce-celebre-acteur-quelle-a-plaque-3-jours-avant-leur-mariage_507474'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Julia Roberts : ce célèbre acteur qu&#39;elle a plaqué… 3 jours avant ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnsaCY_mGT60iZP4oMCa87rJsE4w5bAOhzuuo5UNVvVzyX_4fYsyP2Hm-67C9AyTwomCepNaYk" alt="Julia Roberts : ce célèbre acteur qu&#39;elle a plaqué… 3 jours avant ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Révélée au monde entier par le film Pretty Woman (diffusé lundi 28 novembre sur M6), l&#39;actrice Julia Roberts devait épouser en juin 1991 un acteur...</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/cinema/erin-brockovich-cet-oubli-embarrassant-de-julia-roberts-lors-de-son-discours-aux-oscars-5509888/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erin Brockovich : cet oubli embarrassant de Julia Roberts lors de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRikB-A7NJF1bvboSf-Kjg2CWlC2QK5nnG-LfM9QwTOucfb1G9L2WmtYw2ZDRfOCkRLLYxuxqKo" alt="Erin Brockovich : cet oubli embarrassant de Julia Roberts lors de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pendant son discours aux Oscars où elle a été récompensée pour &quot;Erin Brockovich, seule contre tous&quot;, Julia Roberts a fait un oubli remarqué.</p></div>
            </div>
        </a>
        </Template></>;
}