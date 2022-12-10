import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Чемпионат мира-2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Чемпионат мира-2022"/>
        <meta name="description" content="Trending News about Чемпионат мира-2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Чемпионат мира-2022</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1845555/large.jpg" alt="Чемпионат мира-2022"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/reviews/chm-2022-pochemu-braziliya-ne-vyigraet-chempionat-mira-v-katare-mnenie-2009624/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пижоны лежат, а великие торжествуют. Почему Бразилия не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJknVrrUUqSVSFxUnbans7-tcQMubyZlbU6uZDEViawaFm0Vf606ghYDy_2nMnJkqSZ1XfvhWu" alt="Пижоны лежат, а великие торжествуют. Почему Бразилия не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В заголовок этого текста вынесена ставшая легендарной фраза Владимира Маслаченко, сказанная им после финального свистка в том самом матче «Манчестер&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1738856_Samaja_gorachaja_sbornaja_chempionata_mira_Eti_krasotki_sveli_s_uma_zvozd_futbola'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Самая горячая сборная чемпионата мира! Эти красотки свели с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEQxFeGIXn2ERyh4DfT2QOQY5KcicXzLu3k3si0a9aY1fUN7EJz9aKQA1j0-dTFlX1S_59inbW" alt="Самая горячая сборная чемпионата мира! Эти красотки свели с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На жён и подруг участников ЧМ можно смотреть вечно. И любоваться, любоваться…</p></div>
            </div>
        </a>
        </Template></>;
}