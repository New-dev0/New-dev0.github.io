import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>地震</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,地震"/>
        <meta name="description" content="Trending News about 地震" /></Head><Template>
            <h1 style={{fontSize: "30"}}>地震</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221125/K10013902121_2211251411_1125141210_01_02.jpg" alt="地震"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221125/k10013902121000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“人口の半数が被災” 南海トラフ地震 被災地にたどり着けるか</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWdmSbTdFwOz16dgdUFJN_S06WcmeBNW0_jrKRbV3Yu7wqZLzWz-kJssnvDTgqFcmvgDrBhEO-" alt="“人口の半数が被災” 南海トラフ地震 被災地にたどり着けるか" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】「必ず、被災地に駆けつけます」今月、消防による過去最大規模の訓練が行われました。想定は日本の人口の約半分が被災するおそれ…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/09f7e779d0605d52ad5ea85df83a2420fc5eb41b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>能登の群発地震で“第5の震源域”? 専門家「変わった活動が起こりだ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtOqoMtCVM2ZecV-97jFWMzI1L5CagrSWxyOYBWDCM1mWsmiClueld6vHh5nbLF-UY53A5Js6M" alt="能登の群発地震で“第5の震源域”? 専門家「変わった活動が起こりだ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ところが11月18日以降、これまで地震活動がみられなかった珠洲市南東部の富山湾周辺で一時的に地震が相次ぎ、19日には震度3を観測しました。また震源の深さもこれまで10&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/773bb7e3811b4dd928a3f3443fd6375773333f42'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>地震被害想定のパターン拡充を 石川県が震災対策部会（MRO北陸 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTqGmV3m67k6MRxKB0ZKSQoLAJ9nmUar3EqF6_b7LN_CWDQpp72Yd25xlc0EduJH1DnE4ydaZ-M" alt="地震被害想定のパターン拡充を 石川県が震災対策部会（MRO北陸 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>地震の被害想定の見直しをさらに進め、防災意識を高めます。 石川県の防災会議が11月24日開かれ、震災対策や被害想定の啓発に向けて、有識者らが意見交換しました。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/6c7d82fb693a778491c3c72f71ed727d3c2928ce'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>パナソニック 生活スタイルに合わせ選べる「地震に強い家」（電波 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhC3Ypw-jWkT0xM_mi-BtoXcUE45JSLhqcGB1Dcin_9ZGbUPnvwCx0FiuO5Nx-ZYnC1gcDtBjg" alt="パナソニック 生活スタイルに合わせ選べる「地震に強い家」（電波 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>地震の多い国・日本では、住宅の耐震性が求められる。パナソニックでは、阪神淡路大震災が起こった1995年に、木の弱点を鉄で克服する木と梁の複合梁「テクノビーム」を&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/02f69b909676055aaea62a7814300d55ba943aa5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>熊本地方などで最大震度３の地震（TKUテレビ熊本）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTRPx6ho9MzkjKABeF2c__H5NOstROdloyA4ms2iF5oldUEzeX-0YHI2nsUuYDzSNmxSgHlvlQr" alt="熊本地方などで最大震度３の地震（TKUテレビ熊本）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>地震の情報です。 先ほど午後８時２０分ごろ熊本地方を震源とする最大震度３の地震が発生しました。 震源の深さは１０キロ、地震の規模を示すマグニチュードは４．０と&nbsp;...</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000001.000112485.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>万が一の地震により損壊した住宅の建替えを保証する「地震建替 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwFYeEgYB4CaAIHM8fg49r3KEmx57G5HfXKbbkJxv4IC40ZDl3K_DL5zbocHgMuesVjzfb25e6" alt="万が一の地震により損壊した住宅の建替えを保証する「地震建替 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>一般社団法人ハウスワランティのプレスリリース（2022年11月25日 09時06分）万が一の地震により損壊した住宅の建替えを保証する[地震建替保証 NAMAZU ナマズ]販売開始.</p></div>
            </div>
        </a><a href='https://www.chunichi.co.jp/article/588721'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>地震被害 複数シーン想定 石川県防災会議 積雪など地域性考慮</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="地震被害 複数シーン想定 石川県防災会議 積雪など地域性考慮" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>地震被害想定の見直しを検討している石川県防災会議の震災対策部会が二十四日開かれ、県側は地震が発生する時間帯や季節、風速などの想定シーン...</p></div>
            </div>
        </a>
        </Template></>;
}