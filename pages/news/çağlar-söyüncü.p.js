import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Çağlar Söyüncü</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Çağlar Söyüncü"/>
        <meta name="description" content="Trending News about Çağlar Söyüncü" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Çağlar Söyüncü</h1>
            <Image width={800} height={500} src="https://i2.gazetevatan.com/i/gazetevatan/75/1200x0/6375ea7b693d563bf086083f.jpg" alt="Çağlar Söyüncü"/>
            <h3>Recent News</h3>
            <a href='https://www.gazetevatan.com/galeri/caglar-soyuncu-bombasi-super-lig-devine-geliyor-2069966'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Çağlar Söyüncü bombası! Süper Lig devine geliyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1kc6P_BWeMkwLFTlqJC2PyoHRRI2RD3Z4YRLc8srjSaSh8tZ2tbOA88i8y89uxyEKTZwgUN5O" alt="Çağlar Söyüncü bombası! Süper Lig devine geliyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Dakika Beşiktaş Haberleri - Welinton ve Montero ile yollarını ayırmaya hazırlanan Beşiktaş stoper arayışlarına başladı. Defans hattını yerli bir&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/spor/futbol/2022/11/17/besiktastan-caglar-soyuncu-hamlesi-geliyor-oyuncuyla-gorusme-yapilacak'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş&#39;tan Çağlar Söyüncü hamlesi geliyor! Oyuncuyla görüşme ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSghRdiZsnVwaWM0hAYE6hh4cbculeEnHtH73lToA8UdSNM4N7v5IrJszyEL8_uSGXbIoZfc52b" alt="Beşiktaş&#39;tan Çağlar Söyüncü hamlesi geliyor! Oyuncuyla görüşme ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Piyasa değeri 22 milyon Euro olan Çağlar Söyüncü&#39;nün başta La Liga olmak üzere Premier Lig&#39;den de birçok talibi var. Leicester City de Çağlar&#39;ın kiralanması&nbsp;...</p></div>
            </div>
        </a><a href='https://www.internethaber.com/besiktasin-plani-belli-oldu-stopere-caglar-soyuncu-takviyesi-2279029h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş&#39;ın planı belli oldu: Stopere Çağlar Söyüncü takviyesi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQo_xMFzbIU7IYleVM_B8V5W-BQTKmz7lhjl7sHRFrXYIzYbmjzX7O6XbE9zdeKOHsyjMHS94Mh" alt="Beşiktaş&#39;ın planı belli oldu: Stopere Çağlar Söyüncü takviyesi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kaan Ayhan ve Bruno Martins Indi&#39;yle ilgilendiği bilinen Siyah-Beyazlılar bu kez de İngiltere Premir Lig&#39;de forma giyen Milli yıldız Çağlar Söyüncü için&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/galeri/son-dakika-caglar-soyuncu-ve-kaan-ayhan-super-lig-devinde-bulusuyor-besiktas-gozunu-fena-karartti-353350-myspor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: Çağlar Söyüncü ve Kaan Ayhan, Süper Lig devinde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWD_FNn0qt5nNWiEs3sSc2v8AOAOZWg6gauONA2TSZQHDtR3Xgysi7uMy3YNOnY9lDJCNwdmTQ4w" alt="Son dakika: Çağlar Söyüncü ve Kaan Ayhan, Süper Lig devinde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberleri: Beşiktaş&#39;ta Valerien Isamel yerine göreve getirilen teknik direktör Şenol Güneş, Spor Toto Süper Lig&#39;in 13. haftasında oynadıkları&nbsp;...</p></div>
            </div>
        </a><a href='https://www.medyaradar.com/caglar-soyuncu-ve-kaan-ayhan-super-lig-devinde-bulusuyor-haberi-2107414'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Çağlar Söyüncü ve Kaan Ayhan, Süper Lig devinde buluşuyor!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTE7YoDHqxyIBoQt3s8Bf7f01L-PnftviqiqIw79kgxp1xr4PdoZSDPEigLdNYpf7d89dO7e2_9" alt="Çağlar Söyüncü ve Kaan Ayhan, Süper Lig devinde buluşuyor!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beşiktaş&#39;ta Valerien Isamel yerine göreve getirilen teknik direktör Şenol Güneş, Spor Toto Süper Lig&#39;in 13. haftasında oynadıkları Galatasaray maçı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.superhaber.tv/caglar-soyuncu-super-lige-geliyor-galeri-427277'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Çağlar Söyüncü Süper Lig&#39;e geliyor!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTw8CxICOmHjF0v7hq-Y_qtIl1D6WGa0oVEqtPeK3hgi6YqBg8ibrz_2No0ENTpFwkjA5MYOi8h" alt="Çağlar Söyüncü Süper Lig&#39;e geliyor!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Dünya Kupası nedeniyle liglere ara verilirken, takımlar da transfer çalışmaları için harekete geçti. Stoper takviyesi yapmak isteyen Beşiktaş&#39;ın,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}