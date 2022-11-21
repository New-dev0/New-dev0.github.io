import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spielplan WM 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spielplan WM 2022"/>
        <meta name="description" content="Trending News about Spielplan WM 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spielplan WM 2022</h1>
            <Image width={800} height={500} src="https://reshape.sport1.de/c/t/331dcee2-d424-4353-a867-73afb9b137fb/1200x630" alt="Spielplan WM 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-sport1-chefreporter-in-katar-von-polizei-festgehalten'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: SPORT1-Reporter in Katar von Polizei festgehalten</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5Jo2nJiyPkc3SKzwLlxt0ppQ5p9JRKzl0rlSaGUwQ6gyyCxPcxUxHZXc8gLx_qHeR5Algsw8_" alt="WM 2022: SPORT1-Reporter in Katar von Polizei festgehalten" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Rahmen einer Aufnahme am DFB-Mannschaftsquartier in Katar kommt es zu einem Zwischenfall mit der katarischen Polizei.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/11/wm-2022-das-ist-ailtons-wm-favorit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Das ist Ailtons WM-Favorit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwe8dGv7JMKNtejpcAcv17DfQ4QzrTd6ucuWQtiXDBNomCekg-x5mRqu4cYX2Cam7bnFaloDW5" alt="WM 2022: Das ist Ailtons WM-Favorit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Sonntag ist die Fußball-Weltmeisterschaft 2022 in Katar gestartet. Beim Turnier in Katar sind weltweit besonders viele Augen auf das Starensemble aus&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}