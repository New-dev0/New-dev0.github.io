import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Turkiye haritası</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Turkiye haritası"/>
        <meta name="description" content="Trending News about Turkiye haritası" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Turkiye haritası</h1>
            <Image width={800} height={500} src="https://img3.aksam.com.tr/imgsdisk/2022/11/23/t25_turkiye-fay-hatti-haritas-197.jpg" alt="Turkiye haritası"/>
            <h3>Recent News</h3>
            <a href='https://www.aksam.com.tr/trend/turkiye-fay-hatti-haritasi-2022-evimin-altindan-fay-hatti-geciyor-mu-marmara-fay-hatti-nerede/haber-1321608'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye fay hattı haritası 2022! Marmara fay hattı nerede&quot; Evimin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT2y3yrbn_wUsbDf9PDQ3RRSfKBEc7XnDaNTFJDoGC8UfS_6Rt2Jr_y4bs-eWpV1a2bbCssEOuz" alt="Türkiye fay hattı haritası 2022! Marmara fay hattı nerede&quot; Evimin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fay hattı sorgulama ve Türkiye fay hattı haritası Düzce depreminin ardından araştırılmaya başlandı. 23 Kasım sabah 04.08&#39;de merkez üssü Düzce&#39;de meydana&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/deprem-riski-olan-iller-turkiye-fay-deprem-haritasi-2022-hangi-iller-riskli-aktif-pasif-fay-hatlari-haritasi-h-3891646'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deprem riski olan iller: Türkiye fay- deprem haritası 2022| Hangi iller ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNWcUE22oaponbPD3PB2Pgv6hHOy_3O0pFikUpYHTXq3PGFdZh6UTSIAOjVyZyvcPSgDHGzOFB" alt="Deprem riski olan iller: Türkiye fay- deprem haritası 2022| Hangi iller ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye, 23 Kasım sabahı Düzce&#39;de meydana gelen 5.9 büyüklüğündeki depremle sallandı. Özellikle büyük şehirler için büyük bir tehlike oluşturan deprem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/bilgi/galeri-turkiye-deprem-bolgeleri-nerelerdir-turkiye-deprem-risk-haritasi-hangi-iller-deprem-bolgesi-42175469'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye deprem bölgeleri nerelerdir? Türkiye deprem risk haritası ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSTCeEzD-vIr7CReZyKTlBboiBcYZ5__rsYbYocDg0P6Gj_v-6KoRCZwiuKZNRLJEXLBtAvS-E" alt="Türkiye deprem bölgeleri nerelerdir? Türkiye deprem risk haritası ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Merkez üssü Düzce Gölyaka olarak açıklanan 5.9 büyüklüğündeki deprem sonrası vatandaşlar yaşadıkları şehirlerde deprem riski olup olmadığını araştırıyor.</p></div>
            </div>
        </a><a href='https://www.turkiyegazetesi.com.tr/gundem/turkiye-deprem-fay-hatti-haritasi-duzce-fay-hatti-hangi-illerden-geciyor-929319'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Düzce fay hattı hangi illerden geçiyor? Türkiye fay hattı haritası ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhwfwE6MzqOfxznHNLPHQTUzpc4mohVCcyfbgxiJSxbKEc1y4WnuHifu_JQI3HZS6JyBTbBRXf" alt="Düzce fay hattı hangi illerden geçiyor? Türkiye fay hattı haritası ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TÜRKİYE DEPREM FAY HATTI HARİTASI! En son 1996 yılında yürürlüğe giren Türkiye Deprem Bölgeleri Haritası, AFAD Deprem Dairesi Başkanlığı tarafından yenilenmiş,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tgrthaber.com.tr/gundem/duzce-depremi-hangi-fay-turkiyede-kac-fay-hatti-var-nerelerden-geciyor-iste-turkiye-deprem-fay-hatti-haritasi-2856906'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Düzce depremi hangi fay? Türkiye&#39;de kaç fay hattı var, nerelerden ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSij0RsmbObRV1Hi5MfX1DjKY-NwmFmoBCH6Riq-gJRO5gsxEVzdvWaDeRiG7Af-2SBXTzHP-IQ" alt="Düzce depremi hangi fay? Türkiye&#39;de kaç fay hattı var, nerelerden ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Düzce&#39;de yaşanan 5.9 büyüklüğündeki depremin ardından vatandaşlar, Türkiye deprem fay hattı haritasını araştırmaya başladı. Dünyanın en hızlı hareket eden&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haber7.com/yasam/haber/3280252-adresten-fay-hatti-sorulama-nasil-yapilir-sakarya-fay-hatti-haritasi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adresten fay hattı sorulama nasıl yapılır? Sakarya fay hattı haritası...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6sMvk_bIOo5uNM8Qk0OfcbTEfvOCoBe7kXO6bVdpx3yPu8JVAZHwGEz7UWOMUg6PCB1bzDXDa" alt="Adresten fay hattı sorulama nasıl yapılır? Sakarya fay hattı haritası..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haber 7 - Son zamanlar üst üste yaşanan depremler sonucunda birçok kişi yaşadığı bölgenin deprem risk haritasına ulaşıp fay hattına ne kadar yakın olduğunu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}