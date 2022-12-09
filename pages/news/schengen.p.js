import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Schengen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Schengen"/>
        <meta name="description" content="Trending News about Schengen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Schengen</h1>
            <Image width={800} height={500} src="https://www.wienerzeitung.at/_em_daten/432464/_/1xZPOhT3Rx3h3lJnagDWVi1Jk8-6HAYGHSM0D8V2200BRINK3LPCb7iJmjHEw5iUpYYiYWgtwMpK4k7Qu6I_GI0KSa5sBNsGM_lkf_GSFqqkp8qQ8iy1d7QsBou448V0B9/220223-1848-948-0900-368400-240205baerbock.jpg" alt="Schengen"/>
            <h3>Recent News</h3>
            <a href='https://www.wienerzeitung.at/nachrichten/politik/europa/2171074-Baerbock-kritisiert-Wien-wegen-Veto-bei-Schengen-Entscheidungen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baerbock kritisiert Wien wegen Veto bei Schengen-Entscheidungen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTrvrOLWH7FZpVJESKvgt_Al2W14uJtv6bf5OF7T1VwteHsVyFpjCaTv8j8iM5KNZkw2a1KO7g8" alt="Baerbock kritisiert Wien wegen Veto bei Schengen-Entscheidungen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die deutsche Ministerin spricht angesichts des Vetos Österreichs von einem &quot;schlechten Tag für Europa&quot;.</p></div>
            </div>
        </a><a href='https://orf.at/stories/3296973/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EU-Innenminister: Nur Kroatien wird neuer Schengen-Staat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSeex6pAfwaVBfcgE_OkLU1ueVYSWwqT10RmnujcfQsz6-K3JDa2puKY-XHJcfJZsXVHHm6YjHY" alt="EU-Innenminister: Nur Kroatien wird neuer Schengen-Staat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weg für den Beitritt Kroatiens zum Schengen-Raum ohne Grenzkontrollen ist frei. Darauf verständigten sich die zuständigen Ministerinnen und Minister der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141630718/kroatien-tritt-2023-dem-schengen-raum-ohne-grenzkontrollen-bei'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kroatien tritt Schengen-Raum bei, Bulgarien und Rumänien von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRI7fpA7xEhxXyLUi83Z8dSFGF8Adi89IYLql23MJFOJME30wXSNHU3Ge_n5K2-97DvvcI6vM45" alt="Kroatien tritt Schengen-Raum bei, Bulgarien und Rumänien von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grenzkontrollen fallen für Kroatien Anfang 2023 weg – Veto Österreichs gegen Bulgarien und Rumänien wird heftig kritisiert.</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/c-politik/grenzkontrollen-zu-kroatien-fallen-naechstes-jahr_a5759419'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schengen-Abstimmung: Grenzkontrollen zu Kroatien fallen nächstes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_xvAAvQXoysmdfK5rfxPSOCvS20KPZRyjZ-4Q9CEKbXHAXM2htQpqCBdVuVrh5vbtqM2RjUxA" alt="Schengen-Abstimmung: Grenzkontrollen zu Kroatien fallen nächstes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Donnerstag stimmten die zuständigen Minister der 26 Schengen-Staaten über den Beitritt von Kroatien, Bulgarien und Rumänien ab. ÖSTERREICH.</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141636831/karner-zum-eu-vorgehen-bei-schengen-ich-bin-auch-veraergert'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karner zum EU-Vorgehen bei Schengen: &quot;Ich bin auch verärgert&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcReQ7yRLNlCaJ3q-pho3hKJio_jcEmlBN8s6eHvFgUKbmRafDP8JpqJ80TvazWpn3rk3GQkam5e" alt="Karner zum EU-Vorgehen bei Schengen: &quot;Ich bin auch verärgert&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Innenminister Gerhard Karner spricht über seine Schengen-Blockade Rumäniens und rechtsextreme Reichsbürger in Österreich. Und er erklärt, was er an der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2877229'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nur Kroatien tritt bei - Schengen-Erweiterung: Österreich zieht Veto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgHOXSCryzQxCZquIBrTA3tkmW3Wn_JfqA4zipoLT6delqeUEyTNRtE4hrCVK3QpdstDU-L6RH" alt="Nur Kroatien tritt bei - Schengen-Erweiterung: Österreich zieht Veto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weg für den Beitritt Kroatiens zum grenzkontrollfreien Schengen-Raum ist frei. Darauf verständigten sich die zuständigen Minister der 26 ...</p></div>
            </div>
        </a><a href='https://www.vienna.at/kroatien-tritt-2023-schengen-raum-bei-keine-grenzkonrollen-ab-jaenner/7789234'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kroatien tritt 2023 Schengen-Raum bei: Keine Grenzkonrollen ab ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_bj7YOsPE3Ayi2ITPfhw2bJAY72VlCZvjVNAR5HeWw8GgpPc93Tdh_4d3X-xszBJkg7ldSZ5s" alt="Kroatien tritt 2023 Schengen-Raum bei: Keine Grenzkonrollen ab ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Weg für den Beitritt Kroatiens zum Schengen-Raum ohne Grenzkontrollen ist frei. Die Kontrollen an den Landgrenzen des beliebten Urlaubslands sollen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}