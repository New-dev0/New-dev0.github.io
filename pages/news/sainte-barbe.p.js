import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sainte Barbe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sainte Barbe"/>
        <meta name="description" content="Trending News about Sainte Barbe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sainte Barbe</h1>
            <Image width={800} height={500} src="" alt="Sainte Barbe"/>
            <h3>Recent News</h3>
            <a href='https://www.lavoixdunord.fr/1262224/article/2022-12-04/pourquoi-sainte-barbe-est-la-protectrice-des-pompiers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pourquoi sainte Barbe est la protectrice des pompiers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYdspPrmEiqt1lEmK0zD_BDeS-SxSsaHQKw_y5MNlW-GXLjIII6Zmb8HF6WcSTrQ-WWlyqtgI3" alt="Pourquoi sainte Barbe est la protectrice des pompiers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cette sainte a une histoire dramatique bien particulière qui, au XIXe siècle, l&#39;a fait choisir par des professions qui ont en commun le feu dont elle est&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}