import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harry Kane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harry Kane"/>
        <meta name="description" content="Trending News about Harry Kane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harry Kane</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/263fe65c-7a29-4d3f-93aa-25c69684471a/1200x630" alt="Harry Kane"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-harry-kane-protestiert-mit-regenbogen-protzuhr-und-spaltet-fangemeinde-das-ist-pervers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Harry Kane protestiert mit Regenbogen-Protzuhr und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmbTbhhD67bew2kQum3YJTy27NOd6Ax_bmx8oyFpII0cHS5jofmmcUY3qeC6qWsAHZlk54PtZ8" alt="WM 2022: Harry Kane protestiert mit Regenbogen-Protzuhr und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Diskussion um die One-Love-Binde und deren Verbot haben bei der WM für mächtig Wirbel gesorgt. Harry Kane hat nun eine alternative Protestform gefunden&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/fussball/wm-2022/nach-verbot-der--one-love--binde--harry-kane-harry-kane-setzt-verstecktes-regenbogenzeichen-32948080.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Verbot der &quot;One Love&quot;-Binde: Harry Kane Harry Kane setzt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMINjyVNce3U3E-B4XKSXjffoyvcJ8UmD_R6D42eSd1j0SW8M2ZaPrhkRwfLmJGjlx1Wp5Uu5R" alt="Nach Verbot der &quot;One Love&quot;-Binde: Harry Kane Harry Kane setzt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch in England trat das Verbot der &quot;One Love&quot;-Armbinde eine heftige Debatte los. Stürmerstar Harry Kane, Kapitän der Three Lions, hat nun offenbar ein&nbsp;...</p></div>
            </div>
        </a><a href='https://www.watson.de/sport/wm%202022/351368517-wm-2022-england-star-harry-kane-sorgt-mit-regenbogen-accessoire-fuer-aufsehen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: England-Star Harry Kane sorgt mit Regenbogen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAqDJO7zFgTVdSXgoL20lN4IlnXjkjFOQYFa3xFHCVv2dBM9HHcVh1Ztm-nOV_4dkInfGK6BiO" alt="WM 2022: England-Star Harry Kane sorgt mit Regenbogen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harry Kane trug vor dem Spiel gegen den Iran eine Regenbogen-Uhr, die jetzt für Furore sorgt.</p></div>
            </div>
        </a><a href='https://www.merkur.de/sport/fussball/wm-2022-harry-kane-rolex-rogenbogen-jochen-breyer-rummenigge-katar-zdf-91938698.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kane setzt 570.000 Euro teures WM-Protest-Zeichen – Breyer löscht ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUgCgaBIkyzgmjGoX1okLQx-PAt6vuoFy-B0aCAFYgbRVGM4aPZfknWNPyv3Gbga592hYrkKIh" alt="Kane setzt 570.000 Euro teures WM-Protest-Zeichen – Breyer löscht ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Englands Kapitän Harry Kane reagierte mit einem versteckten und vor allem teuren Signal auf das Verbot der „One Love“-Binde.</p></div>
            </div>
        </a><a href='https://www.stuttgarter-nachrichten.de/inhalt.wm-2022-in-katar-harry-kane-setzt-600-000-euro-zeichen-in-debatte-um-one-love-binde.9a4a7722-171f-4903-b20a-8173cb998413.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 in Katar - Harry Kane setzt 600 000 Euro Zeichen in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTylix2JxdIsyY35eZluGHOiD5F0E3Syy-Qqh6Ojl1BCsvMjurmG4nclfc2lk-oq9e_89HKQf2Y" alt="WM 2022 in Katar - Harry Kane setzt 600 000 Euro Zeichen in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Kapitän der englischen Fußballnationalmannschaft wollte bei der WM gegen das Vorgehen der Fifa protestieren – und tat das mit einem ganz speziellen&nbsp;...</p></div>
            </div>
        </a><a href='https://sportbild.bild.de/fussball/wm-2022/fifa-wm-2022/wm-2022-harry-kane-mit-protz-uhr-protest-bei-england-unentschieden-82065510.sport.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Harry Kane mit Protz-Uhr-Protest bei England ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1N-KkCAxqm55PpDjlTOBY13uO25fYPj5EVGWlpoDUj0BXnEEuSkGdgnf6zW_Pv2UwLNAeJcoy" alt="WM 2022: Harry Kane mit Protz-Uhr-Protest bei England ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England-Star Kane | 600.000-Euro-Protest vorm Anpfiff! &middot; Die „Three Lions“ verpassen die vorzeitige Qualifikation für das Achtelfinale. &middot; Statt mit Toren fällt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.welt.de/iconist/partnerschaft/article242344285/Rainbow-Rolex-So-stilvoll-gelang-der-Fifa-Protest-mit-Protz-Uhr.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rainbow-Rolex: So stilvoll gelang der Fifa-Protest mit Protz-Uhr</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkh4DSbjuhmm7rvcfSyBdvD3FePxdo3V2WLJ6wRFir9Mzu_oO55u_nEfgZrQpaxzyeZucy0LcD" alt="Rainbow-Rolex: So stilvoll gelang der Fifa-Protest mit Protz-Uhr" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die „One Love“-Armbinde ist beim englischen Kapitän vom Oberarm aufs Handgelenk gerutscht. Harry Kane trug beim WM-Spiel eine Rainbow-Rolex.</p></div>
            </div>
        </a>
        </Template></>;
}