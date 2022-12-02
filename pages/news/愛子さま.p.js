import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>愛子さま</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,愛子さま"/>
        <meta name="description" content="Trending News about 愛子さま" /></Head><Template>
            <h1 style={{fontSize: "30"}}>愛子さま</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221201-00551951-fnnprimev-000-1-view.jpg?exp=10800" alt="愛子さま"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/3d5e3b4724037aa03c5d1e0188441a3ef223ee41'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【近況全文】愛子さま 21歳 「ノー原稿」記者会見は猛練習の成果 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTL7ZbUn760BqCkeTCcqjACIsaHvdJyIVJX3IXpDKNbhcHK7-QOepkkb-0eMcWhQ_IB5mMnvbMF" alt="【近況全文】愛子さま 21歳 「ノー原稿」記者会見は猛練習の成果 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>昨年12月1日にご成年をお迎えになった後、12月5日に、天皇陛下からの勲章親授、勲記伝達、天皇皇后両陛下へのご挨拶、皇族祝賀など、宮殿でのご成年行事に落ち着いたご様子&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221201/k10013910221000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>愛子さま 21歳に 上皇ご夫妻のお住まい訪れ誕生日の報告される</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-FdFrrUpIvV7N4PPNiedrGUH9OzPr1tVjfd1Tx7PpsBZLet0rwNEwJ6cBf4xWrpd4DMLuaEHo5g" alt="愛子さま 21歳に 上皇ご夫妻のお住まい訪れ誕生日の報告される" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】天皇皇后両陛下の長女の愛子さまは、上皇ご夫妻のお住まいにあいさつに訪れ、21歳の誕生日を迎えたことを報告されました。</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/koushitsu/20221201-OYT1T50326/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>愛子さまが２１歳の誕生日、皇居・御所で祝賀行事</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQAy0orwnu-EgVdg7nptY9bE9EN2kdAFG6Z7MnrTLdQtw6I8p_722c5EaDtxoScrQvjSaC3asPJ" alt="愛子さまが２１歳の誕生日、皇居・御所で祝賀行事" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 天皇、皇后両陛下の長女愛子さまは１日、２１歳の誕生日を迎え、皇居・御所で祝賀行事に臨まれた。天皇陛下とともに宮内庁幹部らから祝賀のあいさつを&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/edc002db2d2ca73d637ccd235cf2271d57d7d2c1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>愛子さま21歳の誕生日 「成年皇族」としての経験を重ねられる ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQy1Ea-fxOoMw5Xr1FUQfdw13OVV1e-emcj5Sy6jiE_MAYJ6Y36E8LbL3RTkuq6EjiGL41BnIQo" alt="愛子さま21歳の誕生日 「成年皇族」としての経験を重ねられる ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>天皇皇后両陛下の長女・愛子さまは1日、21歳の誕生日を迎えられました。学業を優先しながら、成年皇族としての経験を重ねられています。 ◇ 1日午後5時半ごろ、天皇&nbsp;...</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_society/articles/000278014.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>愛子さま21歳誕生日 胸元にキラリご学友との“絆” 久々外出で“異例 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOza_xTEVyV_0x7YgdIvzEW9Bei-OXLmNKKTGiMX4kfPFU1Xbi71frdlo-PxBx3w1GwgYg5EAx" alt="愛子さま21歳誕生日 胸元にキラリご学友との“絆” 久々外出で“異例 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>天皇皇后両陛下の長女・愛子さまが21歳の誕生日を迎えられました。コロナ禍のこの1年、皇居からは3回しか外出されなかったという愛子さま。ただ、公開された映像には、&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}