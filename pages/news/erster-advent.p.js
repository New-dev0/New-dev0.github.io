import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Erster Advent</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Erster Advent"/>
        <meta name="description" content="Trending News about Erster Advent" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Erster Advent</h1>
            <Image width={800} height={500} src="https://www.rbb24.de/content/dam/rbb/rbb/rbb24/2022/2022_11/rbb-reporter/IMG_0076.jpg.jpg/size=708x398.jpg" alt="Erster Advent"/>
            <h3>Recent News</h3>
            <a href='https://www.rbb24.de/sport/beitrag/2022/11/fussball-wm-weltmeisterschaft-katar-doha-tagebuch-advent.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erster Advent in Katars Venedig</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBgwX1Durgr2yQlixz9D4H3dGrJFLjw601XPhw5SbSSR9P8OpobntmEoLuJsToCU9Q4Jy6yhk4" alt="Erster Advent in Katars Venedig" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der erste Advent im glühenden Doha. rbb-Sportreporterin Tabea Kunze zieht es in die Kälte und berichtet im rbb|24-WM-Tagebuch vom sonntäglichen Leben in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}