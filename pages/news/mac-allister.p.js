import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mac Allister</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mac Allister"/>
        <meta name="description" content="Trending News about Mac Allister" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mac Allister</h1>
            <Image width={800} height={500} src="https://www.sofoot.com/IMG/img-fernandez-alvarez-mac-allister-l-argentine-se-refait-une-jeunesse-1669846122_x600_articles-alt-522298.jpg" alt="Mac Allister"/>
            <h3>Recent News</h3>
            <a href='https://www.sofoot.com/fernandez-alvarez-mac-allister-l-argentine-se-refait-une-jeunesse-522298.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fernández, Álvarez, Mac Allister : L&#39;Argentine se refait une jeunesse</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmIGzTZ59Nmu2YQT-f6xXDKv0Ou5JB--j_ch-PafASvKUQKUVoJ9sd1uM51HTH4PlrLztEgwu0" alt="Fernández, Álvarez, Mac Allister : L&#39;Argentine se refait une jeunesse" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enzo Fernández, Julián Álvarez et Alexis Mac Allister ont porté l&#39;Argentine face à la Pologne.</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/football/coupe-du-monde/coupe-du-monde-c-est-un-reve-qui-devient-realite-savoure-mac-allister-20221130'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : «C&#39;est un rêve qui devient réalité», savoure Mac ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjju71KWGdLTIKSqTESiy5turhqopv09rRJT85PtMfha_rPKZnebbIh2I1qGWtFITgzMR6puDo" alt="Coupe du monde : «C&#39;est un rêve qui devient réalité», savoure Mac ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Buteur, le milieu de terrain a été l&#39;un des grands artisans de la victoire de l&#39;Albiceleste face à la Pologne (2-0). Alexis Mac Allister, milieu de terrain&nbsp;...</p></div>
            </div>
        </a><a href='https://www.afriquesports.net/afrique-sports-tv/enfin-mac-allister-ouvre-le-score-pour-largentine-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enfin, Mac Allister ouvre le score pour l&#39;Argentine (Vidéo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQezc6cp4UiVaf7T4U3HPzdjVp8-kszwT164sk_bxCjqqDjPzK7Tjo0xUt66OL1g7Hs2PUGEjvi" alt="Enfin, Mac Allister ouvre le score pour l&#39;Argentine (Vidéo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>46è minute, l&#39;Argentine trouve enfin la faile dans la défense polonaise. Mac Allister ouvre la marque pour l&#39;AlbiCeleste. Advertisements.</p></div>
            </div>
        </a><a href='https://haiti.loopnews.com/content/mondial-2022-argentine-ouvre-le-score-par-alexis-mac-allister'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial-2022: Argentine ouvre le score par Alexis Mac Allister</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThNW8zmUDTq7eODTdadqPfO7BVoeorCPImUrf75U9Jct3bPPFqWThnRvJndmF-WN0n6_fkFl4s" alt="Mondial-2022: Argentine ouvre le score par Alexis Mac Allister" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;Argentine ouvre le score par son défenseur Alexis Mac Allister sur un service de Molina et est pour l&#39;instant qualifiée pour les huitièmes de finale de la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}