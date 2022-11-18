import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Murat Çuhadar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Murat Çuhadar"/>
        <meta name="description" content="Trending News about Murat Çuhadar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Murat Çuhadar</h1>
            <Image width={800} height={500} src="https://cdn.yeniakit.com.tr/images/news/625/iyi-partiden-istifa-eden-murat-cuhadar-aksenere-boyle-seslendi-h1668718653-e0050a.png" alt="Murat Çuhadar"/>
            <h3>Recent News</h3>
            <a href='https://www.yeniakit.com.tr/haber/iyi-partiden-istifa-eden-murat-cuhadar-aksenere-boyle-seslendi-1708593.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İYİ Parti&#39;den istifa eden Murat Çuhadar Akşener&#39;e böyle seslendi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSaoAzFdTCAjS612ZfgxwpTbaEmTCBSqE_97DtBcndktGPZ50rpLz2fSGeTNeIJhWA-4Dm7jpA5" alt="İYİ Parti&#39;den istifa eden Murat Çuhadar Akşener&#39;e böyle seslendi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meral Akşener&#39;in Başdanışmanlığı görevinden ayrılıp, AK Parti&#39;yi destekleme kararı alan Murat Çuhadar, içini döktü. Çuhadar,</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/gundem/2022/11/17/son-dakika-iyi-parti-genel-baskani-meral-aksenerin-basdanismani-murat-cuhadar-istifa-etti-baskan-erdogana-destek-karari-aldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: İYİ Parti Genel Başkanı Meral Akşener&#39;in başdanışmanı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8OQHbT1JIe2DbyWfidtUPPB0n5oVc_cgnbdkpKkS8N1pbrD47awk6U4Q15keqohHQCHbQci_C" alt="Son dakika: İYİ Parti Genel Başkanı Meral Akşener&#39;in başdanışmanı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İYİ Parti&#39;de dikkat çeken bir istifa yaşandı. Sosyoterapist - yazar Murat Çuhadar Genel Başkan Meral Akşener&#39;in başdanışmanlığından ayrıldı.</p></div>
            </div>
        </a><a href='https://www.turkiyegazetesi.com.tr/gundem/murat-cuhadar-kimdir-kac-yasinda-iyi-partiden-istifa-eden-murat-cuhadar-kim-928031'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Murat Çuhadar kimdir, kaç yaşında? İYİ Parti&#39;den istifa eden Murat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQTTbDNz_LEnpqR_8yJHmAY_PqeakK7DkyDB_bP1YBVsAAqQ_OsxjJ84Tw_kKAMMz2HGXuTkXK" alt="Murat Çuhadar kimdir, kaç yaşında? İYİ Parti&#39;den istifa eden Murat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meral Akşener&#39;in danışmanı ünlü yaşam koçu Murat Çuhadar&#39;ın İYİ Parti&#39;den istifa ettiği ve Cumhurbaşkanı Erdoğan liderliğindeki AK Parti&#39;nin Türkiye Vizyonu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pusulahaber.com.tr/istifa-eden-aksenerin-basdanismani-murat-cuhadardan-erdogana-destek-karari-1704540h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İstifa eden Akşener&#39;in başdanışmanı Murat Çuhadar&#39;dan Erdoğan&#39;a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAjwp1Z8P9qmboHnFBf7nKWoAR9chwsUN27nB2hUcDnkmCLhbOGlSMohJnrks-bgoyv-ytpcvg" alt="İstifa eden Akşener&#39;in başdanışmanı Murat Çuhadar&#39;dan Erdoğan&#39;a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Partiden istifa eden İYİ Parti Genel Başkanı Meral Akşener&#39;in başdanışmanı Murat Çuhadar, 2023 seçimlerinde Türkiye&#39;nin Yüzyılı Platformu çatısı altında&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ogunhaber.com/siyaset/meral-aksener-in-basdanismani-istifa-etti-erdogana-destek-aciklamasi-2373039h.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meral Akşener&#39;in Başdanışmanı istifa etti! Erdoğan&#39;a destek açıklaması</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvDz4iOMXGq-XFzhfX-fYHOp-guzFxhF1ouk_WQijPEyL2W55ha82OZXnJULcl99dbrsnhZZmnOA" alt="Meral Akşener&#39;in Başdanışmanı istifa etti! Erdoğan&#39;a destek açıklaması" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uzun yıllardan beri AK Parti&#39;ye verdiği destekler ile tanınan başarılı sosyal çalışmacı Murat Çuhadar, kısa bir süre önce getirildiği İYİ Parti Genel Başkan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.habererk.com/iyi-partide-neler-oluyor-aksenerin-basdanismani-istifa-etti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İYİ Parti&#39;de neler oluyor? Akşener&#39;in başdanışmanı istifa etti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7BuPa6h3OiIGFJyapZr03dg82CKa4Aj_bs4Lj7lJzafSzKkHp7Gbjq6C15R9TTaR-CwALND7r" alt="İYİ Parti&#39;de neler oluyor? Akşener&#39;in başdanışmanı istifa etti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Genel Başkan Meral Akşener&#39;in Başdanışmanı Murat Çuhadar istifa etti. Çuhadar&#39;ın AKP&#39;li Cumhurbaşkanı Recep Tayyip Erdoğan&#39;a destek kararı aldığı ifade edildi.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/gundem/2022/11/17/meral-aksenerin-basdanismani-istifa-etti-baskan-erdogan-ve-ak-partiye-destek-aciklamasi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meral Akşener&#39;in başdanışmanı istifa etti: Başkan Erdoğan ve AK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShYNpE4wjV6d6QVga4Sq6ayGBlCMb7EgrF2cCek4JhOw3QgxeEuYPJoODn3Y0VjprBpWTPAsT_" alt="Meral Akşener&#39;in başdanışmanı istifa etti: Başkan Erdoğan ve AK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberler - Sosyoterapist-Yazar Murat Çuhadar, İYİ Parti Genel Başkanı Meral Akşener&#39;in başdanışmanlığından istifa etti.</p></div>
            </div>
        </a>
        </Template></>;
}