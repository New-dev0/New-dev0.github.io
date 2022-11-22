import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ジャパンカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ジャパンカップ"/>
        <meta name="description" content="Trending News about ジャパンカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ジャパンカップ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221121-00020357-tspkeiba-000-1-view.jpg?exp=10800" alt="ジャパンカップ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/f56bbadb2da3511afa458ab646e6ae5ee218d31f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ジャパンカップ・厩舎直送】まだ見限れない！前走の敗因は明確 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPwwnYyz6nvhbPrCefIGXU2_bAVmxqGoxyRDjcy_oSdKVG_41y0ju8lnOklh7q4klP_WFeDKz6" alt="【ジャパンカップ・厩舎直送】まだ見限れない！前走の敗因は明確 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＧⅠジャパンカップ＝２０２２年１１月２７日（日曜）３歳上、東京競馬場、芝２４００メートル］ 前走の敗戦だけでは見限れない。テーオーロイヤル（牡４・岡田）は１&nbsp;...</p></div>
            </div>
        </a><a href='https://tospo-keiba.jp/anohi/23558'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【２０１７年・ジャパンカップ】〝乗り替わりドミノ〟からの戴冠 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgYCmxccoZupcN_03NlW2tMU2JFhdhaQiV1ea0mdtiJeqE5kenuBGdYqiULPYLy8BHzNPWFsXG" alt="【２０１７年・ジャパンカップ】〝乗り替わりドミノ〟からの戴冠 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【２０１７年・ジャパンカップ】〝乗り替わりドミノ〟からの戴冠 何から何までイメージ通りだったボウマン＆シュヴァルグランの一撃.</p></div>
            </div>
        </a>
        </Template></>;
}