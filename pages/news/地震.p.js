import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>地震</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,地震"/>
        <meta name="description" content="Trending News about 地震" /></Head><Template>
            <h1 style={{fontSize: "30"}}>地震</h1>
            <Image width={800} height={500} src="https://storage.tenki.jp/storage/static-images/forecaster_diary/image/2/20/205/20514/main/20221115121250/large.jpg" alt="地震"/>
            <h3>Recent News</h3>
            <a href='https://tenki.jp/forecaster/deskpart/2022/11/15/20514.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ここ1週間の地震回数 震度4以上の地震3回 異常震域も(気象予報士 日 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4blaZzrD7Ez_vRQJx9u3cZme1ZtClElxkS1rUJDYHUioi5iBywY4d1LjLbj8aSvuJHL-7U-dQ" alt="ここ1週間の地震回数 震度4以上の地震3回 異常震域も(気象予報士 日 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ここ1週間(2022年11月8日12時00分〜2022年11月15日12時00分)、震度1以上の地震の観測回数は27回で、そのうち震度4以上の地震は3回となっています。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221114/k10013891411000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>石川県 能登地方で震度4の地震 津波の心配なし</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0Ss3Qs9I1aJkbEw-5qf4vmCqV5U5GIe7TdhuXJBB649mUHBehRWlc6Gvnqv0kqBfTiO5degzA" alt="石川県 能登地方で震度4の地震 津波の心配なし" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】14日午後10時28分ごろ石川県能登地方で震度4の揺れを観測する地震がありました。この地震による津波の心配はありません。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/2b2e321f1942e759448da442a80d5e44e6253f7e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>賃貸に住んでいるけど、地震保険は入っておくべき ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRo9dK22lgSNN8EGtvIqUmsOzZuVvfgbOdAess3v-RiSMLBqwvnE4plaslAHGKancAhVqG5K-NN" alt="賃貸に住んでいるけど、地震保険は入っておくべき ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>賃貸住宅に住む場合には、賃貸契約の中で火災保険の加入が求められますので、火災保険を契約することが通常です。しかし、地震保険の加入は求められないため、個人で&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/ac8b1a0e825a777e8f7e604caac769b2887c0daf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>震源地は三重県南東沖 この地震による津波の心配なし（日テレ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlxkxxAopBuzMBI2BMEsswMznnWxkH_dw4SCDth6Jn2_QcX7QDjfxv1to70zHl5X5l_I2b_sBt" alt="震源地は三重県南東沖 この地震による津波の心配なし（日テレ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>気象庁によると、１４日午後５時９分ごろ、地震があった。震源地は三重県南東沖。震源の深さは３５０キロ。地震の規模を示すマグニチュードは６．１と推定。</p></div>
            </div>
        </a><a href='https://weathernews.jp/s/topics/202211/140185/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>11月14日(月)17時09分頃、三重県南東沖で深発地震がありました ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1HVWrqgVgyBMJY4meuAT6e8OXYXYX6LbZx004OjkyRWPtkaSieyigxzHtt9v_PG4HKVt_1SYn" alt="11月14日(月)17時09分頃、三重県南東沖で深発地震がありました ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月14日(月)17時09分頃、三重県南東沖で深発地震がありました。震源の深さは約350km、地震の規模はM6.1と推定されます。関東や東北の太平洋側に揺れが伝わる「異常震&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/science/20221114-OYT1T50227/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>震源直上より揺れる「異常震域」、遠く離れた東北・関東で震度３ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVkTmY8w7f0ceUUlgg2-jUJQGcujkp8QdbUkAxjspXwkTQswiaKUZYzMVhEjKfJ-NdkKDN4_UR" alt="震源直上より揺れる「異常震域」、遠く離れた東北・関東で震度３ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 １４日午後５時９分頃、三重県南東沖を震源とする地震があり、福島県双葉町と浪江町、茨城県つくばみらい市で震度４を観測した。気象庁によると、震源の&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/9fbe613d2d09e484d0607986b90ea050558dd28b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>地震で損傷の京都・興正寺御影堂の修復完了 一般入場を再開（京都 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGp0VaLRNexNoDSwWqIl5ei8zBaGb8fO5dVOdzvUUWksx2PpF5PZ8qSqWk_gC9S5C92RfOCRJT" alt="地震で損傷の京都・興正寺御影堂の修復完了 一般入場を再開（京都 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>真宗興正派本山の興正寺（京都市下京区堀川通七条上ル）で、2018年6月の大阪府北部地震で柱が損傷し入場を禁止していた御影（ごえい）堂の修復工事が終わった。</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_society/articles/000275692.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>震源は三重県南東沖も福島などで震度4 深発地震の異常震域</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTF-gD_uyhqpMZephCO2TROkUKDIUmHmjwS63NISh9MdXzDDYwez_QMfr8NKvIoOm5tgoKCWyLz" alt="震源は三重県南東沖も福島などで震度4 深発地震の異常震域" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>福島県などで最大震度4を観測する地震がありました。震源は三重県南東沖でしたが、そこから遠い福島などで揺れが大きくなった「異常震域」という現象が見られました。</p></div>
            </div>
        </a>
        </Template></>;
}