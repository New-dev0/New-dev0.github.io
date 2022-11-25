import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MEB</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MEB"/>
        <meta name="description" content="Trending News about MEB" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MEB</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/b-sNPI65k0yaCI-bmL5MNw.jpg?width=1080&mode=crop&scale=both" alt="MEB"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/turkiye/uzman-ogretmenlik-sinav-sonuclari-aciklandi-2022-meb-ogretmenlik-kariyer-basamaklari-sinav-sonucu,ssZMtJ0hcUS4nfNCz6k9dQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uzman öğretmenlik sınav sonuçları Milli Eğitim Bakanlığı (MEB ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNvljbuAzJ6M_eQnzTusx9mCmpq43xs-5k1SdQeVclTm4U2ARrelns5Gh1WYEzPpkAj4LbCxVS" alt="Uzman öğretmenlik sınav sonuçları Milli Eğitim Bakanlığı (MEB ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kamuoyunda uzman öğretmenlik sınavı olarak da bilinen Kariyer Basamakları Yazılı Sınavı sonuçları açıklandı. Uzman öğretmenlik sınavında 422 bin 368&nbsp;...</p></div>
            </div>
        </a><a href='https://www.trthaber.com/haber/guncel/uzman-ogretmenlik-sinav-sonuclari-aciklandi-mi-2022-meb-ogretmenlik-kariyer-basamaklari-sinav-sonucu-725816.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uzman öğretmenlik sınav sonuçları açıklandı mı? 2022 MEB ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSb2BVzJu8iqGj3y2_VZ4xbewK9flZlx4yRewo7rHkHP1Fb-Ovru5jPgvTm_xeN7VEhmc8Sdut9" alt="Uzman öğretmenlik sınav sonuçları açıklandı mı? 2022 MEB ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 Kasım Cumartesi günü gerçekleşen sınavın ardından Milli Eğitim Bakanlığı tarafından sonuçlar duyuruldu. İşte uzman öğretmen sınav sonuçları sorgulama.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/son-dakika-uzman-ogretmenlik-sinav-sonuclari-aciklandi-meb-2022-uzman-ogretmenlik-sinav-sonuclari-sorgulama-ekrani'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UZMAN ÖĞRETMENLİK SONUÇLARI AÇIKLANDI! 2022 Uzman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOFLzPs8bt_E8ZQqQNiPqDBHNQBZ2HRk4Fb1vySpTheDcqNp4HeyEUJuHmkWKr3dLbsg9WfDkv" alt="UZMAN ÖĞRETMENLİK SONUÇLARI AÇIKLANDI! 2022 Uzman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uzman Öğretmenlik sınav sonuçları için heyecanlı bekleyiş son buldu. Milli Eğitim Bakanlığı tarafından 19 Kasım 2022 tarihinde uygulana Uzman Öğretmenlik&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/egitim/uzman-ogretmenlik-sinav-sonuclari-sorgulama-meb-uzman-ogretmenlik-sonuclari-2022-aciklandi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uzman öğretmenlik sınav sonuçları sorgulama... MEB Uzman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6Sw_EzONQNqn0yuRz4i_NvRWLDdSW6ZKXZXa9D83pHgpPCHqHug1SKdzLEztXbDBmjeHk58JF" alt="Uzman öğretmenlik sınav sonuçları sorgulama... MEB Uzman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Eğitim Bakanlığınca (MEB) Öğretmenlik Kariyer Basamakları Yazılı Sınavı (uzman öğretmenlik) 19 Kasım&#39;da düzenlendi.</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/galeri/uzman-ogretmenlik-sinav-sonuclari-sorgulama-ekrani-2022-meb-uzman-ogretmenlik-sonuclari-nasil-sorgulanir-6862369'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UZMAN ÖĞRETMENLİK SINAV SONUÇLARI MEB sorgulama ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTq4Z1DcNRwLF_ptmfejE4NfEHQICOXBxF_OIH9bjQAgFLkT6HLRnc9suSkPG6bZNMgaEi2qoLR" alt="UZMAN ÖĞRETMENLİK SINAV SONUÇLARI MEB sorgulama ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UZMAN ÖĞRETMENLİK SINAV SONUÇLARI MEB sorgulama / öğrenme ekranı || MEB (Öğretmenlik Kariyer Basamakları) Uzman öğretmenlik sınav sonuçları belli oldu &middot; Uzman ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ogretmenlericin.com/meb-haber/25-kasim-meb-sube-mudurleri-gunu-olsun-45148h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 Kasım MEB Şube Müdürleri Günü Olsun</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdf5rs7uWVxATicIRSduS3Wvh37k_Vv1wZUeLLGZoeB7JUTwmnjsLPKC5hGFmiaTuJIpi-luDx" alt="25 Kasım MEB Şube Müdürleri Günü Olsun" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aylık gelirleri, hiyerarşide üstü olduğu okul idarecilerinden daha düşük hatta amiri olduğu avukat ve mimar ve mühendislerin ekgöstergesi 4200 iken MEB Şube&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ogretmenlericin.com/meb-haber/kantini-olan-tum-okullarin-dikkatine-meb-bu-bilgilerin-girilmesini-istedi-45180h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kantini olan tüm okulların dikkatine MEB bu bilgilerin girilmesini istedi.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ64XgpmzFC6Zsiir810p5bKj3UHB5xt1u3OXFCb5KCjxXtHPh-yYMH3rV9BwVq4N-Kmik0l4J-" alt="Kantini olan tüm okulların dikkatine MEB bu bilgilerin girilmesini istedi." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MEB Strateji Geliştirme Başkanlığının 23.11.2022 tarihli ve &#39;&#39;Kantin İşletmeci Bilgileri&#39;&#39; konulu yazısında aynı kantin işletmecisine farklı ilçede veya başka&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ogretmenlericin.com/meb-haber/meb-cevapladi-dyk-ek-ders-ucreti-artirimli-odenir-mi-45154h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MEB Cevapladı: DYK Ek Ders Ücreti Artırımlı Ödenir mi?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsi2SrFUXGEK77IhON-fqGAv3tgy1mkUwlMLLRz6FT0Ai9qMBQUOtz3x_m1nqegZ4D-H6SPDml" alt="MEB Cevapladı: DYK Ek Ders Ücreti Artırımlı Ödenir mi?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Millî Eğitim Bakanlığı Personel Genel Müdürlüğü 18.11.2022 tarihli Ek Ders Ücreti konulu resmi yazıda Özel Eğitim Öğretmenlerinin DYK Ek Ders Ücreti Artırımlı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haber7.com/egitim-ogretim/haber/3280574-uzman-ogretmenlik-sinavi-sonuclari-aciklandi-meb-uzman-ogretmenlik-sinavi-sonuclari-goruntuleme-ekrani'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uzman Öğretmenlik Sınavı sonuçları açıklandı! MEB Uzman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbE3uVGGJPBbWF1tqY346j_64S_qLGrnDx2oZzUP8tkYTsdh422z2Xdm9pto4TDmleMqR6M7XK" alt="Uzman Öğretmenlik Sınavı sonuçları açıklandı! MEB Uzman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haber 7 - Uzman Öğretmenlik Sınavı sonuçları MEB tarafından açıklandı. Sınav tüm Türkiye&#39;de eş zamanlı olarak tek oturum olarak yapıldı.</p></div>
            </div>
        </a>
        </Template></>;
}