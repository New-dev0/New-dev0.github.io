import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Serap Yazıcı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Serap Yazıcı"/>
        <meta name="description" content="Trending News about Serap Yazıcı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Serap Yazıcı</h1>
            <Image width={800} height={500} src="https://im.haberturk.com/2022/11/28/ver1669668636/3542832_1200x627.jpg" alt="Serap Yazıcı"/>
            <h3>Recent News</h3>
            <a href='https://www.haberturk.com/chp-li-muharrem-erkek-gelecek-partili-serap-yazici-ile-iyi-partili-ugur-poyraz-haberturk-e-konustu-3542832'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CHP&#39;li Muharrem Erkek, Gelecek Partili Serap Yazıcı ile İYİ Partili ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAVenSTy_6Ilhs04E5fD7tHm-NGf3PZG4jPDq9pzz9bmdbBrb9IlvVU_bXh5TukporFybhK8eR" alt="CHP&#39;li Muharrem Erkek, Gelecek Partili Serap Yazıcı ile İYİ Partili ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Habertürk&#39;te Fatih Altaylı&#39;nın sorularını yanıtlayan CHP Genel Başkan Yardımcısı Muharrem Erkek, Gelecek Partisi Genel Başkan Yardımcısı Prof.</p></div>
            </div>
        </a><a href='https://www.elazighakimiyethaber.com/musamere-cocuklari/77731/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Müsamere Çocukları…</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR28TFN7yikOSvtTqZSiILJtwkgKiYTj0N0ZJOQyOzWK3eOxgarpy4Zubbya995LDwO9Zgq1s0q" alt="Müsamere Çocukları…" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP Genel Başkan Yardımcısı Muharrem Erkek, DEVA Partisi Genel Başkan Yardımcısı Mustafa Yeneroğlu, Demokrat Parti Genel Sekreteri Serhan Yücel,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}