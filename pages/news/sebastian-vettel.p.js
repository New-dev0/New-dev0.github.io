import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sebastian Vettel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sebastian Vettel"/>
        <meta name="description" content="Trending News about Sebastian Vettel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sebastian Vettel</h1>
            <Image width={800} height={500} src="https://static.cnews.fr/sites/default/files/315953931_662543765448471_2358154082823004885_n_637a67aa91e7b.jpg" alt="Sebastian Vettel"/>
            <h3>Recent News</h3>
            <a href='https://www.cnews.fr/sport/2022-11-20/formule-1-sebastian-vettel-met-un-terme-sa-carriere-1291668'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formule 1 : Sebastian Vettel met un terme à sa carrière</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsQT5LQcDreYdnU2ZVtTbV1ey1FrcLlIt_0aWstw1yqKnut5ZLp305uikhuzsxKE0X9tPmC7Xg" alt="Formule 1 : Sebastian Vettel met un terme à sa carrière" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quadruple champion du monde de Formule 1, l&#39;Allemand Sebastian Vettel a décidé de mettre un terme à sa carrière après le Grand Prix d&#39;Abu Dhabi disputé ce&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Formule-1/Actualites/Sebastian-vettel-apres-sa-derniere-course-a-abu-dhabi-un-grand-privilege-d-etre-ici/1365846'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Vettel après sa dernière course à Abu Dhabi : « Un grand ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsA40rCSN1r3Cha2k1IoAA58oZ3nHPLJyhdXh08C79atgrZppJ9h0grZk_NwevUY4BCGYS8kwP" alt="Sebastian Vettel après sa dernière course à Abu Dhabi : « Un grand ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le pilote allemand d&#39;Aston Martin, quadruple champion du monde, a achevé sa carrière en F1 sur une 10e place à Abu Dhabi ce dimanche.</p></div>
            </div>
        </a><a href='https://fr.motorsport.com/f1/news/f1-sebastian-vettel-carriere-voitures/10402769/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Toutes les F1 de Sebastian Vettel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkUAAONBB6FAW1H8FEoC1R9oKuq4uI5upXEQUh2HzUorvIFJEuG1p9noKC00wOBQZFtquPDBAd" alt="Toutes les F1 de Sebastian Vettel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Retour en images sur toutes les F1 pilotées en Grand Prix par Sebastian Vettel, qui va disputer ce dimanche son ultime course dans le Championnat du monde.</p></div>
            </div>
        </a><a href='https://le10sport.com/formule1/f1-apres-son-dernier-grand-prix-vettel-laisse-parler-ses-emotions-622442'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 : Après son dernier Grand Prix, Vettel laisse parler ses émotions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZB5UWQVuMJoVb1FZp9Z1iCM16Gp-ANJU9T5kb38TElHw6VpoeuvJVdWFXN6BBQ1NuRoAkWm0s" alt="F1 : Après son dernier Grand Prix, Vettel laisse parler ses émotions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche, Sebastian Vettel disputait son dernier Grand Prix de sa carrière à Abu Dhabi. Le pilote allemand a terminé la course à la 10e position, lui…</p></div>
            </div>
        </a><a href='https://www.autohebdo.fr/actualites/f1/retraite-de-sebastian-vettel-ses-5-casques-les-plus-marquants-jmd.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Retraite de Sebastian Vettel : ses 5 casques les plus marquants</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTip72qAAxKsISZsoN3XFpxGVzviebKLnw70tRUyWR0wh2WNhR13inY6o4H-myjA8c71dM6A9eU" alt="Retraite de Sebastian Vettel : ses 5 casques les plus marquants" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durant sa carrière en F1, Sebastian Vettel a porté plus de 170 designs de casques différents. En voici cinq d&#39;entre eux.</p></div>
            </div>
        </a><a href='https://www.autonews.fr/racing/pilotes/sebastian-vettel/gp-d-abu-dhabi-de-f1-la-reaction-de-sebastian-vettel-apres-sa-derniere-course-en-f1-114035'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GP d&#39;Abu Dhabi : la réaction de Sebastian Vettel après sa dernière ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTwpZlQLWQVUX9BvpSjhdzpfPE19qG2Z2nZvXWw9HClMJD-CDYtYWOVPz-xTTeY1YviWwGXcr5" alt="GP d&#39;Abu Dhabi : la réaction de Sebastian Vettel après sa dernière ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après un Grand Prix d&#39;Abu Dhabi compliqué suite à une mauvaise stratégie, Sebastian Vettel récupère la 10e place. Il s&#39;exprime juste après la course.</p></div>
            </div>
        </a><a href='https://www.lalibre.be/sports/moteurs/2022/11/20/sebastian-vettel-je-dois-ma-reussite-en-f1-a-ma-femme-hanna-UZDD56CAXZF7LHXAC2OOFK2HQU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Vettel : &quot;Je dois ma réussite en F1 à ma femme Hanna&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmWcI_JE_Gzz0BM4BL_zmDXWGxiDL1nTqCNYeFNWCoSrgdWaMpkmQ5xTERm8P_1SDfpq6G4Gvq" alt="Sebastian Vettel : &quot;Je dois ma réussite en F1 à ma femme Hanna&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le quadruple champion du monde fait ses adieux à la F1 ce week-end.</p></div>
            </div>
        </a>
        </Template></>;
}