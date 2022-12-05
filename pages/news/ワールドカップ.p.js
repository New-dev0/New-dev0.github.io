import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ワールドカップ"/>
        <meta name="description" content="Trending News about ワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ワールドカップ</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221203/K10013911781_2212030630_1203064404_01_02.jpg" alt="ワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221203/k10013911781000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 得点ランキング 仏エムバペら3得点で5人が並ぶ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSngLCgFCKYnOfBor6ZIQYbkte5xeDI_jGCJjjEFetTU4JAMlgCTN5FtyLTlkFd09gPZQV_XR7d" alt="ワールドカップ 得点ランキング 仏エムバペら3得点で5人が並ぶ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会は、1次リーグのすべての試合が終わり、得点ランキングのトップには、3得点で5人が並んで…</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221203-L6ZGAYZDT5IGNG6WJNG7HPEDZU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ初の１６強にアジア勢３チーム 切磋琢磨で相乗効果 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxkARJ6zakDyplu8zPKJdIg8UaxIRcbg3JcmT8ENPSe-J0RqOKqlNfND6rgEKg8-1EeWQd94uu" alt="ワールドカップ初の１６強にアジア勢３チーム 切磋琢磨で相乗効果 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ドーハ＝奥山次郎】サッカーのワールドカップ（Ｗ杯）カタール大会でアジア勢が奮闘している。２日までに全日程を終えた１次リーグで日本がドイツとスペイン、&nbsp;...</p></div>
            </div>
        </a><a href='https://olympics.com/ja/news/football-fifa-world-cup-qatar-2022-knockout-stage-confirmed'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【サッカー】カタールW杯：決勝トーナメント進出の16チームが ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7ylu9D37wGkVHbvnLa4n7l7aj1BtmmCfQZoqUMHGUlIMPvMIPb3nqcI8xyoCd_UmRKmojcbv-" alt="【サッカー】カタールW杯：決勝トーナメント進出の16チームが ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022は12月2日までにグループステージの全日程を終了。決勝トーナメント進出の16チームが確定した。地域別ではヨーロッパから最多の8チーム&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221203-OYT1T50134/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ｗ杯１６強にアジア勢初の３か国…日本・韓国・オーストラリア</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCye9vv9ZroTY31qqhnKtb14fbQUQw9BPE7NgC3uYdPvPq9H1xF_rMab3-VqlY0x0HQkofrKcX" alt="Ｗ杯１６強にアジア勢初の３か国…日本・韓国・オーストラリア" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 【ドーハ＝星聡】サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は２日、グループリーグ最終戦が行われ、Ｇ組はスイス、Ｈ組は韓国が新たに決勝&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/67d28082f8c7ecfe1cb5145d8ecccc9ce7131c3c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3チームがベスト16に勝ち上がったアジア勢...南米、欧州とより ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkuOQUaPZu9kqxEaciOfSAu_GkWmnnkJoeAgIMkKc_QZoKjFmtMsIwiHB7sa7ZKER_zBNJatnq" alt="3チームがベスト16に勝ち上がったアジア勢...南米、欧州とより ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【カタールW杯2022 レビュー】『FIFAワールドカップタイム』の第13日が公開された。日本代表をはじめ、3チームがグループステージを突破したアジア勢。</p></div>
            </div>
        </a><a href='https://www.soccer-king.jp/news/world/wc/20221203/1716317.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタールワールドカップ、決勝トーナメント進出16カ国が出揃う ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRALXOOBeLUW7ZoZ8q4RI2vmMw3SJfxPxNQaYOeQklvhsClbPGNW8XLNM8itf0_E2ft3Tv991Kq" alt="カタールワールドカップ、決勝トーナメント進出16カ国が出揃う ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022のグループステージ全日程が終了し、決勝トーナメントに進出する16カ国が確定した。 アルゼンチン代表が初戦でサウジアラビ···</p></div>
            </div>
        </a><a href='https://www.football-zone.net/archives/420273'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【W杯】ベスト16カード決定 日本ら3チーム進出のアジアが欧州に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfgpBwYD6S1UedGfuK2PySf-8tTTYG9TUiO-cqxki8JOUEaGyuPAbMmws4WqSo_kw1KcniTG3B" alt="【W杯】ベスト16カード決定 日本ら3チーム進出のアジアが欧州に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタール・ワールドカップ（W杯）は現地時間12月2日にグループリーグの試合がすべて終了。決勝トーナメント進出の16チームが出揃ったが、3チームが進出したアジア勢が&nbsp;...</p></div>
            </div>
        </a><a href='https://web.ultra-soccer.jp/news/431950'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタールW杯ラウンド16進出チーム決定! 大健闘アジア勢が欧州勢に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJGEiUeBAi1zcPMs0USGTy-yJB9rzBRymn1rY2m8KzVO4QUNE43rIUJfFlMwN_FMuXCVhYWJlO" alt="カタールW杯ラウンド16進出チーム決定! 大健闘アジア勢が欧州勢に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2日、カタール・ワールドカップ(W杯)のグループステージ全日程が終了。決勝トーナメント進出の16チームが出揃った。</p></div>
            </div>
        </a>
        </Template></>;
}