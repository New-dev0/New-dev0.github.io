import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dominic Thiem</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dominic Thiem"/>
        <meta name="description" content="Trending News about Dominic Thiem" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dominic Thiem</h1>
            <Image width={800} height={500} src="https://www.tennisnet.com/fileadmin/_processed_/c/5/csm_ThiemAustralianOpen_e145c62bfb.jpg" alt="Dominic Thiem"/>
            <h3>Recent News</h3>
            <a href='https://www.tennisnet.com/news/australian-open-dominic-thiem-fix-im-hauptfeld-dabei'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australian Open: Dominic Thiem fix im Hauptfeld dabei!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4grCOCg7UdptSMCaGehEde58Y1m_hqE2jN-jjbG3SsuOawLjfDvy5-u4HTV3iL4CdSqDjQmmU" alt="Australian Open: Dominic Thiem fix im Hauptfeld dabei!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wie der Österreicher im Interview mit &quot;Eurosport&quot; verriet, würde er für das erste Grand-Slam-Turnier des Jahres bei Bedarf eine Wildcard erhalten. Auf der Liste&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6225168/doppelt-schlechte-nachrichten-fuer-dominic-thiem'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doppelt schlechte Nachrichten für Dominic Thiem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAt5Dxq0cFcmXysSpiP4DVCa2ol8rRMSQhkXUPm01hbbO7eB0bE2OXucy5-J0qOHNe0qCpVY7q" alt="Doppelt schlechte Nachrichten für Dominic Thiem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zunächst erhielt der Niederösterreicher kein grünes Licht von den Australian Open, dann verlor er in Saudi-Arabien einen Showkampf.</p></div>
            </div>
        </a><a href='https://www.sn.at/sport/tennis/eine-niederlage-aber-gute-nachrichten-fuer-dominic-thiem-130925272'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eine Niederlage, aber gute Nachrichten für Dominic Thiem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgRR3ZBnOrm9mJmqX_yAujFzB43dmk3geOK2tfAM8CtNPNFD_ODj4d3IUtgqOzcpvMf0w-faDS" alt="Eine Niederlage, aber gute Nachrichten für Dominic Thiem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sollte Österreichs Tennisstar nicht direkt für den Hauptbewerb qualifiziert sein, bekommt er eine Freikarte. Das bestätigte Thiem nun am Rande des&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/sport/tennis/thiem-verliert-in-riad-gegen-zverev-und-ist-in-australien-nicht-gesetzt/402252318'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem verliert in Riad, hat Australian-Open-Startplatz aber sicher</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7CZNLwDWlgKvNaYMb8zqN5m-Zx_QVjCYdTTJvTtUR9sErZcHJRbdzH0OYgX4-ryYobKxI4LwG" alt="Thiem verliert in Riad, hat Australian-Open-Startplatz aber sicher" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sollte er nicht über sein Ranking in die Nennliste nachrücken, erhält Thiem eine Wildcard für das erste Grand-Slam-Turnier des Jahres.</p></div>
            </div>
        </a><a href='https://volksblatt.at/sport/thiem-nicht-im-australian-open-hauptfeld-niederlage-in-riad-743241/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem unterliegt Zverev und erhält Australian-Open-Ticket</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTINh6aUqfQdqZNZhtvNSe4kYLurZ7kFVRJ4zApCpe_b9AUbPcMOUrXYTyfXJwY8yNhIOuzwJCy" alt="Thiem unterliegt Zverev und erhält Australian-Open-Ticket" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tennis-Star Dominic Thiem hat seinen Startplatz bei den Australian Open im Jänner 2023 sicher. Als aktuelle Nummer 105 der Welt stünde der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysportaustria.at/thiem-erhaelt-wildcard-fuer-australian-open/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thiem erhält Wildcard für Australian Open - Sky Sport Austria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqTqMwvia0vF-SASWrioOq1m26IHSmIIMPMa4-t8XAykQI_Z3FOk8Ao9d2o5wxUJ0uDRX-Iyq8" alt="Thiem erhält Wildcard für Australian Open - Sky Sport Austria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dominic Thiem hat seinen Startplatz im Hauptfeld der Australian Open sicher. Der österreichische Tennis-Star würde im Bedarfsfall eine Wildcard erhalten.</p></div>
            </div>
        </a>
        </Template></>;
}