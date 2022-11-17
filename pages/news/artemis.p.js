import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Artemis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Artemis"/>
        <meta name="description" content="Trending News about Artemis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Artemis</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/16/222/0/4842/2421/1440/720/60/0/458f6dd_cc3f3a0617034b698c09e042c3106d69-0-8b9407bd08e54557944266678d7faf63.jpg" alt="Artemis"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/sciences/live/2022/11/16/artemis-1-vivez-en-direct-le-lancement-de-la-megafusee-vers-la-lune_6150052_1650684.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artemis-1 : revivez le lancement de la mégafusée, qui a permis de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHw_wdWrBkQv5w-15hpuaZ5cwwHyvrW1NeGdAF1hsdhjxyjXjMfe1pQovX-WbFTBkOz2j6z9qn" alt="Artemis-1 : revivez le lancement de la mégafusée, qui a permis de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sauf erreur la mission Artemis n&#39;embarque pas de module lunaire (type LEM) mais uniquement le vaisseau de contrôle. Est-ce exact ? Je me souvienns qu&#39;entre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.futura-sciences.com/sciences/actualites/artemis-i-artemis-i-plus-puissante-fusee-histoire-decolle-succes-etats-unis-sont-nouveau-course-lune-100429/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artemis I : la plus puissante fusée de l&#39;histoire a décollé avec succès ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgL3OsUjiPTrrlHB-oNXZr1kvMk1nd0dCZamt0H6WcVWZWAOiuCR9NLSsKI973u6qTbJTJIKiG" alt="Artemis I : la plus puissante fusée de l&#39;histoire a décollé avec succès ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tôt ce matin, le puissant lanceur SLS a décollé du Centre spatial Kennedy et mis en orbite le véhicule Orion à destination de la Lune pour une mission de 25&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/sciences-et-innovation/espace-nasa-decollage-mission-artemis-vers-la-lune-mercredi-16-novembre-ce-qu-il-faut-savoir-sur-le-troisieme-essai-de-lancement-de-la-fusee-sls-2238745.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO - La fusée Artemis enfin lancée vers la Lune : revoyez les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAnxiTEK5L6KlMWzbIqbnH6O7AnvARDWabWUeKn6trpOZKeBkMQAnEspLQIv2is8uIECd8JtXv" alt="VIDÉO - La fusée Artemis enfin lancée vers la Lune : revoyez les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Le lancement de la méga-fusée SLS, prévu dans la nuit de mardi à mercredi, depuis la Floride, a bien eu lieu, mercredi 16 novembre.</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/16/artemis-1-un-probleme-de-fuite-retarde-le-decollage-de-la-megafusee-vers-la-lune-suivez-le-direct-10806153.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artemis-1 : la mégafusée a décollé ce mercredi matin, la reconquête ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcScOAg_ke1_C-qBcDjuPM35_ioKe92P4YrO0O3olulKuGIkKONA_8Oka5L3QKcdtbBiaHOqRBvQ" alt="Artemis-1 : la mégafusée a décollé ce mercredi matin, la reconquête ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Nasa procède ce mercredi 16 novembre au premier vol d&#39;essai de sa fusée de nouvelle génération SLS (Space Launch System) dans le cadre de son programme&nbsp;...</p></div>
            </div>
        </a><a href='https://www.courrierinternational.com/article/objectif-lune-artemis-le-gros-lanceur-de-la-nasa-a-enfin-decolle'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artémis : le gros lanceur de la Nasa a enfin décollé</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSWg0PHNaCa_3DGFTUvDfPCTKxSb_XP1lzB1hDKN127yrP8RcDxZpzuPflBwitmrSIXGMlzWIo" alt="Artémis : le gros lanceur de la Nasa a enfin décollé" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mercredi 16 novembre au matin, à 7 h 47 (heure de Paris), la mégafusée américaine SLS a quitté le sol de Cap Canaveral, en Floride.</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/sciences/espace/mission-artemis-vers-la-lune/direct-mission-artemis-vers-la-lune-suivez-le-lancement-de-la-fusee-depuis-le-centre-spatial-kennedy-en-floride_5478240.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DIRECT. Mission Artemis : le module Orion s&#39;est détaché et se dirige ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ18HtqBWw3PdWxhp4arMJ4r5LdFiGajvC6CxEgTCrN-JEV-fRrfulwFxemneDWKtlZUFiRDdGA" alt="DIRECT. Mission Artemis : le module Orion s&#39;est détaché et se dirige ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après plusieurs reports, la Nasa a (enfin) fait décoller mercredi sa nouvelle fusée SLS pour le premier volet de cette mission qui doit marquer le retour de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}