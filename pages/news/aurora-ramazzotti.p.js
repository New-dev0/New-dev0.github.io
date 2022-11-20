import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aurora Ramazzotti</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aurora Ramazzotti"/>
        <meta name="description" content="Trending News about Aurora Ramazzotti" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aurora Ramazzotti</h1>
            <Image width={800} height={500} src="https://content1.promiflash.de/article-images/video_1080/michelle-hunziker-begruesst-die-fans.jpg" alt="Aurora Ramazzotti"/>
            <h3>Recent News</h3>
            <a href='https://www.promiflash.de/news/2022/11/19/michelle-hunziker-enthuellt-geburtstermin-von-auroras-baby.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michelle Hunziker enthüllt Geburtstermin von Auroras Baby!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSX9PxsmwTq-3arLlwXjJ8kmDnEYkQjWJSVvdYoamqZF_F6OPYCFybRSp5LX-4zPWTHl03IOE71" alt="Michelle Hunziker enthüllt Geburtstermin von Auroras Baby!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ausgeplaudert! Heute Abend lockt Wetten, dass..? erneut die Zuschauer vor die deutschen TV-Bildschirme. Thomas Gottschalk (72) und Michelle Hunziker (45)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}