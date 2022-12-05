import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sakaryaspor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sakaryaspor"/>
        <meta name="description" content="Trending News about Sakaryaspor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sakaryaspor</h1>
            <Image width={800} height={500} src="https://static.daktilo.com/sites/302/uploads/2022/12/04/large/sakaryaspor-teknik-direktoru-serkan-ozbaltadan-transfer-sozleri%20(1).jpg" alt="Sakaryaspor"/>
            <h3>Recent News</h3>
            <a href='https://medyabar.com/haber/12819005/sakaryaspor-teknik-direktoru-serkan-ozbaltadan-transfer-sozleri'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sakaryaspor teknik direktörü Serkan Özbalta&#39;dan transfer sözleri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSihf_w56IV1rytQ8NDjuksEin3bzlcll7n33j920VRc4IyLCQguAiXeigg0BJb8q7JTBa-8AFa" alt="Sakaryaspor teknik direktörü Serkan Özbalta&#39;dan transfer sözleri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yeşil-siyahlıların teknik direktörü Serkan Özbalta, Erzurumspor galibiyeti sonrasında devre arası transfer dönemi hakkında açıklamalarda bulundu.</p></div>
            </div>
        </a><a href='https://www.haberlisin.com/haber/12818942/ozbaltadan-transfer-aciklamasi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Özbalta&#39;dan transfer açıklaması</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSkRgzr1sYJszICz4V5B3WZS3UBbHvuXKvkymB5JyQnM-4CNlIv6vwqbZ858xmpaxrr1s-NxiQK" alt="Özbalta&#39;dan transfer açıklaması" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sakaryaspor teknik direktörü Serkan Özbalta, Erzurumspor sonrası basın toplantısında transfer ile ilgili sorulan soruya cevap verdi. Özbalta transfer yapmak&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}