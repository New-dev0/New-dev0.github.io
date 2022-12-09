import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Timur Soykan kimdir</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Timur Soykan kimdir"/>
        <meta name="description" content="Trending News about Timur Soykan kimdir" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Timur Soykan kimdir</h1>
            <Image width={800} height={500} src="https://img-s3.onedio.com/id-6391f4f8956821902b5c7215/rev-0/raw/s-464aa260009048d6470d98b449a4c0f4179922f4.jpg" alt="Timur Soykan kimdir"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/timur-soykan-kimdir-kac-yasinda-nereli-timur-soykan-in-egitimi-ne-nerelerde-calisti-1112915'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Timur Soykan Kimdir, Kaç Yaşında, Nereli? Timur Soykan&#39;ın Eğitimi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmDQ_IaQUKPDW-6B0PzuZUtX7Y7UGvEiHRS3hrniWWEHpP3swSA35tRA5rWjHMKd67pYSGNcUfnQ" alt="Timur Soykan Kimdir, Kaç Yaşında, Nereli? Timur Soykan&#39;ın Eğitimi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Televizyon programlarına yorumcu olarak katılan gazeteci, 2008 yılında Sapan: Hrant Dink Cinayeti- Bir. 2009 yılında ise Tanrı Misafirleri Oteli , 2013&nbsp;...</p></div>
            </div>
        </a><a href='https://medyabaskent.com/haber/12985124/timur-soykan-kimdir-timur-soykan-neden-gundem-oldu-timur-soykan-nereli'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Timur Soykan Kimdir? Timur Soykan Neden Gündem Oldu? Timur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSBdFcMKc_KpBxjGN-6b3Dzmj9ktNd5Rxh6DOgKh4PJvso_6PS00xND4hm2H93PrIJW8fFIvnzE" alt="Timur Soykan Kimdir? Timur Soykan Neden Gündem Oldu? Timur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BirGün gazetesi yazarı Timur Soykan, Twitter&#39;da gündem oldu. Gazeteci Soykan kariyeri boyunca birçok gazetede muhabirlik, editörlük gibi işler yaptı.</p></div>
            </div>
        </a><a href='https://www.timeturk.com/genel/timur-soykan-kimdir-timur-soykan-ne-is-yapiyor/haber-1756119'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Timur Soykan kimdir? Timur Soykan ne iş yapıyor? - Timeturk Haber</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLy_wQ6ofkW3NQylpMFg6TfW1BG6AbcD_jnlhL989qhDWH9kJe3DaboBtTGzS5Z_pvImk9bKDc" alt="Timur Soykan kimdir? Timur Soykan ne iş yapıyor? - Timeturk Haber" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hrant Dink cinayeti ile ilgili yayımladığı kitabı ile dikkatleri üzerine çeken Timur Soykan Radikal gazetesinde editör olarak çalışıyordu. 1992 yılında Marmara&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mardinlife.com/gazeteci-yazar-timur-soykan-kimdir-kac-yasinda-yazar-timur-soykan-nereli-babasi-kimdir-kitaplari.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gazeteci Yazar Timur Soykan kimdir, kaç yaşında? Yazar Timur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTbRtqk-yAKPyo0itXB9RIaea35JsTlSwjMnF95fcr29BjeQDSQ3JypxC6vjazdtC47494PFJb" alt="Gazeteci Yazar Timur Soykan kimdir, kaç yaşında? Yazar Timur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>6 yaşında evlendirildi haberine imza atan Timur Soykan Türkiye&#39;nin gündemine oturdu. Peki, Gazeteci Timur Soykan kimdir? Timur Soykan aslen nerelidir,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}