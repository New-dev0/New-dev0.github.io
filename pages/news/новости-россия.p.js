import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новости Россия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новости Россия"/>
        <meta name="description" content="Trending News about Новости Россия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новости Россия</h1>
            <Image width={800} height={500} src="https://i.ytimg.com/vi/cUW1fqWWdHA/maxresdefault.jpg" alt="Новости Россия"/>
            <h3>Recent News</h3>
            <a href='https://www.youtube.com/watch?v=cUW1fqWWdHA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>❗️ Новости | Россия заплатит репарации? | Новые обстрелы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSR3tmMXXdFij_K98QKCsyGnIXHi-7uut36x6GFaF3e1gxyPKj7xwHOmXGwI-66xTqauiS2ixD" alt="❗️ Новости | Россия заплатит репарации? | Новые обстрелы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По всей Украине снова звучала воздушная тревога, в Киеве ракеты вновь летели в жилые дома. Всё больше жён и матерей мобилизованных протестуют, с россиян по&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}