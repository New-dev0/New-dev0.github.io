import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Didier Raoult</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Didier Raoult"/>
        <meta name="description" content="Trending News about Didier Raoult" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Didier Raoult</h1>
            <Image width={800} height={500} src="https://media.sudouest.fr/13020074/1200x-1/sudouest-photo-1-29173202.jpg" alt="Didier Raoult"/>
            <h3>Recent News</h3>
            <a href='https://www.sudouest.fr/france/didier-raoult-etudes-truquees-pressions-protections-les-revelations-de-complement-d-enquete-13020074.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Didier Raoult : études truquées, pressions, protections, les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSwq66WLkUjHA5pXSqkkqbiBn8DzkbwEBWb_CGImyXp__AmOAn6RG1ok8JKWhV6HN5199fg1DM" alt="Didier Raoult : études truquées, pressions, protections, les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le magazine d&#39;investigation de France 2 s&#39;est intéressé au médiatique et controversé professeur marseillais, confirmant tous les doutes qui émergent depuis&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liberation.fr/checknews/non-didier-raoult-na-pas-ete-ecarte-du-top-50-des-personnalites-preferees-des-francais-publie-par-le-jdd-20221117_3WJTLORMKRCF7F52UY4HMS5I2M/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Non, Didier Raoult n&#39;a pas été écarté du top 50 des personnalités ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvock--GeKeXO2jL3ICxVrdWxJm6an_mh42DwD69Cg0yTJSIxni7qzzYZtDRuoeKwC-Ybcu-CO" alt="Non, Didier Raoult n&#39;a pas été écarté du top 50 des personnalités ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;infectiologue marseillais a critiqué le classement des personnalités préférées des Français du «Journal du dimanche», dont il ne fait pas partie.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/17/hydroxychloroquine-complement-denquete-devoile-comment-letude-de-didier-raoult-a-ete-faussee-10809921.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;étude de Didier Raoult sur le Covid-19 et l&#39;hydroxychloroquine a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCXRnEf5sXN92mh95rFTcyFyyTAHzoHywhqkYl14d0-x_hLUKuYrtn4Pc9eFg6rS6Ou9CU7GXU" alt="L&#39;étude de Didier Raoult sur le Covid-19 et l&#39;hydroxychloroquine a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>l&#39;essentiel Les journalistes de &quot;Complément d&#39;enquête&quot; dévoilent ce jeudi 17 novembre comment les travaux sur l&#39;hydroxychloroquine du professeur marseillais&nbsp;...</p></div>
            </div>
        </a><a href='https://www.france.tv/france-2/complement-d-enquete/4278046-didier-raoult-le-savant-flou.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Complément d&#39;enquête Didier Raoult, le savant flou</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnMCWwEj4OT84NEaQGyOeDse9mPGW9yGx94jE4YwvAx-TjAzbUBvcuM2xMGRhLUyfJV7CxDedr" alt="Complément d&#39;enquête Didier Raoult, le savant flou" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Revoir la vidéo en replay Complément d&#39;enquête Didier Raoult, le savant flou sur France 2, émission du 17-11-2022. L&#39;intégrale du programme sur france.tv.</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/17/covid-didier-raoult-a-t-il-volontairement-fausse-son-etude-sur-lhydroxychloroquine-les-revelations-de-complement-denquete-10809563.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Covid : Didier Raoult a-t-il volontairement faussé son étude sur l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCGCiGCPD1dd2yhmyA6oCmOVc1msNja7gMG-291zKCqlDy_qrkZvhMxE-YgE521HnnOe4RmPov" alt="Covid : Didier Raoult a-t-il volontairement faussé son étude sur l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans une vidéo très vite devenue virale, le professeur Didier Raoult s&#39;appuyait sur ses résultats pour affirmer que l&#39;hydroxychloroquine constituait un&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/sante/maladie/coronavirus/chloroquine/video-complement-d-enquete-a-decouvert-qu-en-2018-didier-raoult-a-ete-vise-par-une-procedure-disciplinaire-mysterieusement-disparue_5480283.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO. &quot;Complément d&#39;enquête&quot; a découvert qu&#39;en 2018, Didier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjFuGk2y-wpTimb8TT4FKb4rrxi6QvCvmJZxwC8f4ukJMW9-jEQoBMBfjdhWSzPMzKunusf8Ai" alt="VIDEO. &quot;Complément d&#39;enquête&quot; a découvert qu&#39;en 2018, Didier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chercheur de génie qui disait détenir le remède miracle contre le Covid-19 est aujourd&#39;hui en pleine tourmente. L&#39;encombrant promoteur de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lindependant.fr/2022/11/17/hydroxychloroquine-comment-letude-presentee-par-didier-raoult-a-ete-faussee-les-revelations-explosives-de-complement-denquete-10809766.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hydroxychloroquine: Comment l&#39;étude présentée par Didier Raoult ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrJysDltn4uBMSvTeiZa-nnQbYyfLYPT3EhjLYIvSLcdSmXoUXCQXbQY7uMQf0gYwLHGaGGpK8" alt="Hydroxychloroquine: Comment l&#39;étude présentée par Didier Raoult ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;émission de deuxième partie de soirée de France 2 annonce des révélations sur l&#39;IHU du professeur Raoult qui font déjà l&#39;effet d&#39;une bombe.</p></div>
            </div>
        </a>
        </Template></>;
}