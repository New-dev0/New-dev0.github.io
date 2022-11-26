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
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221126-00010004-theworldw-000-1-view.jpg?exp=10800" alt="ネイマール"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/ce02b02e0ca10ab5da1ea74c896a467f3a73771b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>セルビア戦での負傷交代で涙のネイマール 残り2試合欠場で決勝 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKfjVBXN8wPD43koVQxQnkjEBT62m8vu1G4BNB72fJksStixhGVbQEw8j8Fhhst73MHRPjHzXe" alt="セルビア戦での負傷交代で涙のネイマール 残り2試合欠場で決勝 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ブラジルはFIFAワールドカップ・カタール大会のグループG第1節でセルビアと対戦。リシャルリソンの2ゴールで初戦を2-0と勝利してスタートした。この試合で負傷交代した&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/31c73a402116148fc9e6d621b8c6e2b21012de1d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ブラジル代表に痛手…初戦で負傷のネイマールとダニーロ、復帰は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyxNkDCO8lS-yFITxTy8U1oG_0fWhIxd5RU69TVyMLg4ViIVYFCYX_hi38F4tKmw2U7WchR6hi" alt="ブラジル代表に痛手…初戦で負傷のネイマールとダニーロ、復帰は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ブラジル代表FWネイマール（パリ・サンジェルマン/フランス）と同DFダニーロ（ユヴェントス/イタリア）が、FIFAワールドカップカタール2022・グループGの残り2試合を&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221126-VPKPISIC3BOZLAJQOHSKXJFWTM/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ネイマール、負傷離脱で思いを吐露「再びＷ杯で…キャリアで最も ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZ-T_fXltqdJuAqCjdyTM2jiWvJLkk7QoSB73MNzqMW-k4NGqaiHGSRfRNgJoM7_EQ2z4neO7Y" alt="ネイマール、負傷離脱で思いを吐露「再びＷ杯で…キャリアで最も ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【W杯 最新情報】ブラジル代表のネイマールはセルビア代表戦で足首を負傷して、グループステージの2試合を欠場することになる。</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/neymar-injury-brazil-world-cup-20221126/blt460b52e31b8f6d69'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>足首負傷のネイマール、次節スイス戦は欠場へ…決勝T進出なら先発 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNpziSyhOUPtM75weC71GD_LAMhhUmbACFM4Yzjklo54PxczrNX2HesGZKkaZnXn85_Zp0TqM0" alt="足首負傷のネイマール、次節スイス戦は欠場へ…決勝T進出なら先発 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【サッカー ワールドカップ ニュース】ブラジル代表は次節スイス代表と対戦し、12月2日のグループリーグ最終節でカメルーン代表と激突する。</p></div>
            </div>
        </a><a href='https://www.soccer-king.jp/news/world/wc/20221125/1713144.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>右足首負傷のネイマールがベンチで涙…チッチ監督「ワールド ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIiPGlilTiWdKJKA1B2Gxrnj4xd86hmfQF7TW3qcqRnTBbLxDXjFhZud0aRPKXf_95RkK-M90o" alt="右足首負傷のネイマールがベンチで涙…チッチ監督「ワールド ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ブラジル代表FWネイマールが24日、FIFAワールドカップカタール2022のグループH第1節のセルビア代表戦で右足首を痛め、負傷交代。翌25日に検査を受けるこ···</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221126-X4IZAZLLWFIIDJKS2VSKUVX3BA/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ネイマール、２戦欠場へ「靱帯に損傷」</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRSqwdGZx5tisd8DKas8lD6XFIHsAM4kJFzvuF1Hd_JFdj7FPaUzVHxRye7LQuRKQwMiNDs_jQ" alt="ネイマール、２戦欠場へ「靱帯に損傷」" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップ（Ｗ杯）で優勝候補ブラジルのエース、ネイマールが１次リーグＧ組の残り２試合を欠場すると２５日、ロイター通信が報じた。２４日のセルビア&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/c553c3b8c0202a9ab4d69abde359bc18f5929786'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>エースのネイマールは何位？ 売り出し中のヴィニシウスは？ 国民が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5NrYjYV3N7NECkOVuRcxfe-T26nYypgpuU98pO7hDuvkfKkngannYYj9bHjLMLS4KwabXgqhJ" alt="エースのネイマールは何位？ 売り出し中のヴィニシウスは？ 国民が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現在のブラジル代表で最大のスターは、やはりネイマールだ。南アフリカ・ワールドカップ（Ｗ杯）直後の2010年８月に代表デビューを飾って以来、長きに渡ってエースの座&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/2f3b200d82a4043d2bb02a41b87ad704e4b78fa3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>後半がキックオフされました…ね？後半開始もスパイクの靴紐を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIeACsBQlQB9i3VF89d7ucb_IdJcYd2_ZWV-ozo4h4KVOSt4MfPl8tO2PNUecorSbj82Ni6sed" alt="後半がキックオフされました…ね？後半開始もスパイクの靴紐を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【FIFA ワールドカップ カタール 2022・グループG】ブラジル2－0セルビア（日本時間11月25日／ルサイル スタジアム）</p></div>
            </div>
        </a>
        </Template></>;
}