import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Phil Foden</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Phil Foden"/>
        <meta name="description" content="Trending News about Phil Foden" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Phil Foden</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2869916/v653196/og_image.jpg" alt="Phil Foden"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2869917'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Schneckerl“ scherzt - Prohaska: „Phil Foden schaut aus wie ein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUjOyi9EhwFymr_-H-mbY7T08psmKPTrxYvC4t1YKJ425rHWSEy7b8_HiIfr0BT5DIm9N8EsRC" alt="„Schneckerl“ scherzt - Prohaska: „Phil Foden schaut aus wie ein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wenn es um fesche Frisuren bei Profi-Fußballern geht, kennt sich wohl kaum jemand besser aus als Herbert „Schneckerl“ Prohaska. Nach dem WM-Hit ...</p></div>
            </div>
        </a>
        </Template></>;
}