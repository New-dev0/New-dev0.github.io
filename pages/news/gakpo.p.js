import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gakpo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gakpo"/>
        <meta name="description" content="Trending News about Gakpo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gakpo</h1>
            <Image width={800} height={500} src="https://www.watson.de/imgdb/808d/Qx,A,0,22,2000,1125,588,84,333,306/5279020851147317" alt="Gakpo"/>
            <h3>Recent News</h3>
            <a href='https://www.watson.de/sport/wm%202018/867060549-wm-2022-der-neue-van-persie-wie-cody-gakpo-die-niederlande-verzaubert'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Der neue van Persie – wie Cody Gakpo die Niederlande ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSM_pTTfk2-lL8ZGPgCVW-5iCbm_VsMfpAb1ueVY0StgIMKGYtXI_-2Y_ePcYsao2AAIu-rRw9P" alt="WM 2022: Der neue van Persie – wie Cody Gakpo die Niederlande ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emotionale Momente kennt Cody Gakpo bei Startelf-Debüts ganz gut. In seinem ersten Profi-Spiel von Anfang an für PSV Eindhoven erzielte der mittlerweile&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/louis-van-gaal-lobt-cody-gakpo-vor-ecuador-wm-2022-niederlande/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bondscoach Louis van Gaal gerät bei Cody Gakpo ins Schwärmen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4HDqPqr3ovk_8AkbUvSE44fHgUbLFCmOFX6s9p1JEmK-63_t2Jh-su65S5_ecXa8dHUzFfzFE" alt="Bondscoach Louis van Gaal gerät bei Cody Gakpo ins Schwärmen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er traf für die Niederlande zum wichtigen 1:0 beim WM-Auftakt gegen den Senegal und hat laut Trainer Louis van Gaal eine große Zukunft: Cody Gakpo.</p></div>
            </div>
        </a><a href='https://www.fussballtransfers.com/a2197566199323624445-13-30-droppen-united-heiss-auf-gakpo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>United forciert Werben um Gakpo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFJXFovJC8ndPyJrdMHJVFehVxJ8gMXwqWwlpy48OvdDoHrjpxH8_cC-KNrYuyV8XrF8vN14Yq" alt="United forciert Werben um Gakpo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>30 Scorer in 24 Spielen sprechen eine deutliche Sprache: Cody Gakpo von der PSV Eindhoven ist bereit für den nächsten Schritt und ebenjener könnt (...)</p></div>
            </div>
        </a><a href='https://www.4-4-2.com/premier-league/manchester-united/manutd-plan-oranje-star-cody-gakpo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ManUtd will Oranje-Star Cody Gakpo schon im Januar holen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEdGtwrPZhooBSd1_c48dwWWpibNXw5tB_LJxdUdsiD-BGwSz3IC_qCcwxm77WB_hth0yeXAgP" alt="ManUtd will Oranje-Star Cody Gakpo schon im Januar holen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cody Gakpo sorgt bei seinem Verein PSV Eindhoven schon seit einiger Zeit für Furore. Nun ist er mit seinem Treffer beim WM-Auftakt der niederländischen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.welt.de/sport/fussball/wm/article242344653/WM-2022-Cody-Gakpo-der-naechste-Hochbegabte-fuer-Oranje.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Cody Gakpo – der nächste Hochbegabte für „Oranje“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYIjhxmxXI0ESDlPUK1_3ri5GUQmAHS3DJ8UgaN4nU60byJwTglCqXuAhVv1IhvjccyBcupp6U" alt="WM 2022: Cody Gakpo – der nächste Hochbegabte für „Oranje“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unter Trainer Louis van Gaal spielen die Niederlande nicht mehr ganz so offensiv wie in früheren Tagen. Einer, der trotzdem Spektakel entfacht und das Zeug&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}