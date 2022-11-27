import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ayşe Özkiraz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ayşe Özkiraz"/>
        <meta name="description" content="Trending News about Ayşe Özkiraz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ayşe Özkiraz</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/65Vi3bK57Uau1nwYS9RO1Q.jpg?width=1080&mode=crop&scale=both" alt="Ayşe Özkiraz"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/galeri/turkiye/sahte-doktor-ayse-ozkirazin-ifadesi-ortaya-cikti,TyT0U54K9kCazdsUmJqrIQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte doktor Ayşe Özkiraz&#39;ın ifadesi ortaya çıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQeTqNdocKxtV9ZITncwIq80xTCtwM4Lir7c_savbCXxHaog-S1PzRlDq4tPxeTpUzMm97HSXA" alt="Sahte doktor Ayşe Özkiraz&#39;ın ifadesi ortaya çıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ&#39;da Çerkezköy Devlet Hastanesi&#39;nde sahte doktorluk yaptığı gerekçesiyle gözaltına alındıktan sonra tutuklanan Ayşe Özkiraz&#39;ın ifadesi ortaya çıktı.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/cerkezkoy-devlet-hastanesinde-1-yildir-gorev-yapan-sahte-doktor-tutuklandi-2006206'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Çerkezköy Devlet Hastanesi&#39;nde 1 yıldır görev yapan sahte doktor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQsmylz14YLHG8ZI9uiTc_9uFkTOtb9KdwCTDJDsuGmMJu7jQL9RB9YG5ISoShd4AoAcWCYcj93" alt="Çerkezköy Devlet Hastanesi&#39;nde 1 yıldır görev yapan sahte doktor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çocuk doktoru olarak kaşeler bastıran Özkiraz&#39;ın durumundan şüphelenen hastanedeki doktorlar, kendisine tıpla ilgili çeşitli sorular yöneltti. Çapa Tıp&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/sahte-doktordan-savcilikta-ilk-ifade-yasi-bile-yalan-cikti-42177774'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Sahte doktor&#39;dan savcılıkta ilk ifade... Ameliyata girdi, dikiş attı! Yaşı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZoUARX6cJd21V3hszxEuwH4JzK5AfYoKyxm1QqSpdzG-5eUyPp_72-t9s7lzHi1HRuxqxEqpB" alt="&#39;Sahte doktor&#39;dan savcılıkta ilk ifade... Ameliyata girdi, dikiş attı! Yaşı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çerkezköy Devlet Hastanesi&#39;nde yaklaşık 1 yıldır kendisini pratisyen hekim olarak tanıtan Ayşe Özkiraz&#39;ın sahte doktor olduğu ortaya çıkmıştı.</p></div>
            </div>
        </a><a href='https://www.gazetevatan.com/gundem/ayse-ozkiraz-kimdir-sahte-doktor-tutuklandi-mi-cerkezkoy-devlet-hastanesi-sahte-doktor-ayse-ozkiraz-olayi-nedir-2071387'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ayşe Özkiraz kimdir, Sahte doktor tutuklandı mı? Çerkezköy Devlet ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0swo_g6hjMbLg7DclIdEIyEvVs-bZu0J_2t-QTjRrr-HhyNIUsiWPeRUatwERwMohIUevgQXb" alt="Ayşe Özkiraz kimdir, Sahte doktor tutuklandı mı? Çerkezköy Devlet ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Dakika Gündem Haberleri - Tekirdağ&#39;ın Çerkezköy ilçesi Devlet Hastanesi&#39;nde yaklaşık 1 yıldır pratisyen hekim olarak görev yapan Ayşe Özkiraz&#39;ın (25)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/sahte-doktor-ayse-ozkirazin-ifadeleri-ortaya-cikti-her-sey-ailesine-yalan-soylemekle-baslamis-601723h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte doktor Ayşe Özkiraz&#39;ın ifadeleri ortaya çıktı. Her şey ailesine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzT2FQBCoX_oBgpRmutz5I2wVX-BrvSs1Xm52_L1xHMe2IyFryoLJ-uObUp6rNKjAtz-oQkfgO" alt="Sahte doktor Ayşe Özkiraz&#39;ın ifadeleri ortaya çıktı. Her şey ailesine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ Çerkezköy Devlet Hastanesinde sahte doktorluk yaptığı gerekçesiyle gözaltına alındıktan sonra tutuklanan genç kadının ameliyat masasında fotoğrafı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/sahte-doktor-ayse-ozkiraz-unlu-anketci-kemal-ozkiraz-in-akrabasi-cikti-tip-kazandigini-duyunca-mutlu-olmustuk-110107073866'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte doktor Ayşe Özkiraz ünlü anketçi Kemal Özkiraz&#39;ın akrabası ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSmmxRlu4EwRDesxgxTaJwo8F1bSnznRz2g0GAkKrevrxCDKBpwv9PPyktdDgk2MOwQ2AGTZJm" alt="Sahte doktor Ayşe Özkiraz ünlü anketçi Kemal Özkiraz&#39;ın akrabası ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ&#39;ın Çerkezköy ilçesinde bir yıldır kendini pratisyen hekim olarak tanıtan ve eylül ayındaki Tıpta Uzmanlık Sınavı&#39;ndan 81 puan aldığını iddia eden&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu18.com/sahte-doktor-ayse-ozkiraz-herseyi-anlatti-39000h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Sahte doktor&quot; Ayşe Özkiraz herşeyi anlattı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTwdG91oz-yvhSxV0chkBv4Q2RQ7y5p3N0Duw_-FKjuXJzOVwEtKt8pbPfNGvS1NlpudtX97jDh" alt="&quot;Sahte doktor&quot; Ayşe Özkiraz herşeyi anlattı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ Çerkezköy Devlet Hastanesi&#39;nde kendisini pratisyen hekim olarak tanıtan ve diğer doktorların şüphelenip, şikayette bulunmasıyla gözaltına&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}