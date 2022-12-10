import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>フィギュアスケート</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,フィギュアスケート"/>
        <meta name="description" content="Trending News about フィギュアスケート" /></Head><Template>
            <h1 style={{fontSize: "30"}}>フィギュアスケート</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221210/K10013918931_2212100505_1210050716_01_02.jpg" alt="フィギュアスケート"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221210/k10013918931000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“りくりゅう” 三浦・木原ペア GPファイナル優勝 日本勢初</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSG7c6pF_VX6evUU7kiW-TBxuGm5dVZq4dCE9RUXvKVB0HRjBnPok1M4iY38Rp3jFr9LPDtZgPx" alt="“りくりゅう” 三浦・木原ペア GPファイナル優勝 日本勢初" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】フィギュアスケートのグランプリファイナルは9日、ペア後半のフリーが行われ、ショートプログラムを終えて首位の三浦璃来選手と…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b410827dff94b2bc19391a9d383ff18e9ffac2f5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【フィギュア】渡辺倫果は納得４位「ちゃんとした大会で初めてSP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCCV5JiksUnA_rXLmK-jMye_6662tJFWOK9wU6tkHhHKRaw73f9CQ7d-3cYhDRQ4ErwHYZnK9x" alt="【フィギュア】渡辺倫果は納得４位「ちゃんとした大会で初めてSP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケート：グランプリ（GP）ファイナル＞◇9日（日本時間10日）◇イタリア・トリノ◇女子ショートプログラム（SP） スケートカナダで初出場優勝し、&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221210/k10013919081000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>フィギュア GPファイナル 坂本花織が女子シングルSPで首位に</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPJrRcZG0tYEiL_1nZbxIjUIFwOQsm3fRQFRh9G8sT9aN9oYy-NoUcTLjEM8rNUvJmJjdNsMGk" alt="フィギュア GPファイナル 坂本花織が女子シングルSPで首位に" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】フィギュアスケートのグランプリファイナルは9日、女子シングル前半のショートプログラムが行われ、初優勝をねらう坂本花織選手…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/708e63c7e8af18d087059cc8794dce7c9381c85d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【フィギュア】三浦璃来＆木原龍一組が初GPファイナル制覇 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQja15e7puqM8hnhd7pXiHyi6xT4uxW__ExOnG8c5GCUaWL3-wCqiMYxIv3ZMjSUbmymoVMCEfD" alt="【フィギュア】三浦璃来＆木原龍一組が初GPファイナル制覇 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケート：グランプリ（GP）ファイナル＞◇9日（日本時間10日）◇イタリア・トリノ◇ペアフリー.</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/sports/news/202211300000243.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【フィギュア】坂本花織が首位発進、三原舞依２位、渡辺倫果４位 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【フィギュア】坂本花織が首位発進、三原舞依２位、渡辺倫果４位 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケート：グランプリ（GP）ファイナル＞◇9日（日本時間10日）◇イタリア・トリノ◇女子ショートプログラム（SP）. 世界女王の坂本花織（22＝&nbsp;...</p></div>
            </div>
        </a><a href='https://mainichi.jp/articles/20221207/hrc/00m/050/006000d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>フィギュアGPファイナル ペア・フリー速報 - 毎日新聞</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsVyFpqQJpUEwEvcNiZrj-CBfQV0vwptrbJHSkG0bsOkIjrxHvxaVHwNC8xSgeOg-6BC6cmaa1" alt="フィギュアGPファイナル ペア・フリー速報 - 毎日新聞" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>りくりゅう 日本ペアファイナル初V フィギュアスケートのグランプリ（GP）ファイナル第2日は9日、イタリア・トリノのパラベラ競技場でペアのフリーが行われ、「りく&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQDB2RN7QDBUQIP010.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【写真まとめ】りくりゅう 日本勢初のフィギュアGPファイナル制覇</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfcODY9mod-h7Wk1oflCXBK52aZMr-ZHPzIOdNlmSmggV594D1xgbIm9jVa3lS8Aom5VKNl5_B" alt="【写真まとめ】りくりゅう 日本勢初のフィギュアGPファイナル制覇" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>イタリア・トリノで開催されているフィギュアスケートのグランプリ（GP）ファイナルで9日、「りくりゅう」こと三浦璃来、木原龍一組が優勝しました。</p></div>
            </div>
        </a><a href='https://mainichi.jp/articles/20221210/ddm/035/050/029000c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>フィギュアスケート GPファイナル 宇野99．99 SP今季世界最高 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-oC2LKBjwXHB4UFw6hENMRmNw2Fw9aHhCB9XFvsC35qofguPpbWOBYQKOY5aSmuH8EaFa-zUA" alt="フィギュアスケート GPファイナル 宇野99．99 SP今季世界最高 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>山本2位、三浦3位、マリニン5位 フィギュアスケートのグランプリ（GP）ファイナルが8日、トリノで開幕し、ショートプログラム（SP）が行われた。男子は昨季世界選手権&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/e76264d7f244e0286d56fddd4469e465d435e06b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「４回転の神？」ミスが相次いだマリニンに辛辣な声！SP５位に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSPrEgykW3JS5kYRZyV8jKDGa8UCawmDGE1wfQFuL1XmVboqOq4zLKpl3UR9s0JcmSDGPjAv_B" alt="「４回転の神？」ミスが相次いだマリニンに辛辣な声！SP５位に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケートのグランプリ（GP）ファイナルがイタリア・トリノで開催された。現地12月８日には男子シングルのショートプログラム（SP）が行なわれ、宇野昌磨&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b662c159c6977dcc484d7ad344ce091772fdfe0a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>りくりゅう、SP首位発進 フィギュアスケートGPファイナル（毎日 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7Ci4sJxezSxsQMPNYq35tZBd7lp6VxoHwhuuubXdtcLLmnrbGiEtJaDU1Ix7nS6lTo4-t6UlO" alt="りくりゅう、SP首位発進 フィギュアスケートGPファイナル（毎日 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケートのグランプリ（GP）シリーズ上位6人・組で競うGPファイナルは8日、イタリア・トリノで開幕。ペアのショートプログラム（SP）があり、「りくりゅう」&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}