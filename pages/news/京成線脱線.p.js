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
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-08591379-nnn-000-1-thumb.jpg?exp=10800" alt="京成線脱線"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/b5ff5c41021f505583ad90cc4f0ce4ed9b23b41b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成線“脱線”で一時運転見合わせ 運転手「本来と違う番線に進入し ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0K9EMDx_6-xx_5pqM3mMn0Exx-cdvdtP-QPt7oLWEimyuzB7I_tE_MlQJ3IfB8iprtYEQKxS1" alt="京成線“脱線”で一時運転見合わせ 運転手「本来と違う番線に進入し ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17日午前、東京の京成線・京成高砂駅構内で回送電車が脱線し、一部区間の運転見合わせで約10時間半にわたり影響が続きました。事故原因について運転士は「本来、向かう&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/national/20221117-OYT1T50140/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成線が運転再開…京成高砂駅の脱線事故で一時見合わせ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKJJFY_bA8AQjqW8c4TwZQN2pnQFTTEKJEx2sHuxmQwgy1rP9qvkgWd9EiskK7J7ujQGonRj9z" alt="京成線が運転再開…京成高砂駅の脱線事故で一時見合わせ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>脱線の影響で、京成線の千住大橋―市川真間間と、成田スカイアクセス線の京成高砂―新鎌ヶ谷間で運転を見合わせていたが、午後８時４９分頃に運転を再開した。</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_society/articles/000276250.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京成線脱線】運転士“社内ルール”守らず…10時間超の運転見合わせに</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuhVSplNpWW7ternET3apx2wkBV0Yaj-WbN62OwrC1_Oi1DVkQNATi3zRp3ls1whxL_e8eKh5H" alt="【京成線脱線】運転士“社内ルール”守らず…10時間超の運転見合わせに" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>東京・葛飾区で京成線の回送電車が脱線した事故で当時、運転士が社内ルールを守っていなかったことが分かりました。 京成電鉄によりますと、社内のルールでは電車を逆&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCK55P8QCKUTIL025.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成線の回送列車が脱線 原因は車庫入れ時のミスで切り替え装置損傷</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkWACkvepGTROFWM-0Mwc-OqsmksUaj9Q1N8CaSSMD3Wqg4X7YJp7cdUutnmAlkef2JHJ7hASb" alt="京成線の回送列車が脱線 原因は車庫入れ時のミスで切り替え装置損傷" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17日午前10時20分ごろ、東京都葛飾区の京成線京成高砂駅構内で、車庫に向かう途中の回送列車（8両編成）が脱線した。乗客はおらず、けが人はいなかった。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/chiba/20221117/1080019402.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成電鉄脱線 １０時間余運転見合わせ 空港アクセスにも影響｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPVwVJEnr_3tLXE2nDjT2RwepaJ-qrkY3IK2adz6NY8s_mOj7yH9VB8PliiBPe-bidwTEk9YFj" alt="京成電鉄脱線 １０時間余運転見合わせ 空港アクセスにも影響｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>１７日午前、東京・葛飾区にある京成電鉄の京成高砂駅の構内で回送列車の一部が脱線しました。 けが人はいませんでしたが、一部の区間で１０時間余…</p></div>
            </div>
        </a><a href='https://www.fnn.jp/articles/-/446582'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>京成線脱線車両を移動 午後10時めど復旧へ｜FNNプライムオンライン</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-SABoINDUOkdEi_9Gg-lOb3hie0rV1mAK1ESNFTl6nj4GVEDoAbXs5dXZeO3_cIehWOmdohSP" alt="京成線脱線車両を移動 午後10時めど復旧へ｜FNNプライムオンライン" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>京成電鉄で起きた脱線事故で、午後6時過ぎ、脱線した車両が移動され、線路の確認作業などが行われている。京成電鉄は、復旧の見通しを当初の発表から変更し、「午後10&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}