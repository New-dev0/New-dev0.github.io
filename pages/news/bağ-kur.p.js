import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bağ-Kur</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bağ-Kur"/>
        <meta name="description" content="Trending News about Bağ-Kur" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bağ-Kur</h1>
            <Image width={800} height={500} src="https://iatkv.tmgrup.com.tr/0a09b7/600/314/122/0/1200/564?u=https%3a%2f%2fitkv.tmgrup.com.tr%2falbum%2f2022%2f12%2f02%2f1669987487134.jpg" alt="Bağ-Kur"/>
            <h3>Recent News</h3>
            <a href='https://www.takvim.com.tr/galeri/ekonomi/ocak-2023-yeni-maas-tablosu-skk-ve-bag-kur-emeklilerine-yeni-ocak-zammi-hesabi-iste-ssk-ve-bag-kurlunun-yeni-maasi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OCAK 2023 YENİ MAAŞ TABLOSU! SKK ve BAĞ-KUR emeklilerine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJRexPDrJ3k6nzU8XFqOA5HSNHw9OG32zJDNM_GarZyjLNd5DY5-xxrdM2aBUzwYb4ZLfkAsEo" alt="OCAK 2023 YENİ MAAŞ TABLOSU! SKK ve BAĞ-KUR emeklilerine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emeklilerin Ocak zammı için yeni ipucu geldi. AA Finans&#39;ın beklenti anketindeki yüzde 70.18 yıl sonu enflasyon tahminine göre SSK ve Bağ-Kur emeklilerine&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/emekli-zammi-hesaplaniyor-ilk-tahminler-geldi-2023-ssk-bagkur-en-dusuk-ve-en-yuksek-emekli-maas-zammi-ne-kadar-olacak-kac-tl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EMEKLİ ZAMMI HESAPLANIYOR! İlk tahminler geldi: 2023 SSK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRo15bpJcR-MP2ii6OsHyaxIXX5Z9DqTvyZfO8Exl25WItgBXSFlcc8GmBSg0FJ_R_MqiJNmbcW" alt="EMEKLİ ZAMMI HESAPLANIYOR! İlk tahminler geldi: 2023 SSK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milyonların merakla beklediği emekli zammı için gözler yılın ikinci yarısına ilişkin enflasyon verilerinde. 4 aylık veri ışığında ilk hesaplamalar ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/galeri/ekonomi/4a-4b-4c-sgk-ve-bag-kurlu-emekli-icin-kritik-tahmin-zamlar-pes-pese-gelecek-3-gun-kaldi-3500-4000-4500-5500-tl-maas-alanlar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>4A, 4B, 4C SGK ve Bağ-Kur&#39;lu emekli için kritik tahmin! Zamlar peş ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqK4YWgR5GOC6nNPnBk53ZV2U-bzCsHevgbCu9TOUb61-_3KmuJq8KJU8hfkh2guQAnvJAWDuU" alt="4A, 4B, 4C SGK ve Bağ-Kur&#39;lu emekli için kritik tahmin! Zamlar peş ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emekli Ocak zammı için nefesler tutuldu. TÜİK tarafından açıklanan enflasyon rakamları sonrasında emekli maaş hesaplamaları hız kazandı. 5 Aralık Pazartesi.</p></div>
            </div>
        </a><a href='https://finans.mynet.com/galeri/haber/detay/ekonomi/son-dakika-4a-4b-4c-sgk-bag-kur-emekli-sandigi-3-gun-sonra-aciklaniyor-memur-ve-emekliye-yeniden-maas-hesaplamasi-yaptiracak-detay-1-200-tl-lik-fark/455400/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: 4A, 4B, 4C SGK, Bağ-Kur, Emekli Sandığı… 3 gün ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZRI1nCge5VTnIxTTagGIlP68Olzz1DNkRzY5Oi64wUhHEcDQZBsoccxvS5Tv-mVBAEL8twrWm" alt="Son dakika: 4A, 4B, 4C SGK, Bağ-Kur, Emekli Sandığı… 3 gün ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika: Memur ve emekli Ocak 2023 zammı için gün sayarken yeni maaşları belirleyecek en kritik veri 5 Aralık Pazartesi günü açıklanacak.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/emekli-zamminda-yuzde-1605-zam-cepte-2023-ssk-ve-bag-kur-emekli-maas-zammi-yuzde-kac-olacak-3543930-ekonomi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emekliye yüzde 16.05 zam cepte! 2023 SSK ve Bağ-Kur emekli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrrT0KzyOfByDe4gspGV-KVJQSqQMeonXwhVBzzfJ60G4CrVQJcvpK95k0YoIBuxPD2buYHBmz" alt="Emekliye yüzde 16.05 zam cepte! 2023 SSK ve Bağ-Kur emekli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son 6 aylık enflasyon farkına göre belirlenecek emekli zammında 4 aylık enflasyon farkı açıklandı. TÜİK tarafından açıklanan verilere göre 4 aylık enflasyon&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/yazi-dizileri/borclanma-suresine-dikkat-2008444'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Borçlanma süresine dikkat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQa5gaHXl1ZmWmak1gYgatnCmdy6-rqIM5fgWGP8PAK3QWl7V8tEW0eg7uqrsnsjtFvQDSp4cBw" alt="Borçlanma süresine dikkat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1- BAKAN BİLGİN&#39;İN BORÇLANMA VE YIPRANMALARIN SİGORTALILIK BAŞLANGIÇ TARİHİNİ ÖNE ÇEKMEYECEĞİNE, SADECE PRİM ÖDEME GÜN SAYILARINI TAMAMLAYACAĞINA YÖNELİK&nbsp;...</p></div>
            </div>
        </a><a href='https://www.finans365.com/haber/9212962/netlesti-ssk-ve-bagkur-emeklisi-de-memur-ve-memur-emeklisi-de-ihya-oldu-ocak-2023te-rekor-zam'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NETLEŞTİ! SSK ve Bağkur emeklisi de, memur ve memur emeklisi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5QSWhJ1VymwYtDxibcFATZLSKB24Kl4xNG5Z_d1qoW9dEetunEqWzV2ySiezmUMS-2fqsH6pt" alt="NETLEŞTİ! SSK ve Bağkur emeklisi de, memur ve memur emeklisi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika Ocak 2023&#39;te yapılacak zam haberleri oldukça merak ediliyor. Gelen haberler ise adeta vatandaşları bayram ettiriyor.</p></div>
            </div>
        </a>
        </Template></>;
}