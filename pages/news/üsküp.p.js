import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Üsküp</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Üsküp"/>
        <meta name="description" content="Trending News about Üsküp" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Üsküp</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/rurliGATK02cyInI5zAxIA.jpg?width=1080&mode=crop&scale=both" alt="Üsküp"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/seyahat/uskup-nerede-nerenin-ilcesi,lkIcnZRaLEWUOUYUfv0LNg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Üsküp nerede, nerenin ilçesi? Üsküp&#39;ün konumu ve kültürü ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSaIYrpkn3YuKVxNivCSsZ43mJz5up-65A9j6FgMOTpF1OfcR7PSv7CYenmUnQN6TpS54ui_PY" alt="Üsküp nerede, nerenin ilçesi? Üsküp&#39;ün konumu ve kültürü ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tarih boyunca birçok farklı medeniyete ev sahipliği yapan Kuzey Makedonya&#39;nın başkenti Üsküp, farklı mimari tarzlarıyla ziyaretçilerin ilgisini çekiyor.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/bilgi/galeri-uskup-nerede-nereye-bagli-geleneksel-uskup-yemekleri-ve-konumu-42180276'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÜSKÜP NEREDE, HANGİ ÜLKEDE? Üsküp&#39;ün konumu ve tarihi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlRHipW-_4uMpxXC5hwkhqn7FeaWkNe5oHAeb7WeafGs1MQ_dKLCakhfWxsM92W_I5MDCG5y9c" alt="ÜSKÜP NEREDE, HANGİ ÜLKEDE? Üsküp&#39;ün konumu ve tarihi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kuzey Makedonya&#39;nın başkenti ve en büyük kentidir. Ülkenin politik, kültürel, ekonomik ve akademik merkezi olan kent, ortasından geçen Vardar Nehri tarafından&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/uskup-nerede-nereye-bagli-hangi-ulkede-uskup-gezilecek-yerler-ve-yemekleri-ile-gundemde'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Üsküp nerede, nereye bağlı, hangi ülkede, haritada nerede? Üsküp ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTuC2MbHwwM2wGnwv8R-JOqIoxm7wctwpRSX2PmabrWKPgB3UHdLowRzupmbTjS_cm1zB2Us1MC" alt="Üsküp nerede, nereye bağlı, hangi ülkede, haritada nerede? Üsküp ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MasterChef Türkiye yeni bölümde Üsküp&#39;te! Balkan coğrafyasının en gözde şehirleri arasında yer alan Skopje yani Üsküp gezilecek yerler, tarihi ve kültürel&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/uskup-nerede-nereye-bagli-uskup-hangi-kitada-haritadaki-yeri-nerede-vize-istiyor-mu-1111385'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Üsküp Nerede, Nereye Bağlı? Üsküp Hangi Kıtada, Haritadaki Yeri ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7lrG8aU20t-czhl46sfwehj3qK-8dMe8rWPoiNLFq_MoScHYv9uUI8pRVKkHOQftw8ahpC7sS" alt="Üsküp Nerede, Nereye Bağlı? Üsküp Hangi Kıtada, Haritadaki Yeri ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Üsküp Vize İstiyor mu? Umuma Mahsus (Bordo), Hususi (Yeşil), Hizmet (Gri) ve Diplomatik (Siyah) pasaport sahibi olan Türkiye Cumhuriyeti vatandaşları; Kuzey&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/galeri/uskup-nerede-hangi-ulkede-uskup-nereye-bagli-hangi-kitada-uskup-haritadaki-konumu-6866116'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Üsküp nerede, hangi ülkede? Üsküp nereye bağlı, hangi kıtada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPF0JyJf3welwy1xnhwKYkZqchCiuy4ic1dot3CHzM6mpuuYt_pVQRZOMyDBz3-IDDxQee4Xcb" alt="Üsküp nerede, hangi ülkede? Üsküp nereye bağlı, hangi kıtada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Üsküp, Balkanlar&#39;ın eng özde merkezlerinden biridir. Kentin ortasından geçen Vardar Nehri ilke şehir ikiye ayrılıyor. MasterChef&#39;te de yer alan Üsküp&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ensonhaber.com/seyahat/makedonya-vizesi-2022-uskup-vize-istiyor-mu-pasaport-gerekli-mi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Makedonya vizesi 2022: Üsküp vize istiyor mu? Pasaport gerekli mi?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmibWA1rbniwmi4BoZabbV527YJXdNUgziwrZXVHh6i8I6UbIWPKCUkzYGspYnRG4Q9q_VlMrx" alt="Makedonya vizesi 2022: Üsküp vize istiyor mu? Pasaport gerekli mi?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MasterChef&#39;in dış çekimi bu akşam Kuzey Makedonya&#39;nın başkenti Üsküp&#39;te gerçekleşiyor. İzleyiciler ise Üsküp seyahati hakkında bilgileri araştırıyor.</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/trend/masterchef-1-aralik-nerede-uskupun-neresinde-cekiliyor-uskup-nerede-hangi-ulkede/haber-1323658'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Üsküp nerede, hangi ülkede&quot; MasterChef 1 Aralık nerede, Üsküp&#39;ün ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzjqxxvfgpf6qgZsgVbZeYs5yicWPS3odNukQBGrOpRNltXwBjJKIcnrUQEamXKf0yJ-RHuASf" alt="Üsküp nerede, hangi ülkede&quot; MasterChef 1 Aralık nerede, Üsküp&#39;ün ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tv8&#39;in fenomen yarışması MasterChef Türkiye finale adım adım ilerlerken stüdyo dışı çekimlerine de devam ediyor. Programda bugünkü dokunulmazlık yarışı&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}