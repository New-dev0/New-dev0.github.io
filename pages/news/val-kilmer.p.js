import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Val Kilmer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Val Kilmer"/>
        <meta name="description" content="Trending News about Val Kilmer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Val Kilmer</h1>
            <Image width={800} height={500} src="https://www.filmfutter.com/wp-content/uploads/2022/11/WillowSerieValKilmer.jpg" alt="Val Kilmer"/>
            <h3>Recent News</h3>
            <a href='https://www.filmfutter.com/news/willow-serie-val-kilmer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Willow&quot;: Val Kilmer wäre in der Serie fast zurückgekehrt, könnte in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpXSKvdG8vRSIe8yrSDwepQ1ihRWSHaY19K6lssK082zoz7GlDmmvDs50RPmGAHXCTaIxoZE34" alt="&quot;Willow&quot;: Val Kilmer wäre in der Serie fast zurückgekehrt, könnte in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wäre die Pandemie nicht dazwischengekommen, hätte Val Kilmer seine &quot;Willow&quot;-Rolle als Madmartigan vermutlich wieder verkörpert.</p></div>
            </div>
        </a>
        </Template></>;
}