import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gamekult</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gamekult"/>
        <meta name="description" content="Trending News about Gamekult" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gamekult</h1>
            <Image width={800} height={500} src="https://media.lesechos.com/api/v1/images/view/6376acd2c5e05d2c6336c4a9/1280x720/0702805484987-web-tete.jpg" alt="Gamekult"/>
            <h3>Recent News</h3>
            <a href='https://www.lesechos.fr/tech-medias/medias/jeux-video-la-redaction-de-gamekult-annonce-son-depart-apres-le-rachat-par-reworld-1880192'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jeux vidéo : la rédaction de Gamekult annonce son départ après le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKUULgfF3VBwdtOtx6JtKjHtyPicgOuMxI-HPvON3tf10tBDANhr4hQ7uPqGW0rYPfI3Ek1e1d" alt="Jeux vidéo : la rédaction de Gamekult annonce son départ après le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Passé des mains de TF1 à celles de Reworld Media, le deuxième site d&#39;information français sur le jeu vidéo va se vider de ses journalistes.</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/pixels/article/2022/11/17/la-redaction-de-gamekult-demissionne-apres-le-rachat-du-site-par-reworld-media_6150369_4408996.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La rédaction de « Gamekult » démissionne après le rachat du site ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZwd1X_k2JEEaHt2BjtacJtJqqXLALJuLfUiD5O9V1rqhZMMZ0uZvtn1bJAURqur3sB3u3VYKq" alt="La rédaction de « Gamekult » démissionne après le rachat du site ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les journalistes du site de jeu vidéo ont annoncé jeudi qu&#39;ils entendaient presque tous quitter leur poste, après que sa maison mère, Unify,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/sciences-et-technologie/jeux-video/jeux-video-un-contexte-hostile-la-redaction-de-gamekult-annonce-son-depart-apres-le-rachat-par-rewold-13016613.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jeux vidéo : « un contexte hostile », la rédaction de Gamekult ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQK-QPw-ikqHhoWfFrp734-xbCAE9IrXU87qjqqtBVixqTYH8b18ciAO_VldkNLMUHvG3RPP2hI" alt="Jeux vidéo : « un contexte hostile », la rédaction de Gamekult ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Déplorant le « contexte économique et médiatique toujours plus hostile pour l&#39;indépendance de la presse jeu vidéo », la rédaction du site spécialisé et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/medias/contexte-hostile-la-redaction-de-gamekult-demissionne-apres-le-rachat-par-reworld-media-f6737f64-4b42-433c-8010-bdd7cdefa179'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Contexte hostile » : la rédaction de Gamekult démissionne après ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSGrEtb4wpy6Ika3kHXvoRHMIk_yv3SyxpLFdzUwaSzpdoHlG24E8dNe_hDpMfG5Rmlqg8ydn4" alt="« Contexte hostile » : la rédaction de Gamekult démissionne après ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les journalistes du site spécialisé dans les jeux vidéos ont annoncé, jeudi 17 novembre 2022, leurs départs en raison d&#39;un « contexte économique et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.actugaming.net/la-redaction-de-gamekult-annonce-quitter-le-site-533732/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La rédaction de Gamekult annonce quitter le site suite au rachat de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnn0ujRW89Q7H9v3b09_siagzFnLagZJ_fHQK381SqAm3J40rb169hPjcLue9pHRwwrOXaQdVC" alt="La rédaction de Gamekult annonce quitter le site suite au rachat de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est une bien triste nouvelle pour le presse du jeu vidéo en France que l&#39;on apprend ce soir. La rédaction de Gamekult vient tout juste d&#39;annoncer que la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liberation.fr/culture/jeux-video/la-redaction-de-gamekult-se-saborde-apres-le-rachat-de-reworld-20221117_BQMWUSWDXFAULN4WWCQ34JSXTY/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La rédaction de «Gamekult» se saborde après le rachat de Reworld</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQXYQwZNAauBlQdw_C0YBBMDtvz1OFNQjQjcDFvoIkUX1x5iyEWO4-MkvE_V7-wEEwC6WTS7wb" alt="La rédaction de «Gamekult» se saborde après le rachat de Reworld" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cédé de TF1 à Reworld, le deuxième site d&#39;information français sur le jeu vidéo, dernier encore attaché à une forte séparation entre articles et opérations&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}