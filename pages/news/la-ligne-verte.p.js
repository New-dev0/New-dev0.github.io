import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>La Ligne verte</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,La Ligne verte"/>
        <meta name="description" content="Trending News about La Ligne verte" /></Head><Template>
            <h1 style={{fontSize: "30"}}>La Ligne verte</h1>
            <Image width={800} height={500} src="https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2022-11/la-ligne-verte.jpg" alt="La Ligne verte"/>
            <h3>Recent News</h3>
            <a href='https://www.femina.fr/article/la-ligne-verte-5-secrets-de-tournage-du-film-culte'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« La ligne verte » : 5 secrets de tournage du film culte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXuN4ms9Rt-_5Emg2wAVkVo3m3GUCxQwhnrKwB93V-DAFJEV9BsJAMEZ2J1KoU9xi_g-0-bxpK" alt="« La ligne verte » : 5 secrets de tournage du film culte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Malgré ses 2 mètres 10 pour 165 kg, l&#39;acteur Michael Clarke Duncan a dû se rendre plus grand. Le réalisateur Frank Darabont a notamment utilisé des objectifs de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.allocine.fr/article/fichearticle_gen_carticle=1000001445.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ce soir à la télé : l&#39;un des meilleurs films de tous les temps selon les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQn5TT3P0ftPX1rTUhflBGfhCjeE4kgwI5_ZMxJfBXHF7WR40bfEt1qFh8oYdUsNMGgmQg3YeX" alt="Ce soir à la télé : l&#39;un des meilleurs films de tous les temps selon les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chaque jour, AlloCiné vous recommande un film à (re)voir à la télé. Ce soir : une histoire poignante adaptée de Stephen King.</p></div>
            </div>
        </a>
        </Template></>;
}