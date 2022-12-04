import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Veronique Sanson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Veronique Sanson"/>
        <meta name="description" content="Trending News about Veronique Sanson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Veronique Sanson</h1>
            <Image width={800} height={500} src="" alt="Veronique Sanson"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/veronique-sanson-et-sa-soeur-violaine-reunies-cette-emouvante-anecdote-sur-leurs-prenoms_507879'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Véronique Sanson et sa sœur Violaine réunies : cette émouvante ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRP19Czue5ug2lFANa7DnXn3tHYF6qdni5bnciZYH2SemIrj29eDRuTLC1HsIZ2qDLeS2Px86oo" alt="Véronique Sanson et sa sœur Violaine réunies : cette émouvante ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Véronique Sanson était à l&#39;honneur ce samedi 3 décembre sur TF1 dans &quot;Le Portrait de la semaine&quot; de l&#39;émission 50&#39; Inside. La chanteuse est notamme...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/people/315189-veronique-sanson-cette-anecdote-touchante-sur-son-prenom-et-celui-de-sa-soeur-violette/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Véronique Sanson : cette anecdote touchante sur son prénom et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Véronique Sanson : cette anecdote touchante sur son prénom et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Très discrète dans les médias en dépit de son immense popularité, Véronique Sanson était l&#39;invitée de Nikos Aliagas dans 50 Minutes Inside.</p></div>
            </div>
        </a><a href='https://www.voici.fr/tele/veronique-sanson-sa-soeur-violaine-explique-lorigine-de-leurs-prenoms-744354'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Véronique Sanson : sa sœur Violaine explique l&#39;origine de leurs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbPGvvGC0NDKZl4OZmZ4aZoS6c4KuGCywVZJ8kH9J3IdBGs3j9wuqFSYWrWQYy5mWwET9F2gOy" alt="Véronique Sanson : sa sœur Violaine explique l&#39;origine de leurs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 3 décembre 2022, Véronique Sanson était le portrait de la semaine dans l&#39;émission 50&#39; Inside (TF1). Entre souvenirs de scène et souvenirs...</p></div>
            </div>
        </a>
        </Template></>;
}