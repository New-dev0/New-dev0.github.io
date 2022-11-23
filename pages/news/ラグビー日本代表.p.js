import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ラグビー日本代表</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ラグビー日本代表"/>
        <meta name="description" content="Trending News about ラグビー日本代表" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ラグビー日本代表</h1>
            <Image width={800} height={500} src="https://sportiva.shueisha.co.jp/clm/otherballgame/rugby/2022/assets_c/2022/11/DylanRiley221122-thumb-800xauto-285576.jpg" alt="ラグビー日本代表"/>
            <h3>Recent News</h3>
            <a href='https://sportiva.shueisha.co.jp/clm/otherballgame/rugby/2022/11/22/12/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>12連勝中のフランス代表から後半２トライ奪取。ラグビー日本代表 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfrZEzacZeugdWgmGDGjlPaFbP2tVW68Z2nQowA9fzwnq--jS1TnypSNA-BVRB03-he8CHtqeG" alt="12連勝中のフランス代表から後半２トライ奪取。ラグビー日本代表 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>今年最後のテストマッチに向けて、日本代表のジェイミー・ジョセフHC（ヘッドコーチ）は中野将伍をCTB（センター）に、ディラン・ライリーをWTB（ウィング）に配置し、&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/bfaf29f91840279c2d4d07c210d613175de8574d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>強豪フランスにも怯まなかったラグビー日本代表の遂行力！ 来年の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfm4W9bdSyCpYC2SBUmNB_ugkjrcmlf-vK713grXE_jx3Ks8VROs0gD1zPbXcrRvSGwyDliB8c" alt="強豪フランスにも怯まなかったラグビー日本代表の遂行力！ 来年の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フランス代表は、自分たちの出来に満足していないだろう。 現地時間11月20日、世界ランクで８つ下回る10位の日本代表を35-17で撃破。約３万人の歓声に包まれたホームの&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rugby-japan.jp/news/51652'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本代表「リポビタンDツアー2022」フランス代表戦 試合後 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="日本代表「リポビタンDツアー2022」フランス代表戦 試合後 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ラグビーを世界一楽しもう！ラグビー日本代表のニュース・試合日程・結果およびイベント情報など最新情報が満載。ラグビーの普及・育成に関する情報やルール・観戦&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/etc/20221121-OYT1T50024/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ラグビー日本代表、フランスに及ばず…後半に反撃のトライ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvAQQGc-y0kPlEgMkwtgC3qlMYZ9zNh6oNdUObs1vYngOd-0LB4ON9aP_RMJVDWcjx4UmI1LT8" alt="ラグビー日本代表、フランスに及ばず…後半に反撃のトライ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 ラグビー日本代表は２０日、フランスのトゥールーズで世界ランキング２位の同国代表と対戦し、１７―３５で敗れた。 フランスは前半に２トライを&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOKC204050Q2A121C2000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ラグビー日本代表、フランスに敗れる テストマッチ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTS8fHv0YxAqHw6SRWNuyoqwfeXSJn9hIVUnBDV470G-s9T01NtFou8PhTomWZN45wKH9HA0uWV" alt="ラグビー日本代表、フランスに敗れる テストマッチ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【トゥールーズ（フランス）=共同】ラグビーのテストマッチが20日、フランスのトゥールーズで行われ、世界ランキング10位の日本代表は同2位でワールドカップ（W杯）準&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/sports/news/202211200001149.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ラグビー】日本、世界ランク２位フランスに敗戦 善戦するも歴史 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【ラグビー】日本、世界ランク２位フランスに敗戦 善戦するも歴史 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ラグビー日本代表（世界ランク10位）が欧州遠征「リポビタンDツアー2022」第2戦のフランス（同2位）戦に臨む。フランスは出場停止の世界的SHアントワーヌ・デ…</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221121-WZDAS3KIBZHOFEGTWG6CQL7VYM/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ラグビー日本２トライも１７－３５でフランスに力負け 欧州遠征２ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTT9AVoQSGBDVer_oj9XJI2uiSAKpOVDmKySOjp8wKovlFvewMOPXckQRh2suBCqCChXJUe4mcv" alt="ラグビー日本２トライも１７－３５でフランスに力負け 欧州遠征２ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ラグビー日本代表の欧州遠征「リポビタンＤツアー２０２２」で２０日、日本代表－フランス代表のテストマッチが来年のＷ杯開催地で、大会中の日本の前線基地となる&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}