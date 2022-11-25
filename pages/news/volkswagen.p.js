import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Volkswagen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Volkswagen"/>
        <meta name="description" content="Trending News about Volkswagen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Volkswagen</h1>
            <Image width={800} height={500} src="https://img-s1.onedio.com/id-637f35bda3826e6a1987754b/rev-0/raw/s-4bf3cf944f88cc45a8e4480f23a88f705c0752e3.jpg" alt="Volkswagen"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/halkin-otomobili-1-milyon-tl-ye-ulasti-volkswagen-golf-kasim-2022-fiyat-listesi-1109427'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Halkın Otomobili 1 Milyon TL&#39;ye Ulaştı: Volkswagen Golf Kasım 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWXahSxhe9TC2lH9sRUecT2oDl1hJlG0N6x-z9yIuGmPGdcYfGbubKUDk52pQMYJy5_8mE7qVu" alt="Halkın Otomobili 1 Milyon TL&#39;ye Ulaştı: Volkswagen Golf Kasım 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Volkswagen Golf Kasım 2022 güncel fiyat listesi şu şekilde: Golf 1.0 TSI 110 PS Manuel Impression ₺641,500.00. Golf 1.0 eTSI 110 PS DSG Life ₺781,600.00. Golf&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}