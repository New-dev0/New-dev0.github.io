import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pokemon Purpur</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pokemon Purpur"/>
        <meta name="description" content="Trending News about Pokemon Purpur" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pokemon Purpur</h1>
            <Image width={800} height={500} src="https://images.cgames.de/images/gsgp/4/pokémon-journeys-the-series-die-abenteuer-von-ash-und-pikachu-gehen-weiter_6181765.jpg" alt="Pokemon Purpur"/>
            <h3>Recent News</h3>
            <a href='https://www.gamepro.de/artikel/pokemon-meilenstein-karmesin-purpur-1000,3386922.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon-Meilenstein: Mit Karmesin/Purpur wurde das 1000 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSklTnFwm_aM-2uqo966eVsd94jqzkgk6DYefFpqZFjBteGsQFxQCDjdTjXMNqa0kNbybfBxzV6" alt="Pokémon-Meilenstein: Mit Karmesin/Purpur wurde das 1000 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pokémon Karmesin und Purpur lassen die Zahl der Pokémon auf über 1.000 ansteigen. Und für Nummer 1.000 haben sich die Game Freak-Entwickler*innen...</p></div>
            </div>
        </a><a href='https://www.eurogamer.de/pokemon-karmesin-und-purpur-alle-geheimgeschenk-codes-und-verteilaktionen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokemon Karmesin und Purpur: Alle Geheimgeschenk-Codes und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTU_m08P8gQV34DLJ5lrOxFKnUvkY4trzmyUjB2hWupiNvc_tSrBRHHZT_AGUYw-eYI7Q0nVPB4" alt="Pokemon Karmesin und Purpur: Alle Geheimgeschenk-Codes und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch Pokémon Karmesin und Purpur umfassen natürlich wieder Geheimgeschenke und Verteilaktionen. Unser Guide zeigt aktuelle Codes und mehr!</p></div>
            </div>
        </a><a href='https://jpgames.de/2022/11/pokemon-karmesin-und-purpur-so-hilft-euch-nintendo-bei-der-wahl-des-starters/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Karmesin und Purpur: So hilft euch Nintendo bei der Wahl ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_yzti7HPO7ndgM-Ipy_vofLNXheKUTb6KbWH3Hp2350_OqsHX7ZsrKbY11VenAKgFPTlz-Ns-" alt="Pokémon Karmesin und Purpur: So hilft euch Nintendo bei der Wahl ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Außerdem gibt es Handy-Hintergrundbilder mit eurer Wahl! Und jetzt viel Spaß in Paldea und eine möglichst ruckelfreie Reise.</p></div>
            </div>
        </a><a href='https://www.play3.de/2022/11/18/pokemon-karmesin-und-purpur-neunte-generation-bricht-bereits-vor-release-einen-rekord/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Karmesin und Purpur: Neunte Generation bricht bereits ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZHDCGfgDiM2-LTk12eUuB7RKf5GHHHWotIrveumUkK_eidR3po5fKplTElCKz3T_JAUTVjyRV" alt="Pokémon Karmesin und Purpur: Neunte Generation bricht bereits ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 18. November erscheinen &quot;Pokémon Karmesin&quot; und &quot;Pokémon Purpur&quot;, welche das neunte Hauptreihenpaar des Franchise markieren. Der Release wird von vielen…</p></div>
            </div>
        </a><a href='https://www.spieletipps.de/tipps-57278-pokmon-karmesin-purpur-unterschiede-editionsspezifische-pokemon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Karmesin &amp; Purpur: Unterschiede &amp; exklusive Pokémon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLR0fLa-h_ED9wilvHg85EX3XKOjeg6o8wgLgYxj1C0DDTY28WA4TZ3Rqxa8SXJHKAkBO0FFsl" alt="Pokémon Karmesin &amp; Purpur: Unterschiede &amp; exklusive Pokémon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Zuge der 9. Pokémon-Generation müsst ihr euch zwischen Pokémon Karmesin und Pokémon Purpur entschieden. Ein wichtiges Kriterium beim Kauf einer Edition&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pcgameshardware.de/Pokemon-Karmesin-und-Purpur-Spiel-73732/News/Testuebersicht-1407641/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon Karmesin &amp; Purpur: Tests sind eher durchwachsen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJ1zHNB7uvjlxruygy_T1cGhHifkqAz2k9-TCVPwpS6LuT-PmCwsvSvSaacl114OIjUSzgB0ky" alt="Pokémon Karmesin &amp; Purpur: Tests sind eher durchwachsen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das neue Pokemon-Abenteuer Karmesin &amp; Purpur schneidet bei Testern eher durchwachsen ab. Was stört und was gefällt am Nintendo-Spiel?</p></div>
            </div>
        </a>
        </Template></>;
}