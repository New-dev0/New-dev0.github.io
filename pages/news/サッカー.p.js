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
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221129-00000094-spnannex-000-4-view.jpg?exp=10800" alt="サッカー"/>
            <h3>Recent News</h3>
            <a href='https://www.frontale.co.jp/info/2022/1128_4.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>川崎フロンターレ オフィシャルWEBサイト</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="川崎フロンターレ オフィシャルWEBサイト" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>この結果、川崎フロンターレU-12は準決勝敗退で今大会を終えました。皆様のご声援ありがとうございました。 U-12監督 石川邦明コメント. 「（準決勝&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/5b9e514542fa695e89c9545af9b9dbdcf4d6e4d7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>永里優季「女だからという理由で…」“レベルの低い女子サッカー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6cK1CZZ_NDttmGa7pM_uhwjpCWCEcXMu04xwNqzQhem_4V0Duqx47bcFbww-ulXEJVT_-Ohze" alt="永里優季「女だからという理由で…」“レベルの低い女子サッカー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー元女子日本代表で米シカゴ・レッドスターズに所属するFW永里優季（35）が29日までに、自身のツイッターを更新。女子サッカーに対する心ない声に反論した。</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/local/kyushu/feature/CO050452/20221128-OYTAT50043/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>［道あり］熊本県立大津高校サッカー部総監督 平岡和徳さん＜６ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTXCQ9718x-MHje0KWxHu5jWFlAmQdY6JFJA515KV9_UU-7SM2nxCUsnoR67SFJSYf0Y-n9gqP" alt="［道あり］熊本県立大津高校サッカー部総監督 平岡和徳さん＜６ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 熊本県立大津高に赴任したのは１９９３年。同校はそれまで全国高校サッカー選手権大会に２度の出場経験があったが、いずれも初戦で敗退していた。</p></div>
            </div>
        </a>
        </Template></>;
}