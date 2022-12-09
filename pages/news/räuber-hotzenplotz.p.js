import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Räuber Hotzenplotz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Räuber Hotzenplotz"/>
        <meta name="description" content="Trending News about Räuber Hotzenplotz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Räuber Hotzenplotz</h1>
            <Image width={800} height={500} src="https://media.diepresse.com/social_diepresse_magazin_paid/images/uploads_1200/a/0/7/6224391/hotzi1_1670330377619573_v0_h.jpg" alt="Räuber Hotzenplotz"/>
            <h3>Recent News</h3>
            <a href='https://www.diepresse.com/6224391/der-raeuber-hotzenplotz-im-kino-charmant-altmodisch-und-gewitzt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Der Räuber Hotzenplotz“ im Kino: charmant altmodisch - und gewitzt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0lkfVgI1HRD0K8-xakyJ60AAi6xlL0_yQ1btPp1zm4ov2ETtD7Y13o-7QEnprxZVvmiN-WFqG" alt="„Der Räuber Hotzenplotz“ im Kino: charmant altmodisch - und gewitzt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Kinderbuchverfilmung ist Otfried Preußlers Geschichte sehr nah – aber eine Spur gewitzter, cleverer. Was nicht zuletzt an Nicholas Ofczarek liegt.</p></div>
            </div>
        </a><a href='https://www.pnp.de/nachrichten/kultur/theaterstar-nicholas-ofczarek-ist-der-neue-raeuber-hotzenplotz-9881994'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Theaterstar Nicholas Ofczarek ist der neue „Räuber Hotzenplotz“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQK-78XlabUYuSJikUquY0HveV5B6vR95Ui_z_E4kO0zrvIvRe2Ce4bTgekA2621zmL76BtiHaa" alt="Theaterstar Nicholas Ofczarek ist der neue „Räuber Hotzenplotz“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sein Name ist Plotz, Hotzenplotz. Seit 60 Jahren begeistert Otfried Preußlers gar nicht mal so böser Räuber eine junge Leserschar. ...</p></div>
            </div>
        </a><a href='https://www.stuttgarter-nachrichten.de/inhalt.neu-im-kino-der-raeuber-hotzenplotz-raeuber-mit-charme.76fc81bf-1296-48ab-a187-d205bc971c90.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neu im Kino: „Der Räuber Hotzenplotz“ - Räuber mit Charme</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzRw8yfFR0sNl7N0JHbCwPnV9LvlToEPuISlCoHV5fK9ypOM08C5zNXc56ass2rCxOR-epLMzc" alt="Neu im Kino: „Der Räuber Hotzenplotz“ - Räuber mit Charme" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hotzenplotz, Seppel, Kasperl, Zwackelmann und die Großmutter sind zurück auf der großen Leinwand. Die neue Kinoverfilmung bietet Charaktere mit Tiefgang und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abendzeitung-muenchen.de/kultur/kino/neuverfilmung-von-otfried-preusslers-raeuber-hotzenplotz-charmante-raeuberpistole-art-863627'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neuverfilmung von Otfried Preußlers &#39;Räuber Hotzenplotz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQx_bLaWI3TQBgV53z8B4tLPOn8DiSdtEdGVTlZr8Tz42jrWo4Oz3LyQq9wpcwyxOfjhUv8TiD9" alt="Neuverfilmung von Otfried Preußlers &#39;Räuber Hotzenplotz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine verzauberte Maus bringt den Kind gebliebenen Räuber Hotzenplotz (Nicholas Ofczarek) zum Staunen. © Studiocanal. Plotzenhotz? Lotzenpotz?</p></div>
            </div>
        </a><a href='https://www.artechock.de/film/text/kritik/r/rahotz0.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Räuber Hotzenplotz: Das Gleiche nochmal, bitte?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMhJ1dGPjJ5X8itDXmGflQGIxAFE3aoN4QUpE1fQalN7ksW81NfjSOPNeSVmdvC749Uqp0smVD" alt="Räuber Hotzenplotz: Das Gleiche nochmal, bitte?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Gleiche nochmal, bitte? – Kritik von Axel Timo Purr zum Film »Der Räuber Hotzenplotz«, R: Michael Krummenacher. artechock – das Münchner Filmmagazin.</p></div>
            </div>
        </a><a href='https://www.sueddeutsche.de/kultur/der-raeuber-hotzenplotz-kino-film-rezension-1.5710185'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Film „Der Räuber Hotzenplotz“ im Kino: Eine Prise Schnupftabak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpUr_DHkH6LaX07-Tm609Zt45CZNSI-f52Y99PcuF5KgUrc3jP-MgCv03QRMZsz5X5Ysax2IfE" alt="Film „Der Räuber Hotzenplotz“ im Kino: Eine Prise Schnupftabak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nicholas Ofczarek spielt den „Räuber Hotzenplotz“ mit einem Gaunercharme, wie ihn Gott nur gebürtigen Wienern schenkt.</p></div>
            </div>
        </a><a href='https://www.welt.de/kultur/kino/article242484417/Jetzt-im-Kino-der-neue-Raeuber-Hotzenplotz-Nur-Wasti-ist-ein-Problem.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jetzt im Kino – der neue „Räuber Hotzenplotz“: Nur Wasti ist ein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKylqO8UHB4UQlgxGVTqKhpT842IZYd87Kkr5kMK6N0ToMivF-cI_ZK2-tCGRdjkXadcKYyBPn" alt="Jetzt im Kino – der neue „Räuber Hotzenplotz“: Nur Wasti ist ein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Otfried Preußlers „Hotzenplotz“ ist zum dritten Mal verfilmt worden. August Diehl ist nach Josef Meinrad und Rufus Beck der Zauberer Petrosilius Zwackelmann&nbsp;...</p></div>
            </div>
        </a><a href='https://www.recklinghaeuser-zeitung.de/kreis-re/von-metoo-und-raeuber-hotzenplotz-leinwand-highlights-im-vest-w671598-p-6000285915/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RZ+ Von #MeToo und Räuber Hotzenplotz: Leinwand-Highlights im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSINC4EIrRBDEc9UHPw0MYD9oia7yY6gCQ9EYMts3gi15Siq_qM73owJytnd9tO6kY4iR1LV-Xi" alt="RZ+ Von #MeToo und Räuber Hotzenplotz: Leinwand-Highlights im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maria Schrader verfilmt Recherchen zu Harvey Weinstein und „Der Räuber Hotzenplotz“ treibt wieder sein Unwesen im Kino. Es ist viel los auf den Leinwänden&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bz-berlin.de/unterhaltung/die-b-z-filmtipps-von-she-said-bis-der-raeuber-hotzenplotz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die B.Z.-Filmtipps von „She Said“ bis „Der Räuber Hotzenplotz“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ9NhqLg0YfJSTWZQrxTnaD8jSlACiIgZWLxBcclwTHA2RAONBAjz9hx6vchcJb7cFyzuwsIs-d" alt="Die B.Z.-Filmtipps von „She Said“ bis „Der Räuber Hotzenplotz“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die beiden Reporterinnen Megan Twohey (Carey Mulligan) und Jodi Kantor (Zoe Kazan) ermitteln und finden etliche Opfer. Nur will keine darüber öffentlich reden.</p></div>
            </div>
        </a>
        </Template></>;
}