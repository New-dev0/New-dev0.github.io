import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>カタール</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,カタール"/>
        <meta name="description" content="Trending News about カタール" /></Head><Template>
            <h1 style={{fontSize: "30"}}>カタール</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/default.jpg?exp=10800" alt="カタール"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/116142415ace0e16fee4d6f46153c237fd88f22e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカーワールドカップの「警備」に懸念 開催国カタールでテロ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT32EqsCHmkDPvM-jqNQ0LSTBOJvSBqhQ2OS1DosIw_IMFreHodAP1jTsP18Bxj0GthHobUKtPb" alt="サッカーワールドカップの「警備」に懸念 開催国カタールでテロ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>人口約２８０万人のカタールには約１カ月間の大会期間中、１２０万人を超える入国者が予想されており、警備の人員不足は深刻。テロ警戒のため、周辺の国々から治安部隊や軍&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b1401dc1376bd810f6400a6881e5f1d1951f89f3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【カタールＷ杯】歌姫デュア・リパが開会式出演を完全否定！ 開幕 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_J30SubhnZ528_CXhcmdMHPMaF8f3ucNsfdRGTFsr1mTjYSjQklcRLR4vK7hiZUjf2d_FTQSQ" alt="【カタールＷ杯】歌姫デュア・リパが開会式出演を完全否定！ 開幕 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー・カタールW杯の開幕が20日に迫ってきたが、開催国の人権問題が再びクローズアップされている。 世界的人気を集める英歌手デュア・リパ（27）が、自身の&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}