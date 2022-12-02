import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Simply Red</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Simply Red"/>
        <meta name="description" content="Trending News about Simply Red" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Simply Red</h1>
            <Image width={800} height={500} src="https://www.tz.de/bilder/2022/12/01/91950310/30303497-mick-hucknall-von-simply-red-30nMNnAc6xfe.jpg" alt="Simply Red"/>
            <h3>Recent News</h3>
            <a href='https://www.tz.de/muenchen/kultur/ohne-filter-ohne-firlefanz-simply-red-grosse-klasse-in-der-ausverkauften-olympiahalle-91950310.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohne Filter, ohne Firlefanz: Simply Red große Klasse in der ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSzpXmP5blGFiMDY9V6anhpquE6vD8V4T3N0RzSWo8XHvKCrh_pdm9asuC6O-3d9JMhWDGsLd5P" alt="Ohne Filter, ohne Firlefanz: Simply Red große Klasse in der ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mick Hucknall alias Simply Red hat am Mittwochabend mit seiner Band ein wundervolles Konzert in der ausverkauften Olympiahalle gespielt.</p></div>
            </div>
        </a>
        </Template></>;
}