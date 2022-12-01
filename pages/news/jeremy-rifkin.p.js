import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jeremy Rifkin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jeremy Rifkin"/>
        <meta name="description" content="Trending News about Jeremy Rifkin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jeremy Rifkin</h1>
            <Image width={800} height={500} src="https://medyascope.tv/wp-content/uploads/2022/11/rifkin-kilicdaroglu.jpeg" alt="Jeremy Rifkin"/>
            <h3>Recent News</h3>
            <a href='https://medyascope.tv/2022/11/30/kilicdaroglunun-vizyon-belgesinin-basindaki-jeremy-rifkin-kimdir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kılıçdaroğlu&#39;nun “vizyon belgesi”nin başındaki Jeremy Rifkin kimdir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSzmqml4eNOAASY7ist41sxRAB_17BvCUHnPP2qGv8dj2u7hT03G8r1UK7-xRSXi2hH5lxD6OOw" alt="Kılıçdaroğlu&#39;nun “vizyon belgesi”nin başındaki Jeremy Rifkin kimdir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhuriyet Halk Partisi (CHP) Genel Başkanı Kemal Kılıçdaroğlu, 3 Aralık Cumartesi günü İstanbul&#39;da, &quot;İkinci Yüzyıla Çağrı Toplantısı”nda partisinin.</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/kilicdaroglu-na-yeni-basdanisman-jeremy-rifkin-411953'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kılıçdaroğlu&#39;na yeni başdanışman: Jeremy Rifkin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkrHYQbFE1U61jCHT2bfm5tFtJSvHB_KvfR9gfNnfRZq5jS_GnIjr58nI7gZUKm2GPvz89YT0T" alt="Kılıçdaroğlu&#39;na yeni başdanışman: Jeremy Rifkin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD&#39;li yazar, ekonomi ve toplum kuramcısı, aktivist Jeremy Rifkin, CHP lideri Kemal Kılıçdaroğlu&#39;nun başdanışmanı oldu.</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/gundem/jeremy-rifkin-kilicdaroglunun-ekonomi-kadrosuna-katildi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jeremy Rifkin Kılıçdaroğlunun ekonomi kadrosuna katıldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsr5tDjyuSgR-31cVj4na1ZInHUp1BLJrb-7a5uY1TG3PltiQSDT_Z_tkmkuSEujBJsG_UUt_L" alt="Jeremy Rifkin Kılıçdaroğlunun ekonomi kadrosuna katıldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Almanya&#39;nın eski Başbakanı Angela Merkel&#39;in eski danışmanı Jeremy Rifkin, Kılıçdaroğlu&#39;nun ekonomi alanındaki başdanışmanı oldu.</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/savci-sayandan-kilicdarogluna-basdanisman-jeremy-rifkin-elestirisi-1712145.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Savcı Sayan&#39;dan Kılıçdaroğlu&#39;na başdanışman &#39;Jeremy Rifkin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLS4gmFgs1LJHsC-xph334sD1TnIEx7FvNMO4mH3Q9P3fhDpBMTcZ7631qzfzJ04K24RzaNhKX" alt="Savcı Sayan&#39;dan Kılıçdaroğlu&#39;na başdanışman &#39;Jeremy Rifkin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ağrı Belediye Başkanı Savcı Sayan, Angela Merkel&#39;in eski danışmanı Ekonomist Jeremy Rifkin&#39;in CHP Genel Başkanı Kemal Kılıçdaroğlu&#39;na başdanışman olmasına,</p></div>
            </div>
        </a><a href='https://www.odatv4.com/siyaset/merkel-in-ekibinden-chp-ye-transfer-260529'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CHP liderinden Merkel&#39;in ekibinden transfer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSo5aCkz1KuD2FriB1gBunA3mvJTvrkt-dkD14efBCxM9sSoYo7wLJKTy7xV_Fd0T60M9dvBICR" alt="CHP liderinden Merkel&#39;in ekibinden transfer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP Genel Başkanı Kemal Kılıçdaroğlu, 3 Aralık Cumartesi günü partisinin ekonomi politikalarını ve bu politikaları oluşturan kadrosunu açıklayacak.</p></div>
            </div>
        </a>
        </Template></>;
}