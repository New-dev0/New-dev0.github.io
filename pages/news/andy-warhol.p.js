import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andy Warhol</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Andy Warhol"/>
        <meta name="description" content="Trending News about Andy Warhol" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andy Warhol</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2860408/v5a9544/og_image.jpg" alt="Andy Warhol"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2860399'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>10 Mio. Euro wert - Aktivisten streuten Mehl auf Andy-Warhol-Auto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRg9lIgg8fQuFrxpsKFHkJPG3B-thhYjaPt6h_bqt_tXy59iaan4H-X2Ed9IJqAPyIVxH5cgQ1X" alt="10 Mio. Euro wert - Aktivisten streuten Mehl auf Andy-Warhol-Auto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein neuer Protest von Aktivisten der Gruppe Letzte Generation hat in Mailand für Aufsehen gesorgt. Vier Aktivisten streuten acht Kilogramm Mehl auf ...</p></div>
            </div>
        </a><a href='https://www.salzburg24.at/news/welt/andy-warhol-auto-von-klimaaktivisten-mit-mehl-ueberschuettet-129999208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andy-Warhol-Auto von Klimaaktivisten mit Mehl überschüttet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSx_gRp8ckCLjXR18eUI9AmV72aZlux9TU5YFyQeWFDHnOzura4pBcZLaj8ss7nZKnExVv4aI8b" alt="Andy-Warhol-Auto von Klimaaktivisten mit Mehl überschüttet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine neue demonstrative Geste der Gruppe &quot;Letzte Generation&quot; gegen Kunstwerke hat am Freitag in Mailand für Aufsehen gesorgt. Vier Aktivist:innen streuten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vienna.at/klimaaktivisten-schutten-bei-protest-8-kilo-mehl-auf-andy-warhol-auto/7753360'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klimaaktivisten schütten bei Protest 8 Kilo Mehl auf Andy-Warhol-Auto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEhhIXVAJLGKA2VJ8X_pr0oeOXnjFJSikOFVZf9TD96xqcGpFXoICQjMuaGdYXnUm_TJxi7XwN" alt="Klimaaktivisten schütten bei Protest 8 Kilo Mehl auf Andy-Warhol-Auto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Mailand haben Klimaaktivisten bei einem Protest 8 Kilo Mehl auf ein Andy-Warhol-Auto gestreut und sich danach daran festgeklebt.</p></div>
            </div>
        </a><a href='https://www.rnd.de/panorama/mailand-klimaaktivistinnen-kippen-mehl-auf-andy-warhol-auto-EZU4KZGGO5SAJOHJIKQECDGEJA.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mailand: Klimaaktivistinnen kippen Mehl auf Andy-Warhol-Auto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKZoiFTmj_16CGdDRn6sLopN41d8STURs_YPGi9HrcaGCBbOLCF7USQNM8bznZDVs0lcnGn5QV" alt="Mailand: Klimaaktivistinnen kippen Mehl auf Andy-Warhol-Auto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Protestaktionen der Gruppe „Letzte Generation“ halten an. In Mailand haben mehrere Klimaaktivistinnen Mehl auf ein Auto-Kunstwerk des Künstlers Andy&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nau.ch/news/europa/klima-aktivisten-schutten-mehl-auf-andy-warhol-auto-in-mailand-i-66342762'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klima-Aktivisten schütten Mehl auf Andy-Warhol-Auto in Mailand (I)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSftEZzjbESh6C6hOgqbxWAC1ceJAH0MSZDHG4mET4sehGjeN6f7sGJVOH_pnebuk0NaBF1jt-k" alt="Klima-Aktivisten schütten Mehl auf Andy-Warhol-Auto in Mailand (I)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schon wieder haben Klima-Aktivisten mit einer Aktion auf sich aufmerksam gemacht. In Mailand (I) haben sie Mehl auf ein Kunstwerk von Andy Warhol&nbsp;...</p></div>
            </div>
        </a><a href='https://www.merkur.de/welt/letzte-generation-mailand-italien-auto-kunstwerk-andy-warhol-mehl-beworfen-twitter-video-aktuell-91925446.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Letzte Generation“ schlägt in Mailand zu: Auto-Kunstwerk Andy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNMEaH5xNEPjeMlPq5GWwop0fqmXyEQY4_2J48MrYU7YZVWGQvPFiHF9huj7iN1Vl0lxENCjw1" alt="„Letzte Generation“ schlägt in Mailand zu: Auto-Kunstwerk Andy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mitglieder von „Letzte Generation“ haben in Mailand Kunst von Andy Warhol mit Mehl beworfen, um auf das Thema „Klima“ aufmerksam zu machen.</p></div>
            </div>
        </a><a href='https://www.n-tv.de/panorama/Aktivistinnen-bewerfen-Warhol-Auto-mit-Mehl-article23727981.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Streit mit Besuchern: Aktivistinnen bewerfen Warhol-Auto mit Mehl</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8ZOJBasYfwGhwnR2sh0VOs-gDAyO8J1PhKanlg2Jikk4HgFmkxdJ9vbBkzpRP8TikGu0CNS2z" alt="Streit mit Besuchern: Aktivistinnen bewerfen Warhol-Auto mit Mehl" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Mailand ist ein zweites Werk des Pop-Art-Künstlers Andy Warhol Opfer einer Klimaprotestaktion geworden: Mit acht Kilo Mehl bewerfen Anhängerinnen der&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}