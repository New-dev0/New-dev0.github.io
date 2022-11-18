import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nico Hülkenberg</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nico Hülkenberg"/>
        <meta name="description" content="Trending News about Nico Hülkenberg" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nico Hülkenberg</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/3aec0b3a-0700-4f1f-94f1-b079af9be0fc/1200x630" alt="Nico Hülkenberg"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/motorsport/formel1/2022/11/formel-1-so-stach-hulkenberg-schumacher-bei-haas-aus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: So stach Hülkenberg Schumacher bei Haas aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCsUa5OQLNUJfFNi9cqvOMSrnHJIEIlbk1_yPPXtcdJxdpPVW6KPqBtM4BWOWRvGZN8aaKN3J5" alt="Formel 1: So stach Hülkenberg Schumacher bei Haas aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für Nico Hülkenberg hat sich das Warten auf der Formel-1-Ersatzbank gelohnt. Er wird der Nachfolger von Mick Schumacher bei Haas.</p></div>
            </div>
        </a><a href='https://www.motorline.cc/motorsport/2022/Formel-1-&-Co-/Marc-Surer-Nico-H%C3%BClkenberg-auf-einem-Niveau-wie-Bottas-Hulk-hat-noch-eine-Rechnung-offen-262125.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marc Surer: Nico Hülkenberg &quot;auf einem Niveau wie Bottas&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSK1Jomlqq2OMSJLXBtJZuVEuDNa01noM-D7en946miPU0_qIu8EKKA6v4lKUlL9Q4X9OL0Hyc4" alt="Marc Surer: Nico Hülkenberg &quot;auf einem Niveau wie Bottas&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nico Hülkenberg feiert 2023 sein Comeback als Stammfahrer in der Formel 1, wie das Haas-Team jetzt auch offiziell bekannt gegeben hat. Und obwohl der 35-Jährige&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/sport/formel1/Warum-Haas-sich-fuer-Huelkenberg-entschieden-hat-article23726143.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konflikt-Paarung mit Magnussen?: Warum Haas sich für Hülkenberg ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWcmfB0ceE-bizATJIAA7uW2wJU4-Pcu77WOYW8DcLuf7lQKEJyBDYZya0EqoBsC3K6vlJIIbPmQ" alt="Konflikt-Paarung mit Magnussen?: Warum Haas sich für Hülkenberg ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seinem Spitznamen &quot;Hülkenback&quot; macht Nico Hülkenberg mal wieder alle Ehre. Mit 35 Jahren kehrt der &quot;Ruheständler&quot; tatsächlich noch einmal in die Formel 1&nbsp;...</p></div>
            </div>
        </a><a href='https://rp-online.de/sport/formel1/formel-1-aus-fuer-mick-schumacher-bei-team-haas-nico-huelkenberg-kehr-zurueck_aid-80072153'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel-1: Aus für Mick Schumacher bei Team Haas - Nico ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmpkoUrorgDxxgOconA9Y54H_Sroyc7ISP4qRf9s7_F2SKMCzgpYiMrnRiXHXeH_A7vlS8ge9g" alt="Formel-1: Aus für Mick Schumacher bei Team Haas - Nico ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mick Schumacher verliert sein Haas-Cockpit. Nico Hülkenberg schnappt es sich. Nach zwei Jahren das Formel-1-Aus für Schumacher - wenn nicht noch ein&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/sport/formel1/formel-1-mick-schumacher-wird-bei-haas-durch-nico-huelkenberg-ersetzt-das-stueck-ist-beendet-das-publikum-erleichtert-a-acf3a505-9d47-4574-93ca-d89ea279d7be'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aus beim Formel-1-Team Haas: Was ist schiefgelaufen bei Mick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtFt-koa5d8qDbXqfCyAOYExoEIGpg6dumUJF2guW_SbpPQ8An_iNXkjLxAPyNMO1n4aW-PA9Z" alt="Aus beim Formel-1-Team Haas: Was ist schiefgelaufen bei Mick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seit Monaten war Mick Schumacher beim US-Rennstall Haas angezählt, sein Teamchef boykottierte sogar Interviews. Die Schuld liegt nicht allein beim Fahrer.</p></div>
            </div>
        </a><a href='https://www.motorsport-magazin.com/formel1/news-280553-schumacher-raus-huelkenberg-rein-formel-1-stimmen-reaktionen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schumacher raus, Hülkenberg rein: Formel 1 Stimmen &amp; Reaktionen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQh3ldJkyGtAPMAA69pdo2cq5wURQM5MNZ9cyYJ0Ap_tBRJ4xsBtVXB4xGNcSbgbmEnAWc_qAEo" alt="Schumacher raus, Hülkenberg rein: Formel 1 Stimmen &amp; Reaktionen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nico Hülkenberg ersetzt Mick Schumacher in der Formel-1-Saison 2023 bei Haas. Alle Stimmen und Reaktionen aus dem Paddock.</p></div>
            </div>
        </a>
        </Template></>;
}