import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zeynep Bastık</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zeynep Bastık"/>
        <meta name="description" content="Trending News about Zeynep Bastık" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zeynep Bastık</h1>
            <Image width={800} height={500} src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14TeVN.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg&x=324&y=173" alt="Zeynep Bastık"/>
            <h3>Recent News</h3>
            <a href='https://www.msn.com/tr-tr/haber/diger/zeynep-bast%C4%B1k-kimdir-ka%C3%A7-ya%C5%9F%C4%B1nda-zeynep-bast%C4%B1k-sevgilisi-var-m%C4%B1/ar-AA14TeVO'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zeynep Bastık kimdir, kaç yaşında? Zeynep Bastık sevgilisi var mı?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRf08DvCx7w_esJYXEtlE-CxxtR14q15i9z5y5ZQDh0A4ffV96-erBrKGnVSsuOqT3LeOzdfi-v" alt="Zeynep Bastık kimdir, kaç yaşında? Zeynep Bastık sevgilisi var mı?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zeynep Bastık&#39;ın yaşamı ve hayatı merak ediliyor. Şarkıcı Zeynep Bastık, 2022 FIFA Dünya Kupası&#39;na ev sahipliği yapan Katar&#39;da konser vermişti.</p></div>
            </div>
        </a>
        </Template></>;
}