import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Türkiye Cumhurbaşkanı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Türkiye Cumhurbaşkanı"/>
        <meta name="description" content="Trending News about Türkiye Cumhurbaşkanı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Türkiye Cumhurbaşkanı</h1>
            <Image width={800} height={500} src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1962000/rumen-radev-aa-1962104.jpg" alt="Türkiye Cumhurbaşkanı"/>
            <h3>Recent News</h3>
            <a href='https://www.trthaber.com/haber/gundem/bulgaristan-cumhurbaskani-radev-turkiyeye-gelecek-729429.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulgaristan Cumhurbaşkanı Radev, Türkiye&#39;ye gelecek</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDejvJ9Wb9490WivshP-BSHjkxEvchcSfOZU-BLheD_znv3rcFnBWopkipLYBCZW7i8QdDx-ma" alt="Bulgaristan Cumhurbaşkanı Radev, Türkiye&#39;ye gelecek" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bulgaristan Cumhurbaşkanı Rumen Radev, Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın davetine icabetle yarın Türkiye&#39;ye çalışma ziyaretinde bulunacak.</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/turkiye/cumhurbaskani-erdogan-davet-etti-bulgaristan-cumhurbaskani-radev-turkiyeye-geliyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cumhurbaşkanı Erdoğan davet etti: Bulgaristan Cumhurbaşkanı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnnfU-DPFiJcuUlDjqseKDc7wQbCroPHAYSMswdoffan-0CwESDKp9U3ibX2tP2HxKKqUe_LCq" alt="Cumhurbaşkanı Erdoğan davet etti: Bulgaristan Cumhurbaşkanı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bulgaristan Cumhuriyeti Cumhurbaşkanı Rumen Radev, Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın davetine icabetle Türkiye&#39;yi ziyaret edecek.</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/dunya/bulgaristan-cumhurbaskani-radev-turkiyeye-geliyor,KtTLMttSRka2E4DLTxf_oA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulgaristan Cumhurbaşkanı Radev, Türkiye&#39;ye geliyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQukNXea3smJsJW3kv_cno5yoRX8JqXIV_lvjO8nMr19Y1kp308IBbnzWQAq-usWLEENHgtFDb" alt="Bulgaristan Cumhurbaşkanı Radev, Türkiye&#39;ye geliyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bulgaristan Cumhurbaşkanı Rumen Radev, Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın davetine icabetle Türkiye&#39;ye çalışma ziyaretinde bulunacak.</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/gundem/bulgaristan-cumhurbaskani-radev-yarin-turkiyeye-gelecek-3894609'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulgaristan Cumhurbaşkanı Radev yarın Türkiye&#39;ye gelecek</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmwh8H1pcPvGPQy7ZMpxG4l_3lg1plaVOYtPQS52XXJC_hlGQ5vgBNb7cHMXYV4RYk_NeiqRR8" alt="Bulgaristan Cumhurbaşkanı Radev yarın Türkiye&#39;ye gelecek" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bulgaristan Cumhurbaşkanı Rumen Radev, Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın davetine icabetle Türkiye&#39;ye çalışma ziyaretinde bulunacak.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/bulgaristan-cumhurbaskani-rumen-radev-turkiyeye-geliyor-2010203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulgaristan Cumhurbaşkanı Rumen Radev Türkiye&#39;ye geliyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-ZVjOoDE5CdgIs9oT5X8qKB04qrTYns1xQPP9QYSou5uzWQJmgrMDWxBY8ns-xW6pK4p9C7e0" alt="Bulgaristan Cumhurbaşkanı Rumen Radev Türkiye&#39;ye geliyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bulgaristan lideri Radev, AKP&#39;li Cumhurbaşkanı Recep Tayyip Erdoğan&#39;ın daveti üzerine Türkiye&#39;yi ziyaret edecek. İletişim Başkanlığından ziyarete ilişkin&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}