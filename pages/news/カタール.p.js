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
            <Image width={800} height={500} src="https://cdn-1.motorsport.com/images/amp/YKEnDPr0/s6/fabio-quartararo-yamaha-factor.jpg" alt="カタール"/>
            <h3>Recent News</h3>
            <a href='https://jp.motorsport.com/f1/news/f1-motogp-fifa-worldcup-Losail-lusail/10404410/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタールで開幕したFIFAワールドカップ。サウジが大金星挙げた ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaaDpAh6fqR_oxwOzwWSpHgG9UNfT5B-2N1SNVNfPEeMueeA1992VVI6Lp2sSm1t9jVXCjSLGI" alt="カタールで開幕したFIFAワールドカップ。サウジが大金星挙げた ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのFIFAワールドカップが始まり、サウジアラビア代表や日本代表が優勝候補を破る大金星を上げている。サウジ対アルゼンチンの試合が行なわれたルサイルは、&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/0fdb1a74caed502b1eef4c03412f47539d05b68f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宮根誠司 質問聞き返すカタール現地記者にツッコミ「何についてっ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlDv2TaSqngTuG-V5TEdaD6-xAs2rcbD6uXwaP_kuLF8G2EJ-R1VabPanHsZqBbDAKZIdy1Gd7" alt="宮根誠司 質問聞き返すカタール現地記者にツッコミ「何についてっ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>キャスターの宮根誠司が２４日、日本テレビ系「情報ライブ ミヤネ屋」に出演。Ｗ杯カタール大会で現地からレポートする記者に辛らつなツッコミをかました。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b4fd45beea3587aeb9710152c11e7ba5f894a4df'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタールで開幕したFIFAワールドカップ。サウジが大金星挙げた ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSM_PNmgREcv-_U3y8MS0yc7KM_tU9udxC_3MubtMnwnEWVWgPKnp3Bbar5493cpsi0zOfutk1Z" alt="カタールで開幕したFIFAワールドカップ。サウジが大金星挙げた ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>そう、MotoGPやF1の”カタールGP”が行なわれる場所だ。 ルサイル・アイコニック・スタジアムから北に10kmほど車で進むと、カタールGPの舞台であるロサイル・&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}