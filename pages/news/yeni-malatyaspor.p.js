import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yeni Malatyaspor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yeni Malatyaspor"/>
        <meta name="description" content="Trending News about Yeni Malatyaspor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yeni Malatyaspor</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/480000/481878.jpg" alt="Yeni Malatyaspor"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/futbol/spor-toto-1-lig/canli-yeni-malatyaspor-pendikspor-265511.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Malatya&#39;da Pendikspor kazandı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfKx4DQuBxSBZTHgCjcud9a07CwiE6xJ2W0Wv1afQY9VkpIYWTPqNQI-mlTsBBs2fw-uZjU97R" alt="Malatya&#39;da Pendikspor kazandı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor Toto 1. Lig&#39;in 14. haftasında Pendikspor, deplasmanda Yeni Malatyaspor&#39;u 3-0 mağlup ederek haftayı 3 puanla kapattı.</p></div>
            </div>
        </a><a href='https://www.milliyet.com.tr/skorer/yeni-malatyaspor-0-pendikspor-3-6859521'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yeni Malatyaspor: 0 - Pendikspor: 3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMU6NMKXEu_nhLTWLGmIMP-Msd8-Yits3lCUTxxMmR5W75bfh9uYkklfLzlOEKot7fE6J39D2I" alt="Yeni Malatyaspor: 0 - Pendikspor: 3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>İstanbul temsilcisine galibiyeti getiren golleri 9. dakikada Barış Başdaş (Kendi kalesine), 30. dakikada Thuram ve 90. dakikada Leandro Kappel attı. Bu sonucun&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yenisafak.com/yeni-malatyaspor-pendikspor-maci-macin-saati-ilk-11-kadrosu-canli-yayin-kanali-h-3890753'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yeni Malatyaspor Pendikspor maçı: Maçın saati, ilk 11 kadrosu, canlı ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOyS8TUYo3BEXpdIKH8V9KcUtgChwAIMYXEG4eiNJ6fx98Rj0SKtKOY7yxKX3j4SCgTItHCaCO" alt="Yeni Malatyaspor Pendikspor maçı: Maçın saati, ilk 11 kadrosu, canlı ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TFF 1. Lig&#39;in 14. hafta maçında Yeni Malatyaspor sahasında Pendikspor&#39;u konuk edecek. Mücadele öncesinde merak edilen konular arasında maçın yayın saati,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iha.com.tr/haber-yeni-malatyaspor-pendikspor-macinin-ardindan-1121987/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Yeni Malatyaspor - Pendikspor maçının ardından</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwkxwDWNFZKVbzw4yK2JicKU--raEY7uOzAOkMfdYYdq3-F_J_Hxob8Io5WGbFcVMw3vX2Mavw" alt="Yeni Malatyaspor - Pendikspor maçının ardından" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spor toto 1. lig&#39;in 14. haftasında yeni malatyaspor, sahasında pendikspor&#39;a 3-0 mağlup oldu. maçın ardından iki takımın teknik direktörü açıklamalarda.</p></div>
            </div>
        </a>
        </Template></>;
}