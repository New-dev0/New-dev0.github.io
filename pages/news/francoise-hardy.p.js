import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Francoise Hardy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Francoise Hardy"/>
        <meta name="description" content="Trending News about Francoise Hardy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Francoise Hardy</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/12/07/87/0/4274/2849/1440/960/60/0/ef18632_1670407349986-pns-3927750.jpg" alt="Francoise Hardy"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/culture/article/2022/12/09/francoise-hardy-tant-de-belles-choses-sur-france-3-l-itineraire-d-une-elegante-icone-de-la-chanson-francaise_6153756_3246.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Françoise Hardy, tant de belles choses », sur France 3 : l&#39;itinéraire ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRw2ZWjLkA9tzG_VJTAiKXvoafoaGYcqUoqOj3fkzWGJ1HGTRQK_ya2plmy6ljuMyCzXNJ3IJP4" alt="« Françoise Hardy, tant de belles choses », sur France 3 : l&#39;itinéraire ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Olivier Bellamy et Jean-Pierre Devillers ont consacré, en 2004, un portrait à la chanteuse de « Tous les garçons et les filles » pour ses quarante ans de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}