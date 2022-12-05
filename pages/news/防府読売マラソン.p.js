import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>防府読売マラソン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,防府読売マラソン"/>
        <meta name="description" content="Trending News about 防府読売マラソン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>防府読売マラソン</h1>
            <Image width={800} height={500} src="https://www.yomiuri.co.jp/media/2022/12/20221205-OYTNI50005-1.jpg?type=ogp" alt="防府読売マラソン"/>
            <h3>Recent News</h3>
            <a href='https://www.yomiuri.co.jp/local/kyushu/news/20221205-OYTNT50013/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>防府読売マラソン、３位の橋本崚選手「次こそ五輪」…自己ベスト ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRTAStatIFmUtGWAAGzAOyah59Vo7bKn-pljNsUzlGRJaMZf8PhhEO4VLKiGwKr2VZlVCm9ZG0" alt="防府読売マラソン、３位の橋本崚選手「次こそ五輪」…自己ベスト ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 山口県防府市で４日に開かれた第５３回防府読売マラソン大会で、大分県出身の橋本 崚 （ りょう ） 選手（２９）（ＧＭＯインターネットグループ）が２&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOKC041DG0U2A201C2000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>防府読売マラソン、中村祐紀が初優勝 川内優輝は17位</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTySW4LKHQuKXr0WYcXfgn9IStMT1aKT7Xanzw3T_Tni5BVnlrlrZHWPAcdbAlaJe-NpDA0Jinv" alt="防府読売マラソン、中村祐紀が初優勝 川内優輝は17位" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>防府読売マラソンは4日、山口県防府市のキリンレモンスタジアム体育館前―キリンレモンスタジアム陸上競技場のコースで行われ、男子は中村祐紀（住友電工）が2時間8分29&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/402407053b4ac6767f59c07b94616ed508421916'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【速報】防府読売マラソン 一般参加の中村祐紀選手（２７）が優勝 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRq-67eU9dzmeiXyTmKz0mSZfZtJqJGRgJNgmaoW4xDpYNTIbpbGfqNmsXJr52bzD6Mxah81xWl" alt="【速報】防府読売マラソン 一般参加の中村祐紀選手（２７）が優勝 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第５３回防府読売マラソンが４日、山口県防府市で開かれ一般参加の中村祐紀選手（２７）が２時間８分２９秒で優勝した。 ことしから日本陸連のジャパンマラソン&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/sports/news/k10013912661000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>防府読売マラソン 男子 中村祐紀ら3人がパリ五輪選考MGC出場権 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1AayLlogM3aHBA-jiw52jyJ657jZp-VF0Ou5T55BVVaHSi4XI3uWOif1GMoaNKz-JO2SEmbFy" alt="防府読売マラソン 男子 中村祐紀ら3人がパリ五輪選考MGC出場権 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】スポーツに関する最新ニュースを毎日お届けします。野球、サッカー、大相撲など、競技ごとにニュースをチェック。</p></div>
            </div>
        </a><a href='https://www.nishinippon.co.jp/nsp/item/n/1023625/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3選手がMGC出場権獲得の防府読売マラソンに高岡寿成SDが一定の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR17eYnF1soBUOOLvh9DyW9ewfHlfyu0x2S4iavEriPpgMsA8qTYZzfjgtUzFkCGzyprSwKeBJa" alt="3選手がMGC出場権獲得の防府読売マラソンに高岡寿成SDが一定の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第53回防府読売マラソンが4日、山口県防府市で行われ、中村祐紀（住友電工）が2時間8分29秒で初優勝した。2位は2...｜西日本スポーツ（西スポ）は福岡ソフトバンク&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jiji.com/jc/article?k=2022120400324&g=spo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>川内、１７位に「情けない」 防府読売マラソン</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPxp_SCtCVCfpKd9tG7v6vObpPC1UsILx1UthTZ2SxReZI4qyVy8V2voZVDsBzf4o-S78Mu4XP" alt="川内、１７位に「情けない」 防府読売マラソン" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>防府読売マラソンの常連で過去に４度の優勝を誇る３５歳の川内は、２時間１６分３８秒の１７位に終わった。１１月上旬に右脚を痛め、その後もレースを重ねてきた&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221204-WEV66TWABRHNTEA7EQUDYXYVQQ/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>川内優輝「過去最低タイム・順位」２時間１６分３８秒で１７位 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="川内優輝「過去最低タイム・順位」２時間１６分３８秒で１７位 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>防府読売マラソン（４日、キリンレモンスタジアム体育館前―キリンレモンスタジアム陸上競技場）５度目の優勝を狙った川内優輝（３５）＝あいおいニッセイ同和損保＝&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}