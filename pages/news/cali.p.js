import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cali</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cali"/>
        <meta name="description" content="Trending News about Cali" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cali</h1>
            <Image width={800} height={500} src="https://www.planet.fr/files/images/article/6/6/3/2677366/vignette-focus.jpg" alt="Cali"/>
            <h3>Recent News</h3>
            <a href='https://www.programme-tv.net/news/tv/315536-cali-le-chanteur-revele-la-triste-raison-qui-la-empeche-dassister-a-lenterrement-de-sa-mere-decedee-dun-cancer-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cali : le chanteur révèle la triste raison qui l&#39;a empêché d&#39;assister à l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Cali : le chanteur révèle la triste raison qui l&#39;a empêché d&#39;assister à l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Présent ce jeudi 8 décembre dans Ça commence aujourd&#39;hui sur France 2, Cali a révélé la triste raison qui l&#39;a empêché d&#39;assister à l&#39;enterrement de sa mère,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.planet.fr/la-vie-des-stars-deces-de-sa-mere-couple-enfants-les-secrets-du-chanteur-cali.2677366.764617.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Décès de sa mère, couple, enfants... Les secrets du chanteur Cali</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSuSVE9I8QGs9QQZ2phT2oZHx5RQRKSh0-ijUigl38y7QJtcUBMWoJy_ncvjs_b7ID5S-ar7-Km" alt="Décès de sa mère, couple, enfants... Les secrets du chanteur Cali" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un drame que le chanteur a raconté sur le plateau de Ça commence aujourd&#39;hui de Faustine Bollaert, ce 8 décembre 2022. &quot;Elle est morte d&#39;un cancer. Elle avait&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}