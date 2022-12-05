import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fêtes de fin dannée</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fêtes de fin dannée"/>
        <meta name="description" content="Trending News about Fêtes de fin dannée" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fêtes de fin dannée</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/ZDDRMq9xvECkt10RS7M4VGRNmGM/1500x843/2022/12/03/638b6d1837e00_noel-et-fetes-de-fin-d-annee-un-paysagiste-propose-la-location-de-sapin.jpg" alt="Fêtes de fin dannée"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/culture/noel-fetes-de-fin-annees/noel-et-fetes-de-fin-d-annee-un-paysagiste-propose-la-location-de-sapins_5520582.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Noël et fêtes de fin d&#39;année : un paysagiste propose la location de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuNAL7q9UTOTvntTSDphB0ddBzoCXr3c0VdqYB_4KJewcYcWt4h-pYTMPKpQVUkRXYEOqfC-89" alt="Noël et fêtes de fin d&#39;année : un paysagiste propose la location de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depuis quelques années, il est possible de louer un sapin pour Noël. Dans l&#39;Eure, un paysagiste écolo et anti-gaspillage a fait ce choix.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/avant-les-fetes-de-fin-d-annee-la-police-nationale-fait-la-chasse-aux-mortiers-974fe68e-72fb-11ed-92fa-74885fd94854'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avant les fêtes de fin d&#39;année, la police nationale fait la chasse aux ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkZA5bhnofgN7JJC_ITILL0q5mlP3gjmdMRS6tOzLOmegh56B4H4D1Dda8lSk2t2jJXdL9Cq4l" alt="Avant les fêtes de fin d&#39;année, la police nationale fait la chasse aux ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un jeune Nantais de 18 ans a été repéré par des caméras de vidéosurveillance en train de distribuer des engins de type mortiers quartier Malakoff,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ville-bonneuil.fr/153-1593/actualites/fiche/pour-des-fetes-de-fin-d-annee-solidaires.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pour des fêtes de fin d&#39;année SOLIDAIRES !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7GcPBiP0mdbNDCUAF85LYkNtjTPuNUGzsdRvuTTLbnYveNMLuuA_3BctJ7eRpjG1Tz77HMW4d" alt="Pour des fêtes de fin d&#39;année SOLIDAIRES !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voici venu le temps des fêtes de fin d&#39;année, des repas de Noël, des projections de films d&#39;animations, de la tournée du Père Noël dans les écoles,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}