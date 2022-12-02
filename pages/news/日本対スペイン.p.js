import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>日本対スペイン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,日本対スペイン"/>
        <meta name="description" content="Trending News about 日本対スペイン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>日本対スペイン</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221201/K10013910191_2212020951_1202100213_01_02.jpg" alt="日本対スペイン"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221201/k10013910191000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 日本がスペインに逆転勝利 決勝T進出決定</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRwPjBskyBnFSWmquEQOTbjO-_RzlKbS21nF8J3ejxXK8-FKbOIoQRObSeuDJMHQp8DnyJNDPM4" alt="ワールドカップ 日本がスペインに逆転勝利 決勝T進出決定" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会、グループEの日本は、1次リーグの第3戦でスペインと対戦し2対1で勝って1次リーグ2勝…</p></div>
            </div>
        </a><a href='https://www.gqjapan.jp/culture/article/20221201-soccer-world-cup-japan-spain-hajime-moriyasu-kaoru-mitoma'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本対スペイン、大一番は“戦術三笘”を発動せよ！</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEQR1dU68WpuVRH7ZeamLiRujjXtujFf3mTlWYCgy-9_ZeYI1mclSH-f9uIsVVg2fl2GvADA4Q" alt="日本対スペイン、大一番は“戦術三笘”を発動せよ！" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022サッカー・ワールドカップ カタール大会1次リーグ、E組の日本はスペインに勝てば、無条件で1次リーグ突破が決まる。12月2日午前4時（日本時間）、決戦は金曜日だ！</p></div>
            </div>
        </a><a href='https://www.dazn.com/ja-JP/news/world-cup/2022-12-02-worldcup-japan-spain-matchreport/18d6pb7v7tvk6131jq8tlgzyqg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【速報】ドーハの奇跡再来！流れを変えたのは堂安＆三笘。日本が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyZWjUKDZXqpehirkuTFke8es6r6FMvW2U0PikTQ8Zu2Yps1itrM6-rlKTB7YhX2-neWS515M1" alt="【速報】ドーハの奇跡再来！流れを変えたのは堂安＆三笘。日本が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【サッカー日本代表・ニュース】12月2日、サッカー日本代表はカタールのハリーファ国際スタジアムで『FIFAワールドカップカタール2022』のグループE・第3節でスペイン&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/644d01212d790d0d5179607439bb4532d7163066'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本が後半に2ゴールでスペインを逆転｜カタールW杯（ス ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbzP2vFFr3nw3mHTsmQBqzaQNwnWxTSktpPtDIQva8tJPyTCabsxFjo26AoRNZOQ3g8zGJi-Q3" alt="日本が後半に2ゴールでスペインを逆転｜カタールW杯（ス ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップ・カタール2022のグループE第3節の日本対スペインの試合は、前半0-1で折り返した日本が後半に三笘薫と堂安律を投入。後半3分に堂安が強烈な左足&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221202-U6JXDTOH4NNJ7M37I3ADXGGVWE/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>マドリードも熱気ムンムン ワールドカップ、日本対スペイン</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTD63ZyUOfSL4ePYu8dCUFpzTtdxH_GTf8MaJDN0eytnH_3dyC6ziCe6VPGTqjxfiNA1nz3KKhz" alt="マドリードも熱気ムンムン ワールドカップ、日本対スペイン" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【マドリード＝三井美奈】サッカーのワールドカップ（Ｗ杯）カタール大会で、スペインの首都マドリードでは１日夜（日本時間２日未明）、市内のスポーツバーやホテルの&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/62ced246bbe34713d4fc2b1874583812ff4eb4b6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本vsスペイン戦の最終勝敗オッズが確定！ 英老舗ブックメーカー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT32Q1d-Uj1k_FYloGTA8S5XaeB9oAdcZWME4FTlCkDEOK1V7xdoezqi8FDr4BcZtP3uRIQwt7l" alt="日本vsスペイン戦の最終勝敗オッズが確定！ 英老舗ブックメーカー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>いよいよキックオフが目前に迫ったカタール・ワールドカップ第３戦、日本vsスペインの大一番。日本中が眠い目をこすりながら見守るだろう一戦に関して、英国老舗ブック&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/jp/soccer/news/Japan-vs-Spain-liveblog/inuo3kihgk4cmh4epqnkq4sk'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本が再びジャイアントキリングで決勝T進出！日本vsスペイン戦 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsgCJSF099KsoBOzWy5Bhg0v5VMMy1e-wvcetd6NdIJJhSuvac0Qw0ObX6flEC3OUDlwK3Wm1N" alt="日本が再びジャイアントキリングで決勝T進出！日本vsスペイン戦 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本時間12月2日（土）午前4時（1日28時）キックオフされた、FIFAワールドカップ・カタール2022のグループステージE、日本代表vsスペイン代表戦は、日本が後半の堂安&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/sports/news/k10013910191000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 日本対スペイン【速報中】日本が決勝T進出決定 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaP56ZHNaaY1GhQA4jLji7UzKY3uZ9yGKaARScU0IR5OWp8QXpxq7JQxFfIyruBWGNn_xjLsu7" alt="ワールドカップ 日本対スペイン【速報中】日本が決勝T進出決定 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】スポーツに関する最新ニュースを毎日お届けします。野球、サッカー、大相撲など、競技ごとにニュースをチェック。</p></div>
            </div>
        </a><a href='https://sports.yahoo.co.jp/video/player/8799983'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【日本 vs スペイン ハイライト】日本代表逆転弾！三笘 薫の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJsBOAmKwsLCQgPClaZBPwGgbtGoK5iKLP3M6Yb6xcRFUh7QHJ8ZTmzBV1c5Nwqix3GXUZ1Aw_" alt="【日本 vs スペイン ハイライト】日本代表逆転弾！三笘 薫の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【日本 vs スペイン ハイライト】日本代表逆転弾！三笘 薫の折り返しに田中 碧の魂の押し込み！など -「株式会社AbemaTV」の動画再生ページです。</p></div>
            </div>
        </a><a href='https://sports.yahoo.co.jp/column/detail/202211300081-spnaviow'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本対スペイン：チームニュース、試合プレビュー、スタジアム ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSm3MZKvk4CnIn4N3hB4uHzI2LYDKyQVdCbIUBscwHzPl-dNx380jfW9_SG47t9EiPfQeF-u0G1g" alt="日本対スペイン：チームニュース、試合プレビュー、スタジアム ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFAワールドカップ カタールのグループE第3節、日本対スペインの一戦に向けて知っておくべきことのすべてを紹介する。 大会前にはドイツとスペインの強豪2ヶ国が&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}