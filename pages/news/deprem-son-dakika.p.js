import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Deprem Son dakika</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Deprem Son dakika"/>
        <meta name="description" content="Trending News about Deprem Son dakika" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Deprem Son dakika</h1>
            <Image width={800} height={500} src="https://i.cnnturk.com/i/cnnturk/75/1200x675/6383d7a517aca905004386f6" alt="Deprem Son dakika"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnturk.com/turkiye/depremi-yasayan-minik-elisadan-valiye-mektup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depremi yaşayan minik Elisa&#39;dan Vali&#39;ye mektup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkMP66-TQ8WpKTloP6Px2dA7CoAJQzqzKpHv44ICQBbKZOeavrr2oN092IJNRoveqHwYwKSx9y" alt="Depremi yaşayan minik Elisa&#39;dan Vali&#39;ye mektup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Düzce&#39;de meydana gelen depremin ardından oturdukları bölgede Kızılay ve AFAD ekiplerini göremeyen 8 buçuk yaşındaki Elisa, Düzce Valisi Cevdet Atay&#39;a mektup&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}