import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sezai Karakoç</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sezai Karakoç"/>
        <meta name="description" content="Trending News about Sezai Karakoç" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sezai Karakoç</h1>
            <Image width={800} height={500} src="https://img.piri.net/mnresize/600/-/resim/imagecrop/2022/11/16/03/49/resized_c068d-fb6882a5sezaikarakoccca72.jpg" alt="Sezai Karakoç"/>
            <h3>Recent News</h3>
            <a href='https://www.yenisafak.com/dusunce-gunlugu/cumhuriyet-donemi-islamciligi-ve-sezai-karakoc-3890245'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cumhuriyet Dönemi İslamcılığı ve Sezai Karakoç</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5oDXMZywajU4Y0w7EJEq72WfbyrwOH8uvRKmDTooQXtdXrCCgF16uuSe30b1sJjf6KDikbPe-" alt="Cumhuriyet Dönemi İslamcılığı ve Sezai Karakoç" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cumhuriyet&#39;in onuncu yılında doğmuş, tek partili döneme ve çok partili hayata geçişe şahitlik etmiş, ilkokuldan üniversiteye bu dönemin etkilerini taşıyan bir&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aa.com.tr/tr/kultur/sanatini-inanciyla-besleyen-bir-entelektuel-sezai-karakoc-/2738582'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sanatını inancıyla besleyen bir entelektüel: Sezai Karakoç</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4KldN8Pd936gn0JJHlxr0HuR01deGk-_909YUKNKZEGJwRcDdaFFP8WpciNS2k31r0GCbVS44" alt="Sanatını inancıyla besleyen bir entelektüel: Sezai Karakoç" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henüz çocuk yaşlarda okuma aşkı başlayan Karakoç, 1950&#39;li yıllarda kaleme aldığı ve Türk edebiyatının sevilen şiirlerinden biri haline gelen &quot;Mona Rosa&quot; ile&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yeniakit.com.tr/haber/16-kasim-2021-sair-mutefekkir-sezai-karakocun-vefati-1708119.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>16 Kasım 2021: Şair-Mütefekkir Sezai Karakoç&#39;un vefatı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaUCZX0xSViUWDUEtM4kO03JuxBvr0d7awzwUPg-kFv-9CiI62fseMHCaRhcrOhTvTQvaF7lbx" alt="16 Kasım 2021: Şair-Mütefekkir Sezai Karakoç&#39;un vefatı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sezai Karakoç, I. Dünya Savaşı&#39;nda Kafkas cephesinde çarpışırken Ruslara esir düşen tüccar Yasin Bey ile Emine Hanım&#39;ın oğlu olarak Diyarbakır Ergani&#39;de 22&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/dusunce-gunlugu/sezai-karakocun-genc-muslumana-ogutleri-genclik-ve-islm-3890244'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sezai Karakoç&#39;un genç Müslüman&#39;a öğütleri: Gençlik ve İslâm</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4snO6EODp2cZOh3y6bj_7kTHsPqYbpNRQ0fhVdnK__zbAFUzU8AGNfiFpHwJF2MPod1OnHZVe" alt="Sezai Karakoç&#39;un genç Müslüman&#39;a öğütleri: Gençlik ve İslâm" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İslâm&#39;ı öyle sağ ve diri, canlı yaşa ki, seni öldürmeye gelen sende dirilsin. Çünkü genç bir Müslüman olmak; sessizliğinde imân çınlayan şehirlerin mimarı&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milligazete.com.tr/makale/12549531/ismail-killioglu/hatiralarinda-sezai-karakoc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Hatıralar”ında Sezai Karakoç</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6-P9diDcr7W4ZtIM1DrZtlfsj0DUUr_FDZz-EF8EL-ks4gidBm9vycQYS4pXL5_KNqWnRU3Ph" alt="“Hatıralar”ında Sezai Karakoç" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sanat ve edebiyat alanında, aynı zamanda edebi bir tür sayılan günlük ve hatıraların, öznel nitelikte görünse de, başlı başına belirgin bir yeri bulunduğu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}