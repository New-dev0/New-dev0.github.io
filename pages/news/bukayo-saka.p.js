import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bukayo Saka</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bukayo Saka"/>
        <meta name="description" content="Trending News about Bukayo Saka" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bukayo Saka</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal334x152-869x509/7/8/5/6223749/E85D478C-A822-45E3-ADF0-AC3A81FF7F7E_v0_h.jpg" alt="Bukayo Saka"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/sport/fussball/wm/6223749/England-Senegal-2_0_Doppelschlag-Harry-Kane-setzt-kurz-vor-der'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vorentscheidung! Bukayo Saka macht die Tür für das Viertelfinale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2D4r8Q4br-KbTq1lvefvOX7tAVZ8baO4Y-QJIqJKdrWgNIkQBLzZF90zGKZk1buPkT2rhove9" alt="Vorentscheidung! Bukayo Saka macht die Tür für das Viertelfinale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach einem zähen Beginn kamen die Engländer kurz vor der Pause in Schwung. Jordan Henderson (38.) und Kapitän Harry Kane (45. + 3) sorgten dann doch für&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}