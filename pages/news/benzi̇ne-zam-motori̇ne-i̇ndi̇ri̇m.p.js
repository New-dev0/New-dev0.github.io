import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BENZİNE ZAM MOTORİNE İNDİRİM</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BENZİNE ZAM MOTORİNE İNDİRİM"/>
        <meta name="description" content="Trending News about BENZİNE ZAM MOTORİNE İNDİRİM" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BENZİNE ZAM MOTORİNE İNDİRİM</h1>
            <Image width={800} height={500} src="https://www.memurlar.net/common/news/images/1047735/headline.jpg" alt="BENZİNE ZAM MOTORİNE İNDİRİM"/>
            <h3>Recent News</h3>
            <a href='https://www.memurlar.net/haber/1047735/benzine-zam-motorine-indirim-gelecek.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benzine zam, motorine indirim gelecek</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9xd-CQzYudQ1HlWkTNC5pgjf-1-MRy-h88HmDOVoMib54DYlc_C8B6XW9mIOrJMBT3uflTeQn" alt="Benzine zam, motorine indirim gelecek" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24 Kasım Perşembe gününden itibaren geçerli olmak üzere motorin grubunda 95 Kuruş indirim, benzin grubunda 55 kuruş zam gelecek.</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/motorine-indirim-benzine-zam-1710282.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Motorine indirim benzine zam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkDLrXM5sRVB9JYedS_j2VUXH0axG4xYJiR0j70zX1WzM2za_M_OCPpKkH25D-ICSnriNg8ZNi" alt="Motorine indirim benzine zam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Akaryakıt fiyatlarındaki dalgalanma devam ediyor. Bu gece yarısından itibaren benzine 55 kuruş zam, motorine ise 95 kuruş indirim yapıldı.</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/gundem/benzine-zam-motorine-indirim-geliyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benzine zam, motorine indirim geliyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdBGM0MjzeNae6Z_eJX9lpgDyeQ1Nj7l0BQkS01iZDnywHs4U2hn8Z6LAhj0amgNwUr9-E6lCR" alt="Benzine zam, motorine indirim geliyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24 Kasım Perşembe gününden itibaren geçerli olmak üzere benzinde 55 kuruş zam beklenirken, motorinde ise 95 kuruşluk indirim bekleniyor.</p></div>
            </div>
        </a><a href='https://www.turizmguncel.com/guncelhaber/benzine-zam-motorine-indirim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benzine zam, motorine indirim geliyor | Turizm Güncel - Turizm ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhS8q0iMYqYvzZ6xCdI96U2UgMPy5S5wA-ew7AECQ_QTTxhiVgGUtPrCTHTvfdoMpXRXtLwQSe" alt="Benzine zam, motorine indirim geliyor | Turizm Güncel - Turizm ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Benzinin litre fiyatına zam gelmesi beklenirken motorinin litre fiyatına indirim geleceği tahmin ediliyor. Akaryakıt sektörü temsilcilerinin aktardığına&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}