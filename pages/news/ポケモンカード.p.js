import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ポケモンカード</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ポケモンカード"/>
        <meta name="description" content="Trending News about ポケモンカード" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ポケモンカード</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221202-00000012-isd-000-1-view.jpg?exp=10800" alt="ポケモンカード"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/02ffc21c40cf0032c419475fbf60dc74e27ddf61'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『ポケカ』の「イーブイヒーローズ」や『ワンピースカード』を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS91zzvsOvaajjryvgxyIw9A1D5ENpR132vQ1uY3nbwBlf9hf_9eHNSym1q9-Dbo6ZNL3L5Ltjp" alt="『ポケカ』の「イーブイヒーローズ」や『ワンピースカード』を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>愛知県名古屋市にある「買取王国 植田店」店内にて、12月9日から「ふるいち 植田店」がグランドオープン。そのオープン記念として、『ポケモンカードゲーム』など人気&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}