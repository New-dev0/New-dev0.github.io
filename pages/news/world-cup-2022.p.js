import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World cup 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World cup 2022"/>
        <meta name="description" content="Trending News about World cup 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World cup 2022</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221121/K10013898781_2211211900_1121190121_01_02.jpg" alt="World cup 2022"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221121/k10013898781000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 人権や環境問題への懸念も</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpGxm_bzXbbV68SjuIEXnN6nCl-mZKLjjvyDUsOo8dbfz_79VK4HRnU4dbZxFOLXLNDOz7L6BU" alt="ワールドカップ 人権や環境問題への懸念も" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】中東で初めて開催されているサッカーのワールドカップ。開催国のカタールでは、世界最大規模のスポーツイベントに大きな盛り上が…</p></div>
            </div>
        </a>
        </Template></>;
}