import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Символы России</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Символы России"/>
        <meta name="description" content="Trending News about Символы России" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Символы России</h1>
            <Image width={800} height={500} src="https://tegrk.ru/wp-content/uploads/апапар.jpg" alt="Символы России"/>
            <h3>Recent News</h3>
            <a href='https://tegrk.ru/archives/148135'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Калмыкии выбрали победителей олимпиады «Символы России»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJjqhmRdFsLz1xfHvyrW56z_8vt8iy7CYHJcgvjAqUHII1RSf8jmKP1lEBTd0NfmmRnIEVP1VO" alt="В Калмыкии выбрали победителей олимпиады «Символы России»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bynews ... В Калмыкии 857 школьников участвовали в олимпиаде «Символы России. Петр I». Ее провели на базе библиотек и образовательных организаций республики. На&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ivanovonews.ru/news/1308385/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почти 300 школьников стали участниками регионального этапа ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Почти 300 школьников стали участниками регионального этапа ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лучшие результаты показали пятиклассница и девятиклассница из Иванова. IN - всегда рядом в соцсетях: 27.11.2022, 13:29. 1749 0. Ivanovonews на.</p></div>
            </div>
        </a>
        </Template></>;
}