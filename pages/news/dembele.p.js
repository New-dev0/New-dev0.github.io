import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dembele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dembele"/>
        <meta name="description" content="Trending News about Dembele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dembele</h1>
            <Image width={800} height={500} src="https://img-s3.onedio.com/id-637e75c7710088ae1c152352/rev-0/raw/s-603ef097e3c80230734b60583268ac633eb7d57c.jpg" alt="Dembele"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/galatasaray-a-transfer-olacagi-konusulan-moussa-dembele-kimdir-kac-yasinda-nereli-hangi-takimlarda-oynadi-1109320'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galatasaray&#39;a Transfer Olacağı Konuşulan Moussa Dembele Kimdir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ24SKaNAm5ok93s45CqAOkI0SPwXT0hKXiwm6Z5CFXGGNPSVpXoLROyOzt5AA7Wzc0w6xFEWf6" alt="Galatasaray&#39;a Transfer Olacağı Konuşulan Moussa Dembele Kimdir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galatasaray&#39;a transfer olacağı iddia edilen yıldız futbolcu Moussa Dembele, son günlerde gündemden düşmeyen isimlerden biri. Dünyanın en iyi takımlarından&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}