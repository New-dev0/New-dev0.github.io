import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>EYT son dakika haberleri</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,EYT son dakika haberleri"/>
        <meta name="description" content="Trending News about EYT son dakika haberleri" /></Head><Template>
            <h1 style={{fontSize: "30"}}>EYT son dakika haberleri</h1>
            <Image width={800} height={500} src="https://i3.posta.com.tr/i/posta/75/0x0/637cc11fe4bfdc0260c85fbb.jpg" alt="EYT son dakika haberleri"/>
            <h3>Recent News</h3>
            <a href='https://www.posta.com.tr/ekonomi/eyt-son-dakika-haberleri-emeklilikte-yasa-takilanlar-yasasi-ne-zaman-cikiyor-kimler-eyt-ile-emekli-olabilecek-ne-kadar-maas-alacak-2587192'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT son dakika haberleri! Emeklilikte Yaşa Takılanlar yasası ne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9_zzXhuIhNILzsl17UmcMWwkjTq1aHNDRbonaISPHwGcsvcP9hbTyqOUtxXJPJ7i1AZ66K9L_" alt="EYT son dakika haberleri! Emeklilikte Yaşa Takılanlar yasası ne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ekonomi &middot; EYT son dakika haberleri gün be gün takip ediliyor. &middot; EMEKLİLİKTE YAŞA TAKILANLAR YASASI NE ZAMAN ÇIKIYOR? &middot; KİMLER EYT İLE EMEKLİ OLABİLECEK? &middot; EYT İLE&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabah.com.tr/galeri/yasam/eyt-son-dakika-bugun-emeklilikte-yasa-takilanlarda-borclanma-firsati-eyt-nedir-ne-zaman-cikacak-sartlari-neler-kimleri-kapsiyor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT son dakika haberleri 22 Kasım bugün | Bakan Bilgin&#39;den ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7sV1ECR0Enwgf5tq_iblww6JN_h73Kap9GB1lNGE5iUCn16TjOMhBcbtSEuakZpHozcIjs3Tt" alt="EYT son dakika haberleri 22 Kasım bugün | Bakan Bilgin&#39;den ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>EYT son dakika bugün haberleri gündemdeki yerini koruyor. Başkan Erdoğan&#39;ın peş peşe açıklanacak dediği konu başlıkları arasında yer alan emeklilikte yaşa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/galeri/eytde-bugun-son-dakika-gelismesi-var-mi-eytden-emekli-olunursa-ne-kadar-emekli-maasi-alinacak-ne-zaman-cikacak-emeklilikte-yasa-takilanlar-icin-sartlar-neler-6861101'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT MAAŞLARI NE KADAR OLACAK, NE ZAMAN ÇIKACAK? EYT ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVJv48UDdUVaZ_VvUzEU8KIss9xsDTHTM5x5VJHOZfaqkrVX1IzB2r5-YD8eYbR2kyVILGsU7B" alt="EYT MAAŞLARI NE KADAR OLACAK, NE ZAMAN ÇIKACAK? EYT ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yaklaşık 1.5 milyon kişini beklediği EYT&#39;nin şartları arasında 5000 gün prim şartı bulunuyor. EYT ile emekli olmayı bekleyenler diğer taraftan ise EYT emekli&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntv.com.tr/galeri/ntvpara/is-dunyasinin-eyt-talepleri,Xzl7Togc90CZ27IjVb0OtQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İş dünyasının EYT talepleri</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlerndg7L-y9kDmomRpjMKQ3c-wt-TIe4cCiBqPxz6yXQ4oiYFmTmAoOXmeUNgrv5mKlTUiTJB" alt="İş dünyasının EYT talepleri" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emeklilikte Yaşa Takılanlar (EYT) düzenlemesinde sona yaklaşılırken iş dünyası taleplerini Çalışma ve Sosyal Güvenlik Bakanı Bilgin&#39;e iletti.</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/bilgi/galeri-ciraklik-eyt-sayilacak-mi-ciraklik-sigortasi-eyt-baslangici-olacak-mi-iste-guncel-eyt-haberleri-42174247'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT HABERLERİ (GÜNCEL) Çıraklık EYT sayılacak mı? Çıraklık ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgjx5SPg5zC60_aln408F8w4JahfKUppcadBSHk3EpyA-e1Rknr7reSfvKdcKG06c6KcSQBMQ1" alt="EYT HABERLERİ (GÜNCEL) Çıraklık EYT sayılacak mı? Çıraklık ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>STAJ SİGORTASI EYT&#39;DEN SAYILACAK MI? Çalışma ve Sosyal Güvenlik Bakanı Vedat Bilgin, kendisine yöneltilen soru üzerine staj ve çıraklık konusuna açıklık getirdi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.milligazete.com.tr/haber/12588277/eytde-sona-dogru-is-dunyasinin-talepleri-belli-oldu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EYT&#39;de sona doğru: İş dünyasının talepleri belli oldu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSda74vl0ccwthh5n_oL-ypURHcUQOUOvtTd2mOnbzqNKABzN6ItCoz1aO5XZWubE11aCjMM8kT" alt="EYT&#39;de sona doğru: İş dünyasının talepleri belli oldu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emeklilikte Yaşa Takılanlar (EYT) düzenlemesinde sona yaklaşılırken iş dünyası taleplerini Çalışma ve Sosyal Güvenlik Bakanı Bilgin&#39;e iletti.</p></div>
            </div>
        </a><a href='https://www.sondakika.com/ekonomi/haber-eyt-duzenlemesinde-sayili-gunler-kaldi-is-15442499/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milyonların sabırsızlıkla beklediği EYT düzenlemesi iş dünyasında ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRoQ5-W3im08o5xntNbruCFNdKpUuBvlpgL7vEKlbtcCKGqakX_dWa1_cDUId0jj4aM_txhLDV" alt="Milyonların sabırsızlıkla beklediği EYT düzenlemesi iş dünyasında ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye Odalar ve Borsalar Birliği (TOBB) Başkanı Rıfat Hisarcıklıoğlu, Çalışma ve Sosyal Güvenlik Bakanı Vedat Bilgin ile bir araya gelip işletmelere gelecek&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}