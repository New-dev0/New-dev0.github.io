import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jean-Marc Jancovici</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jean-Marc Jancovici"/>
        <meta name="description" content="Trending News about Jean-Marc Jancovici" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jean-Marc Jancovici</h1>
            <Image width={800} height={500} src="https://media.ouest-france.fr/v1/pictures/MjAyMjExMDA1MGZmNDUzNzYxYTEzNzMyZmQ5MzY4ZjkyMmMwM2Y?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=52281e78ef451f4efcb9dd87d9b37f3f4786e716d9a01a9d0f042418e30a209d" alt="Jean-Marc Jancovici"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/economie/transports/autoroute/110-km-h-sur-les-autoroutes-jean-marc-jancovici-ne-comprend-pas-ce-qu-elisabeth-borne-fait-4680c9da-6be9-11ed-918c-3d4ea5ca1edf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>110 km/h sur les autoroutes : Jean-Marc Jancovici « ne comprend ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnEefR6Ir-ObeiciVGMoHxo-y94WOdTz_KqikFhVcMlFOxlLcSgKgmnV1VlX3nbfTW0aIiP5oL" alt="110 km/h sur les autoroutes : Jean-Marc Jancovici « ne comprend ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Première ministre Élisabeth Borne s&#39;est refusée à imposer une baisse de la vitesse sur les autoroutes, lors d&#39;une intervention sur « BFMTV », le 14&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lindependant.fr/2022/11/24/limitation-de-vitesse-a-110-kmh-sur-autoroute-je-ne-comprends-pas-ce-quelle-fait-lexpert-jean-marc-jancovici-tacle-elisabeth-borne-10824320.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Limitation de vitesse à 110 km/h sur autoroute : &quot;Je ne comprends ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRnruGr1BVBh1I24dIajvMKnSmPgU2gog5iaK6jNJsbZeJ0u8-vqPMUy26XSJRtpBxNYGEHwrbR" alt="Limitation de vitesse à 110 km/h sur autoroute : &quot;Je ne comprends ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Première ministre a déclaré &quot;qu&#39;imposer cela aux Français n&#39;est pas la bonne voie&quot;. Dans le cadre du plan de sobriété énergétique, le gouvernement a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}