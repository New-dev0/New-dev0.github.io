import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Roman Frayssinet</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Roman Frayssinet"/>
        <meta name="description" content="Trending News about Roman Frayssinet" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Roman Frayssinet</h1>
            <Image width={800} height={500} src="https://cdn.sortiraparis.com/images/80/77381/826790-roman-frayssinet-a-paris-en-2023-avec-son-nouveau-spectacle-o-dedans.jpg" alt="Roman Frayssinet"/>
            <h3>Recent News</h3>
            <a href='https://www.sortiraparis.com/scenes/spectacle/articles/286113-roman-frayssinet-a-paris-en-2023-avec-son-nouveau-spectacle-o-dedans'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roman Frayssinet à Paris en 2023 avec son nouveau spectacle Ô ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSi_QSIHaxi0RefpAX13yxNE6_qwRP_mc_hqxKg_LWvqgTci6zVFX9AuMx3CJeMExU-9FwYatV8" alt="Roman Frayssinet à Paris en 2023 avec son nouveau spectacle Ô ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roman Frayssinet fait son retour sur scène en 2023 avec un nouveau spectacle, &quot;Ô Dedans&quot;. À Paris, il se produit d&#39;abord au Sacré, du 5 janvier au 15 avril&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lamontagne.fr/clermont-ferrand-63000/loisirs/l-humoriste-roman-frayssinet-a-clermont-ferrand-en-2023_14226047/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;humoriste Roman Frayssinet à Clermont-Ferrand en 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYfZwtpySPFmaXP2QPuaYVthEY00tYEf_O1xKt_8gbzLY0Pd7fQyp7fA_4U1Jh0jiud9ByM-6J" alt="L&#39;humoriste Roman Frayssinet à Clermont-Ferrand en 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roman Frayssinet présentera son spectacle Ô Dedans, samedi 23 septembre 2023, à 20 h 30, à la Maison de la culture de Clermont-Ferrand.</p></div>
            </div>
        </a>
        </Template></>;
}