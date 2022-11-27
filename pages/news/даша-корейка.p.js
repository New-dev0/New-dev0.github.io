import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Даша Корейка</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Даша Корейка"/>
        <meta name="description" content="Trending News about Даша Корейка" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Даша Корейка</h1>
            <Image width={800} height={500} src="https://cq.ru/storage/uploads/posts/1520224/1.jpg" alt="Даша Корейка"/>
            <h3>Recent News</h3>
            <a href='https://cq.ru/news/streaming/dasha-koreika-zaiavila-chto-pokonchit-s-soboi-a-potom-vypustila-reklamu-naushnikov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даша Корейка заявила, что покончит с собой, а потом выпустила ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0ftqi9hfwXYq0vfalb7f6t0sPTfT9mohr6uxgnPL93bvc2h5w9Iw69x7W7vnLRnE-wI1GQiu_" alt="Даша Корейка заявила, что покончит с собой, а потом выпустила ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вчера в СМИ появилась информация, что блогерша-трансгендер Даша Корейка могла покончить с собой. 25 ноября в своем Telegram-канале Даша выложила видео,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}