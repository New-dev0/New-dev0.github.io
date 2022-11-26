import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mange, prie, aime</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mange, prie, aime"/>
        <meta name="description" content="Trending News about Mange, prie, aime" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mange, prie, aime</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/julia-roberts-elizabeth-gilbert-mange-prie-aime.png?ver=1" alt="Mange, prie, aime"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/mange-prie-aime-que-devient-la-vraie-elizabeth-gilbert-5508379/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mange, prie, aime : que devient la vraie Elizabeth Gilbert ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_htlMTgqtKYmZ2H1HnPJ3Jq1voBulWGAI6tMoJwMLshTXjJ49tkbOhaAhEkNUqj7JcTj1CJKW" alt="Mange, prie, aime : que devient la vraie Elizabeth Gilbert ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le film &quot;Mange, prie, aime&quot; est basée sur l&#39;histoire vraie de l&#39;américaine Elizabeth Gilbert. Découvrez ce que devient la romancière.</p></div>
            </div>
        </a>
        </Template></>;
}