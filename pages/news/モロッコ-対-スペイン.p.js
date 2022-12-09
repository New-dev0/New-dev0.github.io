import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>モロッコ 対 スペイン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,モロッコ 対 スペイン"/>
        <meta name="description" content="Trending News about モロッコ 対 スペイン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>モロッコ 対 スペイン</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcabdfa9bf567b69c/638ff983f5ae670e811b73f4/BEEF1670-2095-4D2B-9716-F837B9920AE1.jpg" alt="モロッコ 対 スペイン"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/jp/%E3%83%AA%E3%82%B9%E3%83%88/spain-morocco-winners-loosers-20221207/blt9712fe1539db04eb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>歴史に残る突破劇…スペインvsモロッコの勝者と敗者</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0MLYc4o5JzDHEbLpqNeI-s32jAeDGD-CJ0M7sajWPjzO1RCMPPguWeH6j8dN22Hz-a5vPfw2Z" alt="歴史に残る突破劇…スペインvsモロッコの勝者と敗者" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>パネンカでアフリカ勢初のワールドカップ準々決勝進出が決まったが、ルイス・エンリケには大きな疑問が残る。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221207/k10013915321000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ モロッコがPK戦制し初のベスト8 スペイン敗退</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqmnhwYvebgK1OQlr24JzcoJS2ufVB_Ukpt6kEt2-2dUX_xmNza5c7yAPfg6W7XbIgHBR0B4EO" alt="ワールドカップ モロッコがPK戦制し初のベスト8 スペイン敗退" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会の決勝トーナメント1回戦、モロッコ 対 スペインは、モロッコがペナルティーキック戦を制…</p></div>
            </div>
        </a><a href='https://mainichi.jp/articles/20221207/k00/00m/050/009000c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>モロッコvsスペインは0－0のまま延長戦へ サッカーW杯 - 毎日新聞</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGQR9x744C81G_ebKx50I5NU77UjgqMQ9t8eGUECaeMHSVCJa6EU0w12y_MxXe_jGu56FowHPB" alt="モロッコvsスペインは0－0のまま延長戦へ サッカーW杯 - 毎日新聞" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップ（W杯）カタール大会は6日（日本時間7日）、アルラヤンで決勝トーナメント1回戦があり、ボールを支配したスペイン（E組2位）が優位に試合を&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/23b4d8472dfc602689a0875f17480e27335a6f33'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スペイン、モロッコに敗戦…120分間で決着つかずPK戦で3本連続 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLBuvZwC-wsVBBWVjEwbvzf8CQDyu28NXvYqjUFSwigSsiA0GerUa9ljycJWQLDoqWolZIGrJP" alt="スペイン、モロッコに敗戦…120分間で決着つかずPK戦で3本連続 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA ワールドカップ カタール 2022・決勝トーナメント1回戦】モロッコ0（PK3－0）0スペイン（日本時間12月7日／エデュケーションシティ スタジアム）</p></div>
            </div>
        </a><a href='https://web.gekisaka.jp/news/worldcup/detail/?374669-374669-fl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スペインが敗れる、PK戦3人連続失敗…耐え抜いたモロッコ、PK戦 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbAWpw-sUh3vXtD-fS7kcoCWlQUaa9TLW4vkD4F2Va3bl3ghb-EctqDAkzqYtBbz0CCJS_rspx" alt="スペインが敗れる、PK戦3人連続失敗…耐え抜いたモロッコ、PK戦 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12.6 カタールW杯・決勝T1回戦 モロッコ 0-0(PK3-0) スペイン ドーハ/エデュケーション] カタールW杯は3日、決勝トーナメント1回戦を行い、エデュケーション・シティ・&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221207-OYT1T50026/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>モロッコがスペインをＰＫ戦で破り初の８強、ポルトガルは６発で ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQdus_-0t-AvisRQ5o8kCwqgTw1zt7inWfBY5WriEM7m3Wel9txu82rDXK_V2v9UakKuXW5R4yH" alt="モロッコがスペインをＰＫ戦で破り初の８強、ポルトガルは６発で ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は６日（日本時間７日未明）、決勝トーナメント１回戦が行われ、グループリーグＦ組１位の&nbsp;...</p></div>
            </div>
        </a><a href='https://ichimame.com/soccer/worldcup-2022-morocco-spain'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【モロッコvsスペイン】今日の地上波テレビ放送/解説・再放送 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTxN4Lly58mLojEMlX740AJ7v9-_bdgvDJ5srXfcAsM4L_d5CtW9Xs585ZbIw45g9CfMD4OfEm3" alt="【モロッコvsスペイン】今日の地上波テレビ放送/解説・再放送 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタールワールドカップ2022・決勝トーナメント ベスト16「モロッコ代表 vs スペイン代表」の日程＆キックオフ日本時間（時差計算）、テレビ放送・ネット中継予定、&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}