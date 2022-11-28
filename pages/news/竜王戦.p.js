import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>竜王戦</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,竜王戦"/>
        <meta name="description" content="Trending News about 竜王戦" /></Head><Template>
            <h1 style={{fontSize: "30"}}>竜王戦</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221126/K10013904531_2211261858_1126190909_01_02.jpg" alt="竜王戦"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221126/k10013904531000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>将棋「竜王戦」第5局 藤井五冠敗れる タイトル防衛は持ち越し</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpEK32u-KRxKaeej32x4sKnuldbsF5How8NtVbGRxF3r0dQNStMb7_viOKP6WGBE8jRRbcHGys" alt="将棋「竜王戦」第5局 藤井五冠敗れる タイトル防衛は持ち越し" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】将棋の八大タイトルの最高峰、「竜王戦」の第5局が福岡県で行われ、挑戦者の広瀬章人八段が勝利し、タイトル奪取に向けて望みを…</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/igoshougi/ryuoh/20221126-OYT1T50231/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>終盤ミスが出た藤井竜王、七番勝負タイトル戦で初の２敗…広瀬八 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQn5Fjg-MU6VxI-XnMY5Nk6CgnGqJz-XkJWVbnz2OiuQZ1PvTfUuNZ9O6xgiQSiAklbAwdErJ-W" alt="終盤ミスが出た藤井竜王、七番勝負タイトル戦で初の２敗…広瀬八 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 将棋の最高棋戦で、藤井聡太竜王（２０）に広瀬章人八段（３５）が挑む第３５期竜王戦七番勝負（読売新聞社主催、特別協賛・野村ホールディングス）の&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/12c2228bbb4ddf09cd44375f772112eef89ca598'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井聡太竜王 広瀬章人八段に逆転負けで七番勝負タイトル戦で初の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmjMN91l7B3_UBaRRw5VBckc72e14tuMrh-14_F1ckg3W9nh48oBSkvHbpGJ__XivaoRvttZX1" alt="藤井聡太竜王 広瀬章人八段に逆転負けで七番勝負タイトル戦で初の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の藤井聡太竜王（２０）＝王位、叡王、王将、棋聖＝に広瀬章人八段（３５）が挑戦している第３５期竜王戦七番勝負第５局は２６日、福岡県福津市の「宮地嶽神社」で&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/general/nikkan/news/202211260001075.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【竜王戦】初２敗の藤井聡太５冠、逆転のカウンター狙いも「急ぎ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【竜王戦】初２敗の藤井聡太５冠、逆転のカウンター狙いも「急ぎ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の最年少5冠、藤井聡太竜王（王位・叡王・王将・棋聖＝20）が広瀬章人八段（35）の挑戦を受ける、第35期竜王戦7番勝負第5局が25、26の両日、福岡県福津…</p></div>
            </div>
        </a><a href='https://www.tokyo-np.co.jp/article/216311'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>将棋の藤井、竜王戦２敗目 広瀬との７番勝負第５局</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShqOZ7J2ARqf0fHl7MgesmYZfkqQTOTP9NUODMhxNpYxOuFglmtJ9q6RnTBPMTRG13Q3y1kQkt" alt="将棋の藤井、竜王戦２敗目 広瀬との７番勝負第５局" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の藤井聡太竜王＝王位・叡王・王将・棋聖との五冠＝（２０）に広瀬章人八段（３５）が挑む第３５期竜王戦７番勝負の第５局は２５、２６の両...</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_society/articles/000277374.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「竜王戦」広瀬八段が勝利 藤井五冠の防衛は持越し</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRA2iG5y22ZAIqjSMzb_RhXk667lsP3go7wtiJaXzPEEaKGqeCWfKiWNVpDSNRe_KMDZCIuSYpR" alt="「竜王戦」広瀬八段が勝利 藤井五冠の防衛は持越し" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>藤井聡太竜王（20）が初防衛に王手をかけている竜王戦七番勝負第5局は、挑戦者の広瀬章人八段（35）が勝利しました。 藤井竜王に広瀬八段が挑む竜王戦七番勝負第5局の2&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}