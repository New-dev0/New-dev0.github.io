import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Иран</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Иран"/>
        <meta name="description" content="Trending News about Иран" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Иран</h1>
            <Image width={800} height={500} src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/13-01-2022_UNSPLASH_Iran.jpg/image770x420cropped.jpg" alt="Иран"/>
            <h3>Recent News</h3>
            <a href='https://news.un.org/ru/story/2022/11/1435072'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Главные новости дня | вторник: Украина, Иран, ЮНЕП, ЮНФПА ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPQ8I3yXsbNCAPbXEh5i2ThvpwYek0DwVHjITehyWuo7s_1GrqeykHe6la3oEwu3BWGxKUkZNr" alt="Главные новости дня | вторник: Украина, Иран, ЮНЕП, ЮНФПА ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Коротко о главных событиях дня: Визит ВОЗ в Украину, протесты в Иране, «Чемпионы Земли» ЮНЕП, новый доклад ЮНФПА, Глобальный форум Альянса цивилизаций ООН.</p></div>
            </div>
        </a>
        </Template></>;
}