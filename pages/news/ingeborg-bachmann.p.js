import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ingeborg Bachmann</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ingeborg Bachmann"/>
        <meta name="description" content="Trending News about Ingeborg Bachmann" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ingeborg Bachmann</h1>
            <Image width={800} height={500} src="https://media.diepresse.com/social_diepresse_magazin_paid/images/uploads_1200/e/d/c/6217436/A444ED4D-DAD8-4541-947B-3A9196B0E640_v0_l.jpg" alt="Ingeborg Bachmann"/>
            <h3>Recent News</h3>
            <a href='https://www.diepresse.com/6217436/max-frisch-mein-du-namens-ingeborg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Max Frisch: „Mein Du namens Ingeborg“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6UcgVFfaGcEbRyG5AzEe_j4tuBis7hS0IBlGcuhiVc6LrGK5idZzYUMgDpe3kj_6WrYrzaqVr" alt="Max Frisch: „Mein Du namens Ingeborg“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jahrzehnte lang wurde er unter Verschluss gehalten: Der Briefwechsel zwischen Ingeborg Bachmann und Max Frisch, die viereinhalb Jahre ein Paar waren.</p></div>
            </div>
        </a><a href='https://rp-online.de/kultur/endlich-publiziert-die-briefe-zwischen-bachmann-und-frisch_aid-80273631'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Endlich publiziert: die Briefe zwischen Bachmann und Frisch​</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdsgfUrghc6S0GTtpHN-422D2St0griAkCzkFCOUAPvck6HgLAEGx_dxzdqVliv3nM6hr13jMD" alt="Endlich publiziert: die Briefe zwischen Bachmann und Frisch​" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Endlich freigegeben und publiziert: der Briefwechsel zwischen Ingeborg Bachmann und Max Frisch. Zeugnis einer tragischen Jahrhundertliebe.</p></div>
            </div>
        </a><a href='https://www.rnd.de/kultur/briefwechsel-ingeborg-bachmann-und-max-frisch-ich-liebe-dich-und-ich-liebe-dich-jetzt-verzweifelt-TJJQ466VYJE3LISKAT5JNTQXBE.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Briefwechsel Ingeborg Bachmann und Max Frisch: „Ich liebe Dich ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRa9OEXJpy-pBdb4tppGJ2udCeRU8yAhwn3nIXZR010OElWjt0x3annVUqlX0_aqrR_-HbyvZVx" alt="Briefwechsel Ingeborg Bachmann und Max Frisch: „Ich liebe Dich ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Knapp 65 Jahre nach ihrem Beginn wird am Montag die Korrespondenz des Liebes- und Autorenpaares Ingeborg Bachmann und Max Frisch veröffentlicht.</p></div>
            </div>
        </a><a href='https://www.badische-zeitung.de/eine-widerspruechliche-liebe-ingeborg-bachmann-und-max-frisch--225754379.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eine widersprüchliche Liebe: Ingeborg Bachmann und Max Frisch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoLPreMxSBkNaZH_IPXqyfkV0KBY3ig5qxTAjlKJgzOtgKeemqtR0SUpZmxIriKqZNpt2JSBM1" alt="Eine widersprüchliche Liebe: Ingeborg Bachmann und Max Frisch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine schmerzhafte Sensation: Der Briefwechsel zwischen dem Schweizer Autor Max Frisch und der Kärntner Dichterin Ingeborg Bachmann ist jetzt im&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nau.ch/lifestyle/gesellschaft/briefwachsel-zwischen-ingeborg-bachmann-und-max-frisch-publiziert-66344410'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Briefwachsel zwischen Ingeborg Bachmann und Max Frisch publiziert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkUdswbGnDb6KYSh4vAzade5phgZu88B-Rt1l4_kB5Qfm_Pj5MS7QO-qfRMvy7pSBKwcuWVoTU" alt="Briefwachsel zwischen Ingeborg Bachmann und Max Frisch publiziert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Wien eröffnet eine Ausstellung zu Ehren von Ingeborg Bachmann und ihr Briefwechsel mit Max Frisch wird publiziert.</p></div>
            </div>
        </a><a href='https://wien.orf.at/stories/3183029/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kultur: Hommage an Bachmann im Literaturmuseum</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQs3t-yNUzsSzbZmoC1AlrOoMwpla2iF6QtEYRcax-AgiGNkZ_1sbPa2tMN4jxNimE8W8qo5lOx" alt="Kultur: Hommage an Bachmann im Literaturmuseum" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Literaturmuseum der Nationalbibliothek in Wien würdigt in einer aktuellen Schau die Dichterin Ingeborg Bachmann. Viele Fotos und Dokumente aus dem&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}