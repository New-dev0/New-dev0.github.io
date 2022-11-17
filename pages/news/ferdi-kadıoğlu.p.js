import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ferdi Kadıoğlu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ferdi Kadıoğlu"/>
        <meta name="description" content="Trending News about Ferdi Kadıoğlu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ferdi Kadıoğlu</h1>
            <Image width={800} height={500} src="https://iaftm.tmgrup.com.tr/60e1d9/632/314/0/3/800/400?u=https://iftm.tmgrup.com.tr/2022/11/16/a-milli-futbol-takiminda-ferdi-kadioglu-sakatlik-gecirdi-1668620741313.jpeg" alt="Ferdi Kadıoğlu"/>
            <h3>Recent News</h3>
            <a href='https://www.fotomac.com.tr/millitakim/2022/11/16/a-milli-futbol-takiminda-ferdi-kadioglu-sakatlik-gecirdi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Milli Futbol Takımı&#39;nda Ferdi Kadıoğlu sakatlık geçirdi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgbDJEEfd9M1wnCS778g680Sb1pnX9lzcOZo4da1ry0IWDwaNCYNa13I_V9fSpqBs5BRBC73EW" alt="A Milli Futbol Takımı&#39;nda Ferdi Kadıoğlu sakatlık geçirdi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası arası hazırlık maçında A Milli Futbol Takımımız, Diyarbakır&#39;da İskoçya ile karşı karşıya geliyor. Karşılaşmanın 32. dakikasında Fenerbahçe&#39;nin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/ferdi-kadioglu-sakatlandi-oyuna-devam-edemedi-2310185'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ferdi Kadıoğlu sakatlandı! Oyuna devam edemedi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxDFIv8vbdRTEFTL57rE6oVLywjwXiJYu6RXLXXbN1kICohJ8aONPi8vQLKBv7CXyUGKNGDl4a" alt="Ferdi Kadıoğlu sakatlandı! Oyuna devam edemedi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bu sezon Fenerbahçe formasıyla gösterdiği performansla dikkatleri üzerine çeken başarılı oyuncu için Süper Lig &#39;de son oynanan Giresunspor maçına Serie A&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/futbol/ferdi-kadioglu-iskocya-macinda-sakatlandi-7483839/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ferdi Kadıoğlu, İskoçya maçında sakatlandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQIncBktarcMxwqPe3mW-9iZouvqXq9qdcdM2FLLnQr2pDvAjaDXpXGi4zcSuqNgYYBsNnJuDhv" alt="Ferdi Kadıoğlu, İskoçya maçında sakatlandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ferdi Kadıoğlu, İskoçya maçında sakatlandı - Fenerbahçe&#39;nin başarılı futbolcusu Ferdi Kadıoğlu, A Milli Futbol Takımı&#39;nın İskoçya ile oynadığı hazırlık&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/futbol/ferdi-kadioglu-maci-tamamlayamadi-ferdi-kadioglunun-durumu-nasil'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ferdi Kadıoğlu maçı tamamlayamadı! Ferdi Kadıoğlunun durumu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAGPWvjZiuhyH-gM4aq5V73j7T2sBYCymuAO-bOe2PsZaduMk-_w7ke7QByml9QKIpqsUBzcq-" alt="Ferdi Kadıoğlu maçı tamamlayamadı! Ferdi Kadıoğlunun durumu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası arası hazırlık maçında A Milli Futbol Takımımız, Diyarbakır&#39;da İskoçya ile karşı karşıya geldi. Ferdi Kadıoğlu ise sakatlandı ve devam edemedi.</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/skorer/a-milli-takimda-ferdi-kadioglu-soku-6858388'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Milli Takım&#39;da Ferdi Kadıoğlu şoku!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKfd6It0Gu-pYZAptWhA_ZdoAhjanXfYwx0ciV0v4kxRaajbu1auWItWRNmkoztBfP0jqdCKJn" alt="A Milli Takım&#39;da Ferdi Kadıoğlu şoku!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahçe&#39;nin genç yıldızı Ferdi Kadıoğlu ise karşılaşmanın 34. dakikasında sakatlık geçirdi. Stefan Kuntz, Ferdi Kadıoğlu&#39;nu riske etmeyerek genç yıldızn&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/ferdi-kadioglu-sakatlik-son-durumu-ferdi-15433756-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ferdi Kadıoğlu sakatlık son durumu! Ferdi Kadıoğlu ne zaman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQXNVmMefB2LOrfE4y7E67xdgBkXyzqrdlE-G9nXgop5LkMPcB6On16Lw8-vdOLsyhOGMK_hVu" alt="Ferdi Kadıoğlu sakatlık son durumu! Ferdi Kadıoğlu ne zaman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>14 Temmuz 2018 tarihinde Hollanda&#39;nın NEC Nijmegen takımından 1.40M€ bonservis bedel ile Fenerbahçe&#39;ye transfer oldu. Fenerbahçe&#39;ye transfer olduktan sonra&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aspor.com.tr/milli-takim/2022/11/16/turkiye-iskocya-macinda-sok-sakatlik-ferdi-kadioglu-oyuna-devam-edemedi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye - İskoçya maçında şok sakatlık! Ferdi Kadıoğlu oyuna devam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxK_NbMDREliCTjBiq_-jKxchOkFvRl6ACCA7LeJ3LBqfEBG5Z2_PTrzjEZRG4Dc5pk-J8B0ve" alt="Türkiye - İskoçya maçında şok sakatlık! Ferdi Kadıoğlu oyuna devam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Milli Futbol Takımımız hazırlık maçında İskoçya ile karşı karşıya geliyor. Zorlu mücadelenin 31. dakikasında Fenerbahçe&#39;nin yıldız isimlerinden Ferdi...</p></div>
            </div>
        </a>
        </Template></>;
}