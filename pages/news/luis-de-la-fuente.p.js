import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Luis de la Fuente</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Luis de la Fuente"/>
        <meta name="description" content="Trending News about Luis de la Fuente" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Luis de la Fuente</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/GjGPLBrflEadWVDtpPDcew.jpg?width=1080&mode=crop&scale=both" alt="Luis de la Fuente"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/galeri/sporskor/ispanya-futbol-federasyonundan-luis-enrique-karari-yeni-hocaluis-de-la-fuente,vdgOPsh1pEe30EQGjH2PpQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İspanya Futbol Federasyonu&#39;ndan Luis Enrique kararı: Yeni hoca ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_Ee3a9hlWSQBj-KzPs-IwavLTTbDt3tpdtB7U6kxkSPp_bogY73RUDfT9r7MXQsfXZ_7v7JOd" alt="İspanya Futbol Federasyonu&#39;ndan Luis Enrique kararı: Yeni hoca ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İspanya Futbol Federasyonu, Fas yenilgisinin ardından teknik direktör Luis Enrique ile yolların ayrıldığını duyurdu. İspanya Milli Takımı&#39;nın yeni teknik&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/dunya-kupasi-2022/haberler/2022/12/08/ispanya-milli-takimi-teknik-direktorluk-gorevine-luis-de-la-fuenteyi-getirdi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İspanya Milli Takımı Teknik Direktörlük görevine Luis de la Fuente&#39;yi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQuCm0x4QuTXBS8CDEDpnJqKy0iZbAjcjOdS9rN8fDS0zV0kXXJCshDLOR-iL4Z_dn2COZCDbM9" alt="İspanya Milli Takımı Teknik Direktörlük görevine Luis de la Fuente&#39;yi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen Dünya Kupası&#39;nda son 16 turunda veda eden İspanya&#39;da Luis Enrique&#39;den boşalan teknik direktörlük görevine Luis de la Fuente getirildi.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/ispanyada-luis-enrique-donemi-sona-erdi-2010106'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İspanya&#39;da Luis Enrique ile yollar ayrıldı, yerine Luis de la Fuente ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSgX8gCe3x2Q5kP3i8FTpicCmrBrN0riwXFUayem7mE8CV9pcAAioA_nfI7x5Y5e9TRQ5GdVYED" alt="İspanya&#39;da Luis Enrique ile yollar ayrıldı, yerine Luis de la Fuente ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İspanya Futbol Federasyonu, milli takım teknik direktörü Luis Enrique&#39;nin yerine Luis de la Fuente&#39;nin getirildiğini açıkladı.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/sporarena/son-dakika-ispanyada-luis-enrique-ile-yollar-ayrildi-yerine-gelen-isim-luis-de-la-fuente-42184328'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: İspanya&#39;da Luis Enrique ile yollar ayrıldı! Yerine gelen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2RjK39cF7vonNmuIY1gJ-ZB3V1TN7l05XacgMSbYsaj2uo77UmkSHgUO8-ddHVbVCzN0qP37r" alt="Son Dakika: İspanya&#39;da Luis Enrique ile yollar ayrıldı! Yerine gelen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Haberleri - İspanya Futbol Federasyonu, Luis Enrique ile yolların ayrıldığını açıkladı. Federasyon ayrıca Luis de la Fuente&#39;nin yeni teknik direktör&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/ispanya-luis-enrique-ile-yollari-ayirdi-3545694-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İspanya&#39;da Luis Enrique gitti, De La Fuente geldi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8eruOatrdycQPsBu4BZc6mm1hExrRcq6E596UNRCkekM1voj_07UITAc-GYZUwK59dZMST2tm" alt="İspanya&#39;da Luis Enrique gitti, De La Fuente geldi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İspanya Futbol Federasyonu, 2022 FIFA Dünya Kupası&#39;nda son 16 turunda elenmenin ardından teknik direktör Luis Enrique ile yollarını ayırdı.</p></div>
            </div>
        </a><a href='https://www.goal.com/tr/haber/ispanya-yi-katar-daki-2022-dunya-kupasi-nda-sampiyon-yapmasi-beklenen-luis-enrique-kovuldu/blt005488182d983526'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İspanya&#39;yı Katar&#39;daki 2022 Dünya Kupası&#39;nda şampiyon yapması ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYeegC4EjUFN5Jhqw8PcMCfskThAgLE48jCcwTWDeqh48fbRsJ2ZRXUp2fP4onXILgFvVNoAeL" alt="İspanya&#39;yı Katar&#39;daki 2022 Dünya Kupası&#39;nda şampiyon yapması ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İspanya, Kosta Rika&#39;yı 7-0&#39;lık etkileyici bir galibiyetle başladı, ancak son 16 turunda Fas&#39;a penaltılarla elendi. Bunun üzerine İspanya Futbol Federasyonu (&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}