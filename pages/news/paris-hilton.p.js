import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paris Hilton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paris Hilton"/>
        <meta name="description" content="Trending News about Paris Hilton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paris Hilton</h1>
            <Image width={800} height={500} src="https://imgrosetta.mynet.com.tr/file/16131706/16131706-700x400.png" alt="Paris Hilton"/>
            <h3>Recent News</h3>
            <a href='https://www.mynet.com/gercek-barbie-olarak-goruluyordu-41-yasindaki-paris-hilton-genclik-sirlarini-paylasti-1280894-mykadin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerçek Barbie olarak görülüyordu! 41 yaşındaki Paris Hilton gençlik ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUeawUPmv81-4udT8zTZl0jQJ--vEPLwsAaJSCPkkTIwICatQSLO6EEePapFvcUZTl_Yvr4BeH" alt="Gerçek Barbie olarak görülüyordu! 41 yaşındaki Paris Hilton gençlik ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2000&#39;li yıllarda oldukça popüler olan Paris Hilton ortalığı kasıp kavuruyordu. Tarzı ve özel hayatıyla tüm dünyada gündem olan Paris Hilton güzelliği,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}