import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İngiltere</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İngiltere"/>
        <meta name="description" content="Trending News about İngiltere" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İngiltere</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/21/2004940/kapak_182833.jpg" alt="İngiltere"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/ingiltere-dunya-kupasina-farkli-basladi-ingiltere-6-2-iran-2004940'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere Dünya Kupası&#39;na farklı başladı: İngiltere 6-2 İran</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRUObbeuSvNmTyxtwX8ihIhZZQyZpBntCN6zfkI3wAhSjxEtHifcuq3Hf08XzvIy_eVywYRKbAY" alt="İngiltere Dünya Kupası&#39;na farklı başladı: İngiltere 6-2 İran" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İngiltere, Katar&#39;da düzenlenen 2022 FIFA Dünya Kupası&#39;nda İran&#39;ı 6-2 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/dunyadan-spor/ingiltere-iran-maci-canli-yayin-dunya-kupasi-b-grubu-7492212/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere&#39;den kusursuz başlangıç! 8 gollü maçta İran&#39;ı dağıttı…</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0SOsJd85AZaZCXLPsL6c2kG9vsRI1MwpEFStFre5y5BQPRjMN4DQgJyT5t5ywK8MHrNgErFtc" alt="İngiltere&#39;den kusursuz başlangıç! 8 gollü maçta İran&#39;ı dağıttı…" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen 2022 Dünya Kupası&#39;nda oynanan B Grubu maçında İngiltere rakibi İran&#39;ı 6-2 mağlup etti. Turnuvaya kusursuz bir başlangıç yapan İngiltere&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/ntvpara/ingilterede-konut-fiyatlarinin-dusmesi-bekleniyor,JIDkpXiqrk25KgnXqrMnDA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere&#39;de konut fiyatlarının düşmesi bekleniyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQIhlSKFYHKAV2NHUfCG6tpYAbdw6-69eShwBlJd9S9JkM6rJDA0yKc8LPcYFuwEYBosetBqOJz" alt="İngiltere&#39;de konut fiyatlarının düşmesi bekleniyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İngiliz Ulusal İstatistik Ofisi (ONS) verilerine göre, ülkede konut kiraları, Eylül 2022 itibarıyla yıllık bazda yüzde 3,8 artış kaydetti. Öte yandan, online&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/dunyadan-spor/ingiltere-b-grubundaki-ilk-macinda-irani-6-2-maglup-etti/2744446'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere, B Grubu&#39;ndaki ilk maçında İran&#39;ı 6-2 mağlup etti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBpzss0TEKwU-OkVswzwDYcnNqdRFQh0R5utYyu8fOzpzd2y4rtrer6VWBv5RZxnA0q8LD-Vol" alt="İngiltere, B Grubu&#39;ndaki ilk maçında İran&#39;ı 6-2 mağlup etti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen 2022 Dünya Kupası&#39;nda İngiltere, B Grubu&#39;ndaki ilk maçında İran&#39;ı 6-2 mağlup etti. - Anadolu Ajansı.</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/skorer/ingiltere-iran-macinda-korkutan-sakatlik-bir-anda-yerde-kaldi-6860700'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere-İran maçında korkutan sakatlık! Bir anda yerde kaldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrwYfcxU1VpB3T-KqF1Vk8ItU2Jc4B_nJ2AuVD6np8B1uD58ZmbtK6slanT9iwqr1Ex0pahxeQ" alt="İngiltere-İran maçında korkutan sakatlık! Bir anda yerde kaldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen 2022 Dünya Kupası&#39;nda heyecan İngiltere-İran karşılaşması ile devam etti. İran&#39;ın kalecisi Beiranvand&#39;ın Hosseini ile çarpışması sonucu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/spor/2022-dunya-kupasi/ingiltere-6-2-iran-mac-ozeti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere 6-2 İran MAÇ ÖZETİ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3MaO1_sTJtPaQuL3W1I6bU7LgSIX3Hqkhbyz89CKslXfu1GxX__RLtzHEipkYwrQ5ei15ztoH" alt="İngiltere 6-2 İran MAÇ ÖZETİ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası B Grubu ilk maçında İngiltere, İran&#39;ı 6-2&#39;lik skorla mağlup ederek kupaya 3 puanla başladı. İşte maçın özet görüntüleri...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/ozet-ingiltere-iran-maci-kac-kac-dunya-kupasi-ingiltere-iran-mac-sonucu-6-2-h-3891244'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>(ÖZET) İngiltere İran maçı kaç kaç? Dünya Kupası İngiltere İran maç ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_372PizSg7-6CoJU46F3C4hcossVLXWyLBWPX1jjqUu-3i7lu3xqp3CXyK7kG7kG4gAi5y2fX" alt="(ÖZET) İngiltere İran maçı kaç kaç? Dünya Kupası İngiltere İran maç ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>35. dakikada Bellingham İngiltere&#39;yi öne geçiren golü atıyor. Bu kez ikinci gol 43. dakikada geliyor. Bukayo Saka ile İngiltere farkı 2&#39;ye çıkarıyor. İlk&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/2022/emlak/ingilterede-konut-fiyatlari-2023-ve-2024te-dusecek-7492208/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere&#39;de konut fiyatları 2023 ve 2024&#39;te düşecek</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1fHjIDzkQXkWOjMaPhMthNk_OP7ZDPv2igCTTuLf3wb27fMlxwLVk2QqJYjXYNElaDE1THz5d" alt="İngiltere&#39;de konut fiyatları 2023 ve 2024&#39;te düşecek" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İngiliz ekonomisinin 2025 yılında yeniden canlanabileceği belirtildi. Ülkede konut fiyatlarının 2025&#39;te yıllık bazda yüzde 1,2, 2026&#39;da yüzde 3 ve 2027&#39;de yüzde&nbsp;...</p></div>
            </div>
        </a><a href='https://t24.com.tr/haber/ingiltere-saglik-calisanlari-icin-vize-alma-ve-calisma-kosullarini-kolaylastirdi,1073819'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere, sağlık çalışanları için vize alma ve çalışma koşullarını ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBQ3UpyNjFDaP9mbrEyPgrdQjlAnL1bdsdwzL09i7lN2rhlaA2U3umbIZXdhJuy7lQb6NbTvat" alt="İngiltere, sağlık çalışanları için vize alma ve çalışma koşullarını ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metin, “İngiltere turist vizesi bile verirken kılı kırk yaran bir ülke. İngiltere&#39;ye gelmek için onlarca vize türü var. Ama hiçbirinde bu denli kolaylık&nbsp;...</p></div>
            </div>
        </a><a href='https://medimagazin.com.tr/saglik-calisani/ingiltere-gozunu-doktor-ve-saglik-calisanlarina-dikti-102941'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İngiltere gözünü doktor ve sağlık çalışanlarına dikti!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzb17DBu_MqOIcAxjx1GH8BpJLHr6P_yj-ikmiBk0as6pTV9_IxVhoU0HNtCyXOpdr7TJRGR2j" alt="İngiltere gözünü doktor ve sağlık çalışanlarına dikti!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2020 Ağustos ayında çıkan sağlık çalışanları vizesi ile İngilizce yeterlilik seviyesi üst seviyeden orta seviyeye indirildi. Bu vize ile sağlık çalışanları&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}