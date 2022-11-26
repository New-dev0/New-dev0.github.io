import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Steam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Steam"/>
        <meta name="description" content="Trending News about Steam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Steam</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221124-00000010-ascii-000-1-view.jpg?exp=10800" alt="Steam"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/157a795fc7dd7fa4329941b1cb61a529457c1f72'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steamにて『メイドインアビス』が初セール！全47作品が最大90 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYVP708vrCYFN8MRdP1k1o9cNcPuAh1D9rGWIPzTvY8YEmEFsipiKV2_H87F8_hUIBchuMB8gh" alt="Steamにて『メイドインアビス』が初セール！全47作品が最大90 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年11月24日、スパイク・チュンソフトはSteamストアにてPC向けタイトルをお得な価格で販売する「オータムセール 2022」を開催。47タイトルを出品し、最大90％オフで&nbsp;...</p></div>
            </div>
        </a><a href='https://www.4gamer.net/games/038/G003821/20221124017/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steamオータムセール開催，数千もの新旧タイトルが最大94％オフ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6RrLaUp7DNZlBf8eECqRqee6dbMMj9NsZgyCVdvylqUv9GEio9r_lDY2JVfFCj4rmFa0SAKhR" alt="Steamオータムセール開催，数千もの新旧タイトルが最大94％オフ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Valveは，オンライン配信サービス「Steam」で恒例の「オータムセール」を開催しており，数千本もの新旧タイトルを最大94％で販売中だ。また，「Steamアワード 2022」の&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dreamnews.jp/press/0000270693/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Steam オータムセール”に『ビビッドナイト』が登場！秋のお祭り ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsZEZsIBUar5Pd00dG3QMYqnKxO2fZYhNt0JvqdI7-3pYWT0df3DSqlbhHSCRJCTW2AjjAD0c4" alt="“Steam オータムセール”に『ビビッドナイト』が登場！秋のお祭り ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>株式会社アソビズム（本社：東京都千代田区、代表取締役：大手智之）は、日本時間2022年11月23日（水・祝）よりSteamにて開催される“Steamオータムセール”&nbsp;...</p></div>
            </div>
        </a><a href='https://www.famitsu.com/news/202211/23283814.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Steamオータムセール】『ロマサガ2』977円、『Stray』2800円 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-dqWr6icBkw5OLLBQVjlpsWZExk4f9VE_1OFgig1R5VDwfspl1kE_jFNpfRek6iGdt9h6iA_y" alt="【Steamオータムセール】『ロマサガ2』977円、『Stray』2800円 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PC用ゲーム配信プラットフォームSteamでオータムセールが実施中だ。この記事では、多岐にわたるセール対象作品から10本をピックアップして紹介する。</p></div>
            </div>
        </a><a href='https://www.gamespark.jp/article/2022/11/23/124675.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022年Steamオータムセールがスタート！毎年恒例「Steam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSq_FbNUKhsHnyBfPyrK6o9PwQnKaEUEwUN05bT5QkkCMD0HgE75g8PEhHDtT9iEVjyR8HQvqk" alt="2022年Steamオータムセールがスタート！毎年恒例「Steam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年Steamオータムセールがスタート！毎年恒例「Steamアワード」ノミネートも受付中. 今年も秋の風物詩がやってきた！ ニュース セール・無料配布.</p></div>
            </div>
        </a><a href='https://automaton-media.com/articles/newsjp/20221123-227767/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steamオータムセール 2022開幕。話題の猫ゲームや『モンハンサン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQS7CRpWsrFiZQQdfihnM9qkgw9e4Y4lJHZMFqRI8M1PjIDA7-CkYuM8u5fiJURg-UIgmjTrg0Q" alt="Steamオータムセール 2022開幕。話題の猫ゲームや『モンハンサン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>まずは比較的最近の話題作や大型タイトルなどから。 □『Stray』 猫になってサイバーパンクな街を探索する、猫サイバーパンクアクションアドベンチャーゲーム。 ・&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moguravr.com/steam-autumn-sale-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「Steam」オータムセールが開催中 VRゲームもセール対象</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTr2TJZGOfaH-fQ3vT6_TLndGmbz2hXvgnGrNhO1GfPEY2cspfD2WAmc2Q0lC9bmdR_Jkuo29gf" alt="「Steam」オータムセールが開催中 VRゲームもセール対象" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ゲーム配信プラットフォーム「Steam」で、2022年のオータムセールが実施されることが発表されました。セール期間は11月30日（水）まで。暗殺アクションゲーム「HITMAN&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}