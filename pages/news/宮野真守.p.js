import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>宮野真守</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,宮野真守"/>
        <meta name="description" content="Trending News about 宮野真守" /></Head><Template>
            <h1 style={{fontSize: "30"}}>宮野真守</h1>
            <Image width={800} height={500} src="https://prtimes.jp/i/4747/1951/ogp/d4747-1951-f59e33dc6cde53d9387f-0.jpg" alt="宮野真守"/>
            <h3>Recent News</h3>
            <a href='https://prtimes.jp/main/html/rd/p/000001951.000004747.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宮野真守の等身大タペストリーやアクリルスタンドなどが当たる ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmTCS5QsvtZkdg6doFzslpkLG6x4RQFqZlY2R27KnqfjqPRa3zZKJ80zuBqzo9iSV7ZHp6d0Jq" alt="宮野真守の等身大タペストリーやアクリルスタンドなどが当たる ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>株式会社エクシングのプレスリリース（2022年12月9日 12時00分）宮野真守の等身大タペストリーやアクリルスタンドなどが当たる！JOYSOUNDの[じょいまもくじ2022]で、&nbsp;...</p></div>
            </div>
        </a><a href='https://lineblog.me/mamoru_miyano/archives/3251327.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ジェジュンさんと! : 宮野真守 公式ブログ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRploB7N6PUiGqm66MW8if-sSwzhf9HmbvVd3zifanOAj6AKgt429e0jDabfRRaczL5yEw_Qls2" alt="ジェジュンさんと! : 宮野真守 公式ブログ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>昨日は、フジテレビ系列「2022 FNS歌謡祭 第1夜」ご覧いただきありがとうございました!ジェジュンさんと、歌わせていただいた時間は、とってもとっても幸せでした!</p></div>
            </div>
        </a>
        </Template></>;
}