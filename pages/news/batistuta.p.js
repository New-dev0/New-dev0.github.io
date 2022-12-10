import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Batistuta</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Batistuta"/>
        <meta name="description" content="Trending News about Batistuta" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Batistuta</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/484000/485417.jpg" alt="Batistuta"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/messi-batistutayi-yakaladi-266685.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi, Batistuta&#39;yı yakaladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkpBi7sJPhX23JMjGY_WEZctqImlJB3GgAlaeE679qhar1pm1NEczt09wneqCYg1by_6XEFF5B" alt="Messi, Batistuta&#39;yı yakaladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arjantin ile Hollanda arasında oynanan FIFA Dünya Kupası Çeyrek Final mücadelesinde 10. golüne ulaşan Lionel Messi, Arjantin formasıyla Dünya Kupası&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sporx.com/lionel-messi-batistuta-yi-yakaladi-SXHBQ998935SXQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi Batistuta&#39;yı yakaladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3AD2H2zTidfChks7HuM3bkX8mrtWShbhrqL52UxZu2AL0GAVnyLTgKCNDLb6eYyD2_t9zfYA_" alt="Lionel Messi Batistuta&#39;yı yakaladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi, Hollanda&#39;ya attığı golle ülkesinin Dünya Kupası&#39;nda en çok gol atan oyuncusu olma rekoruna ortak oldu.</p></div>
            </div>
        </a>
        </Template></>;
}