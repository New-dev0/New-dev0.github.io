import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Дроздов</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Дроздов"/>
        <meta name="description" content="Trending News about Дроздов" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Дроздов</h1>
            <Image width={800} height={500} src="https://www.vedomosti.ru/share.png" alt="Дроздов"/>
            <h3>Recent News</h3>
            <a href='https://www.vedomosti.ru/press_releases/2022/11/22/anton-drozdov-psb-aktivno-razvivaet-zelenuyu-povestku'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Антон Дроздов: ПСБ активно развивает «зеленую» повестку</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQxYBV4LTnqV6jIJwR4Dj8X9pl2bpV0iEKeN54aPC_UJrZU8Rqg1wa6XMItvDwKYZnl9fxw16G" alt="Антон Дроздов: ПСБ активно развивает «зеленую» повестку" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Финансовые институты во всем мире являются драйверами устойчивого развития, и для ПСБ это направление деятельности остается в числе приоритетных.</p></div>
            </div>
        </a>
        </Template></>;
}