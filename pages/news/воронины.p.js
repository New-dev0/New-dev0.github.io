import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Воронины</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Воронины"/>
        <meta name="description" content="Trending News about Воронины" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Воронины</h1>
            <Image width={800} height={500} src="https://s1.cdn.eg.ru/wp-content/uploads/2021/04/voroniny074047-1024x512.jpg" alt="Воронины"/>
            <h3>Recent News</h3>
            <a href='https://www.eg.ru/showbusiness/2762482-voroniny-vozvrashchayutsya-volkova-podelilas-fotografiyami/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Воронины возвращаются! Екатерина Волкова поделилась ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQY6pmDrrIgkiSp2vvsDu2N9ns7jJ7cXV5LNHNSeDj7aaXGwrjZ7gQtF4fNrrPySbllHfMXL-Y4" alt="Воронины возвращаются! Екатерина Волкова поделилась ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актриса опубликовала снимки, которые заставили учащенно биться сердца всех поклонников сериала. Ведь они давно просили снять продолжение.</p></div>
            </div>
        </a>
        </Template></>;
}