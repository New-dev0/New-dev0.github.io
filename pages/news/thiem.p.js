import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thiem</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thiem"/>
        <meta name="description" content="Trending News about Thiem" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thiem</h1>
            <Image width={800} height={500} src="https://www.tennisnet.com/fileadmin/_processed_/c/5/csm_ThiemAustralianOpen_e145c62bfb.jpg" alt="Thiem"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/thiem-unterliegt-comebacker-zverev-in-saudi-arabien-530369'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem unterliegt Comebacker Zverev in Saudi-Arabien</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Thiem unterliegt Comebacker Zverev in Saudi-Arabien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Niederösterreicher unterliegt dem Deutschen Alexander Zverev bei dessen Comeback im Achtelfinale des Diriyah Tennis Cups in Saudi-Arabien 8:10, 7:10.</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/thiem-bestaetigt-erhalt-einer-wildcard-fuer-australian-open-530397'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem bestätigt Erhalt einer Wildcard für Australian Open</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Thiem bestätigt Erhalt einer Wildcard für Australian Open" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Australien Open 2023 werden definitiv mit Dominic Thiem über die Bühne gehen. Wie der 29-jährige Niederösterreicher gegenüber &quot;Eurosport&quot; erklärt,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennisnet.com/news/australian-open-dominic-thiem-fix-im-hauptfeld-dabei'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australian Open: Dominic Thiem fix im Hauptfeld dabei!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4grCOCg7UdptSMCaGehEde58Y1m_hqE2jN-jjbG3SsuOawLjfDvy5-u4HTV3iL4CdSqDjQmmU" alt="Australian Open: Dominic Thiem fix im Hauptfeld dabei!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie der Österreicher im Interview mit &quot;Eurosport&quot; verriet, würde er für das erste Grand-Slam-Turnier des Jahres bei Bedarf eine Wildcard erhalten. Auf der Liste&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/sport/tennis/thiem-verliert-in-riad-gegen-zverev-und-ist-in-australien-nicht-gesetzt/402252318'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem verliert in Riad, hat Australian-Open-Startplatz aber sicher</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7CZNLwDWlgKvNaYMb8zqN5m-Zx_QVjCYdTTJvTtUR9sErZcHJRbdzH0OYgX4-ryYobKxI4LwG" alt="Thiem verliert in Riad, hat Australian-Open-Startplatz aber sicher" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sollte er nicht über sein Ranking in die Nennliste nachrücken, erhält Thiem eine Wildcard für das erste Grand-Slam-Turnier des Jahres.</p></div>
            </div>
        </a><a href='https://www.sn.at/sport/tennis/thiem-unterliegt-zverev-und-erhaelt-australian-open-ticket-130917040'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem unterliegt Zverev und erhält Australian-Open-Ticket</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRU0cnyEEkWz1OaIqzXQ36cA-g8ArjeuUNpV_f3Ou-2YHZc1vLJKeIuNHsj3kYNtV60G1V0jDY" alt="Thiem unterliegt Zverev und erhält Australian-Open-Ticket" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tennis-Star Dominic Thiem hat seinen Startplatz bei den Australian Open im Jänner 2023 sicher. Als aktuelle Nummer 105 der Welt stünde der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/thiem-erhaelt-wildcard-fuer-australian-open/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem erhält Wildcard für Australian Open - Sky Sport Austria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqTqMwvia0vF-SASWrioOq1m26IHSmIIMPMa4-t8XAykQI_Z3FOk8Ao9d2o5wxUJ0uDRX-Iyq8" alt="Thiem erhält Wildcard für Australian Open - Sky Sport Austria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dominic Thiem hat seinen Startplatz im Hauptfeld der Australian Open sicher. Der österreichische Tennis-Star würde im Bedarfsfall eine Wildcard erhalten.</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/zverev-comeback-sieg-gegen-thiem-niederlage-gegen-medvedev/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zverev-Comeback: Sieg gegen Thiem, Niederlage gegen Medvedev ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3UDpM32-7NfSmkQD4yeAiIn52zQC5nLzx_M2QxCPRYgM3Uugaq9tmDXphHYzCE4HW-Rcz6n_9" alt="Zverev-Comeback: Sieg gegen Thiem, Niederlage gegen Medvedev ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alexander Zverev hat 188 Tage nach seiner schweren Knöchelverletzung sein Comeback gefeiert. Bei dem umstrittenen Show-Event in Diriyah/Saudi-Arabien.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6225168/thiem-bekommt-wildcard-fuer-australian-open'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem bekommt Wildcard für Australian Open</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAt5Dxq0cFcmXysSpiP4DVCa2ol8rRMSQhkXUPm01hbbO7eB0bE2OXucy5-J0qOHNe0qCpVY7q" alt="Thiem bekommt Wildcard für Australian Open" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dominic Thiem verpasste zwar die direkte Qualifikation für die Australian Open Mitte Jänner, bekommt laut eigener Aussage aber eine Wildcard für das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.weekend.at/sport/thiem-wildcard-australien'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australian Open: Thiem ergattert Wildcard</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTMEFCkRoI-folb9KiTg4IN2v3eR5bQJ-eL0938nThEV-yPGC3Z4_B1jjAKI6S93Ex1t-emeW4j" alt="Australian Open: Thiem ergattert Wildcard" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der österreichische Tennis-Star schaffte es nicht auf einen Fixstartplatz beim ersten Grandslam des Jahres, erhält jedoch eine Wildcard.</p></div>
            </div>
        </a><a href='https://www.tennisnet.com/news/diriyah-tennis-cup-alexander-zverev-gewinnt-comeback-match-gegen-dominic-thiem'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diriyah Tennis Cup: Alexander Zverev gewinnt Comeback-Match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQefVuJ8i8fTqRYqHRg0zdWZhRNbxNOo8Hfc0yadv8RzXkZNEmdKKfja2uFU-gn2RnlhrkhEdmY" alt="Diriyah Tennis Cup: Alexander Zverev gewinnt Comeback-Match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alexander Zverev hat sein Comeback-Match gegen Dominic Thiem beim Diriyah Tennis Cup mit 10:8 und 10:7 gewonnen. von Nikolaus Fink</p></div>
            </div>
        </a>
        </Template></>;
}