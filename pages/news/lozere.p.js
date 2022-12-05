import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lozere</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lozere"/>
        <meta name="description" content="Trending News about Lozere" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lozere</h1>
            <Image width={800} height={500} src="https://images.midilibre.fr/api/v1/images/view/638cb0cbed1fcd38fd7aa4ba/large/image.jpg?v=1" alt="Lozere"/>
            <h3>Recent News</h3>
            <a href='https://www.midilibre.fr/2022/12/04/lozere-la-circulation-difficile-sur-certains-secteurs-apres-les-chutes-de-neige-10846194.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lozère : d&#39;importantes chutes de neige perturbent la circulation sur l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSks5T76GUeoSsN-Wekx9-yD9shCvXOiE-whQ3Jv-QFUhg7UFGOlV-kP-isG3c8C84jk6XEBQkc" alt="Lozère : d&#39;importantes chutes de neige perturbent la circulation sur l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À certains endroits, sur l&#39;A75, ce dimanche 4 décembre, en début d&#39;après-midi, les automobilistes circulent sur une seule voie.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/meteo/neige/video-des-automobilistes-bloques-par-la-neige-en-lozere-4f65c2d0-cc02-38c0-9928-0604db9731cd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO. Des automobilistes bloqués par la neige en Lozère</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQx67SkHjZWHmZFUvF5cMHto-7037bEuJ-e0huLowZXhumUhAaDhpuKX30kRCEHAu6LagePCuip" alt="VIDEO. Des automobilistes bloqués par la neige en Lozère" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Si de nouvelles chutes de neige ne sont pas prévues par Météo France dans les prochaines heures, en revanche, les routes devraient rester glissante en raison d&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/societe/4013250-20221204-lozere-pagaille-a75-apres-importantes-chutes-neige'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lozère : Pagaille sur l&#39;A75 après d&#39;importantes chutes de neige</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNvdQYpPQV0Nj026Z66cud1hhDd3qfAeoO3_qaJCIf335a2p_p4KurdVhd-6Ibb0ym5U7dw2lJ" alt="Lozère : Pagaille sur l&#39;A75 après d&#39;importantes chutes de neige" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Météo-France a placé ce dimanche la Lozère, où il était attendu de la neige dès 800 mètres, en vigilance jaune neige et verglas. On observe ce dimanche une&nbsp;...</p></div>
            </div>
        </a><a href='https://www.centrepresseaveyron.fr/2022/12/04/lozere-la-galere-des-automobilistes-sur-la75-ce-dimanche-4-decembre-en-video-10846511.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lozère : la galère des automobilistes sur l&#39;A75 ce dimanche 4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrXUdCSkyvqWkvj3C0RaJgD7bbxd4Y4MgBbV4Y9AZHrT5sMIsuIKXA4oZPhm_jcOLD-6YBSflj" alt="Lozère : la galère des automobilistes sur l&#39;A75 ce dimanche 4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche 4 décembre jusqu&#39;en milieu d&#39;après-midi, des dizaines d&#39;automobilistes se sont retrouvés coincés sur l&#39;A75, entre Lozère, Aubrac et Cantal.</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/meteo/video-meteo-la-lozere-s-est-reveillee-sous-la-neige-2240756.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Lozère s&#39;est réveillée sous la neige</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeekmThlt4ziElIIWQfVx6ZstWvVs2DgnlTFL5PujigKIm9yqVMOTzarwbTNBRfShC62IRNuTv" alt="La Lozère s&#39;est réveillée sous la neige" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Un manteau de flocons blancs s&#39;est déposé sur les plaines de Lozère ce week-end. Plus de dix centimètres de neiges ont recouvert le sol,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/12/04/dimportantes-chutes-de-neige-ont-bloque-des-dizaines-de-voitures-en-lozere-sur-la75-a-la-mi-journee-10846331.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>D&#39;importantes chutes de neige ont bloqué des dizaines de voitures ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9Z0-LND_yM1w_r7ebQ2JjDo7L3nYJXDh6_jrjHIhqUPeI9DCPkchG0Swrfi7olWuXOJ9xuZhD" alt="D&#39;importantes chutes de neige ont bloqué des dizaines de voitures ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les importantes précipitations annoncées sur le sud du Massif Central ont fortement ralenti la circulation sur l&#39;autoroute A75 ce dimanche à la mi-journée.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/societe/meteo-des-automobilistes-pris-au-piege-de-la-neige-en-lozere-vigilance-pour-24-departements-lundi-04-12-2022-Y2JLTTPWX5DINHIO64H34O7NAA.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Météo : des automobilistes pris au piège de la neige en Lozère ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiq3b2gzyP5F1y-G-GKkp0-Bbh4duUDNyuhzJewl3-Tc9hv_tuQKfNBKoTiOmvL4LOckPbP2XA" alt="Météo : des automobilistes pris au piège de la neige en Lozère ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En Lozère, la situation est « délicate » sur une grosse moitié des routes principales.</p></div>
            </div>
        </a>
        </Template></>;
}