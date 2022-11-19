import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Makhadzi new album</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Makhadzi new album"/>
        <meta name="description" content="Trending News about Makhadzi new album" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Makhadzi new album</h1>
            <Image width={800} height={500} src="https://netstorage-briefly.akamaized.net/images/8ef5285ff3948cdc.jpg" alt="Makhadzi new album"/>
            <h3>Recent News</h3>
            <a href='https://briefly.co.za/entertainment/music/146305-makhadzi-releases-album-mzansi-t-enough/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Makhadzi Releases New Album &#39;African Queen 2.0&#39; and Gets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwc0_OD6h4toUo5We_UTr-h_qZ6sisaURplhIxbCpvDFsZoi_l4Vv3SHy87vR1codVD5qzybOs" alt="Makhadzi Releases New Album &#39;African Queen 2.0&#39; and Gets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Makhadzi released her new album &#39;African Queen 2.0&#39; and got raving reviews from Mzansi. Her happy fans said the album is perfect for the coming festive&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}