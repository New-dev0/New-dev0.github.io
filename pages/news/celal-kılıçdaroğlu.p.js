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
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/19/2004157/kapak_012620.jpg" alt="Celal Kılıçdaroğlu"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/turkiye/son-dakika-kemal-kilicdaroglunun-kardesi-celal-kilicdaroglu-yasamini-yitirdi-2004157'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRR8rJqk3vvMDqvP_yZPF_zLmdx5bZwyVBlXYSUBqD2k_W-t2LeWCV_GYl7aq2p3kLVP2mZSX0Z" alt="Son Dakika: Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hürriyet, sosyal medya hesabından yaptığı açıklamada, &quot;Cumhuriyet Halk Partisi Genel Başkanımız Sayın Kemal Kılıçdaroğlu&#39;nun İzmit&#39;te yaşayan kardeşi Celal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/yasam/kemal-kilicdaroglunun-kardesi-celal-kilicdaroglu-vefat-etti-6245035'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu hayatını kaybetti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlLMoKxv10qov1E7qoYcfaCRPwYTAEt71Iwkm6MGytoeLs6gNQj9NR3XqT2jybOTeMYt51lUKy" alt="Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu hayatını kaybetti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP Genel Başkanı Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu vefat etti. Celal Kılıçdaroğlu Ekim ayında solunum yolu enfeksiyonu nedeniyle tedavi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/guncel/2022/11/18/son-dakika-kemal-kilicdaroglunun-kardesi-celal-kilicdaroglu-yasamini-yitirdi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son dakika: CHP lideri Kemal Kılıçdaroğlu&#39;nun kardeşi Celal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSAAq5BxjNdyxMR5nfeq1aha2g4EBogRrb2_jP7404DIcTrA2fllXR938uQE1dmDCaiNJibRnvV" alt="Son dakika: CHP lideri Kemal Kılıçdaroğlu&#39;nun kardeşi Celal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhuriyet Halk Partisi Genel Başkanı Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu, yaşamını yitirdi. Kılıçdaroğlu, geçtiğimiz Ekim ayında karaciğer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/chp-lideri-kilicdaroglu-nun-kardesi-celal-kilicdaroglu-hayatini-kaybetti-3540035'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CHP lideri Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu hayatını kaybetti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfEPdfBQPo-FLB2Y_9lqJsCmkwpK-16uBZ1Zy1aAmWEj3jbasum5FOVNGv0U-xgojyW3kDyCCi" alt="CHP lideri Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu hayatını kaybetti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHP Genel Başkanı Kemal Kılıçdaroğlu&#39;nun kardeşi Celal Kılıçdaroğlu, kalp yetmezliği nedeniyle İzmit&#39;teki evinde hayatını kaybetti.</p></div>
            </div>
        </a>
        </Template></>;
}