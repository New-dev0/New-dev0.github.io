import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alparslan Türkeş</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alparslan Türkeş"/>
        <meta name="description" content="Trending News about Alparslan Türkeş" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alparslan Türkeş</h1>
            <Image width={800} height={500} src="https://www.karamanhabercisi.com/d/news/55077.jpg" alt="Alparslan Türkeş"/>
            <h3>Recent News</h3>
            <a href='https://www.karamanhabercisi.com/baskan-incetoprak-alparslan-turkes-turke-basbug-olmustur-54096h.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Başkan İncetoprak: “alparslan Türkeş, Türk&#39;e Başbuğ Olmuştur”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmZjwZRF7XEwmYlbcuQNx1Xsj4WpShODxYj4LncDQqaIDzvkz5TZXBNJk-NnpIoPu2ENcoX-VD" alt="Başkan İncetoprak: “alparslan Türkeş, Türk&#39;e Başbuğ Olmuştur”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milliyetçi Hareket Partisi (MHP) Kayseri İl Başkanı Adnan İncetoprak, Milliyetçi Hareket Partisi kurucu Genel Başkanı Merhum Alparslan Türkeş&#39;i doğumunun...</p></div>
            </div>
        </a><a href='https://www.medyakesan.com.tr/mhp-kesan-ilce-baskanligi-alparslan-turkesi-dogum-gununde-andi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MHP Keşan İlçe Başkanlığı, Alparslan Türkeş&#39;i doğum gününde andı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUv0U47V7oH9Ise2wQ3iMGwVjxSXoS4XALofHYjEQMIC-il9cn5UdEk0xKLSvQxdcDRKx_IH7t" alt="MHP Keşan İlçe Başkanlığı, Alparslan Türkeş&#39;i doğum gününde andı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahmet Özkaya, Türk dünyasının bilge lideri, Türk milliyetçiliğinin kurucusu, Türk milliyetçilerinin Başbuğu Merhum Alparslan Türkeş&#39;i, doğum yıl dönümünde&nbsp;...</p></div>
            </div>
        </a><a href='https://beyazgazete.com/haber/2022/11/25/baskan-incetoprak-aciklamasi-alparslan-turkes-turk-e-basbug-olmustur-6663127.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baskan Incetoprak Açiklamasi &#39;Alparslan Türkes, Türk&#39;e Basbug ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0ZGR-7S3AeAZIbhjoB6ZlmHekADU4N1BTugM2SB99foVFLtkN6I45aDyakcXC_AutnWu-ZoUO" alt="Baskan Incetoprak Açiklamasi &#39;Alparslan Türkes, Türk&#39;e Basbug ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milliyetçi Hareket Partisi (MHP) Kayseri Il Baskani Adnan Incetoprak, Milliyetçi Hareket Partisi kurucu Genel Baskani Merhum Alparslan Türkes&#39;i dogumunun&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ciddigazete.com/baba-turkese-dogum-gunu-ziyareti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baba Türkeş&#39;e doğum günü ziyareti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQsFuP1Kyo9jusV9mTH416tEQBvDo3mldfy1kIGMtYyMb5yjh5rPk7967ij6dUHzkKS9RatFJoP" alt="Baba Türkeş&#39;e doğum günü ziyareti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahmet Kutalmış Türkeş, doğum günü münasebetiyle babası Alparslan Türkeş&#39;in Ankara Beştepe&#39;deki kabrini ziyaret ederek Fatiha okudu.</p></div>
            </div>
        </a>
        </Template></>;
}