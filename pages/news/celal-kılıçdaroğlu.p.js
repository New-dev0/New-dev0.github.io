import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Celal Kılıçdaroğlu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Celal Kılıçdaroğlu"/>
        <meta name="description" content="Trending News about Celal Kılıçdaroğlu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Celal Kılıçdaroğlu</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/sAevtZwt3kKZzSiqe-WtKw.jpg?width=1080&mode=crop&scale=both" alt="Celal Kılıçdaroğlu"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/turkiye/kemal-kilicdaroglunun-kardesi-celal-kilicdaroglu-kimdir,wPAxL-JhmUWBMjBsWITYow'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu kimdir, kaç ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPAxVgf4TGOy16pszxVeX1fKYJL5gGIUpXpRwvPpAaJAulIsigE4zXRKP4wLFTlNefl-mMXBEo" alt="Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu kimdir, kaç ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP Genel Başkanı Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu yaşamını yitirdi. Kılıçdaroğlu, 19 Kasım 2022&#39;de Kocaeli&#39;de akşam TSİ 22:00 civarında&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/celal-kilicdaroglu-kimdir-celal-kilicdaroglu-neden-hayatini-kaybetti-2004247'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celal Kılıçdaroğlu kimdir? Celal Kılıçdaroğlu neden hayatını kaybetti?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqF7ZadkDY0MTUACjhBUA8dA4rSQR_RGoVSNCPSFdCC9F57TU4mgby8UEKLq5NS1Yd11CdajS0" alt="Celal Kılıçdaroğlu kimdir? Celal Kılıçdaroğlu neden hayatını kaybetti?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP Genel Başkanı Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu yaşamını yitirdi. Peki, Celal Kılıçdaroğlu kimdir? Celal Kılıçdaroğlu neden hayatını&nbsp;...</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/kemal-kilicdaroglu-nun-hayatini-kaybeden-kardesi-celal-kilicdaroglu-topraga-verildi-410572'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kemal Kılıçdaroğlu&#39;nun hayatını kaybeden kardeşi Celal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7-1a5lZl6USH3RFRtrDs5W2seVJa_Y9jbx2Ubb6PvCjW2X7l2sW8XQmJ_VG3JSJOEdW5BRkc7" alt="Kemal Kılıçdaroğlu&#39;nun hayatını kaybeden kardeşi Celal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kılıçdaroğlu&#39;nun cenazesi, törenin ardından Kent Mezarlığı&#39;na defnedildi. Cenaze törenine, CHP Genel Başkanı Kemal Kılıçdaroğlu, kardeşleri Adil ve Ali&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/kemal-kilicdaroglu-kardesi-celal-kilicdaroglunun-cenazesine-katildi-haber-1589952'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kemal Kılıçdaroğlu kardeşi Celal Kılıçdaroğlu&#39;nun cenazesine katıldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPVhg4Cvrc2ivF7J9uCpfi0Ty2aN4lIhKF51mmqLYPetWo7KMPmYchyHhDB6Aax7Nb0J305ilV" alt="Kemal Kılıçdaroğlu kardeşi Celal Kılıçdaroğlu&#39;nun cenazesine katıldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dün gece vefat eden CHP lideri Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu için cenaze töreni düzenlendi. Törene Kemal Kılıçdaroğlu ve birçok CHP&#39;li&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/guncel/2022/11/18/son-dakika-kemal-kilicdaroglunun-kardesi-celal-kilicdaroglu-yasamini-yitirdi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: CHP lideri Kemal Kılıçdaroğlu&#39;nun kardeşi Celal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSAAq5BxjNdyxMR5nfeq1aha2g4EBogRrb2_jP7404DIcTrA2fllXR938uQE1dmDCaiNJibRnvV" alt="Son dakika: CHP lideri Kemal Kılıçdaroğlu&#39;nun kardeşi Celal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhuriyet Halk Partisi Genel Başkanı Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu, yaşamını yitirdi. Kılıçdaroğlu, geçtiğimiz Ekim ayında karaciğer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/milli-durusuyla-hatirlanan-celal-kilicdaroglu-ebediyete-ugurlandi-1709094.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milli duruşuyla hatırlanan Celal Kılıçdaroğlu, ebediyete uğurlandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQItCeizkZIvcDLfnjbWlloBr7yoi24NSslgSNDnuPYCVXQzLPLUiUK8xohPEorXFhQN7Bd_5BM" alt="Milli duruşuyla hatırlanan Celal Kılıçdaroğlu, ebediyete uğurlandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP Genel Başkanı Kemal Kılıçdaroğlu, dün vefat eden kardeşi Celal Kılıçdaroğlu&#39;nu Kocaeli Tavşantepe Cemevi&#39;nde düzenlenen cenaze töreniyle son yolculuğuna&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}