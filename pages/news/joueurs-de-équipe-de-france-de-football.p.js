import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Joueurs de équipe de France de football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Joueurs de équipe de France de football"/>
        <meta name="description" content="Trending News about Joueurs de équipe de France de football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Joueurs de équipe de France de football</h1>
            <Image width={800} height={500} src="https://resize-lejdd.lanmedia.fr/var/jdd/public/media/image/2022/12/04/14/le-general-pierre-de-villiers-lettre-aux-joueurs-de-l-equipe-de-france-de-football.jpg?VersionId=USbLP1SkJqKLvSsiZDAEumXzKKI6dNP2" alt="Joueurs de équipe de France de football"/>
            <h3>Recent News</h3>
            <a href='https://www.lejdd.fr/Societe/le-general-pierre-de-villiers-lettre-aux-joueurs-de-lequipe-de-france-de-football-4152079'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le général Pierre de Villiers : « Lettre aux joueurs de l&#39;équipe de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSv0yFPifZYaIlLYyVV1Y6nR7dSTTYJn2EcRg_ziFDWoPv1fKQEFrxXXWwE22uxlShSu7vccr_S" alt="Le général Pierre de Villiers : « Lettre aux joueurs de l&#39;équipe de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans une lettre adressée aux Bleus, que publie « le JDD », le général Pierre de Villiers, passionné de football, explique que de nombreux jeunes les&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}