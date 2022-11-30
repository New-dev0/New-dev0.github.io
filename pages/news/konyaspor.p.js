import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Konyaspor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Konyaspor"/>
        <meta name="description" content="Trending News about Konyaspor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Konyaspor</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/482000/483848.jpg" alt="Konyaspor"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/futbol/konyaspor-hazirlik-macinda-galip-266136.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konyaspor hazırlık maçında galip</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStUwUGbr-KAtxV6sbUzKwhpr77Eu7c57PjwYsuX1wDsfW_AjoPcPe8eJobvsw6eki4-iU1F_fX" alt="Konyaspor hazırlık maçında galip" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bosna Hersek&#39;in köklü futbol kulüplerinden Zeljeznicar ile Arabam.com Konyaspor&#39;un karşı karşıya geldiği hazırlık maçı, Konyaspor&#39;un 2-1 galibiyetiyle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/spor/futbol/2022/11/29/konyaspor-ozel-macta-zeljeznicari-maglup-etti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konyaspor, özel maçta Zeljeznicar&#39;ı mağlup etti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1hhCHgcW_aaOUhl9wSPs00DGuFXMGcq9RMuhPTXUjn5-PqM_uAp87gKV-ZkecFKOkBbB68Aei" alt="Konyaspor, özel maçta Zeljeznicar&#39;ı mağlup etti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto Süper Lig ekiplerinden arabam.com Konyaspor, Dünya Kupası nedeniyle liglere verilen arada Bosna-Hersek&#39;in köklü takımlarından Zeljeznicar ile&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/futbol/2022/11/29/zeljeznicar-konyaspor-maci-ne-zaman-saat-kacta-ve-hangi-kanalda-hazirlik-maci'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zeljeznicar - Konyaspor maçı ne zaman, saat kaçta ve hangi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7DsP5SydGyahWwB72XfyBmPStsuSp-CNWnFs1O0WkYt_E4gTt9c7u6YvifW_gf_FWtcu0rVqo" alt="Zeljeznicar - Konyaspor maçı ne zaman, saat kaçta ve hangi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası arasında kulüplerin hazırlık süreçleri sürüyor. Konyaspor deplasmanda Zeljeznicar&#39;akonuk olacak. Maçın yayın saati, kanalı ve muhtemel 11&#39;leri&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/konyasporun-rakibi-zeljeznicar-2311588'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konyaspor&#39;un rakibi Zeljeznicar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQ5KLER-WfujD_v139dpF0Abj4pf8qK3WbuvlEXfpLJdHPOKTv5hoc2bL-atMM4gwGjpAAQfBj" alt="Konyaspor&#39;un rakibi Zeljeznicar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Konyaspor, Dünya Kupası maçları nedeniyle lige verilen arada Bosna Hersek ekibi FC Zeljeznicar ile bugün özel hazırlık maçı yapacak.</p></div>
            </div>
        </a><a href='https://bbnhaber.com.tr/spor/bosna-hersekte-kazanan-konyaspor-102605h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bosna Hersek&#39;te kazanan Konyaspor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDVjzM2-yszls7s69OmBG0OiGwjAEdwDNYH484QeD2LynO_srtqs9x8Rmt6m6FVOor_GNj8I4O" alt="Bosna Hersek&#39;te kazanan Konyaspor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yeşil beyazlar Dünya Kupası nedeni ile lige verilen arada Bosna Hersek ekibi Zeljeznicar ile karşılaştı. Maçı Konyaspor 2-1 kazandı.</p></div>
            </div>
        </a><a href='https://www.pusulahaber.com.tr/hazirlik-maci-zeljeznicar-1-konyaspor-2-1705886h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hazırlık maçı: Zeljeznicar: 1 - Konyaspor: 2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbelAgbx14JGyyFbixcsAK8HC6iX72SzGeVy7T2ncnnJ5fkdMXJtJCsotLCOWdw2aW_O2_oDfW" alt="Hazırlık maçı: Zeljeznicar: 1 - Konyaspor: 2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Konyaspor, Saraybosna&#39;nın köklü ekiplerinden Zeljeznicar ile hazırlık maçında Bosna Hersek&#39;in başkenti Saraybosna&#39;da karşılaştı.</p></div>
            </div>
        </a><a href='https://www.memleket.com.tr/konyaspor-bosnadaki-macta-hazirim-dedi-2139709h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Konyaspor Bosna&#39;daki maçta &#39;hazırım&#39; dedi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjwRWVULrQnTevr2a9tiC4Ywfn9Ew-VIN2QcvpKaM9Kh0uhwEAokQxJBcNfov6lavQX2CamEoP" alt="Konyaspor Bosna&#39;daki maçta &#39;hazırım&#39; dedi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arabam.com Konyaspor ile Bosna Hersek&#39;in Željezničar takımı Dünya Kupası arasında dostluk ve hazırlık maçında Saraybosna Grbavica stadında bir araya geldi. 29&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}