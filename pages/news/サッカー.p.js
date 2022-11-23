import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカー"/>
        <meta name="description" content="Trending News about サッカー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカー</h1>
            <Image width={800} height={500} src="https://www.jfa.jp/img/cache/63244961-8fc4-4a1a-b230-3360d3093d95.jpg" alt="サッカー"/>
            <h3>Recent News</h3>
            <a href='https://www.jfa.jp/news/00031062/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本サッカーミュージアム休館のお知らせ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgQhVa82oLmIb-UVz7lfzq8QL9XvHpDUA12FiwphWa_HXzWAWaSy37oGmNyaSnLhbYusYue5Zp" alt="日本サッカーミュージアム休館のお知らせ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本サッカーミュージアム（館長：大仁邦彌）は、来年予定されている日本サッカー協会（JFA）の新オフィス移転に伴い、2023年2月5日(日)をもって休館することになり&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/5a779ef77827f918d7d8acc8ed7290deb1d3e7e9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカー通の手越祐也 Ｗ杯開幕でも地上波からお呼びなしの寂しさ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMoa0ObcjVnndJYjrGkBzYbBV_bElKwEItDIhZk3RbMnJB4O0QALg7ZC71h2tvpaXY79XtS-X4" alt="サッカー通の手越祐也 Ｗ杯開幕でも地上波からお呼びなしの寂しさ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのカタールＷ杯が日本時間11月20日に開幕し、熱戦が繰り広げられている。 芸能界きってのサッカー通といえば、ユーチューバーに転身した元ＮＥＷＳの手越祐也&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/f34e9d1eb6a8b1e9eedc542612e667beaf7ffb44'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＦＩＦＡサッカーワールドカップ 日本戦を前に福島県内でも気運 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTB2kIv9pVGViZiKuLZmNDe8hCWWtZ2QNohabM5xsUJutO9Q3glEkRvaJgY1XK-qsfNWZ-536Xc" alt="ＦＩＦＡサッカーワールドカップ 日本戦を前に福島県内でも気運 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>スーパースポーツゼビオ郡山西ノ内店 田島里紗さん「お子様用のセットのウェアになるんですけども、上下プラス靴下もついているということで、お孫さんに買う方、あとは&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/8452b01ac1413d34bae989334a4666d5b8d02b82'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本代表に梅干し贈りエール Ｗ杯サッカー、田辺市のメーカー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRA5-Yc5ixrDTN5QffOOnoceu7uI-p_Vhoh3pmMSBRYYFgHipcebq8Z-k_acwF85ZEMVML4UBN5" alt="日本代表に梅干し贈りエール Ｗ杯サッカー、田辺市のメーカー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>梅干し・梅酒の製造販売「中田食品」（和歌山県田辺市下三栖）は、サッカーワールドカップ（Ｗ杯）カタール大会に出場している日本代表に、はちみつやしそ、白干しなど&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sponichi.co.jp/soccer/news/2022/11/22/kiji/20221122s00002000388000c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本サッカーミュージアムは来年2月5日をもって休館へ JFA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="日本サッカーミュージアムは来年2月5日をもって休館へ JFA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本サッカー協会（JFA）は22日、来年予定されている新オフィス移転に伴い、日本サッカーミュージアム（館長：大仁邦弥）を2023年2月5日をもって休館すると発表した。</p></div>
            </div>
        </a>
        </Template></>;
}