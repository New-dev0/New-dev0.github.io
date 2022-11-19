import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>京成線脱線</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,京成線脱線"/>
        <meta name="description" content="Trending News about 京成線脱線" /></Head><Template>
            <h1 style={{fontSize: "30"}}>京成線脱線</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-00010000-abemav-000-2-view.jpg?exp=10800" alt="京成線脱線"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/84fa55888f7949e61a66188d5afb1438e43f8129'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成線脱線事故、運転士が“社内ルール”守らず 京成本線の一部で10 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIHoz8QBVxO8jDj1g4m5xzfSw5-ktSg1ru2tBGzwiES068opJqq7-aWQ6dmQ7_kvXZe4irbhdr" alt="京成線脱線事故、運転士が“社内ルール”守らず 京成本線の一部で10 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>東京・葛飾区で京成線の回送電車が脱線した事故で、当時、運転士が社内ルールを守っていなかったことがわかった。</p></div>
            </div>
        </a><a href='https://response.jp/article/2022/11/18/364262.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成高砂駅の脱線事故で京成が陳謝---構内運転士の取扱いミスで ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSv1ldCrBtsyXN_IKE3J-kzZclxFB9Hhqom_boac-C4u-wiLhzO2nV4WmA7J7JPOAAIoty3al9Y" alt="京成高砂駅の脱線事故で京成が陳謝---構内運転士の取扱いミスで ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>京成電鉄（京成）は11月17日に発生した京成高砂駅（東京都葛飾区）構内での脱線事故について陳謝した。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/chiba/20221117/1080019402.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成電鉄脱線 １０時間余運転見合わせ 空港アクセスにも影響｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPVwVJEnr_3tLXE2nDjT2RwepaJ-qrkY3IK2adz6NY8s_mOj7yH9VB8PliiBPe-bidwTEk9YFj" alt="京成電鉄脱線 １０時間余運転見合わせ 空港アクセスにも影響｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>１７日午前、東京・葛飾区にある京成電鉄の京成高砂駅の構内で回送列車の一部が脱線しました。 けが人はいませんでしたが、一部の区間で１０時間余…</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_society/articles/000276265.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成電鉄の脱線事故 原因は…運転士“ルール違反”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQc3-mi9jrJMuukqpltOj6thKRkuq-e0D3zSqanIjP--lLDUrDJ_mdsFmEiihAqnwt830SmRBOc" alt="京成電鉄の脱線事故 原因は…運転士“ルール違反”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17日午前10時すぎ、東京・葛飾区の京成高砂駅近くで、回送電車が脱線しました。 この影響で、京成本線・成田スカイアクセス線の一部区間が、およそ11時間にわたって&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/national/20221117-OYT1T50140/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成線が運転再開…京成高砂駅の脱線事故で一時見合わせ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKJJFY_bA8AQjqW8c4TwZQN2pnQFTTEKJEx2sHuxmQwgy1rP9qvkgWd9EiskK7J7ujQGonRj9z" alt="京成線が運転再開…京成高砂駅の脱線事故で一時見合わせ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>脱線の影響で、京成線の千住大橋―市川真間間と、成田スカイアクセス線の京成高砂―新鎌ヶ谷間で運転を見合わせていたが、午後８時４９分頃に運転を再開した。</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCK55P8QCKUTIL025.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成線の回送列車が脱線 原因は車庫入れ時のミスで切り替え装置損傷</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNeavC2RJbI8IVct8Spj_gd6vdqP107heE9Ah1QVsRvKeEtbsarySDANR26Hxyzrtp3SxtI-xe" alt="京成線の回送列車が脱線 原因は車庫入れ時のミスで切り替え装置損傷" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17日午前10時20分ごろ、東京都葛飾区の京成線京成高砂駅構内で、車庫に向かう途中の回送列車（8両編成）が脱線した。乗客はおらず、けが人はいなかった。</p></div>
            </div>
        </a>
        </Template></>;
}