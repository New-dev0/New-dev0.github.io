import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Petek Dinçöz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Petek Dinçöz"/>
        <meta name="description" content="Trending News about Petek Dinçöz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Petek Dinçöz</h1>
            <Image width={800} height={500} src="https://cdn1.ntv.com.tr/gorsel/LeO7DABhK0emDX4fCza6ow.jpg?width=1080&mode=crop&scale=both" alt="Petek Dinçöz"/>
            <h3>Recent News</h3>
            <a href='https://www.ntv.com.tr/galeri/n-life/magazin/petek-dincoz-alelade-show-ile-ekranlara-dondu-ben-son-assolistim,AzK3Lkk-102oP5WL1QuCQg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petek Dinçöz Alelade Show ile ekranlara döndü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZZS5jn37zTn8TkP3jFsmNLRHPHamOiHSYJAuGGmzLJfSETP4Uk4_ItdHUOUcRrtQ2CMHTOhu_" alt="Petek Dinçöz Alelade Show ile ekranlara döndü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ağustos ayında iş insanı Nida Büyükbayrakdar ile dünyaevine giren Petek Dinçöz, uzun bir aradan sonra ilk kez şarkı çıkardı. Şimdilerde sahne programlarına&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/trend/petek-dincoz-kac-yasinda-dogu-demirkolun-konugu-petek-dincoz-evli-mi-cocuklari-kim/haber-1322429'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doğu Demirkol&#39;un konuğu Petek Dinçöz evli mi, çocukları kim&quot; Petek ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSAUXYzxnDIb88cwPZOlMsAE7Ou2LIlFYBd_SNYjSFriL4VxHULbT6-oo8bbIDfhrmTglXb1b3b" alt="Doğu Demirkol&#39;un konuğu Petek Dinçöz evli mi, çocukları kim&quot; Petek ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Petek Dinçöz, Doğu Demirkol ile Alelade Show&#39;a konuk oldu. Türk Arabesk Fantezi ve Türk Sanat Müziği ses sanatçısı, manken, oyuncu ve televizyon sunucusu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mardinlife.com/dogu-demirkol-ile-alelade-show-konugu-petek-dincoz-kimdir-nerelidir-kac-yasinda-petek-dincoz-esi-kim-cocugu-var-mi-346965.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doğu Demirkol İle Alelade Show konuğu Petek Dinçöz kimdir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQg2vBrHn8BC0RG7xSy1eIF1b971XyUsznNgttrCsE2sGAmLwVZgN1t3pMZqfb0y-2nBZ7IuMB3" alt="Doğu Demirkol İle Alelade Show konuğu Petek Dinçöz kimdir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ardından Mehmet Ali Erbil&#39;in bir programında yardımcı sunucu olarak görev almıştır. 2000 yılında Büyük Maksim Gazinosu, Günay Gazinosu, Aşiyan Gazinosu, Çakıl,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}