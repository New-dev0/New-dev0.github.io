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
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/MyJURjpWuUKtsYfM_DJtIg.jpg?width=1080&mode=crop&scale=both" alt="İran"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/sporskor/iran-galleri-duraklamalarda-yikti,pLFldmZGnU2F4KkYbgWmDw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran, Galler&#39;i duraklamalarda yıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS77_DO-alfWVzhOMfpoVN3ER2ufY0ncovW0O7HLAM862ItI78nER6_6dis94qakRKGFmTOftI6" alt="İran, Galler&#39;i duraklamalarda yıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 Dünya Kupası B Grubu&#39;nda Galler ile İran karşılaştı. İran, 90+8. ve 90+11. dakikalarda bulduğu gollerle sahadan 2-0 galip ayrıldı.</p></div>
            </div>
        </a><a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/iran-uzatmada-costu-265838.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran uzatmada coştu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXcg7Z1lf-PHde3bdgAfx3bZtzdEcCyuClE8YegCbgVvZTgGttPw8IXX_BUFmohWqhVHnnVyDV" alt="İran uzatmada coştu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;ın ev sahipliğinde düzenlenen 2022 FIFA Dünya Kupası&#39;nın B Grubu&#39;nda İran, 10 kişi kalan Galler&#39;i uzatma dakikalarında bulduğu gollerle 2-0 mağlup&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/dunyadan-spor/galler-iran-canli-yayin-dunya-kupasi-b-grubu-7500170/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran Galler karşısında son dakikada coştu ilk kırmızı kart çıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTk6x7qaKEJgspO-2_LJJRt7Kp4R0GqEbHgh4QeQHQSxdzpJtqKEl3j80K58kwYDTZ_E3Sw3TKk" alt="İran Galler karşısında son dakikada coştu ilk kırmızı kart çıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran&#39;ı galibiyete taşıyan golleri 90+8. dakikada Roozbeh Cheshmi ve 90+11. dakikada Ramin Rezaeian kaydetti. Galler kalecisi Wayne Hennessey, 86. dakikada 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/dunya-kupasi-2022/haberler/2022/11/26/irandan-tarihi-zafer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran&#39;dan tarihi zafer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0FvBN1Ze_ZfZfLhEq76pRGFDI2WOsvcZXLnEC8rfGxeSpF2_sj6jOISzdMdTj7XMLbhrABwb8" alt="İran&#39;dan tarihi zafer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Birçok fırsatı harcayan ve iki topu direkten dönen İran, 90+8&#39;de Cheshmi ve 90+11&#39;de Rezaeian&#39;la zafere uzandı.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/iranin-galler-galibiyeti-sonrasi-buyuk-sevinc-2006199'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İran&#39;ın Galler galibiyeti sonrası büyük sevinç!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgLdkmR_bH8t1-pJj-KspuiihAlWhWSe8XTo31V9SJG5FTe9xWDmn70Q2jbIhaUcfsivkI6axQ" alt="İran&#39;ın Galler galibiyeti sonrası büyük sevinç!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İran Milli Takımı&#39;nın Katar&#39;da düzenlenen 2022 FİFA Dünya Kupası maçında Galler karşısında aldığı galibiyetin ardından ülkenin birçok şehrinde sevinç&nbsp;...</p></div>
            </div>
        </a><a href='http://tr.euronews.com/2022/11/25/2022-dunya-kupasi-iran-gruptan-nasil-cikar-ilk-16ya-kalabilir-mi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 Dünya Kupası: İran gruptan nasıl çıkar, ilk 16&#39;ya kalabilir mi?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaJlXhrru19SYuQxYEtsaUPaPw26GYjYdAOs7ttMnNdEqiBOYuDU6vXwzqvkE8UaA3Fnzg1_8g" alt="2022 Dünya Kupası: İran gruptan nasıl çıkar, ilk 16&#39;ya kalabilir mi?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Katar&#39;da devam eden Dünya Kupası ilk maçında İngiltere&#39;ye 6-2 kaybeden İran, ikinci maçında Galler&#39;i 2-0 yenerek ilk 16&#39;ya kalmak için avantaj elde etti.</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/dunya-kupasinin-ilk-kirmizi-karti-kaleciye-iran-uzatmalarda-kazandi-haber-1590854'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupası&#39;nın ilk kırmızı kartı kaleciye: İran uzatmalarda kazandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGgKT4ddbCam1wouN3InXC_mVvPQutqEHIQWvpUbhqtM6mHuL1h2foFCf0ktm51gB7ifXBNGvA" alt="Dünya Kupası&#39;nın ilk kırmızı kartı kaleciye: İran uzatmalarda kazandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DUVAR - 2022 FIFA Dünya Kupası&#39;nda İran, B Grubu&#39;ndaki ikinci maçında Galler&#39;i 2-0 mağlup etti. İlk maçı İngiltere&#39;ye 6-2 gibi farklı bir skorla kaybeden İran,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}