import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enquete sur un scandale dEtat</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enquete sur un scandale dEtat"/>
        <meta name="description" content="Trending News about Enquete sur un scandale dEtat" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enquete sur un scandale dEtat</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/04/0/1/1918/1279/1440/960/60/0/2346723_1667578020292-51-enquete-sur-un-scandale-detat-les-films-velvet-elise-pinelli.jpg" alt="Enquete sur un scandale dEtat"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/culture/article/2022/11/16/enquete-sur-un-scandale-d-etat-sur-canal-un-polar-paranoiaque-autour-des-revelations-d-un-infiltre_6150203_3246.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Enquête sur un scandale d&#39;Etat », sur Canal+ : un polar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQUgcnjX8gW2olsSDSNb4cDHsgGpdXjxLb7yH8o_kn-RtdC2In-hunluLBBEVWTDjtZ1fCELIo" alt="« Enquête sur un scandale d&#39;Etat », sur Canal+ : un polar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thierry de Peretti construit une histoire paranoïaque sur fond de trafic de drogue, inspiré d&#39;une histoire vraie sur la relation entre un indic de la police&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/cinema/enquete-sur-un-scandale-detat-qui-est-le-lanceur-dalerte-interprete-par-roschdy-zem-5502699/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enquête sur un scandale d&#39;état : qui est le lanceur d&#39;alerte interprété ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdJGbGP0yEhYUzXyXqg1ADUeOV2v33SewnG475BmvAWj8s2rNChirxvLDUenAg1CU0gfbhnZez" alt="Enquête sur un scandale d&#39;état : qui est le lanceur d&#39;alerte interprété ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qui est Hubert Avoine, l&#39;informateur qu&#39;interprète Roschdy Zem dans le film de Thierry de Peretti &quot;Enquête sur un scandale d&#39;état&quot; ?</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/teleobs/20221116.OBS65988/enquete-sur-un-scandale-d-etat-dans-les-eaux-troubles-de-la-republique.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Enquête sur un scandale d&#39;État », dans les eaux troubles de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSy6sRLLvR-rBjM90Z8cNMtjhEhvcZZp4H8MBqTioOs7d76npV2-KC1PBQNgKoEzsYucaZ23Doz" alt="« Enquête sur un scandale d&#39;État », dans les eaux troubles de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un passionnant polar politique signé Thierry de Peretti, avec Roschdy Zem, génial en indic filou.</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/cinema/313393-enquete-sur-un-scandale-detat-canal-le-film-avec-pio-marmai-est-il-tire-dune-histoire-vraie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enquête sur un scandale d&#39;Etat (Canal+) : le film avec Pio Marmaï ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Enquête sur un scandale d&#39;Etat (Canal+) : le film avec Pio Marmaï ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mercredi 16 novembre, Canal+ diffuse dès 21h05 le film inédit Enquête sur un scandale d&#39;Etat, sorti au cinéma en février 2022. Un long-métrage adapté&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}