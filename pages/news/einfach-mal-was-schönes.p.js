import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Einfach mal was Schönes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Einfach mal was Schönes"/>
        <meta name="description" content="Trending News about Einfach mal was Schönes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Einfach mal was Schönes</h1>
            <Image width={800} height={500} src="https://img.br.de/13fcf5a0-0385-4ff5-ad3f-a262196e7a7a.jpeg?h=800" alt="Einfach mal was Schönes"/>
            <h3>Recent News</h3>
            <a href='https://www.br.de/mediathek/podcast/blaue-couch/karoline-herfurth-schauspielerin-und-regisseurin-ueber-einfach-mal-was-schoenes/1895494'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karoline Herfurth, Schauspielerin und Regisseurin, über “Einfach ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQebWWxiA1YK0oIi1q11V94DO-J6aZ-OvSuNi3_-dz4TNDttS1rqfefrF4w3KLRFSlwUZnyVgf-" alt="Karoline Herfurth, Schauspielerin und Regisseurin, über “Einfach ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie ist eine der bekanntesten deutschen Schauspielerinnen. In ihrem neuesten Film führt sie dazu auch noch Regie. Karoline Herfurth spricht auf der Blauen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndr.de/fernsehen/sendungen/das/Film-Tipp-Die-goldenen-Jahre-und-Einfach-mal-was-Schoenes,dasx30408.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Film-Tipp: &quot;Die goldenen Jahre&quot; und &quot;Einfach mal was Schönes&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTiLFDeINE1-o1Tu6SE6RQOGLie8hHAFhhSL6EWehReMGGhgk0v_dFVCwpxBgWKZQPJ0L1jkY6p" alt="Film-Tipp: &quot;Die goldenen Jahre&quot; und &quot;Einfach mal was Schönes&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Film nicht nur für Senioren, dem ein wenig mehr jugendliches Tempo allerdings nicht geschadet hätte. In &quot;Einfach mal was Schönes&quot; beweist Regisseurin und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abendzeitung-muenchen.de/kultur/kino/einfach-mal-was-schoenes-aeusserst-unterhaltsame-probleme-art-858813'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Einfach mal was Schönes&#39;: Äußerst unterhaltsame Probleme</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVfRqckqJ_-SlpHfwPBNE2fAnlu0du1sZkzzoKXmrRv4Z8q6Wh_hItXPESZv-0w8VrG5dyRyzC" alt="&#39;Einfach mal was Schönes&#39;: Äußerst unterhaltsame Probleme" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karoline Herfurth als Klara und Nora Tschirner (links) als Jule in &quot;Einfach mal was Schönes&quot;. © Foto: dpa/Warner Bros. Die biologische Uhr tickt laut und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moviepilot.de/news/karoline-herfurths-einfach-mal-was-schoenes-ist-die-perfekte-kinokomoedie-hat-aber-ein-grosses-problem-maenner-1138992'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karoline Herfurths Einfach mal was Schönes ist die perfekte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDVIwXYltVZv_TBE-Qz_jl5ixhfLXc-LIlH-mCmz5pUA5aUyLW_2jr-I5qhkoSabuZomWS-e8W" alt="Karoline Herfurths Einfach mal was Schönes ist die perfekte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit Einfach mal was Schönes läuft jetzt einer der unterhaltsamsten deutschen Filme 2022 im Kino. Karoline Herfurths neueste Komödie wäre mit ein bisschen&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/kultur/filmkritik-zu-einfach-mal-was-schoenes-single-frau-mit-kinderwunsch/402221622'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Filmkritik zu &quot;Einfach mal was Schönes&quot;: Single-Frau mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpR9iXNZYSF1yDlhGK7aToZAfFc0DMUIxbahXLaWPMa1Ak1cPyKyNlvAlA6dfjCEXLtfmsjJzD" alt="Filmkritik zu &quot;Einfach mal was Schönes&quot;: Single-Frau mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Schauspielerin Karoline Herfurth hat in ihrem Regiedebüt „SMS für Dich“ (2016) das Romcom-Genre mit leichter Hand bedient. Im neuen Film will sie mehr Ernst&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/filmkritik-einfach-mal-was-schoenes-karoline-herfurth-spielt-single-mit-kinderwunsch-kinostart-17-11-2022-5016154.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Filmkritik &quot;Einfach mal was Schönes&quot; - Karoline Herfurth spielt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOm2dvM8w3J40LdWBYiOccMAZFvmUKLzjHcjGmpBZLrkGlLOmBwDwcr-95TFaoJbFLagNQwOaq" alt="Filmkritik &quot;Einfach mal was Schönes&quot; - Karoline Herfurth spielt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karoline Herfurth gelingt nach ihrem Kinohit &quot;Wunderschön“ der nächste Coup als Regisseurin. Sie spielt natürlich auch mit - als Single (39) mit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/feuilleton/kino/karoline-herfurths-neuer-film-einfach-mal-was-schoenes-18453460.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Film von Karoline Herfurth: Zwischen Hochzeit und Notaufnahme</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7m5fl2eRFbsglmGZq-kqS7cyHTJMvNBoZYRqC3mUx_EyRbyCisrFL0fKMrPOAbM9RUxJzSBp0" alt="Film von Karoline Herfurth: Zwischen Hochzeit und Notaufnahme" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einstürzende Familienaufstellungen: Karoline Herfurth arbeitet in ihrem neuen Film „Einfach mal was Schönes“ erfolgreich an der deutschen...</p></div>
            </div>
        </a>
        </Template></>;
}