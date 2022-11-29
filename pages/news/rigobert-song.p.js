import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rigobert Song</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rigobert Song"/>
        <meta name="description" content="Trending News about Rigobert Song" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rigobert Song</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/8d8e09f8-cb33-4100-a0cd-bf2d1feb5486/1200x630" alt="Rigobert Song"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-rigobert-song-kameruns-nationaltrainer-ist-ein-wunder'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: „Ich bin ein Wunder“ - Die Wahnsinns-Geschichte um ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSR0_n5yJ7KPoFRea34VK_xayF4dKzg7lm379XzNgJ557tmyNWDmj8FOGBdQepvBB27wE9Kcs8" alt="WM 2022: „Ich bin ein Wunder“ - Die Wahnsinns-Geschichte um ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rigobert Song will bei der Weltmeisterschaft in Katar mit Kamerun viel erreichen. Dass er überhaupt an der Seitenlinie stehen kann, ist ein Wunder.</p></div>
            </div>
        </a>
        </Template></>;
}