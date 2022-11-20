import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matt Pokora</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matt Pokora"/>
        <meta name="description" content="Trending News about Matt Pokora" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matt Pokora</h1>
            <Image width={800} height={500} src="https://www.radiofrance.fr/s3/cruiser-production/2022/11/edba1e19-325c-4d84-8497-7e5197114ad7/1200x680_pa_m-pokora-derushage.00_09_22_08.still005.jpg" alt="Matt Pokora"/>
            <h3>Recent News</h3>
            <a href='https://www.francebleu.fr/emissions/la-playlist-de/la-playlist-de-matt-pokora'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Playlist de Matt Pokora</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9fmUOxhKISeiursuCkPuFqXM1bWdBpZDxtr-WeQPeJpVDDzZ-UiZCkNYj3vC9Feex4-Tlq-eV" alt="La Playlist de Matt Pokora" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quelles sont les chansons préférées de Matt Pokora ? Quels sont les titres qui l&#39;ont construit et lui ont donné envie de faire cette carrière ?</p></div>
            </div>
        </a>
        </Template></>;
}