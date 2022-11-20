import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>あなたの番です</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,あなたの番です"/>
        <meta name="description" content="Trending News about あなたの番です" /></Head><Template>
            <h1 style={{fontSize: "30"}}>あなたの番です</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-00117868-crankinn-000-3-view.jpg?exp=10800" alt="あなたの番です"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/db7befe65de0659b53da272d093be042ce52d057'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『あなたの番です 劇場版』原田知世＆田中圭の“初出しオフショット ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRINxKVkV8YQSFdAWJrMqJ_HvqlJHvhBaGwpsAOfCLyHClGZ5mOu6OTd0RWQCMr1dHxevtMN8Hr" alt="『あなたの番です 劇場版』原田知世＆田中圭の“初出しオフショット ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>原田知世と田中圭がダブル主演を務める『あなたの番です』公式ツイッターが18日、2人の初出しオフショットを公開した。</p></div>
            </div>
        </a><a href='https://kinro.ntv.co.jp/article/detail/20221118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『あなたの番です 劇場版』今夜放送‼出演者コメント到着！｜金曜 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsJbCjF3-8P_p_SGzTe4_DcAs0kIEFiCD-j5S20nr9Ce67dJmeVzEDAWIV4bqHa0e230jA3wLUjQ" alt="『あなたの番です 劇場版』今夜放送‼出演者コメント到着！｜金曜 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>主演はドラマ同様、年の差カップルを演じる、原田知世と、田中圭。他にも西野七瀬や横浜流星ら多くのドラマ版キャストが続投するほか、来年１月スタートの水曜ドラマ「&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cinemacafe.net/article/2022/11/18/82026.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>原田知世＆田中圭『あなたの番です 劇場版』キャスト・あらすじお ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJaV6VMSY7But07iBXXGieGfj64pj5K06N4kSoUFp_6KEIDHhu5ID9_LvLo-_AW4KSFy-pjJAl" alt="原田知世＆田中圭『あなたの番です 劇場版』キャスト・あらすじお ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月18日の金曜ロードショーは、本編ノーカットで放送する『あなたの番です 劇場版』。2019年放送の連続ドラマ「あな番」の劇場版となる本作には、原田知世、田中圭、&nbsp;...</p></div>
            </div>
        </a><a href='https://filmaga.filmarks.com/articles/202879/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ネタバレ】映画『あなたの番です 劇場版』ドラマ版との共通点 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0GM5ff1L32b5uPthS8__yMuN7B2M-QFz91U0kahyiKR8w6St-4vnCtPLOS53S3i7fKFCvMNnN" alt="【ネタバレ】映画『あなたの番です 劇場版』ドラマ版との共通点 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2019年の4月から9月までの2クール放送され、考察ブームの火付け役となったドラマ『あなたの番です』。2021年には映画化。ドラマのテーマとなった交換殺人ゲームが行&nbsp;...</p></div>
            </div>
        </a><a href='https://eiga.com/news/20221118/19/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ネタバレ解説】「あなたの番です 劇場版」ドラマとの違い ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【ネタバレ解説】「あなたの番です 劇場版」ドラマとの違い ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>秋元康が企画・原案を手掛けたミステリードラマを映画化した「あなたの番です劇場版」が、11月18日午後9時から日本テレビ系「金曜ロードショー」で、本編ノーカットで&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cinra.net/article/202211-whn-anaban_skkskcl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>映画『あなたの番です 劇場版』が金ローで地上波初放送。原田知世 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQX2vthiD9vEz8uzUwpmFWoXWa1SF9b2BHhxpiQJ3Q35xeCk6GgrlTMW7lt1nC4v4rZufEq1oT_" alt="映画『あなたの番です 劇場版』が金ローで地上波初放送。原田知世 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>映画『あなたの番です 劇場版』が、本日11月18日に日本テレビ系の『金曜ロードショー』で放送される.</p></div>
            </div>
        </a><a href='https://www.famitsu.com/news/202211/18283241.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【金曜ロードショー】『あなたの番です 劇場版』本日（11/18）21 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTeHNLaFm8wfVRBVZWJ2cF4z_jyfsT7BZsSXYyBBfbQbj-AcueVwMbDqT7mQGBXMyxfNUDJRC9C" alt="【金曜ロードショー】『あなたの番です 劇場版』本日（11/18）21 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本テレビは本日2022年11月18日（金）21時からの“金曜ロードSHOW！”にて、『あなたの番です 劇場版』を放送する。</p></div>
            </div>
        </a>
        </Template></>;
}