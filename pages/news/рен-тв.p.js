import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>РЕН ТВ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,РЕН ТВ"/>
        <meta name="description" content="Trending News about РЕН ТВ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>РЕН ТВ</h1>
            <Image width={800} height={500} src="" alt="РЕН ТВ"/>
            <h3>Recent News</h3>
            <a href='https://news.ru/moskva/ren-tv-v-moskve-proizoshlo-dtp-s-uchastiem-deputata-mosobldumy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>РЕН ТВ: в Москве произошло ДТП с участием депутата ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDSeKbAmWLuCibgXXtGKsQbtRkmMviKZN0XDpgOJS0z3UgsBzRwYe5U1jwjzF9z33WleLBWvJ4" alt="РЕН ТВ: в Москве произошло ДТП с участием депутата ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ДТП с участием депутат Мособлдумы произошло в центре Москвы. Авария произошла на пересечении улицы Грузинский вал и Большого Кондратьевского переулка,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}