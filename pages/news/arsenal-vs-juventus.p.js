import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arsenal vs Juventus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arsenal vs Juventus"/>
        <meta name="description" content="Trending News about Arsenal vs Juventus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arsenal vs Juventus</h1>
            <Image width={800} height={500} src="https://www.arsenal.com/sites/default/files/styles/desktop_16x9/public/images/UWCL%20Preview%20Home.png?itok=r-Oww13J" alt="Arsenal vs Juventus"/>
            <h3>Recent News</h3>
            <a href='https://www.arsenal.com/news/uwcl-preview-arsenal-women-v-juventus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UWCL Preview: Arsenal Women v Juventus | Match preview | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSEMM2WcGVvHS9XY6trVA7mBWieTq9b6LbVFrghWOA5antPG3uM1gDNK7-6zH3_G4hX32IMIfXT" alt="UWCL Preview: Arsenal Women v Juventus | Match preview | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;re back in Champions League action tonight as we host Juventus at Emirates Stadium.</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/arsenal-vs-juventus-womens-champions-league-how-can-i-watch-live-tv-free-coverage-stream-today-b1045588.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs Juventus live stream: How can I watch Women&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2y-rYE-DUkHybHbwmERUlGfvCdGybEaXybP1LDOTcrRws76Z6HVamfLIM_kwO9V8vdeEPeXy-" alt="Arsenal vs Juventus live stream: How can I watch Women&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal can take a big step towards qualifying for the Women&#39;s Champions League knockouts with a win over Juventus tonight.</p></div>
            </div>
        </a><a href='https://www.espn.co.uk/football/report/_/gameId/654452'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs. Juventus - Football Match Report - December 7, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTmSAUB7UXdj9hVKkitavwPbv_tFjBQ4LhmOMgHyecE8qI8WwL7UTtnruPmmYK9k07NER_CSvV" alt="Arsenal vs. Juventus - Football Match Report - December 7, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Arsenal vs. Juventus 2022-23 UEFA Women&#39;s Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/arsenal-women-vs-juventus-women/live/478303'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>%competition_name% (Sky Sports)</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="%competition_name% (Sky Sports)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Martina Lenzini (Juventus Femminile) wins a free kick on the right wing. 90&#39;+3&#39; free_kick_lost icon. Foul by Jordan Nobbs (Arsenal Women).</p></div>
            </div>
        </a>
        </Template></>;
}