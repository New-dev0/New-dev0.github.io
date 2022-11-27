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
        </a><a href='https://www.yomiuri.co.jp/igoshougi/ryuoh/blog/20221126-SYT8T3560957/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>広瀬章人八段「まずは１局しのげた」、藤井聡太竜王「カウンター ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQHos8hq30pUuVUERXdruk5K6qIsBCUPOOkCYBgwsNOzpvJ6VXE-5hWUQFypChcBQZKkcV0Q_-" alt="広瀬章人八段「まずは１局しのげた」、藤井聡太竜王「カウンター ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】広瀬章人八段がシリーズ通算２勝目を挙げた第３５期竜王戦七番勝負第５局。広瀬八段と藤井聡太竜王の対局後、インタビューに応じました。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/5ba185607842b77eabf23b6c914fa1276f47134c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井五冠 タイトル初防衛なるか 竜王戦第5局 2日目（FNNプライム ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnSFJC6kyPiTphdvrYxsBKIodHjAOYzPQMY6LeJbmtPVndpxcl8MfvStTMwkgfcdML4VmZVhQB" alt="藤井五冠 タイトル初防衛なるか 竜王戦第5局 2日目（FNNプライム ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>竜王のタイトル・初防衛を目指す藤井聡太五冠（20）に広瀬章人八段（35）が挑む、将棋の竜王戦第5局2日目が、福岡・福津市で行われ、激しい終盤戦が繰り広げられている&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/12c2228bbb4ddf09cd44375f772112eef89ca598'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>藤井聡太竜王 広瀬章人八段に逆転負けで七番勝負タイトル戦で初の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGp453phjrx4xmXsPq9oo12q24IKKeuXkLEPtl42nONjGsemVhOwBq1IXlbTUc7gZehASgVrzx" alt="藤井聡太竜王 広瀬章人八段に逆転負けで七番勝負タイトル戦で初の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の藤井聡太竜王（２０）＝王位、叡王、王将、棋聖＝に広瀬章人八段（３５）が挑戦している第３５期竜王戦七番勝負第５局は２６日、福岡県福津市の「宮地嶽神社」で&nbsp;...</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_society/articles/000277374.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「竜王戦」広瀬八段が勝利 藤井五冠の防衛は持越し</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRA2iG5y22ZAIqjSMzb_RhXk667lsP3go7wtiJaXzPEEaKGqeCWfKiWNVpDSNRe_KMDZCIuSYpR" alt="「竜王戦」広瀬八段が勝利 藤井五冠の防衛は持越し" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>藤井聡太竜王（20）が初防衛に王手をかけている竜王戦七番勝負第5局は、挑戦者の広瀬章人八段（35）が勝利しました。 藤井竜王に広瀬八段が挑む竜王戦七番勝負第5局の2&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/general/nikkan/news/202211260001075.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【竜王戦】初２敗の藤井聡太５冠、逆転のカウンター狙いも「急ぎ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【竜王戦】初２敗の藤井聡太５冠、逆転のカウンター狙いも「急ぎ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>将棋の最年少5冠、藤井聡太竜王（王位・叡王・王将・棋聖＝20）が広瀬章人八段（35）の挑戦を受ける、第35期竜王戦7番勝負第5局が25、26の両日、福岡県福津…</p></div>
            </div>
        </a>
        </Template></>;
}