import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Max Franz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Max Franz"/>
        <meta name="description" content="Trending News about Max Franz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Max Franz</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal2185x592-2584x1076/e/8/f/6217359/AC527260-4FC1-4768-8E61-3149D3437E91_v0_h.jpg" alt="Max Franz"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/sport/wintersport/skialpin/6217359/Nach-schwerem-Sturz_Abfahrer-Max-Franz-wird-in-Graz-noch-einmal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Abfahrer Max Franz wird in Graz noch einmal operiert und gibt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQ6xt5FPJ7NLXjOZd_XQ1G7YOn9ku-VCqIZLGwMRIpeXpTYWkjQOXmoaY7F_x41tAWkv2R9nWB" alt="Abfahrer Max Franz wird in Graz noch einmal operiert und gibt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Franz ist zurück in Österreich, wurde von Vail nach Graz überstellt. Da wird er jetzt im UKH unter der Leitung von Jürgen Mandl weiter betreut – weitere&nbsp;...</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/wintersport/ski-alpin/weltcup-herren/beide-beine-gebrochen--weitere-ops-bei-max-franz-notwendig/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beide Beine gebrochen: Weitere OPs bei Max Franz notwendig</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_pNoxN5y_4LaFcM9W5OrE9aFmoTUaUSq1ETBuhgYwtiwy0hQctivXeP1rU_AiFe01uPFGhHKS" alt="Beide Beine gebrochen: Weitere OPs bei Max Franz notwendig" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach seinem verhängnisvollen Sturz in Copper Mountain ist Max Franz zurück in Österreich - und stellt sich auf einen harten Weg zurück ein.</p></div>
            </div>
        </a><a href='https://kurier.at/sport/wintersport/nach-dem-horror-sturz-kehrt-max-franz-in-die-heimat-zurueck/402226989'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach dem Horror-Sturz kehrt Max Franz in die Heimat zurück</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRwq01vghQYtJZwwLzlgJt7QBYuQl7K4FChSxu9e2_-D0mi3qlEKpJJFFhEzafmhLtkowjm54a4" alt="Nach dem Horror-Sturz kehrt Max Franz in die Heimat zurück" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Kärntner wurde mit dem Rettungs-Jet von Vail nach Graz gebracht, wo er erneut operiert werden muss.</p></div>
            </div>
        </a><a href='https://www.5min.at/202211586106/nach-horror-sturz-max-franz-meldet-sich-aus-spital-es-ist-extrem-bitter/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Horror-Sturz: Max Franz meldet sich aus Spital – “Es ist extrem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMhcA3rVnYIZC_Xes1Yp0RBLdTCW8Le7oFMLF8JVMJS1lQ6SGBmGDKWrQwL3GkT0_I_mPDpNp9" alt="Nach Horror-Sturz: Max Franz meldet sich aus Spital – “Es ist extrem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es war ein richtiger Schock: Nach einem schweren Sturz fällt das Kärntner Ski-Ass Max Franz für die gesamte Weltcupsaison aus. Nun meldet sich der Sportler&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vienna.at/max-franz-muss-nach-unfall-schock-erneut-operiert-werden/7753720'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Max Franz muss nach Unfall-Schock erneut operiert werden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRh74iFT-XSD5Q8Gqwp9v9uMNA9Ouwc-RvfAh9aU0FpfpasdW5LdmS8D_e_YBDcLPVMHt7NcTw" alt="Max Franz muss nach Unfall-Schock erneut operiert werden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zurück in Österreich erwartet ÖSV-Star Max Franz nach seiner Horror-Verletzung die nächste Operation, das teilte der Österreichische Skiverband am Freitag&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spox.com/at/sport/mehrsport/wintersport/2211/Artikel/max-franz-nach-horrorsturz-zurueck-in-oesterreich-wird-ein-langer-weg-zurueck.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Max Franz nach Horrorsturz wieder in Österreich: &quot;Wird ein langer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBn4tthlD62NbMw5ZmxqFECXt0_g61PR9sPfEQ29aTDGiuPk44o3xstmggeCNL_IEuuM7WQv6L" alt="Max Franz nach Horrorsturz wieder in Österreich: &quot;Wird ein langer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach seinem Sturz am vergangenen Sonntag beim Abfahrtstraining in Copper Mountain (USA) konnte Max Franz am Freitag mit einem Air Ambulance Jet von Vail&nbsp;...</p></div>
            </div>
        </a><a href='https://skiweltcup.tv/index.php/nach-schweren-sturz-in-copper-mountain-max-franz-ist-wieder-zurueck-in-oesterreich/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach schweren Sturz in Copper Mountain – Max Franz ist wieder ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6QiadLPYI7_JoWQMPOaJ5_j9VY5IimMG-bZZK7CQFfzp5_cIy_AsvorRHWpZPtAizg-MIMSz6" alt="Nach schweren Sturz in Copper Mountain – Max Franz ist wieder ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach seinem Sturz am vergangenen Sonntag beim Abfahrtstraining in Copper Mountain (USA) konnte Max Franz am Freitag mit einem Air Ambulance Jet von Vail&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}