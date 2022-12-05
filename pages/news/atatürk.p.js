import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Atatürk</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Atatürk"/>
        <meta name="description" content="Trending News about Atatürk" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Atatürk</h1>
            <Image width={800} height={500} src="https://cdn.odatv4.com/images/2022_12/2022_12_04/odatv_image_65__e55018ff2c454d.jpg" alt="Atatürk"/>
            <h3>Recent News</h3>
            <a href='https://www.odatv4.com/guncel/ataturk-un-iran-sahina-bakanlari-tanistirdigi-goruntuler-261039'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atatürk&#39;ün İran şahına bakanları tanıştırdığı görüntüler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYWr1nA8_oYPV2lI0exydFFBI2mhw24bXCljY7UI8VGeTI_n4o1OrHlAiPsKjJ96eahmIU0Ixd" alt="Atatürk&#39;ün İran şahına bakanları tanıştırdığı görüntüler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye Cumhuriyeti&#39;nin kurucusu Mustafa Kemal Atatürk&#39;ün İran Şahına bakanları tanıştırdığı anlar sosyal medyada gündem oldu.</p></div>
            </div>
        </a><a href='https://www.mansetaydin.com/haber/12819597/chpye-ataturku-hatirlatti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CHP&#39;ye Atatürk&#39;ü hatırlattı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZOXrVcc9Te3zNGsRYCB5KYn3qe5UWby7TVuBcNOqlcrYjqt_zM-dxxranXK7ZZ1nqGFoXIpnS" alt="CHP&#39;ye Atatürk&#39;ü hatırlattı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ölüm yatağında &#39;beni Türk hekimlerine emanet edin&#39; diyen Mustafa Kemal Atatürk&#39;ün kurduğu Cumhuriyet Halk Partisi&#39;nin iktidara gelmeleri halinde ekonomiyi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aydinlik.com.tr/fotogaleri/ataturkun-o-videosu-ilk-kez-yayinlandi-iste-o-goruntuler-ataturkun-o-videosu-ilk-kez-yayinlandi-iste-o-goruntuler-iran-sahina-hukumeti-tanitiyor-354076'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atatürk&#39;ün o videosu ilk kez yayınlandı! İŞTE O GÖRÜNTÜLER... İran ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQANbyNsbD-TWxIHfeBD22sHNaJbXM3MfGM-IfiItdqh9ZX0spQ6mEFnJvMGttRmhB1jfW9d0At" alt="Atatürk&#39;ün o videosu ilk kez yayınlandı! İŞTE O GÖRÜNTÜLER... İran ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türk Devrimi&#39;nin büyük önderi Mustafa Kemal Atatürk&#39;ün, Türkiye&#39;yi ziyareti sırasında İran Şahı&#39;na bakanları tanıştırdığı anlar sosyal medyada gündem oldu.</p></div>
            </div>
        </a><a href='https://abcgazetesi.com/goruntuler-netlestirildi-ataturk-iran-sahina-bakanlari-tanitiyor-453888'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Görüntüler netleştirildi: Atatürk, İran Şahına, Bakanları tanıtıyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZVmjMlpEKn8Vtwn1BQa-8LBoI-rC2Q3BKWijLdiGs-u9Gglku6ipdEa4mFiFX6eu-0CT6aZF4" alt="Görüntüler netleştirildi: Atatürk, İran Şahına, Bakanları tanıtıyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye Cumhuriyeti&#39;nin kurucusu Mustafa Kemal Atatürk&#39;ün arşivden çıkan ve restore edilmiş yeni görüntüleri sosyal medyada büyük beğeni topladı.</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/yil-1934-ataturk-iran-sahina-tun-devlet-erknini-tanitti-604270h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yıl 1934… Atatürk, İran Şahına tün devlet erkânını tanıttı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYdQG22E4s83SK5r6QUUdWz8rlDpk6-ho_1JIzQYiAxLBrJGvitHMWGTWizAhmAI-sjZcdNW2_" alt="Yıl 1934… Atatürk, İran Şahına tün devlet erkânını tanıttı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhuriyetin kurucusu Mustafa Kemal Atatürk&#39;ün 1934 yılında Türkiye&#39;ye ziyarete gelen İran Şahına tüm bakanları tanıştırdığı anlar sosyal medyada gündem&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}