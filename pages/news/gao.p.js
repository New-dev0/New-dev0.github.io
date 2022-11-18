import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>GAO</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,GAO"/>
        <meta name="description" content="Trending News about GAO" /></Head><Template>
            <h1 style={{fontSize: "30"}}>GAO</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221117-00000335-spnannex-000-5-view.jpg?exp=10800" alt="GAO"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/d444daa55f589dff3337cd4c555c02bfd2336446'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GAO ミステリアスさ＆歌唱力健在でSNSトレンド上位 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStGEo5Tzp03-33QaKpqd30CuTqPNGLm_8eXUuNSE6vp4P7e08PrwxNuQzBi-9xCD3hIdBbz2aC" alt="GAO ミステリアスさ＆歌唱力健在でSNSトレンド上位 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ヒット曲「サヨナラ」で知られる歌手GAOが、17日放送のTBS系「歌のゴールデンヒット－歴代歌姫の一番売れた歌ランキングBest100－」（後8・00）に出演し、同曲を生披露&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}