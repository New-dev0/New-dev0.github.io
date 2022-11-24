import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ÖTV matrah düzenlemesi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ÖTV matrah düzenlemesi"/>
        <meta name="description" content="Trending News about ÖTV matrah düzenlemesi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ÖTV matrah düzenlemesi</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/24/2005590/kapak_011814.jpg" alt="ÖTV matrah düzenlemesi"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/ekonomi/otv-matrah-duzenlemesi-resmi-gazetede-yayimlandi-2005590'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖTV matrah düzenlemesi, Resmi Gazete&#39;de yayımlandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRf7tDfrpflkDUNX5QyMDWuuM6nfcCvYk-RkKtctOg1OsjV7L-oRI3gHPiCUjYhsWVEGWOPSGqr" alt="ÖTV matrah düzenlemesi, Resmi Gazete&#39;de yayımlandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Özel Tüketim Vergisi matrahında yeni düzenleme Cumhurbaşkanı Erdoğan&#39;ın imzasıyla Resmi Gazete&#39;de yayımlandı.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/ekonomi/son-dakika-otomobil-alacaklar-dikkat-otv-matrah-duzenlemesi-resmi-gazetede-yayimlandi-42175995'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika haberi: Otomobil alacaklar dikkat! ÖTV matrah ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfoBTmDXomS_vrQ8BqG0IgXANhJguo8LSyzpVzOCxET0pchORzRXX3_lbH40V9QMfOpa_1gpcU" alt="Son dakika haberi: Otomobil alacaklar dikkat! ÖTV matrah ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haberler - Otomobil piyasasının beklediği ÖTV matrah düzenlemesi Resmi Gazete&#39;de yayımlandı. Düzenlemeye göre, otomobillerde ÖTV Matrah limiti artırıldı.</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/turkiye/son-dakika-otomobil-piyasalarinda-merakla-bekleniyordu-otv-matrah-duzenlemesi-resmi-gazetede-yayimlandi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA... Otomobil piyasalarında merakla bekleniyordu: ÖTV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiXqaRsRH61fY88d44z80GBADvFVAGzCRrTx9gXT4qUpwMuZ-2ASs5aAOlOEp5qWoE0KgaeS2a" alt="SON DAKİKA... Otomobil piyasalarında merakla bekleniyordu: ÖTV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gelen son dakika haberine göre; Otomobil piyasalarında merakla beklenen ÖTV matrah düzenlemesi Resmi Gazete&#39;de yayımlandı. Yayımlanan haberde, &quot;4760 sayılı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/galeri/otv-matrah-duzenlemesi-nasil-olacak-matrah-artirimi-nedir-otv-matrah-limitleri-2022-resmi-gazetede-6862048'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖTV matrah düzenlemesi nasıl olacak, Matrah artırımı nedir? ÖTV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSRApGjv_pODTHsXHM4VuBAm0msSLA6MLbXfNvKNQ9vlLw-Z1hKne78qhROGh32BmqEUaP6S21t" alt="ÖTV matrah düzenlemesi nasıl olacak, Matrah artırımı nedir? ÖTV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ÖTV matrah düzenlemesi nasıl olacak, Matrah artırımı nedir? ÖTV matrah limitleri ve yeni oranlar 2022 Resmi Gazete&#39;de... Matrah düzenlemesi, araç sahipleri veya&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}