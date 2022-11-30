import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İran</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İran"/>
        <meta name="description" content="Trending News about İran" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İran</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/30/2007499/kapak_002648.jpg" alt="İran"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/spor/abd-dunya-kupasinda-irani-saf-disi-birakti-iran-0-1-abd-2007499'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD Dünya Kupası&#39;nda İran&#39;ı saf dışı bıraktı: İran 0-1 ABD</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT24vWZZOOjMrh-m0aifHuFxPleYQX7LTydyITHP894vJfKWAJISXwUeE3sR1I5w86w-oQS-lty" alt="ABD Dünya Kupası&#39;nda İran&#39;ı saf dışı bıraktı: İran 0-1 ABD" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD, Katar&#39;da düzenlenen 2022 FIFA Dünya Kupası&#39;nda karşılaştığı İran&#39;ı 1-0 mağlup ederek üst tura çıkmayı başardı.</p></div>
            </div>
        </a><a href='https://www.haberturk.com/iran-abd-maci-canli-yayin-3543049-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran: 0 - ABD: 1 | MAÇ SONUCU</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQetVsn02NdLd8xG1QvU1FV1GUb9CvvTCGKc31p6OUeYt-jxD-fhU5QEqxxYJm5nQgO9ZTG2IMp" alt="İran: 0 - ABD: 1 | MAÇ SONUCU" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran - ABD maçının dakika dakika özeti HTSPOR&#39;DA... İran ile Amerika Birleşik Devletleri, 2022 Dünya Kupası B Grubu&#39;nda karşı karşıya geldi kazanan tek&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/dunya-kupasi-2022/haberler/2022/11/29/iran-abd-canli-izle-2022-dunya-kupasi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran ABD CANLI İZLE | 2022 Dünya Kupası</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrGF5oClpA1D5JeaFzJ8PBguDSiDOepC7CtJrgHQY2F3rYwx2pYnE7Q2CJqP2ZP7fQ4k6hEepr" alt="İran ABD CANLI İZLE | 2022 Dünya Kupası" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Dünya Kupası&#39;nda grup maçlarının heyecanı sürüyor. B grubunun üçüncü maçında İran ile ABD karşı karşıya geliyor. Kazananın üst tura yükseleceği&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/dunya/dunya-kupasina-siyasi-durus-iraklilar-abd-iran-macinda-iki-ulkeyi-de-desteklemiyor-3892787'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupası&#39;na &#39;siyasi duruş&#39;: Iraklılar ABD-İran maçında iki ülkeyi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7xWmiWc_EqVe3ZwUfAWz-r3Q9zowmlw3KbQKhzLxNRXV1zxsLgIOfAfNQtuavE2D5hLAiGGwg" alt="Dünya Kupası&#39;na &#39;siyasi duruş&#39;: Iraklılar ABD-İran maçında iki ülkeyi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bu akşam oynanacak İran-ABD karşılaşmasını izlemek için başkent Bağdat&#39;ın işlek caddelerindeki kahvehanelerde bir araya gelen Iraklı futbolseverler,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rudaw.net/turkish/sports/29112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünyanın dört gözle beklediği ABD-İran karşılaşması bu akşam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0QfPA3FgncXDCqXNRZ8UCCigu4kIjzzcvgLCrDzGzOPMMv4eISSqTykA5z0mkeo75ZP07DQLz" alt="Dünyanın dört gözle beklediği ABD-İran karşılaşması bu akşam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen FIFA 2022 Dünya Kupası&#39;nda grup aşamasının son maçları başlıyor. Bugün oynanacak maçlar arasında kuşkusuz en çok dikkat çeken ABD ile İran&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/futbol/canli-izle-iran-abd-maci-canli-yayin-dunya-kupasi-b-grubu-7508245/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran tarihi fırsatı kaçırdı! ABD tur biletini aldı…</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxoqOMVlTUIiuPVz_bENOqEUrena49M_ZK6HOEUG2g9lSFyO5-ZAWD5fp3xaZ6tk9BqGO_egss" alt="İran tarihi fırsatı kaçırdı! ABD tur biletini aldı…" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>38. dakikada Pulusic&#39;in attığı golle öne geçen Amerika Birleşik Devletleri 1 puanı almak için çabalayan İran&#39;a bu fırsatı vermedi. Puan alması halinde tarihinde&nbsp;...</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/uluslararasi-af-orgutu-nden-iran-da-buyukelciligi-bulunan-ulkelere-acil-cagri-411835'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uluslararası Af Örgütü&#39;nden İran&#39;da büyükelçiliği bulunan ülkelere ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKCWiFuilYuoJJ3H2y17nIdO1q6_wd6WMATy9VsuIHO7xg1vbimmtp_Pr3k38cYpjEc2ZQHD7l" alt="Uluslararası Af Örgütü&#39;nden İran&#39;da büyükelçiliği bulunan ülkelere ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mahsa Amini&#39;nin hayatını kaybetmesinin ardından başlayan gösteriler gerekçesiyle tutuklanan kişilerin yargılanmaya başlayacağı hatırlatılan çağrıda, &quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/dunya-kupasi/irani-pulisic-ile-yenen-abd-son-16da'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İranı Pulisic ile yenen ABD son 16da</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFBiAXvCbOV_Mo4ErzaJHQcV_jtIRSoDiWp5ZteKxM3EfZtV6-gmCMo8D-rpmMXBr4jE1GUh5V" alt="İranı Pulisic ile yenen ABD son 16da" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası B Grubu&#39;nda ABD, İran&#39;ı Pulisic&#39;in bulduğu golle 1-0 yenerek son 16 turuna kaldı.</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/spor/2022-dunya-kupasi/iran-0-1-abd-mac-ozeti-izle'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran 0-1 ABD MAÇ ÖZETİ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOCvuD-o1u-v8fsYHMkuKiaZCBwZbUyxPVe5_VK_RYtxnVl8Xsv8nHGiLzW13Hk0rI2jKChX97" alt="İran 0-1 ABD MAÇ ÖZETİ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD&#39;ye galibiyeti getiren golü 38&#39;inci dakikada Christian Pulisic kaydetti. Bu sonuçla ABD, B grubunu 5 puan ile 2&#39;nci bitirerek son 16&#39;ya yükselen takımlar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.basnews.com/tr/babat/785128'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İsrail ve ABD&#39;den hava tatbikatı: Hedef İran&#39;ın nükleer programı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDHAv47jRYht_Nk_B0_5Dj7g64tl7zrsr6cOsirbEu1g4JLvjsQoa0QUNhvfBBCtLDDKirJqSE" alt="İsrail ve ABD&#39;den hava tatbikatı: Hedef İran&#39;ın nükleer programı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BasNews - İsrail ve ABD hava kuvvetleri, &quot;İran&#39;ın nükleer programını hedef almayı kurgulayan&quot; hava tatbikatına başlıyor. İsrail Ordu Sözcüsü Avichay Adraee,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}