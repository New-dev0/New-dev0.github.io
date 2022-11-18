import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>新型プリウス</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,新型プリウス"/>
        <meta name="description" content="Trending News about 新型プリウス" /></Head><Template>
            <h1 style={{fontSize: "30"}}>新型プリウス</h1>
            <Image width={800} height={500} src="https://motor-fan.jp/mf/wp-content/uploads/sites/4/2022/11/20221116_01_05.jpg" alt="新型プリウス"/>
            <h3>Recent News</h3>
            <a href='https://motor-fan.jp/mf/article/97003/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>抑えたトーンが魅力的！トヨタ新型プリウス ボディカラーは全８色</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-q3_OcujIMPnlpRPwgOrmgdtZEuNB94yWKetNdXNhaJnW8MueqLtVKD6yqDBzFqxFigLCwq1V" alt="抑えたトーンが魅力的！トヨタ新型プリウス ボディカラーは全８色" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ワールドプレミアされた新型プリウス。「一目惚れさせるデザイン」をまとっての登場だ。ボディカラーは全８色。それぞれなかなか素敵なカラーである。</p></div>
            </div>
        </a><a href='https://www.itmedia.co.jp/news/articles/2211/16/news179.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型プリウス発表 「いつまでハイブリッドを作り続けるんだ」への ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhu3I8UGVDq8rbXE0sMU-Y3BSpA4Fxj2z5VtRv-OJSGQAk6nO5086RInSPhXsQ6CZzAR9GfIVg" alt="新型プリウス発表 「いつまでハイブリッドを作り続けるんだ」への ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタ自動車は、5代目となるハイブリッドカー「プリウス」の新モデルを発表した。</p></div>
            </div>
        </a><a href='https://response.jp/article/2022/11/17/364217.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>トヨタ プリウス 新型、米国は2.0リットル版のみ…ロサンゼルス ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTO-ejloEJaJJNst9IAeef_smJrHxQNBV1uFB_U_Ha7-6ZjBfII0wnvqqTD21Nt0UqwXt_vvgl-" alt="トヨタ プリウス 新型、米国は2.0リットル版のみ…ロサンゼルス ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタ自動車の米国部門は11月16日、新型『プリウス』（Toyota Prius）の米国仕様車をロサンゼルスモーターショー2022のプレビューイベントで初公開した。</p></div>
            </div>
        </a><a href='https://car.watch.impress.co.jp/docs/news/photo/1456423.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ちょっと写真で見る トヨタ新型プリウス</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXLZoTNn01oUO6qktQrvA1t2Y1cJ6LijlZhd65ZI-vo64Jyl-k041TNBRNTTX0HDSsfQc7meUm" alt="ちょっと写真で見る トヨタ新型プリウス" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新型は「Hybrid Reborn」をコンセプトに、第5世代ハイブリッドシステムと第2世代TNGAプラットフォームの採用するなど、デザインと走りに磨きを掛けたのが特長となる。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/2e3bd6fb89f22394b19efecac2c235bc81bc3c53'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型プリウス＆プリウスプライム北米でも発表 各3グレード展開 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTlApaAqEUGnN2XWYyQcjai0iXb9OuqlHncdo8pRPvLqL4LarOXspWpghkWWFx4ltiLvAtay3zs" alt="新型プリウス＆プリウスプライム北米でも発表 各3グレード展開 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタが2022年11月16日（水）に日本で世界初公開した新型プリウスが、現地時間16日に北米ロサンゼルスオートショーのキックオフイベントでも発表されました。</p></div>
            </div>
        </a><a href='https://www.webcg.net/articles/-/47308'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>もっとエモーショナルに 新型「トヨタ・プリウス」世界初公開 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT746PUFDZBnHphx_A85RDFlWgMYJDRF1geMAGnn4RG-LFas_hHkEQPIBR_DUNVXU3D4z6Pu51r" alt="もっとエモーショナルに 新型「トヨタ・プリウス」世界初公開 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタ自動車は2022年11月16日、ハイブリッドカー「プリウス」の新型を世界初公開した。ハイブリッドモデル（HEV）とプラグインハイブリッドモデル（PHEV）を&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/ac1e2b95cb89ce9d1b82c726f9b1ca1c55c7b810'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【解説】新型プリウス生き残りのための世界戦略 新テーマは「愛車 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpbsAAKbEtJWPqYeRR_NVpGWvy_SZMsKCKZ0REYprHRjLIyq2pVdNtrr2G2b72efsTqsUy6REb" alt="【解説】新型プリウス生き残りのための世界戦略 新テーマは「愛車 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新型「プリウス」が生き残るための新しいテーマについて、自動車経済評論家の池田直渡さんに話を聞いた。 ーーー新型「プリウス」の新しいテーマ設定の背景はプリウス&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}