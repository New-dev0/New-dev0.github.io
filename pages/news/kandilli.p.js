import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kandilli</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kandilli"/>
        <meta name="description" content="Trending News about Kandilli" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kandilli</h1>
            <Image width={800} height={500} src="https://img-s3.onedio.com/id-6377324fa4204cb24147ee48/rev-0/raw/s-59327fd8653e540d81d46a19995594fb1cc4ffc8.jpg" alt="Kandilli"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/son-dakika-mugla-da-korkutan-deprem-iste-kandilli-rasathanesi-ve-afad-son-depremler-sayfasi-1108029'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: Muğla&#39;da Korkutan Deprem! İşte Kandilli Rasathanesi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyFwm0fsiifdrFiIcQ-YtwAfy363uviY2jJUiB0k0W4LZ10BxFpBOibNfpY16Kl0NyBDot-IWE" alt="Son Dakika: Muğla&#39;da Korkutan Deprem! İşte Kandilli Rasathanesi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ülkemiz aktif fay hatları üzerinde bulunduğundan dolayı irili ufaklı pek çok deprem meydana geliyor. AFAD ve Kandilli Rasathanesi ise yaşanan depremleri&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/bilgi-rehberi/deprem-mi-oldu-17-kasim-kandilli-rasathanesi-son-depremler-listesi-6858516'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MUĞLA&#39;DA DEPREM Mİ OLDU! En son nerede kaç şiddetinde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-OrpGuxubQL-KfXmsEUz-5YS6tiOqBS7QLO9ClS2Jp3L4NAmMOCRcs9sxzrLCGn0vbr0oJjfR" alt="MUĞLA&#39;DA DEPREM Mİ OLDU! En son nerede kaç şiddetinde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ülkemizde meydana gelen son depremlere ilişkin veriler Kandilli Rasathanesi ve AFAD tarafından paylaşılıyor. İşte son depremler listesi...</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/gundem/deprem-mi-oldu-nerede-kac-siddetinde-18-kasim-afad-ve-kandilli-rasathanesi-son-depremler-listesi-2586358'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deprem mi oldu, nerede, kaç şiddetinde? 18 Kasım AFAD ve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4gYzM2DKSggwOfdM7MWlLo8VVNopFET9vsnr5Guak8O3kIx3PECgSe_UorawPtIJv9hz1Azz1" alt="Deprem mi oldu, nerede, kaç şiddetinde? 18 Kasım AFAD ve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Güncel Gündem Haberleri - Birçok kişi internette son depremler hakkında araştırma yapıyor. Kandilli Rasathanesi ve Deprem Araştırma Enstitüsü Türkiye ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/bilgi/galeri-son-depremler-deprem-mi-oldu-18-kasim-kandilli-rasathanesi-son-dakika-aciklamasi-42172748'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Muğla&#39;da son dakika deprem mi oldu, en son nerede ve ne zaman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpIrERRs7rFoGtT49J-dlIoyRptdxC27YaOPP2_3YgXWxxB9-z30J3Gj6Q8o1KQKCgGuRNDF-u" alt="Muğla&#39;da son dakika deprem mi oldu, en son nerede ve ne zaman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Muğla son dakika depremi AFAD ve Kandilli Rasathanesi verilerine yansıdı. AFAD&#39;dan alınan bilgiye göre Muğla Datça&#39;da 4.1 büyüklüğünde deprem meydana geldi.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/yasam/deprem-mi-oldu-nerede-kac-siddetinde-17-kasim-afad-ve-kandilli-rasathanesi-son-depremler-listesi-6243365'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deprem mi oldu, nerede, kaç şiddetinde? 17 Kasım AFAD ve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKSvQq1IZDHm10mYcOId1b_XTsnmUTyCyBI5a7EOIOWl2vXxFsJanZnAejptmdCvhcBmFSXT00" alt="Deprem mi oldu, nerede, kaç şiddetinde? 17 Kasım AFAD ve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En son depremlere ilişkin bilgiler merak konusu olarak 17 Kasım AFAD ve Kandilli Rasathanesi son depremler listesi verilerine erişilmek istenerek deprem mi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/deprem-mi-oldu-17-kasim-nerede-deprem-oldu-afad-kandilli-rasathanesi-3539488'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deprem mi oldu 17 Kasım? Nerede deprem oldu, kaç şiddetinde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqPdsOMsj46gfKnVB5aazQdcBrHKoBBAz53W-Y6DUIUUwd3s6S-5nCZTMb2ax85YeQUmY46glx" alt="Deprem mi oldu 17 Kasım? Nerede deprem oldu, kaç şiddetinde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yurt genelinde yaşanan son depremler Kandilli Rasathanesi ve AFAD tarafından listelenmeye devam ediyor. Geçtiğimiz hafta İzmir&#39;de meydana gelen deprem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/gundem/deprem-mi-oldu-18-kasim-cuma-gunu-nerede-deprem-oldu-afad-ve-kandilli-son-depremler-listesi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deprem mi oldu? 18 Kasım Cuma günü nerede deprem oldu? AFAD ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTilchti-WJIblS1F0vDxCRrvqRN4Dw51qFFmKB8t-HUY-eaVOfTzFh1BATDzmRcOV5vAxk6-19" alt="Deprem mi oldu? 18 Kasım Cuma günü nerede deprem oldu? AFAD ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vatandaşlar tarafından &quot;Deprem mi oldu?&quot; sorusu merak ediliyor. Gün içinde sallantı hisseden vatandaşlar AFAD ve Kandilli Rasathanesi tarafından her gün&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}