import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Selçuklu Belediyesi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Selçuklu Belediyesi"/>
        <meta name="description" content="Trending News about Selçuklu Belediyesi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Selçuklu Belediyesi</h1>
            <Image width={800} height={500} src="https://haberdairesi.com/d/news/84890.jpg" alt="Selçuklu Belediyesi"/>
            <h3>Recent News</h3>
            <a href='https://haberdairesi.com/konya/selcuklu-belediyesinden-son-gun-uyarisi-84164h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Selçuklu Belediyesi&#39;nden son gün uyarısı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS2y_WDfD9vjs7yFXl-uMW32h55P2OfNM1jVS0YMlbbkyuNyptaZ2gTcuRyk55bamIrEVng3mk-" alt="Selçuklu Belediyesi&#39;nden son gün uyarısı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emlak ve Çevre Temizlik Vergisi&#39;nin ikinci taksitleri için ödeme süresi 30 Kasım Çarşamba günü sona eriyor. Ödemeler, Selçuklu Belediyesi veznelerinden veya&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}