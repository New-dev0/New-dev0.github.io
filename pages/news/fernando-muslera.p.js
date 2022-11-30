import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fernando Muslera</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fernando Muslera"/>
        <meta name="description" content="Trending News about Fernando Muslera" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fernando Muslera</h1>
            <Image width={800} height={500} src="https://www.webaslan.com/img/2022/11/29/fernando-muslera-tepkisi-nasil-oynatmazsin-wa-8191-800.jpg" alt="Fernando Muslera"/>
            <h3>Recent News</h3>
            <a href='https://www.webaslan.com/futbol/fernando-muslera-tepkisi-nasil-oynatmazsinSXGLQ14585SXQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖMER ÜRÜNDÜL&#39;ÜN DEĞERLENDİRMESİ - Web Aslan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAqoT3dD4eNckdBf4qK0sb0lXNb4lgMtrXnOYbLbwO5M5w8Q2l15umaq1A5SvDG2QF7gYe9VnI" alt="ÖMER ÜRÜNDÜL&#39;ÜN DEĞERLENDİRMESİ - Web Aslan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sabah Spor yazarı Ömer Üründül, 2022 Dünya Kupası ile ilgili değerlendirmelerde bulundu. Üründül, Fernando Muslera&#39;nın Uruguay&#39;da yedek kalmasını da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}