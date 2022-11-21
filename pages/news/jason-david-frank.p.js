import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jason David Frank</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jason David Frank"/>
        <meta name="description" content="Trending News about Jason David Frank" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jason David Frank</h1>
            <Image width={800} height={500} src="https://ais-akamai.rtl.de/masters/1953190/1686x0/jason-david-frank.jpg" alt="Jason David Frank"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.de/cms/power-rangers-star-jason-david-frank-stirbt-mit-49-jahren-5017133.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Power Rangers&quot;-Star Jason David Frank stirbt mit 49 Jahren</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnNphGRfK7twTn-07RXEqZOPY5u7LtspPiYM_Wz9Om2qNHQyVc67EaPi0rDOu9uO4UnURqpXlM" alt="&quot;Power Rangers&quot;-Star Jason David Frank stirbt mit 49 Jahren" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jason David Frank ist im Alter von 49 Jahren gestorben. Das bestätigt der Sprecher des Schauspielers US-Medien.</p></div>
            </div>
        </a><a href='https://www.bild.de/unterhaltung/leute/leute/jason-david-frank-ist-tot-power-rangers-star-mit-49-jahren-gestorben-82006176.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jason David Frank ist tot: „Power Rangers“-Star mit 49 Jahren ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdnfDzLxiNHZpedEDtJKHXMSMyNJBRbQj9XEBgxDyTpfbLiTbMhGsiqe_CHlvud-KRI_EqNx3y" alt="Jason David Frank ist tot: „Power Rangers“-Star mit 49 Jahren ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In seinem Film-Kostüm wurde er für viele Kinder zum Helden. Der Schauspieler Jason David Frank ist tot!</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/11/20/mit-49-der-power-rangers-star-jason-david-frank-ist-tot.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mit 49: Der &quot;Power Rangers&quot;-Star Jason David Frank ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSW96CKYlB1fdzJ-YAcmG8hKS_AggFZA4xsK26CHweVTTxJkivd5EUkWCJLBKbJFCYheyrcs8c8" alt="Mit 49: Der &quot;Power Rangers&quot;-Star Jason David Frank ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jason David Frank hat sich im Laufe seiner Karriere einen großen Namen als Schauspieler gemacht: Der US-amerikanische Kampfsportler stand für zahlreiche&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/stars/id_100083522/-power-rangers-star-jason-david-frank-ist-tot.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Power Rangers&quot;-Star Jason David Frank ist tot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYusgqgQ7PiQE51tD-p8QapBYqpIArLeF5tV1pBFlY-Y9Y_E2ICKRZA_DnPan1obJxrseO_SMG" alt="&quot;Power Rangers&quot;-Star Jason David Frank ist tot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit seiner Rolle in dem Neunziger-Kult &quot;Power Rangers&quot; wurde er weltweit bekannt. Jetzt ist Jason David Frank im Alter von 49 Jahren gestorben.</p></div>
            </div>
        </a><a href='https://www.tag24.de/unterhaltung/promis/er-war-teil-der-power-rangers-schauspieler-jason-david-frank-gestorben-2669561'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Er war Teil der &quot;Power Rangers&quot;: Schauspieler Jason David Frank ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSb1gyTv89-7WfeuhW5JK6zn8JTbAC69tmG4FBpfBoOOW4zVY7cm_7-K4lsqxDGgv8P9yQ5rqRS" alt="Er war Teil der &quot;Power Rangers&quot;: Schauspieler Jason David Frank ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er war Schauspieler und Mixed Martial Artist - und einer der ursprünglichen Power Rangers. Nun ist Jason David Frank im Alter von nur 49 Jahren gestorben.</p></div>
            </div>
        </a>
        </Template></>;
}