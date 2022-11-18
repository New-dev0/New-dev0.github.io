import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Deprem son dakika</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Deprem son dakika"/>
        <meta name="description" content="Trending News about Deprem son dakika" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Deprem son dakika</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/VfjnqZSomEuNiWHewj1vGA.jpg?width=1080&mode=crop&scale=both" alt="Deprem son dakika"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/turkiye/nerede-deprem-oldu-yasanan-son-artcilari-afad-paylasti-iste-son-depremlerin-detaylari,uiCMwvFMYUS_-T-O29qViw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aydın ve Muğla&#39;da deprem: 17 Kasım tarihli son depremler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaWZ8G52pSDIH169vcuE1R_EZ3i4egfjpiuAjx545fTXskv3HsmxiFm_q8-p4CPJFFNfNY--F9" alt="Aydın ve Muğla&#39;da deprem: 17 Kasım tarihli son depremler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Denizli ve Bitlis&#39;te meydana gelen sarsıntılar ardından Muğla ve Aydın da sallandı. Sarsıntıyı hisseden vatandaşlar, AFAD tarafından paylaşılan deprem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/galeri/son-depremler-kandilli-bugun-deprem-mi-oldu-en-son-nerede-kac-siddetinde-deprem-oldu-15-kasim-6857377'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DEPREMLER KANDİLLİ 17 Kasım: Az önce deprem mi oldu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSfHwu89i4GZIeF_jS-NmgOlKTfRqvNQ-Ye5oK5BfXBmqDL6P8IO252Jg7a6fuS0IGV8wangkL" alt="SON DEPREMLER KANDİLLİ 17 Kasım: Az önce deprem mi oldu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika depremler listesi Kandilli Rasathanesi tarafından güncellenmeye devam ediyor. Türkiye ve yakın çevresinde meydana gelen son depremler hangi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/yasam/son-dakika-denizlide-deprem-meydana-geldi-cevre-illerde-de-hissedildi-afad-ve-kandilli-rasathanesi-son-depremler-listesi-6242184'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA Denizli&#39;de deprem oldu! Çevre illerde de hissedildi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8CVvb6aGX2N8t_s5TN99nLSQ-vCy3NnPFWU0w-URZPWk7wfmDixCpZT_UkAQNYZ07GGjegFAS" alt="SON DAKİKA Denizli&#39;de deprem oldu! Çevre illerde de hissedildi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AFAD ve Kandilli Rasathanesi son depremler listesi verilerine göre Denizli&#39;de 3.2 şiddetinde bir deprem meydana geldi. Sarsıntıları hisseden ve Denizli&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/son-dakika-deprem-bugun-deprem-oldu-mu-az-once-deprem-nerede-oldu-mersinde-deprem-oldu-mu-istanbulda-deprem-mi-oldu-simdi-bugun-deprem-nerede-oldu-kac-siddetinde-1708388.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika deprem: Bugün deprem oldu mu? Az önce deprem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQV1GgXrqkfQOHckJnlQ41xFJcJjkCn3nu1LSsd9W7M285899oimb_CRNAHSB4sppt9PhWcBepj" alt="Son dakika deprem: Bugün deprem oldu mu? Az önce deprem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AFAD&#39;ın internet sitesinde yer alan bilgiye göre, deprem saat 02.57&#39;de 7 kilometre derinlikle gerçekleşti. Kandilli Rasathanesi&#39;nin son depremler listesinde ise&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/turkiye/deprem-mi-oldu-afad-ve-kandilli-son-depremler-listesi-17-kasim-2022-persembe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haberler... Deprem mi oldu? AFAD ve Kandilli son depremler listesi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTTuY-cXGSrQc31XZhzLX-1WRyZuZOE9R183tPjb6_G9Cml8JhigYxURv1AFMJSL5xIwFcD5Uws" alt="Haberler... Deprem mi oldu? AFAD ve Kandilli son depremler listesi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17 Kasım 2022 Perşembe günü meydana gelen son depremler Kandilli Rasathanesi ile AFAD son depremler listesi içerisinde paylaşıldı.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/son-dakika-denizli-de-korkutan-deprem-iste-afad-ve-kandilli-rasathanesi-son-depremler-sayfasi-1107664'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: Denizli&#39;de Korkutan Deprem! İşte AFAD ve Kandilli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmp1EwncaQBZ3vjyOhP8DypRwotoJ7afIEgMm1PymMnzhxW9Qbnmr_RVH9S4IKcWUqS8BiUHZR" alt="Son Dakika: Denizli&#39;de Korkutan Deprem! İşte AFAD ve Kandilli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye; Kuzey Anadolu Fay Hattı, Batı Anadolu Fay Hattı ve Doğu Anadolu Fay Hattı üzerinde yer aldığı için pek çok bölgede irili ufaklı depremler yaşanıyor&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/bilgi/son-dakika-depremler-en-son-ne-zaman-ve-nerede-deprem-oldu-17-kasim-kandilli-son-depremler-listesi-42172136'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA DEPREMLER: En son ne zaman ve nerede deprem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRP_Um0cr7yrS41MlFecz6VtnZeY1-0NCS5k9-NI7uOt3jF16gB7grxshh70YM53aVTdTPAZjfv" alt="SON DAKİKA DEPREMLER: En son ne zaman ve nerede deprem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye son dakika depremler listesi Kandilli ve AFAD tarafından güncelleniyor. Ülkemizin çeşitli bölgelerinden deprem haberleri gelmeye devam ediyor.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/denizlide-3-2-siddetinde-deprem-meydana-geldi-42172018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizli&#39;de 3.2 büyüklüğünde deprem meydana geldi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvkL46CXkVNXuQJySqZuRI2695pkI1sjGOfIFCXjPT_2fI8VfgDwsyOXCtkCK5KDPY_Nb02GmG" alt="Denizli&#39;de 3.2 büyüklüğünde deprem meydana geldi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Dakika Haberler - Denizli&#39;de merkez üssü Pamukkale ilçesinde 3.2 büyüklüğünde orta şiddetli bir deprem meydana geldi. Herhangi bir can ve mal kaybının&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/turkiye/denizlide-3-2-siddetinde-deprem'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denizli&#39;de 3.2 şiddetinde deprem</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTl6Rj7d-nUUhC1O7KMxvgyMNh6RXiB5Aj6SWW5dHFsenE-C_WiU2OzqASCVfdEGBfsIPVU1-4b" alt="Denizli&#39;de 3.2 şiddetinde deprem" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Denizli&#39;de merkez üssü Pamukkale ilçesinde 3.2 büyüklüğünde orta şiddetli bir deprem meydana geldi.</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/osmaniye-de-deprem-mi-oldu-son-dakika-osmaniye-15434194-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Osmaniye&#39;de deprem mi oldu! Son dakika Osmaniye deprem şiddeti ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJkcCkpNpYlibiRxKnpWwK2tSDRCuAVDGmU6P2_btXqGB9ZucxypITlvhzkc4FP9aBaR-BpE36" alt="Osmaniye&#39;de deprem mi oldu! Son dakika Osmaniye deprem şiddeti ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17 Kasım Perşembe günü sabah saatlerinde Osmaniye (Düziçi) merkezli yaşanan depremin ardından vatandaşlar, anlık deprem verilerini merak ediyor.</p></div>
            </div>
        </a>
        </Template></>;
}