import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ワールドカップ 決勝</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ワールドカップ 決勝"/>
        <meta name="description" content="Trending News about ワールドカップ 決勝" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ワールドカップ 決勝</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221202/K10013910911_2212021527_1202153314_01_02.jpg" alt="ワールドカップ 決勝"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221202/k10013910911000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカーワールドカップ 日本 記録ずくめで決勝トーナメントへ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSy40DUNt41KxSgKkrL_a0jJm2hUMMdPLKeXf67xiCAHWaB4tALKwZRUUBqc73FjqKahyhT7uU6" alt="サッカーワールドカップ 日本 記録ずくめで決勝トーナメントへ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会、日本は記録ずくめの決勝トーナメント進出となりました。</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOUE022W30S2A201C2000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>W杯決勝Tへ、現地組「延泊先探す」 自治体PV手配急ぐ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzL0SQsVMrRYoc922VTtJ90ljhQBhUXhH4Uf2fngSxX4lfo4pO1DGOpZDLyN_f0VqWnEpyDZpKcg" alt="W杯決勝Tへ、現地組「延泊先探す」 自治体PV手配急ぐ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーワールドカップ（W杯）カタール大会で日本代表が決勝トーナメント進出を決めた快挙を受け、旅行会社や自治体などが対応に追われている。現地の日本人ファンは&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}