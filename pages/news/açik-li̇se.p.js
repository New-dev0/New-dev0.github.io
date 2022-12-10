import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>AÇIK LİSE</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,AÇIK LİSE"/>
        <meta name="description" content="Trending News about AÇIK LİSE" /></Head><Template>
            <h1 style={{fontSize: "30"}}>AÇIK LİSE</h1>
            <Image width={800} height={500} src="https://i.cerkezkoybakis.com.tr/c/90/1280x720/s/dosya/haber/m/acik-lise-ve-acik-ortaokul-sin_1670599608_p0RMSQ.jpg" alt="AÇIK LİSE"/>
            <h3>Recent News</h3>
            <a href='https://www.cerkezkoybakis.com.tr/acik-lise-ve-acik-ortaokul-sinavlari-online-yapiliyor/130613/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Açık lise ve açık ortaokul sınavları online yapılıyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSviH76i2G-LBXe_toUkfSCuLYY5luYUCSSGJ3pNKQ1GG8ksxPxeGBR5y_2hy_H46Sk9mtgPIg1" alt="Açık lise ve açık ortaokul sınavları online yapılıyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çerkezköy Halk Eğitimi Merkezi Müdürü Necmi Akman, Açık Öğretim Lisesi ve Açık Ortaokul 2022-2023 eğitim ve öğretim yılı 1. dönem sınavlarının 9 Aralık 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/bilgi/aol-online-sinav-giris-ekrani-2022-aol-sinavlari-ne-zaman-saat-kacta-aol-1-donem-sinav-tarihleri-42184767'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AÖL (AÇIK LİSE) sınav giriş ekranı: MEB AÖL sınavları ne zaman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSCAv1u5JiLYWLOiEmXmUS8AUUsA6pVX_N-dg3qTkAhUQKbIRQi5SmJW_XWT4HPPOffZIH0LH9n" alt="AÖL (AÇIK LİSE) sınav giriş ekranı: MEB AÖL sınavları ne zaman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AÖL sınav giriş ekranına ulaşmak isteyen öğrenciler araştırmalarına hız verdi. MEB 2022 AÖL sınavları günün aranan başlıkları arasında yer alıyor.</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/haberler/2022/12/09/acik-lise-online-sinav-giris-ekrani-2022-aolmebgovtr-aol-online-sinav-girisi-nereden-nasil-yapilir-sinav-tarihleri'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Açık Lise ONLİNE sınav giriş ekranı 2022! aol.meb.gov.tr: AÖL ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTg987vs0fR3Q6iU_obxZV_5RzNiu59eHFAosrcbicyfZY09mynH-XZCVSx3tBk4KD8daiVqDA9" alt="Açık Lise ONLİNE sınav giriş ekranı 2022! aol.meb.gov.tr: AÖL ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Açıköğretim Lisesi sınavları 9 Aralık&#39;ta başladı. Lise, ortaokul öğrencileri mezun olabilmek için MEB tarafından düzenlenen açık lise sınavlarına katılacak.</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/egitim/aol-sonuclari-ne-zaman-aciklanacak-acik-lise-sinav-sonuclari-hangi-tarihte-belli-olacak-aol-2-donem-sinavlari-ne-zaman-5412755'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AÖL sonuçları ne zaman açıklanacak? Açık lise sınav sonuçları ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJKWCIg7_kpGo23gHcaGXG1cMUVaME5B990lYtNzygObspbfrIkKEmhk8fhEyR7QLtJFwma1s7" alt="AÖL sonuçları ne zaman açıklanacak? Açık lise sınav sonuçları ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Açık öğretim kurumları 2022-23 Eğitim ve Öğretim Yılı 1. dönem sınavları online şekilde yapılacak, 20 Aralık&#39;a kadar gerçekleştirilecek.</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/aol-sonuclari-sorgulama-ekrani-meb-acikogretim-lisesi-aol-sinav-sonuclari-ne-zaman-aciklanacak-h-3894777'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AÖL sonuçları sorgulama ekranı: MEB Açıköğretim lisesi AÖL sınav ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnno1_3506IiAkTdqfp3wsquCgMGChkuggdtcKR0Nq_HvXdDxdASexb5-PezYEB7AuYbH53p3E" alt="AÖL sonuçları sorgulama ekranı: MEB Açıköğretim lisesi AÖL sınav ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AÖL sınavları 9 Aralık saat 09:30 itibariyle başladı. 2022 1. dönem AÖL sınavları online olarak 20 Aralık&#39;a kadar gerçekleştirilecek.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/aol-online-sinav-giris-ekrani-acik-lise-online-sinava-nasil-girilir-3545909'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AÖL online sınav giriş ekranı: Açık Lise online sınava nasıl girilir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcST8PAwL8ZInGNc8r-QzwsrnfXZ6r2zkYDQNtYe-2-nJPM4ZpoQ3rPdGH2ZpcjS3GyYFj9u0ajZNw" alt="AÖL online sınav giriş ekranı: Açık Lise online sınava nasıl girilir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Açıköğretim Lisesi sınavları gün itibariyle çevrim içi (online) olarak başlıyor. Türkiye&#39;nin dört bir yanındaki onlarca öğrenciyi yakından ilgilendiren&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}