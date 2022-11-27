import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Beatrice Egli</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Beatrice Egli"/>
        <meta name="description" content="Trending News about Beatrice Egli" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Beatrice Egli</h1>
            <Image width={800} height={500} src="https://p6.focus.de/img/kultur/kino_tv/id_180407813/das-war-oberpeinlich-beatrice-egli-gesteht-in-swr-show-ihren-schlimmsten-buehnenmoment.png?im=Crop%3D%2872%2C0%2C1308%2C654%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=667da9e040758e124022cfc31e0dbe73478bbccffcd4e78e99773fc84ee6b7b8" alt="Beatrice Egli"/>
            <h3>Recent News</h3>
            <a href='https://www.focus.de/kultur/kino_tv/beatrice-egli-gesteht-in-swr-show-schlimmsten-buehnenmoment_id_180407817.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Oberpeinlich“: Beatrice Egli gesteht in SWR-Show schlimmsten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeM-MRWXhhfpITfZmoKByyZv6FyWuifgsTMliITHSHBGcc4M2EjW1roqjPREMKllyNZ2HKXDqp" alt="„Oberpeinlich“: Beatrice Egli gesteht in SWR-Show schlimmsten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einst trafen sie als Kandidatin und Jurorin bei DSDS aufeinander. Nun standen Beatrice Egli und Andrea Berg Seite an Seite auf der Bühne der „Beatrice Egli&nbsp;...</p></div>
            </div>
        </a><a href='https://www.schlager.de/news/2022/11/26/beatrice-egli-andrea-berg-zusammen-sind-sie-frei/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beatrice Egli &amp; Andrea Berg: Zusammen sind sie frei - Schlager.de</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS11SDhF5lmzO6TDzRaDAaI7Sj2vYwvm2IoCvhJeclPYQpO5fHuMcgyRm41GR4QT-d_I3bTK2c9" alt="Beatrice Egli &amp; Andrea Berg: Zusammen sind sie frei - Schlager.de" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beatrice Egli wurde 2013 Siegerin von „Deutschland sucht den Superstar“. Mit Hilfe der Fans – aber auch durch die Unterstützung von Andrea Berg.</p></div>
            </div>
        </a><a href='https://www.blick.ch/people-tv/schweiz/flirt-in-ihrer-tv-show-was-laeuft-zwischen-bastian-baker-und-beatrice-egli-id18089613.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Die Beatrice Egli Show: Bastian Baker flirtet mit Beatrice Egli</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ64CenFSXRXvCNsY_4CPGTvSHaC7Jlq1JhzaW6SyyTfYmRrFrjSfAl6vOKAvmiDBQK2O5TP2rU" alt="Die Beatrice Egli Show: Bastian Baker flirtet mit Beatrice Egli" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In ihrer Sendung begrüsste Beatrice Egli den Schweizer Musiker Bastian Baker. Im Gespräch konnten die beiden das Flirten vor laufender Kamera nicht lassen.</p></div>
            </div>
        </a><a href='https://www.derwesten.de/panorama/promi-tv/beatrice-egli-show-swr-liebe-id300199571.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beatrice Egli mit überraschendem Liebes-Outing in Show – „Ich war ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAQgw6Lubwy6GHlzA8tzaKdsa7Tc_he9M1Sqg29ZZ_fluvOEXSHAvV-Pvz-3k2UQ2F9yHZhaiy" alt="Beatrice Egli mit überraschendem Liebes-Outing in Show – „Ich war ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ihre Musik können Schlager-Fans im Schlaf mitsingen. Wir stellen einige der größten deutschen Schlager-Stars vor. Neben&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}