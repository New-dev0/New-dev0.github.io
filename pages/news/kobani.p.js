import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kobani</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kobani"/>
        <meta name="description" content="Trending News about Kobani" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kobani</h1>
            <Image width={800} height={500} src="https://gazetekarinca.com/wp-content/uploads/2022/11/azad-baris-750x375.jpg" alt="Kobani"/>
            <h3>Recent News</h3>
            <a href='https://gazetekarinca.com/kobani-kurtlerin-kalbidir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kobani Kürtlerin kalbidir!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTiXn1ahbtFB4Nz593LkF7Di_IW5O2CytI6nSKMR0Be44IGySbfM69K2dJRFFxICcpSXymnS0vR" alt="Kobani Kürtlerin kalbidir!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çünkü Kobani karanlığa karşı yaktığı ışıkla insanlığın ortak değerini temsil eden bir semboldür. Bir şehirden çok daha fazlasıdır Kobani. Siyasal rejimin Kobani&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}