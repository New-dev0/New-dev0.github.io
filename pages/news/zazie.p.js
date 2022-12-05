import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zazie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zazie"/>
        <meta name="description" content="Trending News about Zazie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zazie</h1>
            <Image width={800} height={500} src="" alt="Zazie"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/zazie-contrainte-de-demenager-le-ras-le-bol-de-ses-voisins_507917'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie contrainte de déménager : le ras-le-bol de ses voisins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZRJeS3zy09UnBF7PNP4CUd12DTga7T28st3vc0tYyuskUIoLNynajYje6Vul11mpxPZfKChpo" alt="Zazie contrainte de déménager : le ras-le-bol de ses voisins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Libération” a déroulé le tapis rouge à Zazie en lui dédiant un magnifique portrait dans son édition du vendredi 2 décembre. Le quotidien nous appr...</p></div>
            </div>
        </a>
        </Template></>;
}