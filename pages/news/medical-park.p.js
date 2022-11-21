import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Medical Park</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Medical Park"/>
        <meta name="description" content="Trending News about Medical Park" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Medical Park</h1>
            <Image width={800} height={500} src="https://media-cdn.t24.com.tr/media/library/2022/11/1668932917390-1668880550488-gkgjkkgf.jpg" alt="Medical Park"/>
            <h3>Recent News</h3>
            <a href='https://t24.com.tr/haber/bakan-koca-dan-tokat-ta-bulunan-medical-park-hastanesi-ndeki-skandala-iliskin-yeni-aciklama,1073583'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bakan Koca açıkladı; Tokat&#39;ta bulunan Medical Park Hastanesi&#39;nin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSH6_3zg7iCzJ9ElShmlT6ERcoUve7pkZPwV_9qKbFJM3m-bP50fEi9WwyVEd3ggW9XQNFheQHA" alt="Bakan Koca açıkladı; Tokat&#39;ta bulunan Medical Park Hastanesi&#39;nin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tebliğin ardından hastanede tedavi gören yaklaşık 30 hasta, ambulans ve özel araçlarla kentteki hastaneler ile evlerine gönderildi. Bu arada, hastane bahçesinde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/tokat-medical-park-hastanesinden-korkunc-goruntulere-iliskin-aciklama-1709355.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tokat Medical Park Hastanesi&#39;nden korkunç görüntülere ilişkin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6_kssFaP8EjEVfYNaoaFNjajF3gDmA0Rq0hQ9Brr7RLRthipbgkMSiQ3dVAqLaBAG-D05Zipu" alt="Tokat Medical Park Hastanesi&#39;nden korkunç görüntülere ilişkin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tokat Medical Park Hastanesi yönetimi vicdanları yaralayan görüntülere ilişkin açıklamada bulundu. Yönetim tarafından yapılan açıklamada, ilk incelemenin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dha.com.tr/gundem/medical-parktan-tokattaki-olaya-iliskin-aciklama-2164454'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Medical Park&#39;tan Tokat&#39;taki olaya ilişkin açıklama</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Medical Park&#39;tan Tokat&#39;taki olaya ilişkin açıklama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tokat Medical Park Hastanesi&#39;nden, beyin kanaması nedeniyle tedavi gören Metin Akça&#39;ya yoğun bakım ünitesinde 2 hemşirenin kötü muamelede bulunmasıyla&nbsp;...</p></div>
            </div>
        </a><a href='https://haber.sol.org.tr/haber/tokatta-hastaya-siddet-goruntuleriyle-gundem-olan-medical-park-hastanesinin-faaliyeti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tokat&#39;ta hastaya şiddet görüntüleriyle gündem olan Medical Park ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkaM0cORKyBn92LQOjfuyC_0DVowCmzEKH8LCboY7CNoi2sVBTntzBO7Ona2KcD2reloJqDgJU" alt="Tokat&#39;ta hastaya şiddet görüntüleriyle gündem olan Medical Park ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sağlık Bakanı Fahrettin Koca, felçli hastanın boğazının sıkıldığı Tokat&#39;ta bulunan Medical Park Hastanesi&#39;ne ilişkin olarak yeni açıklama yaptı. Bakan Koca, &quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu18.com/tokat-medical-park-hastanesinden-skandal-goruntuler-38854h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tokat Medical Park Hastanesi&#39;nden skandal görüntüler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS3zjwhLjtaWAIJjJUiSuyS_ZhHq-Bff6lRVUKHrWEhIPa8JJOP8QVpj4E5BC0gi4h4ol8x-f_q" alt="Tokat Medical Park Hastanesi&#39;nden skandal görüntüler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tokat&#39;ta özel bir hastanede yoğun bakım servisinde yatan hastaya şiddet uygulandığını gösteren görüntülerin yayınlanmasının ardından Sağlık Bakanı Fahrettin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.seskocaeli.com/haber/12575160/bakan-koca-duyurdu-medical-park-hastanesinin-faaliyeti-durduruldu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bakan Koca duyurdu: Medical Park Hastanesi&#39;nin faaliyeti durduruldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTv4ZghZ7sfyJanyyywYjp7iGu2HOgGBIrTyFBOWX29cf8Izo3F1Niy7jUwr-vlo-a_0Iv9Ug0E" alt="Bakan Koca duyurdu: Medical Park Hastanesi&#39;nin faaliyeti durduruldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Medical Park&#39;ta iki hemşirenin yoğun bakımdaki hastanın çarşafla yüzünü kapatıp elleriyle bastırdıkları görüntülerin ortaya çıkmasının ardından hastanenin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.olaymedya.com/haber/12574141/medical-park-genel-muduru-gorevden-alindi-medicalpark-hastanelerinden-resmi-aciklama-geldi-iste-detaylar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Medical Park Genel Müdürü Görevden Alındı! Medicalpark ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnL68tuQl5O_J_kWz4cAlspQrHsG--QF_qHbmypzG9S5GBNSOdcfILbnOzN15XRKzFLF0Ccbv6" alt="Medical Park Genel Müdürü Görevden Alındı! Medicalpark ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tokat&#39;ta özel bir hastanede yoğun bakım servisinde yatan hastaya şiddet uygulandığını gösteren görüntülerin yayınlanmasının ardından Olaya ilişkin&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}