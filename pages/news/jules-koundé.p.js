import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jules Koundé</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jules Koundé"/>
        <meta name="description" content="Trending News about Jules Koundé" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jules Koundé</h1>
            <Image width={800} height={500} src="https://media.ouest-france.fr/v1/pictures/MjAyMjEyZWUyOGYzMmI2N2E3Y2Y3NzlhODE2ZDEzNWRlMTlmOTc?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=213ecf8be464e84942f4b00880fd974c9117cc24135288b3a1471f960723f48e" alt="Jules Koundé"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/sport/football/equipe-de-france/coupe-du-monde-didier-deschamps-agace-contre-jules-kounde-apres-la-polemique-du-collier-c0a11848-7407-11ed-9402-c361be74b85c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde. Didier Deschamps agacé contre Jules Koundé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPJ7s_rxMKc3gTaUseHmkgCMvvQFkF9eW4qN49h-S_ZTUO0ZJ28ByAMeKgI-QTiNsXf6yvHMNU" alt="Coupe du monde. Didier Deschamps agacé contre Jules Koundé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur de l&#39;équipe de France n&#39;a pas apprécié que son joueur, Jules Koundé, ait dérogé au règlement en portant deux chaînes autour du cou lors du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/sport/football-coupe-du-monde-2022-video-france-pologne-jules-kounde-avait-il-le-droit-de-jouer-avec-une-chaine-autour-du-cou-2240770.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Pologne : Jules Koundé avait-il le droit de jouer avec une ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQi1z-YOWW_LE8S8FzFup6tiUBuyF3K7VQOHnQrF0itNOj6EEIDdaMGB7-qXpWwllMS7MGAMFWC" alt="France-Pologne : Jules Koundé avait-il le droit de jouer avec une ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Jules Koundé a débuté le huitième de finale France-Pologne, dimanche 4 décembre, avec une chaine autour du cou. Or, le règlement interdit le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/football/coupe-du-monde/2022/coupe-du-monde-france-pologne-jules-kounde-1-quatrieme-arbitre-0-le-francais-a-joue-avec-des-collier_sto9259838/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde | France - Pologne | Jules Koundé 1, quatrième ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPl6eE0HmrF0MlGLQutbqBv2Wmnr5m8AGXED2WSIjqKnENb7-gS2OJsQrElTPQdVw37hKqTvan" alt="Coupe du monde | France - Pologne | Jules Koundé 1, quatrième ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jules Koundé a agité Twitter en arborant des colliers lors du 8e de finale de Coupe du monde 2022 entre la France et la Pologne au Qatar.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Didier-deschamps-sur-les-chaines-en-or-de-jules-kounde-les-joueurs-ne-vont-pas-non-plus-jouer-avec-une-montre-ou-des-lunettes-de-soleil/1368470'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deschamps n&#39;a pas aimé la mésaventure de Koundé avec ses ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSAcvyBxZAJGOCu2e17w15xnRoYEiIUYH83pyn8B0TUJvMh0wGu1A9zdv76LdJdr_GDvdHQ-J9" alt="Deschamps n&#39;a pas aimé la mésaventure de Koundé avec ses ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Didier Deschamps, sélectionneur de l&#39;équipe de France, n&#39;a guère apprécié de découvrir que Jules Koundé portait des chaînes en or autour du cou pendant le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a3771871233545132192-france-pologne-jules-kounde-savoure-la-reaction-des-bleus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France - Pologne : Jules Koundé savoure la réaction des Bleus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNYXM8ZFFQm785H-RL-q0I6j9HlOkaC2x4oEGBc6L4nnbZYTzciDgIU1VTf3deR72z2UJcI06B" alt="France - Pologne : Jules Koundé savoure la réaction des Bleus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Direction les quarts de finale pour l&#39;Équipe de France après son succès maîtrisé face à la Pologne (3-1), lors des huitièmes de finale de la Coup (.</p></div>
            </div>
        </a><a href='https://www.goal.com/fr/news/jules-kounde-joue-avec-une-chaine-autour-du-cou-que-risque-la-france/blt891cbdde2665c432'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jules Koundé joue avec une chaine autour du cou, que risque la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZeVb3XkfZ8UG2dajEYA_JyLyuvGC2WUzA03TuUl4vu68laAC0Nezxc-cieBqqVZtuUYdjxTd_" alt="Jules Koundé joue avec une chaine autour du cou, que risque la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le défenseur français s&#39;est présenté au match contre la Pologne avec une grosse chaine autour du cou. Il a enfreint le règlement.</p></div>
            </div>
        </a>
        </Template></>;
}