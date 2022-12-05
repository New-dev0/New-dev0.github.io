import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Рен-ТВ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Рен-ТВ"/>
        <meta name="description" content="Trending News about Рен-ТВ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Рен-ТВ</h1>
            <Image width={800} height={500} src="https://kprf.ru/m/900/600/t/img/2022/12/grafik-1.jpg" alt="Рен-ТВ"/>
            <h3>Recent News</h3>
            <a href='https://kprf.ru/politindx/214998.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хронометраж партийного телеэфира («Первый», «Россия», НТВ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYUAs4rMmoLRjUaRsPiOnsWSJCayHKlw5e7sfATeCZa_OcyRmvMWx98O3qaoAz-cm2zpfZojNa" alt="Хронометраж партийного телеэфира («Первый», «Россия», НТВ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Динамика новостного партийного эфира, 2022 г. Таким образом, в период с 27 ноября по 3 декабря по сравнению с прошлой неделей резко упал объём политического&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}