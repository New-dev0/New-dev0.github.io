import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup"/>
        <meta name="description" content="Trending News about World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup</h1>
            <Image width={800} height={500} src="https://media04.meinbezirk.at/article/2022/11/17/3/31745053_XXL.jpg" alt="World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.meinbezirk.at/kitzbuehel/c-sport/zum-20-mal-snow-polo-world-cup-in-reith_a5715124'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polo auf Schnee: Zum 20. Mal Snow Polo World Cup in Reith ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdSwRnsrUKlUjggn2YwYqrIz_kTvZ_xVQrBzndQuu0IK5sa5ncCkpiN6ZipZfnGd_ehXFjghq_" alt="Polo auf Schnee: Zum 20. Mal Snow Polo World Cup in Reith ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>REITH, KITZBÜHEL. Beim 20. Bendura Bank Snow Polo World Cup Kitzbühel kämpfen acht internationale Teams vom 13. bis zum 15. Jänner 2023 um den begehrten&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}