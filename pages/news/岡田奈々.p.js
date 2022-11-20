import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>岡田奈々</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,岡田奈々"/>
        <meta name="description" content="Trending News about 岡田奈々" /></Head><Template>
            <h1 style={{fontSize: "30"}}>岡田奈々</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221119-00058727-bunshun-000-3-view.jpg?exp=10800" alt="岡田奈々"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/b5d82c0779aa5b8beef1f143a44b4acef306ff7e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>《腕組みスクープ撮》「新居マンションの内見に父親同伴でカレと ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkD_EwfZno81KXYHEyvgLpWz2O0d9R-xuOxYJ_jt3z2RV1J-onh_1P2h73SwKv215sl11Ifh1I" alt="《腕組みスクープ撮》「新居マンションの内見に父親同伴でカレと ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月6日23時半頃、AKB48の岡田奈々（25）が誕生日を迎える瞬間を祝うため、同グループのメンバー村山彩希（ゆいり・25）が友人とともに岡田の住むマンションを訪問し&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/19ed59910123329eafeb9779657fb28246e13939'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AKB48・岡田奈々が王子様の仮装で登場！世代を超えたセット ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyCA2-yKRaICltzEOVI-EHk9--kUespiJNopztiL9GE2cz7PNp-h4aMMsyfhT3I1tZkRDdaPyp" alt="AKB48・岡田奈々が王子様の仮装で登場！世代を超えたセット ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>10月24日に立川ステージガーデンにて「どっぼーん！2周年記念ライブ！」が開催され、岡田奈々、橋本陽菜、石綿星南、村山彩希、倉野尾成美、小栗有以、大竹ひとみ、&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}