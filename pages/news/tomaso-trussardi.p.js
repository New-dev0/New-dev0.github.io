import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tomaso Trussardi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tomaso Trussardi"/>
        <meta name="description" content="Trending News about Tomaso Trussardi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tomaso Trussardi</h1>
            <Image width={800} height={500} src="https://image.gala.de/22965634/t/8a/v5/w1440/r1.7778/-/wetten-dass-thomas-gottschalk-michelle-hunziker.jpg" alt="Tomaso Trussardi"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.de/lifestyle/film-tv-musik/wetten--dass------michelle-hunziker-weicht-fragen-zu-tomaso-aus-22961490.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wetten, dass.. ?: Michelle Hunziker weicht Fragen zu Tomaso aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSu-AJikdyMZdyVma8KNMRhLlwEe2CAf49Jd4iLev3JyW_5c-bYh3wHdmNnduG1mEFjDJruVEO" alt="Wetten, dass.. ?: Michelle Hunziker weicht Fragen zu Tomaso aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TV-News im GALA-Ticker: Bei &quot;Wetten, dass.. ?&quot; weicht Michelle Hunziker Fragen über Tomaso aus +++ &quot;Bauer sucht Frau&quot;: Antonia Hemmer äußert sich unter&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vip.de/cms/zwei-tomasos-thomas-gottschalk-fuehlt-michelle-hunziker-bei-wetten-dass-auf-den-zahn-5017080.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Zwei Tomasos&quot;: Thomas Gottschalk fühlt Michelle Hunziker bei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRs3FWdqSJRf3wP5j2OUeEFpDAWBJqeHLALGcVTCaw4An0Tns8vsvpM9EE2XLUYod4b8i0F-Iw5" alt="&quot;Zwei Tomasos&quot;: Thomas Gottschalk fühlt Michelle Hunziker bei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alle fragen sich: Was läuft zwischen Michelle Hunziker und Ex Tomaso? Ein Thema, dass auch &quot;Wetten... dass?&quot;-Moderator Thomas Gottschalk brennend&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}