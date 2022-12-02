import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alanyaspor  fenerbahçe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alanyaspor  fenerbahçe"/>
        <meta name="description" content="Trending News about Alanyaspor  fenerbahçe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alanyaspor  fenerbahçe</h1>
            <Image width={800} height={500} src="https://static.daktilo.com/sites/496/uploads/2022/12/01/alanyaspor-fenerbahce-macinin-biletleri-satisa-sunuldu-h73449-b68f2.jpeg" alt="Alanyaspor  fenerbahçe"/>
            <h3>Recent News</h3>
            <a href='https://www.yenialanya.com/haber/12637661/alanyaspor-fenerbahce-dev-macin-biletleri-satisa-cikti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alanyaspor - Fenerbahçe: Dev maçın biletleri satışa çıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQAprA6pwc_GPnWwEFUTtGQG0fbLv4MamQhAEdJnDZ8hVvebyQJ5xibQyoS8ZAMYI_yjDMLojN" alt="Alanyaspor - Fenerbahçe: Dev maçın biletleri satışa çıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TURUNCU yeşilli kulüpten dev maçla ilgili yapılan açıklamada, en ucuz biletin bin TL, en ucuz biletin de 125 TL olduğu, Süper Lig sezonu için alınan kombine&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gercekalanya.com/spor/alanyaspor-fenerbahce-macinin-biletleri-satisa-sunuldu-h73449.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alanyaspor-Fenerbahçe maçının biletleri satışa sunuldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLaZDkvqOM8zdxEageO4T6OeIXTFWcq3c2Doy6dDOt-SO9eZDsIm_Qd39Hw_l1q2F6sTtWgdbt" alt="Alanyaspor-Fenerbahçe maçının biletleri satışa sunuldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alanyaspor taraftarları biletleri Corendon Alanyaspor Kulübü Passolig Ofisi, www.passo.com.tr ile Passo mobil uygulaması üzerinden satın alabilecek.</p></div>
            </div>
        </a>
        </Template></>;
}