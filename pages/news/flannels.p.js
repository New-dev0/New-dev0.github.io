import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Flannels</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Flannels"/>
        <meta name="description" content="Trending News about Flannels" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Flannels</h1>
            <Image width={800} height={500} src="https://www.independent.ie/business/14878/42208255.ece/AUTOCROP/w1240h700/PXL_20221209_133539055.jpg" alt="Flannels"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.ie/business/luxury-retailer-flannels-hits-ireland-with-premium-brands-in-blanchardstown-42208256.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luxury retailer Flannels hits Ireland with premium brands in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT3KlNofFx3-UAwd9QwX5kcFcBm1fbP_4WiP7QHoRn8Ogc3GSLI_IJ8rMgChbcdMCogaWClTSuN" alt="Luxury retailer Flannels hits Ireland with premium brands in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Burberry and Balmain are now residing happily in Blanchardstown and Balenciaga is reportedly on the way next week.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/business/2022/dec/08/flannels-fashion-chain-proving-a-magnet-for-gen-z-shoppers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flannels fashion chain proving a magnet for gen Z shoppers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwFlXaNJFbEEIpOEEDh3hbE_TZ7uLbmF-01fyf0BU8FkeniWQyRjmkI4R00Aa3klQotPiXvkhk" alt="Flannels fashion chain proving a magnet for gen Z shoppers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Frasers Group company&#39;s attention to the twentysomethings&#39; market is paying dividends.</p></div>
            </div>
        </a>
        </Template></>;
}