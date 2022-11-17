import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Route du Rhum direct</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Route du Rhum direct"/>
        <meta name="description" content="Trending News about Route du Rhum direct" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Route du Rhum direct</h1>
            <Image width={800} height={500} src="" alt="Route du Rhum direct"/>
            <h3>Recent News</h3>
            <a href='https://www.francelive.fr/teaser/ouest-france/direct-route-du-rhum-arrivee-et-victoire-imminentes-pour-caudrelier-qui-a-passe-basse-terre-7714600/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DIRECT. Route du Rhum : la course endeuillée, Caudrelier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQhbBbPQhm0VZXmd7bCkdAQylydrF_s4C-eyxNmip3ewktq7lERBSmIZzcvF-kSpHUfZD7MfEof" alt="DIRECT. Route du Rhum : la course endeuillée, Caudrelier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;arrivée des premiers bateaux de la Route du Rhum en Guadeloupe, à Pointe-à-Pitre, c&#39;est pour ce mercredi 16 novembre 2022. L&#39;Ultim de Charles.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Voile/Actualites/Suivez-l-arrivee-de-la-route-du-rhum-en-direct-video/1365120'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suivez l&#39;arrivée de la Route du Rhum en direct vidéo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLYdB7W00j3PoPF8evji1HcvQ18LkwWROAD6EA70YXnV4rYKgtd0flk1C65p8tcovhUVTdsCGA" alt="Suivez l&#39;arrivée de la Route du Rhum en direct vidéo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;arrivée de la douzième Route du Rhum a lieu ce mercredi matin, avec Charles Caudrelier (Maxi Edmond de Rothschild) attendu en vainqueur.</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/voile/route-du-rhum/direct-suivez-l-arrivee-de-la-route-du-rhum-20221116'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DIRECT - suivez l&#39;arrivée de la Route du rhum</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcReLfffWlFC2Uj1-9Vfgg3tJWaYPJ8uGIa73NxjUNl15R3q5HyZOAf9GC4FiN_ouwoP7Zt0iyGi" alt="DIRECT - suivez l&#39;arrivée de la Route du rhum" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charles Caudrelier est ce mercredi arrivé en grand vainqueur à Pointe-à-Pitre.</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/bretagne/ille-et-vilaine/saint-malo/direct-video-route-du-rhum-2022-charles-caudrelier-en-tete-vivez-l-arrivee-du-premier-skipper-en-guadeloupe-2655696.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO. Route du Rhum 2022 : Charles Caudrelier vainqueur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLjLnjudTz-xZ-KwaXyExTuh8MktgabEVgGZCT_GWH6v5s0UgXtbOhZE5sJTsJe8lH7Q8TrpMb" alt="VIDEO. Route du Rhum 2022 : Charles Caudrelier vainqueur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charles Caudrelier est le grand vainqueur de la Route du Rhum 2022 qu&#39;il aura dominé de Saint-Malo à Pointe-à-Pitre. Une course effrénée sur son Maxi Edmond&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/sports/voile/route-du-rhum-un-accident-a-l-arrivee-de-la-course-en-guadeloupe-1668598411'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Route du Rhum : deux morts dans le chavirage d&#39;un bateau suiveur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPIRiSQQAp88vKFh957YznhVvntFVl2Z8c4aucd3IGUUAObK-ebsjy4HVtG_76ZGbv-prFEZPh" alt="Route du Rhum : deux morts dans le chavirage d&#39;un bateau suiveur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux membres de l&#39;organisation de la course sont morts dans le chavirage de leur bateau, ce mercredi 16 novembre, à Pointe-à-Pitre en Guadeloupe.</p></div>
            </div>
        </a><a href='https://la1ere.francetvinfo.fr/martinique/route-du-rhum-2022-suivez-en-direct-l-arrivee-du-vainqueur-de-la-12e-edition-a-pointe-a-pitre-guadeloupe-1340576.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Route du Rhum 2022 : suivez en direct l&#39;arrivée du vainqueur de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRT3mM38sXAZ7Vq2NhkAlnZ4eXX33mU2qY0DN5wfDYlxwUCo6c6i4_p6wv-opVTADabd5eX1TgI" alt="Route du Rhum 2022 : suivez en direct l&#39;arrivée du vainqueur de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charles Caudrelier, (Maxi Edmond de Rothschild) en tête de la Route du Rhum, devrait couper la ligne d&#39;arrivée à Pointe-à-Pitre, ce mercredi 15 novembre&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}