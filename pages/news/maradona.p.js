import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maradona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maradona"/>
        <meta name="description" content="Trending News about Maradona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maradona</h1>
            <Image width={800} height={500} src="https://media.sudouest.fr/13138776/1200x-1/maradona-naples-pour-page-culture-sport.jpg" alt="Maradona"/>
            <h3>Recent News</h3>
            <a href='https://www.sudouest.fr/sport/maradona-une-figure-christique-napolitaine-13138776.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maradona, une figure christique napolitaine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNl11MM2flHdbnMN5ylexWkzDh79cqib5hpBu3ecAoMadR9DxLi_8cCP_7QXbP93UQnnjqKrZ3" alt="Maradona, une figure christique napolitaine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;écrivain et chercheur en littérature Philippe Vilain signe « Maradona », un essai sur l&#39;influence de l&#39;icône argentine Dans la floraison éditoriale qui&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}