import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bjk</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bjk"/>
        <meta name="description" content="Trending News about Bjk" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bjk</h1>
            <Image width={800} height={500} src="https://img.fanatik.com.tr/img/75/0x0/6391c3c5ae298bfd06cde35c.jpg" alt="Bjk"/>
            <h3>Recent News</h3>
            <a href='https://www.fanatik.com.tr/besiktastan-bomba-transfer-ezeli-rakibin-kalbini-aliyor-2312759'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beşiktaş&#39;tan bomba transfer! Ezeli rakibin kalbini alıyor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfWrpNv3oS74vmYVZurVs_PWNO_4YBgFu383h6EGzrqSoAdV1Xcd_Sc2H0pTMA3c8zR87huPPc" alt="Beşiktaş&#39;tan bomba transfer! Ezeli rakibin kalbini alıyor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Süper Lige verilen arada zirveye tırmanmak için hazırlıklarına tam gaz devam eden Beşiktaş, Antalyada kampa girdi. Başkan Ahmet Nur Çebinin de kampa&nbsp;...</p></div>
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