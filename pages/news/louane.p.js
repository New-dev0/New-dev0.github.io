import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Louane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Louane"/>
        <meta name="description" content="Trending News about Louane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Louane</h1>
            <Image width={800} height={500} src="https://img.20mn.fr/eHXzvvNjStCxrVZzhv8ceSk/1200x768_louane-lors-de-la-soiree-de-lancement-de-la-35-eme-edition-du-telethon-aux-studios-du-lendit-a-saint-denis-pres-de-paris-saint-denis-france-a-03-12-2021-sadaka-sada024-2112040210-credit-sadaka-edmond-sipa-2112040218" alt="Louane"/>
            <h3>Recent News</h3>
            <a href='https://www.20minutes.fr/paris/4010682-20221118-paris-louane-marraine-inedite-extinction-illuminations-champs-elysees'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris : Louane marraine de l&#39;inédite extinction des illuminations des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5dLSgKP4_KXkhJ3t1NwNhpuXKDs_pgxGQ8d6SsdTEW2hB6Zvz23IzyZOcm-CGzPJiPrlHTSjz" alt="Paris : Louane marraine de l&#39;inédite extinction des illuminations des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marraine des illuminations des Champs-Elysées, Louane récidive pour la première extinction des lumières de la plus belle avenue du monde, dimanche à 23h45.</p></div>
            </div>
        </a><a href='http://www.rfm.fr/news/Louane-son-nouvel-album-Sentiments-est-disponible-en-precommande-28031'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louane: son nouvel album « Sentiments » est disponible en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7rcy0dzqg4b9ZrgHIN6yh0wqdt87FXfdH-AcHMIe0klW4oH25PIhyz0warSzO6dLf0Dwj13De" alt="Louane: son nouvel album « Sentiments » est disponible en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après deux albums certifiés disques de diamants et un troisième album Joie de vivre, certifié disque de platine, Louane revient avec un album concept à la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}