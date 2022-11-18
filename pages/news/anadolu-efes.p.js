import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anadolu Efes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anadolu Efes"/>
        <meta name="description" content="Trending News about Anadolu Efes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anadolu Efes</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/duMB_ufFlkS1Dwf-Rr_zJA.jpg?width=1080&mode=crop&scale=both" alt="Anadolu Efes"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/sporskor/son-dakika-euroleague-anadolu-efes-barcayi-devirdi,6WmuDTV2IkixEAM4mrU-xQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA: EuroLeague: Anadolu Efes Barça&#39;yı devirdi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaRe4POtAqdxMwcseDxsqtj0bN4DriwvqilSpPlY5_SYGxFdwfP--iOUGXkNYS-xigH-Tnc_D5" alt="SON DAKİKA: EuroLeague: Anadolu Efes Barça&#39;yı devirdi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SON DAKİKA: Anadolu Efes Erkek Basketbol Takımı, THY Avrupa Ligi&#39;nin 8. haftasında İspanya temsilcisi Barcelona&#39;yı 96-86 yendi.</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/spor/basketbol/anadolu-efes-barcelonayi-devirdi-seri-sona-erdi-7485944/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes Barcelona&#39;yı devirdi seri sona erdi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYUgZ503HZM3vVUDB9tjG4q1Wz62pv1srywERKqxwavlAs3lF3xpbcV_ltrFYfK9L97tEmB9fK" alt="Anadolu Efes Barcelona&#39;yı devirdi seri sona erdi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Efes, sahasında konuk ettiği Barcelona&#39;yı mağlup ederek Euroleague&#39;deki galibiyet hasretine son verdi. Barcelona&#39;nın da galibiyet serisi İstanbul&#39;da&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/euroleague/2022/11/17/anadolu-efes-barcelona-96-86-mac-sonucu-ozet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes Barcelona: 96-86 MAÇ SONUCU ÖZET</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1M3I26EPTUpA8CK_FBF67BUFFcqCyrUJmM18YpDNRcVlO4qzDJLjDhsHnj_gaEAmivYrFreIs" alt="Anadolu Efes Barcelona: 96-86 MAÇ SONUCU ÖZET" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THY EuroLeague&#39;in 8. hafta maçında temsilcimiz Anadolu Efes, Barcelona&#39;yı konuk etti. Anadolu Efes rakibini sahasında 96-86&#39;lık skorla mağlup etmeyi başardı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/kralspor/basketbol/anadolu-efes-euroleaguede-barcelonayi-yendi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes, Euroleaguede Barcelonayı yendi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTkOOsopLFbOr6QxnfU2alBu-l8DEf9aX0Y4_0OHTDMPuPvOOc5g22XaHBfsUkhyMoYJwkoJuUH" alt="Anadolu Efes, Euroleaguede Barcelonayı yendi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İkinci çeyreğin başında pota altını iyi kapatan Anadolu Efes; Micic, Dunston ve M&#39;Baye ile bulduğu basketlerle 13. dakikada 26-25 öne geçti. Karşılıklı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurohoops.net/tr/euroleague-tr/1420403/vasilije-micic-ve-will-clyburn-tasidi-anadolu-efes-barcelonayi-yikti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vasilije Micic ve Will Clyburn Taşıdı; Anadolu Efes, Barcelona&#39;yı Yıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTU3bcBApwJZ2Se8gbNFEDMSL4U_DfIUCIUf0Uq3aMljMAd7twahwe4tjmrjXFO0s3BP8sN4b9B" alt="Vasilije Micic ve Will Clyburn Taşıdı; Anadolu Efes, Barcelona&#39;yı Yıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeague&#39;in 8. haftasında temsilcimiz Anadolu Efes, Barcelona&#39;yı konuk etti. Lacivert-beyazlılar rakibi karşısında sahadan 96-86&#39;lık skorla&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/ozet-anadolu-efes-barcelona-mac-sonucu-96-86-2310318'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>(ÖZET) Anadolu Efes - Barcelona maç sonucu: 96-86</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTA6Rg7R0RlgHW4H2d2mif4TKRVLyb2LU5-2rkfJOqXcp3FAn_11beR3mHBTMtXDYM1MTqgCw3" alt="(ÖZET) Anadolu Efes - Barcelona maç sonucu: 96-86" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turkish Airlines EuroLeaguein 8. haftasında temsilcilerimizden Anadolu Efes, sahasında ağırladığı Barcelonayı 96-86 mağlup etti. Anadolu Efesin 94 sayısı,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/spor/anadolu-efes-basantrenoru-ergin-ataman-galibiyete-ihtiyacimiz-vardi-2003812'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anadolu Efes Başantrenörü Ergin Ataman: &#39;Galibiyete ihtiyacımız vardı&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROrG2r_oplK-HnIzt4VsnzqjWzTQJzB3_pDr9BedOQDuI88rsmrPc0jRnhYQ7KxLDkFCQ59tqm" alt="Anadolu Efes Başantrenörü Ergin Ataman: &#39;Galibiyete ihtiyacımız vardı&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Efes Başantrenörü Ergin Ataman, THY EuroLeague&#39;de alınan Barcelona galibiyetinin ardından açıklamalarda bulundu. Ataman, Galibiyet bizim için&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}