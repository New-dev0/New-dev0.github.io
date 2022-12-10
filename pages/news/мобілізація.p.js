import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мобілізація</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мобілізація"/>
        <meta name="description" content="Trending News about Мобілізація" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мобілізація</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/1/f/1f42cad-mobilization-russia-getty.jpg" alt="Мобілізація"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/12/9/7380107/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве &quot;завершилась мобилизация&quot;, более 10 мужчин ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThQ3OqauAzlyCjdQ13t-EvfVIjhGpKZozlOaCSSUn4VEUytenLePKZLoPM9iTEf0EEM8LX4t43" alt="В Москве &quot;завершилась мобилизация&quot;, более 10 мужчин ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Военкомат Тверского района Москвы устроил облаву на призывников, более 10 человек были схвачены на улице.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/9/7380107/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Москві &quot;завершилася мобілізація&quot;, понад 10 чоловіків схопили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThQ3OqauAzlyCjdQ13t-EvfVIjhGpKZozlOaCSSUn4VEUytenLePKZLoPM9iTEf0EEM8LX4t43" alt="У Москві &quot;завершилася мобілізація&quot;, понад 10 чоловіків схопили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Військкомат Тверського району Москви влаштував облаву на призовників, понад 10 осіб було схоплено на вулиці.</p></div>
            </div>
        </a><a href='https://polit.ru/news/2022/12/09/zubarevich/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мобилизация и рынок труда</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTwS8ZwsYROcVNE59cpM-pBRt1cPcAUfuTtaf9K0Yk4IPDPKv0WpI8qIE9ea1eoj-V-W9vNnts" alt="Мобилизация и рынок труда" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мобилизация и рынок труда – подробная информация. ПОЛИТ.РУ – информационно-аналитический портал об общественно-политической жизни России и мира.</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/chastichnaja-mobilizacija-rossii-moskve-ustroili-oblavu-prizyvnikov_n2214982'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В одном из районов Москвы военкомат устроил облаву на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGx_UVNktCLJgxbr5BDXWUqvTcyh28pdagXmYuljnEXYRuGgH9rFwxFmRA0_n4gBXTz2-jJ3Pn" alt="В одном из районов Москвы военкомат устроил облаву на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несмотря на заявления Кремля о завершении частичной мобилизации в России, военкоматы не прекращают охоту на россиян. Военкомат Москвы устроил облаву на&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/chastkova-mobilizatsiya-rosiyi-moskvi-vlashtuvali-oblavu-prizovnikiv_n2214975'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В одному з районів Москви військкомат влаштував облаву на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGx_UVNktCLJgxbr5BDXWUqvTcyh28pdagXmYuljnEXYRuGgH9rFwxFmRA0_n4gBXTz2-jJ3Pn" alt="В одному з районів Москви військкомат влаштував облаву на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Попри заяви Кремля про завершення часткової мобілізації у Росії, військкомати не припиняють полювання на росіян. Військкомат Москви влаштував облаву на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}