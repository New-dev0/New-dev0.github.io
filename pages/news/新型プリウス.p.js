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
            <Image width={800} height={500} src="https://www.webcg.net/mwimgs/e/d/-/img_edf9b925dd5165fe9e4a7caae9c5ae3a138745.jpg" alt="新型プリウス"/>
            <h3>Recent News</h3>
            <a href='https://www.webcg.net/articles/-/47308'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>もっとエモーショナルに 新型「トヨタ・プリウス」世界初公開 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT746PUFDZBnHphx_A85RDFlWgMYJDRF1geMAGnn4RG-LFas_hHkEQPIBR_DUNVXU3D4z6Pu51r" alt="もっとエモーショナルに 新型「トヨタ・プリウス」世界初公開 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタ自動車は2022年11月16日、ハイブリッドカー「プリウス」の新型を世界初公開した。ハイブリッドモデル（HEV）とプラグインハイブリッドモデル（PHEV）を&nbsp;...</p></div>
            </div>
        </a><a href='https://monoist.itmedia.co.jp/mn/articles/2211/17/news092.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型プリウスは「愛車としてカーボンニュートラルに貢献 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjzMTQA_G-LfFbsSSyN-SVN2KiWu89rY9mAJGocxdGpgk6vix9YsAbnghIypWH2lj7Tmzy2GWe" alt="新型プリウスは「愛車としてカーボンニュートラルに貢献 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタ自動車は2022年11月16日、フルモデルチェンジした「プリウス」を世界初公開した。日本の他、北米や欧州などグローバルで順次展開する。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/d3a0e45e2c876fdf61e99f16cf6b6665e91a23ea'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「センターメーター」ついに廃止!? トヨタ新型「プリウス」“普通”の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-eJvP0KSt7WXCwgBf1P_cGOGMJkdZYDAnRqO5ksz5hJPdVHYsRiXNnUEDleA5zSSNQ8g58H_A" alt="「センターメーター」ついに廃止!? トヨタ新型「プリウス」“普通”の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタが5代目となる新型「プリウス」を2022年11月16日に世界初公開しました。</p></div>
            </div>
        </a><a href='https://car.watch.impress.co.jp/docs/news/photo/1456423.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ちょっと写真で見る トヨタ新型プリウス</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXLZoTNn01oUO6qktQrvA1t2Y1cJ6LijlZhd65ZI-vo64Jyl-k041TNBRNTTX0HDSsfQc7meUm" alt="ちょっと写真で見る トヨタ新型プリウス" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新型は「Hybrid Reborn」をコンセプトに、第5世代ハイブリッドシステムと第2世代TNGAプラットフォームの採用するなど、デザインと走りに磨きを掛けたのが特長となる。</p></div>
            </div>
        </a><a href='https://www.itmedia.co.jp/news/articles/2211/16/news179.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型プリウス発表 「いつまでハイブリッドを作り続けるんだ」への ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhu3I8UGVDq8rbXE0sMU-Y3BSpA4Fxj2z5VtRv-OJSGQAk6nO5086RInSPhXsQ6CZzAR9GfIVg" alt="新型プリウス発表 「いつまでハイブリッドを作り続けるんだ」への ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタ自動車は、4代目となるハイブリッドカー「プリウス」の新モデルを発表した。</p></div>
            </div>
        </a><a href='https://www.watch.impress.co.jp/docs/news/1456229.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型プリウス初公開 ハイブリッド牽引役は節目に</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbIZcJvgdmO45Up0u1jTsWcsX87AjySxCaT8l1Bv5OvlxKlF0f0CRsrBySdjxYlFYMeolt-nPD" alt="新型プリウス初公開 ハイブリッド牽引役は節目に" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタは、新型プリウスを発表した。シリーズパラレルハイブリッド車(HEV)は2022年冬、プラグインハイブリッド車(PHEV)は2023年春頃に発売する。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/111e76f58b39be0cb7714a2c8a91138290bb83f0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新型プリウス、シフトレバーも改良 文字光らせて誤操作防止（朝日 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnoYRSLnfCzDpbL1uLOhUjL47Ln9p9Z2Q2ljBFCaVDGJ31M7p2sxdCnQIp875CJBwVODk3SJm8" alt="新型プリウス、シフトレバーも改良 文字光らせて誤操作防止（朝日 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>トヨタ自動車が16日に発表した新型プリウスは、誤操作を防ぐためにシフトレバーも改良した。旧モデルでは、シフトレバーがどこに入っているか分かりづらいとの声が&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}