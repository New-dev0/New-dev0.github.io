import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Şehir Tiyatroları</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Şehir Tiyatroları"/>
        <meta name="description" content="Trending News about Şehir Tiyatroları" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Şehir Tiyatroları</h1>
            <Image width={800} height={500} src="https://ankahaber.net/public/upload/Haber/112444/112444_90309.Jpeg" alt="Şehir Tiyatroları"/>
            <h3>Recent News</h3>
            <a href='https://ankahaber.net/haber/detay/ebb_sehir_tiyatrolarinin_yasasin_demokrasi_oyunu_istanbulda_sahnelendi_112444'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EBB ŞEHİR TİYATROLARI&#39;NIN &#39;YAŞASIN DEMOKRASİ&#39; OYUNU ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVQRNeBN-a_Hk8z4jD8eFvIlJmVRCULeZ4G82eEcQYKqU_GJKvQfgR60AoxUhT3EiZ4UjlcYvc" alt="EBB ŞEHİR TİYATROLARI&#39;NIN &#39;YAŞASIN DEMOKRASİ&#39; OYUNU ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eskişehir Büyükşehir Belediyesi (EBB) Şehir Tiyatroları, Haldun Taner&#39;in eserlerinden uyarlanan &#39;Yaşasın Demokrasi&#39; adlı müzikli oyunun İstanbul prömiyerini&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cagdaskocaeli.com.tr/haber/12585124/sehir-tiyatrolarindan-kahkaha-dolu-yeni-oyun'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Şehir Tiyatroları&#39;ndan kahkaha dolu yeni oyun</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSERDt28_PeWAsfcwz9gAzuOAjw5oDETzf3F5qR-C9VvwbXg8vor_1nE_shEGUAFFYUca64OpKq" alt="Şehir Tiyatroları&#39;ndan kahkaha dolu yeni oyun" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Şehir Tiyatroları, 24 Kasım Perşembe günü saat 20.00&#39;de SDKM Büyük Sahnede Yoldan Çıkan Oyun adlı komedi oyunuyla seyirciyle buluşacak.</p></div>
            </div>
        </a><a href='https://www.eskisehirekspres.net/eskisehir-sehir-tiyatrolari-istanbulda-ayakta-alkislandi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eskişehir Şehir Tiyatroları İstanbul&#39;da ayakta alkışlandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5FS3dKZueZy5xVfcs0MuueCZHqRoSBTi8duZo8vCZdMxwZcSApEFZoL5QLa_p9WZrkyYCwTGX" alt="Eskişehir Şehir Tiyatroları İstanbul&#39;da ayakta alkışlandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eskişehir Büyükşehir Belediyesi Şehir Tiyatroları Haldun Taner&#39;in eserlerinden uyarlanan “Yaşasın Demokrasi” adlı müzikli oyununun İstanbul prömiyerini 20&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}