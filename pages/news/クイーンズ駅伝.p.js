import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>クイーンズ駅伝</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,クイーンズ駅伝"/>
        <meta name="description" content="Trending News about クイーンズ駅伝" /></Head><Template>
            <h1 style={{fontSize: "30"}}>クイーンズ駅伝</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221128-00000004-nkgendai-000-1-view.jpg?exp=10800" alt="クイーンズ駅伝"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/b895c42b697c32b08f9240922ac4ee77d36dae00'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>クイーンズ駅伝5度優勝の元監督が提言 「マラソンと駅伝選手は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRss7eOze-Dbub6HFeamguirexU50iW1DCufzpNiElyrkAUPp1bA4eROTu9tf2ztK1RfC1MvbHw" alt="クイーンズ駅伝5度優勝の元監督が提言 「マラソンと駅伝選手は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>実業団の女子駅伝日本一を決める27日の全日本実業団女子駅伝は、資生堂が2時間12分28秒の大会新記録で16年ぶり2度目の優勝を果たした。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/31a6a3634d2c0a89b34587bab442e7ab24a9afc8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【クイーンズ駅伝】新谷仁美、広中璃梨佳の「無敗」止める 先着 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQcV7LfBK_jOJ3SNx1AYHXXCHgb15uiPUZtyrOyFgICFEv9m75iM2_8JlTRJrX2zD3mFIM83_iK" alt="【クイーンズ駅伝】新谷仁美、広中璃梨佳の「無敗」止める 先着 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>全日本実業団対抗女子駅伝（クイーンズ駅伝）＞◇27日◇宮城県松島町文化観光交流館前～弘進ゴムアスリートパーク仙台（6区間42.195キロ） 宮城で日本記録保持者同士の&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/df6072c3059ec47569c1198d6a2ab50ca9c560c4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>クイーンズ駅伝 鍋島莉奈（28）が“復活”の走り ケガで世界陸上欠場 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHlS3DSIUBz-zBFnL7-jIGXBOYA5kHtLVA-Z3V1ZMQ7BH0FHemwbQKSAuCyDceHRZyqt7yzWGm" alt="クイーンズ駅伝 鍋島莉奈（28）が“復活”の走り ケガで世界陸上欠場 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>27日宮城県で行われた「クイーンズ駅伝」で、ことし積水化学に移籍した高知県須崎市出身の鍋島莉奈（なべしま・りな）選手がケガからの“復活の走り”を見せ、チームの2&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rikujyokyogi.co.jp/archives/87130'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>資生堂 強く、美しく！大会新で16年ぶり女王の座！創業150年に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTn5lhKwj7cBtPjmb3gkmEuBTFsztgN12uINltH4TWHMVZPJKTvNYUZ86JvBgMZwqSA3WiWzNHA" alt="資生堂 強く、美しく！大会新で16年ぶり女王の座！創業150年に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>全日本実業団対抗女子駅伝（クイーンズ駅伝）が11月27日に行われ、資生堂が16年ぶり2度目の優勝を飾った。2時間12分28秒は、昨年、積水化学がマークした大会記録（2時間13&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hokkoku.co.jp/articles/-/921381'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【クイーンズ駅伝】資生堂・五島莉乃（星稜高ＯＧ）２年連続の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【クイーンズ駅伝】資生堂・五島莉乃（星稜高ＯＧ）２年連続の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第４２回全日本実業団対抗女子駅伝（クイーンズ駅伝）は２７日、宮城県内で行われ、２４チームが６区間４２・１９５キロで争った。５区（１０キロ）では資生堂・五島&nbsp;...</p></div>
            </div>
        </a><a href='https://mainichi.jp/articles/20221126/k00/00m/050/272000c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>一山麻緒、アクシデント乗り越え再浮上の契機に クイーンズ駅伝 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAMKdHUPpoqkc09TB0pE7aV3y8qRGJc76u8h6UfQUeMLtfI18cH2zKtDdzIB6WUCovSWkaauIP" alt="一山麻緒、アクシデント乗り越え再浮上の契機に クイーンズ駅伝 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>クイーンズ駅伝in宮城 第42回全日本実業団対抗女子駅伝競走大会」は27日、宮城県を舞台に6区間42・195キロで争われ、東京オリンピック女子マラソン8位で資生堂の一山&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}