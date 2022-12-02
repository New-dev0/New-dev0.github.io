import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Foot</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Foot"/>
        <meta name="description" content="Trending News about Foot" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Foot</h1>
            <Image width={800} height={500} src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2022/12/applications-football-1200.jpg" alt="Foot"/>
            <h3>Recent News</h3>
            <a href='https://www.cnetfrance.fr/produits/4-applications-pour-suivre-les-resultats-du-foot-en-direct-39950508.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>4 applications pour suivre les résultats du foot en direct</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKiEtuMxnY77JpQn0YRDpyDwWxmFcn2WuzWYAtgO4qKcM4umcRwsUuRjvwBCq8qPCFONqMrRsw" alt="4 applications pour suivre les résultats du foot en direct" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ligue des Champions, ligue 1, Coupe du Monde : pour ne rien rater de vos championnats préférés, testez l&#39;une de ces applis. Vous pourrez suivre tous les&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}