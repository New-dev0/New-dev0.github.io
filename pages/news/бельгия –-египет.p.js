import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Бельгия – Египет</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Бельгия – Египет"/>
        <meta name="description" content="Trending News about Бельгия – Египет" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Бельгия – Египет</h1>
            <Image width={800} height={500} src="https://www.interfax.ru/aspimg/873300.png" alt="Бельгия – Египет"/>
            <h3>Recent News</h3>
            <a href='https://www.interfax.ru/world/873300'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пять судов доставят украинское продовольствие в Китай ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSLZaRIJv3K_SiAVmNA-_UsQWdkUxwROh_yOHXXfUv8MD-llqWAJ9N_6aG4O6wSrOiNHt1C3NAW" alt="Пять судов доставят украинское продовольствие в Китай ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 20 ноября. INTERFAX.RU - Совместный координационный центр (СКЦ) обновил в субботу навигационное руководство в связи с продлением &quot;зерновой сделки&quot;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}