import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>CoD Warzone 2.0</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,CoD Warzone 2.0"/>
        <meta name="description" content="Trending News about CoD Warzone 2.0" /></Head><Template>
            <h1 style={{fontSize: "30"}}>CoD Warzone 2.0</h1>
            <Image width={800} height={500} src="https://images.mein-mmo.de/medien/2022/11/cod-warzone-2-release-trailer-titel.jpg" alt="CoD Warzone 2.0"/>
            <h3>Recent News</h3>
            <a href='https://mein-mmo.de/cod-warzone-2-social-menue-bug-loesung/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CoD Warzone 2: Social Menü Bug - So ladet ihr Freunde ein</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTuMVsbPI1irJXAUivcdl28FD1QwC3-ywE3EREbbruL9a3gCMWnURAhL5B-Y-VLiRVFe3sz3y0t" alt="CoD Warzone 2: Social Menü Bug - So ladet ihr Freunde ein" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kurz nach Release spinnt das Social-Menü von Call of Duty: Warzone 2 - aber es gibt eine Lösung, hier auf MeinMMO.</p></div>
            </div>
        </a>
        </Template></>;
}