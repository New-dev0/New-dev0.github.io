import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sorgho</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sorgho"/>
        <meta name="description" content="Trending News about Sorgho" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sorgho</h1>
            <Image width={800} height={500} src="https://photos.tf1.fr/1200/720/vignette-paysage-jt20h-ouleau-dcc41b-0@1x.jpg" alt="Sorgho"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1.fr/tf1/jt-20h/videos/sorgho-une-cereale-davenir-59737106.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sorgho : une céréale d&#39;avenir - Journal de 20 heures | TF1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgimj6bPpE5JZj_AJtfjbnUk3GVGaT_KlWpBJNcwbX6RckOyrWbZ9-B1ZPvP3fQfTCUI1sCuXQ" alt="Sorgho : une céréale d&#39;avenir - Journal de 20 heures | TF1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans la palette de couleurs de nos campagnes, entre le jaune du colza et le vert du maïs, une nouvelle nuance, ocre, se distingue, celle des grains de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}