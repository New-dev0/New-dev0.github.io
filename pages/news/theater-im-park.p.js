import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Theater im Park</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Theater im Park"/>
        <meta name="description" content="Trending News about Theater im Park" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Theater im Park</h1>
            <Image width={800} height={500} src="" alt="Theater im Park"/>
            <h3>Recent News</h3>
            <a href='https://www.oeticket.com/magazine/news-stories/das-theater-im-park-geht-in-die-vierte-runde'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das Theater im Park geht in die vierte Runde</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1w7IDZHQIUa_8rX7I4DsO-sXo_qem3sN28F4XKe8E718Wnz2uobrg66NFWAqZWuhHNA5k6sJE" alt="Das Theater im Park geht in die vierte Runde" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Programm für 2023 steht bereits fest. Am Spielplan stehen wieder Größen aus Kabarett, Comedy, Musik und Kultur.</p></div>
            </div>
        </a>
        </Template></>;
}