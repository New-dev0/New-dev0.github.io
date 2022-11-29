import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ту-95</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ту-95"/>
        <meta name="description" content="Trending News about Ту-95" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ту-95</h1>
            <Image width={800} height={500} src="https://dailylviv.com/assets/cache/news/580x378/Tupolev_Tu-95_over_Moscow_Kustov_(cropped).jpg" alt="Ту-95"/>
            <h3>Recent News</h3>
            <a href='https://dailylviv.com/news/sytuatsiyi-i-pryhody/zlit-tu-95-z-viiskovoho-aerodromu-v-rosiyi-105271'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зліт кількох Ту-95 з військового аеродрому в Росії</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNpELa-FLo8f67EC-twb8cO0McbKwwbaU61MHY76xM_fMKp4mJl5el0GzUFXxKNoEaYotm5cyi" alt="Зліт кількох Ту-95 з військового аеродрому в Росії" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>09:50 28 листопада 2022 р. ... Зліт кількох бомбардувальників Ту-95 МС з військового аеродрому &quot;Енгельс-2&quot;. Про це повідомляють телеграмканали, пише Dailylviv.com&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}