import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Öğretmenler Günü mesajı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Öğretmenler Günü mesajı"/>
        <meta name="description" content="Trending News about Öğretmenler Günü mesajı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Öğretmenler Günü mesajı</h1>
            <Image width={800} height={500} src="https://static.daktilo.com/sites/1125/uploads/2022/11/21/attachment-126298-5-9eb577997afed826501d97065352b4b6-1669018065.jpg" alt="Öğretmenler Günü mesajı"/>
            <h3>Recent News</h3>
            <a href='https://www.haberlisin.com/haber/12578694/sahinden-ogretmenler-gunu-mesaji'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Şahin&#39;den Öğretmenler Günü mesajı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_gC0PoO_HC-8qFtg2n0igRMeMAs5g4S4ZYvECjVVihjCZu3ZhmXAct8h9Zk4cqw_F1akop26m" alt="Şahin&#39;den Öğretmenler Günü mesajı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24 Kasım, Millet Mektepleri&#39;nin açılışı ve Gazi Mustafa Kemal Atatürk&#39;ün 24 Kasım 1928 tarihinde “Başöğretmen” sıfatı alması vesilesiyle, 1981 yılından beri “&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marasgundem.com.tr/gundem/sanko-rektoru-daglidan-ogretmenler-gunu-mesaji-1505605h'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SANKO Rektörü Dağlı&#39;dan Öğretmenler Günü Mesajı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8Z46_8NNsVcvILgg2nmvCHK2IxSi7m3D0lr1xRyaw3VblhC75mSBtXMrXrSBgE_7JHPF_Tfkh" alt="SANKO Rektörü Dağlı&#39;dan Öğretmenler Günü Mesajı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24 Kasım Öğretmeler Günü dolayısıyla mesaj yayımlayan Prof. Dr. Dağlı, Büyük Önder&#39;in 1928 yılında Millet Mektepleri Başöğretmenliğini kabul ettiği 24 Kasım&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}