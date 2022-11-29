import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Бразилия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Бразилия"/>
        <meta name="description" content="Trending News about Бразилия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Бразилия</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/5/2/5256fc7-gettyimages-1245183366--1-.jpg" alt="Бразилия"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/28/7378399/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День ЧМ-22: невероятные камбэки, Бразилия с Португалией ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzNiyvZfyjaVU4QzZw_TKVHKiQDr2HuxCNS_ixpaR4a3mpYEN9vYhIOZu5KGigvAXjZ8anhitZ" alt="День ЧМ-22: невероятные камбэки, Бразилия с Португалией ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В девятый день Чемпионата мира 2022 в Катаре Бразилия и Португалия досрочно вышли в следующую стадию благодаря победам над Швейцарией и Уругваем.</p></div>
            </div>
        </a>
        </Template></>;
}