import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kingsley Coman</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kingsley Coman"/>
        <meta name="description" content="Trending News about Kingsley Coman" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kingsley Coman</h1>
            <Image width={800} height={500} src="" alt="Kingsley Coman"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/kingsley-coman-la-mere-de-sa-fille-leyana-est-une-celebre-candidate-de-telerealite-743457'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kingsley Coman : la mère de sa fille Leyana est une célèbre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCGmt1fcIamqPqFEZv8vpknraGmO5D-g0W4GoezW3LNteT3HNMuHR44VRukgKknruavTDDXWkV" alt="Kingsley Coman : la mère de sa fille Leyana est une célèbre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En raison du forfait de plusieurs joueurs prometteurs, l&#39;équipe de France comptera parmi ses membres de nombreux footballeurs qui ne figuraient pas dans la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}