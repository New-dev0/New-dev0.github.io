import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Flensburg</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Flensburg"/>
        <meta name="description" content="Trending News about Flensburg" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Flensburg</h1>
            <Image width={800} height={500} src="https://www.ndr.de/nachrichten/schleswig-holstein/nachrichtenkompakt132_v-contentxl.png" alt="Flensburg"/>
            <h3>Recent News</h3>
            <a href='https://www.ndr.de/nachrichten/schleswig-holstein/kurzmeldungen/Nachrichten-aus-Nordfriesland-Schleswig-Flensburg-Flensburg,studioflensburg486.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nachrichten aus Nordfriesland, Schleswig-Flensburg, Flensburg</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ27Ws_II7f7jjyAOJJ1oxgyrG9SFCJvmJbcOD3hMyIQw78FgwX5RI1bhf5lewWqOQj8YH9HTtz" alt="Nachrichten aus Nordfriesland, Schleswig-Flensburg, Flensburg" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Nachfrage nach Hotelzimmern und Ferienwohnungen über die Feiertage ist im Landesteil Schleswig bisher eher zurückhaltend.</p></div>
            </div>
        </a>
        </Template></>;
}