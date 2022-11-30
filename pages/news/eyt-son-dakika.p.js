import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>EYT Son dakika</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,EYT Son dakika"/>
        <meta name="description" content="Trending News about EYT Son dakika" /></Head><Template>
            <h1 style={{fontSize: "30"}}>EYT Son dakika</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/eJyuSotW-02JLuYnzXa5CQ.jpg?width=1080&mode=crop&scale=both" alt="EYT Son dakika"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/ntvpara/son-dakika-haberi-ak-partiden-eyt-ve-sozlesmeli-personel-aciklamasi,WiA5BmRrn0mv7Rh9g8AI_w'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA HABERİ: AK Parti&#39;den EYT ve sözleşmeli personel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5WqSJ3kLHn-BykHbc4Hal8_QlOvW9gOuwrQRpiPIRkJPTdf4YkEhEimHFXcdR3EbRkqSPULAg" alt="SON DAKİKA HABERİ: AK Parti&#39;den EYT ve sözleşmeli personel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhurbaşkanı Recep Tayyip Erdoğan, dünkü Kabine toplantısı sonrasında yaptığı açıklamada, &quot;Emeklilik için yılını doldurup yaş şartını bekleyenlerle ilgili&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/ekonomi/son-dakika-akpden-eyt-duzenlemesi-aciklamasi-2007364'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: AKP&#39;den &#39;EYT düzenlemesi&#39; açıklaması</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqZi8xDe_Sk5oF5OVg23Mp-MXmJTJHQk-fxOyeg4yFxY8oWFn7og6d6y01oA7eykuhlhZSkwzK" alt="Son Dakika: AKP&#39;den &#39;EYT düzenlemesi&#39; açıklaması" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AKP Grup Başkanvekili Emin Akbaşoğlu, EYT ve sözleşmeli personelin kadroya geçilmesine ilişkin düzenlemeleri aralık ayı içinde yapmayı planlıyoruz.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/ekonomi/son-dakika-ak-partiden-eyt-ve-sozlesmeliye-kadro-aciklamasi-6258514'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT SON DAKİKA: AK Parti&#39;den EYT ve sözleşmeli personel için ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtj1ag4gQ1o5qm7fdZlabrknSaM_HV8NLyA6mrxGzXjKL5mC_qGgRo3G5-iahK3Tn64VhZHu_W" alt="EYT SON DAKİKA: AK Parti&#39;den EYT ve sözleşmeli personel için ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi...AK Parti Grup Başkanvekili Muhammed Emin Akbaşoğlu, Emeklilikte Yaşa Takılanlar için yapılacak EYT düzenlemesi ve sözleşmeliye kadro ile&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/ekonomi/son-dakika-akbasoglu-eyt-ve-sozlesmeli-personelle-ilgili-duzenleme-aralik-ayinda-42179174'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika... Akbaşoğlu: EYT ve sözleşmeli personelle ilgili ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTqG0lJa08RIkAG_mLCs9umt54UFx1aBQnNwpNaWpEuqs1iWqY7suPZBO82xS3VYKhR-iidz-RL" alt="Son dakika... Akbaşoğlu: EYT ve sözleşmeli personelle ilgili ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haberler - AK Parti Grup Başkanvekili Emin Akbaşoğlu EYT ve sözleşmeli personelin kadroya geçilmesine ilişkin düzenlemeleri Aralık ayı içinde yapmayı&nbsp;...</p></div>
            </div>
        </a><a href='https://finans.mynet.com/haber/detay/ekonomi/son-dakika-ak-parti-den-eyt-duzenlemesiyle-ilgili-aciklama-aralik-ayi-icinde-yapmayi-planliyoruz/455138/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: AK Parti&#39;den EYT düzenlemesiyle ilgili açıklama: &#39;Aralık ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0XSsyCAB5kQbQgF433bF1N3jezuUrSD4153Uw4jwzAC1aSMBpa39BnPOTflSuC9--JRnZS12F" alt="Son dakika: AK Parti&#39;den EYT düzenlemesiyle ilgili açıklama: &#39;Aralık ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AK Parti Grup Başkanvekili Emin Akbaşoğlu, “EYT ve sözleşmeli personelin kadroya geçilmesine ilişkin düzenlemeleri Aralık ayı içinde yapmayı planlıyoruz. En&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/gundem/ak-partiden-eyt-ve-sozlesmeli-personel-icin-tarih-726912.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AK Parti&#39;den &quot;EYT ve sözleşmeli personel&quot; için tarih</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcBzJH4_5QVHpexHxx6rcv7cv1qo07nMg9fNHBDMn07h8g-E9dTrN6_LJ9CgBUKT2lSOhyf7PX" alt="AK Parti&#39;den &quot;EYT ve sözleşmeli personel&quot; için tarih" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AK Parti Grup Başkan Vekili Emin Akbaşoğlu, &quot;EYT ve sözleşmeli personelin kadroya geçirilmesine ilişkin düzenlemeleri aralık ayı içinde yapmayı planlıyoruz.</p></div>
            </div>
        </a>
        </Template></>;
}