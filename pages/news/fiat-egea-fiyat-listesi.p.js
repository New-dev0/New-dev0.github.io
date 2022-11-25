import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fiat Egea Fiyat Listesi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fiat Egea Fiyat Listesi"/>
        <meta name="description" content="Trending News about Fiat Egea Fiyat Listesi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fiat Egea Fiyat Listesi</h1>
            <Image width={800} height={500} src="https://img-s2.onedio.com/id-637f702a36131818136817d1/rev-0/raw/s-4e623a55735aa2d206ca9c4362ce0bc0cabace2a.jpg" alt="Fiat Egea Fiyat Listesi"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/matrah-duzenlemesi-sonrasi-fiat-egea-guncel-fiyat-listesi-1109561'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matrah Düzenlemesi Sonrası Fiat Egea Güncel Fiyat Listesi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6exN9oFMgMXY_95AJk4unevybp4HAuk_zHNhybfmJwHuw4-3QacC958kAT-GvREH1eijN1REv" alt="Matrah Düzenlemesi Sonrası Fiat Egea Güncel Fiyat Listesi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fiat Egea Sedan Fiyat Listesi &middot; Fiat Egea Cross Fiyat Listesi &middot; Fiat Egea Cross Wagon Fiyat Listesi &middot; Fiat Egea Hatchback Fiyat Listesi &middot; Fiat Egea Station Wagon.</p></div>
            </div>
        </a>
        </Template></>;
}