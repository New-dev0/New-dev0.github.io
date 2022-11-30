import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカー"/>
        <meta name="description" content="Trending News about サッカー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカー</h1>
            <Image width={800} height={500} src="https://www.jfa.jp/img/cache/638569c5-82a8-4cea-a2a5-0132d3093d95.jpg" alt="サッカー"/>
            <h3>Recent News</h3>
            <a href='https://www.jfa.jp/news/00031128/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>イングランドサッカー協会とのパートナーシップ協定を再締結</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQP-seZ-9EO4BT426__lWsbqlHks5d0ofnL2g9H0rzTzWkyWo3wISRAnMyvIW1ALE8b9JB6jwhx" alt="イングランドサッカー協会とのパートナーシップ協定を再締結" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本サッカー協会は11月28日(月)、イングランドサッカー協会（The Football Association）とのパートナーシップ協定を更新しました。同協会とは、2016年2月に&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/5b9e514542fa695e89c9545af9b9dbdcf4d6e4d7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>永里優季「女だからという理由で…」“レベルの低い女子サッカー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRb7Zu9s3dc1SbVkPoTST41_SU3Vl8nQARMOfmBzpA_wcSCRzlzAGdcS2SqLIMt_J50YEkSoOWn" alt="永里優季「女だからという理由で…」“レベルの低い女子サッカー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー元女子日本代表で米シカゴ・レッドスターズに所属するFW永里優季（35）が29日までに、自身のツイッターを更新。女子サッカーに対する心ない声に反論した。</p></div>
            </div>
        </a>
        </Template></>;
}