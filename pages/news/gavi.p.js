import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gavi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gavi"/>
        <meta name="description" content="Trending News about Gavi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gavi</h1>
            <Image width={800} height={500} src="https://cdn.yenicaggazetesi.com.tr/news/2022/11/231120222213003119786.jpg" alt="Gavi"/>
            <h3>Recent News</h3>
            <a href='https://www.yenicaggazetesi.com.tr/ispanya-takiminda-gavi-oynuyor-arda-ise-milli-takimda-kulubede-600679h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arda Güler&#39;in Gavi&#39;den ne eksiği var</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXg8TkNuFE5qTtIkPI0sMkgqAzGdqpNai3hYyVksAK4k2c5dodNKYKugCdo_M1oIaurJaJ-y9n" alt="Arda Güler&#39;in Gavi&#39;den ne eksiği var" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bir de gol attı üstelik. Barcelona&#39;da forma giyen Gavi, ayrıca Dünya Kupası&#39;nda gol atan en genç İspanyol oyuncu olarak da kayıtlara geçmiş. Bir şey daha&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}