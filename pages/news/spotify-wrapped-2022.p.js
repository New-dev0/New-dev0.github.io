import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spotify Wrapped 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spotify Wrapped 2022"/>
        <meta name="description" content="Trending News about Spotify Wrapped 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spotify Wrapped 2022</h1>
            <Image width={800} height={500} src="https://www.hna.de/bilder/2022/11/30/91949371/30405759-spotify-logo-auf-smartphone-bildschirm-45fe.jpg" alt="Spotify Wrapped 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.hna.de/verbraucher/spotify-wrapped-2022-das-hat-rheinland-pfalz-am-liebsten-gehoert-zr-91949371.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify Wrapped 2022: Das hat Rheinland-Pfalz am liebsten gehört</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnTlNdgHH--rf_UNZ3z_0I1s7yZ4hp2jeu1Zw-cmaRoJhQr-74T8YTkM3CNOutk0D6vvaYpYb1" alt="Spotify Wrapped 2022: Das hat Rheinland-Pfalz am liebsten gehört" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alle Jahre wieder beglückt der Musikstreaming-Dienst Spotify seine Nutzer mit einer Liste ihrer Lieblingslieder und -künstler.</p></div>
            </div>
        </a><a href='https://www.giga.de/artikel/wo-finde-ich-den-spotify-jahresrueckblick-wrapped-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wo finde ich den Spotify-Jahresrückblick? Wrapped 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAy5Ue4dHFWEYSwbfTiO_QKBMUTa2GDeCZRuy_fElKxKkvTfgc9GwYby4Zds-fWFAq8aM9qmf4" alt="Wo finde ich den Spotify-Jahresrückblick? Wrapped 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alle Jahre wieder geht es im Dezember nicht nur in die Adventszeit – der Musik-Streaming-Dienst stellt auch seinen Jahresrückblick für..</p></div>
            </div>
        </a><a href='https://www.rnd.de/medien/spotify-wrapped-2022-der-jahresrueckblick-ist-da-GMRZRG6NKZLYJVSXI3I65OYWCU.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify Wrapped 2022: Der Jahresrückblick ist da</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTJoxl1FoL7JkJ--Tq8kCMN2C4aVWZZTvmAay_3BMoGaxQ-w9IB-N1gDerjIENMTwBc9y9fB6iC" alt="Spotify Wrapped 2022: Der Jahresrückblick ist da" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spotify bietet seinen Nutzerinnen und Nutzern seit einigen Jahren interessante Statistiken zum eigenen Hörverhalten an. Dafür erstellt der Streamingdienst&nbsp;...</p></div>
            </div>
        </a><a href='https://www.appgefahren.de/spotify-wrapped-2022-der-grosse-audio-jahresrueckblick-ist-da-328600.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify Wrapped 2022: Der große Audio-Jahresrückblick ist da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmtxjm1dZB4Hh3TC-myBC70c8QRJdR5Uh-62jHo4pGgaPI-CyUmrnobnbSV1Db0zmjQo_7SEto" alt="Spotify Wrapped 2022: Der große Audio-Jahresrückblick ist da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei den Spotify Usern in Deutschland ist 2022 ein Podcast am beliebtesten, der bereits seit 2017 die Fans jede Woche mit humorvollen Geschichten unterhält:&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rollingstone.de/spotify-wrapped-2022-so-kommt-man-an-den-persoenlichen-jahresrueckblick-2525371/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify „Wrapped“ 2022: So kommt man an den persönlichen...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9xZ9HGlemP-owne7VeSmalebQyLYdv6OexlOqGmnrt12tPUeKqWkzY1PL6A16rcbjydSLeVG3" alt="Spotify „Wrapped“ 2022: So kommt man an den persönlichen..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Jahresrückblick von Spotify ist zurück. Mit „Wrapped“ wird nicht nur das eigene Hörverhalten gespiegelt, sondern es werden auch die erfolgreichsten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.djmag.de/einzelnews/spotify-wrapped-2022-dein-musikalischer-jahresrueckblick/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify Wrapped 2022: dein musikalischer Jahresrückblick</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFYGWPkfOf0ESl-efWI6T3CHyCPBZ8BvbIl2V0V_Am3dvqbcjYV-qzMn5FieSmfeoQNsNACgax" alt="Spotify Wrapped 2022: dein musikalischer Jahresrückblick" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ab sofort können alle Spotify-Nutzer ihren persönlichen Jahresrückblick erstellen lassen. Was sind deine Top-Genres? Welcher Song lief am häufigsten auf&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}