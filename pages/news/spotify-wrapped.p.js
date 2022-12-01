import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spotify Wrapped</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spotify Wrapped"/>
        <meta name="description" content="Trending News about Spotify Wrapped" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spotify Wrapped</h1>
            <Image width={800} height={500} src="https://liroom.com.ua/wp-content/uploads/2022/11/обкладинки-сайт-3.png" alt="Spotify Wrapped"/>
            <h3>Recent News</h3>
            <a href='https://liroom.com.ua/music/spotify-wrapped-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spotify запустив Wrapped 2022 – LiRoom</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXIm4_7ravkDAe18Jkrewr2cNuwdYLZBtTPmtzcHbA24d7vJnmzGqHLbbTS198iW_PlLS_HzRI" alt="Spotify запустив Wrapped 2022 – LiRoom" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Стримінговий сервіс Spotify запустив функцію Wrapped 2022, що дозволяє переглянути особисті підсумки року для користувачів. Що таке Wrapped? Spotify.</p></div>
            </div>
        </a>
        </Template></>;
}