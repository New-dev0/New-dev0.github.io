import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>CİMER</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,CİMER"/>
        <meta name="description" content="Trending News about CİMER" /></Head><Template>
            <h1 style={{fontSize: "30"}}>CİMER</h1>
            <Image width={800} height={500} src="https://i.hbrcdn.com/haber/2022/11/25/gaziantep-te-lise-ogrencilerine-verilen-kurtlu-15453968_526_amp.jpg" alt="CİMER"/>
            <h3>Recent News</h3>
            <a href='https://www.haberler.com/guncel/gaziantep-te-lise-ogrencilerine-verilen-kurtlu-15453968-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gaziantep&#39;te liseli öğrencilere verilen yemekler mide bulandırdı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQItQ1Q-8WjX8pV8BsbRfocQ-86Yujmren6iqD5yU9VAkTPFhMYIVJ8r9pwoHT_fiBGB2ysRY5w" alt="Gaziantep&#39;te liseli öğrencilere verilen yemekler mide bulandırdı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gaziantep Ticaret Odası Güzel Sanatlar Lisesi Pansiyonu&#39;nda kalan öğrenciler, kahvaltıda sadece ekmek, peynir ve domates verildiğini, yemeklerin kurtlu ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/2022/egitim/son-dakika-ogrenciler-isyan-etti-kurtlu-ve-bayat-yemek-veriyorlar-7500245/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Öğrenciler isyan etti: Kurtlu ve bayat yemek veriyorlar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2wLROhbFO8bp8Wj-JSW2_eTu5O0ziLftG5RoQOe_LuQ3U8MDwOym6ROCk8jPCekXSFB8i2ngm" alt="Öğrenciler isyan etti: Kurtlu ve bayat yemek veriyorlar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son kullanma tarihi geçmiş kahvaltılık ve kurtlu yemek verildiğini iddia eden Gaziantep Ticaret Odası Güzel Sanatlar Lisesi öğrencileri CİMER&#39;e şikayette&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}