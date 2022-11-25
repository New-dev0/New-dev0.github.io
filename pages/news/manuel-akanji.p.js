import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Manuel Akanji</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Manuel Akanji"/>
        <meta name="description" content="Trending News about Manuel Akanji" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Manuel Akanji</h1>
            <Image width={800} height={500} src="https://img.fresherslive.com/latestnews/images/articles/origin/2022/11/24/who-are-manuel-akanji-parents-where-is-manuel-akanji-parents-from-what-is-manuel-akanji-parents-nationality-637f68e32fb60-1669294307.jpg" alt="Manuel Akanji"/>
            <h3>Recent News</h3>
            <a href='https://latestnews.fresherslive.com/articles/who-are-manuel-akanji-parents-where-is-manuel-akanji-parents-from-what-is-manuel-akanji-parents-nationality-1106457'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who are Manuel Akanjis Parents? Manuel Akanji Biography ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQDWwBXviJrhPJSQ9po2iRL6zcr1WlYGRY0bG21ZgzqZyExlsylC5WiqMgVK-IUb1BWVwe9bXqq" alt="Who are Manuel Akanjis Parents? Manuel Akanji Biography ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manuel Akanji is an Football player and soccer player born on Jul 19, 1995. Many people are eager to know their favorite personalities personal life, so Manuel&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}