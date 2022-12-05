import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Robbie Williams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Robbie Williams"/>
        <meta name="description" content="Trending News about Robbie Williams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Robbie Williams</h1>
            <Image width={800} height={500} src="https://content1.promiflash.de/article-images/video_1080/simon-cowell-und-robbie-williams-collage-2.jpg" alt="Robbie Williams"/>
            <h3>Recent News</h3>
            <a href='https://www.promiflash.de/news/2022/12/04/bekommt-simon-cowell-konkurrenz-durch-robbie-williams-show.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bekommt Simon Cowell Konkurrenz durch Robbie Williams&#39; Show?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvpOHm_VgAytmdP6dqhYwolBU6uo2EkUJ2Sew4kuzJviy-mS0QQmcHrz1Xtga-J_1YOpGqBGG1" alt="Bekommt Simon Cowell Konkurrenz durch Robbie Williams&#39; Show?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bekommen die Briten bald eine neue TV-Talentshow? Ende der 80er ließ Robbie Williams (48) viele Jahre lang mit der Boyband Take That das Herz vieler Frauen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}