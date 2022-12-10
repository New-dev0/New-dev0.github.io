import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anadolu Efes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anadolu Efes"/>
        <meta name="description" content="Trending News about Anadolu Efes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anadolu Efes</h1>
            <Image width={800} height={500} src="https://images.eurohoops.net/2022/12/e708565b-vasilije-micic-anadolu-efes-zalgiris-600x314.jpeg" alt="Anadolu Efes"/>
            <h3>Recent News</h3>
            <a href='https://www.eurohoops.net/tr/euroleague-tr/1431488/anadolu-efes-euroleaguede-seriye-devam-zalgirisi-ikinci-yarida-dagitti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes EuroLeague&#39;de Seriye Devam: Zalgiris&#39;i İkinci Yarıda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWMEgBBVITbOgPCyd-VU7SlKjb1WtU5NTounYEG58TxpyiqZZlKsjox-X9X7odloH4aCD64zEO" alt="Anadolu Efes EuroLeague&#39;de Seriye Devam: Zalgiris&#39;i İkinci Yarıda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zalgiris Kaunas&#39;ta Tyler Cavanaugh 15 sayı 8 ribaund, Edgaras Ulanovas ve Ignas Brazdeikis 9 sayı, Roland Smits 8 sayı, Arnas Butkevicius 7 sayı üretti. Maçın&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/euroleague/2022/12/09/zalgiris-kaunas-anadolu-efes-maci-canli'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zalgiris Kaunas - Anadolu Efes maçı CANLI</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVxcceVXcD7Xx_xeYjy39CE2DeXiuAPW3FSRaWu-6__UBWRL0XBZZwWsdw2y1p-hqGUTIuljxv" alt="Zalgiris Kaunas - Anadolu Efes maçı CANLI" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY EuroLeague&#39;de heyecan hız kesmeden devam ediyor. Temsilcimiz Anadolu Efes, 12. hafta maçında Litvanya ekibi Zalgiris Kaunas ile deplasmanda karşılaşıyor&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/basketbol/anadolu-efes-zalgirisi-yendi/2760070'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes, Zalgiris&#39;i yendi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ6n5q6czj1_JiGgKJAHi3qtCIw7TO1zoCUSrOxVro4PM7edL04pvxAIXQ51dQ6P0t6zkkZw_zN" alt="Anadolu Efes, Zalgiris&#39;i yendi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Efes Erkek Basketbol Takımı, THY Avrupa Ligi&#39;nin 12. haftasında deplasmanda Litvanya&#39;nın Zalgiris ekibini 86-60 yendi. - Anadolu Ajansı.</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/anadolu-efes-euroleague-de-seriye-bagladi-ust-uste-5-galibiyet-413098'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes Euroleague&#39;de seriye bağladı: Üst üste 5. galibiyet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdltX3CiAJm9miwkFEMG5x6pEgAkFwUQSqx-0wkqAbToExK7xCvrp3A7BLZ8Y73iTMDUxNX3mX" alt="Anadolu Efes Euroleague&#39;de seriye bağladı: Üst üste 5. galibiyet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Euroleague&#39;de Anadolu Efes, Zalgiris Kaunas deplasmanına konuk oldu. Anadolu Efes, Litvanya&#39;dan 86-60&#39;lık skorla galibiyetle döndü.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/zalgiris-kaunas-anadolu-efes-mac-sonucu-60-86-2312863'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>(ÖZET) Zalgiris Kaunas-Anadolu Efes maç sonucu: 60-86</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjmcF78s5KEWXISqEcTZjP_4wXfQB0OGK_J7F7QJmuiLZlEzYXaI63kfUF22Fx0BdFNA7pTkLz" alt="(ÖZET) Zalgiris Kaunas-Anadolu Efes maç sonucu: 60-86" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague&#39;de çıkışa geçen Anadolu Efes, 12. hafta maçında Zalgiris Kaunas deplasmanına çıktı. Litvanya&#39;da rakibini 26 sayı farkla geçen ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/anadolu-efes-thy-euroleaguede-seriye-bagladi-zalgiris-kaunas-60-86-anadolu-efes-2010555'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes THY EuroLeague&#39;de seriye bağladı: Zalgiris Kaunas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNHXwR0n6MTLdSldDc8QKGhZoTTxTs4_7cikz3AoQhaqkMzDGUn-634_Rl6FzvzRGPHzxNWpZS" alt="Anadolu Efes THY EuroLeague&#39;de seriye bağladı: Zalgiris Kaunas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY EuroLeague&#39;deki temsilcimiz Anadolu Efes, deplasmanda karşılaştığı Zalgiris Kaunas&#39;ı 86-60 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/spor/basketbol/zalgiris-kaunas-anadolu-efes-basketbol-maci-ne-zaman-saat-kacta-hangi-kanalda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zalgiris Kaunas - Anadolu Efes basketbol maçı ne zaman, saat kaçta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSrWM3qFqM0RmPpCSpnksYcwgBI0-ZdHN1zXskI11G5VDp082QbmTveAdca9vQJqcGXCpUbWlL" alt="Zalgiris Kaunas - Anadolu Efes basketbol maçı ne zaman, saat kaçta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Efes EuroLeague 12. hafta maçında deplasmanda Zalgiris Kaunas ile kozlarını paylaşacak. Son haftalarda Euroleague&#39;deki çıkışını sürdürmek isteyen...</p></div>
            </div>
        </a>
        </Template></>;
}