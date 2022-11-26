import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wednesday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wednesday"/>
        <meta name="description" content="Trending News about Wednesday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wednesday</h1>
            <Image width={800} height={500} src="" alt="Wednesday"/>
            <h3>Recent News</h3>
            <a href='https://exler.ru/blog/serial-wednesday-tima-bertona.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сериал &quot;Wednesday&quot; Тима Бертона</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRc6XlLstDKIoo7CROCd5z3RC15uuBTp1-WdgtKvcXvk7D2zTrXMkELEFGG7FlRvPTFn1wNRaES" alt="Сериал &quot;Wednesday&quot; Тима Бертона" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кстати, Мара из 1899 это же Вдова из &quot;В пустыне смерти&quot;. wortkarg. O1eg. 25.11.22 11:31.</p></div>
            </div>
        </a>
        </Template></>;
}