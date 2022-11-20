import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Doğan Alemdar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Doğan Alemdar"/>
        <meta name="description" content="Trending News about Doğan Alemdar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Doğan Alemdar</h1>
            <Image width={800} height={500} src="" alt="Doğan Alemdar"/>
            <h3>Recent News</h3>
            <a href='https://www.sozcu.com.tr/spor/futbol/dogan-alemdardan-buyuk-hata-7489549/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doğan Alemdar&#39;dan büyük hata</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSCqH0kQxrI0C1yV08zgpsqTeXFDNza6Ko56kqkqg0ZQhcFgcYM4ANkMFm4ZRoRTze3h3lrd2I" alt="Doğan Alemdar&#39;dan büyük hata" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Türkiye A Milli Futbol Takımı, Gaziantep Kalyon Stadyumu&#39;nda Çekya ile hazırlık maçında karşı karşıya geldi. Karşılaşmanın 31. dakikasında Enes Ünal ile öne&nbsp;...</p></div>
            </div>
        </a><a href='https://www.haberler.com/spor/dogan-alemdar-dan-akilalmaz-hata-yedigimiz-gol-15440469-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doğan Alemdar&#39;dan inanılmaz hata! Yediğimiz gol saç baş yoldurdu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTj4fV8_jSedjPc6dVwA02Xp1fKWhklP6XffjAzqf4ApfvvT8irdSG2HMSy0vwtI-pmCZNd2CKW" alt="Doğan Alemdar&#39;dan inanılmaz hata! Yediğimiz gol saç baş yoldurdu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>56&#39;da Cerny&#39;nin ceza sahası dışından çektiği şut Doğan Alemdar&#39;ın üzerine geldi. Ancak genç kaleci topa erken hamle yapıp kontrol edemedi. Topun filelere&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}