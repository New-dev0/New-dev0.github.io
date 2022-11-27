import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gönül Dağı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gönül Dağı"/>
        <meta name="description" content="Trending News about Gönül Dağı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gönül Dağı</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/6381cd752269a242e8b5ac41.jpg" alt="Gönül Dağı"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/kelebek/televizyon/bugun-gonul-dagi-dizisi-var-mi-trt-1-yayin-akisi-bilgisi-42177441'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gönül Dağı bu akşam var mı, neden yok? Gönül Dağı yeni bölüm ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrBS_N0lRSuPgNN7sDqZg13kT0GUGaDWXTP_MZuFzUvCx8U27_Cfymq6E3bCiVbL2PuSB8wUeX" alt="Gönül Dağı bu akşam var mı, neden yok? Gönül Dağı yeni bölüm ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bugün Gönül Dağı dizisi var mı sorusu pek çok takipçinin gündeminde yer alıyor. Her hafta Cumartesi akşamları TRT 1 ekranlarında izleyicisiyle buluşan Gönül&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/gonul-dagi-bu-aksam-var-mi-yok-mu-neden-yok-gonul-dagi-yeni-bolum-ne-zaman-26-kasim-trt-1-yayin-akisi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gönül Dağı bugün bu akşam var mı, neden yok? Gönül Dağı yeni ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR63PbYJpMVECwrGeKv-U0qudmmQWdofl62wSLTFjPuWZupjfLNQVJzCVknrGamohENm_7R9wYF" alt="Gönül Dağı bugün bu akşam var mı, neden yok? Gönül Dağı yeni ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her hafta Cumartesi günü ekranlara gelen Gönül Dağı yeni bölüm için sorgulamalar başladı. Dünya Kupası maçları ardından TRT 1 ekranlarında yayınlanan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/trt-1-gonul-dagi-yeni-bolum-neden-yok-gonul-dagi-son-bolumu-ne-zaman-gonul-dagi-neden-final-yapiyor-gonul-dagi-bu-hafta-var-mi-1711065.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRT 1 Gönül Dağı yeni bölüm neden yok? Gönül Dağı son bölümü ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSb5tG5mmcy6tHVhN_y69VvRn6f8FsMJKRk14AhxAQkKqvYdviu-Z_HkpPiSFakcv2INLDwFbEh" alt="TRT 1 Gönül Dağı yeni bölüm neden yok? Gönül Dağı son bölümü ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TRT1 ekranlarının sevilen dizisi Gönül Dağı Her hafta Cumartesi günü ekranlara gelen dizi yeni bölüm için sorgulamalar başladı. Her hafta Cumartesi günü&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/magazin/dizi/gonul-dagi-neden-yok-yeni-bolum-ne-zaman-trt-1-yayin-akisi-26-kasim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gönül Dağı neden yok, yeni bölüm ne zaman? TRT 1 yayın akışı 26 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0nLLmN9sFDOqSHTePbUKvQT78-cyPWFA3kaoX82By68LS5K-h0oWjq5UbXB0MPQCZkLOBiWZt" alt="Gönül Dağı neden yok, yeni bölüm ne zaman? TRT 1 yayın akışı 26 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası 2022 maçları nedeniyle TRT 1 ekranlarında yayınlanan dizilerin durumu araştırılıyor. Sevilen dizi Gönül Dağı&#39;nın yeni bölümünün ne zaman ekrana&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/gonul-dagi-yeni-bolum-ne-zaman-gonul-dagi-bu-aksam-neden-yok-ne-zaman-yayinlanacak-final-mi-yapacak-3542150-magazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gönül Dağı yeni bölüm ne zaman? Gönül Dağı bu akşam neden yok ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQopDusx3LG3RDpKYtNfaqpnS9-2-nfAnPdyCk-JmQ1fRZ3vosC0VB7DEbYpbOxfVB3Z-HBrPe0" alt="Gönül Dağı yeni bölüm ne zaman? Gönül Dağı bu akşam neden yok ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her hafta Cumartesi günü yayınlanan Gönül Dağı dizisi, en son 77.bölümüyle ekrana gelmişti. Ancak dizi, TRT 1&#39;in yayın akışında gözükmüyor.</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/trend/gonul-dagi-bu-aksam-yok-mu-neden-yok-gonul-dagi-yeni-bolum-ne-zaman/haber-1322427'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gönül Dağı yeni bölüm ne zaman&quot; Gönül Dağı bu akşam yok mu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPj0qC9qf2hl149rJ6d3-DJ27rD8_NfpNmpVgssP6k_Z8y_ksWM496JB3s2RnILfG-HISdZR4o" alt="Gönül Dağı yeni bölüm ne zaman&quot; Gönül Dağı bu akşam yok mu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TRT 1&#39;de ekrana gelen dizi Gönül Dağı, cumartesi akşamlarının sevilenleri arasında yerini koruyor. Geniş bir izleyici kitlesi bulanan dizi her hafta farklı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tgrthaber.com.tr/aktuel/gonul-dagi-dizisi-bugun-yok-mu-neden-yok-gonul-dagi-yeni-bolumu-ne-zaman-2856256'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gönül Dağı dizisi bugün yok mu, neden yok? Gönül Dağı yeni ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtLFtyUFeqBsH0nnt-SGp5i1SpgccueDpH_bTxlqL5buzjl6xq2LWAY7XKcqa24sOXYezYdzX3" alt="Gönül Dağı dizisi bugün yok mu, neden yok? Gönül Dağı yeni ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2023 RAMAZAN BAYRAMI TATİLİ KAÇ GÜN? Ramazan ayı her sene 30 gün sürüyor. Ramazan Bayramı ise 3 gün sürüyor. Kurban Bayramı tatili ile Ramazan Bayramı&#39;nın gün&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}