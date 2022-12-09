import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>現役ドラフト</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,現役ドラフト"/>
        <meta name="description" content="Trending News about 現役ドラフト" /></Head><Template>
            <h1 style={{fontSize: "30"}}>現役ドラフト</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221209/K10013917541_2212082031_1209073000_01_02.jpg" alt="現役ドラフト"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221209/k10013917541000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>プロ野球 きょう「現役ドラフト」初めて開催</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0GHl0k8Y4EIDyp4-xMM-rtO3dgaPATSPsbH9aiu0UjE9XT0xfJzqCKerc1Piu_u68xcPqJgw9" alt="プロ野球 きょう「現役ドラフト」初めて開催" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】プロ野球で出場機会に恵まれない選手の移籍を活性化するため、各球団がリストアップした現役選手をほかの球団が指名して移籍でき…</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/baseball/news/202212090000088.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【一覧】パ・リーグ 現役ドラフトの対象になりえる選手一覧</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【一覧】パ・リーグ 現役ドラフトの対象になりえる選手一覧" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「現役ドラフト」が9日午後1時より行われる。出場機会に恵まれない選手の移籍を活性化する制度で今オフからの導入が決まった。各球団、必ず1人は出て、1人は入る仕組…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/29d50d8957f9f403849d3b441a11429dd8dfed0d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>現役ドラフトはどのような制度？各球団、必ず１人は出て１人は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFb2MQsE1DZozlPx8vzNMbtpAp0skelMytJs_c63tgoK8gE5zDSQh1nz_k_cPGzi1NIwblTxH3" alt="現役ドラフトはどのような制度？各球団、必ず１人は出て１人は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「現役ドラフト」が9日午後1時より行われる。出場機会に恵まれない選手の移籍を活性化する制度で、日本野球機構（NPB）とプロ野球選手会の数年にわたる話し合いの末、&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/41e07d82c30710acc92114c794a32eb73cc12f4c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NPB現役ドラフト、きょう初開催 各球団の指名選手・移籍先は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqAJrMOLUb0hY5wzEjpa2mRKzMNfZQfs5-dt4DDF0mlihq7LG5_W6R_RUz2F5dChVgAPn34QIN" alt="NPB現役ドラフト、きょう初開催 各球団の指名選手・移籍先は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本野球機構（NPB）は12月9日、プロ野球選手会の要望により実現した「現役ドラフト」を初開催する。全12球団が現役ドラフト対象選手2人以上を選出し、各球団最低1人は&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221209-VLLFCW2LCVMKHFMPEKHSUJU2FU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>国内プロ野球初の試み「現役ドラフト」、９日１３時から非公開で ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyf4KkaRAqSNeRkSqLbr-35Y4SJ7n659mdlfixqdODiumUxrmZ9V6qeQxULds4OIlwuFtDbuyY" alt="国内プロ野球初の試み「現役ドラフト」、９日１３時から非公開で ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>各球団は保留者名簿の中から、来季の年俸が５０００万円以下（１人に限り年俸５０００万円以上、１億円以下の選手も選択可）などの条件付きでドラフト対象となった２人以上&nbsp;...</p></div>
            </div>
        </a><a href='https://www.baseballchannel.jp/npb/145655/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMhx0mgQuMdgj4WIBRo1JKrFVleP0lMDFQZr0fzodmaJBg2U4IOAkP4GrSjCCwl1s1ytdL2s7A" alt="..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本野球機構（NPB）は9日、2022年現役ドラフト制度を初開催。全12球団の指名選手が発表された。同制度は、各球団が2人以上の対象選手を選出し、必ず1人以上指名する仕組み&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sponichi.co.jp/baseball/news/2022/12/09/kiji/20221209s00001173115000c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>9日初開催注目の「現役ドラフト」 非公開で各球団最低1人指名</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="9日初開催注目の「現役ドラフト」 非公開で各球団最低1人指名" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>スポーツニュース、芸能ニュースはお任せ！スポーツニッポン新聞社の公式サイトです。</p></div>
            </div>
        </a>
        </Template></>;
}