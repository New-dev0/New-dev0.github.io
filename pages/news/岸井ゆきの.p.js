import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>岸井ゆきの</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,岸井ゆきの"/>
        <meta name="description" content="Trending News about 岸井ゆきの" /></Head><Template>
            <h1 style={{fontSize: "30"}}>岸井ゆきの</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221119-00021541-entame-000-1-view.jpg?exp=10800" alt="岸井ゆきの"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/1cc48891334c98ebbdcf902bc51caa2b36577a35'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>映画『ケイコ 目を澄ませて』、岸井ゆきのが三浦友和とミット打ち ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUcGcug1TlX06asAFEwAIWatxypwDiPwL0YetjeftrYzQJCGhR0Evk1mk--KCJ0QcsfVVK7197" alt="映画『ケイコ 目を澄ませて』、岸井ゆきのが三浦友和とミット打ち ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>岸井ゆきの主演映画『ケイコ 目を澄ませて』が12月16日（金）よりテアトル新宿ほかにて全国公開される。今回、岸井ゆきのと、共演の三浦友和の場面カットが到着した。</p></div>
            </div>
        </a><a href='https://www.cinemacafe.net/article/2022/11/19/82032.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>岸井ゆきの×三浦友和の“相棒感”漂う場面写真『ケイコ 目を澄ませて』</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhRRkajqM6xyCCqYE_LoKnQQnu4Hd_-XoU-5rnQropJX5lg0WN6WPbzb_AYBPDXua4iHoc_6WU" alt="岸井ゆきの×三浦友和の“相棒感”漂う場面写真『ケイコ 目を澄ませて』" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第72回ベルリン国際映画祭エンカウンターズ部門に出品され、世界が熱視線を送る三宅唱監督の最新作『ケイコ 目を澄ませて』より、岸井ゆきのと三浦友和を写した場面&nbsp;...</p></div>
            </div>
        </a><a href='https://www.astage-ent.com/cinema/keiko-3.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>映画『ケイコ 目を澄ませて』岸井ゆきの、三浦友和の“相棒感 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQI48vZSbknhnmBpK6OnpAswdprUE5zgCK-fUrl5UVKnT3sODhwtzckZzHDeCH27Qm0HYsx8wCB" alt="映画『ケイコ 目を澄ませて』岸井ゆきの、三浦友和の“相棒感 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第72回ベルリン国際映画祭正式出品 映画『ケイコ 目を澄ませて』. 役柄そのままに岸井ゆきのを見守る三浦友和 台詞が無くとも通じ合う“相棒感” ＜場面写真解禁＞.</p></div>
            </div>
        </a><a href='https://nbpress.online/archives/74132'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>役柄そのままに岸井ゆきのを見守る三浦友和。映画『ケイコ 目を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT2OFMcnKvMehZUs_2zHeMyXSloR7xiHRhI39q1N20RHsTxHghV8j1ppxfyIAxl6x22bqg_spo0" alt="役柄そのままに岸井ゆきのを見守る三浦友和。映画『ケイコ 目を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>岸井ゆきの主演映画『ケイコ 目を澄ませて』（12/16公開）より、耳の聞こえないプロボクサーのケイコを演じた岸井ゆきのと、その姿を見守るジムの会長を演じた三浦友和&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}