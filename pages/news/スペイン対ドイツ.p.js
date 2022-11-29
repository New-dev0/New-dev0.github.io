import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>スペイン対ドイツ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,スペイン対ドイツ"/>
        <meta name="description" content="Trending News about スペイン対ドイツ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>スペイン対ドイツ</h1>
            <Image width={800} height={500} src="https://s.yimg.jp/images/sports/all_device/common/ogp/soccer_wcup.png" alt="スペイン対ドイツ"/>
            <h3>Recent News</h3>
            <a href='https://soccer.yahoo.co.jp/wcup/category/2022/game/2022112704/text?gk=18'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ - W杯 グループE 第2節 スペイン vs. ドイツ - 試合 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZI17Ple61HOBfLX8gcG4bE595SkjDbkWfcv8vE-8rfQXYgkD99NlwfQ3ATR_NHlb6P_LE-i_w" alt="ワールドカップ - W杯 グループE 第2節 スペイン vs. ドイツ - 試合 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>W杯 グループE 第2節 スペイン vs. ドイツの試合テキスト速報。スポーツ総合サイト、スポーツナビ(スポナビ)のワールドカップページです。最新のニュース､速報、日程、&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/7203a4c7491c901f27d48ecc8def83778d45d13b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ドイツ対スペインは1-1のドロー…ドイツ代表が生き残りに望みを ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrv2LOMUvmYlhbR_Junf7ekUgDIoaG_cEVlPvXFACntGcKWfWOoJRlrBJ3Tbm2XqBHOteXVkDV" alt="ドイツ対スペインは1-1のドロー…ドイツ代表が生き残りに望みを ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタールW杯グループE、スペイン対ドイツの試合はドイツが意地のゴールで引き分けとした。</p></div>
            </div>
        </a><a href='https://sports.yahoo.co.jp/video/player/8755812'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【スペイン vs ドイツ 本日のハイライト】グループステージ最注目の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnV6UKZuWGPZevo5t6Yv7JLbvFiWAXDJaMfjvy53r3KcKDYlzkriOFc13QR1EaflVO_9L13gpj" alt="【スペイン vs ドイツ 本日のハイライト】グループステージ最注目の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【スペイン vs ドイツ 本日のハイライト】グループステージ最注目のビッグマッチ勝敗の行方は、、、 -「株式会社AbemaTV」の動画再生ページです。</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_international/articles/000277474.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スペイン対ドイツ引き分けで大混戦 全チームに決勝T進出の可能性</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBT9qE5v7ae7sWT64jgGggNm9F2OUMJOGmeVTn-1xC6L7euqrctcFcAvOYfYjrdWueKw8R6ScU" alt="スペイン対ドイツ引き分けで大混戦 全チームに決勝T進出の可能性" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップ、日本のグループEはスペインとドイツが引き分けとなったため決勝トーナメント進出は4チームすべてに可能性が残されました。</p></div>
            </div>
        </a><a href='https://www.footballchannel.jp/2022/11/28/post485875/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4rnw3tD3dKXOXJRhjv-E0D7JmmVN9p0-7NYHQ6ZrBJqptxCT17H2zC4sSKemWqE1HPkoGWzwU" alt="..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現地時間27日、FIFAワールドカップカタール2022・グループE第2節で、スペイン代表とドイツ代表が対戦した。結果は1-1の引き分けに終わっている。この試合で両チームの&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dazn.com/ja-JP/news/world-cup/20221127-wc-match-review/ic5c8zy9dj4i1vuj2qaouv4gf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本がコスタリカに惜敗…スペインとドイツはドロー｜カタールW杯 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWe0AgLcG3pcyZqPqr_j7Qg3EdDAVTEzZM68ABkk-5is3rnG3Z83Uptu1txilxEXdodltMmOKh" alt="日本がコスタリカに惜敗…スペインとドイツはドロー｜カタールW杯 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【カタールW杯2022 総評】11月27日に行われたFIFAカタール・ワールドカップ グループEとグループFの第2節4試合のレビュー。</p></div>
            </div>
        </a>
        </Template></>;
}