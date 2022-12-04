import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dietrich Mateschitz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dietrich Mateschitz"/>
        <meta name="description" content="Trending News about Dietrich Mateschitz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dietrich Mateschitz</h1>
            <Image width={800} height={500} src="https://ibs.orf.at/sbg?image=https%3A%2F%2Foekastatic.orf.at%2Fmims%2F2022%2F49%2F33%2Fcrops%2Fw%3D1200%2Ch%3D627%2Cq%3D75%2F1595775_master_584433_erb7.jpg%3Fs%3Dba38acfa659c14d194cea35bd6bd62d49fb0f788" alt="Dietrich Mateschitz"/>
            <h3>Recent News</h3>
            <a href='https://salzburg.orf.at/stories/3184876/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chronik: Umstrittener Erbhof-Verkauf an Mateschitz KG</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQx_y8X5ydS0ki8i7C6CHQSBqarbUGmXS-KjslYXQvMzmT-H-cT1Gp8OZZSdMLaFcqsLwcF1Zyh" alt="Chronik: Umstrittener Erbhof-Verkauf an Mateschitz KG" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach dem Tod eines Bauern soll in Lessach (Lungau) ein mehrere hundert Jahre alter Bauernhof mit Wiesen, einem Wald und einem dazugehörigen Bio-Schlachthof&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}