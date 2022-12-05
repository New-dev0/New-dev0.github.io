import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Milli Savunma Bakanlığı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Milli Savunma Bakanlığı"/>
        <meta name="description" content="Trending News about Milli Savunma Bakanlığı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Milli Savunma Bakanlığı</h1>
            <Image width={800} height={500} src="https://i4.hurimg.com/i/hurriyet/75/1200x675/638c85594e3fe021305334c1.jpg" alt="Milli Savunma Bakanlığı"/>
            <h3>Recent News</h3>
            <a href='https://www.hurriyet.com.tr/gundem/milli-savunma-bakanligindan-duygulandiran-paylasim-vasiyetiniz-vasiyetimizdir-42181950'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Şehit askerlerden yürek sızlatan video... &#39;Yaşayamadığım bir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWbg9cIBvRJlFfrxh5EOKwabBmPy5XczIHdwPfhHZPObk9kx02JIWk4wDUPrHypG4J8XsdGlzZ" alt="Şehit askerlerden yürek sızlatan video... &#39;Yaşayamadığım bir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanlığı&#39;nın (MSB) İşte Türk askeri budur! Mehmetçik budur! notuyla paylaştığı video izleyenleri duygulandırdı. Şehit askerler Piyade Teğmen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ahaber.com.tr/gundem/2022/12/04/milli-savunma-bakanligindan-duygulandiran-paylasim-vasiyetiniz-vasiyetimizdir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milli Savunma Bakanlığından duygulandıran paylaşım: Vasiyetiniz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTL6k3T2l-yj8Xc089FeQZz2KociJrQ5lCA_GwvFx5fFREJ7eNbYnrDBw3F0YFSjpq3LHTJL8Yj" alt="Milli Savunma Bakanlığından duygulandıran paylaşım: Vasiyetiniz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanlığı sosyal medya adresinden yaptığı İşte Türk askeri budur! Mehmetçik budur! paylaşımıyla yürekleri dağladı.</p></div>
            </div>
        </a><a href='https://www.cumhuriyet.com.tr/turkiye/msb-sehit-askerlerin-vasiyetlerinin-yer-aldigi-videoyu-paylasti-2008820'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MSB, şehit askerlerin vasiyetlerinin yer aldığı videoyu paylaştı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0oC8_lr94QM5E9BYlUuk1zkRppXaQmlepbS-KQsdiuGBt63TuIdWsx-fs_ewhfkpjtxMX3Dti" alt="MSB, şehit askerlerin vasiyetlerinin yer aldığı videoyu paylaştı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanlığı (MSB), Pençe-Kilit Operasyonu bölgesinde şehit olan Piyade Teğmen Duabey Onur Öztürkmen, Piyade Astsubay Yusuf Ataş ve Piyade Uzman&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hurriyet.com.tr/video/milli-savunma-bakanligi-paylasti-vasiyetiniz-vasiyetimizdir-42181962'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milli Savunma Bakanlığı paylaştı: Vasiyetiniz, vasiyetimizdir</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQU2lKU3AZ7u7Jj6PYnmKe08CrRAR6ti4q7xlEZvUUTi3NHQcYIR3EDzSIb8JQOpLxjoivAdfsD" alt="Milli Savunma Bakanlığı paylaştı: Vasiyetiniz, vasiyetimizdir" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milli Savunma Bakanlığı, şehitler için özel klip bir paylaşarak “Onlar hayattayken de şehadete yürürken de kendini düşünmez. Daima devleti, milleti ve&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}