import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>EYT Emeklilikte Yaşa Takılanlar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,EYT Emeklilikte Yaşa Takılanlar"/>
        <meta name="description" content="Trending News about EYT Emeklilikte Yaşa Takılanlar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>EYT Emeklilikte Yaşa Takılanlar</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/638486764e3fe10aacf7910c.jpg" alt="EYT Emeklilikte Yaşa Takılanlar"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/galeri-eyt-son-durum-emeklilikte-yasa-takilanlar-icin-tazminat-detayi-bakan-bilgin-acikladi-42178499'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT SON GELİŞMELER: Emeklilikte yaşa takılanlar için tazminat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQiT0Dgq8QiRH0nBw0zSGYU3hj8UOUhIi6E6RR7EkRg-RAMXZu-xdv8pBItLrCWMRokj7MMLi-s" alt="EYT SON GELİŞMELER: Emeklilikte yaşa takılanlar için tazminat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhurbaşkanı Erdoğan, Kabine Toplantısının ardından alınan yeni kararları duyurdu. Erdoğan “ Emeklilik için yılını doldurup yaş şartını bekleyenler ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/eyt-son-dakika-haberleri-kabine-toplantisi-ardindan-bekleniyor-eyt-ne-zaman-cikacak-sartlari-neler-kimleri-kapsiyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT SON DURUM: Emeklilikte yaşa takılanlar için EYT ne zaman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLlOEuxVVbhlGgJpg_24OPhlDXWP416NcSWLGZQCahpTs-97Vl0r4I5OS2F55ZTOsFaWkeWITV" alt="EYT SON DURUM: Emeklilikte yaşa takılanlar için EYT ne zaman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Şartlar netleşmeye başladıkça Bakan Bilgin tarafından aktarılmaya devam ediyor. Staj, kıdem tazminatı, prim, yaş, borçlanma gibi konu başlıkları çalışmada öne&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/galeri/eyt-emeklilik-haberleri-eytde-bugun-son-dakika-gelismesi-var-mi-maaslar-ne-kadar-olacak-eyt-ne-zaman-cikacak-kidem-tazminati-durumu-nedir-6863978'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT KIDEM TAZMİNATI-EMEKLİLİK HABERLERİ 2023 || EYT ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSozT-jelz5no9AxMKyNsNZLhzfFAKJZaGt3CGOhHktvjxcAhIe0fcpJMme3okSRNu4TkshwxQy" alt="EYT KIDEM TAZMİNATI-EMEKLİLİK HABERLERİ 2023 || EYT ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>EYT son dakika gelişmeleri milyonlarca kişinin gündeminde bulunuyor. EYT emeklilik haberleri araştırılıyor. Peki EYT ne zaman çıkacak, yaş sınırı var mı,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/eyt-son-dakika-eyt-kadin-erkek-emeklilik-yasi-kac-eyt-son-durum-ne-sartlari-neler-kimleri-kapsiyor-kim-ne-zaman-emekli-olacak-h-3892506'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT SON DAKİKA: EYT kadın erkek emeklilik yaşı kaç? EYT SON ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTUX5d5LKZ3amyZKsMvA38RyDUwNVm18ECdCJ5tEWbdrB668rz6ip2-hfNYsCstvLYUgGTUWwf" alt="EYT SON DAKİKA: EYT kadın erkek emeklilik yaşı kaç? EYT SON ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>EYT son durum: Emeklilik prim gün sayısı, yaş şartı çalışma yılı kaç? Emeklilikte yaşa takılanlar için yapılan çalışmalarda sona gelindi. EYT düzenlemenin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/ekonomi/eyt-son-dakika-haberleri-2022-eyt-ne-zaman-cikacak-kimleri-kapsayacak-son-durum-ne'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT son dakika haberleri 2022... EYT ne zaman çıkacak, kimleri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZI0FjZD17_6nFCWGZrycG8lwK4iyWOXDA7knQrjVBwg99k--1gtWi2jkBpN0_dwVsUcDj0XGu" alt="EYT son dakika haberleri 2022... EYT ne zaman çıkacak, kimleri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emeklilikte yaşa takılanlar EYT&#39;de son durumu araştırmayı sürdürüyor. Gözler olası yeni bir açıklama için bugün Kabine toplantısı sonrasında yapılacak canlı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/ekonomi/is-dunyasindan-eytde-kademeli-gecis-talebi-2006859'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İş dünyasından EYT&#39;de kademeli geçiş talebi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9Cr9f27XOELgN6KAesAznoSVZu9lg8PTLVM85Rfzui6_1xumJQRXPU3wxZj4_5qSgCRwz13ov" alt="İş dünyasından EYT&#39;de kademeli geçiş talebi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emeklilikte Yaşa Takılanlar (EYT) düzenlemesinde sona yaklaşılırken iş dünyası da işgücü ve finansman açısından olumsuz etki yaratmayacak formüllerle ilgili&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/eyt-geri-sayiminda-isverenler-tedirgin-tecrubeli-calisanlar-gidecek-tazminatlar-birikecek-1110387'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT Geri Sayımında İşverenler Tedirgin! Tecrübeli Çalışanlar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKU9tKwrZv1dUNfZ4V6-wZItfcKdmK08_uRifG6hMSUpl6L7NHAGkXHE7ei-gwSL6wKHhDYktWXg" alt="EYT Geri Sayımında İşverenler Tedirgin! Tecrübeli Çalışanlar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emeklilikte Yaşa Takılanlar (EYT) düzenleme beklerken, hükümet tarafından sinyaller veriliyor. Ancak iş dünyası bu konuda çok dertli.</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/eyt-kidem-tazminati-hesaplama-eyt-kidem-tazminati-ne-kadar-nasil-alinir-pesin-mi-taksitle-mi-h-3892514'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT KIDEM TAZMİNATI HESAPLAMA: EYT kıdem tazminatı ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSZ5kC5GEzR_ZYVX8f7bQe4vAdGOvDq_PhXRW4wIHCD3QTcsNBwNNQnWtA-XT2ei7PvkVQnfxv" alt="EYT KIDEM TAZMİNATI HESAPLAMA: EYT kıdem tazminatı ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çalışma ve Sosyal Güvenlik Bakanı Vedat Bilgin, emeklilikte yaşa takılanlar düzenlemesine ilişkin &#39;EYT&#39;de 1999 öncesi 5000 prim gün şartını değiştirmiyoruz&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.itohaber.com/haber/guncel/226422/eyt_formulu_tamam_sira_finansmanda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT formülü tamam sıra finansmanda</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQj49eol8Zai9bW9sMSimUq-QGVZBi_Ohmo1oSEn7LU7vScXEvtsP0dkf47hqBvWUOswhDVirnd" alt="EYT formülü tamam sıra finansmanda" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emeklilikte yaşa takılanlar için yasal düzenleme formülleri hazırlandı. Yıl ve prim günü şartını taşıyanlar, emeklilik için başvurabilecek.</p></div>
            </div>
        </a><a href='https://www.turkiyegazetesi.com.tr/fotogaleri/eyt-ile-emekli-olana-ilk-maas-oncesi-8000-tlye-varan-odeme-eytliye-yeni-yilda-cifte-kazanc-31312'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT ile emekli olana ilk maaş öncesi 8.000 TL&#39;ye varan ödeme! EYT ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7Qhr2stjwqUf_LPkl46m93Hu5dUz7_NEGwZiC6K6AU95BkH1vsoRw9WZ-gQ7HBrj3VcAWduuS" alt="EYT ile emekli olana ilk maaş öncesi 8.000 TL&#39;ye varan ödeme! EYT ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milyonlarca kişi EYT düzenlemesini bekliyor. 2023&#39;ün ilk aylarında çıkacağı düşünülen EYT düzenlemesiyle yaklaşık 1,5 milyon kişi emekli olma hakkı&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}