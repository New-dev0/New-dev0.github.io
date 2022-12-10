import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cinema Batalha</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cinema Batalha"/>
        <meta name="description" content="Trending News about Cinema Batalha" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cinema Batalha</h1>
            <Image width={800} height={500} src="https://cdn-images.rtp.pt/icm/images/4f/4fb2fd7b01040198cb6970a95cd4f532_N.jpg?" alt="Cinema Batalha"/>
            <h3>Recent News</h3>
            <a href='https://www.rtp.pt/noticias/cultura/cinema-batalha-reabre-ao-publico_v1452506'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cinema Batalha reabre ao público</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFa7wAwVxq0Mh4gB4U6dgZ5_3uM-6H72FRoniov95xXRCx6oDFrduFukGiJpVUDpT2KdOzoYO4" alt="Cinema Batalha reabre ao público" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois das obras de remodelação, que começaram em novembro de 2019, o Cinema Batalha reabre esta sexta-feira ao público. O diretor artístico da sala de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}