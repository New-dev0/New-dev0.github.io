import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Türkiye milli</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Türkiye milli"/>
        <meta name="description" content="Trending News about Türkiye milli" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Türkiye milli</h1>
            <Image width={800} height={500} src="https://i2.milimaj.com/i/milliyet/75/0x0/60c39c115542813d68e719f7.jpg" alt="Türkiye milli"/>
            <h3>Recent News</h3>
            <a href='https://www.milliyet.com.tr/skorer/galeri/turkiye-milli-takim-italya-0-3-6529064'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye (Milli Takım) - İtalya: 0-3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9R7Kh1yzaqOxWDGz0PUPrZjpC_yrA05bnx9Zxizz094vfoPlNqBxZ_Y3-Gj6Nj6twpKpQRQHr" alt="Türkiye (Milli Takım) - İtalya: 0-3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye: Uğurcan Çakır, Zeki Çelik, Merih Demiral, Çağlar Söyüncü, Umut Meraş, Okay Yokuşlu, Ozan Tufan, Kenan Karaman, Hakan Çalhanoğlu, Yusuf Yazıcı, Burak&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}