import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Declan Donnelly</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Declan Donnelly"/>
        <meta name="description" content="Trending News about Declan Donnelly" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Declan Donnelly</h1>
            <Image width={800} height={500} src="https://i2-prod.ok.co.uk/incoming/article28565973.ece/ALTERNATES/s1200/0_Declan-Donnelly-and-Ali-Astall-Wedding-St-Michaels-Church-Elswick-Newcastle-Britain-02-Aug-20.jpg" alt="Declan Donnelly"/>
            <h3>Recent News</h3>
            <a href='https://www.ok.co.uk/lifestyle/gallery/declan-donnelly-ali-wedding-pictures-28565386'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Declan Donnelly&#39;s beautiful wedding to Ali Astall with celebrity guests</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpZrkRchAfyPkYyBQJbGkDCQ8MASEUueGKntTVKRJWUYFWOyJEZo9rt5y2lXOLdYqYS6Y-qHv1" alt="Declan Donnelly&#39;s beautiful wedding to Ali Astall with celebrity guests" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I&#39;m A Celebrity host Declan Donnelly&#39;s beautiful summer wedding in pictures to Ali Astall - from her gown to celebrity guests including Vernon Kay and Holly&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}