import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカー日本代表</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカー日本代表"/>
        <meta name="description" content="Trending News about サッカー日本代表" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカー日本代表</h1>
            <Image width={800} height={500} src="https://www.sanspo.com/resizer/Lh1QtxI8fQhmVfIEx3H5CfqSpRQ=/1200x630/filters:focal(559x562:569x572):quality(50)/cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/67GV6BLMIZM7VCOFEP7WKBNWYQ.jpg" alt="サッカー日本代表"/>
            <h3>Recent News</h3>
            <a href='https://www.sanspo.com/article/20221129-EIU6VCTJTZHCDKELAJTMGTGUWM/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＪＯＹ、サッカー日本代表へのＳＮＳ上の誹謗中傷に苦言「本当に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROF8xWHoin30yu1KI_bfPm9dWFRdSQdzWS3vDn1x-84X-TMn6w9EdxS6zyHnQuJOTzSUfKhc_t" alt="ＪＯＹ、サッカー日本代表へのＳＮＳ上の誹謗中傷に苦言「本当に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>タレント、ＪＯＹ（３７）が２８日、ツイッターを更新。サッカー・ワールドカップ（Ｗ杯）１次リーグ２戦目で日本がコスタリカに敗れ、一部の選手のＳＮＳに誹謗中傷が&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221128/k10013905561000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカーワールドカップ日本代表 “自力突破” SNSで話題に</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsPJSIzBFu77HyS-3lyv6lNRvLOk8PSL3d4J_3K5JTfIEOhqksdQItlk_XBlTRUTVkuelsDihg" alt="サッカーワールドカップ日本代表 “自力突破” SNSで話題に" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会で日本がコスタリカに競り負け、決勝トーナメントに進出できるかどうかは日本時間の12月2…</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221128/k10013905581000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【解説】サッカー日本代表 “わずかなミスで痛い黒星”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvhNlBaML2erZLkl2PNWsweUuZbMejP5C55bcuaHIcC3uUyC3u4HawWuKW9bAA8zm_XopXIrnm" alt="【解説】サッカー日本代表 “わずかなミスで痛い黒星”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】日本は1次リーグ初戦で優勝経験4回のドイツを相手に苦しみながらも歴史的な勝利をたぐり寄せましたが、コスタリカ戦は一転して…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/a150c4637a7017e9902dd661a387d816f84af0c3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>吉田麻也のミスを生贄にするな。サッカー日本代表、目を背けては ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKQIJIMuVL2jEG0t1vRDRzlLVc4s3SzoLyvRlb9jeFgJRAGFa2OXjG5pn370hLtrS9VzmNS4jK" alt="吉田麻也のミスを生贄にするな。サッカー日本代表、目を背けては ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー日本代表は現地時間27日、FIFAワールドカップカタール・グループE第2節でコスタリカ代表と対戦し、0-1で敗れた。この結果により両者は勝ち点で並び、グループ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQODH272GG0X21C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカー日本代表、一撃に沈む コスタリカに敗れる</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjJUZBK-hfK-qbQpOcFx3bEX40_4s0uMuulEwr4p0MRXNIL9fhSPSsNKCWwYjPjFi2bi8Pqj1e" alt="サッカー日本代表、一撃に沈む コスタリカに敗れる" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【アルラヤン=岸名章友】サッカーのワールドカップ（W杯）カタール大会第8日は27日、ドーハ近郊のアルラヤンのアハマド・ビン・アリ競技場で1次リーグE組第2戦の日本―&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footballchannel.jp/2022/11/28/post485913/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRODtuc0Sr-R3cX0Lp4oINtjnmwfpNeKGmEhb6RQp9qmFfaiLfUABLxcR6ig-jBBXAipQw37j8w" alt="..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー日本代表は27日、FIFAワールドカップカタール2022・グループリーグ第2節でコスタリカ代表と対戦。日本代表は終始ボールを握るも崩しきれず、終盤に被弾して&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/jp/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/%E3%83%A9%E3%82%A4%E3%83%96/japan-CostaRica-live-20221127/blted9463f12f7b6d3d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【試合テキスト速報】サッカー日本代表vsコスタリカ代表 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGMgNHSQY2G6XrXfOB9TgKD-YavaJtHx00N6ZSZqgNHkDYWwvGvNQd3kDwi7BXhfVMLkm-7B5h" alt="【試合テキスト速報】サッカー日本代表vsコスタリカ代表 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【11月27日19:00～】カタールW杯、日本代表vsコスタリカ代表のスタメン速報、試合のテキスト速報を実施！</p></div>
            </div>
        </a><a href='https://sportiva.shueisha.co.jp/clm/football/jfootball/2022/11/28/post_185/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本代表の敗因は何だったのか。３バック選択と慢心、遅攻に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWKueLKaYJOIu8mymESawoLrhUn4PlHLdB31dAzuFQ-JYT1k_6zpLJxTKPHnohwqL47VS6Sg9o" alt="日本代表の敗因は何だったのか。３バック選択と慢心、遅攻に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>森保一監督の３バック指向とメディア、ファンを含めた世の中の慢心。コスタリカ戦（０－１）の敗因はいろいろあるが、最上位にくるのはこのふたつだろう。</p></div>
            </div>
        </a><a href='https://soccerhihyo.futabanet.jp/articles/-/95977?page=1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカー日本代表・森保一監督の採点がまさかの｢0｣!! カタール ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvYHAOh7e0vg4pzxgqSVyL6pepr4QJXX0cGZk3WA91PFF3fi3VM_u5C51nRfaCY_RmWsXPG7Q_" alt="サッカー日本代表・森保一監督の採点がまさかの｢0｣!! カタール ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>１１月２７日／カタールＷ杯 グループＥ第２戦 日本代表 ０ー１ コスタリカ代表（アハマド・ビン・アリスタジアム） 日本代表を率いる森保一監督のコスタリカ代表戦で&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}