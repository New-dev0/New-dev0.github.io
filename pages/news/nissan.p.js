import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nissan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nissan"/>
        <meta name="description" content="Trending News about Nissan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nissan</h1>
            <Image width={800} height={500} src="https://img.ulusal.com.tr/rcman/Cw1280h720q95gc/storage/files/images/2022/11/24/elektrikli-nissan-qashqai-ve-x-trail-turkiyede-satisa-sunuldu-iste-fiyatlari-oUKO.jpg" alt="Nissan"/>
            <h3>Recent News</h3>
            <a href='https://www.ulusal.com.tr/bilim-ve-teknoloji/elektrikli-nissan-qashqai-ve-x-trail-turkiyede-satisa-sunuldu-iste-fiyatlari-15006553'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elektrikli Nissan Qashqai ve X-Trail Türkiye&#39;de satışa sunuldu: İşte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtToHPqIStezrh4nbdj2MXdv3lYbmM_pNqCJGr0h-Cz4a_rY3f_YNAFV6F1T-d8W4lBnKueH-y" alt="Elektrikli Nissan Qashqai ve X-Trail Türkiye&#39;de satışa sunuldu: İşte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nissan elektrikli iki yeni modelini Türkiye pazarında satışa sundu. e-POWER teknolojisine sahip Nissan X-Trail ve Qashqai modelleri “Türkiye&#39;de &#39;Elektriğin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wsws.org/tr/articles/2022/11/24/cdir-n24.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renault-Nissan işçileri Hindistan&#39;ın ilk otomotiv işçileri taban ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcToIMyRDqVdE3a-eqmGCK2eikDqx7rQ4Ba1fMeOtAhS53BMAPp93Xqbl7g70gn7qKdjEyp3vqBZ" alt="Renault-Nissan işçileri Hindistan&#39;ın ilk otomotiv işçileri taban ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bu açıklama, Hindistan&#39;ın Tamil Nadu eyaletinin başkenti Chennai&#39;de bulunan Renault-Nissan fabrikasının otomotiv işçilerinin kurduğu taban komitesi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}