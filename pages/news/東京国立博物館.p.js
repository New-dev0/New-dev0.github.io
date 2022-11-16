import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>東京国立博物館</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,東京国立博物館"/>
        <meta name="description" content="Trending News about 東京国立博物館" /></Head><Template>
            <h1 style={{fontSize: "30"}}>東京国立博物館</h1>
            <Image width={800} height={500} src="https://artexhibition.jp/wp-content/uploads/2022/11/DSC08157-560x385.jpg" alt="東京国立博物館"/>
            <h3>Recent News</h3>
            <a href='https://artexhibition.jp/topics/news/20221111-AEJ1084893/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【開幕】「150年後の国宝展」東京国立博物館（表慶館）で来年1月 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQm4BMlN8-chEd19LmRWse5IpAM4m-z-1eZMuo_J8oGZkvJHkbyLJzdPE-iC1O1v7-cV5asm31S" alt="【開幕】「150年後の国宝展」東京国立博物館（表慶館）で来年1月 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>企業部門では、私たちのくらしを形作る衣食住の文化、エンターテイメント、技術などを紹介します。ゴジラ、ガンダム、プリキュア、ハローキティ、たまごっち、ベネッセ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}