import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christkindlmarkt</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christkindlmarkt"/>
        <meta name="description" content="Trending News about Christkindlmarkt" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christkindlmarkt</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2861335/v237980/og_image.jpg" alt="Christkindlmarkt"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2861297'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das ist heuer neu - Wiens Christkindlmarkt: Update und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHS22Yyicnlvm0hi0tD0xCarcHJVDLnVSHTqbPmYNEnb1m3-4eRde_3F3I8f6GkOi2_eeWFQiW" alt="Das ist heuer neu - Wiens Christkindlmarkt: Update und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein neues Konzept sorgte im Vorfeld für Aufregung: strukturierter, aufgeräumter - anders eben. Standler protestieren dagegen, auch am Samstag, dem ...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141010718/christkindlmarkt-und-fahrgeschaefte-am-wiener-rathausplatz-eroeffnet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christkindlmarkt und Fahrgeschäfte am Wiener Rathausplatz eröffnet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIyo4BPZrVC2tQ7XkTtpkvqeRPLUjTsMdbK22J9K5GPNYz8vL1mZIaMfUEQmlVJlCpd7RjfLn5" alt="Christkindlmarkt und Fahrgeschäfte am Wiener Rathausplatz eröffnet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor dem Wiener Rathaus ist diesen Advent vieles anders, nicht zur Freude aller. Neu ist zum Beispiel ein großes Ringelspiel. Ein Besuch an Tag eins.</p></div>
            </div>
        </a><a href='https://www.vienna.at/wiener-christkindlmarkt-am-rathausplatz-feierlich-eroeffnet/7754725'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wiener Christkindlmarkt am Rathausplatz feierlich eröffnet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShL_eJbWgsRRJNL8w3PPyU958Nee6yZ8gtZpZNoEBYsyzqrq7zj7UAktLK60IaR8FaLcOdeWXY" alt="Wiener Christkindlmarkt am Rathausplatz feierlich eröffnet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gemeinsam mit dem Landeshauptmann der Steiermark, Christopher Drexler, wurde die Illuminierung des Weihnachtsbaums vorgenommen. Nach Einbruch der Dunkelheit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/chronik/wien-chronik/2168425-Christkindlmarkt-am-Rathausplatz-eroeffnet.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christkindlmarkt am Rathausplatz eröffnet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREMEA8sNhveOo6st__S3ttwFlCIEmTWPDoVXAhJND4KyWMAGnj2SgcaWSYOoc874xGm_5_SC68" alt="Christkindlmarkt am Rathausplatz eröffnet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wiens Bürgermeister Ludwig und der steirische Landeshauptmann Drexler drückten den Knopf für die Beleuchtung.</p></div>
            </div>
        </a><a href='https://www.oe24.at/oesterreich/chronik/wien/christkindlmarkt-startet-durch/536434987'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christkindlmarkt startet durch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRTIJrO4sKZo-Oy83Uy9B107Ff9D16zOka40axNVuab7CEsn7t7FjInsYorvMX7ncd0wnMVWMNq" alt="Christkindlmarkt startet durch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bis 26. Dezember versprühen Eiszauber, Herzerlbaum &amp; Co. weihnachtliche Stimmung. Innere Stadt. Das Warten hat ein Ende: Der mehrfach zum schönsten Adventmarkt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/amstetten/c-regionauten-community/traditioneller-adventmarkt-feiert-jubilaeum_a5719228'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>40. Christkindlmarkt in St. Georgen am Ybbsfelde: Traditioneller ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSitBeQJPe9C8bvLGJ-j1jb1pmbyNPTFIFRodHOwKfD3eKTK83x6uDTa4EW2oHmVCvg9PtPHZBG" alt="40. Christkindlmarkt in St. Georgen am Ybbsfelde: Traditioneller ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bereits zum 40. Mal wird am 27. November der bekannte St. Georgner Christkindlmarkt abgehalten. Bei dieser Ausstellung präsentieren zahlreiche Hobbykünstler&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/chronik/wien/teurer-punsch-und-leiser-protest-am-rathausplatz/402227694'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Teurer Punsch und leiser Protest am Rathausplatz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_6dxMmdldiYMGUt1Yy-aB6WZRk1HOJbKLa34imEAPLJR075ntQlfEGW8FTn1_MfP9CBZ3l6Jc" alt="Teurer Punsch und leiser Protest am Rathausplatz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Samstag wurde der Christkindlmarkt eröffnet -erstmals mit Karussell. Die „ausgebooteten“ Standler protestierten.</p></div>
            </div>
        </a><a href='https://www.ots.at/presseaussendung/OTS_20221119_OTS0038/buergermeister-ludwig-illuminiert-wiener-weihnachtsbaum'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bürgermeister Ludwig illuminiert Wiener Weihnachtsbaum</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Bürgermeister Ludwig illuminiert Wiener Weihnachtsbaum" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Vorweihnachtszeit in Wien hat offiziell begonnen: Heute, Samstag, hat Bürgermeister Michael Ludwig gemeinsam mit dem Landeshauptmann der Steiermark,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}