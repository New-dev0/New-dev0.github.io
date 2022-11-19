import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Licht ins Dunkel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Licht ins Dunkel"/>
        <meta name="description" content="Trending News about Licht ins Dunkel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Licht ins Dunkel</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7391415/46-192177434.jpg" alt="Licht ins Dunkel"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/stars/austropromis/diese-superstars-kamen-zur-licht-ins-dunkel-gala-helene-fischer/402226986'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diese Superstars kamen zur &quot;Licht ins Dunkel&quot;-Gala</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRR7w5Qq9nH-9AYt6x9tEIrRRVr3XNy08yrVFrQViJbnQD_J18V3l3QI5lJd-r3qV7p3BDCbPTF" alt="Diese Superstars kamen zur &quot;Licht ins Dunkel&quot;-Gala" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stars, Stars, Stars Freitagabend in den Wiener Sofiensälen – bei der ORF-Liveshow, der „Licht ins Dunkel“-Gala wurden nicht nur heimische Musiker wie Josh&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/c-lokales/staraufgebot-bei-licht-ins-dunkel-gala_a5718679'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Helene Fischer, DJ Ötzi und mehr: Staraufgebot bei &quot;Licht ins ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRleSsA0ExhnEpZMAWjY9PxtJO_FKOh8SxdBnPCz86RMZNeMkf9fRv-yV2Ipvpze_7ZsZWhthgy" alt="Helene Fischer, DJ Ötzi und mehr: Staraufgebot bei &quot;Licht ins ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zahlreiche prominente Gäste setzen am Freitag, dem 18. November 2022, bei der Gala für &quot;Licht ins Dunkel&quot; ein Zeichen für Solidarität und Menschlichkeit.</p></div>
            </div>
        </a><a href='https://tvthek.orf.at/profile/Gala-fuer-Licht-ins-Dunkel-OeGS/13893388/Die-Gala-fuer-Licht-ins-Dunkel-OeGS/14157465'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die Gala für Licht ins Dunkel (ÖGS) vom 18.11.2022 um 20:15 Uhr</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQ8k6F0pOTPO4_wPjJ_vB5o9O6r64GCX9_T6eDfy25NE2KKatC89MUlXneTMiJqYJgzlzRCwty" alt="Die Gala für Licht ins Dunkel (ÖGS) vom 18.11.2022 um 20:15 Uhr" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unterstützt wird die ORF-Aktion von zahlreichen Stars und Publikumslieblingen, die für den guten Zweck auf ihre Gagen verzichten – etwa Helene Fischer, David&nbsp;...</p></div>
            </div>
        </a><a href='https://oesterreich.orf.at/stories/3182790/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Licht ins Dunkel“: Gala im Jubiläumsjahr mit vielen Stars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTjhCZlpg9yACnbg0EUpi8BpkCfEE3YY-_y-VzH7mn6mxPl_9ts4OOlyGiDCD6XHV3k4snLiZP0" alt="„Licht ins Dunkel“: Gala im Jubiläumsjahr mit vielen Stars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auftreten werden etwa Helene Fischer, David Garrett, Josh und Melissa Naschenweng. Auch Sarah Connor und DJ Ötzi sind dabei – sie präsentieren Songs aus ihren&nbsp;...</p></div>
            </div>
        </a><a href='https://www.watson.de/unterhaltung/prominente/592653862-helene-fischer-ruehrt-bei-live-gala-mit-emotionaler-botschaft'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Helene Fischer rührt bei Live-Gala mit emotionaler Botschaft</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShyl3ZFK8XGSv3CaAJmw6Qdxvt9fZ7Lrhyvv_sXhB9Jv9scIPTCQYYrQwOrdtPyLu6adk9r0Q1" alt="Helene Fischer rührt bei Live-Gala mit emotionaler Botschaft" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Freitagabend wurde live im ORF 2 &quot;Die Gala für Licht ins Dunkel&quot; ausgestrahlt. Auch Helene Fischer war zu Gast und sorgte für einen Gänsehautmoment.</p></div>
            </div>
        </a>
        </Template></>;
}