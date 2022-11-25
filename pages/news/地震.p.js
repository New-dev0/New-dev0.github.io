import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>地震</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,地震"/>
        <meta name="description" content="Trending News about 地震" /></Head><Template>
            <h1 style={{fontSize: "30"}}>地震</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221124-20213071-mrov-000-2-view.jpg?exp=10800" alt="地震"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/773bb7e3811b4dd928a3f3443fd6375773333f42'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>地震被害想定のパターン拡充を 石川県が震災対策部会（MRO北陸 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTqGmV3m67k6MRxKB0ZKSQoLAJ9nmUar3EqF6_b7LN_CWDQpp72Yd25xlc0EduJH1DnE4ydaZ-M" alt="地震被害想定のパターン拡充を 石川県が震災対策部会（MRO北陸 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>地震の被害想定の見直しをさらに進め、防災意識を高めます。 石川県の防災会議が11月24日開かれ、震災対策や被害想定の啓発に向けて、有識者らが意見交換しました。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/02f69b909676055aaea62a7814300d55ba943aa5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>熊本地方などで最大震度３の地震（TKUテレビ熊本）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTuyjZPJSCkMYCye4Rb5iNPbLmZZV7I__zLpEeoSGElcVYua6FGToVOrWp2sGJwikbyuzTDpnp" alt="熊本地方などで最大震度３の地震（TKUテレビ熊本）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>地震の情報です。 先ほど午後８時２０分ごろ熊本地方を震源とする最大震度３の地震が発生しました。 震源の深さは１０キロ、地震の規模を示すマグニチュードは４．０と&nbsp;...</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000001.000112485.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>万が一の地震により損壊した住宅の建替えを保証する「地震建替 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwFYeEgYB4CaAIHM8fg49r3KEmx57G5HfXKbbkJxv4IC40ZDl3K_DL5zbocHgMuesVjzfb25e6" alt="万が一の地震により損壊した住宅の建替えを保証する「地震建替 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>一般社団法人ハウスワランティのプレスリリース（2022年11月25日 09時06分）万が一の地震により損壊した住宅の建替えを保証する[地震建替保証 NAMAZU ナマズ]販売開始.</p></div>
            </div>
        </a><a href='https://www.fnn.jp/articles/-/449722'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>98年以来の改定に向け…地震の被害想定に「ブロック塀倒壊等の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvkbJBS99nQ_CVQN0d88gSRiqLQTLxHocq8H_jNDbfCINfe7Dzbu08QpmWKS_v2O-P8KtpzgRE" alt="98年以来の改定に向け…地震の被害想定に「ブロック塀倒壊等の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>地震の被害想定にブロック塀の倒壊や強い南風の影響を盛り込むことを提案しました。 石川県庁で開かれた震災対策部会は、地震の専門家など１２人が参加し、県内で地震&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}