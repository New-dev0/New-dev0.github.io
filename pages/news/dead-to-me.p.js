import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dead to Me</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dead to Me"/>
        <meta name="description" content="Trending News about Dead to Me" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dead to Me</h1>
            <Image width={800} height={500} src="https://img.netzwelt.de/dw1600_dh900_sw3840_sh2160_sx0_sy0_sr16x9_nu2/picture/original/2020/11/dead-to-me-staffel-2-290399.jpeg" alt="Dead to Me"/>
            <h3>Recent News</h3>
            <a href='https://www.netzwelt.de/serien/dead-to-me/210097-dead-to-me-staffel-3-finale-folgen-starten-verzoegerung-netflix.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Dead to Me&quot; Staffel 3: Finale Folgen starten nach Verzögerung bei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDm-tVKsY28jKAW9EEqMibh1O1W8d4ccP5P02gOiFnO5n_RkyIjvuK1ohqdxWcu18uHrePDTEF" alt="&quot;Dead to Me&quot; Staffel 3: Finale Folgen starten nach Verzögerung bei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nun ist sie da: Die 3. Staffel von &quot;Dead to Me&quot; kann nun bei Netflix starten, nachdem die Produktion sich aufgrund der gesundheitlichen Probleme von&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvmovie.de/news/dead-to-me-staffel-4-darum-wird-die-netflix-serie-nicht-fortgesetzt-128899'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Dead to Me“ Staffel 4: Darum wird die Netflix-Serie nicht fortgesetzt!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmzVQ5gh3FugDU2Q2FmM2xfo5C3eEHVXlhCtUa2-vU1D8CSINYt4JwZVQFT31Cf6UxveMBHc45" alt="„Dead to Me“ Staffel 4: Darum wird die Netflix-Serie nicht fortgesetzt!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die dritte Staffel „Dead to Me“ mit Christina Applegate ist gerade bei Netflix gestartet. Aber Fans müssen nicht auf weitere Folgen warten.</p></div>
            </div>
        </a><a href='https://www.kino.de/artikel/netflix-tipp--3634gcwhxj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix-Tipp: Zu wenig beachtetes Serien-Highlight geht heute zu Ende</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOG-j3u1luxtsqfEl_NtWh4ZasgV1dsuRXaMR1MCBv5b1zk9FDd6Fl7mXsblwR47gHavzV7YjE" alt="Netflix-Tipp: Zu wenig beachtetes Serien-Highlight geht heute zu Ende" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei dem Überfluss an Streaming-Inhalten, bekommen auch herausragende Serien manchmal nicht die Beachtung, die sie verdient hätten.</p></div>
            </div>
        </a>
        </Template></>;
}