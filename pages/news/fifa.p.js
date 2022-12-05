import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA"/>
        <meta name="description" content="Trending News about FIFA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221203-00287440-theanswer-000-1-view.jpg?exp=10800" alt="FIFA"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/1511b01239e97c622ae49fc93f1b85028b0af404'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本VAR弾、FIFAが決定的証拠を出したのに論争止まず「明らかに ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQVe3p-lbjnJjnRcFviigoi1LfBq02DT3vmxCbpgqCl0o2iRDJcATJz3DdnEprD-vLFX_rhsT1" alt="日本VAR弾、FIFAが決定的証拠を出したのに論争止まず「明らかに ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのカタール・ワールドカップ（W杯）は1日（日本時間2日）、E組の日本がスペインに2-1で逆転勝ちし、決勝トーナメント（T）進出を決めた。1-1の後半6分に田中碧&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/japan-ao-tanaka-202212022000/blt03b3813834e6d0fc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFAがスペイン戦決勝点の田中碧のゴールに公式見解「他のカメラ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgJl61lTL14r_8SAeZXLfYZ0HY-NSxIueujXPIMCcMPrTlKIx-EtA4FbljlQ3cns1fHOXJgc4d" alt="FIFAがスペイン戦決勝点の田中碧のゴールに公式見解「他のカメラ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【W杯 最新情報】スペイン代表戦の決勝点となった日本代表の田中碧のゴールにはさまざまな意見が出ている。</p></div>
            </div>
        </a><a href='https://www.sponichi.co.jp/soccer/news/2022/12/03/kiji/20221203s00002014122000c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>三笘折り返しのVAR判定に海外でも物議 FIFAに“証拠”の情報公開 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="三笘折り返しのVAR判定に海外でも物議 FIFAに“証拠”の情報公開 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【FIFAワールドカップ（W杯）カタール大会1次リーグE組 日本2－1スペイン （ 2022年12月2日 ハリファ国際スタジアム ）】 三笘の折り返しでボールがゴールラインを割っ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football-zone.net/archives/420223'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【W杯】三笘の“世界大注目アシスト”、FIFAが「ゴールラインカメラ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8EinZysmr-V02x4ORX-Ezw-Dj7AIVHvY9bxRppWFD-9WSCgAXrwB2kBSImTOWMmmHdYM4ED4d" alt="【W杯】三笘の“世界大注目アシスト”、FIFAが「ゴールラインカメラ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本代表は現地時間12月1日、カタール・ワールドカップ（W杯）グループリーグ最終戦でスペイン代表に2-1で勝利した。この2点目のプレーでボールがゴールラインを越え&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/f48c4026abf4b7d20cfb9c2c34f52b1b91607e01'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA、三笘の折り返しは「ラインを出ていない」と見解 W杯（毎日 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT32EqsCHmkDPvM-jqNQ0LSTBOJvSBqhQ2OS1DosIw_IMFreHodAP1jTsP18Bxj0GthHobUKtPb" alt="FIFA、三笘の折り返しは「ラインを出ていない」と見解 W杯（毎日 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>国際サッカー連盟（FIFA）は2日（日本時間3日）、ワールドカップ（W杯）カタール大会1次リーグE組の日本―スペイン戦で田中碧の決勝点につながった三笘薫の折り返しの&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221203/k10013911961000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>W杯 三笘クロス「ボール全体外に出てない証拠得た」 FIFA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCDp_AbKtH6vpyR8nDCHNz3WaNzRdcTyIAzVGgmIyzdQ5X2sO_6WmbVwmYPr3dVLFKQZdSg32I" alt="W杯 三笘クロス「ボール全体外に出てない証拠得た」 FIFA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】日本対スペインの試合で、日本の勝ち越しゴールにつながった三笘薫選手のクロスボールについて、FIFA＝国際サッカー連盟は、…</p></div>
            </div>
        </a><a href='https://www.gentosha.jp/article/22362/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA ワールドカップ カタール2022 グループE VSドイツ_ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRigsAaOqf2fuHWAM5EFNGRTXsgHv5PaphHzX76PxEctrz5XpOAycJZEgEUHHEhgkzsG68EaUAZ" alt="FIFA ワールドカップ カタール2022 グループE VSドイツ_ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ワールドカップは人を駄目にする。 ワールドカップが始まってしまうと、もう他にはなにもできなくなる。 仕事はしない、飲みにも出かけない、試合開始1時間前には&nbsp;...</p></div>
            </div>
        </a><a href='https://sp.m.jiji.com/article/show/2860421'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＦＩＦＡ、日本の決勝点を説明＝「ボールの一部がライン上に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQgua-MkrZywLuNwY9eafIwt2bkmtr71pHpyhyrN8FORluFDKcMsjQqntRSX9UMsIO8MeAFR8lB" alt="ＦＩＦＡ、日本の決勝点を説明＝「ボールの一部がライン上に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ドーハ時事】サッカーのワールドカップ（Ｗ杯）カタール大会１次リーグＥ組最終戦で、日本がスペインからＶＡＲ検証の末に奪った決勝点の場面について、国際サッカー&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}