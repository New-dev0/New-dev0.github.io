import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Зеленский Крым</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Зеленский Крым"/>
        <meta name="description" content="Trending News about Зеленский Крым" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Зеленский Крым</h1>
            <Image width={800} height={500} src="https://obj.mosregtoday.ru/upload/soc/166938704333212560120.png" alt="Зеленский Крым"/>
            <h3>Recent News</h3>
            <a href='https://mosregtoday.ru/soc/stalo-izvestno-risknet-li-zelenskij-napast-na-krym/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно, рискнет ли Зеленский напасть на Крым</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSCDr-ph3bAimLQhCxbxSybGt6hOYXcG_DEE9tmBN5CswxXj45uRSbghv4hUQJfQq73cV6ihrJk" alt="Стало известно, рискнет ли Зеленский напасть на Крым" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Экстрасенс рассказала, рискнет ли Украина напасть на Киев. По словам ясновидящей, Владимир Зеленский, конечно, очень хочет забрать Крым и даже может&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}