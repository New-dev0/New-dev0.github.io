import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>京阪杯</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,京阪杯"/>
        <meta name="description" content="Trending News about 京阪杯" /></Head><Template>
            <h1 style={{fontSize: "30"}}>京阪杯</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221127-00000254-spnannex-000-3-view.jpg?exp=10800" alt="京阪杯"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/25c5f7b806b91a983d01313708b575791ce1c39f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京阪杯】今村聖奈、18歳ラスト騎乗 テイエムスパーダで重賞2 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwoI7SyHnttyC3pSuHmiqsUFhtsHBQI6z18Wuk82HY5EP8fE4UAeDdqd1JM1cqHDMOwGGXHmj5" alt="【京阪杯】今村聖奈、18歳ラスト騎乗 テイエムスパーダで重賞2 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>G3・京阪杯（2022年11月27日 阪神芝1200メートル） 女性年間最多勝を更新している今村聖奈（寺島）は、7月のG3・CBC賞で重賞初制覇を飾った思い出のパートナー、&nbsp;...</p></div>
            </div>
        </a><a href='https://news.netkeiba.com/?pid=news_view&no=214674'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京阪杯レース後コメント】トウシンマカオ鮫島克駿騎手ら | 競馬 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbAco3p0PgoVMR1C8MVbWNWQGXWW9DORSWLc6RpuyiDaNC16VprBaC8cMTUhetN_fcxFeS7okW" alt="【京阪杯レース後コメント】トウシンマカオ鮫島克駿騎手ら | 競馬 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>阪神12Rの第67回京阪杯(3歳以上GIII・芝1200m)は1番人気トウシンマカオ(鮫島克駿騎手)が勝利した。勝ちタイムは1分7秒2(良)。1馬身1／4差の2着に10番人気キルロード、&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/race/article/general/20221127-XSMDPOCS3BJIJPSI4D45KQVVBU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京阪杯】１番人気の３歳馬トウシンマカオが差し切って重賞初Ｖ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDSiN-ksPMoihoOJLVwnGn-rQJYMpAOYovjlu-ZPpMkd0kgqz_q52Xr-g5ZJDaMTDNkJ7ui7eS" alt="【京阪杯】１番人気の３歳馬トウシンマカオが差し切って重賞初Ｖ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>１１月２７日の阪神１２Ｒで行われた「第６７回京阪杯」（３歳以上オープン、ＧⅢ、芝・内１２００メートル、別定、１６頭立て、１着賞金＝４１００万円）は、鮫島克駿&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/746d1e9dadfe1325c092c62abb89265492f65dba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京阪杯】１８歳最後の騎乗だった今村聖奈テイエムスパーダは６ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTTnYQ-no8Bjpnu4ekk1-f_fIa39Ht02UKQj6ZZPBGjsalKHPxnIKlaCToeMGvpdkRmnb4Muoxl" alt="【京阪杯】１８歳最後の騎乗だった今村聖奈テイエムスパーダは６ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＧⅢ京阪杯＝２０２２年１１月２７日（日曜）３歳上、阪神競馬場、芝内１２００メートル］ 今年７月のＧⅢ・ＣＢＣ賞で鮮烈な逃げ切り勝ちを決めた今村聖奈＆テイエム&nbsp;...</p></div>
            </div>
        </a><a href='https://hochi.news/articles/20221127-OHT1T51292.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京阪杯】3歳馬トウシンマカオが１番人気に応えて重賞初制覇 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTd7-uRDwo_H-ZQjmc81gCPuNWPqsY5pFaBvQexVtJVMq8PrsR_j79F-jOtr_h4Q_duzv81RSCo" alt="【京阪杯】3歳馬トウシンマカオが１番人気に応えて重賞初制覇 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第６７回京阪杯・Ｇ３は２７日、阪神競馬場で行われ、成長株の３歳馬トウシンマカオが単勝１番人気に応えて重賞初制覇を果たした。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/59a48f0fc3b3e94894a8eaa3139db6652ec86952'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京阪杯】「先行馬だらけ」でも好都合の穴馬 前走9着も“ノーカン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSF2QQZig554YJxz8h_ude9JoiTFSVPMrvgibBypmYIiatYTOLB3YX6_LEHc_j3dMTDuqIsS7fT" alt="【京阪杯】「先行馬だらけ」でも好都合の穴馬 前走9着も“ノーカン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>西の穴将軍 田崎TM ヴァトレニ「初めて1200mを使った夏の北海道シリーズ2戦でその適性を十分に示したが、賞金面でスプリンターズSは断念せざるを得なかったもの。</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOKC2725T0X21C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>トウシンマカオが重賞初V 競馬の京阪杯</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="トウシンマカオが重賞初V 競馬の京阪杯" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第67回京阪杯（27日・阪神12R1200メートル芝16頭、GⅢ）1番人気のトウシンマカオ（鮫島克駿騎乗）が1分7秒2で優勝し、重賞初勝利を挙げた。5番手で最後の直線に入り、&nbsp;...</p></div>
            </div>
        </a><a href='https://tospo-keiba.jp/breaking_news/23886'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京阪杯結果＆コメント】２番人気サンライズオネストは１３着に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTa8NsJwdaB0XwAIygji5pqYFXVv-sktzwLTRFwtFU7NuIdUH05mMsN-gGQ_-nXZeR_WNQp50fv" alt="【京阪杯結果＆コメント】２番人気サンライズオネストは１３着に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>［ＧⅢ京阪杯＝２０２２年１１月２７日（日曜）３歳上、阪神競馬場、芝内１２００メートル］. トウシンマカオ１着・鮫島駿「前走（オパールＳ１着）がすごく強かった&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/race/article/general/20221127-R6CHIKTOIFK77HPTU3P6PBV6SY/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【京阪杯】前走の再現を期待！斉藤トウシンマカオ</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【京阪杯】前走の再現を期待！斉藤トウシンマカオ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>３歳トウシンマカオが連勝で重賞タイトルを奪取する。同舞台の前走・夕刊フジ杯オパールＳは大外枠から中団で折り合いをつけ、直線は鋭い決め手を発揮して鮮やかな差し&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}