import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sıtkı Ayan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sıtkı Ayan"/>
        <meta name="description" content="Trending News about Sıtkı Ayan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sıtkı Ayan</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_turkce/342e/live/e386d140-77db-11ed-a5cf-4bf73c18f0d4.jpg" alt="Sıtkı Ayan"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/turkce/articles/cmm6970zj1go'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD, Sıtkı Ayan ve şirketlerine İran&#39;a yönelik yaptırımları delmekten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2jr8m3-C0DUi2fDqVwedivssC50m8RXwsAm3BmvVnFgogA65UkMgY0lxBzL_-6M5mMlZVCq1a" alt="ABD, Sıtkı Ayan ve şirketlerine İran&#39;a yönelik yaptırımları delmekten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD Hazine Bakanlığı, Türk iş insanı Sıtkı Ayan ve şirketlerini, İran Devrim Muhafızları için petrol satışına aracılık etmek ve para aklamak yoluyla&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/abdden-sitki-ayan-icin-yaptirim-karari-2010208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD&#39;den Sıtkı Ayan için yaptırım kararı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjQmurfJ9uZ_aSKnVzmVyYh_Jg4kVUH0tYbLA-QyrSQuEGYXiQNKKsFx_c7N_xG5gLRZXqQh6N" alt="ABD&#39;den Sıtkı Ayan için yaptırım kararı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SITKI AYAN KİMDİR? Sıtkı Ayan adını ilk kez İran ve Türkmen doğalgazının Avrupa&#39;ya taşınmasıyla ilgili projede duyurdu. Wikileaks belgelerinde de adı geçen&nbsp;...</p></div>
            </div>
        </a><a href='https://onedio.com/haber/sitki-ayan-kimdir-kac-yasinda-nereli-sitki-ayan-in-egitimi-meslegi-ne-sirketleri-neler-1113064'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sıtkı Ayan Kimdir, Kaç Yaşında, Nereli? Sıtkı Ayan&#39;ın Eğitimi, Mesleği ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCGPyo4Gfd8xHWGLM24v-IDjoIye82UVQ9gPOZmAxur3JhNjIDxyhUabYIMBWCI7nRHGmU4rfJ" alt="Sıtkı Ayan Kimdir, Kaç Yaşında, Nereli? Sıtkı Ayan&#39;ın Eğitimi, Mesleği ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sudan ile İran&#39;daki petrol sahalarında yaptığı çalışmalarla bilinen Ayan, İran ve Türkmen doğalgazını. Sıtkı Ayan&#39;ın Bahaddin Ayan adında bir oğlu olduğu&nbsp;...</p></div>
            </div>
        </a><a href='https://tr.euronews.com/2022/12/08/abd-sitki-ayan-ve-ailesini-iran-yaptirimlarini-delme-suclamasiyla-yaptirim-listesine-aldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD, Sıtkı Ayan ve ailesini İran yaptırımlarını delme suçlamasıyla ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRf7itscc5LzpOjQNSsADg-k4Er-c8I8AknJWytOjIBfmUtgiOKhIBnc0STOegTSy-09QeXEHDl" alt="ABD, Sıtkı Ayan ve ailesini İran yaptırımlarını delme suçlamasıyla ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Biden yönetimi, ünlü iş insanı Sıtkı Ayan ile ailesi ve yakınlarını İran petrolünün satışını kolaylaştırdıkları için yaptırım listesine aldığını duyurdu.</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/abdden-sitki-ayan-ve-ailesine-iran-yaptirimi-haber-1592814'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ABD&#39;den Sıtkı Ayan ve ailesine İran yaptırımı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6sdiB7PqJ006c_0rVg5JKWHlH_-QTCKAvlI4xXtcwX718Tp9UH9fPPIU0BJVcIKEF6RXYSMeL" alt="ABD&#39;den Sıtkı Ayan ve ailesine İran yaptırımı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ABD, &#39;Man Adası&#39; belgelerinde adı geçen Sıtkı Ayan ve ailesini &#39;İran Devrim Muhafızları adına petrol satışına aracılık ettiği&#39; ve &#39;kara para akladığı&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberler.com/haberler/sitki-ayan-kimdir-sitki-ayan-nereli-meslegi-ne-15483631-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sıtkı Ayan kimdir? Sıtkı Ayan nereli, mesleği ne? Sıtkı Ayan hayatı ve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXRDcJDaPpSZYQAoRhWgbkS52EU-nqOeoxfoat_duHcDFqGqcqrAP9QL7qbBm8K0vlAzlzvwLczw" alt="Sıtkı Ayan kimdir? Sıtkı Ayan nereli, mesleği ne? Sıtkı Ayan hayatı ve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daha sonra, Ankara Üniversitesi İlahiyat Fakültesi&#39;nden mezun oldu. Ancak kendi mesleğini yapmayarak petrol işine girdi. Sudan ile İran&#39;daki petrol sahalarında&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}