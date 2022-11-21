import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Белгородская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Белгородская область"/>
        <meta name="description" content="Trending News about Белгородская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Белгородская область</h1>
            <Image width={800} height={500} src="" alt="Белгородская область"/>
            <h3>Recent News</h3>
            <a href='https://www.belpressa.ru/society/drugoe/47406.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пётр Толстой: «При всех трудностях Белгородская область ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSCCTBa7hexOgKp7P4t-xrN8mTZIubgR6oJdS5ZeL12fFKoH95CwiVLxzz0Izd6oZiVju2Lmtsh" alt="Пётр Толстой: «При всех трудностях Белгородская область ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча в формате разговора о важном прошла в музее-диораме «Курская битва. Белгородское направление» 18 ноября. «БелПресса» выбрала наиболее интересные&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}