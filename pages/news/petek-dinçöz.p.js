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
        </a><a href='https://www.milliyet.com.tr/cadde/petek-dincoz-ekranlara-dondu-ben-son-assolistim-6863599'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petek Dinçöz ekranlara döndü: Ben son assolistim</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1aVihHTCZ6O9aOBVkCLNq0PBgwBakOguz6CbHO8cHuEtazZLot5ukOdtnZxckSSJw4Xnb-SIGlw" alt="Petek Dinçöz ekranlara döndü: Ben son assolistim" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boşandıktan kısa bir süre sonra beş yaşındaki oğlu İrfan Aslan ile Miami&#39;ye yerleştiğini belirten şarkıcı, yeni evinin bahçesinde verdiği pozuna; &quot;Herkese&nbsp;...</p></div>
            </div>
        </a><a href='https://www.karar.com/karar-biyografi/petek-dincoz-kim-kac-yasinda-petek-dincoz-aslen-nereli-petek-dincoz-hayati-ve-biyografisi-1708250'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petek Dinçöz kim, kaç yaşında? Petek Dinçöz aslen nereli? Petek ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRD3lKlM0aqlPHg4oog7wRjkvRfWVBXKLo0pS7TIqSRNY2mNH5eUDrd2hyQDrzF-11CtlCNr1TD" alt="Petek Dinçöz kim, kaç yaşında? Petek Dinçöz aslen nereli? Petek ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son zamanlarda özel hayatındaki gelişmelerle gündeme gelen Petek Dinçöz&#39;ün hayatına dair detaylar merak ediliyor. Peki, Petek Dinçöz kim, kaç yaşında?</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/petek-dincoz-alelade-show-basladi-mi-petek-dincoz-alelade-show-hangi-kanalda-601846h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petek Dinçöz Alelade Show başladı mı? Petek Dinçöz Alelade Show ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKeSsvPepsjRFTFUor3R_bP2NQ38ntyNFowKvoyQ8-CzPPGtPh08kNKfUj8St-5cuGrNA9Bjfb" alt="Petek Dinçöz Alelade Show başladı mı? Petek Dinçöz Alelade Show ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ağustos ayında evlenen Petek Dinçöz dün akşam yayınlanan &#39;Doğu Demirkol ile Alelade Show&#39; programının konuğuydu. Uzun süredir ekranlarda görünmeyen Petek&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/trend/petek-dincoz-kac-yasinda-dogu-demirkolun-konugu-petek-dincoz-evli-mi-cocuklari-kim/haber-1322429'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doğu Demirkol&#39;un konuğu Petek Dinçöz evli mi, çocukları kim&quot; Petek ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSAUXYzxnDIb88cwPZOlMsAE7Ou2LIlFYBd_SNYjSFriL4VxHULbT6-oo8bbIDfhrmTglXb1b3b" alt="Doğu Demirkol&#39;un konuğu Petek Dinçöz evli mi, çocukları kim&quot; Petek ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Petek Dinçöz, Doğu Demirkol ile Alelade Show&#39;a konuk oldu. Türk Arabesk Fantezi ve Türk Sanat Müziği ses sanatçısı, manken, oyuncu ve televizyon sunucusu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/petek-dincoz-dogu-demirkol-un-konugu-oldu-ben-son-assolistim-deyince-mahmut-tuncer-bakin-ne-yorum-yapti-432068-mymagazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Şarkıcı Petek Dinçöz Doğu Demirkol&#39;un konuğu oldu! &quot;Ben son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNCaA66QNeTI8D5sbqhn4ybDiFhSAKKRJDgdPrIlF44CQ5MO-HQ5FBsRZHMlVTXjCOPqQeZxLo" alt="Şarkıcı Petek Dinçöz Doğu Demirkol&#39;un konuğu oldu! &quot;Ben son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Şarkıcı Petek Dinçöz Doğu Demirkol&#39;un konuğu oldu! &quot;Ben son assolistim&quot; deyince Mahmut Tuncer bakın ne yorum yaptı! 27.11.2022 13:54 | Son Güncelleme:&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yasemin.com/magazin/haber/2994042-petek-dincoz-ekranlarda-gozuktu-sosyal-medyada-yorum-yagmuruna-tutuldu-bir-takipcisine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petek Dinçöz ekranlarda gözüktü: Sosyal medyada yorum ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTgxur1ellKKAjuchDbfTDMGjrcr4zlFISDii2iQzLWbxrNu0AE7bpFEdsaPD4C6yextFkUYvf7" alt="Petek Dinçöz ekranlarda gözüktü: Sosyal medyada yorum ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doğu Demirkol ile Alelade Show&#39;a konuk olan Petek Dinçöz, programda yaptığı açıklamalarla gündeme geldi. Ekranlarda gözükmesiyle sosyal medyada gündem&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}