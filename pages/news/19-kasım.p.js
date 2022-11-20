import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>19 Kasım</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,19 Kasım"/>
        <meta name="description" content="Trending News about 19 Kasım" /></Head><Template>
            <h1 style={{fontSize: "30"}}>19 Kasım</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/19/2004276/kapak_131340.jpg" alt="19 Kasım"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/yasam/19-kasim-hangi-burc-19-kasimda-hangi-unluler-dogdu-2004276'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>19 Kasım hangi burç? 19 Kasım&#39;da hangi ünlüler doğdu?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbiUsoF9hHlIBbeOuTvQLERXfSdOYKUDB3HDakqkArJsVhyivjSpsQP9D78az7S07dPkBAYm58" alt="19 Kasım hangi burç? 19 Kasım&#39;da hangi ünlüler doğdu?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 Kasım&#39;da doğan biri Akrep burcu oluyor. 19 KASIM&#39;DA HANGİ ÜNLÜLER DOĞDU? Bugün doğan Türk ünlüler şöyle: 1936 - Süleyman Turan. 1993 - Kerim Frei. Bugün&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}