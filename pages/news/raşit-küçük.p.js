import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Raşit Küçük</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Raşit Küçük"/>
        <meta name="description" content="Trending News about Raşit Küçük" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Raşit Küçük</h1>
            <Image width={800} height={500} src="https://cdnuploads.aa.com.tr/uploads/Contents/2022/11/22/thumbs_b_c_83dbfde1530717dedee105082c79fed4.jpg?v=173756" alt="Raşit Küçük"/>
            <h3>Recent News</h3>
            <a href='https://www.aa.com.tr/tr/gundem/ilahiyatci-prof-dr-rasit-kucuk-son-yolculuguna-ugurlandi/2745332'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İlahiyatçı Prof. Dr. Raşit Küçük son yolculuğuna uğurlandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxD0eMOzyj1PJkiZXTZjzdI3ZPo9p9cUkON3RKdcdWyDxki1FsJmXSWf72jlM1ZWhgBtELHSfe" alt="İlahiyatçı Prof. Dr. Raşit Küçük son yolculuğuna uğurlandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kanser tedavisi gördüğü hastanede 76 yaşında hayatını kaybeden ilahiyatçı Prof. Dr. Raşit Küçük, son yolculuğuna uğurlandı. - Anadolu Ajansı.</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/gundem/hadis-ve-siyer-limi-prof-dr-rasit-kucuk-hakka-ugurlandi-3891461'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hadis ve siyer âlimi Prof. Dr. Raşit Küçük Hakk&#39;a uğurlandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTi5avyXc9zhKgBhNnPPcWgvkCWwmx1AyDP0VYPDrhr0c6-B2CeSp3LwPXfFejErsYcOdvQnLAc" alt="Hadis ve siyer âlimi Prof. Dr. Raşit Küçük Hakk&#39;a uğurlandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Din İşleri Yüksek Kurulu Eski Başkanı ilahiyatçı Prof. Dr. Raşit Küçük, kanser tedavisi gördüğü hastanede vefat etti. Cumhurbaşkanı Recep Tayyip Erdoğan,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/galeri/rasit-kucuk-kimdir-neden-oldu-prof-dr-rasit-kucuk-hayati-ve-kariyeri-6861041'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RAŞİT KÜÇÜK KİMDİR? Prof. Dr. Raşit Küçük neden öldü? Hayatı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfPknlw_Afc33ETF3vUMVlMb18KrijEbTXbHaek0rCR-pQwwlnXBfJLqJQW5PpSF9hPHzGU7TS" alt="RAŞİT KÜÇÜK KİMDİR? Prof. Dr. Raşit Küçük neden öldü? Hayatı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marmara Üniversitesi İlahiyat Fakültesi Öğretim Üyesi Prof. Dr. Raşit Küçük hayatını kaybetti. Din İşleri Yüksek Kurulu Eski Başkanı olan Raşit Küçük&#39;ün&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/son-dakika-ilahiyatci-prof-dr-rasit-kucuk-vefat-etti-3540821'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: İlahiyatçı Prof. Dr. Raşit Küçük vefat etti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlzhnbq8bL-GOYfFItTIxMQ2bSaQk8kcXd63WfRnFmettOEFEXW_cCYIEdFdsMH-qoC94-ThnY" alt="Son dakika: İlahiyatçı Prof. Dr. Raşit Küçük vefat etti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mertoğlu, Prof. Dr. Küçük için Fatih Camisi&#39;nde bugün ikindi vaktinde cenaze namazı kılınacağını belirtti. Küçük, Marmara Üniversitesi İlahiyat Fakültesi&#39;nde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/gundem/din-isleri-yuksek-kurulu-eski-baskani-rasit-kucuk-hayatini-kaybetti-725149.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Din İşleri Yüksek Kurulu Eski Başkanı Raşit Küçük hayatını kaybetti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDWC9HvwszWSNuUCNFIHCKpS15ByKfge8FnZeODaa8T6kqDKez05wv5l-F4IXXaOqW9MaS6dzm" alt="Din İşleri Yüksek Kurulu Eski Başkanı Raşit Küçük hayatını kaybetti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Damadı Suat Mertoğlu, yaklaşık 3 yıldır kanser tedavisi gören 76 yaşındaki Prof. Dr. Küçük&#39;ün, tedavi gördüğü hastanede vefat ettiğini söyledi. Mertoğlu, Prof.</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/gundem/prof-dr-rasit-kucuk-kimdir-din-isleri-yuksek-kurulu-eski-baskani-prof-dr-rasit-kucuk-neden-vefat-etti-hastaligi-neydi-2587144'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prof. Dr. Raşit Küçük kimdir? Din İşleri Yüksek Kurulu Eski Başkanı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTe1xJ_Ldo0W7Tz9en9B6boPerC3vL_m4LSUOysXCk1-hS1bF8NzG9H24H25bvCKG4i63Go_XMj" alt="Prof. Dr. Raşit Küçük kimdir? Din İşleri Yüksek Kurulu Eski Başkanı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gündem Haberleri - Din İşleri Yüksek Kurulu Eski Başkanı Prof. Dr. Raşit Küçük tedavi gördüğü hastanede hayatını kaybetti. Birçok vakıf, dernek ve sivil&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}