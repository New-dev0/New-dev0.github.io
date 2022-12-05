import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ireen Sheer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ireen Sheer"/>
        <meta name="description" content="Trending News about Ireen Sheer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ireen Sheer</h1>
            <Image width={800} height={500} src="https://images.t-online.de/2022/12/NhAIV1jMgMbt/375x148:2745x1544/fit-in/1800x0/ireen-sheer-die-musikerin-hatte-mehr-als-7500-auftritte.jpg" alt="Ireen Sheer"/>
            <h3>Recent News</h3>
            <a href='https://www.t-online.de/unterhaltung/musik/id_100091512/schlagerstar-ireen-sheer-verabschiedet-sich-von-der-buehne.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schlagerstar Ireen Sheer verabschiedet sich von der Bühne</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnrVD84hmu4FUsHvGGgACZyu0JiD7ntXcX-Ql4Z5jvvS-paZzqKZTne7KBu_QtzFlLmYgbc0Pj" alt="Schlagerstar Ireen Sheer verabschiedet sich von der Bühne" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im November 2021 kündige Ireen Sheer das Ende ihrer Karriere an. Ein Jahr später ist sie ein letztes Mal in der Show von Florian Silbereisen zu Gast.</p></div>
            </div>
        </a>
        </Template></>;
}