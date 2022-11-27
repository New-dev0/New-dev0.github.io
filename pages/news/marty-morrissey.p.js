import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marty Morrissey</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marty Morrissey"/>
        <meta name="description" content="Trending News about Marty Morrissey" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marty Morrissey</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28591850.ece/ALTERNATES/s1200/0_I221125_210122_1294262oTextTRMRMMGLPICT000278370668o.jpg" alt="Marty Morrissey"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/showbiz/irish-showbiz/katherine-lynch-reckons-marty-morrissey-28591838'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Katherine Lynch reckons Marty Morrissey is bringing &#39;sexy&#39; back to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQq9jDM_ITniniEPkqHsBCME1OgFuj4BIUvmnpt6ii72t7laT81bxKC8u2xcoMqC7i06gA4xddp" alt="Katherine Lynch reckons Marty Morrissey is bringing &#39;sexy&#39; back to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The feisty telly favourite is gearing up to &#39;fart rainbows&#39; with the fondly dubbed &#39;Marty Party&#39;</p></div>
            </div>
        </a>
        </Template></>;
}