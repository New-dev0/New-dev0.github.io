import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Atatürk Öğretmenler Günü</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Atatürk Öğretmenler Günü"/>
        <meta name="description" content="Trending News about Atatürk Öğretmenler Günü" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Atatürk Öğretmenler Günü</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/qmnvhw0Jm0iQRNa5VdEKJw.jpg?width=1080&mode=crop&scale=both" alt="Atatürk Öğretmenler Günü"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/galeri/turkiye/ogretmenler-gunu-mesajlari-ve-sozleri-sosyal-medyada-paylasiliyorulu-onder-ataturkun-ogretmenlik-meslegiyle-ilgili-sozleri,iFCZ0uLamUKnCiQ3vJr8VA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anlamlı, resimli, resimsiz Öğretmenler Günü mesajları: Ulu Önder ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTu4fZB0a6Ze1qq-y1V0gCJ7Mhwb4ynDryJYJYvewZNhabRemzHp3TIPkbFKTlEL3esVhFg53-g" alt="Anlamlı, resimli, resimsiz Öğretmenler Günü mesajları: Ulu Önder ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mustafa Kemal Atatürk&#39;ün en önem verdiği konulardan biri de eğitimdi. Ulu Önder, her fırsatta eğitime verdiği önemi dile getirir, özellikle Öğretmenler Birliği&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/24-kasim-ogretmenler-gunu-basogretmen-ataturk-2005604'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>24 Kasım Öğretmenler Günü: Başöğretmen Atatürk</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRpuW6-sDjXxp_ARxQ6phB29KoafCr1MfFyOY0IkhHVN1oCitpeEmhs59Kcmw28yvP28JEWdPZI" alt="24 Kasım Öğretmenler Günü: Başöğretmen Atatürk" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>94 yıl önce bugün başöğretmen olan Mustafa Kemal Atatürk, cehaletle savaşa her dönem dikkat çekerek gelişim için milli eğitime vurgu yapmıştır.</p></div>
            </div>
        </a><a href='https://finans.mynet.com/haber/detay/ekonomi/ogretmenler-gunu-mesajlari-ve-ataturk-sozleri-iste-24-kasim-ogretmenler-gunu-icin-ataturk-un-sozleri/454664/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Öğretmenler Günü mesajları ve Atatürk&#39;ün sözleri burada! İşte 24 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPcH0AJTnORONHWKzdEh_-UsD6jlIhsFRMXQQ3gsS0kM0T7NcR-yDvbRoa1foK9yA8B-K5GEYW" alt="Öğretmenler Günü mesajları ve Atatürk&#39;ün sözleri burada! İşte 24 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Öğretmenler Günü ile ilgili Atatürk&#39;ün sözleri araştırılıyor. 24 Kasım Öğretmenler Günü bugün büyük bir coşkuyla karşılandı. Her sene 24 Kasım&#39;a denk gelen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/gunes/ataturkun-ogretmenler-gunu-ile-ilgili-sozleri-en-guzel-ogretmenler-gunu-ataturk-sozleri-ve-resimleri/haber-1321735'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATATÜRK&#39;ün Öğretmenler Günü ile ilgili sözleri! En güzel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1mF6wt22TkFy4np8_21IrEUupStaIkVd2Xy0L7koK1m6R4i53Y60lfvliF5YEEkHeSscCf2yd" alt="ATATÜRK&#39;ün Öğretmenler Günü ile ilgili sözleri! En güzel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ATATÜRK&#39;ün Öğretmenler Günü ile ilgili sözleri! En güzel Öğretmenler Günü Atatürk sözleri ve resimleri... Son Güncelleme: 24 Kasım 2022 Perşembe - 08:50&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/turkce/articles/cqe979y7eq7o'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Öğretmenler Günü neden 24 Kasım? - BBC News Türkçe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdK6AEvPEmPBXf-ES5dEvrDzoIYkY9_RzlA91v8fsmhR-MP8vVZV0QyQNKe_hvsOB1Yl7vIFCH" alt="Öğretmenler Günü neden 24 Kasım? - BBC News Türkçe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kenan Evren liderliğindeki darbe yönetimi sırasında, 26 Şubat 1981&#39;de Resmi Gazete&#39;de yayımlanan Öğretmenler Günü Kutlama Yönetmeliği&#39;nde, bu günün ilan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazetevatan.com/gundem/24-kasim-ogretmenler-gunu-mesajlari-resimli-ataturk-sozlu-uzun-kisa-anlamli-en-guzel-ogretmenler-gunu-mesajlari-ve-sozleri-2071009'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resimli 24 Kasım Öğretmenler Günü mesajları! Atatürk sözlü, uzun ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7tJpsuHNu203QgUURHZKJt9nM54HBCbDljzmV0GaMlNZ36S3QvRB55xzpbKOPomwzL6JZwhsB" alt="Resimli 24 Kasım Öğretmenler Günü mesajları! Atatürk sözlü, uzun ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Mustafa Kemal Atatürk&#39;ün en önem verdiği konulardan biri de eğitimdi. Ulu Önder, her fırsatta eğitime verdiği önemi dile getirir, özellikle Öğretmenler Birliği&nbsp;...</p></div>
            </div>
        </a><a href='https://brtk.net/ogretmen-gunu-dolayisiyla-ataturk-anitina-celenk-sunuldu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Öğretmen Günü dolayısıyla Atatürk Anıtı&#39;na çelenk sunuldu - BRTK</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZz3rjx-GMwB7nDuUTYS6Ig9bYaDrkfqYs9RBZ-Y-pQsR34l4w6rLdM6xiVkYSRCF0myFlNqF2" alt="Öğretmen Günü dolayısıyla Atatürk Anıtı&#39;na çelenk sunuldu - BRTK" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Törene, Milli Eğitim Bakanı Nazım Çavuşoğlu, bakanlık bürokratları, Kıbrıs Türk Orta Eğitim Öğretmenler Sendikası (KTOEÖS) Başkanı Ozan Elmalı ve sendika&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/galeri-24-kasim-ogretmenler-gunu-mesajlari-ogretmenler-gununde-gonderebileceginiz-en-guzel-mesajlar-resimli-kisa-anlamli-ve-ozel-2022-ogretmenler-gunu-mesajlari-42175583'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖĞRETMENLER GÜNÜ MESAJLARI | KISA, ÖZ, ANLAMLI ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxH7NjOlx4i8utDJ1MYb-hAlrXxxiPMeylzRUhap1NA3ou3tR-n835bj9FCqnrksg-yBmOiOhU" alt="ÖĞRETMENLER GÜNÜ MESAJLARI | KISA, ÖZ, ANLAMLI ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Öğretmenler Günü mesajları bu anlamlı günü taçlandırmaya devam ediyor. 24 Kasım Öğretmenler Günü her yıl olduğu gibi 2022 yılında da güzel mesajlar,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kibrispostasi.com/c87-LEFKOSA/n448579-lefkosada-24-kasim-ogretmenler-gununde-ataturk-anitina-celenk-sunuldu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lefkoşa&#39;da 24 Kasım Öğretmenler Günü&#39;nde Atatürk Anıtı&#39;na çelenk ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvCEnpdvrNyQWCowL7EZTN5u8KGVN_q8-MY2cvR5_McHaCddBqJ7c98dxy5ThvJZWUXu8l9FzZ" alt="Lefkoşa&#39;da 24 Kasım Öğretmenler Günü&#39;nde Atatürk Anıtı&#39;na çelenk ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Törede önce Bakan Çavuşoğlu ardından Sendika Başkanı Elmalı anıta çelenk sundu. Çelenk sunumunun ardından saygı duruşu ve İstiklal Marşı&#39;nın okunmasıyla tören&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/yerel-haberler/adana/merkez/adanada-24-kasim-ogretmenler-gununde-ataturk-42176123'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adana&#39;da 24 Kasım Öğretmenler Günü&#39;nde Atatürk Anıtı&#39;na çelenk ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmH_dW2UxDw7gqSp1t9fHxAcjMYwABe5nvrKw0RhaynE79Ma71BHNriiN-_3OE-mImdS0nozbP" alt="Adana&#39;da 24 Kasım Öğretmenler Günü&#39;nde Atatürk Anıtı&#39;na çelenk ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Can ÇELİK-Eser PAZARBAŞI/ADANA, (DHA)- ADANA&#39;da 24 Kasım Öğretmenler Günü etkinlikleri kapsamında düzenlenen törende Gazi Mustafa Kemal Atatürk&#39;ün anıtına&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}