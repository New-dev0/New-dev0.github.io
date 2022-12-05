import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>韓国ワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,韓国ワールドカップ"/>
        <meta name="description" content="Trending News about 韓国ワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>韓国ワールドカップ</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221203/K10013911911_2212030455_1203045807_01_02.jpg" alt="韓国ワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221203/k10013911911000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 韓国 ポルトガルに勝ち 3大会ぶり決勝T進出</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8IFIAgVVWhlIaYrBJ-X8tRosoRj6oosAUds0i9W-pgERTqYL2qPj87Gn-Z11qGTSbHGLORXns" alt="ワールドカップ 韓国 ポルトガルに勝ち 3大会ぶり決勝T進出" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会の1次リーグ、グループHのポルトガル対韓国は韓国が2対1で勝ち、3大会ぶりの決勝トーナ…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/18882aaa71f8c343cd40b108657c31d6bd8a0460'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタールW杯：韓国、信じられない決勝T進出…ポルトガルに2－1で ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmU9FGoicL5-LuGRU7b6IXnBk4VDN44qRP8lcW5ccRlcSXSclXxvNH-0rsz0mtKj_eg1OuSwUs" alt="カタールW杯：韓国、信じられない決勝T進出…ポルトガルに2－1で ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>韓国がポルトガルを破り、12年ぶりに国際サッカー連盟（FIFA）ワールドカップ（W杯）で決勝トーナメント（ベスト16）に進出した。黄喜燦（ファン・ヒチャン）＝ウル&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221203-OYT1T50053/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>韓国が２―１で逆転勝利、終了間際に勝ち越し劇的な決勝Ｔ進出 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTD1T_JwHPO_-e8uMrevUc1OCd6eJi0ldJfA8qKdypQvtLRlNaqf30SlaSGHjClYMK_XaRnvrAC" alt="韓国が２―１で逆転勝利、終了間際に勝ち越し劇的な決勝Ｔ進出 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は２日（日本時間３日未明）、グループリーグＨ組の第３戦が行われ、韓国代表がポルトガル代表&nbsp;...</p></div>
            </div>
        </a><a href='https://www.soccer-king.jp/news/world/wc/20221203/1716337.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「日本、豪州の活躍が力に」 韓国代表MFチョン・ウヨン明かす逆転 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQR6HfSWpQJLPm7XUXL5JH9MU069SHuJUz3TVerSmW6Kbi4nssx5BY-2n7mPQ5Azz1u-7Hu9pHj" alt="「日本、豪州の活躍が力に」 韓国代表MFチョン・ウヨン明かす逆転 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022グループステージH組第3節が2日に行われ、韓国代表は後半アディショナルタイムのファン・ヒチャンの得点でポルトガルに2－1···</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/e9b55143a9b46429defa6ecd2d5adb9ed0aed2e2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「ドーハの奇跡だ」劇的AT弾で韓国が決勝Ｔ進出に地元メディア ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRckSeH-BMdwWG8784EEDJmoZJQ32PiRXXdeTYwJZdLtz5vNMi3JIar9W173Jdxf9PwRZnl_xjF" alt="「ドーハの奇跡だ」劇的AT弾で韓国が決勝Ｔ進出に地元メディア ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>アジアの虎”（韓国代表の愛称）が「ドーハの奇跡」を起こした。 現地12月２日、サッカーのカタール・ワールドカップ（W杯）はグループステージ最終日となる第３戦が&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%AA%E3%82%B9%E3%83%88/no-records-today-cristiano--just-a-big-ugly-error-portugal-winners-losers--ratings-as-ronaldo-flops-to-send-south-korea-through/blta0b4ca7073f4850a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>韓国がポルトガル撃破の大金星！ソン・フンミン涙の番狂わせの ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHXWyXj-bSjUCXhVDzczumgwqjVZK-DIBDdANQN90x-8vunseEBhTJUoog5hEsdIXh2RtWvOmZ" alt="韓国がポルトガル撃破の大金星！ソン・フンミン涙の番狂わせの ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2-1で勝利し、ベスト16入りを決めた韓国には喜びの涙があり、クリスティアーノ・ロナウドも実際に勝利に貢献した。</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQD30D42QD2UTQP02H.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>韓国、土壇場の劇的ゴールで決勝Tへ ポルトガルに2-1で競り勝つ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQFbTMIG8E3bfGSFxCCHG2sAMkVWvdXK9hvuZ5XnYNicgTNjyUqJ7hclh3AxGN6POYsFmSwOh1p" alt="韓国、土壇場の劇的ゴールで決勝Tへ ポルトガルに2-1で競り勝つ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップ（W杯）カタール大会は2日、1次リーグH組の最終戦があり、韓国（世界ランク28位）がポルトガル（同9位）を2―1で下した。1勝1敗1分けで勝ち点4&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}