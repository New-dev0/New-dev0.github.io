import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>С Днем матери</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,С Днем матери"/>
        <meta name="description" content="Trending News about С Днем матери" /></Head><Template>
            <h1 style={{fontSize: "30"}}>С Днем матери</h1>
            <Image width={800} height={500} src="https://online47.ru/media/photo/article/__160078.jpg" alt="С Днем матери"/>
            <h3>Recent News</h3>
            <a href='https://online47.ru/2022/11/27/aleksandr-drozdenko-pozdravil-zhitelnits-lenoblasti-s-dnem-materi-169364'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Александр Дрозденко поздравил жительниц Ленобласти с Днем ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7l8X4J7EE-2M5nFKWh1QYIEpUgpMLbICzIyQA1TfiXpR5hXWxCcin24U47Ur9bJh_ltZiMH2L" alt="Александр Дрозденко поздравил жительниц Ленобласти с Днем ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По словам главы 47-го региона, сегодняшний день дарит прекрасную возможность выразить женщинам бесконечную благодарность за чуткие сердца и за любовь. &quot;С первых&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}