import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jay Leno</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jay Leno"/>
        <meta name="description" content="Trending News about Jay Leno" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jay Leno</h1>
            <Image width={800} height={500} src="https://www.vienna.at/2022/11/AFP_32NJ3JL-4-3-0038492887-3849x2887.jpg" alt="Jay Leno"/>
            <h3>Recent News</h3>
            <a href='https://www.vienna.at/us-moderator-jay-leno-bei-unfall-schwer-verletzt/7747729'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US-Moderator Jay Leno bei Unfall schwer verletzt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRcU_ozMDHuujqvbi0hRdqmdhK7nCzrOShMnHrIDKlRRno4FX4n_nYTV6a8dUCWT-VOqMWBuvVo" alt="US-Moderator Jay Leno bei Unfall schwer verletzt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der frühere Late-Night-Moderator Jay Leno ist bei einem Benzinbrand in seiner Garage in Los Angeles schwer verletzt worden. Der US-Moderator erlitt dabei&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000140862152/us-moderator-jay-leno-durch-schwere-verbrennungen-verletzt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US-Moderator Jay Leno durch schwere Verbrennungen verletzt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHzWEq4foQpQ8cuvNScJ2hnndDcgPb5EUyn6RZkcrmbIVbIJOse1iZWE_ctLsozbatalpmyUWH" alt="US-Moderator Jay Leno durch schwere Verbrennungen verletzt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leno soll am Sonntag in seiner Garage in Los Angeles verletzt worden sein, brachte das Portal &quot;TMZ.com&quot; in Erfahrung. Demnach war eines seiner Fahrzeuge&nbsp;...</p></div>
            </div>
        </a><a href='https://www.auto-motor-und-sport.de/verkehr/jay-leno-verletzt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jay Leno verletzt: Auto aus Sammlung brennt plötzlich</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8GEcxF2oKzy7cN7_wZ-u33otzMNyY_2FWA79M76yDGUZ3QlibvOFjI4OMDjpXDPSnr4P4SNWf" alt="Jay Leno verletzt: Auto aus Sammlung brennt plötzlich" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jay Leno hat sich Verbrennung im Gesicht zugezogen – eines seiner Autos hat spontan Feuer gefangen.</p></div>
            </div>
        </a><a href='https://www.film.at/stars/jay-leno-schwere-verbrennungen/402218199'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jay Leno: Talkmaster erlitt &quot;schwere Verbrennungen&quot; im Gesicht</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQG770y5iZDJeuN3oND8UzulSWMKEI_xFY4xH-OY9FWti1xTViMiA-JXijGJ2McnVUgGuecxuG0" alt="Jay Leno: Talkmaster erlitt &quot;schwere Verbrennungen&quot; im Gesicht" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jay Leno (72) hat sich offenbar schwer verletzt. Die US-Talkshow-Legende hat jedoch bestätigt, dass es ihr den Umständen entsprechend offenbar einigermaßen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.heute.at/s/sorge-um-tv-legende-jay-leno-er-ist-schwer-verunglueckt-100238666'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sorge um TV-Legende Jay Leno: er ist schwer verunglückt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNwRcE4AbMCf_Y0jtI2gGYgCWyGLMgjVE1kvEdraMDK1BNal7yIMCWdXpexUbts9UZJFuaCshb" alt="Sorge um TV-Legende Jay Leno: er ist schwer verunglückt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Talkshow-Star Jay Leno (72) hat sich bei einem Unfall schwer verletzt. Er ist in eine auf Verbrennungen spezialisierte Klinik gebracht worden.</p></div>
            </div>
        </a><a href='https://www.salzburg24.at/news/welt/jay-leno-bei-unfall-in-garage-schwer-im-gesicht-verbrannt-129836266'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jay Leno bei Unfall in Garage schwer im Gesicht verbrannt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFV2-lhMIJT7OeUjz3lnSJlh8BUdGXZ-9TV9tV-HQOWp_wOh-Ut3X2pt4IJkK4xNtaDRmfCrZI" alt="Jay Leno bei Unfall in Garage schwer im Gesicht verbrannt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schwere Brandverletzungen im Gesicht erlitt der frühere Late-Night-Moderator Jay Leno bei einem Unfall in seiner eigenen Garage.</p></div>
            </div>
        </a>
        </Template></>;
}