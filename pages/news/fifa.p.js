import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA"/>
        <meta name="description" content="Trending News about FIFA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221124/K10013901891_2211241327_1124132849_01_02.jpg" alt="FIFA"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221124/k10013901891000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA「汚れ一つない」 ワールドカップ日本代表の控え室を称賛</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfPlF8w1JAgX-kfdgzSurzctfTpgebz6FF5II0lxZcF6P1isGxTKXSYqT4boOEhur9Ab7XwOcC" alt="FIFA「汚れ一つない」 ワールドカップ日本代表の控え室を称賛" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】FIFA＝国際サッカー連盟は公式ツイッターで、ドイツ戦で勝利した日本代表のロッカールームの写真を紹介し、「汚れ一つない」…</p></div>
            </div>
        </a>
        </Template></>;
}