import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>賃貸不動産経営管理士</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,賃貸不動産経営管理士"/>
        <meta name="description" content="Trending News about 賃貸不動産経営管理士" /></Head><Template>
            <h1 style={{fontSize: "30"}}>賃貸不動産経営管理士</h1>
            <Image width={800} height={500} src="https://prtimes.jp/i/53143/98/resize/d53143-98-9d2c5678491362702452-0.jpg" alt="賃貸不動産経営管理士"/>
            <h3>Recent News</h3>
            <a href='https://shinjuku.keizai.biz/release/159864/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022(令和4)年度【賃貸不動産経営管理士 試験】無料「即日WEB ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9oH5-WISoyCfGwdztyO1ni8U5qwi-6xkHQov-yrjECxIR6xSXwPLj1XNlipHQRmuxxATWCoHO" alt="2022(令和4)年度【賃貸不動産経営管理士 試験】無料「即日WEB ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新宿経済新聞は、広域新宿圏のビジネス＆カルチャーニュースをお届けするニュースサイトです。イベントや展覧会・ライブなどのカルチャー情報はもちろん、ニュー&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}