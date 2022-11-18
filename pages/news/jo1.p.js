import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>JO1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,JO1"/>
        <meta name="description" content="Trending News about JO1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>JO1</h1>
            <Image width={800} height={500} src="https://jo1.jp/ogp.jpg" alt="JO1"/>
            <h3>Recent News</h3>
            <a href='https://jo1.jp/news/detail/2368'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『SHIBUYA109 XMAS PARTY × JO1』『MAGNET by SHIBUYA109 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfFReHM510gZRZhpYwECyRaqLHPCu1q_uDfs_RX4PNQEKbzwquNmZLMZkijU0qseBykQQ0Nj4f" alt="『SHIBUYA109 XMAS PARTY × JO1』『MAGNET by SHIBUYA109 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「SHIBUYA109渋谷店」、「MAGNET by SHIBUYA109」をはじめとする4つの施設にて、 2022年12月1日(木)~ 12月25日(日)の期間、JO1がキャンペーンモデルを務めさせて&nbsp;...</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000193.000033586.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>大人気グローバルボーイズグループ「JO1（ジェイオーワン）」と ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQlgDhxa6X6DRt2bbG1p1XbeBBZLJ4dkP2PgDq-Ijy9QjNWHdQA8CAFfe8bWDFLLPYKtulWtQ_4" alt="大人気グローバルボーイズグループ「JO1（ジェイオーワン）」と ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>株式会社SHIBUYA109エンタテイメント（本社：東京都渋谷区、社長：石川あゆみ）は、東京・渋谷で運営する「SHIBUYA109渋谷店」、「MAGNET by SHIBUYA109」をはじめと&nbsp;...</p></div>
            </div>
        </a><a href='https://natalie.mu/music/news/501736'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JO1とハピメリ！SHIBUYA109コラボで結成3周年記念企画も（写真 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQetpsLqWN3EZHXVC2S_PvFHylBhYhDpu9cSqNbJWWz_zd_NHDYU6dEbfTMYzQYpEthjvtccpYt" alt="JO1とハピメリ！SHIBUYA109コラボで結成3周年記念企画も（写真 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>JO1を起用したクリスマスキャンペーン「SHIBUYA109 XMAS PARTY × JO1」「MAGNET by SHIBUYA109 XMAS PARTY × JO1」が、12月1日から25日まで開催される。</p></div>
            </div>
        </a><a href='https://thetv.jp/news/detail/1111928/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JO1がSHIBUYA109とコラボレーション クリスマスビジュアル初公開</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQr_yYaMlQgReZZNCg3vIndMy9b7kXxgeR6Qxk8oqlCMJIK_GtHTkoqmyX77fG39uE-x8wOj4wD" alt="JO1がSHIBUYA109とコラボレーション クリスマスビジュアル初公開" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サバイバルオーディション番組「PRODUCE 101JAPAN」で誕生したグローバルボーイズグループ・JO1を起用したクリスマスキャンペーン「SHIBUYA109 XMAS PARTY × JO1」が.</p></div>
            </div>
        </a>
        </Template></>;
}