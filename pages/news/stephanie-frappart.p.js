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
            <Image width={800} height={500} src="https://images.midilibre.fr/api/v1/images/view/6389b8b2a1b8cc3c412bff64/large/image.jpg?v=1" alt="Stephanie Frappart"/>
            <h3>Recent News</h3>
            <a href='https://www.midilibre.fr/2022/12/02/coupe-du-monde-2022-stephanie-frappart-une-soiree-pour-marquer-lhistoire-10841858.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Stéphanie Frappart, une soirée pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGhqSzz5fRxCaJSF2GJAsm_J3kWeeWLQuFH5uAwRdmsKF8v8iGxFt37CDsbhV9gG3OiEif0cqA" alt="Coupe du monde 2022 : Stéphanie Frappart, une soirée pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scénario de folie mais match sans histoire pour une soirée historique: la Française Stéphanie Frappart est devenue jeudi la première femme à arbitrer en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Premiere-reussie-pour-stephanie-frappart-en-coupe-du-monde/1367958'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Première réussie pour Stéphanie Frappart en Coupe du monde</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIAcdKinqijFmM33Bgf8RqWOCLivSxWWBLKzkPSl8SC_MH9SJvmlUoTo8bsVHSAIXcsh7epctX" alt="Première réussie pour Stéphanie Frappart en Coupe du monde" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au bout d&#39;une soirée folle et d&#39;un match bien maîtrisé, la Française Stéphanie Frappart est devenue la première femme de l&#39;histoire à diriger un match de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/football/coupe-du-monde/coupe-du-monde-stephanie-frappart-est-entree-dans-l-histoire-par-la-grande-porte-20221201'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : Stéphanie Frappart est entrée dans l&#39;histoire par ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaxJuBGCYzjvvTsuRMF1wBtz7AIBwIV3fhSSeITgRtInS-JEhYIaB0N0XQdZZE5lu0GOHQpAQS" alt="Coupe du monde : Stéphanie Frappart est entrée dans l&#39;histoire par ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Première femme à arbitrer une rencontre de Coupe du monde masculine, la Française a livré une prestation parfaite lors du succès de l&#39;Allemagne sur le Costa&nbsp;...</p></div>
            </div>
        </a><a href='https://olympics.com/fr/infos/stephanie-frappart-coupe-monde-premiere-femme-arbitre-cinq-choses-savoir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cinq choses à savoir sur Stéphanie Frappart, la première femme ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQes4EU2YcLt9dZ-0gbZd8k1iRAzMBuSomuH8HrOYOghP1sIlVJPp8dSnn5rNT4ZgJa4FMSjm8C" alt="Cinq choses à savoir sur Stéphanie Frappart, la première femme ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après avoir été quatrième arbitre lors de deux matchs de Coupe du monde, quelques jours auparavant au Qatar, c&#39;est au centre et avec le sifflet qu&#39;officiera&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/sport/20221201.OBS66633/le-destin-fulgurant-de-stephanie-frappart-premiere-femme-a-arbitrer-un-match-de-coupe-du-monde.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stéphanie Frappart, première femme à arbitrer un match de Coupe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqJ1gfY_uTtOgEbP3nz0FtjtBYA8K0mOEOGIaLkgn56cZ6DBH8MKU_MK-MYL_WYzaq1WRnKEH7" alt="Stéphanie Frappart, première femme à arbitrer un match de Coupe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VIDEO. Eternelle « première » de l&#39;arbitrage féminin, Stéphanie Frappart poursuit sa carrière d&#39;exception sur les terrains qataris, ou elle arbitre ce jeudi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/coupe-du-monde/en-images-coupe-du-monde-2022-les-cinq-dates-qui-ont-fait-de-stephanie-frappart-une-pionniere-de-l-arbitrage_5515479.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EN IMAGES. Coupe du monde 2022 : les cinq dates qui ont fait de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdBz3sM9hmwD_uEIJCYV81Pyd-96AvARsaV1FOF4_5YKSYcMZdMFyz8nhFCEHPW2p4-HUxmbx3" alt="EN IMAGES. Coupe du monde 2022 : les cinq dates qui ont fait de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vingt-deux joueurs sur la pelouse. Et une femme au sifflet. Un pas dans l&#39;évolution de la place des femmes dans le football est franchi, au Qatar,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}