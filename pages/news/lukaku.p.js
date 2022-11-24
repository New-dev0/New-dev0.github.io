import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lukaku</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lukaku"/>
        <meta name="description" content="Trending News about Lukaku" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lukaku</h1>
            <Image width={800} height={500} src="" alt="Lukaku"/>
            <h3>Recent News</h3>
            <a href='https://www.grenzecho.net/82511/artikel/2022-11-23/wer-sturmt-heute-abend-fur-lukaku'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 - Gruppe C : Wer stürmt heute Abend für Lukaku?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyoGpWMFRUKeReBCWaE3rKgT9f8cjkQQeYP_Ea6nVUHlCLsTODzfuh3Rdmc07cO3camKrnNxY2" alt="WM 2022 - Gruppe C : Wer stürmt heute Abend für Lukaku?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Romelu Lukaku verfolgt den WM-Auftakt der Roten Teufel gegen Kanada heute Abend von der Tribüne aus. Frühestens zum dritten Spiel gegen Kroatien wird er&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}