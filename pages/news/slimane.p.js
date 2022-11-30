import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Slimane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Slimane"/>
        <meta name="description" content="Trending News about Slimane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Slimane</h1>
            <Image width={800} height={500} src="https://cache.magicmaman.com/data/photo/w1200_h630_ci/1pf/slimane-papa-esmeralda.jpg" alt="Slimane"/>
            <h3>Recent News</h3>
            <a href='https://www.magicmaman.com/slimane-papa-toujours-plus-complice-avec-sa-fille-il-nous-fait-fondre-avec-de-tendres-images,3712183.asp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Slimane papa : toujours plus complice avec sa fille, il nous fait ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBq-DU3kHGWuf796I4PtWOKlV_jXfppyVpE8795xJZ5jxmJgkWb4rfVEgBnUhjBKGGkAgHPXlx" alt="Slimane papa : toujours plus complice avec sa fille, il nous fait ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Slimane a partagé une nouvelle vidéo d&#39;Esmeralda. Père et fille partagent un adorable moment câlin.</p></div>
            </div>
        </a>
        </Template></>;
}