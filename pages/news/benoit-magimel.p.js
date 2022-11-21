import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benoit Magimel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benoit Magimel"/>
        <meta name="description" content="Trending News about Benoit Magimel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benoit Magimel</h1>
            <Image width={800} height={500} src="" alt="Benoit Magimel"/>
            <h3>Recent News</h3>
            <a href='https://www.bienpublic.com/culture-loisirs/2022/11/20/en-images-l-animatrice-flavie-flament-et-l-acteur-benoit-magimel-au-chapitre-du-clos-de-vougeot'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vente des vins à Beaune. En images : l&#39;animatrice Flavie Flament et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Vente des vins à Beaune. En images : l&#39;animatrice Flavie Flament et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Samedi 19 novembre, le 1230e chapitre du château du Clos de Vougeot s&#39;est déroulé sous la présidence de Marc Fesneau, ministre de l&#39;Agriculture et de la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}