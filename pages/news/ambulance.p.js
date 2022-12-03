import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ambulance</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ambulance"/>
        <meta name="description" content="Trending News about Ambulance" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ambulance</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/12/jake-gyllenhaal-ambulance-michael-bay.png?ver=1" alt="Ambulance"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/ambulance-dans-les-coulisses-du-film-fou-de-michael-bay-5512029/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ambulance : dans les coulisses du film fou de Michael Bay</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjXA5VlUkTIov1tBdzr3uDw6ucLXjew1UDGexL7oeTOPv4tqEakwmFJByhdzIwYbxoh_VsbcTN" alt="Ambulance : dans les coulisses du film fou de Michael Bay" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En mars dernier, Michael Bay a marqué les esprits avec son nouveau film d&#39;action : Ambulance. Une oeuvre qui lui a demandé de se surpasser.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/tv/programme-tv-du-vendredi-2-decembre-ambulance-cesar-wagner-le-temps-de-vivre-notre-selection-02-12-2022-2T3MNSNV3BGARGQNFSKFM5ZCTU.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Programme TV du vendredi 2 décembre : «Ambulance», «César ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_3f6eSLOfTZ3KCf4_Hz1xQNM-uJHEaxOzfjZXZyLt-Ul5KlwfzsOKQEvGfxhhQzIFFLbwMdGA" alt="Programme TV du vendredi 2 décembre : «Ambulance», «César ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un film d&#39;action de Michael Bay, un épisode avec le flic hypocondriaque de France 2, un spectacle de Camille Chamoux… Voici nos suggestions pour votre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/cinema/315138-ambulance-canal-cette-etonnante-preparation-deiza-gonzalez/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ambulance (Canal+) : cette étonnante préparation d&#39;Eiza Gonzalez</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ambulance (Canal+) : cette étonnante préparation d&#39;Eiza Gonzalez" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vendredi 2 décembre 2022 à 21h10, Canal+ diffuse Ambulance, réalisé par Michael Bay, le roi du film d&#39;action made in Hollywood. Porté par Jake Gyllenhaal et&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}