import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marcel Hirscher</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marcel Hirscher"/>
        <meta name="description" content="Trending News about Marcel Hirscher" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marcel Hirscher</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2877658/ve5c81f/og_image.jpg" alt="Marcel Hirscher"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2877657'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Beenden den Weg“ - Fix: Matt löst Vertrag auf - Wechsel zu Hirscher</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtjogjSDAlomgRwJB4NiJYc1AMG08CK2xhadyiRl2c7ZqRI0tXDL2yD1Nuac2V3irySDR2XeS7" alt="„Beenden den Weg“ - Fix: Matt löst Vertrag auf - Wechsel zu Hirscher" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Zukunft vertraut Matt auf Marcel Hirschers Ski-Marke „Augment“, die unter anderem mit den ÖSV-Speedfahrern Max Franz und Christoph Krenn bereits Teil des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/wintersport/ski-alpin/news/fix--michael-matt-wechselt-zu-hirscher-skimarke-augment/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fix: Michael Matt wechselt zu Hirscher-Skimarke Augment</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSH75dMMMk-5i0olhA08GGODQNUNB3a7MTZJOqqHitWfZmpY3DNhKPl9lhdShL4dJVOeNI5c5VF" alt="Fix: Michael Matt wechselt zu Hirscher-Skimarke Augment" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Technikspezialist löst seinen Vertrag mit Völkl auf und fährt künftig mit Augment. - Wintersport, Ski Alpin.</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/ski-alpin/vor-slalom-start-oesv-ass-wechselt-ski-marke'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vor Slalom-Start: ÖSV-Ass wechselt Ski-Marke</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkRaIyo7CcCjOk5TaHJAq_VHTeVoM4gXtOIe7PZzuAKvvg72R12XLDc6_hFeW5q0DRKI5MDeP5" alt="Vor Slalom-Start: ÖSV-Ass wechselt Ski-Marke" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matt entschied sich vor dem ersten Slalom der neuen Weltcup-Saison am Sonntag in Val d&#39;Isere zum Wechsel auf die Salzburger Marke Augment,&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/sport/wintersport/kurz-vor-erstem-saison-slalom-oesv-ass-wechselt-die-skimarke/402253209'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kurz vor dem ersten Saison-Slalom: ÖSV-Ass wechselt die Skimarke</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTydlvb2IagmNv_Jpipyo0F3EG0UsYsVjeETN_tN-iHQ_XfGy2KO6qLWfVbPJL8b2J4O8pCJP6w" alt="Kurz vor dem ersten Saison-Slalom: ÖSV-Ass wechselt die Skimarke" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michael Matt startet am Sonntag in Val-d&#39;Isère bereits auf Brettl&#39;n der Firma &quot;Augment&quot;, einem Ableger des Ski von Marcel Hirscher.</p></div>
            </div>
        </a>
        </Template></>;
}