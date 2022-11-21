import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bodrumspor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bodrumspor"/>
        <meta name="description" content="Trending News about Bodrumspor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bodrumspor</h1>
            <Image width={800} height={500} src="https://static.daktilo.com/sites/208/uploads/2022/09/22/bodrumspor.jpg" alt="Bodrumspor"/>
            <h3>Recent News</h3>
            <a href='https://www.akdeniztelgraf.com/haber/12574920/bodrumspor-tuzlaspor-1-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bodrumspor - Tuzlaspor: 1-2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRg2ZmUbvNkTnkO-X_Oo5E-_HNRqjvWOJDN9_89953jxKQJKaoIzjJBBhYcMYD2gSi2DHMbd1Ct" alt="Bodrumspor - Tuzlaspor: 1-2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1&#39;inci Lig&#39;de mücadele eden Bodrumspor, ligin 14&#39;üncü haftasında kendi evinde Tuzlaspor&#39;a 2-1 yenildi.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/bodrumspor-1-tuzlaspor-2-mac-sonucu-3540352-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bodrumspor: 1 - Tuzlaspor: 2 | MAÇ SONUCU</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSfxpcdpontAWQ-YG3tFFyOsHDNsLXLyps4O6G2nFFtAmKQ_xAZVOvSpAbrKh11I3VBi16rI97j" alt="Bodrumspor: 1 - Tuzlaspor: 2 | MAÇ SONUCU" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stat: Bodrum İlçe. Hakemler: Ramazan Keleş, Ali Can Alp, Emir Eray Eyisoy. Bodrumspor: Sousa, Erkan Değişmez, Samet Yalçın, Kenan Özer (Dk. 77 Süleyman&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/futbol/bodrumspor-tuzlaspor-macinda-uzatmada-uc-puan-7490529/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bodrumspor Tuzlaspor maçında uzatmada üç puan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7jzjg53cNUpXQWGGNRMRfIVHBNjBlxyz-V3NCD1rteiV0-BXDmhToiqfQOjTPdvRAdpyFbNFH" alt="Bodrumspor Tuzlaspor maçında uzatmada üç puan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bodrumspor, sahasında konuk ettiği Tuzlaspor&#39;a uzatma dakikalarında yediği golle yenilerek zirve yarışında yara aldı. Bodrumspor, Erkan Değişmez&#39;in kırmızı kart&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntvspor.net/futbol/tuzlaspor-3-mac-sonra-kazandi-637a21f5a64145ffd00e5ff7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tuzlaspor 3 maç sonra kazandı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRa7zzQUupdMhn_Rsp75rUPIZDfAqbiDOU-QorBENj1ojKwu1pMjZTfLQpgwptgRXyikQXHf6ds" alt="Tuzlaspor 3 maç sonra kazandı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 14. haftasında Tuzlaspor, Bodrumspor&#39;u 2-1 yenerek 3 maç sonra kazandı.</p></div>
            </div>
        </a><a href='https://www.aydinlik.com.tr/haber/bodrumspor-dususte-351816'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bodrumspor düşüşte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTh8g9o0IAB6uWKIzvS18ktB1efB-raZxSQnO8J_PwUoHC4D83Z8u3SVeZbA45r-RZYogz5Hq3X" alt="Bodrumspor düşüşte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SPOR Toto 1&#39;inci Lig&#39;in sürpriz ekibi Bodrumspor, son dönemde istikrarsız bir görüntü çiziyor.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/bodrumspor-teknik-direktoru-ismet-tasdemir-rakibin-yaptigi-sadece-kuru-gurultuydu-2310626'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bodrumspor Teknik Direktörü İsmet Taşdemir: &#39;Rakibin yaptığı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZYJhRbLAXEWLqwIk7GgGw-nZGA07TfsyjZCpTW-FPQJTiT0xhPts56nerXblgp91njvQ2G95q" alt="Bodrumspor Teknik Direktörü İsmet Taşdemir: &#39;Rakibin yaptığı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bodrumspor ligin 14&#39;üncü haftasında kendi evinde Tuzlaspor&#39;u ağırladı. Yeşil-beyazlı ekip sahasında 2-1 mağlup olurken, karşılaşmanın ardından açıklamalarda&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/mugla-haberleri/100227190-bodrumspor-tuzlaspor-fotograflar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bodrumspor - Tuzlaspor (FOTOĞRAFLAR)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtQKyNB2RhSnnt9dz99Rzby3G5ql3Dmp3QTt8-OLHUvmSaRGzSpE3kU7bhYE9n-uaX9yJfkxeG" alt="Bodrumspor - Tuzlaspor (FOTOĞRAFLAR)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Ajansı, DHA, İHA tarafından geçilen tüm Muğla haberleri, bu bölümde Haberturk.com editörlerinin hiçbir editoryal müdahalesi olmadan otomatik olarak&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}