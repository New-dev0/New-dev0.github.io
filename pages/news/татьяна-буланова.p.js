import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Татьяна буланова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Татьяна буланова"/>
        <meta name="description" content="Trending News about Татьяна буланова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Татьяна буланова</h1>
            <Image width={800} height={500} src="https://kliker.com.ua/wp-content/uploads/2022/11/2-7.jpg" alt="Татьяна буланова"/>
            <h3>Recent News</h3>
            <a href='https://kliker.com.ua/tatyana-bulanova-umerla-pravda-li/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«татьяна буланова умерла» — правда ли | KLIKER</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRk2RK3OBET6F2lwPio5Wb-Zam9E9O4K37DwEnIbqdIrZQYmeesnXDJQHmXwfNkncpyCkte1SVT" alt="«татьяна буланова умерла» — правда ли | KLIKER" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября 2022 года запрос «татьяна буланова умерла» подскочил в поисковых трендах: люди ищут, правда ли умерла российская певица Татьяна Буланова.</p></div>
            </div>
        </a>
        </Template></>;
}