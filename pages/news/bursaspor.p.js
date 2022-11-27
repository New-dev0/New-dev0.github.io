import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bursaspor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bursaspor"/>
        <meta name="description" content="Trending News about Bursaspor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bursaspor</h1>
            <Image width={800} height={500} src="https://www.bursahakimiyet.com.tr/static/me/menemen-fk-bursaspor-maci-hangi-kanalda-canli-izleme-linki-1668230353-920-x750.jpg" alt="Bursaspor"/>
            <h3>Recent News</h3>
            <a href='https://www.bursahakimiyet.com.tr/bursaspor/arnavutkoy-belediyespor-bursaspor-maci-hangi-kanalda-canli-izleme-linki-920611'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arnavutköy Belediyespor-Bursaspor maçı hangi kanalda? (CANLI ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcReQyq_6DFXdA0zPB4NfLxb8kZIzyF7M01HUBWggm3cX7iyK6_2LblhYewMekdka-ru69VljrmF" alt="Arnavutköy Belediyespor-Bursaspor maçı hangi kanalda? (CANLI ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bursaspor&#39;un TFF 2. Lig&#39;in 16. haftasında deplasmandaki Arnavutköy Belediyespor maçının hangi kanaldan yayınlanacağı belli oldu. Bugün saat 14.00&#39;da başlayacak&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sporx.com/bursaspor-bahcesehir-i-deplasmanda-devirdi-SXHBQ997511SXQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bursaspor, Bahçeşehir&#39;i deplasmanda devirdi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThmxCofnRPrG2iicg5w6QVWskLc5yODIP0Lq0fzBUY5Jso50RluOVCAmTH2D7SiSGiTl7tlHld" alt="Bursaspor, Bahçeşehir&#39;i deplasmanda devirdi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye Sigorta Basketbol Süper Ligi 8. haftasında Frutti Extra Bursaspor, deplasmanda Bahçeşehir Koleji&#39;ni 74-69 yendi.</p></div>
            </div>
        </a><a href='https://www.bgazete.com.tr/haber/12610004/bursaspor-arnavutkoy-deplasmaninda-3-0-maglup-oldu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bursaspor Arnavutköy deplasmanında 3-0 mağlup oldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRE3K3zgSzF0mzZ287838iKcstsaOnLJeiMDAtqwf8sJptPpK-e0-fXbSTT-yaTtoUKPXRcUJvt" alt="Bursaspor Arnavutköy deplasmanında 3-0 mağlup oldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TFF 2. Lig 16. hafta mücadelesinde deplasmanda Arnavutköy Belediyespor&#39;a konuk olan Bursaspor sahadan mağlup ayrıldı.</p></div>
            </div>
        </a><a href='https://www.eurohoops.net/tr/tbl-tr/1425159/frutti-extra-bursaspor-bahcesehir-koleji-deplasmanindan-zorlansa-da-cikti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Frutti Extra Bursaspor, Bahçeşehir Koleji Deplasmanından Zorlansa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTaT8XX8MaH1bBgoJmvCvcBXImBOFOCbx94RMMLvOYSIV1AG_FWULfR2ns0Rt2ZKUjv-jcrTBJx" alt="Frutti Extra Bursaspor, Bahçeşehir Koleji Deplasmanından Zorlansa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bursaspor&#39;da ise Derek Needham 17 sayı – 4 asist, Zach Auguste 14 sayı – 6 ribaund, Dave Dudzinski 10 sayı – 7 ribaund, Ahmet Düverioğlu 6 sayı – 8 ribaund,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.olay.com.tr/bursaspor-agir-darbe-istanbulda-resmen-yikildik-1067962'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bursaspor&#39;a ağır darbe! İstanbul&#39;da resmen...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0YJHnin3OM-0XLzu1NzM6JaQiz8QFoSwjqIko2uf5vpiukBovW1jCr-qraGDNthVkYmxDzgiC" alt="Bursaspor&#39;a ağır darbe! İstanbul&#39;da resmen..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emre KURTBAY. TFF 2.Lig Beyaz Grup&#39;ta taraftarının yüzünü bir türlü güldüremeyen Bursaspor, İstanbul&#39;da da ağır yara aldı. Düzcespor beraberliği Menemen FK&nbsp;...</p></div>
            </div>
        </a><a href='https://www.normhaber.com/super-ligde-bursaspor-ozlemi-410610'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Süper Lig&#39;de Bursaspor özlemi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRT605GiP7arup8iTyxbqLt4YHOROs6VCcjcIQMyuRR-0_d5ZWMBMkjt91-ug7PHwXDQPTn0qCv" alt="Süper Lig&#39;de Bursaspor özlemi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yapılan paylaşıma, “Süper Lig&#39;e&#39;e damga vurmuş kadrolardan birisi. 2009/2010… Bu kadro hangi takıma ait?” ifadesi yer aldı.</p></div>
            </div>
        </a><a href='https://www.bgazete.com.tr/haber/12609615/bilecikte-bursaspor-spor-okullari-bilecik-sorumlusu-kaza-yapti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bilecik&#39;te Bursaspor spor okulları Bilecik sorumlusu kaza yaptı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEWhOerOoxxoOifwut5Abq5sZpYv3tIn2bFN1wdvgcy83QfMjhdkkGQ9c1v1jWL-_J1VncpTQi" alt="Bilecik&#39;te Bursaspor spor okulları Bilecik sorumlusu kaza yaptı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bilecik&#39;in Pazaryeri ilçesinde Bursaspor spor okulları Bilecik sorumlusu kaza yaptı. Alınan bilgiye göre meydana gelen kazada seyir halinde olan Bursaspor&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bursaspordabugun.com/tr/kose-yazilari/detay/en-sonunda-bursasporu-taraftari-da-terk-etti-363'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>En sonunda Bursaspor&#39;u taraftarı da terk etti!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkSbjvYkjH8nOlOW2yQMnnLQHNivh3eVF9Q3kKCbVoRlyWMNXchTOJ03J1NPDwKlSWKiXcsbtd" alt="En sonunda Bursaspor&#39;u taraftarı da terk etti!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ev sahibi ekibin gollerini Furkan Yaman(2) ve Adem Metin Türk, ağlara gönderirken, yeşil/beyazlıların üretkenlikten uzak bir görüntü sergilemesi gelecek maçlar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bursaspordabugun.com/tr/kose-yazilari/detay/bursaspor-camiasinin-yapacagini-mert-caymaz-yapti-364'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bursaspor camiasının yapacağını, Mert Caymaz yaptı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRGwzZj3Qfkn5n-yIKzobn39nWDstreh9cEAZyr3VEvxrcy0zjAGiPY00M1TEsU1UoZLiBm5d3-Xg" alt="Bursaspor camiasının yapacağını, Mert Caymaz yaptı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BURSASPOR CAMİASININ YAPACAĞINI, MERT CAYMAZ YAPTI! 26 2022 19:14. Barış Yalım. Sezon başında söylemiştim… 3&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gaziantepinhabercisi.com/haber/12608666/arnavutkoy-belediye-spor-bursaspor-canli-mac-izle'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arnavutköy Belediye Spor Bursaspor canlı maç izle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwraA2Fvck7QvFQxvkIqXt3shdwMsfGeiU84gSqIxRpU3OQOeknoqFUSeKh_gCFVKBCosYirOw" alt="Arnavutköy Belediye Spor Bursaspor canlı maç izle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arnavutköy Belediye Spor Bursaspor maçı için nefesler tutulmuş durumda. 2. Lig maçında Arnavutköy Belediye Spor Bursaspor karşı karşıya geleceği maça&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}