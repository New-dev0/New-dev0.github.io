import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yalnız Efe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yalnız Efe"/>
        <meta name="description" content="Trending News about Yalnız Efe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yalnız Efe</h1>
            <Image width={800} height={500} src="https://iasbh.tmgrup.com.tr/d467e0/650/344/0/1/800/421?u=https://isbh.tmgrup.com.tr/sbh/2022/11/27/1669573007040.jpg" alt="Yalnız Efe"/>
            <h3>Recent News</h3>
            <a href='https://www.sabah.com.tr/yasam/omer-seyfettinin-yalniz-efe-adli-hikayesinin-baskahramani-olan-yalniz-efe-hangisidir-6256125'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ömer Seyfettin&#39;in &quot;Yalnız Efe&quot; adlı hikayesinin başkahramanı olan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBUBpqrjmlNoctsvkKvzcJvWM-P28XFyKxILFVAz1Lu0NuOmWHvZTw5_Se9OixKQyKNAY10c57" alt="Ömer Seyfettin&#39;in &quot;Yalnız Efe&quot; adlı hikayesinin başkahramanı olan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye&#39;nin en çok kazandıran yarışma programı “Kim Milyoner Olmak İster?” bugün (27 Kasım 2022 Pazar) Kenan İmirzalıoğlu sunuculuğunda ATV ekranlarındaki&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/televizyon/2022/11/27/omer-seyfettinin-yalniz-efe-adli-hikayesindeki-baskahramani-olan-yalniz-efe-hangisidir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ömer Seyfettin&#39;in &quot;Yalnız Efe&quot; adlı hikayesindeki başkahramanı olan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGGsl-L0V141GRYOdN0CuPLVmUHDjyV_t-WPsL4ATjSE2NGlIH282qJv3IewxnG-oH750zYiF9" alt="Ömer Seyfettin&#39;in &quot;Yalnız Efe&quot; adlı hikayesindeki başkahramanı olan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>atv ekranlarının ilgiyle takip edilen yarışma programı Kim Milyoner Olmak İster, yeni bölümüyle ekranlara damga vurmaya devam ediyor. Toplam 12 sorunun yer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/video/televizyon-videolari/milyonere-damga-vuran-yalniz-efe-sorusu-siklari-goren-kenan-imirzalioglunun-yuz-ifadesi-dikkat-cekti-ezel-eysan-omer-kezban'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milyoner&#39;e damga vuran &#39;&#39;Yalnız Efe&#39;&#39; sorusu! Şıkları gören Kenan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgf5Ib8k_gl_mXdPJHWlzB9nFtyk8nwU-bIAt4M9q70e7I0y1UZlmx-qM4VI9yaM8rt3JGOi0S" alt="Milyoner&#39;e damga vuran &#39;&#39;Yalnız Efe&#39;&#39; sorusu! Şıkları gören Kenan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atv&#39;nin sevilen yarışma programı Kim Milyoner Olmak İster yarışması yeni bölümüyle yine izleyicisini ekranları başına kilitledi. Milyoner&#39;in yayınlanan son.</p></div>
            </div>
        </a><a href='https://www.dirilispostasi.com/haber/12614217/omer-seyfettinin-yalniz-efe-adli-hikayesinin-baskahramani-olan-yalniz-efe-hangisidir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ömer Seyfettin&#39;in Yalnız Efe adlı hikâyesinin başkahramanı olan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTn2Sf8IEo4RE2GaeBFC8EHxwOIiXcFzwo20cJeww3KQ2zYtXa9d0pW1G-K1YxH5L8jnvKK1kiB" alt="Ömer Seyfettin&#39;in Yalnız Efe adlı hikâyesinin başkahramanı olan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>27 Kasım tarihli ATV&#39;nin Kim Milyoner Olmak İster adlı yarışmasının bu akşamki yeni bölümünde &quot;Ömer Seyfettin&#39;in Yalnız Efe adlı hikâyesinin başkahramanı&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}