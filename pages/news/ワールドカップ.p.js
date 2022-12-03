import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ワールドカップ"/>
        <meta name="description" content="Trending News about ワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ワールドカップ</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221203/K10013911781_2212030630_1203064404_01_02.jpg" alt="ワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221203/k10013911781000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 得点ランキング 仏エムバペら3得点で5人が並ぶ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSngLCgFCKYnOfBor6ZIQYbkte5xeDI_jGCJjjEFetTU4JAMlgCTN5FtyLTlkFd09gPZQV_XR7d" alt="ワールドカップ 得点ランキング 仏エムバペら3得点で5人が並ぶ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会は、1次リーグのすべての試合が終わり、得点ランキングのトップには、3得点で5人が並んで…</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221203-OYT1T50063/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ｗ杯１６強出そろう、アジア勢は豪州・韓国も…日本は悲願の８強 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtIPAw70xuiNnfTECsXyTxuyD52mZAgs7ICxhSt0iuntL4QcbzlAp9UGKdXEuWUctCHR94eBSf" alt="Ｗ杯１６強出そろう、アジア勢は豪州・韓国も…日本は悲願の８強 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は２日（日本時間３日未明）、グループリーグ最後の４試合が行われ、Ｇ組はスイス代表、Ｈ組は&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/cfad717f195bc79142e680d275370e67afd57a0b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタールワールドカップ、決勝トーナメント進出16カ国が出揃う ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLvRRCnO5p4Da31tWRKQOUnRngvVJgl8BjfsKBA0-V37z3BBITIwIpZqZpFsXhkfQVWmO9LAp1" alt="カタールワールドカップ、決勝トーナメント進出16カ国が出揃う ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022のグループステージ全日程が終了し、決勝トーナメントに進出する16カ国が確定した。 アルゼンチン代表が初戦でサウジアラビア代表に&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/e03783431d2d055055f291f289c0dc96a1b90745'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタールW杯決勝T組み合わせが決定！ブラジルvs韓国、日本vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhVDQ8wZiuDmFVegecUfNZL1QYGrRLE6Eftpb2BYzaZFiUeRkCb5g2OmAzNw__9G917zluiH6w" alt="カタールW杯決勝T組み合わせが決定！ブラジルvs韓国、日本vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタール・ワールドカップ決勝トーナメントの組み合わせが決まった。 カタールW杯のグループステージ全日程が終了。ブラジルやアルゼンチン、フランス、イングランド&nbsp;...</p></div>
            </div>
        </a><a href='https://www.soccer-king.jp/news/world/wc/20221203/1716300.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本、豪州、韓国が突破！ 史上初アジア勢3カ国が決勝トーナメント ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfKTWhUJR5-nG2EniL1k3j0hdlQWhs8ap-9w66iTOjZK2LJxFum2CSDAvOwLpqDOyBZeee4tDB" alt="日本、豪州、韓国が突破！ 史上初アジア勢3カ国が決勝トーナメント ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>中東・アラブ地域で開催されているFIFAワールドカップカタール2022、アジア勢の躍進が止まらない。 今大会は開催国のカタールを含め、アジアから6カ国が出場···</p></div>
            </div>
        </a>
        </Template></>;
}