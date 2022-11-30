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
            <a href='https://www.gala.fr/l_actu/news_de_stars/zazie-maman-protectrice-ce-choix-de-carriere-quelle-a-fait-pour-sa-fille-lola_507542'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zazie maman protectrice : ce choix de carrière qu&#39;elle a fait pour sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUIMWiZutruCTaR_UOe8AssZ2jAu2mTHlNcQiqr2YrenLN-l2W43xCXmYS4lUMDIcvAGpqHF5-" alt="Zazie maman protectrice : ce choix de carrière qu&#39;elle a fait pour sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le 24 novembre dernier, Zazie se confiait dans le magazine de Sophie Davant sur sa carrière, son retour dans The Voice et sa fille Lola Cahen. Avec...</p></div>
            </div>
        </a>
        </Template></>;
}