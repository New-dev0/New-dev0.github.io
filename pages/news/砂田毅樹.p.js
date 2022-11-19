import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>砂田毅樹</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,砂田毅樹"/>
        <meta name="description" content="Trending News about 砂田毅樹" /></Head><Template>
            <h1 style={{fontSize: "30"}}>砂田毅樹</h1>
            <Image width={800} height={500} src="https://www.baystars.co.jp/images/common/ydb_ogp.png" alt="砂田毅樹"/>
            <h3>Recent News</h3>
            <a href='https://www.baystars.co.jp/news/2022/11/1118_07.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>砂田毅樹選手と中日ドラゴンズ京田陽太選手のトレードについて ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSpnbiPyS0qKPGC3NIO_87dsfAatbVOWyyZVMbYUO4EwfqYTd3OYl9emT9Pys0ktgnGZQvqch70" alt="砂田毅樹選手と中日ドラゴンズ京田陽太選手のトレードについて ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>横浜DeNAベイスターズは、砂田毅樹選手と中日ドラゴンズ所属の京田陽太選手によるトレードに合意いたしましたので、お知らせいたします。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/a052859d8730433b2f3f55c5cd1181d3f57c88f0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>トレードで中日新加入のDeNA・砂田毅樹投手「ベイスターズに恩を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGjEUudFy7IxX09Qd1vnU9Jh6s3FUMfo2BCqDnWNSHT31lrecCtl5x5G4iT3_DAWfyi1WogVsw" alt="トレードで中日新加入のDeNA・砂田毅樹投手「ベイスターズに恩を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DeNAから中日へのトレードが発表された砂田毅樹投手が18日、古巣DeNAの球団公式ツイッターに動画を公開。スーツ姿で惜別のメッセージを語った。 「このたび中日&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221118/k10013895921000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>中日 京田陽太とDeNA 砂田毅樹 交換トレード発表</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-4qZV9lXfirqkI2T2sycLC_9VlyzkzQw9rnmtp0SWBT95KzfvUBDMii5XImAXuOsP4gzarLly" alt="中日 京田陽太とDeNA 砂田毅樹 交換トレード発表" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】プロ野球、中日の内野手・京田陽太選手とDeNAのリリーフ・砂田毅樹投手の交換トレードが両球団から発表されました。</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221119-AQV2R6T6SVJQ3JXO57UYHZSK7I/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＤｅＮＡ、砂田毅樹と中日・京田陽太を電撃大型トレード！ 大型 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAN25k_9HJ7bnaP0lawvn8Tz7J-X1N5dbd8910G74UkMtQhkhCjn0KGwnc8hjMPWG1zRrH8NNQ" alt="ＤｅＮＡ、砂田毅樹と中日・京田陽太を電撃大型トレード！ 大型 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＤｅＮＡ・砂田毅樹投手（２７）と中日・京田陽太内野手（２８）の交換トレードが成立したことが１８日、両球団から発表された。ＤｅＮＡは手薄だった内野の中堅層に、&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/baseball/news/202211180000350.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>電撃トレード！中日京田陽太とDeNA砂田毅樹の交換成立 中日は３ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="電撃トレード！中日京田陽太とDeNA砂田毅樹の交換成立 中日は３ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新たな電撃トレードが成立した。中日京田陽太内野手（28）とDeNA砂田毅樹投手（27）の交換トレードが成立したことが18日、分かった。二遊間の補強を模索するD… - 日刊&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kanaloco.jp/sports/baseball/baystars/article-950939.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＤｅＮＡ砂田毅樹と中日・京田陽太のトレード成立 | カナロコ by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_oTIPgPGZN-C_r0cfFCbtY9lCDHCR8jkFolU7bQ3VXELzcjeyfdBTQ_U-mueS3eLl4CpeteZi" alt="ＤｅＮＡ砂田毅樹と中日・京田陽太のトレード成立 | カナロコ by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>横浜ＤｅＮＡの砂田毅樹投手（２７）と中日の京田陽太内野手（２８）のトレードが成立した。１８日に両球団が発表した。砂田は今季１５試合に登板し防御率５・６８。７&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/baseball/news/202211180000419.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【こんな人】スタンド黙らせた砂田毅樹のすごみ 阿部慎之助を封じ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【こんな人】スタンド黙らせた砂田毅樹のすごみ 阿部慎之助を封じ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DeNA砂田のすごみに触れたのは、東京ドームで行われた16年の巨人とのCSファーストステージだった。1勝1敗で迎えた第3戦、村田修一のソロで同点にされた直後の…</p></div>
            </div>
        </a>
        </Template></>;
}