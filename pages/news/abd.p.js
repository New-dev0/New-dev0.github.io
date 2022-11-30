import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ABD</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ABD"/>
        <meta name="description" content="Trending News about ABD" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ABD</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/BPUECBT9pUu38Xakcn3SwA.jpg?width=1080&mode=crop&scale=both" alt="ABD"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/turkiye/son-dakika-haberi-abdden-pence-kilic-aciklamasi,HWkr_VTT1k6afm0xCxbRSw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA HABERİ: ABD&#39;den Pençe-Kılıç açıklaması</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcScIiBjUZ_-aMY3hiF-oCtwIl_cc9zgM6PMohVeF5K98P8e3FaZz2rXfztuhO6eZJDEJBlOy8ON" alt="SON DAKİKA HABERİ: ABD&#39;den Pençe-Kılıç açıklaması" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SON DAKİKA HABERİ: ABD Savunma Bakanlığı&#39;ndan Türkiye&#39;nin PKK/YPG terör örgütüne yönelik Pençe-Kılıç Harekatı&#39;na ilişkin açıklama geldi.</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/dunya/abd-ukraynaya-patriot-verecek-mi-pentagondan-aciklama,c9T6_jCHzkSdFLmNi_Dd8Q'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD, Ukrayna&#39;ya Patriot verecek mi? Pentagon&#39;dan açıklama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeJ4d7soqoYXNjyzuTG4DOXCG5mtDvsqMl3quEWvP26_sYFcPC0iIcQ2HFf_YomXsPBbFlul-X" alt="ABD, Ukrayna&#39;ya Patriot verecek mi? Pentagon&#39;dan açıklama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ukrayna Devlet Başkanı Zelenski&#39;nin Rusya&#39;nın saldırılarına karşı hava savunma sistemleri talebine ABD&#39;den yanıt geldi. ABD Savunma Bakanlığı Sözcüsü Ryder,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/spor/futbol/2022/11/29/iran-ile-abd-b-grubu-son-macinda-karsilasiyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD, İngiltere&#39;nin ardından son 16&#39;da!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSV1SG6E40uCkjEKXeTyd1274wB9bVLKspylrmkPD4ZOPRfGUO8QZ25QXepSoSexpZu3oAAcVwh" alt="ABD, İngiltere&#39;nin ardından son 16&#39;da!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası B Grubu üçüncü maçında İran ile ABD karşı karşıya geldi. Al Thumama Stadı&#39;nda İspanyol hakem Mateu Lahoz&#39;un yönettiği karşılaşmada ABD,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/dunyadan-spor/abd-son-16-turuna-yukseldi-ve-hollandanin-rakibi-oldu/2751465'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD son 16 turuna yükseldi ve Hollanda&#39;nın rakibi oldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNnjOfwlN0lyBTpqjuiFUMfA1S_wX0iPld9dDO5Ap9lbFdhq5fbhdNWYA9xK4Lb4wbD1o0qJ4C" alt="ABD son 16 turuna yükseldi ve Hollanda&#39;nın rakibi oldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası&#39;nda oynanan B Grubu üçüncü maçında ABD, İran&#39;ı 1-0 mağlup etti. - Anadolu Ajansı.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/dunya-kupasi-2022/haberler/2022/11/29/iran-0-1-abd-mac-sonucu-ozet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran 0-1 ABD MAÇ SONUCU - ÖZET</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFxjZDp8D66nN40DaqIfLow9zeoB2b_uQQxVDZEo7-53JqNmC7PzPlJSjbVDf8QvQ67b6niC6S" alt="İran 0-1 ABD MAÇ SONUCU - ÖZET" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen Dünya Kupası heyecanı sürüyor. B grubu mücadelesinde ABD Christian Pulisic&#39;in attığı golle İran&#39;ı 1-0 mağlup ederek son 16 turuna adını&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/2022/dunya/abd-hersonda-rusya-ile-ukrayna-arasindaki-catismalar-azaldi-7508502/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD: Herson&#39;da Rusya ile Ukrayna arasındaki çatışmalar azaldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmYG_kfUdNCSFZnxv-soj6p58rqJlq5qMnvRV9QQQFsDq5tEKxiyMe_KigL-9IPUD6dukoHbq8" alt="ABD: Herson&#39;da Rusya ile Ukrayna arasındaki çatışmalar azaldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD&#39;li bir askeri yetkili, Rusya&#39;nın Herson&#39;da Dinyeper nehrinin doğusuna geçtiğini ve bölgede Ukrayna güçleri ile Rus ordusu arasındaki çatışmaların&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/2022/dunya/abdde-cumhuriyetci-liderden-ukrayna-yardimlari-konusunda-acik-cek-yok-mesaji-7508252/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD&#39;de Cumhuriyetçi liderden Ukrayna yardımları konusunda “Açık ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSHSgNaEuVWIYKMHjmRcw6hfF3SF-Zp0YhEtX4TKPv7q-EFeXuESdhop6kNtHeWyIGMISuUBqrp" alt="ABD&#39;de Cumhuriyetçi liderden Ukrayna yardımları konusunda “Açık ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eski ABD Başkanı Donald Trump&#39;ın Yahudi karşıtı görüşleriyle bilinen Nick Fuentes ile yaptığı ve tartışmalara yol açan görüşmesinin sorulması üzerine ise&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rudaw.net/turkish/sports/29112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünyanın dört gözle beklediği ABD-İran karşılaşması bu akşam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0QfPA3FgncXDCqXNRZ8UCCigu4kIjzzcvgLCrDzGzOPMMv4eISSqTykA5z0mkeo75ZP07DQLz" alt="Dünyanın dört gözle beklediği ABD-İran karşılaşması bu akşam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da düzenlenen FIFA 2022 Dünya Kupası&#39;nda grup aşamasının son maçları başlıyor. Bugün oynanacak maçlar arasında kuşkusuz en çok dikkat çeken ABD ile İran&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/sporskor/son-dakika-dunya-kupasi-ingiltere-ve-abd-son-16-turunda,0pMFk2d_mkuaqTvhSY8eSA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: Dünya Kupası: İngiltere ve ABD son 16 turunda</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPh2WYdKB4eC9h2eJrO7Duht1t-A1YOtW2QxYTe__U9M1TmP4pIu8lNfx2FX2b9WwDEdvrQ5gv" alt="SON DAKİKA: Dünya Kupası: İngiltere ve ABD son 16 turunda" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SON DAKİKA: 2022 FIFA Dünya Kupası B Grubu&#39;nda son maçlar oynandı. İngiltere Galler&#39;i 3-0, ABD de İran&#39;ı 1-0 yendi. Bu sonuçların ardından İngiltere ve ABD&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/dunya/suriyede-pkk-ypg-ile-devriyelerini-azaltan-abd-pence-kilic-harekati-nedeniyle-kaygiliyiz-3892797'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Suriye&#39;de PKK/YPG ile devriyelerini azaltan ABD: Pençe-Kılıç ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSo3GVBkW_-DlMeIqhMOSHZamwnW3v4V2uREekgsWJPRcl4SrLL4y3ugOe_ILyP1zTC12vLg9or" alt="Suriye&#39;de PKK/YPG ile devriyelerini azaltan ABD: Pençe-Kılıç ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD Savunma Bakanlığı (Pentagon), Türkiye&#39;nin Suriye&#39;de terör örgütü PKK/YPG&#39;ye karşı devam eden operasyonları nedeniyle &#39;kaygılı&#39; olduğunu açıkladı.</p></div>
            </div>
        </a>
        </Template></>;
}