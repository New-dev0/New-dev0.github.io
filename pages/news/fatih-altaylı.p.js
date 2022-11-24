import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fatih Altaylı</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fatih Altaylı"/>
        <meta name="description" content="Trending News about Fatih Altaylı" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fatih Altaylı</h1>
            <Image width={800} height={500} src="https://im.haberturk.com/yazarlar/HTGazete/fatih-altayli-1001-600x314.jpg?v=1637576651" alt="Fatih Altaylı"/>
            <h3>Recent News</h3>
            <a href='https://www.haberturk.com/yazarlar/fatih-altayli-1001/3541250-itiraf-edin-odunuz-patladi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fatih Altaylı - İtiraf edin ödünüz patladı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ55MTE-JWeYwqKK2U5XnZYBy3wUBJyIgINrfCFACDr3mPrYyaQnskMH3pu9DMoivC1BB07OkQi" alt="Fatih Altaylı - İtiraf edin ödünüz patladı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sarsıntılar başladığında saat tam tamına 04.08.14&#39;ü gösteriyordu. Ankara ile İstanbul arasındaki hat zangır zangır titredi. Depreme alışkın olmayan Ankara&#39;da da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}