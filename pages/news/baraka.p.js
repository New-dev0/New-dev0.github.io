import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Baraka</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Baraka"/>
        <meta name="description" content="Trending News about Baraka" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Baraka</h1>
            <Image width={800} height={500} src="https://www.cumhuriyet.com.tr/Archive/2022/11/17/2003629/kapak_123916.jpg" alt="Baraka"/>
            <h3>Recent News</h3>
            <a href='https://www.cumhuriyet.com.tr/yasam/baraka-filminin-konusu-ne-oyunculari-kim-2003629'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baraka filminin konusu ne, oyuncuları kim?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiR3g9yx41nMI1f19nqn4-otG32VuqDWm9wxAdoiPp2cVb2SrNmjpORiOnYfCCjTo9mJdwR3FG" alt="Baraka filminin konusu ne, oyuncuları kim?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2017 yılında vizyona giren Baraka filmi, televizyon ekranlarında izleyiciyle buluşan filmler arasında yer alıyor. Peki, Baraka filminin konusu ne?</p></div>
            </div>
        </a><a href='https://www.haberfokus.com/baraka-the-shack-filmi-ne-anlatiyor-baraka-filminin-oyunculari-kimdir-baraka-filmi-hakkinda-detaylar-haber-1083894'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baraka (The Shack) Filmi Ne Anlatıyor? Baraka Filminin Oyuncuları ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTkNMDI6VybGN4p24fO_1tGJjmlUsZ3I54EMl06XEzwlLmMzoY12ihzLKj5U4Htq2AiwyLUB-u" alt="Baraka (The Shack) Filmi Ne Anlatıyor? Baraka Filminin Oyuncuları ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bu akşam Beyaz TV ekranlarında yayımlanacak olan Baraka filmi hakkındaki detaylar belli oldu. Başrollerinde Sam Worthington, Octavia Spencer, Tim McGraw&#39;ın&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}