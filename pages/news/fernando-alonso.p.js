import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fernando Alonso</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fernando Alonso"/>
        <meta name="description" content="Trending News about Fernando Alonso" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fernando Alonso</h1>
            <Image width={800} height={500} src="https://images.motorsport-magazin.com/images/1200/570/q_80/s_fb/1031038.jpg" alt="Fernando Alonso"/>
            <h3>Recent News</h3>
            <a href='https://www.motorsport-magazin.com/formel1/news-280629-formel-1-alonso-endlich-ist-es-vorbei/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1, Fernando Alonso: Endlich ist es vorbei!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-ZFan66JubRcX9lGQoYrEqtqd8PwIFgLnEFgyIztq_K3C4uJrG64PPWoewhFd5S6mnrnYmSwf" alt="Formel 1, Fernando Alonso: Endlich ist es vorbei!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ciao Alpine! - Fernando Alonso konnte im letzten Rennen die Ziellinie erneut nicht überqueren. Den Spanier störte das Aus beim Abu Dhabi GP jedoch nicht.</p></div>
            </div>
        </a><a href='https://www.formel1.de/news/grand-prix-berichte/2022-11-20/ausfall-fuer-alonso-beim-alpine-abschied-bin-froh-dass-es-vorbei-ist'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ausfall für Alonso beim Alpine-Abschied: &quot;Bin froh, dass es vorbei ist&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTlPzj5wfTA5BrTuPYqTpfKGaCTyAjHsADZ-pNJIKMILoVh20TgmYo-pp8TX2aZtkCoF7Fk7Vd3" alt="Ausfall für Alonso beim Alpine-Abschied: &quot;Bin froh, dass es vorbei ist&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fernando Alonsos letztes Formel-1-Rennen für Alpine endet mit einem Motorproblem vorzeitig: Der Spanier freut sich nun auf den Neustart bei Aston Martin.</p></div>
            </div>
        </a>
        </Template></>;
}