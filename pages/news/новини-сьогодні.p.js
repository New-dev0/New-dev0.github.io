import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новини сьогодні</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новини сьогодні"/>
        <meta name="description" content="Trending News about Новини сьогодні" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новини сьогодні</h1>
            <Image width={800} height={500} src="https://i.lb.ua/006/12/63745f54ec518.jpeg" alt="Новини сьогодні"/>
            <h3>Recent News</h3>
            <a href='https://lb.ua/world/2022/11/16/536052_polshcha_govoritime_pro_raketniy_udar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польща говоритиме про ракетний удар на засіданні Радбезу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQD5KR3d4LO2ofhJCdAoq4A7-gW3HhNk1NDALXMMxocvaeGFShWRE81xDRZqp8wNcmuIpCz5gyR" alt="Польща говоритиме про ракетний удар на засіданні Радбезу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це повідомив посол Польщі в ООН Кшиштоф Щерський. “У середу, на післяобідньому засіданні Ради Безпеки ООН, я представлю польську позицію щодо поточної&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}