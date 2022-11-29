import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alain Souchon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alain Souchon"/>
        <meta name="description" content="Trending News about Alain Souchon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alain Souchon</h1>
            <Image width={800} height={500} src="" alt="Alain Souchon"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/alain-souchon-le-role-qua-joue-sa-femme-francoise-dans-sa-carriere-zaptv-743964'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alain Souchon : le rôle qu&#39;a joué sa femme Françoise dans sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRx4jwvuqv20rVb5jX9Eeq8Q-qNoHVb1yta7Ylrt3GgopFn6Gz5v0SaKbET-zu-cXS2VggmC0Rx" alt="Alain Souchon : le rôle qu&#39;a joué sa femme Françoise dans sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lundi 28 novembre, invité sur le plateau de C à vous, Alain Souchon a évoqué le rôle de sa femme dans sa carrière de chanteur : « Les deux personne...</p></div>
            </div>
        </a>
        </Template></>;
}