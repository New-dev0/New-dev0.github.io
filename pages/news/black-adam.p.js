import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Black Adam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Black Adam"/>
        <meta name="description" content="Trending News about Black Adam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Black Adam</h1>
            <Image width={800} height={500} src="https://www.comicsblog.fr//images/news/crop2_BA-dix-minutes1.jpg" alt="Black Adam"/>
            <h3>Recent News</h3>
            <a href='https://www.comicsblog.fr/44852-Black_adam__les_10_premieres_minutes_du_film_mises_en_ligne_pour_accompagner_la_sortie_VOD_aux_etatsunis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Adam : les 10 premières minutes du film mises en ligne pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwGegKZRCl3htWFdcMaw2MmXceGIsElfbY5NfR-Yr4DS4PzJ09BgKlu70vyfb4oy-xoCqBg28A" alt="Black Adam : les 10 premières minutes du film mises en ligne pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Discovery semble avoir compris qu&#39;il faut d&#39;ores et déjà passer à l&#39;étape suivante pour que le film Black Adam ne tombe pas de suite dans l&#39;oubli. Aussi a-t-on&nbsp;...</p></div>
            </div>
        </a><a href='http://lestoilesheroiques.fr/2022/11/black-adam-les-dix-premieres-minutes-du-film-sont-en-ligne.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Adam : Les dix premières minutes du film sont en ligne ! | Les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSf6Ae1qE6D2z_TjM8XTNs1DZ0AMcPUN5k5vPwng_r-V8ULFEUH6hP_8A8DG-ToqvudjNuLiVx2" alt="Black Adam : Les dix premières minutes du film sont en ligne ! | Les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;actu des films et des séries Marvel (Thor, Black Panther, Ant-Man, Avengers) et DC Comics (Black Adam, Shazam, The Flash) !</p></div>
            </div>
        </a>
        </Template></>;
}