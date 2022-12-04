import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dilan Çiçek Deniz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dilan Çiçek Deniz"/>
        <meta name="description" content="Trending News about Dilan Çiçek Deniz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dilan Çiçek Deniz</h1>
            <Image width={800} height={500} src="https://iaahbr.tmgrup.com.tr/f2cadc/0/0/0/0/0/0?u=https://iahbr.tmgrup.com.tr/album/2022/12/02/1669975198768.jpg&mw=752" alt="Dilan Çiçek Deniz"/>
            <h3>Recent News</h3>
            <a href='https://www.ahaber.com.tr/galeri/magazin/dilan-cicek-deniz-vucudumla-barisik-degilim-dedi-estetiksiz-hali-goren-taniyamadi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dilan Çiçek Deniz “Vücudumla barışık değilim” dedi! Estetiksiz hali ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJRf0Yv-1hS3Bt-DW4eluuUhq3UwT6QsWX96N1QAAO8PQtOgZHEJFGxD8oS5fx7fyYXnO-L7fx" alt="Dilan Çiçek Deniz “Vücudumla barışık değilim” dedi! Estetiksiz hali ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İzlandalı yönetmen Thor Saevarsson ile evlilik hazırlığı yapan Dilan Çiçek Deniz ani ayrılığıyla magazin gündemine oturdu. İlişkisini kıskançlık nedeniyle.</p></div>
            </div>
        </a><a href='https://televizyongazetesi.com/dilan-cicek-denizin-kusursuz-kiracinin-erken-finaline-uzulmemesi-icin-bir-neden-var/1344734'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dilan Çiçek Deniz&#39;in Kusursuz Kiracı&#39;nın erken finaline üzülmemesi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-PO-CpBME1GlfFsLkGpqSYOc6LLRLSsPZgC85GzdAdMEntnReu0dnJEsdC1A20Wm7KXzNXk1C" alt="Dilan Çiçek Deniz&#39;in Kusursuz Kiracı&#39;nın erken finaline üzülmemesi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kusursuz Kiracı isimli diziyle yeni sezonun başlarında izleyicilerle buluşan Dilan Çiçek Deniz, Serkay Tütüncü ile de başarılı bir partnerlik süreci yaşadı.</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/dilan-cicek-deniz-ozel-hayatiyla-ilgili-bilinmeyenleri-anlatti-603982h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dilan Çiçek röportaj verdi özel bilgilerini açıkladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThr--j8FId27kW8NDI5PCizMuv0nS9Lo16vTzYUGaTcakHk7KAqWqRXudL0iAJDzu93uWW1tSb" alt="Dilan Çiçek röportaj verdi özel bilgilerini açıkladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oyuncu Dilan Çiçek Deniz, evlilik hazırlığı yaptığı ve çok aşık olduğunu söylediği İzlandalı reklam yönetmeni Thor Saevarsson ile ani bir kararla yollarını&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}