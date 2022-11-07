import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hustle 2.0 winner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hustle 2.0 winner"/>
        <meta name="description" content="Trending News about Hustle 2.0 winner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hustle 2.0 winner</h1>
            <Image width={800} height={500} src="" alt="Hustle 2.0 winner"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/entertainment/tv/mtv-hustle-2-0-s-mc-square-was-surprised-to-get-praise-in-dm-from-virat-kohli-101667742761128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MTV Hustle 2.0&#39;s MC Square was surprised to get praise in DM from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0wANuNYETs7-MRTExIFAxrjWK1hJproFynbroL1u9BdjnBEf1fmjD5nSIuC6dEdbKxHiuekeb" alt="MTV Hustle 2.0&#39;s MC Square was surprised to get praise in DM from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MC Square, one of the finalists of the reality show MTV Hustle 2.0, talks about the time when he realised cricketer Virat Kohli was his fan.</p></div>
            </div>
        </a>
        </Template></>;
}