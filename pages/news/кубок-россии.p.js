import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кубок России</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кубок России"/>
        <meta name="description" content="Trending News about Кубок России" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кубок России</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1838869/large.jpg" alt="Кубок России"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/rus_cup/news/kubok-rossii-put-rpl-raspisanie-i-rezultaty-matchey-gruppovogo-turnira-22-noyabrya-2001483/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кубок России, Путь РПЛ: «Урал» обыграл ЦСКА, «Торпедо ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxdK46KOzvi0dCvAGaZxo0-mGNX55jgNCb3lJpwuhXi-ybm4s5Q4Xw1ZGiEpF59Zq4PC46Vtn4" alt="Кубок России, Путь РПЛ: «Урал» обыграл ЦСКА, «Торпедо ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Матчи группового турнира Кубка России, в котором принимают участие клубы РПЛ.</p></div>
            </div>
        </a>
        </Template></>;
}