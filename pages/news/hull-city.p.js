import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hull City</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hull City"/>
        <meta name="description" content="Trending News about Hull City" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hull City</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/30/2007790/kapak_224211.jpg" alt="Hull City"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/hull-citynin-sahibi-acun-ilicalidan-arda-gulere-ovgu-2007790'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hull City&#39;nin sahibi Acun Ilıcalı&#39;dan Arda Güler&#39;e övgü!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ35XtrOVMFOPkTsP5VGFKbNXkbOvF4NIiuKQytdFjiyxgW1Bwgbj7Vi4ELp2oenueBMWpmDQkr" alt="Hull City&#39;nin sahibi Acun Ilıcalı&#39;dan Arda Güler&#39;e övgü!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İngiltere Championship ekiplerinden Hull City&#39;nin sahibi Türk iş insanı Acun Ilıcalı, Antalya&#39;da basın mensuplarına açıklamalarda bulundu.</p></div>
            </div>
        </a><a href='https://www.akdeniztelgraf.com/haber/12632045/basaksehir-acun-ilicalinin-takimi-hull-city-ile-1-1-berabere-kaldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Başakşehir, Acun Ilıcalı&#39;nın takımı Hull City ile 1-1 berabere kaldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMBRDY8rsJua1hSa_iuwS9z3uKKglx4LeEM-FsCurv_gQ_iRhjKE9Ewj8k0LvU9bY8jRTrNoRp" alt="Başakşehir, Acun Ilıcalı&#39;nın takımı Hull City ile 1-1 berabere kaldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SÜPER Lig ekiplerinden Medipol Başakşehir ile Acun Ilıcalı&#39;nın sahibi olduğu İngiltere Championship ekiplerinden Hull City hazırlık maçında karşılaşırken,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/spor/basaksehir-ile-hull-city-yenisemedi-727274.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Başakşehir ile Hull City yenişemedi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReLmZju6SbjVVAkx288jPu1ue_YOd5To0XaprmZrGTScRzcc6nHCPJUvUaZTUDWBvXu-2ehFyX" alt="Başakşehir ile Hull City yenişemedi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Süper Lig ekiplerinden Medipol Başakşehir ile İngiltere Championship ekiplerinden Hull City hazırlık maçında karşılaşırken, mücadelede 1-1&#39;lik beraberlikle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/futbol/2022/11/30/basaksehir-1-1-hull-city-mac-sonucu-ozet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Başakşehir 1-1 Hull City MAÇ SONUCU - ÖZET</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQIqTsinmeHhDFf5eazpGfqOEroZGL2ltD_NCRqhi4S8qaojR4dui6wfNfB7jbAP49FahNW0rQA" alt="Başakşehir 1-1 Hull City MAÇ SONUCU - ÖZET" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası&#39;nın arası verilmesiyle birlikte takımlar hazırlık maçlarına devam ediyor. Süper Lig ekiplerinden Başakşehir, İngiltere Championship&nbsp;...</p></div>
            </div>
        </a><a href='https://www.posta.com.tr/spor/futbol/ozan-tufan-hull-city-sonrasi-hedefini-acikladi-2589270'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ozan Tufan Hull City sonrası hedefini açıkladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXLsZ-juM2fosqV_DfegoISg0T_eeC6gQTGb3hVmsp6GwcJ6mtVuFpsIeUw-CBEBiH2AcXRhLD" alt="Ozan Tufan Hull City sonrası hedefini açıkladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Dakika Futbol Haberleri - Acun Ilıcalı&#39;nın sahibi olduğu Hull City&#39;den forma giyen Ozan Tufan, kariyerinin geri kalanıyla ilgili planlarını anlattı.</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/futbol/spor-toto-super-lig/medipol-basaksehir-ile-hull-city-berabere-266181.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Medipol Başakşehir ile Hull City berabere</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5ErjasQnBiBl5TpNzQogsuTKHrFcW31VM2XEWeL5Se_modXpw0BSwNwtVW1X2Hy7l9FlQgfvv" alt="Medipol Başakşehir ile Hull City berabere" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Medipol Başakşehir, Dünya Kupası arasında Antalya&#39;da gerçekleştirdiği ilk hazırlık maçında İngiltere Championship ekiplerinden Hull City ile 1-1 berabere&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/dunyadan-spor/hull-citynin-yeni-teknik-direktoru-rosenior-ozan-ve-dogukandan-memnun/2751677'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hull City&#39;nin yeni teknik direktörü Rosenior, Ozan ve Doğukan&#39;dan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8A5qruKSpvnU4guBut1D86EWz27ezpt2zJ6U4WT4I2v7BrdDw0KokTsbvW-hSxOB7MQ8pb0m9" alt="Hull City&#39;nin yeni teknik direktörü Rosenior, Ozan ve Doğukan&#39;dan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İngiltere Championship ekiplerinden Hull City&#39;nin yeni teknik direktörü Liam Rosenior, takımdaki Türk oyuncular Ozan Tufan ve Doğukan Sinik&#39;i çok&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/avrupadanfutbol/2022/11/30/hull-citynin-yeni-hocasi-roseniordan-ozan-tufan-ve-dogukan-sinik-yorumu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hull City&#39;nin yeni hocası Rosenior&#39;dan Ozan Tufan ve Doğukan Sinik ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTu2oCRo8jMEKA1ti0InmEYbxXdUq2y7xKrsv1EAloJOL4WssNu4ibCDQm9O5BS8n5VAGO5yTjT" alt="Hull City&#39;nin yeni hocası Rosenior&#39;dan Ozan Tufan ve Doğukan Sinik ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İngiliz temsilcisi Hull City&#39;de kısa süre önce teknik direktörlük görevine getirilen genç çalıştırıcı Liam Rosenior, açıklamalarda bulundu.</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/spor/hull-city-ozan-tufan-ve-dogukan-sinikten-memnun-727144.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hull City Ozan Tufan ve Doğukan Sinik&#39;ten memnun</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7yn5qtRW5BICzMQtCG9bLJYLCpPwrbsz97g8pDfoS2sFpscAl9JFMW34V7f7AesBRMsMmNock" alt="Hull City Ozan Tufan ve Doğukan Sinik&#39;ten memnun" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İngiltere Championship ekiplerinden Hull City&#39;nin yeni teknik direktörü Liam Rosenior, takımdaki Türk oyuncular Ozan Tufan ve Doğukan Sinik&#39;i çok&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aspor.com.tr/basaksehir/2022/11/30/basaksehir-hull-city-maci-canli-sifresi-basaksehir-hull-city-maci-ne-zaman-saat-kacta-ve-hangi-kanalda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BAŞAKŞEHİR HULL CITY MAÇI CANLI ŞİFRESİ | Başakşehir - Hull ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlO0810CyASG03XONvmdp3ve1dAD-5ppnT0RiTJDKajFrrVstbtlHb2qc1Zhp5IumfV4y0L2p5" alt="BAŞAKŞEHİR HULL CITY MAÇI CANLI ŞİFRESİ | Başakşehir - Hull ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Başakşehir, Dünya Kupası arasında, Fatih Terim Stadyumu&#39;nda Hull City&#39;yi ağırlıyor... Mücadele öncesinde merak edilen konular arasında maçın yayın saati,...</p></div>
            </div>
        </a>
        </Template></>;
}