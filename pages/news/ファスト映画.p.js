import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ファスト映画</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ファスト映画"/>
        <meta name="description" content="Trending News about ファスト映画" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ファスト映画</h1>
            <Image width={800} height={500} src="https://www.yomiuri.co.jp/media/2022/11/20221118-OYT1I50012-T.jpg?type=ogp" alt="ファスト映画"/>
            <h3>Recent News</h3>
            <a href='https://www.yomiuri.co.jp/national/20221118-OYT1T50036/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ファスト映画の損害額「１回再生で２００円」、無断投稿の２人に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRlu9s26qrZtXUxhcdvryLMGLMLmRMmPjRXfvbaqbGGm_VGapWaglq7aasTLTclhcr4gAL-Qi0i" alt="ファスト映画の損害額「１回再生で２００円」、無断投稿の２人に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 映画を１０分ほどの長さに短く無断編集した「ファスト映画」を動画投稿サイトに公開され著作権を侵害されたとして、東宝や松竹、東映などの大手映画会社&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/fd1c43a1cfa027f46fcf8483ca33ee895451efe0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「収入は700万円程度だが…」 ファスト映画で5億円賠償判決（朝日 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKdhDHN0AfXNsVWFmwv5VEqNxfOsZDoRx3RDcwAmXIWSZid_laqqGOi6hkQfXVTzPwNcZTzRt9" alt="「収入は700万円程度だが…」 ファスト映画で5億円賠償判決（朝日 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>映画を無断で短く編集した「ファスト映画」をユーチューブに投稿したとして、著作権法違反で有罪が確定した3人に、大手映画会社など計13社が5億円の損害賠償を求めた&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221117-II5RUNTO5NKEXIFY3QENRAKMRU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ファスト映画は「作り手への冒瀆」時短ニーズ根強く工夫必要</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMSxHUUd6ysDr5h-sj7y_i7st4UblGiZeM7jVZ0MhtPS7TULJVgTBuYEHmKPtwurzVurD15m6y" alt="ファスト映画は「作り手への冒瀆」時短ニーズ根強く工夫必要" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>映画を１０分ほどに短くまとめた「ファスト映画」を動画投稿サイトで無断公開した２０代の男女２人に計５億円の賠償を命じた１７日の東京地裁判決は、悪質な著作権侵害&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/tohoku-news/20221117/6000021626.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「ファスト映画」公開 総額５億円の損害賠償命じる 東京地裁｜NHK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSNUjco2dv2f6byh9L31okipF_dV29kow51VUSsSbwO-Ll45lyUHKQKx-43Lq2xnWnssBvnOqv" alt="「ファスト映画」公開 総額５億円の損害賠償命じる 東京地裁｜NHK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>映画を１０分程度に編集した違法な動画「ファスト映画」をネット上に公開したとして、著作権法違反の罪で有罪が確定した２人に、大手映画会社など１…</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGKKZO66088620Y2A111C2EA1000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ファスト映画投稿、5億円賠償命令</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDU0i5v_LIc4EN8T1BBW9Iqw_8lHKZkquBpGNUP_SoEkxYGB8rzqoVnX9g1uQjaQ9R1fI1nqS5" alt="ファスト映画投稿、5億円賠償命令" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>映画を無断で10分ほどに編集して公開する「ファスト映画」の投稿者2人に、東京地裁は17日、5億円の賠償を命じた。賠償額は動画公開で得たとされる利益を大幅に上回り、&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sponichi.co.jp/entertainment/news/2022/11/18/kiji/20221118s00041000193000c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ひろゆき氏 「ファスト映画」損害賠償5億円判決に「本当の損害額は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ひろゆき氏 「ファスト映画」損害賠償5億円判決に「本当の損害額は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2ちゃんねる創設者で実業家の西村博之（ひろゆき）氏（46）が18日までに自身のツイッターを更新。映画を勝手に編集して10分ほどに短くまとめた「ファスト映画」&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}