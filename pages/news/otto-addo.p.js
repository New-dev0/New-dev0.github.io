import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Otto Addo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Otto Addo"/>
        <meta name="description" content="Trending News about Otto Addo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Otto Addo</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2872909/v519295/og_image.jpg" alt="Otto Addo"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2872902'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zukunft in Deutschland - Nach WM-Aus: Otto Addo hört als Ghana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyleWfRwxr8QoEiSkiXlkBDlqqE5oBTUCYQkk9Gh7deemzFR6ldlaymfsSVxYjekTwpg1lGbFQ" alt="Zukunft in Deutschland - Nach WM-Aus: Otto Addo hört als Ghana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ghana war als Zweiter der Gruppe H ins dritte Spiel gegangen, aber durch ein 0:2 gegen Uruguay ausgeschieden. Mit Genehmigung von Borussia Dortmund übernahm&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/bundesliga/2212/Artikel/bvb-news-geruechte-borussia-dortmund-offenbar-an-ksc-profi-tim-breithaupt-interessiert.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BVB, News und Gerüchte: Karlsruhes Tim Breithaupt wohl ein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRT25EzixWzsOAKe-vk5qKVOF4PnYfaWhUrD7WxzgR5HkVEYa0vTwoDuwvplyGocDHmDtPduCLn" alt="BVB, News und Gerüchte: Karlsruhes Tim Breithaupt wohl ein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tim Breithaupt vom Zweitligisten Karlsruher SC steht angeblich auf der Wunschliste des BVB. Doch es gibt namhafte Konkurrenz. Außerdem: Otto Addo beendet&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/12/wm-2022-otto-addo-bleibt-beim-bvb-und-hort-als-ghana-coach-auf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Otto Addo bleibt beim BVB und hört als Ghana-Coach auf</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRP3mVfSGlgyV-7wihM5ghSNt53HY558TbcRflY-XANvNb-x_8U-mPsn2Tu3jEYg_SeoERbYqJA" alt="WM 2022: Otto Addo bleibt beim BVB und hört als Ghana-Coach auf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach Ghanas WM-Aus beendet Otto Addo seine Tätigkeit als Nationaltrainer Ghanas. Es ist auch ein Bekenntnis für Borussia Dortmund und seine Familie.</p></div>
            </div>
        </a><a href='https://sport.orf.at/stories/3104258/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Otto Addo hört als Teamchef von Ghana auf</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnoqoFphy9xsQueUL7z5igPahUqIOYkUZ0XpWjuEoAWK-KlWpvSRhE3ckCdNQWUP4J6BvuZywV" alt="Otto Addo hört als Teamchef von Ghana auf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit Genehmigung des Clubs übernahm Addo Anfang des Jahres als Nationaltrainer Ghanas und führte das Team gegen Nigeria zur WM-Endrunde. Dadurch verlängerte sich&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/sport/fussball/otto-addo-tritt-als-nationaltrainer-von-ghana-zurueck-32972524.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Otto Addo tritt als Nationaltrainer von Ghana zurück</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKBPLlrtDBXdLcy5akMcZ9vtDjuzrepdkj5XMbAkzXPpTuQn5ra9hBtD-GK4GQOvTNDCboVvyp" alt="Otto Addo tritt als Nationaltrainer von Ghana zurück" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Otto Addo gibt seinen Posten als Trainer der ghanaischen Nationalmannschaft auf.</p></div>
            </div>
        </a><a href='https://bvbwld.de/2022/12/03/otto-addo-gibt-job-als-ghana-trainer-auf-und-bleibt-beim-bvb/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Otto Addo gibt Job als Ghana-Trainer auf – und bleibt beim BVB</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6TQXoEqFiuGjhqBK5VNvwmFG9i9jrKl_8w7sWbNV7DR6ubrBClMQQXmb0MNGVesvbYLgf8oku" alt="Otto Addo gibt Job als Ghana-Trainer auf – und bleibt beim BVB" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Noch am selben Tag des Ausscheidens von Ghana bei der WM 2022 erklärte deren Trainer Otto Addo seinen Rücktritt von diesem Job.</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/wm-scheitern-besiegelt-aus-offiziell-otto-addo-nicht-mehr-ghana-trainer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Otto Addo hört offiziell als Ghana-Trainer auf</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBO6_5_jNlOHWpPSQQVa-65__-y5BCeh4AMwA7oNmQJOCf793weRseCh9cjmtcJ4YRcPDdOtjf" alt="WM 2022: Otto Addo hört offiziell als Ghana-Trainer auf" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ghana benötigt nach dem frühen WM-Aus in der Vorrunde einen neuen Nationaltrainer. Otto Addo hat wie erwartet seinen Posten als Chefcoach aufgegeben.</p></div>
            </div>
        </a>
        </Template></>;
}