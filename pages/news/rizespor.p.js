import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rizespor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rizespor"/>
        <meta name="description" content="Trending News about Rizespor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rizespor</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/482000/483274.jpg" alt="Rizespor"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/futbol/spor-toto-1-lig/canli-izle-genclerbirligi-caykur-rizespor-265893.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Başkentte 3 puan Çaykur Rizespor&#39;un</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8SNHeSOZ4PCv-AtRimFlBvM0VBSzzpRms-wvlq5E2A_TSSBDJVfrsAatP3FvmnqAuaLVBJYcR" alt="Başkentte 3 puan Çaykur Rizespor&#39;un" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 15. haftasında Çaykur Rizespor, 1-0 geriye düştüğü karşılaşmada Gençlerbirliği&#39;ni deplasmanda 3-1 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.fanatik.com.tr/spor-toto-1-lig-genclerbirligi-1-caykur-rizespor-3-2311285'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spor Toto 1. Lig: Gençlerbirliği: 1 - Çaykur Rizespor: 3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSA8qgsGCAeNXTbt5BRcJef9y_lM9HIY-I8a5z3Ris1zz0p-8IIuhKCj-1ZOJmjvcJ9kzHPUVAo" alt="Spor Toto 1. Lig: Gençlerbirliği: 1 - Çaykur Rizespor: 3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 15. haftasında Gençlerbirliği, konuk ettiği Çaykur Rizespor&#39;a 3-1 mağlup oldu.</p></div>
            </div>
        </a><a href='https://www.fotomac.com.tr/birincilig/2022/11/26/genclerbirligi-1-3-caykur-rizespor-mac-sonucu-ozet'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gençlerbirliği 1-3 Çaykur Rizespor MAÇ SONUCU - ÖZET</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxy4WMP7L4mPzRzu8lPMa_X2Fp_MaQowU-y7OF7WVLjrhvuPaNaL4fxzn5cAUqoGX3UuwIwssj" alt="Gençlerbirliği 1-3 Çaykur Rizespor MAÇ SONUCU - ÖZET" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 15. haftasında Çaykur Rizespor deplasmanda Gençlerbirliği&#39;ne konuk oldu. Mücadeleyi Rizespor 3-1 kazandı. Deplasman ekibine galibiyeti&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberturk.com/genclerbirligi-1-caykur-rizespor-3-mac-sonucu-3542305-spor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gençlerbirliği: 1 - Çaykur Rizespor: 3 MAÇ SONUCU</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSqvVE6wZlUkh_DjvRcdgi0Wt7jrkYjaIKSWQKDCL0iPUDTQXv98RXyBthiJ9RTG1RN1LiiNIKP" alt="Gençlerbirliği: 1 - Çaykur Rizespor: 3 MAÇ SONUCU" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 15. haftasında Çaykur Rizespor, 1-0 geriye düştüğü karşılaşmada Gençlerbirliği&#39;ni deplasmanda 3-1 mağlup etti.</p></div>
            </div>
        </a><a href='https://www.star.com.tr/spor/caykur-rizespor-baskentte-3-puani-3-golle-aldi-haber-1751322/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Çaykur Rizespor başkentte 3 puanı 3 golle aldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNu1WzqU5DMM6HYxeTSXuTnP4yWdwAT2yGbri-ZQUnABGRRgPZ0rPwfgAEpeW0CwYzoSrQ84j1" alt="Çaykur Rizespor başkentte 3 puanı 3 golle aldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çaykur Rizespor, Spor Toto 1. Lig&#39;in 15. hafta mücadelesinde deplasmanda konuğu olduğu Gençlerbirliği&#39;ni 3-1 mağlup etti.</p></div>
            </div>
        </a>
        </Template></>;
}