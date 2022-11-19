import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Djokovic"/>
        <meta name="description" content="Trending News about Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Djokovic</h1>
            <Image width={800} height={500} src="https://www.tennisnet.com/fileadmin/_processed_/1/6/csm_Medvedev_Djoko_Ticker_d29278582e.jpg" alt="Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/atp-finals-djokovic-ringt-medvedev-nieder-und-steigt-auf-524966'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP-Finals: Djokovic ringt Medvedev nieder und steigt auf</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ATP-Finals: Djokovic ringt Medvedev nieder und steigt auf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Drei von Drei! Novak Djokovic schließt die Gruppenphase der ATP Finals 2022 mit drei Siegen makellos ab, muss aber am Freitag zum ersten Mal im&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennisnet.com/news/atp-finals-live-daniil-medvedev-vs-novak-djokovic-im-tv-livestream-und-liveticker'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals live: Daniil Medvedev vs. Novak Djokovic im TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtk87FPoZBwnoF_Zcm2PCzJxGX2tdWpZ8UMwIvTBl5_tUfqkoTg_CxKFae_is_zx73NSuiG0Y8" alt="ATP Finals live: Daniil Medvedev vs. Novak Djokovic im TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daniil Medvedev und Novak Djokovic treffen heute bei den ATP Finals 2022 in Turin aufeinander. Das Match gibt es ab 14 Uhr live im TV und Livestream bei Sky&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vol.at/djokovic-behaelt-bei-atp-finals-weisse-weste/7753813'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rublew löst letztes Turin-Halbfinalticket -Djokovic makellos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8959mUV-bGxWmVb4UP9kZsu9x3_2XLfItGdkV1PE3IBao8IbKcLFyaNTK9l1LYSSaofqLEytx" alt="Rublew löst letztes Turin-Halbfinalticket -Djokovic makellos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Russe Andrej Rublew hat am Freitag bei den mit 14,5 Millionen Dollar dotierten ATP Finals der Tennis-Profis in Turin das Halbfinale komplettiert.</p></div>
            </div>
        </a><a href='https://www.heute.at/s/angst-vor-rauswurf-djokovic-kampf-bis-zur-erschoepfung-100239440'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angst vor Rauswurf – Djokovic-Kampf bis zur Erschöpfung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzjqpzbhcpn1O0wq331AlKe0gBQhUkecAndEnJ5-ROaf8fayj-VMVNMVUCmXYeH3JqIvfU3h4V" alt="Angst vor Rauswurf – Djokovic-Kampf bis zur Erschöpfung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic hat bei den ATP-Finals in Turin auch sein drittes Vorrundenspiel gewonnen, allerdings sorgen sich Fans um den Serben.</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/djokovic-zieht-ungeschlagen-ins-semifinale-ein/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Djokovic zieht ungeschlagen ins Semifinale ein - Sky Sport Austria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSRWCElrqGAhPYPh3YLaXp8wHUu76WfL5CJSv3XlrPYoYbrekGVSBECiJevHo61PijZlBwoV-D8" alt="Djokovic zieht ungeschlagen ins Semifinale ein - Sky Sport Austria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tennisstar Novak Djokovic hat bei den mit 14,5 Millionen Dollar dotierten ATP Finals in Turin seine weiße Weste behalten. Der Top-Favorit aus Serbien hat.</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/jahresabschluss--djokovic-bei-atp-finals-ungeschlagen-im-halbfinale-32926918.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jahresabschluss: Djokovic bei ATP Finals ungeschlagen im Halbfinale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7j0mB4hNfA-pdcD9svRAWO-CJB3FfjcZQmnCqSl84YOqqNDFCOv4tpJQdgmBdRP5dYuoOPa2J" alt="Jahresabschluss: Djokovic bei ATP Finals ungeschlagen im Halbfinale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turin - Der frühere Weltranglisten-Erste Novak Djokovic steht bei den ATP Finals ungeschlagen im Halbfinale. Der 35 Jahre alte Serbe gewann am Freitag.</p></div>
            </div>
        </a><a href='https://www.srf.ch/sport/tennis/atp-tour/atp-finals-in-turin-trotz-schwaecheanfall-djokovic-schlaegt-auch-medwedew'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals in Turin - Trotz Schwächeanfall: Djokovic schlägt auch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQx1Z3ueq7SSUmJLPC5xVTRwcsF_1IwZ8h1YLsBGWzLQahiFcaMR5e9CCucJ9mBiYblJuXFrGP9" alt="ATP Finals in Turin - Trotz Schwächeanfall: Djokovic schlägt auch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Serbe, dessen Gruppensieg bereits vor der Partie feststand, trifft im Halbfinal auf Taylor Fritz, während für Daniil Medwedew das Turnier beendet ist. Für&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}