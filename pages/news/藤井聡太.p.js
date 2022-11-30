import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>藤井聡太</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,藤井聡太"/>
        <meta name="description" content="Trending News about 藤井聡太" /></Head><Template>
            <h1 style={{fontSize: "30"}}>藤井聡太</h1>
            <Image width={800} height={500} src="https://www.yomiuri.co.jp/media/2022/11/752senk107main-1.jpg?type=ogp" alt="藤井聡太"/>
            <h3>Recent News</h3>
            <a href='https://www.yomiuri.co.jp/igoshougi/ryuoh/blog/20221126-SYT8T3560823/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>形勢は先手に傾く 藤井聡太竜王が繰り出した受けの勝負手に、広瀬 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSanpUYsuRwdDDx1jdHxMF4OqgZuvMlYknY_M69I4nNa9qruotbAp66fbgOJSpMvCKh065RtCRi" alt="形勢は先手に傾く 藤井聡太竜王が繰り出した受けの勝負手に、広瀬 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 第３５期竜王戦七番勝負第５局は100手を越えました。形勢は先手良し。△５一飛（図）は受けの勝負手です。先手は△５三と△同飛とすれば、飛車と金桂の２&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/12c2228bbb4ddf09cd44375f772112eef89ca598'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井聡太竜王 広瀬章人八段に逆転負けで七番勝負タイトル戦で初の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmjMN91l7B3_UBaRRw5VBckc72e14tuMrh-14_F1ckg3W9nh48oBSkvHbpGJ__XivaoRvttZX1" alt="藤井聡太竜王 広瀬章人八段に逆転負けで七番勝負タイトル戦で初の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の藤井聡太竜王（２０）＝王位、叡王、王将、棋聖＝に広瀬章人八段（３５）が挑戦している第３５期竜王戦七番勝負第５局は２６日、福岡県福津市の「宮地嶽神社」で&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/fukuoka-news/20221126/5010018268.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>福岡で竜王戦 藤井聡太五冠が第５局は負け 決着は次局以降に｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPVwVJEnr_3tLXE2nDjT2RwepaJ-qrkY3IK2adz6NY8s_mOj7yH9VB8PliiBPe-bidwTEk9YFj" alt="福岡で竜王戦 藤井聡太五冠が第５局は負け 決着は次局以降に｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】将棋の八大タイトルの最高峰、「竜王戦」の第５局が福岡県で行われ、挑戦者の広瀬章人八段が勝利し、タイトル奪取に向けて望みをつなぎました。 藤…</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCV7FTCQCVUCVL019.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>広瀬章人八段、藤井聡太竜王に2勝目 負けられなかったもう一つの訳</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTcjn_rwFEAbKSM2M2BV3kvVOeVMMqjO11h5pYcxMw_olOjArl_Co1AOtwXKBIN_7XZsRnFgRi0" alt="広瀬章人八段、藤井聡太竜王に2勝目 負けられなかったもう一つの訳" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の第35期竜王戦七番勝負（読売新聞社主催）の第5局が26日、福岡県福津市で前日から指し継がれ、挑戦者の広瀬章人八段（35）が藤井聡太竜王（20）=王位・叡王・&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/general/nikkan/news/202211260001075.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【竜王戦】初２敗の藤井聡太５冠、逆転のカウンター狙いも「急ぎ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【竜王戦】初２敗の藤井聡太５冠、逆転のカウンター狙いも「急ぎ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の最年少5冠、藤井聡太竜王（王位・叡王・王将・棋聖＝20）が広瀬章人八段（35）の挑戦を受ける、第35期竜王戦7番勝負第5局が25、26の両日、福岡県福津…</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221126-L5GAE4ZM7JBK3OJKHMY6SU7VWA/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井聡太竜王の初防衛は持ち越し 七番勝負で自身初の２敗目／将棋</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="藤井聡太竜王の初防衛は持ち越し 七番勝負で自身初の２敗目／将棋" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>野球、サッカー、ラグビー、ゴルフなどスポーツ全般、芸能の最新ニュースを掲載。サンケイスポーツ新聞（サンスポ）の公式サイトです。</p></div>
            </div>
        </a>
        </Template></>;
}