import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ayşe Özkiraz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ayşe Özkiraz"/>
        <meta name="description" content="Trending News about Ayşe Özkiraz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ayşe Özkiraz</h1>
            <Image width={800} height={500} src="https://iasbh.tmgrup.com.tr/e279ca/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2022/11/29/son-dakika-haberi-sahte-doktorun-yurt-arkadasi-konustu-tek-yalani-doktorluk-degil-1669746921608.jpg" alt="Ayşe Özkiraz"/>
            <h3>Recent News</h3>
            <a href='https://www.sabah.com.tr/galeri/yasam/son-dakika-haberi-sahte-doktorun-yurt-arkadasi-konustu-tek-yalani-doktorluk-degil'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SON DAKİKA HABERİ: Sahte doktor Ayşe Özkiraz&#39;ın yurt arkadaşı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQk0GckNUhRoMxlJG_RWNHdiif25qhzukeIEg76-DB_0PrjLyYNtly0lNPoyPEfubXcD6fZjib6" alt="SON DAKİKA HABERİ: Sahte doktor Ayşe Özkiraz&#39;ın yurt arkadaşı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son dakika haberi… Çerkezköy Devlet Hastanesi&#39;nde yaklaşık 1 yıldır kendisini pratisyen hekim olarak tanıtan Ayşe Özkiraz Türkiye&#39;nin gündemine oturdu....</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/gundem/sahte-doktor-skandalinda-yeni-detaylar-ayse-ozkiraz-inandirici-olmak-icin-kendi-adina-celenk-bile-yaptirmis-42179190'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bildiğimiz yalanlarına yenileri eklendi! Sahte doktor Ayşe Özkiraz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWeGvSRyEEHnucbXkJ7EbR_pYfTfCscq7axmzUPzGpuxFKGR6RDAUx41BTosD4OOgFoliA_RCK" alt="Bildiğimiz yalanlarına yenileri eklendi! Sahte doktor Ayşe Özkiraz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haberler - Türkiye&#39;nin günlerdir konuştuğu Tekirdağ&#39;daki &#39;sahte doktor&#39; skandalına ilişkin yeni ayrıntılar gelmeye devam ediyor.</p></div>
            </div>
        </a><a href='https://www.sozcu.com.tr/2022/gundem/sahte-doktor-ayse-ozkiraz-hastaneye-capanin-gururu-yazili-celenk-yollatmis-7508009/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte doktor Ayşe Özkiraz hastaneye &#39;Çapa&#39;nın gururu&#39; yazılı çelenk ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgS262wjMZ54xymfCEcVGoYFAzQ-lc3Kl6pbxwxqvjlYpmh0BQL6V8v_z52JRE-uwx02_igyGA" alt="Sahte doktor Ayşe Özkiraz hastaneye &#39;Çapa&#39;nın gururu&#39; yazılı çelenk ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ&#39;ın Çerkezköy Devlet Hastanesi&#39;nde kendisini &#39;pratisyen hekim&#39; olarak tanıtan, sahte diploma ile görev yaptığı anlaşılınca tutuklanan Ayşe&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnturk.com/turkiye/tekirdagda-sahte-doktor-ayse-ozkiraz-kimdir-inandirici-olsun-diye-dogum-gununde-kendine-celenk-yollamis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tekirdağ&#39;da sahte doktor! Ayşe Özkiraz kimdir? İnandırıcı olsun diye ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSB6W-fUbh4CcDsWjEYxwGIGj389J_HQTh3Cu0MwL6phQFnZZHYhUWQJghPP3FtQRePSOax0MV0" alt="Tekirdağ&#39;da sahte doktor! Ayşe Özkiraz kimdir? İnandırıcı olsun diye ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tekirdağ&#39;da sahte doktor olayı Türkiye&#39;yi hayrete düşürdü. Sahte doktor olayında bir ayrıntı daha gün yüzüne çıktı. Tutuklanan Ayşe Özkiraz&#39;ın,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/sahte-doktor-skandalinda-yeni-gelisme-kendine-capanin-gururu-diye-celenk-yollamis-2007407'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Sahte doktor&#39; skandalında yeni gelişme: Kendine &#39;Çapa&#39;nın gururu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRaZsdzF4xcP6yp1NeR6h_sdcAle4oTPYDZAqa97VO7LWZXsIZtvVJ5jkQBx8ag1HXl2F5YIeSr" alt="&#39;Sahte doktor&#39; skandalında yeni gelişme: Kendine &#39;Çapa&#39;nın gururu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sahte doktorun kendine &quot;Sağlık dolu yıllara canım dostumuz. Seni çok seviyoruz. Doğum günün kutlu olsun. Doktorlar tayps&quot; notuyla gönderdiği çiçek için kredi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zhaber.com.tr/sahte-doktor-ayse-ozkiraz-kimdir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sahte doktor Ayşe Özkiraz kimdir?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZJXO54gnrMz7BMzPEP0i1c6g3V-bBiTc9JdwjRPDqV9NmUekF0d9n6pFWYRC6xbJW2W_W4A8-" alt="Sahte doktor Ayşe Özkiraz kimdir?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SAHTE DOKTOR AYŞE ÖZKİRAZ KİMDİR? Hastanede görevli uzman doktoru sahte diploma ile kandırarak hastanede gözlem yaparak meslekte ilerlemek istediğini anlatan&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}