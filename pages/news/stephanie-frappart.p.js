import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stephanie Frappart</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stephanie Frappart"/>
        <meta name="description" content="Trending News about Stephanie Frappart" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stephanie Frappart</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/30/0/0/4999/3333/1440/960/60/0/daea4e7_1669825148229-t6a4861.jpg" alt="Stephanie Frappart"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/football/article/2022/11/30/coupe-du-monde-2022-stephanie-frappart-la-tete-la-premiere_6152426_1616938.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Stéphanie Frappart, la tête la première</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShub4jIADEzKhBdcpiqUvWd7IDZho0gaXM4V6ILobZSCQbwUHu7jOoeMxXK2xwFiGAJ-zNzAoL" alt="Coupe du monde 2022 : Stéphanie Frappart, la tête la première" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Première femme désignée pour arbitrer un match de Coupe du monde masculine, lors de Costa Rica-Allemagne, jeudi, la Française joue les pionnières depuis le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/replay-radio/l-intrus-de-l-actu/mondial-au-qatar-qui-est-stephanie-frappart-la-premiere-femme-qui-va-arbitrer-un-match-de-coupe-du-monde_5481276.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial au Qatar : qui est Stéphanie Frappart, la première femme ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-N6ffv6Jvi5wyJizgCEZFi5NIaF81kJti6kpWJKDBa-srVua-1gHa2WpUzy41jcq0lRk93A41" alt="Mondial au Qatar : qui est Stéphanie Frappart, la première femme ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Temps de lecture : 3 min. Stephanie Frappart arbitre le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Les-premieres-marquantes-de-stephanie-frappart/1367702'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les premières marquantes de Stéphanie Frappart</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQTZqZo-VepWFoAIVYRc-MDOv7pntconwa1bxznq5pzkMnZenr9Pq_jf3ujSKPLuQyz0fFYwJ6" alt="Les premières marquantes de Stéphanie Frappart" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;arbitre française Stéphanie Frappart a été désignée pour diriger la rencontre Costa Rica-Allemagne, ce jeudi à 20 heures. Une première pour une femme&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/sport/football/coupe-du-monde-2022-qui-est-stephanie-frappart-la-premiere-femme-arbitre-central-dans-une-coupe-du-monde-7900211508'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : qui est Stéphanie Frappart, la première ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRPHPcU3-iqmWVYb8TTgmr21RewE3Nu5E2lVI_-8Euo3pXziTAxLIUbZqcf7pxGDW9cwwfT048" alt="Coupe du monde 2022 : qui est Stéphanie Frappart, la première ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PODCAST - Dans cet épisode de &quot;Focus&quot;, Marion Calais dresse le portrait de Stéphanie Frappart, la toute première femme à officier en tant qu&#39;arbitre central&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot01.com/mondial-2022/cdm-stephanie-frappart-la-nouvelle-star-du-qatar-416556'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CdM : Stéphanie Frappart la nouvelle star du Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpQvHlUL2r7Lt2yDlr5OYwDTmal5kPWFfjSL4ZI8tl2SYHTQUsdq2Oq-OwkdN9j99plNENGKrS" alt="CdM : Stéphanie Frappart la nouvelle star du Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Désignée pour le match entre l&#39;Allemagne et le Costa Rica jeudi (20h), Stéphanie Frappart deviendra la première femme à arbitrer une rencontre de Coupe du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footamateur.fr/stephanie-frappart-un-leader-sur-le-terrain-quand-elle-etait-joueuse/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stéphanie Frappart : « un leader sur le terrain » quand elle était ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThwYHMxrTf1vVuCxCHIWOzNMQ1g9JVtDPv14W3DLDHgDox2HSfK_50yz5e2XhbA7pc5lBWBcNh" alt="Stéphanie Frappart : « un leader sur le terrain » quand elle était ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stéphanie Frappart va entrer dans l&#39;histoire de la coupe du monde en devenant la première femme arbitre principale d&#39;une rencontre.</p></div>
            </div>
        </a>
        </Template></>;
}