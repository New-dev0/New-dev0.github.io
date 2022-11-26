import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sıcak Kafa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sıcak Kafa"/>
        <meta name="description" content="Trending News about Sıcak Kafa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sıcak Kafa</h1>
            <Image width={800} height={500} src="https://img-s1.onedio.com/id-6380b98ff0ff418515bddb73/rev-0/raw/s-e2f2e28abbed739807c10407cb36bf3d0e4d08fb.jpg" alt="Sıcak Kafa"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/osman-sonant-in-basrolde-oldugu-ilk-yerli-distopik-dizi-sicak-kafa-nin-fragmani-yayinlandi-1109803'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Osman Sonant&#39;ın Başrolde Olduğu İlk Yerli Distopik Dizi Sıcak Kafa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZeexdC2MgprmmWu1TAqnBTgb9zPDIME5TjgDWAhtFqZGYCVHQtC981dkwUdhsT5gorxOZ6Q3a" alt="Osman Sonant&#39;ın Başrolde Olduğu İlk Yerli Distopik Dizi Sıcak Kafa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kadrosunda Osman Sonant, Şevket Çoruh, Hazal Subaşı, Haluk Bilginer&#39;in olduğu Netflix&#39;in distopik dizisi Sıcak Kafa&#39;dan fragman, detaylar Onedio&#39;da!</p></div>
            </div>
        </a><a href='https://www.gazeteduvar.com.tr/netflixin-yeni-dizisi-sicak-kafadan-ilk-goruntuler-galeri-1590824'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix Türkiye&#39;nin yeni dizisi &#39;Sıcak Kafa&#39;dan ilk görüntüler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTklBJoz1wJam1AkTw6-sriG0H-po2Xcu9cVRTrd6srdfWQh0Ky8fPzED1ZJG4X7oo5d1hK6-eq" alt="Netflix Türkiye&#39;nin yeni dizisi &#39;Sıcak Kafa&#39;dan ilk görüntüler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netflix Türkiye&#39;nin yeni bilim kurgu dizisi &quot;Sıcak Kafa&quot;dan ilk görseller yayınlandı. Dizi, 2 Aralık&#39;ta izleyici karşısına çıkacak.</p></div>
            </div>
        </a><a href='https://shiftdelete.net/turkiyenin-ilk-distopik-dizisi-sicak-kafadan-fragman-geldi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye&#39;nin ilk distopik dizisi Sıcak Kafa&#39;dan fragman geldi!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBO4uV8udgWlC6zYBdVfTUW97fiX66PhPECUHMer3A1kRGxVfiASI9YUQ16kU_JTb05bJE7NZx" alt="Türkiye&#39;nin ilk distopik dizisi Sıcak Kafa&#39;dan fragman geldi!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dijital içerik platformu Netflix, yerli distopik dizi Sıcak Kafa&#39;nın ilk fragmanını yayınladı. İşte diziyle ilgili detaylar!</p></div>
            </div>
        </a><a href='https://www.log.com.tr/netflix-sicak-kafa-icin-yeni-fragman-ve-gorseller-paylasti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix, &quot;Sıcak Kafa&quot; için yeni fragman ve görseller paylaştı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcrvSK4jXjlzpoBmtRuNcRpAEbuiZMWwT1tknN3YQt7QoUVSrcgBNyqQC11rn-p4HOhnbj8eOd" alt="Netflix, &quot;Sıcak Kafa&quot; için yeni fragman ve görseller paylaştı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netflix, yerli içerikler ile dikkat çekmeye devam ediyor. Firma özellikle Sıcak Kafa üzerinde oldukça duruyor ve paylaşımları sürdürüyor.</p></div>
            </div>
        </a><a href='https://www.superhaber.tv/sicak-kafa-dizisi-konusu-nedir-netflix-sicak-kafa-oyunculari-kimler-haber-428797'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sıcak Kafa Dizisi Konusu Nedir? Netflix Sıcak Kafa Oyuncuları Kimler?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvKrgpe6hE9prCBGgo-Oy_WByV0vlsBKtCZfT25pHCe8iUM-s0OY7jp6FhbZKWyxDgEHHjnIXb" alt="Sıcak Kafa Dizisi Konusu Nedir? Netflix Sıcak Kafa Oyuncuları Kimler?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netflix Sıcak Kafa dizisi konusu ve oyuncularıyla merak ediliyor. Apokaliptik bir dünyayı anlatan Sıcak Kafa dizisinin fragmanı da yayınlandı.</p></div>
            </div>
        </a><a href='https://www.cepkolik.com/turkiyenin-ilk-distopik-dizisi-icin-fragman-yayinlandi-608595/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Türkiye&#39;nin İlk Distopik Dizisi İçin Fragman Yayınlandı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXwctboJUqahHZEI2allEvYjmbTEvm33XHp4Ctnun5egJcwby1TJRkp_We2i9Hb-tgfOqX1i7R" alt="Türkiye&#39;nin İlk Distopik Dizisi İçin Fragman Yayınlandı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Günümüzün en popüler dizi ve film izleme platformu olan Netflix, Türkiye&#39;nin ilk distopik dizisi Sıcak Kafa için ilk fragman yayınlandı!</p></div>
            </div>
        </a>
        </Template></>;
}