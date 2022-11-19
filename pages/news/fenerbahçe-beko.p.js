import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fenerbahçe Beko</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fenerbahçe Beko"/>
        <meta name="description" content="Trending News about Fenerbahçe Beko" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fenerbahçe Beko</h1>
            <Image width={800} height={500} src="https://media.fenerbahce.org/getmedia/1e6d15c4-1555-4aed-940c-1d7d53fd9cc1/fbbekopanailkkpk.jpg?width=1200&height=675&ext=.jpg" alt="Fenerbahçe Beko"/>
            <h3>Recent News</h3>
            <a href='https://www.fenerbahce.org/haberler/basketbol-erkek/2022/11/fenerbahce-beko-107-77-panathinaikos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko 107-77 Panathinaikos - Fenerbahçe SK</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRz0PUGiAe8pya9ZbZ75O2mZ3O4yUOD94aSyvo6eDXgsMwHSMOWuSTKksgzKhSIS8U-1-cQIr4o" alt="Fenerbahçe Beko 107-77 Panathinaikos - Fenerbahçe SK" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Beko Erkek Basketbol Takımımız, Turkish Airlines EuroLeague 8. hafta maçında Yunanistan temsilcisi Panathinaikos&#39;u ağırladı.</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/sporskor/son-dakika-fenerbahce-beko-107-77-panathinaikos-mac-sonucu,AYWKyukZXEuwQvEsmR7SQA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: Fenerbahçe Beko 107-77 Panathinaikos (Maç Sonucu)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVf-SPetWZGP7_CMcF-aipFaZiUGjOsr5E1lEOdIMWuVBfufpr9HqKVdrePvlVjW5z8xbGt_tD" alt="SON DAKİKA: Fenerbahçe Beko 107-77 Panathinaikos (Maç Sonucu)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SON DAKİKA: Fenerbahçe Beko, THY Avrupa Ligi&#39;nin 8. haftasında Yunanistan temsilcisi Panathinaikos&#39;u 107-77 yendi. 8 maçta 7. galibiyetini alan Fenerbahçe,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurohoops.net/tr/euroleague-tr/1420975/fenerbahce-beko-resital-sundu-panathinaikosu-30-sayi-farkla-devirdi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko Resital Sundu, Panathinaikos&#39;u 30 Sayı Farkla ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNACZd0nChirKE1Aup_zOdQ8PwtI_XTg026J1ox4hbvK7uN2xlt4p2dQ_6GOITure-K_S8Tw9p" alt="Fenerbahçe Beko Resital Sundu, Panathinaikos&#39;u 30 Sayı Farkla ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague&#39;in 8. haftasında temsilcimiz Fenerbahçe Beko, Panathinaikos&#39;u konuk etti. Temsilcimiz rakibi karşısında ikinci çeyrekten itibaren&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/basketbol/fenerbahce-beko-yuzledi-panathinaikosa-fark-atti-7488108/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko &#39;Yüzledi&#39; Panathinaikos&#39;a fark attı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYBwfPxAR9718zlfUQxhFns491eE7KQIYQVd_plSq2NhFvK-FrXwx7JFFHmOGY1C-swTk440hs" alt="Fenerbahçe Beko &#39;Yüzledi&#39; Panathinaikos&#39;a fark attı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Beko&#39;da Wilbekin 19, Hayes-Davis 16, Edwards 14, Motley ise 10 sayıyla galibiyette başrolü oynadı. Sarı-lacivertlilerde Melih Mahmutoğlu ve Calathes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/euroleague/2022/11/18/fenerbahce-beko-panathinaikos-maci-canli'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko Panathinaikos maçı CANLI</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfRtf3En_GLjPKnmKtdfv6QC5mzml2n92nKIQ_jCJ2M5m1Hvy8FArgezFJAW8UvWracjmWprz9" alt="Fenerbahçe Beko Panathinaikos maçı CANLI" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY Euroleague tüm heyecanıyla devam ediyor. Temsilcimiz Fenerbahçe Beko, 8. hafta maçında Panathinaikos ile kozlarını paylaşıyor.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/fenerbahce-bekodan-farkli-galibiyet-2004131'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe Beko&#39;dan farklı galibiyet!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNVKBKyR4swiOUIMa3-8cf3RcIHljD2ASNyw4tLdF2tjsBE_NH-uxHYQpIkDt-C6rVAjSvvcrj" alt="Fenerbahçe Beko&#39;dan farklı galibiyet!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe Beko, THY EuroLeague&#39;de sahasında Panathinaikos&#39;u 107-77 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/ozet-fenerbahce-beko-panathinaikos-mac-sonucu-107-77-2310345'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>(ÖZET) Fenerbahçe Beko-Panathinaikos maç sonucu: 107-77</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ51DNWkwEfe-g7i9bPmvBuCiP9VYoUWdh0uRFXEvdYgawaR_ogFoPOJQCQP_KE6F4_be-youS6" alt="(ÖZET) Fenerbahçe Beko-Panathinaikos maç sonucu: 107-77" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague&#39;in 8. haftasında temsilcilerimizden Fenerbahçe Beko, sahasında Yunan ekibi Panathinaikos&#39;u ağırladı.</p></div>
            </div>
        </a>
        </Template></>;
}