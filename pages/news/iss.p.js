import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ISS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ISS"/>
        <meta name="description" content="Trending News about ISS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ISS</h1>
            <Image width={800} height={500} src="https://cdn.mainichi.jp/vol1/2022/12/09/20221209ddm001010124000p/0c10.jpg?1" alt="ISS"/>
            <h3>Recent News</h3>
            <a href='https://mainichi.jp/articles/20221209/ddm/001/020/104000c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本初の宇宙ステーション ポストISS、国内ベンチャーが計画 - 毎日 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfNjyR-EpOczjx6O9UHW9FisSyyQ4UVCKg-VggbcylOkDyH2Xgv7MLaxUVeLG3pWQs8wXIVfGt" alt="日本初の宇宙ステーション ポストISS、国内ベンチャーが計画 - 毎日 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本の宇宙ベンチャー「DigitalBlast（デジタルブラスト）」（東京都千代田区）が、独自の商用宇宙ステーション建設を計画していることがわかった。</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000392.000051782.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JAXA監修「THE ISS METAVERSE」でリアルタイムの宇宙飛行士の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUlumVC7zrhrCbNq1OuYs7EU7FGxQrP5lT84kwXz4H6TtTfToA7oacGs1Ovz9SRzpAejyAjJBf" alt="JAXA監修「THE ISS METAVERSE」でリアルタイムの宇宙飛行士の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>三井不動産株式会社のプレスリリース（2022年12月9日 15時52分）JAXA監修[THE ISS METAVERSE]でリアルタイムの宇宙飛行士の視点を体験！[HELLO SPACE WORK！</p></div>
            </div>
        </a>
        </Template></>;
}