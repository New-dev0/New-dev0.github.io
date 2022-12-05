import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>チャンピオンズカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,チャンピオンズカップ"/>
        <meta name="description" content="Trending News about チャンピオンズカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>チャンピオンズカップ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221204-00000053-kyodonews-000-3-view.jpg?exp=10800" alt="チャンピオンズカップ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/1990d790dd0556d3a060be1e87a1798d8a3b84ea'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ジュンライトボルトがG1制覇 競馬のチャンピオンズカップ（共同 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaFjOPcBnvB_Q-PhzGHRCAiQHopDZLXgBs-Hup26V045rG7E6asurZqe4EBtP6x2xbCl2WZGhL" alt="ジュンライトボルトがG1制覇 競馬のチャンピオンズカップ（共同 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第23回チャンピオンズカップ（4日・中京11R1800メートルダート16頭、G1）3番人気のジュンライトボルト（石川裕紀人騎乗）が1分51秒9で優勝、G1制覇を果たした。1着賞金&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/etc/20221204-OYT1T50067/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ジュンライトボルトがＧＩ初制覇…チャンピオンズカップ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGgQkODdqRs819jfh5xZR4BCFwsOWXfSTLLo11JD3DGuu2emVU25QPIHADz9VtqEqR3-U4XYzv" alt="ジュンライトボルトがＧＩ初制覇…チャンピオンズカップ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 ダートの中距離王者を決める第２３回チャンピオンズカップ（ＧＩ）が４日、中京競馬場で行われ、ジュンライトボルトがＧＩ初制覇を果たした。</p></div>
            </div>
        </a><a href='https://news.netkeiba.com/?pid=news_view&no=215418'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【チャンピオンズCレース後コメント】ジュンライトボルト石川裕紀 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTb5gj7aJfzUfz1yfj9ZYPbt_YVmiwj3HQvs01iqnK8iGV0Cma2aLmyMbXnkVV___pl8KrJw6pn" alt="【チャンピオンズCレース後コメント】ジュンライトボルト石川裕紀 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>中京11Rの第23回チャンピオンズカップ(3歳以上GI・ダート1800m)は3番人気ジュンライトボルト(石川裕紀人騎手)が勝利した。勝ちタイムは1分51秒9(良)。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b970d9a383838726bf2456610196ea6a49bb8f41'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日曜メインレースの注目激走馬…中京１１Ｒチャンピオンズカップ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSlE2OstlOl08UrwfWIWNJUvKb-PeAUz0L6DG6tRDu1pFUoiaQMGRTjZCE-acHUa1aZj7C1xJNg" alt="日曜メインレースの注目激走馬…中京１１Ｒチャンピオンズカップ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>中京１１Ｒ・チャンピオンズカップ・Ｇ１・馬トク激走馬＝ジュンライトボルト ダート転向後、３戦目のシリウスＳで重賞初制覇。父キングカメハメハ、３代母に名牝エア&nbsp;...</p></div>
            </div>
        </a><a href='https://news.netkeiba.com/?pid=news_view&no=215365'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>薄井しお里のとっておきの穴馬見つけた!…チャンピオンズカップ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSV1w65gsWkdVcBkF5y_4mBgJey7WMLvAWA5ZFttWHRKgkE-PVYdQzqgQMdGqL6nwqzlH7kS8iB" alt="薄井しお里のとっておきの穴馬見つけた!…チャンピオンズカップ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ちょうど狙っていた馬が内枠に入ってくれました。 今回、私が選んだ穴馬はハピです。2枠3番に入りました。前々走は中京競馬場で行われたシリウスステークス・G3に出走。</p></div>
            </div>
        </a><a href='https://tospo-keiba.jp/breaking_news/24264'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【チャンピオンズカップ結果＆コメント】「みんなブラボー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0PzOtDiB7iGFDtFhRYjs14yFQ0WoSgD_OlT4nMcu6b9b00OWUWl6HegbR02vkIHEsik9ygR5q" alt="【チャンピオンズカップ結果＆コメント】「みんなブラボー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【チャンピオンズカップ結果＆コメント】ジュンライトボルトでＧⅠ初勝利の石川「マジみんなブラボー！」</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221204/k10013912761000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>競馬チャンピオンズカップ 優勝はジュンライトボルト G1初制覇</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8PHW8lQjjddE1XClekyZaQqRJmaAsHpSMJ0QiLFbvphpx12Sm-P52af4KOJyt4tSAhm7P9hXa" alt="競馬チャンピオンズカップ 優勝はジュンライトボルト G1初制覇" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】競馬のG1レース、チャンピオンズカップが中京競馬場で行われ、3番人気のジュンライトボルトが優勝し、初めてG1レースを制し…</p></div>
            </div>
        </a><a href='https://dir.netkeiba.com/keibamatome/detail.html?no=2515'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【チャンピオンズカップ 結果情報】今週も上がり馬！ 稲妻の如く ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR20qvOg0huDPp0mRXWEO-GciHcPy3Rf0tAd7XAWQqydc4fW0GbRV26-m1F_MfBou7mhHqjXFMM" alt="【チャンピオンズカップ 結果情報】今週も上がり馬！ 稲妻の如く ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第23回 チャンピオンズカップ（2022年12月4日 G1 中京 ダート1800m）はレッドソルダードが先手をマイペースで逃げる展開の中、中団後方からレースを進めた石川裕紀人&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/fddf7aae8c781b8996d963ecb21b6aca110a668a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【チャンピオンズＣ】ジュンライトボルト砂転向から一気に頂点 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBUJzgk_b5GabT_zufLQN9xwcsI9RH0NeVlhOFkKdn0cs9rmZA0W9JPev5-R11Wgg4CeZBJXZi" alt="【チャンピオンズＣ】ジュンライトボルト砂転向から一気に頂点 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＧⅠチャンピオンズカップ＝２０２２年１２月４日（日曜）３歳上、中京競馬場、ダート１８００メートル］</p></div>
            </div>
        </a>
        </Template></>;
}