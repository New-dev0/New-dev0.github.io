import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Miss France 2023</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Miss France 2023"/>
        <meta name="description" content="Trending News about Miss France 2023" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Miss France 2023</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/miss-france-2023-aeroport-1-f2208f-0@1x.jpeg" alt="Miss France 2023"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/miss-france-2023-programme-tv-tf1-les-candidates-se-sont-envolees-pour-la-guadeloupe-avec-diane-leyre-2239343.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miss France 2023 : les candidates se sont envolées pour la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_V945eQCwfr34L7SS7HoJXnZbLTVJEEH0vPCUFf4oCVw6PMvi47owRIo42Ytm6bKsU3mxW-47" alt="Miss France 2023 : les candidates se sont envolées pour la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elles seront accompagnées par Alexia Laroche-Joubert, la nouvelle présidente du concours de beauté, Cindy Fabre, la nouvelle directrice de la société Miss&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnews.fr/divertissement/2022-11-21/miss-france-2023-les-photos-officielles-des-candidates-devoilees-1291971'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miss France 2023 : les photos officielles des candidates dévoilées</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeLYDJXVTFKEZls5SC0c_IlYbY9S-PKkyqNrjWMamugaKo3VhNRl1LWkQteMlzmjjFQgHMXUm2" alt="Miss France 2023 : les photos officielles des candidates dévoilées" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le comité Miss France vient de dévoiler les portraits officiels des 30 candidates, qui tenteront de succéder à Diane Leyre, le 17 décembre prochain.</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/people/miss-france-2023-decouvrez-les-photos-officielles-des-candidates_AN-202211210520.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miss France 2023: découvrez les photos officielles des candidates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRplmzFr8ucBih-Clmsw3udy3CwdCGX6jOxV1kz296n8G8HfH8gnkTroeVNCHSpOkJGJVCJ5Gke" alt="Miss France 2023: découvrez les photos officielles des candidates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les premiers clichés officiels des 30 candidates espérant succéder à Diane Leyre ont été mis en ligne ce lundi.</p></div>
            </div>
        </a><a href='https://www.lavoixdunord.fr/1256724/article/2022-11-21/miss-france-2023-les-photos-officielles-des-trente-candidates-devoilees'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miss France 2023: les photos officielles des trente candidates ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4CBdXzoHjRb0L459DgJqbeYeaQMvNqi-rdardvxBTzXpknj3UQ_sSd5cH-7UfB99AgUVAF6_4" alt="Miss France 2023: les photos officielles des trente candidates ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les photos officielles des candidates à Miss France 2023 ont été dévoilée ce lundi. La cérémonie aura lieu le 17 décembre prochain.</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/photos-miss-france-2023-les-portraits-des-candidates-devoiles_506947'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PHOTOS – Miss France 2023 : les portraits des candidates dévoilés</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTK45Z6hj35tbUH31p54vR_3e7z4wlIOpiTk7c6_7OEpPReENuwL2IhJ1J0OO-dGI5pUfqJVmES" alt="PHOTOS – Miss France 2023 : les portraits des candidates dévoilés" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fin du suspense ! À quelques jours du couronnement de la nouvelle reine de beauté, les photos officielles des trente prétendantes au titre de Miss...</p></div>
            </div>
        </a><a href='https://www.programme-television.org/diapos-tv/Miss-France-2023-Decouvrez-les-portraits-officiels-des-30-candidates-PHOTOS-4697331'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miss France 2023 : Découvrez les portraits officiels des 30 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3AgR6-5BIigFoo1CkWyYrPyI2Ynxyk6t0LXJmxOnZn3ZOfuVUcju2S0srRiP8rrzahA9l_0Pg" alt="Miss France 2023 : Découvrez les portraits officiels des 30 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le 17 décembre prochain se tiendra la nouvelle édition de l&#39;élection Miss France. Découvrez en images les 30 Miss régionales en lice pour succéder à Diane&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/tv/miss-france-2023-cap-sur-la-guadeloupe-pour-les-apprenties-reines-de-beaute-21-11-2022-5665WM5HDVAIBBX6FWSO7DDPAM.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miss France 2023 : cap sur la Guadeloupe pour les apprenties ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfWkcHj988lIJHGtJO8rTNBXJJd4ZnlkwpyiaVd193EXtrNpa1On7N1rjoWY2-Xd0z1e3FVX9W" alt="Miss France 2023 : cap sur la Guadeloupe pour les apprenties ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les 30 candidates à Miss France 2023 se sont envolées ce lundi matin. Direction la Guadeloupe, où elles vont préparer la finale du concours, retransmise sur&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}