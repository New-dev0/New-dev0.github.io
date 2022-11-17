import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sezai Karakoç</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sezai Karakoç"/>
        <meta name="description" content="Trending News about Sezai Karakoç" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sezai Karakoç</h1>
            <Image width={800} height={500} src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1698000/sezai-karakoc-aa-1699034.jpg" alt="Sezai Karakoç"/>
            <h3>Recent News</h3>
            <a href='https://www.trthaber.com/haber/kultur-sanat/dirilis-sairi-sezai-karakoc-724059.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diriliş şairi: Sezai Karakoç</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVkyGvPTjrRhsVrfdZu5i-g0cQMItYOLEOTGpJcEnxC-go03By_PmDAmS_-T0voZBxrucKw-P2" alt="Diriliş şairi: Sezai Karakoç" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Şair ve düşünür Sezai Karakoç&#39;un ebediyete irtihalinin üzerinden bir yıl geçti. Karakteri, düşünceleri ve eserleriyle edebiyatımızın önemli isimleri&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/bilgi-rehberi/sezai-karakoc-kimdir-sezai-karakoc-ne-zaman-ve-neden-oldu-iste-siirleri-ve-eserleri-6858028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SEZAİ KARAKOÇ şiirleri ve eserleri &amp; Sezai Karakoç kimdir, ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT20OdsJmPs9cqdqxVkXJlIa9FiKAorxx2cHtv1myMbJTrVmakbBCCnfe7E_NoAB57SFkkxTbFB" alt="SEZAİ KARAKOÇ şiirleri ve eserleri &amp; Sezai Karakoç kimdir, ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sezai Karakoç 22 Ocak 1933 yılında Diyarbakır Ergani&#39;de dünyaya geldi. Lisans eğitimini Siyasal Bilgiler Fakültesi Maliye Bölümü&#39;nden mezun olarak tamamladı.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/sezai-karakoc-siirleri-olumunun-1-yildonumunde-aniliyor-iste-sair-sezai-karakoc-sozleri-ve-eserleri'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Şair Sezai Karakoç sözleri, eserleri ve hayatı | Sezai Karakoç şiirleri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSw83ZQZsfKbU9s5tZUO-p-wR6mZYLbWC7YG_GTmbO_xcNPoesxG6Z5HqJ8aeCpyKq63l3BcdOg" alt="Şair Sezai Karakoç sözleri, eserleri ve hayatı | Sezai Karakoç şiirleri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sezai Karakoç şiirleri arasında Mona Roza, Şahdamar, Gül Muştusu gibi eserler yer alıyor. Tanzimat sonrası kaybolan metafizik şiiri yeniden yorumlayan ünlü şair&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/sanat/sair-yazar-ve-fikir-adami-sezai-karakoc-olum-yil-donumunde-kendi-sozleriyle-aniliyor-iste-sezai-karakocun-en-cok-paylasilan-sozleri,9Jo4teT_wECI0Z9Z4AkGUg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Şair, yazar ve fikir adamı Sezai Karakoç ölüm yıl dönümünde kendi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjzbmD-Nn28fjhR4dywAzAjl-I5r-HPN-jHqv8cCFvAsAsQ8soMnKr-2R1kUV5wPiAakVfHgMe" alt="Şair, yazar ve fikir adamı Sezai Karakoç ölüm yıl dönümünde kendi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henüz çocuk yaşlarda okuma aşkı başlayan Sezai Karakoç, 1950&#39;li yıllarda kaleme aldığı ve Türk edebiyatının sevilen şiirlerinden biri haline gelen &quot;Mona&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/sezai-karakoc-kimdir-sezai-karakoc-un-olum-yildonumu-ne-zamandir-1107505'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sezai Karakoç Kimdir? Sezai Karakoç&#39;un Ölüm Yıl Dönümü Ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7pEMSQUafz9z2buT-p0Kgw3oIWbmxtZSDsRZoz0snVeXSph_v7SybCSJ3Qhq1cDnsi7JXbpgw" alt="Sezai Karakoç Kimdir? Sezai Karakoç&#39;un Ölüm Yıl Dönümü Ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sezai Karakoç&#39;un aramızdan ayrılışının yıl dönümü. Mona Roza şiiriyle akıllara kazınan bu ünlü şair kimdir? Ölüm sebebi nedir? Detayları haberimizde.</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/gundem/cumhurbaskani-erdogandan-sezai-karakoc-icin-anma-mesaji/2739790'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cumhurbaşkanı Erdoğan&#39;dan Sezai Karakoç için anma mesajı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmK94IDRWMRCzP265mjtDfRKmmwE3jQJte4bKprA_cES92U92UKJMVNY-sVMINpmhindgVU23p" alt="Cumhurbaşkanı Erdoğan&#39;dan Sezai Karakoç için anma mesajı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhurbaşkanı Recep Tayyip Erdoğan, 16 Kasım 2021&#39;de vefat eden şair, yazar ve fikir insanı Sezai Karakoç&#39;u andı. - Anadolu Ajansı.</p></div>
            </div>
        </a>
        </Template></>;
}