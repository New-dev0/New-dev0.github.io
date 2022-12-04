import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Poitiers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Poitiers"/>
        <meta name="description" content="Trending News about Poitiers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Poitiers</h1>
            <Image width={800} height={500} src="https://www.centre-presse.fr/images/articles/800x600_407649.jpg?20221204021340" alt="Poitiers"/>
            <h3>Recent News</h3>
            <a href='https://www.centre-presse.fr/article-877690-poitiers-les-agents-ont-besoin-d-un-cap.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poitiers : &quot;Les agents ont besoin d&#39;un cap&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmMqOkLoS-huF97FKGm-2FbStH8HsW3cBh0m6RkuEpo-eBs7zZ-ZIov2vvGNC6f-LStF_ydhIq" alt="Poitiers : &quot;Les agents ont besoin d&#39;un cap&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Élu en charge des agents de Poitiers, Grand Poitiers et le CCAS, Stéphane Allouch défend la réorganisation des services, « qui va prendre du.</p></div>
            </div>
        </a>
        </Template></>;
}