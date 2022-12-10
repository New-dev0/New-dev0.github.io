import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Al Pacino</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Al Pacino"/>
        <meta name="description" content="Trending News about Al Pacino" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Al Pacino</h1>
            <Image width={800} height={500} src="https://bilder.fernsehserien.de/gfx/pics/1408/Al-Pacino-Und-Logan-Lerman-In-Hunters.jpg.jpg" alt="Al Pacino"/>
            <h3>Recent News</h3>
            <a href='https://www.fernsehserien.de/news/hunters-erster-trailer-zur-rueckkehr-von-al-pacino-als-nazi-jaeger'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Hunters“: Erster Trailer zur Rückkehr von Al Pacino als Nazi-Jäger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtYeSEKlo4C0eGeJsTpqdbxroV1NfYwIcf5QZD7VWzMrRmrIUqhd7NSWaVthAMwJdg1iM9pgQn" alt="„Hunters“: Erster Trailer zur Rückkehr von Al Pacino als Nazi-Jäger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im kommenden Jahr geht die Nazi-Jagd von Al Pacino bei Prime Video zu Ende. Amazon hatte zuletzt bestätigt, dass die zweite Staffel des Actionthrillers&nbsp;...</p></div>
            </div>
        </a><a href='https://www.serienjunkies.de/news/hunters-teaser-kuendigt-staffel-116255.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hunters: Teaser zur 2. Staffel mit Udo Kier als Hitler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcfyhFZeCq6Uz4yN-CWuu_W_pfxeNqCPjxSHhlyHTYprOfZF21QQPDywJNCnohUvM1fc4rAdk3" alt="Hunters: Teaser zur 2. Staffel mit Udo Kier als Hitler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diesmal machen die Hunters Jagd auf Hitler, der von Udo Kier gespielt wird. Im Januar kann man die zweite Staffel der Nazijägerserie bei Amazon Prime Video&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}