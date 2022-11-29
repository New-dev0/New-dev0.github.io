import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>和歌山県知事選挙</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,和歌山県知事選挙"/>
        <meta name="description" content="Trending News about 和歌山県知事選挙" /></Head><Template>
            <h1 style={{fontSize: "30"}}>和歌山県知事選挙</h1>
            <Image width={800} height={500} src="https://www.jimin.jp/news/information/img/204705_01.png" alt="和歌山県知事選挙"/>
            <h3>Recent News</h3>
            <a href='https://www.jimin.jp/news/information/204705.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>[和歌山県知事選]岸本周平氏が当選県民から圧倒的な支持を集める ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPgGaKor5MHUi7g1TwjP-po1WaVw3rbLPGMr2qcdfh2v51LBrQmvrLVHTxqH0WBgIzlnMFkb5E" alt="[和歌山県知事選]岸本周平氏が当選県民から圧倒的な支持を集める ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>任期満了に伴う和歌山県知事選挙の投開票が11月27日に行われ、わが党が推薦をした岸本周平氏が初めての当選を果たしました。投票率は39.86%で、前回より1.53ポイント&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/kansai-news/20221128/2000068585.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>和歌山県知事選 元衆院議員の岸本氏 初当選｜NHK 関西のニュース</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgzDf59o8JWXBtupyKZDlyKvB9XU22p8fMosxy2d5wF53h18KzgktZRohS1cTttyj4e9PUCYKp" alt="和歌山県知事選 元衆院議員の岸本氏 初当選｜NHK 関西のニュース" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】現職の引退に伴って、１６年ぶりに新人どうしの争いとなった和歌山県知事選挙は、無所属で、自民党、立憲民主党、国民民主党、社民党県連合が推薦し…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b602dc8fe0d5eec6a5da0312215c68e7b209f1a5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>和歌山県知事選挙で初当選を果たした岸本周平氏 改めて決意を示す ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNVta0nTN36AVo2_q2fl6rb5s5JGGnZu6dNcj2nFG94-JIHTX8VyE1QSBu4QWFlAgZ_HvuL_xY" alt="和歌山県知事選挙で初当選を果たした岸本周平氏 改めて決意を示す ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>県知事選挙で初当選を果たした岸本周平氏は、一夜明けた今日、「大きなご支持をいただき、責任の重さを痛感している」と改めて決意を示しました。</p></div>
            </div>
        </a><a href='https://www.nhk.or.jp/politics/articles/statement/92453.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>和歌山県知事選挙 岸本周平氏 初当選 自民 立民 国民など推薦</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIrrUmeEaUq-xsS9fUoW2amJ0dKxBEPkF8W5wpK6jKXjpYd7r_h-f3TsNnvftil99jKr4B04mg" alt="和歌山県知事選挙 岸本周平氏 初当選 自民 立民 国民など推薦" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現職の引退に伴って16年ぶりに新人どうしの争いとなった和歌山県知事選挙は、無所属で、自民党、立憲民主党、国民民主党、社民党県連合が推薦した元衆議院議員の岸本&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/election/local/result/20221127-OYT1T50117/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>和歌山知事選、前衆院議員の岸本周平氏が初当選…新人２氏を破る</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTB2wHjLMn1nZKHBPeZuXUVMTqNLot_rktVjJXQzi_8LZSrkwfNJcTtTsB6CsFnP6gdvXOMZYfP" alt="和歌山知事選、前衆院議員の岸本周平氏が初当選…新人２氏を破る" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 和歌山県知事選は２７日、投開票され、新人で前衆院議員の岸本周平氏（６６）（無所属＝自民、立民、国民、社民推薦）が、政治団体「新党くにもり」前&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCW6S6QQCSOXIE014.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>和歌山県知事選、元衆院議員の岸本周平氏が初当選</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQF7fpKWtgFcJjlQHQOFuMfyY-78K_PYh7BUs4bOXh7azotcOOLBHCdTJouG8G0TLSgZlFanr5p" alt="和歌山県知事選、元衆院議員の岸本周平氏が初当選" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>和歌山県知事選は27日投開票され、無所属新顔で元衆院議員の岸本周平氏（66）=自民、立憲、国民推薦=が、共産新顔で元和歌山市議の松坂美知子氏（66）と無所属新顔で元&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}