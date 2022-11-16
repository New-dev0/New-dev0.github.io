import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Даниил Медведев</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Даниил Медведев"/>
        <meta name="description" content="Trending News about Даниил Медведев" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Даниил Медведев</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/9/a5/4891797.jpg" alt="Даниил Медведев"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/tennis/article-4891797-daniil-medvedev-andrej-rublyov-karen-hachanov-na-zherebyovke-molodyozhnogo-itogovogo-turnira-atp-2017-razgorelsya-skandal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Это кошмар». Российские теннисисты попали в крайне ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTi4lra_EnKW9pnER5uip5r-Op7gH7ZZMB-b3bag00j3gCV2FsTzJa0mE6P1bspXocHv0oVXlG" alt="«Это кошмар». Российские теннисисты попали в крайне ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>С 2017 года предварительной частью Итогового чемпионата ATP является турнир Next Gen ATP Finals. Перед стартом главного турнира с участием лучших теннисистов&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}