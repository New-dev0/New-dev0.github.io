import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>三笘薫</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,三笘薫"/>
        <meta name="description" content="Trending News about 三笘薫" /></Head><Template>
            <h1 style={{fontSize: "30"}}>三笘薫</h1>
            <Image width={800} height={500} src="https://static.tokyo-np.co.jp/image/article/size1/7/a/d/9/7ad9899fc53498812900f527376545f6_1.jpg" alt="三笘薫"/>
            <h3>Recent News</h3>
            <a href='https://www.tokyo-np.co.jp/article/216492'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スペイン戦見据え前向く三笘薫「次はどれだけ仕掛けられるか ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7qiGQw1odFexa85R6-aZGO8rImiwAldNFlf45mD4Ykinru2DaJem8VLlAL9QQdl0M7ggRFinl" alt="スペイン戦見据え前向く三笘薫「次はどれだけ仕掛けられるか ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのワールドカップ（W杯）カタール大会で日本は27日、当地での1次リーグE組第2戦でコスタリカと対戦し、0—1で敗れた。【関連記...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/06bc9ca2cbf5ffd01b7108842bb41e99e66ddb90'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>三笘薫 ドリブル突破でビッグチャンスメークも「最後の質でゴール ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSryH1wRpzzzFt-k_3iDTqhzNKDznAq5T_nZyAWjteq8jsm_OmbSpMtzYO8s79JicmRZ91nAPbi" alt="三笘薫 ドリブル突破でビッグチャンスメークも「最後の質でゴール ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>W杯カタール大会1次リーグE組 日本0―1コスタリカ（2022年11月27日 A・ビン・アリ） FIFAワールドカップ（W杯）カタール大会1次リーグE組の日本代表は27日、コスタリカ&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/43facb365f6d043d7e4518053edab1b0d6e3ee5e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>三笘薫の先発外は「犯罪的」と海外記者指摘 スタメン待望論「信じ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTTEiP6y_ibTXL8gjDHASeIJKmmJAwfPu1uoeN1AbVH3yFQ09ahyFAKGn2qnSZrOWLNblGBpPFW" alt="三笘薫の先発外は「犯罪的」と海外記者指摘 スタメン待望論「信じ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーのカタール・ワールドカップ（W杯）は27日、グループリーグE組で日本がコスタリカに0-1で敗れた。ドイツ戦からスタメンを5人入れ替えて臨んだが実らず。</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221127-OYT1T50180/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>途中出場の三笘薫、得意のドリブルで好機演出…「ディテールで ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTEa-NT15Yv0QTGWutibfWGN82tr5-qEG58UCrtZLy9Xf2Tq9iI4l7r9enJUHWPSnyUmj3KsmM5" alt="途中出場の三笘薫、得意のドリブルで好機演出…「ディテールで ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は２７日、各地でグループリーグが行われ、Ｅ組の日本代表（世界ランキング２４位）がコスタリカ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOUE2015P0Q2A021C2000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本代表・三笘薫、突破力で見せ場 「足りぬ自分」磨き</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7LwmZ6S6hJx1Ce5zN9tMcYIY4dHar9JCSzIKPYgV-x_pyIp_156iXaZpvz47VpshLzzL7bIY2" alt="日本代表・三笘薫、突破力で見せ場 「足りぬ自分」磨き" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーワールドカップ（W杯）カタール大会で、コスタリカに敗れた日本代表。攻撃が何度も跳ね返される中で、三笘薫選手（25）は初戦ドイツ戦に続いて独創的な&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/soccer/qatar2022/news/202211270001896.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【W杯】三笘薫「僕からのミス、球際で負けてから。あれがなければ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【W杯】三笘薫「僕からのミス、球際で負けてから。あれがなければ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>＜FIFAワールドカップ（W杯）カタール大会：日本0－1コスタリカ＞◇1次リーグE組◇27日◇アルラヤン・アハマド・ビン・アリ競技場.</p></div>
            </div>
        </a><a href='https://www.football-zone.net/archives/418038'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【W杯】コスタリカ戦、ブライトン公式がMF三笘薫の後半出場を ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVcJ7xSP4WusdYmqG_sZSilgRJMeB5uzzV7NzXcTRcsFixsOMVApFsiaTcup6L7PzwjEahYD6x" alt="【W杯】コスタリカ戦、ブライトン公式がMF三笘薫の後半出場を ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>森保一監督の率いる日本代表（FIFAランキング24位）は、11月27日（現地時間13時キックオフ）にカタール・ドーハのアフメド・ビン＝アリー・スタジアムで、カタール・&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}