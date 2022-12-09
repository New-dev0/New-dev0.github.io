import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>僕の心のヤバイやつ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,僕の心のヤバイやつ"/>
        <meta name="description" content="Trending News about 僕の心のヤバイやつ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>僕の心のヤバイやつ</h1>
            <Image width={800} height={500} src="https://www.famitsu.com/images/000/285/427/z_638f0d7b829d4.jpg" alt="僕の心のヤバイやつ"/>
            <h3>Recent News</h3>
            <a href='https://www.famitsu.com/news/202212/06285427.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>アニメ『僕の心のヤバイやつ』2023年4月より放送開始。本編映像と ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXEUpcNZg8kcAj9G9ZwMKuDq14RXmIY3BLy60WKMTw9zzY3mY78eFs31PVNOmYrmq8nS7VcefW" alt="アニメ『僕の心のヤバイやつ』2023年4月より放送開始。本編映像と ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>あわせて、ティザービジュアル第2弾、本編映像とキャラクターボイスが入ったティザーPVが公開。さらに、市川京太郎役は堀江瞬さん、山田杏奈役は羊宮妃那さんが担当する&nbsp;...</p></div>
            </div>
        </a><a href='https://game.watch.impress.co.jp/docs/news/1461645.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TVアニメ「僕の心のヤバイやつ」のティザーPVが公開！ 主要 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKy-4CVCjF_G2rzgH2oafNo7mZgHUmhiyf1O-zKSIbw0KRSjNjDd6XleCFEOCt2eyFabz_YK6f" alt="TVアニメ「僕の心のヤバイやつ」のティザーPVが公開！ 主要 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>また、ティザーPVの公開と合わせて主要キャストの情報も解禁となっており、市川京太郎役を堀江瞬さん、山田杏奈役を羊宮妃那さんが演じることも発表された。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/8861b3489699e2bb8958cee0e80df2aaec9b048d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>テレビアニメ『僕の心のヤバイやつ』が4月から放送。メイン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIWOOIm2wsMyRYqQmOf7d2z3IF0KfhoDljyEPbFQ-qQrp81u7ISjeQo9zc48eL5vs2ePuNRXbJ" alt="テレビアニメ『僕の心のヤバイやつ』が4月から放送。メイン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>市川京太郎役に堀江瞬、山田杏奈役に羊宮妃那がキャスティング。監督を『からかい上手の高木さん』の赤城博昭が務め、シリーズ構成・脚本を『ラブライブ！』などの花田十輝&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fukuishimbun.co.jp/articles/-/1683103'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『僕の心のヤバイやつ』来年4月放送でPV公開 市川京太郎役は堀江 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQtHSuOUOqutsxr57-e9eA2hGI5vlomgHjf9mQd6pmWU33vhq-2gQdesPK2ZlJYmsFfW9nUNXcw" alt="『僕の心のヤバイやつ』来年4月放送でPV公開 市川京太郎役は堀江 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>テレビアニメ『僕の心のヤバイやつ』が、2023年4月よりテレビ朝日系で放送されることが決定した。あわせて、ティザービジュアル第2弾に加え、本編映像＆キャラクター&nbsp;...</p></div>
            </div>
        </a><a href='https://anime.eiga.com/news/117498/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「僕の心のヤバイやつ」堀江瞬＆羊宮妃那の主演で23年4月放送開始 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="「僕の心のヤバイやつ」堀江瞬＆羊宮妃那の主演で23年4月放送開始 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>桜井のりお氏の青春初恋コメディ漫画をテレビアニメ化する「僕の心のヤバイやつ」が、2023年4月からテレビ朝日系全国24局ネット「NUMAnimation」枠とBS朝日でスタート&nbsp;...</p></div>
            </div>
        </a><a href='https://animageplus.jp/articles/detail/48317'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『僕の心のヤバイやつ』来年4月放送！メインキャストに堀江瞬・羊 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnL0jpPEKNw_uV6fsXK3mN4qWEBIQP2kAfxfkc4Q-i9nz2ok3XGqJMq1hLu_hTjqnfAzsaRNoU" alt="『僕の心のヤバイやつ』来年4月放送！メインキャストに堀江瞬・羊 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TVアニメ『僕の心のヤバイやつ』が2023年4月に放送決定し、ティザービジュアル第2弾＆本編映像初公開のティザーPVが公開。さらに、メインキャストに堀江瞬・羊宮妃那が&nbsp;...</p></div>
            </div>
        </a><a href='https://news.mynavi.jp/article/20221206-2531007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TVアニメ『僕の心のヤバイやつ』、メインキャストに堀江瞬＆羊宮 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNbm7ZHVp7jr0Ukit0ZOl4CrC7VwUoubDWTjxj7Bl-ecxR_EkBh3RShTkBQCafCDC9U6iTye9w" alt="TVアニメ『僕の心のヤバイやつ』、メインキャストに堀江瞬＆羊宮 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TVアニメ『僕の心のヤバイやつ』が、2023年4月よりテレビ朝日系全国24局ネット“NUMAnimation”枠・BS朝日にて放送されることが決定。ティザービジュアル第2弾や、本編&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}