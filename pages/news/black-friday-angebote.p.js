import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Black Friday Angebote</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Black Friday Angebote"/>
        <meta name="description" content="Trending News about Black Friday Angebote" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Black Friday Angebote</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal0x0-0x0/5/0/6/6219014/Crazy-hipster-guy-emotions-Collage-in-magazine-style-with-happy-emotions-Discount-sale-season-sales-Winner_166919806413264.jpg" alt="Black Friday Angebote"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/advertorials/6219014/Black-Friday_Tolle-Black-Friday-Angebote-und-Rabatte'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tolle Black Friday Angebote und Rabatte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnBIiJJkkgG0ZsURtiPymCHx9JYX_DdCQ-i_-WXhPE-ATiD8tpHEbnieKVncEq5d67CDmCNWhx" alt="Tolle Black Friday Angebote und Rabatte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die größte Rabattaktion des Jahres fällt auch heuer auf den vierten Freitag im November. Im Jahr 2022 ist dies der 25.11. – soweit die Fakten – was genau&nbsp;...</p></div>
            </div>
        </a><a href='https://t3n.de/news/smartwatch-angebote-fitness-tracker-black-friday-2022-1515743/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die besten Smartwatch-Angebote am Black Friday &amp; Fitness-Tracker ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwWrHbAlR1eVxTafxQK8T7jIWsnHCzb7DB78TvQYsW9NYT48DUtbvBAKXcO_acfFldgCgpuq11" alt="Die besten Smartwatch-Angebote am Black Friday &amp; Fitness-Tracker ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Egal, ob Apple, Huawei, Garmin oder Fitbit: Wir zeigen euch, wo und wie ihr Smartwatches &amp; Fitness-Tracker zum Black Friday günstiger bekommt.</p></div>
            </div>
        </a><a href='https://www.pcgameshardware.de/Black-Friday-Sale-266963/News/Amazon-Black-Friday-beste-Angebote-Deals-Fernseher-SSD-Laptop-PS5-kaufen-guenstig-1408172/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Black Friday günstiger denn je: Diese Angebote sollte man ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQywFprnrAxw2KLM9IWqtx5Ywp_u_d7d2X_lbhJC6_JmC7MLASw1GMDRaqNxDfvt_m3C7xy-cGj" alt="Amazon Black Friday günstiger denn je: Diese Angebote sollte man ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diese Angebote am Amazon Black Friday gab es nie günstiger: Gaming-Monitor, Fernseher, RAM, SSD, Tastatur, Controller, Headset, Laptop uvm.</p></div>
            </div>
        </a><a href='https://www.gamepro.de/artikel/preisvergleich-die-besten-angebote-am-black-friday,3387260.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wer gewinnt den Preisvergleich? Das sind die wirklich besten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSrBWqrwO_lBmgYygNaoQT7o8EmHggJY-PKalOrpAYxxJ443tppzKtXhrReQspFj3vhI2kMDCmq" alt="Wer gewinnt den Preisvergleich? Das sind die wirklich besten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fast alle großen Shops haben Black Friday Angebote: Amazon, MediaMarkt, Saturn, Otto und viele mehr. Aber wo gibt es die wirklich besten Preise? Wir...</p></div>
            </div>
        </a><a href='https://www.eltern.de/familie-urlaub/black-friday-angebote-am-abend--die-letzten-deals-des-tages-13433482.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Angebote am Abend: Die letzten Deals des Tages</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSh_TVsd7mMNPEVX8EYHTbm_2j8Ijk_yTt0ulmYT6JyDQu-FEpHZdTfvO_-JLH-w5Z7_jW7Olh8" alt="Black Friday Angebote am Abend: Die letzten Deals des Tages" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heute findet mit dem Black Friday das größte Shopping-Event des Jahres statt. Lego, Playmobil, Ravensburger und Co. warten mit großen Rabatten auf.</p></div>
            </div>
        </a><a href='https://www.gamepro.de/artikel/speicherkarten-angebot-guenstig-microsd-switch-black-friday-kaufen,3387265.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Speicherkarten im Angebot: Jetzt günstige MicroSD für Switch im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRLTjJjP3zYCqyghuz0YIuWg1urOWsNc-yjd82mdJ9sT4ihhTRCgYxCZrVz4SI0IWKRB1DfEFq" alt="Speicherkarten im Angebot: Jetzt günstige MicroSD für Switch im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In den Black Friday Sales bei MediaMarkt, Amazon und Otto gibt es jetzt günstige MicroSD-Speicherkarten bis 512 GB, die gut für Nintendo Switch...</p></div>
            </div>
        </a><a href='https://hifi.de/angebot/5-mega-black-friday-angebote-direkt-bei-jbl-123801'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 Mega Black Friday-Angebote direkt bei JBL</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRDJu2haH9pDELWG_YmYFnGSiN7QDHS1Ff7qZeR11B9RmNoqy4RKu8wf-yLQ4LDeCMdyHffzd6" alt="5 Mega Black Friday-Angebote direkt bei JBL" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aktuelle Version der JBL Flip Essential &middot; So günstig war der Bluetooth-Lautsprecher noch nie &middot; 10 Stunden Akkulaufzeit.</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/lego-am-black-friday-das-sind-die-top-angebote-5018202.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lego am Black Friday: Das sind die Top-Angebote</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNwKe24WKeMDE0ijU6PtRlvcYA5YHe2mWuPCo_aWKpR5tiLDaKFEi7ieeY9bszhR-StxEjtriF" alt="Lego am Black Friday: Das sind die Top-Angebote" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dass Lego nicht nur was für Kinder ist, ist vielen bereits bekannt: Kleine und große Fans können in die Lego-Welt abtauchen.</p></div>
            </div>
        </a><a href='https://www.mactechnews.de/news/article/Black-Friday-Die-besten-Angebote-rund-um-iPhone-iPad-und-Mac-181491.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday: Die besten Angebote rund um iPhone, iPad und Mac</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjjPBIcTfd28QyhoIyGcp5YxqzHvJpEHNbqBTVaT_3FbNxSdacn3V9ZigeK0IkykOdJHizXkBR" alt="Black Friday: Die besten Angebote rund um iPhone, iPad und Mac" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Apple Watch Series 7 (45 Millimeter, GPS) kostet aktuell lediglich 419,00 Euro und somit 9 Prozent weniger als sonst. Die Apple Watch SE (1. Generation, 44&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pcgameshardware.de/Black-Friday-Sale-266963/News/Amazon-Black-Friday-beste-Deals-Angebote-1408118/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Black Friday: Diese 35 Top-Deals nicht verpassen - größte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbDPv2OuJgjJmJicZvrPyD1PR_QguBtPWNrlmUkm0bEL2ZbdRnY5yht_ZmcrF4vIe6FKDqTNEt" alt="Amazon Black Friday: Diese 35 Top-Deals nicht verpassen - größte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doch laufen heute um Mitternacht viele Angebote aus, sodass man nur noch bis 25.11., 23:59 die größte Angebotsvielfalt bei Amazon genießen kann. Um unsere Leser&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}