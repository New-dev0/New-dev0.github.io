import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Запорожская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Запорожская область"/>
        <meta name="description" content="Trending News about Запорожская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Запорожская область</h1>
            <Image width={800} height={500} src="https://s.061.ua/img/section/newsIcon/is/2/mihajlovskij-rajonnyj-sud-zaporozhskoj-oblasti6267c4e40378d-1_6378fe7660a3e.jpg" alt="Запорожская область"/>
            <h3>Recent News</h3>
            <a href='https://www.061.ua/ru/news/3499537/v-zaporozskoj-oblasti-okkupanty-prinuditelno-vyvozat-proukrainskih-zitelej-odnoj-iz-gromad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Запорожской области оккупанты принудительно вывозят ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKoGwy9nXcb6ryjPzZm8VNb0k8GR2OlpC4S_MCOxjVinrHOf9F5OitBhaPPSScuFTAHyoWX_Qu" alt="В Запорожской области оккупанты принудительно вывозят ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В пгт Михайловка (Запорожская область), которое временно контролируют россияне, оккупанты избирательно «эвакуируют» население.</p></div>
            </div>
        </a>
        </Template></>;
}