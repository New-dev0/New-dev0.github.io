import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gerhard Rodax</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gerhard Rodax"/>
        <meta name="description" content="Trending News about Gerhard Rodax" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gerhard Rodax</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal247x43-1065x1231/b/7/5/6216565/FUSSBALL---WM-Qualifikation-DDR-vs-AUT_1668679740155842.jpg" alt="Gerhard Rodax"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/sport/6216565/Tragischer-Unfall_Ehemaliger-OeFBTeamstuermer-Gerhard-Rodax-verstorben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ehemaliger ÖFB-Teamstürmer Gerhard Rodax verstorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpap_XB6jkboIwGmk2knGlnZqRKjpR4dK-55Lzaitsxe7ui4L-h9pKEsW1jEIaV7yphM9S96x0" alt="Ehemaliger ÖFB-Teamstürmer Gerhard Rodax verstorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der ehemalige ÖFB-Teamstürmer Gerhard Rodax ist tot. Der 57-Jährige verstarb in der Nähe von Traiskirchen bei einem tragischen Unfall. Rodax spielte 20-mal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/2022/11/osterreichische-fussball-legende-gerhard-rodax-gestorben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Österreichische Fußball-Legende Gerhard Rodax gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmDgiyjWyQ90ZH84iPf-ur-vkX-bp9nz_0JCTSNxx05AUeQsw2-Isz3p0eyEQ3FrzQADzTC0Yj" alt="Österreichische Fußball-Legende Gerhard Rodax gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Österreich trauert um den ehemaligen ÖFB-Nationalspieler Gerhard Rodax, der auf tragische Weise ums Leben gekommen ist.</p></div>
            </div>
        </a><a href='https://www.krone.at/2859271'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Großartiger Mensch“ - Tod auf Gleisen: Trauer um Gerhard Rodax ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxzG9EmWYVVRf6PYsw5zh2L-r8Tfo3Sr2S93Q4rBctB_3WTsjmCCVV2poIeT24Whz_fEqEIDtp" alt="„Großartiger Mensch“ - Tod auf Gleisen: Trauer um Gerhard Rodax ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trauer wenige Tage vor Beginn der Fußball-WM in der heimischen Sportwelt: Ex-Nationalspieler Gerhard Rodax wurde auf der Südbahnstrecke von einem Zug ...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6216590/ex-teamspieler-gerhard-rodax-verstorben'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Teamspieler Gerhard Rodax verstorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT12BvYxAc8-dpojZwEF72-IHhIx9QMfKowPnG4pJRCyHy25MjVrm0RKxAatS7AY6j9HaQlxHOB" alt="Ex-Teamspieler Gerhard Rodax verstorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Ex-Profi von Admira und Rapid sowie 20-fache Nationalspieler starb im Alter von 57 Jahren.</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/ex-nationalstuermer-gerhard-rodax-verstorben-524467'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Nationalstürmer Gerhard Rodax verstorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ex-Nationalstürmer Gerhard Rodax verstorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gerhard Rodax ist tot! Der ehemalige ÖFB-Teamstürmer ist bei einem tragischen Unfall nahe Traiskirchen ums Leben gekommen. Wie die &quot;Krone&quot; berichtet,&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.orf.at/stories/3103064/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chronik: Ex-ÖFB-Teamspieler Rodax gestorben</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrZU_RMQ7-kTlzP7BoqrPCAye7iMYmyjcG2ywlcXxKaQX47tpzh82GLKiIb_INR88MwXEuhqW_" alt="Chronik: Ex-ÖFB-Teamspieler Rodax gestorben" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der ehemalige Teamspieler, der für Admira Wacker, Atletico Madrid und Rapid Wien stürmte, ist nach schwerer Krankheit bei einem Unfall nahe Traiskirchen ums&nbsp;...</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/ex-oefb-stuermer-gerhard-rodax-toedlich-verunglueckt/281382'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-ÖFB-Stürmer Gerhard Rodax tödlich verunglückt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrMepIfErSdhVH-MvsLu1H_DRgEGPc5vPb9yrR2pvoELjQM7vOzWUmchg0hKHlgZQjXbTOmHZY" alt="Ex-ÖFB-Stürmer Gerhard Rodax tödlich verunglückt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gerhard Rodax war in den 80er- und 90-er Jahren eine Große des österreichischen Fußballs. Er spielte bei Admira Wacker, Atlético Madrid und Rapid Wien.</p></div>
            </div>
        </a>
        </Template></>;
}