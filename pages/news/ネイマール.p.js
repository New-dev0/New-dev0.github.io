import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ネイマール</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ネイマール"/>
        <meta name="description" content="Trending News about ネイマール" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ネイマール</h1>
            <Image width={800} height={500} src="https://static.reuters.com/resources/r/?m=02&d=20221126&t=2&i=1615387132&r=LYNXMPEIAP00J&w=800" alt="ネイマール"/>
            <h3>Recent News</h3>
            <a href='https://jp.reuters.com/article/sport-neymar-idJPKBN2SG00S'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカー＝ネイマール、足首負傷でＷ杯1次リーグの残り欠場へ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQ6DS5xg3bFHm0oLyWSRKc6yHOWafEDU1t-2CqutmvnR0kkeCNDdlTW0uLR3X-ViSZHmxEGM7R" alt="サッカー＝ネイマール、足首負傷でＷ杯1次リーグの残り欠場へ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップ（Ｗ杯）カタール大会に出場しているブラジル代表のＦＷネイマールとＤＦダニーロが、負傷のために１次リーグの残り２試合を欠場する見込みと&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/9a4db6149ca97c876a3d5f0ac96eb54d3d5bb860'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>２戦欠場ネイマールが復帰へ決意「復帰チャンスあると確信」「私 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTHAYknZ-5M7vC4HYYQpSExINMu__kVIqB2IM8agZgy3eRyyrL0dQpYsy9rnG0ELQ_PIjdYfG6v" alt="２戦欠場ネイマールが復帰へ決意「復帰チャンスあると確信」「私 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【FIFAワールドカップ】1次リーグG組初戦のセルビア戦（24日）で右足首を負傷した優勝候補ブラジルのFWネイマール（パリ・サンジェルマン）が26日、SNSで思いを明かし&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/brazil-neymar-202211252040/bltc1a5acb62db8070e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ネイマール、負傷離脱で思いを吐露「再びW杯で…キャリアで最も ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZ-T_fXltqdJuAqCjdyTM2jiWvJLkk7QoSB73MNzqMW-k4NGqaiHGSRfRNgJoM7_EQ2z4neO7Y" alt="ネイマール、負傷離脱で思いを吐露「再びW杯で…キャリアで最も ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【W杯 最新情報】ブラジル代表のネイマールはセルビア代表戦で足首を負傷して、グループステージの2試合を欠場することになる。</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/soccer/qatar2022/news/202211260000323.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Ｗ杯】優勝候補ブラジルに難局、負傷のネイマール「競技人生で ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【Ｗ杯】優勝候補ブラジルに難局、負傷のネイマール「競技人生で ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>優勝候補の呼び声高いブラジルがいきなり難局に陥った。24日、セルビアとの1次リーグG組初戦でネイマールが右足首、右サイドバックで先発したダニーロも左足首を負傷…</p></div>
            </div>
        </a><a href='https://number.bunshun.jp/articles/-/855531'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ブラジルの“日本vsドイツ報道”がカオス…手の平返し絶賛と ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZnu0emXvPRTWQxj7TKjClyGXY1yz5jy4O8RTmn3a6gmQ44Ua2rSJOsReWQZBc4SJVMHgBKcYH" alt="ブラジルの“日本vsドイツ報道”がカオス…手の平返し絶賛と ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>こんな手の平返しなら、悪くない。日本対ドイツ戦は、ブラジルでは23日午前10時からTVグローボとSportvで生中継された。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/c553c3b8c0202a9ab4d69abde359bc18f5929786'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>エースのネイマールは何位？ 売り出し中のヴィニシウスは？ 国民が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5NrYjYV3N7NECkOVuRcxfe-T26nYypgpuU98pO7hDuvkfKkngannYYj9bHjLMLS4KwabXgqhJ" alt="エースのネイマールは何位？ 売り出し中のヴィニシウスは？ 国民が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現在のブラジル代表で最大のスターは、やはりネイマールだ。南アフリカ・ワールドカップ（Ｗ杯）直後の2010年８月に代表デビューを飾って以来、長きに渡ってエースの座&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221126-OYT1T50041/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>セルビア戦で右足首負傷のネイマール、グループリーグ欠場へ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRczaQW5R6WYaSJPxJ-X5I96ZDMEsw28a2slRgq9SoAvX2JetvnJeH4n1jPX1CAOqQJQuuGZhzQ" alt="セルビア戦で右足首負傷のネイマール、グループリーグ欠場へ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会で、ブラジル代表のＦＷネイマールが２５日、右足首の負傷により、グループリーグ（ＧＬ）Ｇ組の&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/DA3S15486111.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ネイマールは次戦欠場 サッカーＷ杯カタール大会</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ネイマールは次戦欠場 サッカーＷ杯カタール大会" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ブラジル・サッカー連盟は２５日、ＦＷネイマール（パリ・サンジェルマン）と、ＤＦダニーロ（ユベントス）が、ともに足首の故障のため、２８日のスイスとの１次&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/soccer/qatar2022/news/202211250000423.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【W杯】ネイマールの妹ラファエラ、セクシーポーズ公開で兄応援 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【W杯】ネイマールの妹ラファエラ、セクシーポーズ公開で兄応援 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>＜FIFAワールドカップ（W杯）カタール大会：ブラジル2－0セルビア＞◇1次リーグG組◇24日（日本時間25日未明）◇ルサイル・ルサイル競技場.</p></div>
            </div>
        </a><a href='https://www.shimotsuke.co.jp/articles/-/663324'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ネイマール、２戦欠場へ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9hZIoQmKd1Bh-_RQ1irur1K3_QQWhHnGPlWa60hZti-xYCKkS1F-AxG_4GvMdZrNnCR7S_mTj" alt="ネイマール、２戦欠場へ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ドーハ共同】サッカーのワールドカップ（Ｗ杯）で優勝候補ブラジルのエース、ネイマールが１次リーグＧ組の残り２試合を欠場すると２５日、ロイター通信が報じ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}