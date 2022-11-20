import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mylene Farmer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mylene Farmer"/>
        <meta name="description" content="Trending News about Mylene Farmer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mylene Farmer</h1>
            <Image width={800} height={500} src="https://resize-lejdd.lanmedia.fr/var/jdd/public/media/image/2022/11/19/23/mylene-farmer-on-assiste-a-la-fin-du-monde.jpg?VersionId=B_Rrzt3fodAeycJ1E.4.PK1LLy7EcCzw" alt="Mylene Farmer"/>
            <h3>Recent News</h3>
            <a href='https://www.lejdd.fr/Sommaire/mylene-farmer-on-assiste-a-la-fin-du-monde-4148843'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mylène Farmer : « On assiste à la fin d&#39;un monde »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzmVuILAQPZubAi5byC00XEHH03l6ZWK_Xt0j_Rk7vJiTOgOQ3FmxHDM14zc3lY_0BQkGgN50C" alt="Mylène Farmer : « On assiste à la fin d&#39;un monde »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À la une cette semaine, l&#39;interview de Mylène Farmer ; « nous avons besoin de 100 000 soldats réservistes », assure Sébastien Lecornu ; 1958-2018 : nos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lejdd.fr/culture/exclusif-mylene-farmer-se-confie-au-jdd-jai-failli-tout-arreter-129682'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EXCLUSIF. Mylène Farmer se confie au JDD : « J&#39;ai failli tout arrêter »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkXoTCYi00zuub4wg09HjZrV1nBd10OolviAWAPpLtUwbhMOnoVwEYftyMoh_MdkC0_JRgM8SQ" alt="EXCLUSIF. Mylène Farmer se confie au JDD : « J&#39;ai failli tout arrêter »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>INTERVIEW - Le 25 novembre, Mylène Farmer sort un nouvel album, intitulé « L&#39;Emprise ». Sa parole est rare. Pour le JDD, la chanteuse lève un coin du voile&nbsp;...</p></div>
            </div>
        </a><a href='https://www.elle.fr/Loisirs/Musique/News/Mylene-Farmer-reechantee-quel-est-le-secret-de-ce-retour-de-flamme-4076883'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mylène Farmer, réechantée : quel est le secret de ce retour de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQE3fWRzq58mUZwauCvlSFkIlRNXRvok0w6xIKDmCgeXum8W5XeKvJC-uBxved6RE8v9m2HrVu" alt="Mylène Farmer, réechantée : quel est le secret de ce retour de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nouvel album, tournée des stades, et admiration débordante d&#39;une nouvelle génération de chanteuses. Quel est le secret de ce retour de flamme ?</p></div>
            </div>
        </a><a href='https://www.mylene.net/modules/index.php?r=4&z=5224'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Premières confidences de Mylène Farmer son nouvel album L ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVbxjKadrn84u_EVTN3koFG13oLKmNsWvC6pxn7OnIewabEKbPsf4zocEdMHb2kO2VkRJPDBBJ" alt="Premières confidences de Mylène Farmer son nouvel album L ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mylène se confie sur L&#39;Emprise, sa prochaine tournée ainsi que sur des sujets plus intimes... Interview exclusive de Mylène par Jérôme Béglé pour &quot;Le&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}