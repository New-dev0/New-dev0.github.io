import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marathon La Rochelle</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marathon La Rochelle"/>
        <meta name="description" content="Trending News about Marathon La Rochelle" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marathon La Rochelle</h1>
            <Image width={800} height={500} src="https://france3-regions.francetvinfo.fr/image/Kje_EgE-65qH2CqD0vlUxcfXPuw/930x620/regions/2022/11/22/637cf404d66cc_maxsportsworld824873.jpg" alt="Marathon La Rochelle"/>
            <h3>Recent News</h3>
            <a href='https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/charente-maritime/la-rochelle/direct-suivez-le-31eme-marathon-de-la-rochelle-a-la-television-et-sur-le-web-2660476.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>REPLAY. L&#39;Ethiopien Berhanu Heye et la Kényane Marion Kibor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHZ6UlCnFgbLFM1qRoAoShZgkOu98oJf4SQiRiPGhZ6nsgFNPg1VNwlNEYHmAJjmiW-z5Qggrk" alt="REPLAY. L&#39;Ethiopien Berhanu Heye et la Kényane Marion Kibor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;Ethiopien Berhanu Heye et la Kényane Marion Kibor remportent le marathon de La Rochelle. Dès 8h50, nous vous proposions de suivre en DIRECT, le 31ème&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/sports/tous-les-sports/direct-suivez-le-31e-marathon-de-la-rochelle-1669303095'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>REPLAY - Revivez le 31e marathon de La Rochelle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrb-bxbgtne_PZSv1Fvb3le9OZt5_LiEuugmbPFVAwEQVsunECVn-xBa2hx-RS9CfskIPHP54W" alt="REPLAY - Revivez le 31e marathon de La Rochelle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il aura fallu 2 heures et 9 minutes et 55 secondes à l&#39;Ethiopien Heye Berhanu, pour franchir la ligne d&#39;arrivée du 31e marathon de La Rochelle-Serge Vigot.</p></div>
            </div>
        </a><a href='https://www.france.tv/sport/athletisme/le-marathon-de-la-rochelle/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MARATHON DE LA ROCHELLE - Programmes, vidéos et replay ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiYjq8NtwUl-ZfO_7r7Ued7qfTUNOVjocXMxDalTqwL-X6MOZoQZyBS9Z4Y9sAretMHaZy5Vah" alt="MARATHON DE LA ROCHELLE - Programmes, vidéos et replay ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avec un parcours rapide, plutôt plat, et conçu en deux boucles, les très nombreux spectateurs peuvent voir et encourager les coureurs à plusieurs reprises ; ce&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/charente-maritime/la-rochelle/marathon-de-la-rochelle-en-course-avec-vincent-delion-athlete-malvoyant-originaire-de-thouars-2663928.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marathon de La Rochelle : en course avec Vincent Delion, athlète ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3VpBhb4my7Z1XFvzkM-wsYBYyY1Wzrv-7lFKIOIUxB-3JRBlzJknATBl1GPqwohN8M6w5tLi0" alt="Marathon de La Rochelle : en course avec Vincent Delion, athlète ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Relié par une cordelette à un guide, le Thouarsais Vincent Delion, termine le Marathon de La Rochelle avec un temps de 3h01. France 3 l&#39;a suivi sur les 42km&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/sport/athletisme/31e-marathon-de-la-rochelle-heye-et-kibor-ont-ete-les-plus-rapides-13149581.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>31e Marathon de La Rochelle : Heye et Kibor ont été les plus rapides</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBCHpY29IEEofwk48MuVdFL7r3R7mZrrObf5Ft-bbGSfDntHWNHnyAQG_eEUEmUMwS5sJdcVdE" alt="31e Marathon de La Rochelle : Heye et Kibor ont été les plus rapides" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;Éthiopien Berhanu Heye et la Kenyane Marion Kibor, qui réalise le doublé après sa victoire de 2019, sont les lauréats de la 31e édition, en battant chacun&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/charente-maritime/la-rochelle/marathon-de-la-rochelle-retour-sur-la-course-dans-le-flot-des-coureurs-et-avec-leurs-supporters-2663788.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marathon de La Rochelle : retour sur la course, dans le flot des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAITTGO6w0wZCZTAqldP2Th9S-1CHfcXEvNFEUsxTG0g_U8qy0kRl6BIXmsAnqScYcDQjDNZ8-" alt="Marathon de La Rochelle : retour sur la course, dans le flot des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche 27 novembre, 6.300 coureurs étaient au départ de la 31e édition du Marathon de La Rochelle. Un parcours de 42km en plein centre-ville,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marathons.fr/Marathon-de-La-Rochelle-Succes-pour-Berhanu-Heye-et-Marion-Kibor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marathon de La Rochelle : Succès pour Berhanu Heye et Marion ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQosNITva6zF6byW8l92xjqgayMSXilwi1z5oUMhoc1wDTYL5JEo4twyH2DzOECuRItk-lzredm" alt="Marathon de La Rochelle : Succès pour Berhanu Heye et Marion ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le départ a été donné à 9h, en deux points différents, sur le canal Maubec (pour éviter l&#39;engorgement) : les courses handisport sont parties les premières, et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-tv.org/sports/athletisme/marathon-de-la-rochelle-2022-tv-streaming-sur-quelles-chaines-et-a-quelle-heure-suivre-la-competition/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marathon de La Rochelle 2022 (TV/Streaming) Sur quelles chaines ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7yQKRLrjxzPwjYnXkVMQrT4sanXjmNwMsKAQ9AdU2bzGFjm7-xuMMbsyl7uTtZ0_7PGFzgLbX" alt="Marathon de La Rochelle 2022 (TV/Streaming) Sur quelles chaines ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sur quelles chaînes et à quelle heure suivre en direct et en clair le Marathon de La Rochelle 2022 ce dimanche 27 novembre ?</p></div>
            </div>
        </a>
        </Template></>;
}