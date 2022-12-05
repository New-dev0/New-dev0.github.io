import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Murat Yakın</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Murat Yakın"/>
        <meta name="description" content="Trending News about Murat Yakın" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Murat Yakın</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/12/3/2008548/kapak_114837.jpg" alt="Murat Yakın"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/isvicre-teknik-direktoru-murat-yakin-kimdir-murat-yakin-nereli-kac-yasinda-2008548'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İsviçre teknik direktörü Murat Yakın kimdir? Murat Yakın nereli, kaç ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTN6fdiCjPPQ-0NqUOttqxjmhkHdiYINlBRXGFPMpvPTKfrpvAXtRXDfjLyJuP9hg09LLYktkLX" alt="İsviçre teknik direktörü Murat Yakın kimdir? Murat Yakın nereli, kaç ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası&#39;nda İsviçre, G Grubu&#39;ndaki üçüncü maçında Sırbistan&#39;ı 3-2 mağlup ederek son 16 turuna yükseldi. İsviçre teknik direktörü Murat Yakın&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/dunyadan-futbol/murat-yakin-portekizi-de-yenebiliriz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Murat Yakın: Portekizi de yenebiliriz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7d8ynbakah2FJGBq72Zr4wyHOn-BQCdqHo7-E-dP-2NJRXpCBhl5q7ihhxrTHhjtfTjzD62qU" alt="Murat Yakın: Portekizi de yenebiliriz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yakın rakiplerini daha farklı skorla yenebileceklerini ancak turu geçtikleri için duydukları mutluluğu anlatarak, &quot;Daha çok gol atabilirdik ama önemli olan son&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}