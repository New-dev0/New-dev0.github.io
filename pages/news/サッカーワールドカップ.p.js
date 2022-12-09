import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカーワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカーワールドカップ"/>
        <meta name="description" content="Trending News about サッカーワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカーワールドカップ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221206-00000135-san-000-1-view.jpg?exp=10800" alt="サッカーワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/5f2f28fd498285ec1fe57d0b0c2144af13c462a4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカーワールドカップ、ベスト８進出ならず 埼玉県内でも熱い ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR2FX-t-mjmsHBm00TYuitHJ6ev5xevcUOg-fG8cwuSR-ZF_fgIckhgfAm8ggpFt_E3gei2Wh8S" alt="サッカーワールドカップ、ベスト８進出ならず 埼玉県内でも熱い ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップ（Ｗ杯）カタール大会で５日（日本時間６日）、日本代表は前回準優勝の強豪、クロアチアにＰＫ戦の末に惜敗し、史上初のベスト８進出とはなら&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221205/k10013912991000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 日本対クロアチア PK戦で敗れベスト8ならず</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQE4aMFcP9VAxrW1XZJTAm8bmJpLWqivLYir2fr1LA0KtaU_dC1seQjYojR6ZQrhgtLniSIUbHA" alt="ワールドカップ 日本対クロアチア PK戦で敗れベスト8ならず" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会、日本は決勝トーナメント1回戦で前回大会準優勝のクロアチアと対戦し、ペナルティーキック…</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221205-OYT1T50184/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>クロアチア戦【詳報】日本ＰＫ戦で敗退、４人中３人が失敗…前田 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOkdRt1HSYXxgMDSoQzP830xUgiJEAzWNh_0b6bQc8OwGPlPegAA2sYcGQlWOPAsTbmNljpbU_" alt="クロアチア戦【詳報】日本ＰＫ戦で敗退、４人中３人が失敗…前田 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会で、世界ランキング２４位の日本は５日午後６時（日本時間６日午前０時）から、同１２位で前回&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/japanese/63867636'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【2022年サッカーW杯】 日本、PK戦でクロアチアに敗れ8強ならず ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdLRNERJtsn9ArjMnbHC6IflEiZO3GYdE7wM-KWtWk12yKIg1cOB0a7hadE-MMm6v7hiRWqiYV" alt="【2022年サッカーW杯】 日本、PK戦でクロアチアに敗れ8強ならず ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ワールドカップ（W杯）カタール大会は5日夜（日本時間6日未明）、決勝トーナメント1回戦があり、日本は1−1からのペナルティーキック（PK）戦でクロアチアに敗れ、&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQODH05BP60V01C22A2000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカー日本、W杯8強逃す PK戦でクロアチアに敗れる</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRf7Yz-FDTX7PdIiuInh86XxEKG9UezKA75kdYjZlgl0LuDnNjIk6Fheyd4PyftDSZpEVu-kf2v" alt="サッカー日本、W杯8強逃す PK戦でクロアチアに敗れる" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【アルワクラ=武智幸徳】サッカーのワールドカップ（W杯）カタール大会第16日は5日、ドーハ近郊アルワクラのアルジャヌーブ競技場などで決勝トーナメント1回戦が行&nbsp;...</p></div>
            </div>
        </a><a href='https://olympics.com/ja/news/football-fifa-world-cup-qatar-2022-japan-croatia-maya-yoshida-comments'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【サッカー】W杯ベスト16敗退の日本代表主将・吉田麻也「今後の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJ1YFDgvF07hTNsS3KXbQ0LjwSrkPBzAhdgfULSNXQ334K14RuQRktb_rnLR1pFcXNYUa31Pml" alt="【サッカー】W杯ベスト16敗退の日本代表主将・吉田麻也「今後の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本代表・SAMURAI BLUEは12月5日、FIFAワールドカップカタール2022決勝トーナメント1回戦（ラウンド16）でクロアチア代表と対戦。PK戦で涙を飲み、ベスト16敗退を喫し&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}