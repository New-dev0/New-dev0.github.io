import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gavi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gavi"/>
        <meta name="description" content="Trending News about Gavi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gavi</h1>
            <Image width={800} height={500} src="" alt="Gavi"/>
            <h3>Recent News</h3>
            <a href='https://www.ran.de/fussball/weltmeisterschaft/wm-news/gavi-spanien-fc-barcelona-schuhe-schnuersenkel-162932'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Gavi - und der Tick mit den offenen Schnürsenkeln</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaZtsViHycdVk3OjkKC5zodfMPMTEH_Z0kjnD8wwXzD_2iqfN4cjHxTFKVZQr50gFTMF9SmlYG" alt="WM 2022: Gavi - und der Tick mit den offenen Schnürsenkeln" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fußballer haben bisweilen sehr seltsame Angewohnheiten oder Ticks. Spaniens Supertalent Gavi gehört dazu - er bindet sich die Schnürsenkel nicht.</p></div>
            </div>
        </a>
        </Template></>;
}