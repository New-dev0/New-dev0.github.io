import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>神戸マラソン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,神戸マラソン"/>
        <meta name="description" content="Trending News about 神戸マラソン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>神戸マラソン</h1>
            <Image width={800} height={500} src="https://www.kobe-np.co.jp/news/sougou/202211/img/b_15825497.jpg" alt="神戸マラソン"/>
            <h3>Recent News</h3>
            <a href='https://www.kobe-np.co.jp/news/sougou/202211/0015825496.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>神戸マラソンの男性ランナー、一時心肺停止 ＡＥＤで意識戻る 救急 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmmm4VhIsZXsgoHwISdLNE6Yq3wLOjguE9zRM0sJZOSvcP9c2IdSAtT0tmEvq-Wex9Uco7P2l0" alt="神戸マラソンの男性ランナー、一時心肺停止 ＡＥＤで意識戻る 救急 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>神戸マラソン実行委員会事務局によると、２０日の神戸マラソンでは救護件数が計５３７件あった。うち７件で救急搬送された。５０代の男性ランナーがコース上で心肺.</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/local/kansai/news/20221120-OYO1T50016/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>神戸マラソンに２万人</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="神戸マラソンに２万人" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 「第１０回神戸マラソン」（兵庫県、神戸市など主催）が２０日、神戸市で３年ぶりに開催された。沿道での応援自粛など新型コロナウイルスの感染対策が取&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kobe-np.co.jp/news/sougou/202211/0015824868.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【速報】神戸マラソン最終ランナーがフィニッシュ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAHVxGpoZQVYRqvj-xGosb2TVe81GuVSl89ENjOkDUrFAxxix1DadU7ysXk4_ieGNyXq-9QCj9" alt="【速報】神戸マラソン最終ランナーがフィニッシュ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「感謝と友情」をテーマに掲げた第１０回神戸マラソン（神戸新聞社など共催）は２０日、神戸市役所前をスタート、明石海峡大橋西側で折り返してポートアイランドで.</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/kansai-news/20221120/2000068382.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「神戸マラソン」３年ぶりに開催 ２万人のランナーが走る｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzwDdGUTkmB7frZWtV9ACzhUGl4zWF7ca-J2GPQhLpOEToxJoSM7C0bJFjySRqEQ7mfPTyoQ6h" alt="「神戸マラソン」３年ぶりに開催 ２万人のランナーが走る｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>阪神・淡路大震災で受けた支援への感謝をテーマにした「神戸マラソン」が３年ぶりに行われ、およそ２万人のランナーが港町・神戸を駆け抜けました。…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/33cbc6c05d5d24fef10f6f811a9f5d61bfccf038'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>神戸マラソン 男子は復帰レースの３５歳坪内が日本勢トップの４位 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTrDVQRRQxXqlnYEkgFh03Y2RIQqETHj2Rfa1uQIA_PPMnJS92tnjlIHoKYpkR0XGoA7J7YpTN8" alt="神戸マラソン 男子は復帰レースの３５歳坪内が日本勢トップの４位 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>神戸新聞社共催・第１０回神戸マラソン」（２０日、神戸市役所前発～明石海峡たもと折り返し～ポートアイランド着＝４２・１９５キロ） 新型コロナウイルスの影響&nbsp;...</p></div>
            </div>
        </a><a href='https://sun-tv.co.jp/suntvnews/news/2022/11/20/60694/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3年ぶり開催の神戸マラソン 2万人のランナーが駆け抜ける - サン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQd1TBUy11HF-ApO3QKYHhnK3z10DUob1pW5sTu1b6QRnmpDEWi_Sb20P52d19sgaT-xjK6nAFa" alt="3年ぶり開催の神戸マラソン 2万人のランナーが駆け抜ける - サン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サンテレビのニュースサイトです。ニュース動画やイベント情報など盛りだくさん！LINEニュースも配信中.</p></div>
            </div>
        </a><a href='https://www.tokyo-np.co.jp/article/215086'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>神戸マラソン２万人快走 コロナ禍で３年ぶり開催</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuntIBDU5R9elbcFGbZlSv5CAms_Jy4Q2uN-5lyoqWmV3M0r7rmbkZZq0fXOnyFY1294r_37kn" alt="神戸マラソン２万人快走 コロナ禍で３年ぶり開催" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>阪神大震災の復興支援に対する「感謝と友情」をテーマにした第１０回神戸マラソンが２０日、神戸市で開かれた。震災から再生した街並みを約２万...</p></div>
            </div>
        </a>
        </Template></>;
}