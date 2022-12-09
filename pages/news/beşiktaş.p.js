import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Beşiktaş</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Beşiktaş"/>
        <meta name="description" content="Trending News about Beşiktaş" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Beşiktaş</h1>
            <Image width={800} height={500} src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1962000/besiktas-charleroi-aa-1962106.jpg" alt="Beşiktaş"/>
            <h3>Recent News</h3>
            <a href='https://www.trthaber.com/haber/spor/besiktas-charleroiyi-devirdi-729437.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş, Charleroi&#39;yı devirdi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcMGijrlSjn1tfHHgP_zWEb-AfwRoUP1qWlP2yPWRMRlQbULu6SE3ejxbzXqc6H79AQwHkHizB" alt="Beşiktaş, Charleroi&#39;yı devirdi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Teknik direktör Şenol Güneş, 59. dakikada Dele Alli-Semih Kılıçsoy, Redmond-Kerem Atakan Kesgin, Tayyip Talha Sanuç-Berkay Vardar ve Mert Günok-Ersin Destanoğlu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/besiktas-antalyaya-galibiyetle-basladi-2010188'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş, Antalya&#39;ya galibiyetle başladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR860ZBrk4I44TgkLrMFS0tM5VFx3R_FQ5O4yU45BVcuLDxZAJcp5WKeN20oN7KgEk_6QXwTTaT" alt="Beşiktaş, Antalya&#39;ya galibiyetle başladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beşiktaş, Antalya kampında oynadığı ilk hazırlık maçında Charleroi&#39;yi 2-1 mağlup etti. Siyah-beyazlılarda Jackson Muleka 1 gol ve 1 asistle yıldızlaştı.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/besiktas/2022/12/08/besiktas-charleroi-2-1-mac-sonucu-ozet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş Charleroi: 2-1 MAÇ SONUCU ÖZET</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ9oksyaJZ0C8yJln_f1tihJR3gZKF4H_knwjWUYqYdLZzge1g1uOw3YmFUnGwEvjhucwPV52Ie" alt="Beşiktaş Charleroi: 2-1 MAÇ SONUCU ÖZET" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA 2022 Dünya Kupası&#39;na verilen arada Beşiktaş hazırlıklarına son hız devam ediyor. Siyah beyazlılar son olarak Belçika ekibi Charleroi ile hazırlık&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/besiktas-charleroi-mac-sonucu-2-1-2312693'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş-Charleroi maç sonucu: 2-1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzbSu2ekOEtbt-TQYMFmKaCT5jww7STImwC8ZVeqJB0fyJVoJTaH-YGZ8-vaAXulzj-_6sYes6" alt="Beşiktaş-Charleroi maç sonucu: 2-1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası nedeniyle lige verilen arada Vodafone Parkta İstanbulspor ve Karagümrükle hazırlık maçı oynayan Siyah-Beyazlılar, Antalyadaki ilk özel maçına&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/besiktastan-bomba-transfer-ezeli-rakibin-kalbini-aliyor-2312759'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş&#39;tan bomba transfer! Ezeli rakibin kalbini alıyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfWrpNv3oS74vmYVZurVs_PWNO_4YBgFu383h6EGzrqSoAdV1Xcd_Sc2H0pTMA3c8zR87huPPc" alt="Beşiktaş&#39;tan bomba transfer! Ezeli rakibin kalbini alıyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Süper Lige verilen arada zirveye tırmanmak için hazırlıklarına tam gaz devam eden Beşiktaş, Antalyada kampa girdi. Başkan Ahmet Nur Çebinin de kampa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntvspor.net/futbol/kartal-yogun-yagis-altinda-kanatlandi-639220c966db22c46892e896'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kartal yoğun yağış altında kanatlandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8SbZ_y0dV-MDpZceZhKW05GOBqtzeVmYFxD50kX1yHATGfjiSjgQlUSNIdqzZss4WPdwgCwJW" alt="Kartal yoğun yağış altında kanatlandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beşiktaş, Gloria Sports Arena&#39;da oynanan maçı 2-1 kazandı. ⚫️BEŞİKTAŞ HABERLERİ⚪️. Maçta goller; 16.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/besiktas/2022/12/08/besiktas-haberleri-senol-gunesten-jackson-mulekaya-ozel-ilgi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BEŞİKTAŞ HABERLERİ: Şenol Güneş&#39;ten Jackson Muleka&#39;ya özel ilgi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnfmA1n7muTsJYUgX6R34RrWDSomQSGkKOVO0rDzL_Q8VOrJJG2rkmwztAU6ltIN5HDmtSJFM7" alt="BEŞİKTAŞ HABERLERİ: Şenol Güneş&#39;ten Jackson Muleka&#39;ya özel ilgi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beşiktaş, Dünya Kupası arası nedeniyle lige verilen arada çalışmalarını Antalya&#39;da sürdürüyor. Siyah-beyazlılarda teknik direktör Şenol Güneş,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}