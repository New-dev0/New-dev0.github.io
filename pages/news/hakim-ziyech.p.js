import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hakim Ziyech</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hakim Ziyech"/>
        <meta name="description" content="Trending News about Hakim Ziyech" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hakim Ziyech</h1>
            <Image width={800} height={500} src="https://icdn.ensonhaber.com/resimler/diger//kok/2022/11/16/IMG20221116112942.jpg" alt="Hakim Ziyech"/>
            <h3>Recent News</h3>
            <a href='https://www.ensonhaber.com/kralspor/transfer-dosyasi/hakim-ziyech-besiktasa-onerildi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakim Ziyech, Beşiktaşa önerildi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoqNHgoIno9LZv_9JgAWT8Qc7qQ2Rjpg8UBcBrx8HpF3-ei580gQhZpUTbHByEh-FBUvLUtPmZ" alt="Hakim Ziyech, Beşiktaşa önerildi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Transfer çalışmalarını sürdüren Beşiktaş için Chelsea&#39;nin yıldızı Hakim Ziyech ihtimali doğdu. Faslı oyuncunun menajeri, siyah-beyazlılarla iletişime geçti.</p></div>
            </div>
        </a><a href='https://www.sondakika.com/spor/haber-besiktas-ara-transfer-doneminde-super-lig-15432185/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünyanın konuşacağı transfer! Süper Lig devi Hakim Ziyech&#39;i istiyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS996ci--KiTrgVGMeSwQL-ao0KzVFwwDjyIW4KmC2zi9WLmFfmIKCYKg32wWoDjaJLIYK9Rssh" alt="Dünyanın konuşacağı transfer! Süper Lig devi Hakim Ziyech&#39;i istiyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ara transfer döneminde Süper Lig&#39;e damga vuracak bir transfer operasyonu için harekete geçen Beşiktaş, Chelsea&#39;nin dünyaca ünlü futbolcusu Hakim Ziyech&#39;i&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotospor.com/besiktas/hakim-ziyech-icin-20-milyon-euro-luk-teklif-hazir-539797'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hakim Ziyech için 20 milyon Euro&#39;luk teklif hazır</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8jwyl9p8_5OOB7hw3FFpj9HSQKjgETDum9quqTCs36Oh8Zw0rAcqCrOp1pk9LHWKIioJabl5H" alt="Hakim Ziyech için 20 milyon Euro&#39;luk teklif hazır" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beşiktaş ile adı anılan ve Chelsea&#39;de gözden çıkarılan isimler arasında gösterilen Hakim Ziyech ile İtalya Serie A ekiplerinden...</p></div>
            </div>
        </a><a href='https://www.medyatava.com/haber/besiktas-transferde-buyuk-oynuyor-premier-lig-devi-chelseade-forma-giyen-hakim-ziyech-transfer-listesinde_279985'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş transferde büyük oynuyor! Premier Lig devi Chelsea&#39;de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT37aDgNCYN1SKy4jDC-rUhcT_mGwvZYkG2PIUrkCZTiDbGMnzYVZ_FEpGXACfbEiA7JMxlCzuV" alt="Beşiktaş transferde büyük oynuyor! Premier Lig devi Chelsea&#39;de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ara transfer döneminde takıma önemli takviyeler yapmak isteyen Beşiktaş, Faslı yıldız Hakim Ziyech&#39;i gündemine aldı.</p></div>
            </div>
        </a><a href='https://www.haberport.com/besiktas-transferde-bombayi-patlatacak-menajerler-araciligiyla-chelseali-yildiz-hakim-ziyech-onerildi/85674/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş transferde bombayı patlatacak! Menajerler aracılığıyla ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREOYF0tb5AJABKGWUWbWGgC4IjNaNmyNgHDHtgM5NZ5zEnHKyflhC0bQE4DNyJYP7tULNGsL4u" alt="Beşiktaş transferde bombayı patlatacak! Menajerler aracılığıyla ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beşiktaş&#39;a Ocak ayında başlayacak olan ara transfer dönemi öncesinde menajerler aracılığıyla Chelsea&#39;nin yıldız isimlerinden Hakim Ziyech&#39;in önerildiği...</p></div>
            </div>
        </a><a href='https://www.milligazete.com.tr/haber/12555820/besiktasa-premier-ligden-bir-dunya-yildizi-daha-geliyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktas&#39;a Premier Lig&#39;den bir Dünya yıldızı daha geliyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNKFDhd8ziOkVIJ_X4XyHlSGIEOYj4l9rbuYTYd0sbBh5Xcy3rqEtT3U6WBWsIouqpAhxTSIyu" alt="Beşiktas&#39;a Premier Lig&#39;den bir Dünya yıldızı daha geliyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kara Kartal&#39;da hedef Hakim Ziyech! Fanatik Gazetesi&#39;nde yer alan habere göre; Beşiktaş&#39;a menajerler aracılığıyla Chelsea&#39;nin yıldızı Hakim Ziyech&#39;in önerildiği&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}