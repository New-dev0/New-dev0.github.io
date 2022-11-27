import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ruka</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ruka"/>
        <meta name="description" content="Trending News about Ruka" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ruka</h1>
            <Image width={800} height={500} src="" alt="Ruka"/>
            <h3>Recent News</h3>
            <a href='https://www.skysportaustria.at/kraft-springt-in-ruka-auf-platz-zwei/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kraft springt in Ruka auf Platz zwei - Sky Sport Austria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGhy5-cm7z_JGTnMFtPNcvJc_e6iAAqJYjy6smtfiORh02EjKzabFye5ioIv3rgKTt9pMtoWrk" alt="Kraft springt in Ruka auf Platz zwei - Sky Sport Austria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Skispringer Stefan Kraft hat im dritten Weltcup-Saisonbewerb den bereits zweiten Podestplatz geschafft. Seinen Premierensieg in Ruka verpasste der.</p></div>
            </div>
        </a><a href='https://tvthek.orf.at/live/Skisprung-Weltcup-der-Herren-aus-Ruka-HS-142-Das-Springen/14201109'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skisprung-Weltcup der Herren aus Ruka HS 142: Das Springen vom ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSp4GRLWsQDZA9HU9JawbXKEuo8foUZGETXYsRjf3xGwC5KnGM5D57RBsiEJLM0TnihgXvlvPvg" alt="Skisprung-Weltcup der Herren aus Ruka HS 142: Das Springen vom ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ÖSV-Star Stefan Kraft hat im dritten Weltcup-Bewerb in diesem Winter den bereits zweiten Podestplatz geschafft. Seinen Premierensieg in Ruka verpasste der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/skispringen/skispringen-neuer-schanzenrekord-in-ruka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skispringen: Neuer Schanzenrekord in Ruka</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3sjOO1hT1-ix4rmrPvo0mZmWtgC3xy6vxEfDaLbj6sZDSptTx17iSOpd-yK9qiXI5siFqF9lG" alt="Skispringen: Neuer Schanzenrekord in Ruka" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach dem ungewöhnlichen Saisonstart in Wisla ging es am heutigen Samstag auch auf Schnee los. Dabei war Anze Lanisek der Mann des Tages.</p></div>
            </div>
        </a><a href='https://www.zdf.de/nachrichten/sport/wintersport-skispringen-weltcup-ruka-geiger-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Geiger mit Sprung nach vorne - Lanisek siegt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPu7sgrowtFxiLB1WWbI_h4D_GYKLp7OHlZgRAjyaFYfZP6CXSJNAYaUuN2ngqisevF69DHly8" alt="Geiger mit Sprung nach vorne - Lanisek siegt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karl Geiger hat beim ersten &quot;Schnee-Weltcup&quot; der Saison aufsteigende Form gezeigt und im finnischen Ruka die erste Top-10-Platzierung für die DSV-Adler im&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}