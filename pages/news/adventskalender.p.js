import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Adventskalender</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Adventskalender"/>
        <meta name="description" content="Trending News about Adventskalender" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Adventskalender</h1>
            <Image width={800} height={500} src="https://images.cgames.de/images/gsgp/4/pokémon-adventskalender-teaser_6208061.jpg" alt="Adventskalender"/>
            <h3>Recent News</h3>
            <a href='https://www.gamepro.de/artikel/pokemon-schnell-adventskalender-2022-amazon-sichern,3387460.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pokémon: Jetzt noch schnell die Adventskalender 2022 bei Amazon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSU3TsDHNn7eud7Qc0MrmTSvdmzE2YoaHE6PzJxWc4AdEIsnfqrvpqZjfM6CAugMZXwV_yyHLEj" alt="Pokémon: Jetzt noch schnell die Adventskalender 2022 bei Amazon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es ist schon Dezember und ihr habt noch immer keinen Adventskalender? Kein Problem: Bei Amazon könnt ihr noch stilvolle Pokémon-Kalender kaufen. GamePro Deals</p></div>
            </div>
        </a><a href='https://www.netzwelt.de/news/196707-netzwelt-adventskalender-2022-gewinnt-ps5-xbox-series-x-andere-preise-0112.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netzwelt-Adventskalender: Gewinnt heute einen Saugroboter von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR6bhTj5NLqiYIPLzI-3CykITq9pc5zO8KmsDJBhotzcIksWtBKp7pLK6PEc44nfvmMoXQ7mccC" alt="Netzwelt-Adventskalender: Gewinnt heute einen Saugroboter von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hinter der ersten Tür im Netzwelt-Adventskalender versteckt sich eine saubere Sache - der Ecovacs Deebot T9 AIVI. Nehmt eure Chance wahr und mit etwas Glück&nbsp;...</p></div>
            </div>
        </a><a href='https://www.swr.de/swraktuell/baden-wuerttemberg/stuttgart/adventskalender-fuer-fitte-ueber-80-jaehrige-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adventskalender würdigt engagierte Senioren im Kreis Esslingen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShZeNdHbJIreC0Ih7mYPaaHyjDX34pIvK2DUU5H8BOjTWe7TeaartpmZP2VUmcTBR0EVSTlvQv" alt="Adventskalender würdigt engagierte Senioren im Kreis Esslingen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ein Adventskalender stellt jeden Tag Menschen vor, die sich auch im hohen Alter noch engagieren. Das Ziel: Vorurteile abbauen.</p></div>
            </div>
        </a>
        </Template></>;
}