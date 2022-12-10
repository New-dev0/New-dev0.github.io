import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Максим</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Максим"/>
        <meta name="description" content="Trending News about Максим" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Максим</h1>
            <Image width={800} height={500} src="https://53news.ru/wp-content/uploads/2022/12/maksim-3-e1670612862571.jpg" alt="Максим"/>
            <h3>Recent News</h3>
            <a href='https://53news.ru/novosti/ya-budu-zhit-pevicza-maksim-vystupila-s-konczertom-v-velikom-novgorode.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Я буду жить!» Певица МакSим выступила с концертом в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQOkyqPaYp8EQBDg6Hx5cEGVyA6P_cUYBoIw4H4KX5FWX-jD2B5sfhHIRdqKt-_xTWsKcaMTSy" alt="«Я буду жить!» Певица МакSим выступила с концертом в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Великом Новгороде в культурном центре «Акрон» состоялся концерт певицы МакSим в рамках тура «Я буду жить!»</p></div>
            </div>
        </a>
        </Template></>;
}