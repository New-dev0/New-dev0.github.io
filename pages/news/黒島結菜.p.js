import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>黒島結菜</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,黒島結菜"/>
        <meta name="description" content="Trending News about 黒島結菜" /></Head><Template>
            <h1 style={{fontSize: "30"}}>黒島結菜</h1>
            <Image width={800} height={500} src="" alt="黒島結菜"/>
            <h3>Recent News</h3>
            <a href='https://www.wwdjapan.com/s/1458565'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒島結菜、「マイケル・コース」と歩むネクストステージ（PR ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-hIUwkDJZuaNDAMqcz-TIn3YEpG02AZEIQbAZSZtFDf9c4o7l41HK79KQ4dKtxyWSXu9Ym3cT" alt="黒島結菜、「マイケル・コース」と歩むネクストステージ（PR ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ニューヨークの洗練された大都会のエネルギーをテーマにした、2022年秋冬の「マイケル・コース（MICHAEL KORS）」。ホリデーシーズンを彩る華やかでモダンなバッグは、&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}