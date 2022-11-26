import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hilal Altınbilek</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hilal Altınbilek"/>
        <meta name="description" content="Trending News about Hilal Altınbilek" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hilal Altınbilek</h1>
            <Image width={800} height={500} src="https://i.cnnturk.com/i/cnnturk/75/1200x675/6380bf9f2af1071058b08be0" alt="Hilal Altınbilek"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnturk.com/magazin/hilal-altinbilekin-yeni-aski-inatci-cikti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hilal Altınbilek&#39;in yeni aşkı inatçı çıktı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxPTbBD0-RF9xJj8p35b88aHTl7RsHA1yZ0kQrZ2hgMwRR06XeSCMbePgY8BUdL46TvUbsK6S_" alt="Hilal Altınbilek&#39;in yeni aşkı inatçı çıktı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hilal Altınbilek, geçtiğimiz ağustos ayında yazar Metin Hara ile bir yıllık ilişkisini sessiz sedasız noktalamıştı. Sürpriz ayrılıktan sonra yeni bir aşka.</p></div>
            </div>
        </a><a href='https://www.takvim.com.tr/galeri/magazin/hilal-altinbilek-yeni-sevgilisiyle-fena-yakalandi-metin-haradan-3-ay-once-ayrilmisti-fellik-fellik-saklandi-gorenler-yeni-aski-baya-inatci'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hilal Altınbilek yeni sevgilisiyle fena yakalandı! Metin Hara&#39;dan 3 ay ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBNe4JAc6vigUPWX9kqgP_KpjCPId4wwqk5H4i4smXKG-5VfKev2-8N01QHAJgeIsashjKKFqe" alt="Hilal Altınbilek yeni sevgilisiyle fena yakalandı! Metin Hara&#39;dan 3 ay ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Önceki gün Etiler&#39;de bir mekanda yeni sevgilisi ile birlikte basın mensuplarıyla adeta köşe kapmaca oynadı güzel oyuncu. Mekandan el ele çıkan yeni sevgililer,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aksam.com.tr/magazin/hilal-altinbilekin-yeni-sevgilisi-utangac-cikti-kose-kapmaca-oynadi-durdu/haber-1322226'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hilal Altınbilek&#39;in yeni sevgilisi utangaç çıktı! Köşe kapmaca oynadı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9x8ZT6NDpU9P-uTEyh8r8QKOAknx9V6veBWcLdiXl4-cvA3XLYEt7LLWoXOW6PfBemS8UeDdS" alt="Hilal Altınbilek&#39;in yeni sevgilisi utangaç çıktı! Köşe kapmaca oynadı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hilal Altınbilek Metin Hara&#39;dan sonra yeni aşkını buldu. Geçtiğimiz akşam gizemli sevgilisi ile görüntülenen Hilal Altınbilek adeta bir köşe kapmaca oyununun&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenicaggazetesi.com.tr/hilal-altinbilekin-sevgilisi-goruntu-vermemek-icin-her-yolu-denedi-601228h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hilal Altınbilek&#39;in yeni sevgilisi inatçı çıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfVb8tZBCA6A3EYs7OaiJNdkoYozekQKME1NTbiyX4o27yxXNmmG78icSAsyDJBQtunrivf6y3" alt="Hilal Altınbilek&#39;in yeni sevgilisi inatçı çıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metin Hara ile yollarını ayıran Hilal Altınbilek, yeni sevgilisi ile Etiler&#39;de eğlendi. Ünlü oyuncunun gizemli erkek arkadaşı, basın mensuplarına görüntü&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}