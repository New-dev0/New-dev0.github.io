import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cem Yılmaz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cem Yılmaz"/>
        <meta name="description" content="Trending News about Cem Yılmaz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cem Yılmaz</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/21/2004717/kapak_101357.jpg" alt="Cem Yılmaz"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/yasam/cem-yilmaza-ersan-kuneri-dizisi-icin-dava-acildi-2004717'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cem Yılmaz&#39;a &#39;Erşan Kuneri&#39; dizisi için dava açıldı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdyNYgP9d5tpbZw1oq9WMGuo-dJxZPpkKcpYuQk1_oBruzzvSEwTWs3IpC48wjpyeV7eDRAUFu" alt="Cem Yılmaz&#39;a &#39;Erşan Kuneri&#39; dizisi için dava açıldı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bağımlılığa ve Sigaraya Hayır Derneği Cem Yılmaz&#39;ın &#39;Erşan Kuneri&#39; dizisine alkol ve sigarayı özendirdiği gerekçesiyle suç duyurusunda bulundu.</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/magazin/son-dakika-sovmen-cem-yilmaza-buyuk-sok-cem-yilmaza-ersan-kuneri-dizisi-icin-dava-acildi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Dakika! Şovmen Cem Yılmaz&#39;a büyük şok! Cem Yılmaz&#39;a Erşan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSePAiDYbtecjFRz_HD1SWF3N1p_kej5N0DoMhcCp8bTdJG5tvUA2n4xbddbhB3oCZfx1iCL5W2" alt="Son Dakika! Şovmen Cem Yılmaz&#39;a büyük şok! Cem Yılmaz&#39;a Erşan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Dakika! Bağımlılığa ve Sigaraya Hayır Derneği Cem Yılmaz&#39;ın Erşan Kuneri dizisine alkol ve sigarayı özendirdiği gerekçesiyle suç duyurusunda bulundu.</p></div>
            </div>
        </a><a href='https://www.diken.com.tr/cem-yilmaza-ersan-kuneri-dizisinden-suc-duyurusu-gerekce-icki-ve-sigaraya-ozendirmesi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cem Yılmaz&#39;a &#39;Erşan Kuneri&#39; dizisinden suç duyurusu: Gerekçe içki ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6VNJnM0is_9kZMy4sKN0p9Wc8cV861ERmsU8_tkld3ruePMWdAgPbR64abFTCCOxbHuV0Baat" alt="Cem Yılmaz&#39;a &#39;Erşan Kuneri&#39; dizisinden suç duyurusu: Gerekçe içki ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21/11/2022 - Bağımlılığa ve Sigaraya Hayır Derneği Cem Yılmaz&#39;a Erşan Kuneri dizisinde &#39;alkol ve sigarayı özendirdiği&#39; gerekçesiyle suç duyurusunda bulundu.</p></div>
            </div>
        </a><a href='https://onedio.com/haber/bagimliliga-ve-sigaraya-hayir-dernegi-cem-yilmaz-a-dava-acti-alkol-ve-sigarayi-ozendiriyor-1108559'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bağımlılığa ve Sigaraya Hayır Derneği Cem Yılmaz&#39;a Dava Açtı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKIg3t9Kl0W_2P04dEBwqM1dNnvBH2bvHjWCEnftqAgPTrrzc-H1jhlcrb35SdyD06eOQ7M3zm" alt="Bağımlılığa ve Sigaraya Hayır Derneği Cem Yılmaz&#39;a Dava Açtı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Bir insanın bir konuda bu kadar ısrarla tüm filmlere hoş gösterecek şekilde sigara sahnelerini koyması. Dernek adına açıklama yapan Sarıay Dernek Başkanı Dr.</p></div>
            </div>
        </a><a href='https://www.webtekno.com/cem-yilmaz-ersan-kuneri-davalik-oldu-h129898.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cem Yılmaz, Erşan Kuneri Dizisi Yüzünden Davalık Oldu: İşte &quot;Yok ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSA5VXuRlBIAZXZFuteQkVzK1tNXBFyb7fB3oLhIpUUAO8jIChmkScLu4ri20njUmQSvIhxLo4q" alt="Cem Yılmaz, Erşan Kuneri Dizisi Yüzünden Davalık Oldu: İşte &quot;Yok ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cem Yılmaz, Erşan Kuneri dizisi nedeniyle davalık oldu. Bağımlılığa ve Sigaraya Hayır Derneği, dizinin alkol ve sigaraya özendirdiğini ileri sürerek, Cem Yılmaz&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}