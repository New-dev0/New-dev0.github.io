import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Güzin Çorağan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Güzin Çorağan"/>
        <meta name="description" content="Trending News about Güzin Çorağan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Güzin Çorağan</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/27/2006693/kapak_193233.jpg" alt="Güzin Çorağan"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/kultur-sanat/son-dakika-oyuncu-guzin-coragan-yasamini-kaybetti-2006693'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika: Oyuncu Güzin Çorağan yaşamını kaybetti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwYBHCSKC13Ooz1dwYlKW58cGN1h1lGPCiXR63fZXDfyJGvaYDOO-Y9AqMvx-BFXAV0WdNGhLP" alt="Son Dakika: Oyuncu Güzin Çorağan yaşamını kaybetti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi... &#39;Bizimkiler&#39; dizisiyle tanınan tiyatro ve sinema oyuncusu Güzin Çorağan, 79 yaşında yaşamını yitirdi.</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/magazin/2022/11/27/bizimkilerin-yildizi-guzin-coragan-79-yasinda-vefat-etti-sanat-dunyasinin-aci-kaybi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bizimkiler&#39;in yıldızı Güzin Çorağan 79 yaşında vefat etti! Sanat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmc0IQFB-MPQp8gqRJeXYLFbLqROw9LVf6jORrJtWDuWgiQW35Snje8Hevh5NJloLtAzLLkPzh" alt="Bizimkiler&#39;in yıldızı Güzin Çorağan 79 yaşında vefat etti! Sanat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bizimkiler dizisinde Almancı Davut&#39;un eşi rolünü canlandıran ünlü tiyatro ve sinema oyuncusu Güzin Çorağan&#39;dan acı haber geldi. Zafer Algöz, sosyal medya&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/yasam/unlu-tiyatro-ve-sinema-oyuncusu-guzin-coragan-hayatini-kaybetti-6255916'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ünlü tiyatro ve sinema oyuncusu Güzin Çorağan hayatını kaybetti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTYGXuAotcxBt8nENB8tUrrqTHmskrt0asYYeLpxmwY28b_M52Sr6L6vtpIgTqAOtCZkbPOpAg" alt="Ünlü tiyatro ve sinema oyuncusu Güzin Çorağan hayatını kaybetti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bizimkiler dizisinde Almancı Davut&#39;un eşi rolüyle hafızalara kazınan ünlü tiyatro ve sinema oyuncusu Güzin Çorağan 79 yaşında yaşamını yitirdi.</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/magazin/2022/11/27/guzin-coragan-kimdir-neden-oldu-bizimkiler-dizisinin-ulviyesi-guzin-coragan-kac-yasindaydi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Güzin Çorağan kimdir, neden öldü? Bizimkiler dizisinin Ulviye&#39;si ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQC8L9KFEYNR3yctLwtCZnUqwkrrLh-PRBiYmXnpR9mIM7l0wtBoNzxDPgjo7bJCtq4_E7WVknR" alt="Güzin Çorağan kimdir, neden öldü? Bizimkiler dizisinin Ulviye&#39;si ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bizimkiler dizisiyle hafızalara kazınan ünlü oyuncu Güzin Çorağan hayat gözlerini yumdu. Dizide Almancı Davut&#39;un eşi Ulviye karakteriyle ün salan Çorağan&#39;ın&nbsp;...</p></div>
            </div>
        </a><a href='https://www.birgun.net/haber/oyuncu-guzin-coragan-yasamini-yitirdi-411528'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oyuncu Güzin Çorağan yaşamını yitirdi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNDS3H6CZ2GMK2tZ-1TDU8rzuE-d57jJ-jNAXcNEMNQd-CfyG3qBmOChOC48jhF7gkT4e-A8Ax" alt="Oyuncu Güzin Çorağan yaşamını yitirdi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Bizimkiler&#39; dizisinde &#39;Ulviye&#39; rolüyle hafızalara kazınan ünlü tiyatro ve sinema oyuncusu Güzin Çorağan 79 yaşında yaşamını yitirdi.</p></div>
            </div>
        </a>
        </Template></>;
}