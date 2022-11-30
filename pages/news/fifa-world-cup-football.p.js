import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup football"/>
        <meta name="description" content="Trending News about FIFA World Cup football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup football</h1>
            <Image width={800} height={500} src="https://digitalhub.fifa.com/transform/2a922753-3b4d-4fa4-adb0-f053a81c32bf/Poland-v-Saudi-Arabia-Group-C-FIFA-World-Cup-Qatar-2022" alt="FIFA World Cup football"/>
            <h3>Recent News</h3>
            <a href='https://www.fifa.com/news/football-and-music-intertwine-at-fifa-world-cup-2022-tm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football and music intertwine at FIFA World Cup 2022™</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQr2jLhVEbMMa4e_g2_SkZz8290dr1h5cljy_F_rqAwmbtq9FMMYl5wPSWkcBS6OGkuFyDRN9Qw" alt="Football and music intertwine at FIFA World Cup 2022™" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lebanese singer Myriam Fares and Colombian star Maluma opened the Live Stage with headline solo concerts, with Nora Fatehi and Calvin Harris also set to perform&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}