import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sebastian Vettel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sebastian Vettel"/>
        <meta name="description" content="Trending News about Sebastian Vettel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sebastian Vettel</h1>
            <Image width={800} height={500} src="https://images.motorsport-magazin.com/images/1200/570/q_80/s_fb/457510.jpg" alt="Sebastian Vettel"/>
            <h3>Recent News</h3>
            <a href='https://www.motorsport-magazin.com/formel1/news-280533-sebastian-vettel-vom-beruf-zur-berufung/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Vettel: Vom Beruf zur Berufung</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUESWgV66jjaEiU5omuV3JYLMvrtHMZzucLR6JCVZ35tLdfqA8UOi8Sxuc-2m_GI6adkZTgBd1" alt="Sebastian Vettel: Vom Beruf zur Berufung" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sebastian Vettel wird die Formel 1 am Ende der Saison verlassen. Es ist ein außergewöhnlicher Rücktritt eines außergewöhnlichen Sportlers.</p></div>
            </div>
        </a><a href='https://www.watson.de/sport/formel%201/847631012-formel-1-sebastian-vettel-ueberrascht-vor-abschied-mit-schumacher-botschaft'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Sebastian Vettel überrascht vor Abschied mit Schumacher ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT61o7eWLZMhz4J2B-JdWY5P6c69-huwV0KwDi6CrA7_QK2mnIyfAuvN8gpllc4jHT1Cuw82peo" alt="Formel 1: Sebastian Vettel überrascht vor Abschied mit Schumacher ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sebastian Vettel fährt am Sonntag sein letztes Formel-1-Rennen. Zum Abschied gibt er seinen Fans einen emotionalen Einblick in die Beziehung zu seinem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport-total.com/formel-1/news/sebastian-vettels-formel-1-abschied-fuehlt-sich-schon-etwas-anders-an-22111724'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Vettels Formel-1-Abschied: &quot;Fühlt sich schon etwas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwDrm8BDCEhPhcBvsUQFiruqrFVSWlQEaZlBXPLkl1r_dTbi1EcpaMc1qiI11RAg5xvfi71xdc" alt="Sebastian Vettels Formel-1-Abschied: &quot;Fühlt sich schon etwas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Formel-1-Fahrer Sebastian Vettel vor seinem letzten Grand Prix: Mit welcher Stimmung er an den Start geht, was seine Pläne sind und was er vermissen wird.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/formel1/2211/Artikel/sebastian-vettel-helm-letzter-f1-gp-abu-dhabi-auktion-lackierung-fotos.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Vettel: Helm bei letzten Formel-1-GP in Abu Dhabi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5TBwLvcrNJBzISyiIT0trrmGDmHf3DmXOrjq4YFXqeOQBhtW1D_gHXbA66n7wY_1tbYuwOaa7" alt="Sebastian Vettel: Helm bei letzten Formel-1-GP in Abu Dhabi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sebastian Vettel absolviert zum Abschluss der Formel 1 2022 in Abu Dhabi seinen letzten Grand Prix als Rennfahrer. Dabei trägt er einen speziellen Helm,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ran.de/motorsport/formel1/news/sebastian-vettel-karriere-ende-emotionen-162118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sebastian Vettel vor letztem Rennen emotional: &quot;Okay, aber anders ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2fhWFLIWPzA79JbW9Re_9N7Y9WzmXrE3EQQFsgubJk9Dg8ZjKizf6aG3nf9e1R_Ub-reLpq6Q" alt="Sebastian Vettel vor letztem Rennen emotional: &quot;Okay, aber anders ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor dem letzten Rennen seiner Karriere hat Sebastian Vettel Einblicke in seine Gefühlswelt gegeben. Außerdem erklärt er, wie es für ihn nach der Formel 1&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/motorsport/formel1/2022/11/vettel-vor-dem-letzten-rennen-okay-aber-anders-als-sonst'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lewis Hamilton stellt Sebastian Vettel pikante Frage</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ26b7chlvnnjRyNAS1bVcrv4IWNRbnJn3blgBRbLnM8nzo-o5p8WNjeaXm0yOBqtepDF7X1qz4" alt="Lewis Hamilton stellt Sebastian Vettel pikante Frage" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor dem letzten Rennen seiner Karriere fühlt sich Sebastian Vettel „okay, aber es fühlt sich schon ein bisschen anders an als sonst“. Lewis Hamilton stellt&nbsp;...</p></div>
            </div>
        </a><a href='https://sportbild.bild.de/motorsport/formel-1/motorsport/formel-1-zum-abschied-von-sebastian-vettel-kommen-besondere-gaeste-81978882.sport.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Zum Abschied von Sebastian Vettel kommen besondere ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQeYRpTU_Kt1zEloZL_zmRjAGpedgK1euBIbgNc7zy_3SRPARkdlvDv0IDNdooTBphAb7Oyg-oU" alt="Formel 1: Zum Abschied von Sebastian Vettel kommen besondere ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BILD-Serie zum Abschiedsrennen von Sebastian Vettel (35). Heute: Der Familienmensch. Künftig jagt er die Bestzeit auf dem Schulweg anstatt auf der&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}