import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Diriyah Tennis Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Diriyah Tennis Cup"/>
        <meta name="description" content="Trending News about Diriyah Tennis Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Diriyah Tennis Cup</h1>
            <Image width={800} height={500} src="https://img.blick.ch/incoming/18124682-v1-17-aufmacher1-afp-32na9eg.jpg?imwidth=2000&ratio=16_9&x=620&y=1254&width=3236&height=1822" alt="Diriyah Tennis Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.blick.ch/sport/tennis/umstrittener-diriyah-tennis-cup-saudi-millionen-locken-stricker-und-wawrinka-id18125737.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tennis: Saudi-Millionen locken Dominic Stricker und Stan Wawrinka</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0LCWK-hoilbG1nr0RVUtEa7vH12N5x4GtSdFXv5RWDuc530-chcwLkUjVBtZ8XzUp6Qo3naNS" alt="Tennis: Saudi-Millionen locken Dominic Stricker und Stan Wawrinka" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dominic Stricker und Stan Wawrinka nehmen am Diriyah Tennis Cup teil. Punkte gibts am Schauturnier keine, dafür ein gutes Preisgeld.</p></div>
            </div>
        </a>
        </Template></>;
}