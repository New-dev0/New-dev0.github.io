import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Toyota</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Toyota"/>
        <meta name="description" content="Trending News about Toyota" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Toyota</h1>
            <Image width={800} height={500} src="https://cdn.yeniakit.com.tr/images/news/625/toyota-turkiye-etika-2021-turkiye-etik-odulune-layik-goruldu-h1669314900-657847.jpg" alt="Toyota"/>
            <h3>Recent News</h3>
            <a href='https://www.yeniakit.com.tr/haber/toyota-turkiye-etika-2021-turkiye-etik-odulune-layik-goruldu-1710499.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Toyota Türkiye, &quot;ETİKA 2021 Türkiye Etik Ödülü&quot;ne layık görüldü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQCeyQeaCBbOmqtxWSAC1b3E0ifYwov2vvXuAIlkjKlJ5FEF1xqkUoQyEMlCBan4GKMGtrXDQUB" alt="Toyota Türkiye, &quot;ETİKA 2021 Türkiye Etik Ödülü&quot;ne layık görüldü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Toyota Türkiye Pazarlama ve Satış AŞ, EDMER tarafından etik değerlere önem veren şirketlerin değerlendirildiği ETİKA 2021 Türkiye Etik Ödülleri&#39;nde,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}