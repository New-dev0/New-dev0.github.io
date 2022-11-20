import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>中日ドラゴンズ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,中日ドラゴンズ"/>
        <meta name="description" content="Trending News about 中日ドラゴンズ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>中日ドラゴンズ</h1>
            <Image width={800} height={500} src="" alt="中日ドラゴンズ"/>
            <h3>Recent News</h3>
            <a href='https://dragons.jp/news/2022/cheerdra25th-event-graduate.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>中日ドラゴンズ オフィシャルウェブサイト - ドラゴンズニュース ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZiyCZWBc5PnPpTpF_p-DkXys-CijZh88zw84UK34a4qaJ1YqaU9F6NmIAbF1tTdI6Q96bb94l" alt="中日ドラゴンズ オフィシャルウェブサイト - ドラゴンズニュース ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>今シーズンをもちまして、チアドラゴンズから卒業するメンバーをご報告させていただきます。 なお、活動は2023年3月までの予定ですが、2022年12月4日(日)に行われます&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}