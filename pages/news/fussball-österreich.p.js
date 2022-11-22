import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fussball Österreich</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fussball Österreich"/>
        <meta name="description" content="Trending News about Fussball Österreich" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fussball Österreich</h1>
            <Image width={800} height={500} src="https://www.sueddeutsche.de/image/sz.1.5700161/1200x675?v=1669038125" alt="Fussball Österreich"/>
            <h3>Recent News</h3>
            <a href='https://www.sueddeutsche.de/sport/fussball-oesterreich-italien-1.5700160'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Freundschaftsspiel Österreich - Italien: Kurioser Kontrast</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS0skC4p09aZMMFGYJvRpJKQF7x2nPdLiadF5cNwzzc7SAb2qW53MoqYZ4Hcah-nJJeKMhIYupD" alt="Freundschaftsspiel Österreich - Italien: Kurioser Kontrast" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nachdem Katar und Ecuador die WM eröffnet haben, treffen sich in Wien Österreich und Italien zum Freundschaftsspiel. Atmosphärisch funktioniert die&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}