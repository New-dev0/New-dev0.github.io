import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anadolu Üniversitesi Açıköğretim</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anadolu Üniversitesi Açıköğretim"/>
        <meta name="description" content="Trending News about Anadolu Üniversitesi Açıköğretim" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anadolu Üniversitesi Açıköğretim</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/6393b4fd4e3fe02850e6d03f.jpg" alt="Anadolu Üniversitesi Açıköğretim"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/bilgi/galeri-aof-sinavlarinda-kalem-ve-silgi-verilecek-mi-acikogretim-sinavlarina-cuzdan-ile-girilir-mi-42185141'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AÖF sınavlarında kalem ve silgi verilecek mi? Açıköğretim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSptXTr7jHsAJAeMC9Qhgk32lXzMRjCjVwcMgn4Y_JPj08RrNos5tvlMC9fX65KpnpTTFA0cmx" alt="AÖF sınavlarında kalem ve silgi verilecek mi? Açıköğretim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anadolu Üniversitesi, güz yarıyıl vize sınavları bugün ülke genelinde yapılan oturumlarla başlayacak. Sınavlar 11 Aralık Pazar günü de devam edecek.</p></div>
            </div>
        </a><a href='https://www.mynet.com/aof-puan-hesaplama-nasil-yapilir-ders-gecme-notu-nedir-iste-2022-2023-aof-puan-hesaplama-ve-ders-gecme-notu-170100285725'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AÖF puan hesaplama nasıl yapılır, ders geçme notu nedir? İşte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT62e13iRj77Q8cckhHTpsE3CALF3-rvCBd8DmsFlhZ1Fb35AIXs4KlnZ51CTCHqHuK5Nm8AWPB" alt="AÖF puan hesaplama nasıl yapılır, ders geçme notu nedir? İşte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Çıkan bu not, öğrencinin dersten aldığı puandır. s2. 2022 - 2023 AÖF SINAV GEÇME NOTLARI. AÖF sınav geçme başarı notunun alt sınır değeri 35&#39;tir. Başarı notu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeturk.com/genel/acikogretim-aof-sinavina-cep-telefonu-ile-girilir-mi-yasak-mi/haber-1756181'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Açıköğretim (AÖF) sınavına cep telefonu ile girilir mi, yasak mı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-WvBO-sOODsBmEo0Jl1v1_n8ypyp-wq8tXY0SCDV_9iQliQlG9fZXmTR6lj86HftpR4rhXUgy" alt="Açıköğretim (AÖF) sınavına cep telefonu ile girilir mi, yasak mı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Açıköğretim (AÖF) sınavına cep telefonu ile girilir mi, yasak mı? Yüz binlerce kişi Anadolu Üniversitesi Açıköğretim Fakültesi güz ve bahar dönemi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}