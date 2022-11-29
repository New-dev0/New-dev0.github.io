import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тимати</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тимати"/>
        <meta name="description" content="Trending News about Тимати" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тимати</h1>
            <Image width={800} height={500} src="https://img.dni.ru/binaries/social/513750.jpg" alt="Тимати"/>
            <h3>Recent News</h3>
            <a href='https://dni.ru/showbiz/2022/11/28/513750.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Обиделась на мужа»: почему Алекса запретила свекрови ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvkFXXSettm2RwcqtLHKI1Kcv8F1MciR2ULKc4IxDcXk0qBPd0y6oPYHDIoFTHeuH2lnqpEmln" alt="«Обиделась на мужа»: почему Алекса запретила свекрови ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Женщина не смогла справиться с эмоциями в конфликте с любимым и отыгралась на ребенке.</p></div>
            </div>
        </a>
        </Template></>;
}