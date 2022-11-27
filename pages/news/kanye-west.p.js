import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kanye West</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kanye West"/>
        <meta name="description" content="Trending News about Kanye West" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kanye West</h1>
            <Image width={800} height={500} src="https://images-tt-com.nmo.at/v2/assets.tt.com/im-content/images/8b71d5a0-0628-5248-9d05-975a1211eb29?p=eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0Ijo2MzB9fQ%3D%3D" alt="Kanye West"/>
            <h3>Recent News</h3>
            <a href='https://www.tt.com/artikel/30838629/trump-rechtfertigt-sich-fuer-abendessen-mit-kanye-west'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump rechtfertigt sich für Abendessen mit Kanye West</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2DNC47ulh5IRBRIwoss2THKmOo_yNQ7XlyRuyAmFzu_6MXKuAWxmo8zlbWjO44NA1dUwADwWP" alt="Trump rechtfertigt sich für Abendessen mit Kanye West" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kaum hat Trump seine Kandidatur fürs Weiße Haus erklärt, macht er mit zwielichtigen Dinner-Gästen von sich Reden. Einen rechtsextremen Nationalisten will er&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2866773'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fragwürdige Runde - Trump wegen Dinner mit Kanye West in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLsa-HCrAmM6lEddcPA7hU8_TUPoJjABbCde5y5klhm9xPsu3Is7h9PGUuGwCrJJb3s_4p9e-J" alt="Fragwürdige Runde - Trump wegen Dinner mit Kanye West in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-US-Präsident Donald Trump hat sich für ein gemeinsames Abendessen mit Rapper Kanye West und dem rechtsextremen Nationalisten Nick Fuentes ...</p></div>
            </div>
        </a><a href='https://orf.at/stories/3295337/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump im Clinch mit Kanye West</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsGlgAfWJy2c47jTospQQdxcRHAZxC5iLW1yhbH1iKbHcXnC20oQFJP9qMijLrMMHWshVNaWF2" alt="Trump im Clinch mit Kanye West" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rapper Kanye West und Ex-US-Präsident Donald Trump streiten sich in sozialen Netzwerken. Hintergrund ist ein Abendessen, das am Dienstag in Trumps Anwesen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/lifestyle/leute/kanye-west--streit-mit-donald-trump-soll-eskaliert-sein-32951330.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West: Streit mit Donald Trump soll eskaliert sein</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2O8khJyb5cIJXZkBbfb3iy08q8tVoC47D0uQmSBeW1mOTb73p1j5htSGBDoUxU3JF3dwCUb6h" alt="Kanye West: Streit mit Donald Trump soll eskaliert sein" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Abendessen soll eskaliert sein: Donald Trump hat angeblich Kanye West angeschrien, als es um die Präsidentschaftskandidatur ging.</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/politik/usa-trump-kanye-west-abendessen-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West will Trump als Vizepräsident</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6k78-nM-b4FjmgjQ-a8RFcsYpUbcuYLsEANAtvA17bsDwKzZQyz-FwkMdnDQKhz_ARSwXbY-s" alt="Kanye West will Trump als Vizepräsident" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donald Trump und Rapper Kanye West hatten ein gemeinsames Dinner: Dabei soll es auch um die US-Präsidentschaftswahl 2024 gegangen sein.</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/politik/ausland/kanye-west-berichtet-von-streit-mit-donald-trump-beim-abendessen-18489847.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mar-a-Lago: Kanye West berichtet von Streit mit Donald Trump</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0hjYvVTze2sH7hrwpaHR-U-6LFyPbJ2DRD-eBnKSj4WkC3pVqa4hxNTGe3r8Or5Y8ELcnIjdU" alt="Mar-a-Lago: Kanye West berichtet von Streit mit Donald Trump" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der wegen Antisemitismus umstrittene Rapper deutet eine Präsidentschaftskandidatur an – und berichtet von einer empörten Reaktion Donald...</p></div>
            </div>
        </a>
        </Template></>;
}