import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>オランダ代表</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,オランダ代表"/>
        <meta name="description" content="Trending News about オランダ代表" /></Head><Template>
            <h1 style={{fontSize: "30"}}>オランダ代表</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221204-00010000-abema-000-1-view.jpg?exp=10800" alt="オランダ代表"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/79d673547783f6dd6c69b6f730d70778fe3f9cb7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>オランダ代表、ベスト8一番乗り 堅守＆カウンターでアメリカ代表 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfT2o4f6WKYrbP2DMOq5l-FAW70oZEoFLvXG-zSKZfc47Q4MCw217l8k9gcmImt5wGIwq8c2Jb" alt="オランダ代表、ベスト8一番乗り 堅守＆カウンターでアメリカ代表 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA ワールドカップ カタール 2022・決勝トーナメント1回戦】オランダ3－1アメリカ（日本時間12月4日／ハリーファ国際スタジアム）</p></div>
            </div>
        </a><a href='https://www.footballchannel.jp/2022/12/03/post487377/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTq0uiK3cdirtEbUByv07XM_0heoqN8GroJ7-nUCjdQ8d5PJ9CpYrS1Eaob87tQNn05tt23ayJE" alt="..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール・ラウンド16、オランダ代表対アメリカ代表が現地時間3日に行われる。この試合に先立ち、オランダ代表の先発メンバーが発表された。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/ee55eb7c458172c7185c5c871385a38b272252af'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ダンフリース、ワールドカップ1試合で3得点に直接関与した ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRrCTxrWslj8EkFVVdMYA_-QZPc86CGd7t1YT_5FwfJy3D0AMYxEJAGMQJv7Gz8qaxHwdUahPe" alt="ダンフリース、ワールドカップ1試合で3得点に直接関与した ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022・決勝トーナメント1回戦（ラウンド16）が3日に行われ、オランダ代表が3－1でアメリカ代表を下した。同試合において、DFデンゼル・ダン&nbsp;...</p></div>
            </div>
        </a><a href='https://olympics.com/ja/news/football-fifa-world-cup-qatar-2022-day-14'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【サッカー】カタールW杯R16：オランダ代表、アルゼンチン代表が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRC1qTEQHcRp8nwI6rOhifkcT7p1SbnMX1Cyc7EHq993eKBlB6L67IMxtj2inuNZ7G9S-287Ozh" alt="【サッカー】カタールW杯R16：オランダ代表、アルゼンチン代表が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーの祭典”カタールW杯はノックアウトステージが開始。現地時間12月3日に行われた2試合では、オランダ代表がアメリカ合衆国代表を3-1で、アルゼンチン代表が&nbsp;...</p></div>
            </div>
        </a><a href='https://www.soccer-king.jp/news/world/wc/20221204/1716561.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>オランダが一番乗りで準々決勝へ！ 若きアメリカを下す…ダン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzAxHIW92thH1mP65QxiFfkQeu65rjzj3IltOthAuZAb7WGhHRv6D08Gc9hZCWsMqsuDrUyZCw" alt="オランダが一番乗りで準々決勝へ！ 若きアメリカを下す…ダン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022・決勝トーナメント1回戦（ラウンド16）が3日に行われ、オランダ代表とアメリカ代表が対戦した。 16チームによって頂点···</p></div>
            </div>
        </a><a href='https://www.football-zone.net/archives/420375'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【W杯】オランダ代表、衝撃弾の美しすぎる「20本パス図」 1966年 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRn7UaAjMGdUl4tv30hn9WShm7gcM8u2FMAFJZBSZunHrvn4XPP5lpofo5PSV28Fs9K7Xu_POUf" alt="【W杯】オランダ代表、衝撃弾の美しすぎる「20本パス図」 1966年 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現地時間12月3日のカタール・ワールドカップ（W杯）決勝トーナメント1回戦でオランダ代表とアメリカ代表が対戦。20本のパスをつないだオランダの先制ゴールに注目が&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221204-OYT1T50042/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>オランダとアルゼンチンが順当勝ち、２大会ぶり８強入り…メッシ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAxqK-ojFWqVqKP-xhmbOEEz3V1ss4yh7dJllgyuUlg6YK9buqevFH61RT0vkEs8Zqaivms5_2" alt="オランダとアルゼンチンが順当勝ち、２大会ぶり８強入り…メッシ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は３日（日本時間４日未明）、決勝トーナメントが始まり、グループリーグＡ組を１位通過した&nbsp;...</p></div>
            </div>
        </a><a href='https://www.soccer-king.jp/news/world/wc/20221203/1716462.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>初の頂点へ！ “オレンジ軍団”を率いるのは「ワールドカップ無敗」の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrysK9rWrAweR90zgd00WLZFW6cbQMynMEnMd01vPAB71wM_eoeLlZq26WJA19EeAPcSp6qcLh" alt="初の頂点へ！ “オレンジ軍団”を率いるのは「ワールドカップ無敗」の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022の優勝候補の一角に挙げられているオランダは、無事にグループステージを首位通過した。日本時間3日24時（4日0時）から行わ···</p></div>
            </div>
        </a>
        </Template></>;
}