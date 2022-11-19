import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Call Me By Your Name</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Call Me By Your Name"/>
        <meta name="description" content="Trending News about Call Me By Your Name" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Call Me By Your Name</h1>
            <Image width={800} height={500} src="https://focus.nouvelobs.com/2022/11/02/148/0/1200/600/1200/630/60/0/7c9ba80_1667378959307-call-me-by-yoname.jpg" alt="Call Me By Your Name"/>
            <h3>Recent News</h3>
            <a href='https://www.nouvelobs.com/ce-soir-a-la-tv/20221118.OBS66090/call-me-by-your-name-l-eloge-du-beau.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Call Me by Your Name », l&#39;éloge du beau</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTG-1uhExP_A1dVYwaJzesvpbsdA5RLSlFdmQ9IzMSQE54Z5t1hW1L7Bf37JYPrmYe9KbiCBDJf" alt="« Call Me by Your Name », l&#39;éloge du beau" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans cette histoire de premier amour sous le soleil toscan, le charisme de Timothée Chalamet transcende l&#39;esprit épicurien du roman d&#39;André Aciman dont le&nbsp;...</p></div>
            </div>
        </a><a href='https://tetu.com/2022/11/18/tv-call-me-by-your-name-film-amour-gay-culte-programme-arte-replay/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pour retrouver la pêche, &quot;Call Me By Your Name&quot; programmé sur Arte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTJojdlT61CO_GaPLMduKg4hJD9aC9fSHSet1bztWdLbGvEqZzinufX-43r4hw94XR23CcSmTj" alt="Pour retrouver la pêche, &quot;Call Me By Your Name&quot; programmé sur Arte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le film gay culte de Luca Guadagnino, adapté du roman d&#39;André Aciman, dépeint la naissance des sentiments entre Elio et Oliver, un été en Italie…</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/cinema/call-me-by-your-name-pourquoi-les-scenes-de-sexe-ont-enerve-le-scenariste-james-ivory-5504249/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Call Me by Your Name : pourquoi les scènes de sexe ont énervé le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHDb3vFvCiHv3TD9AASkF2vKLjtlhFQUysKOib3ZOX9HKTtXlW6kn-QRe-Dr9r5qPsu2dvZI-O" alt="Call Me by Your Name : pourquoi les scènes de sexe ont énervé le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lors de la sortie de &quot;Call Me by Your Name&quot;, le scénariste James Ivory a reproché au film son manque de scènes de sexe et de nudité frontale.</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/cinema/313965-call-me-by-your-name-france-5-avez-vous-reconnu-cette-petite-soeur-dun-chouchou-du-cinema-francais/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Call Me by Your Name (France 5) : avez-vous reconnu cette petite ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Call Me by Your Name (France 5) : avez-vous reconnu cette petite ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le nom de Timothée Chalamet ne vous est sûrement pas indifférent, et pour cause. Du haut de ses 26 ans, le jeune acteur a déjà joué dans de nombreux films comme&nbsp;...</p></div>
            </div>
        </a><a href='https://bullesdeculture.com/call-me-by-your-name-tv-avis-film/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Call Me By Your Name&quot; ce soir sur France 5 avec Timothée ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHt16W3FPEpj7hvRUjwdT-8Ozczi467WU2xGGl8UsT-zNU9NpL-R1mAtfAIyPYzhU3LstQM25j" alt="&quot;Call Me By Your Name&quot; ce soir sur France 5 avec Timothée ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À la télévision sur France 5 et en streaming/replay : &quot;Call Me By Your Name&quot;, un drame romantique avec Armie Hammer, Timothée Chalamet...</p></div>
            </div>
        </a><a href='https://www.planet.fr/la-vie-des-stars-esther-garrel-call-me-by-your-name-qui-sont-les-prestigieux-membres-de-sa-famille.2662621.764617.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esther Garrel (Call Me by Your Name) : qui sont les prestigieux ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpNzKU2D3UoeR3wH5kn2DbET1KINNvf15FwJWkeNNcF4X2vHOWfdy12OHXgB2VvNgEFDD_0Vzj" alt="Esther Garrel (Call Me by Your Name) : qui sont les prestigieux ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;actrice Esther Garrel est l&#39;une des stars du film &quot;Call Me by Your Name&quot;, diffusé ce 18 novembre sur France 5. Figure montante du septième art,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}