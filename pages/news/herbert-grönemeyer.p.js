import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Herbert Grönemeyer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Herbert Grönemeyer"/>
        <meta name="description" content="Trending News about Herbert Grönemeyer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Herbert Grönemeyer</h1>
            <Image width={800} height={500} src="https://www.zdf.de/assets/herbert-groenemeyer-144~1280x720?cb=1668937488724" alt="Herbert Grönemeyer"/>
            <h3>Recent News</h3>
            <a href='https://www.zdf.de/nachrichten/panorama/groenemeyer-tafel-wetten-dass-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prominente Hilfe für Berliner Tafel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgwpaIqV3daNgLnNlxJl9-YvS3yfTzpou8ybXPVadv79KLKLKfgPpa5E3nPnKgR7Jrj4Z5lqzL" alt="Prominente Hilfe für Berliner Tafel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wette gewonnen, er hilft trotzdem: Der Sänger Herbert Grönemeyer will einen Monat lang die laufenden Kosten der Berliner Tafel tragen.</p></div>
            </div>
        </a><a href='https://www.rnd.de/promis/herbert-groenemeyer-sponsert-berliner-tafel-nach-wetten-dass-auftritt-RLZS6DHTFUEBBMIPAOYBQWNRBQ.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Herbert Grönemeyer sponsert Berliner Tafel nach „Wetten, dass ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRYzdYQw3vg_oOvlAylpCJtbXIU9k2e98EBhDGZJPxm27C3BJ-kwW17jSEOkLDrl7yMBPwptrt" alt="Herbert Grönemeyer sponsert Berliner Tafel nach „Wetten, dass ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angesichts steigender Kosten gehen immer mehr Menschen zu Tafeln. Herbert Grönemeyer will nun die in Berlin für einen Monat finanzieren.</p></div>
            </div>
        </a><a href='https://www.spiegel.de/panorama/leute/wetten-dass-herbert-groenemeyer-will-einen-monat-lang-kosten-der-berliner-tafel-tragen-a-27f9e4c9-2fb3-4968-ae7e-90fc714cf863'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Auftritt bei »Wetten, dass..?«: Grönemeyer will einen Monat lang ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLLN230aGFdUXsGv4gclPA1-zr_J9JdA9fQLgXJpZIuBcs56h-pcup4CvC0prlC5_FWWKOY7ug" alt="Auftritt bei »Wetten, dass..?«: Grönemeyer will einen Monat lang ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Herbert Grönemeyer zu Gast bei Thomas Gottschalk: Der Sänger war einer der Stars bei »Wetten, dass..?« – und möchte seinen Wetteinsatz einlösen,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tagesspiegel.de/berlin/wetten-dass-herbert-gronemeyer-ubernimmt-fur-einen-monat-kosten-der-berliner-tafel-8897623.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach „Wetten, dass..?“: Berliner Tafel freut sich über Großspende ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTi-DlaIeC5x6RBr8R2WDKlbLjRQh4LbIEV9C-QSwaO2uZAJ8p_k6nf1lgEzTPk5eCVIqD3RCtE" alt="Nach „Wetten, dass..?“: Berliner Tafel freut sich über Großspende ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im ZDF kündigte der Sänger eine Großspende zum Wohl bedürftiger Berliner an. Tafel-Chefin Sabine Werth sagt: Das ist noch mehr als erwartet.</p></div>
            </div>
        </a><a href='https://www.tag24.de/unterhaltung/promis/herbert-groenemeyer-verraet-im-talk-mit-kurt-kroemer-muss-man-sich-nicht-antun-2655058'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Herbert Grönemeyer verrät im &quot;Feelings&quot;-Talk mit Kurt Krömer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ31djLkQCqzQafNekvPt-kLHzc6KYNN1hx-AFLXXkmsn-ai0NG6RP17eIGC5N1xH7cUg7pn94K" alt="Herbert Grönemeyer verrät im &quot;Feelings&quot;-Talk mit Kurt Krömer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kurt Krömer (48) empfängt zum Auftakt seines Podcasts &quot;Feelings&quot; den Musiker Herbert Grönemeyer (66, &quot;Männer&quot;). | TAG24.</p></div>
            </div>
        </a><a href='https://www.rbb24.de/panorama/beitrag/2022/11/berlin-groenemeyer-uebernimmt-kosten-der-berliner-tafel-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grönemeyer will einen Monat lang Kosten der Berliner Tafel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7ggvtRNB7C8mlWFTjYTSjFFyvTBZuarx_6cDF-7QVrEU0P-N2pcGf_CPHBiUjGE17VQLzlu55" alt="Grönemeyer will einen Monat lang Kosten der Berliner Tafel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Berliner Tafel sprach am Sonntag auf Twitter von &quot;großartigen Nachrichten&quot;, einem &quot;großartigen Wetteinsatz&quot; und bedankte sich bei dem 66-jährigen Musiker.</p></div>
            </div>
        </a><a href='https://promisglauben.de/herbert-groenemeyer-praesentiert-song-und-tat-voller-menschlichkeit-und-naechstenliebe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Herbert Grönemeyer präsentiert Song und Tat voller Menschlichkeit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRX9WjIsRV-f0U6Q-IGTZF3mZXrLHt6xEq0gCKmLnVCHBZDCDoQfi6cGr8F4r-aKvsltQQbL887" alt="Herbert Grönemeyer präsentiert Song und Tat voller Menschlichkeit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beim gestrigen TV-Highlight des Jahres präsentierte der Musiker Herbert Grönemeyer, dessen Studioalben seit 1984 alle auf Platz 1 der deutschen Albumcharts&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/region/berlin/id_100083274/popstar-herbert-groenemeyer-will-die-berliner-tafel-finanziell-unterstuetzen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Popstar Herbert Grönemeyer will die Berliner Tafel finanziell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOFOFR4lsK7T_h60gZIruXfQQUmJpyXSEeINOfWPJaM7A2rFyyWf7reNt5juFIvXR8vNnyucsF" alt="Popstar Herbert Grönemeyer will die Berliner Tafel finanziell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prominente Hilfe für die Berliner Tafel: Sänger Herbert Grönemeyer will der Organisation mit Geld unter die Arme greifen.</p></div>
            </div>
        </a>
        </Template></>;
}