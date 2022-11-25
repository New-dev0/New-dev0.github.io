import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Opel fiyat listesi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Opel fiyat listesi"/>
        <meta name="description" content="Trending News about Opel fiyat listesi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Opel fiyat listesi</h1>
            <Image width={800} height={500} src="" alt="Opel fiyat listesi"/>
            <h3>Recent News</h3>
            <a href='https://www.yurtgazetesi.com.tr/otomobil/otv-duzenlemesi-sonrasi-opelden-indirimli-fiyat-listesi-h213630.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖTV düzenlemesi sonrası Opel&#39;den indirimli fiyat listesi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzsJ9yDMSJsWpPzd0RyVv5LYOd_naocVuTA-wIB4n4fG6EkPDGg1iDHvVjxw4JB417tC74p_nl" alt="ÖTV düzenlemesi sonrası Opel&#39;den indirimli fiyat listesi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Araba sahibi olmak isteyen birçok kişiyi yakından ilgilendiren yeni ÖTV matrah oranlarında elektrikli araçların matrah limitleri değişti.</p></div>
            </div>
        </a>
        </Template></>;
}