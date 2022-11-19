import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bigflo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bigflo"/>
        <meta name="description" content="Trending News about Bigflo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bigflo</h1>
            <Image width={800} height={500} src="" alt="Bigflo"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/bigflo-sans-tabou-sur-son-burn-out-jai-mis-la-vie-doli-en-danger_506784'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bigflo sans tabou sur son burn-out : « J&#39;ai mis la vie d&#39;Oli en danger »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxIfXwVXYnJmktJWUTgYFjmfXZ8IerJJvCIYQAtqxzvic12lvytNfxVGwX19d04C4PznQ22CDd" alt="Bigflo sans tabou sur son burn-out : « J&#39;ai mis la vie d&#39;Oli en danger »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans le podcast &quot;Canapé six places&quot;, diffusé sur Spotify ce jeudi 17 novembre, Bigflo s&#39;est livré sans filtre sur son burn-out. Le rappeur de 29 an...</p></div>
            </div>
        </a>
        </Template></>;
}