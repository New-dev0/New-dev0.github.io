import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ジャパンカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ジャパンカップ"/>
        <meta name="description" content="Trending News about ジャパンカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ジャパンカップ</h1>
            <Image width={800} height={500} src="https://cdn.netkeiba.com/img.www/style/netkeiba.ja/image/netkeiba.png" alt="ジャパンカップ"/>
            <h3>Recent News</h3>
            <a href='https://news.netkeiba.com/?pid=news_view&no=214673'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ジャパンCレース後コメント】ヴェラアズール R.ムーア騎手ら ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSS5myGXtCAXO1h8rKc2oQDx1pEmTaz6p6k_YYSVJf8nIXD7ZdNGXIUK0dF7xsuwFG9rHwIE0DT" alt="【ジャパンCレース後コメント】ヴェラアズール R.ムーア騎手ら ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>東京12Rの第42回ジャパンカップ(3歳以上GI・芝2400m)は3番人気ヴェラアズール(R.ムーア騎手)が勝利した。勝ちタイムは2分23秒7(良)。3／4馬身差の2着に1番人気&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/d7e1d5b9370f4df6f66855146209e35787368dbb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ヴェラアズールがG1優勝 競馬のジャパンカップ（共同通信）</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSqOUouQkTnBmdAJ4WZc2fYsK8py_PrORJetWS36ANvU4meTEgeCTSEnwTwbpkcotM7HWisdFiz" alt="ヴェラアズールがG1優勝 競馬のジャパンカップ（共同通信）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第42回ジャパンカップ（27日・東京12R2400メートル芝18頭、G1）3番人気のヴェラアズール（ライアン・ムーア騎乗）が2分23秒7で優勝し、G1初制覇を果たすとともに1着&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/80736800bdf3af351bffc96248cc65b93d98b43f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日曜メインレースの注目激走馬…東京１２Ｒジャパンカップ・Ｇ１ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ31hvYQfwy3paT3qPScT_iCgwMz4C90VOXOwRSc3EtxNzyqz5J53aYDGidm_CB48ZYCzexBsRc" alt="日曜メインレースの注目激走馬…東京１２Ｒジャパンカップ・Ｇ１ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>東京１２Ｒジャパンカップ・Ｇ１・馬トク激走馬＝オネスト ２００５年のアルカセット以来の外国馬Ｖを目指すフランケル産駒の３歳牡馬。デビューから８戦して３勝。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b512d72e43269a4fa7d56f6a9a578de2068dfcf2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【競馬】「ジャパンカップ」の歴代優勝馬人気ランキング！ 第1位は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaE9i1qbHt3boNZFs-47MIxVQXbiLao2WwdSb4B5NJ5crg19IJH0Xml8xI2jIlhXky6NJkWpqB" alt="【競馬】「ジャパンカップ」の歴代優勝馬人気ランキング！ 第1位は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第2位は「コントレイル」でした。2019年から2021年にかけて活躍した競走馬で、1984年の「シンボリルドルフ」、2005年の父「ディープインパクト」に続き、日本競馬史上3頭目&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.co.jp/video/player/8752632'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【GⅠレース】ジャパンカップ 11/27 (日) 東京競馬場 - スポーツナビ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0JRIqxh4q_Lh1Fb9j5JfYwEqVdmT8htsl8lfpTYcHqFOX0-fE0HMptg8bJbXcXFU9qEADhFn-" alt="【GⅠレース】ジャパンカップ 11/27 (日) 東京競馬場 - スポーツナビ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【GⅠレース】ジャパンカップ 11/27 (日) 東京競馬場 -「JRA 日本中央競馬会」の動画再生ページです。</p></div>
            </div>
        </a><a href='https://news.netkeiba.com/?pid=news_view&no=214610'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>薄井しお里のとっておきの穴馬見つけた!…ジャパンカップ・G1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0ai1tPixO3znfyQa-EZ60X4Boh0FU6gq7XNLPF0GscJEfBVJqlODmurEsklgNel-8AwcBjY7x" alt="薄井しお里のとっておきの穴馬見つけた!…ジャパンカップ・G1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>みなさんこんにちは！薄井しお里です。 最近、家で映画をよく観ます。映画が好きというよりも音楽が好きで、歌や音楽が多めの映画や映像が好きです。</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221127-FFHAVZF3GNLWPMEQQEOO2YFPLU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ヴェラアズールが優勝 競馬のジャパンカップ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCveC6czrOVZMrGIn0Fgz8zB4PYx2_DnjcHuInMchdmoECfhSkUxrcS5WQQ7GQ7lx8OvLKu7bc" alt="ヴェラアズールが優勝 競馬のジャパンカップ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>競馬の第４２回ジャパンカップ（ＧⅠ）は２７日、東京競馬場（１２Ｒ、芝２４００メートル）で１８頭が出走して行われ、３番人気のヴェラアズール（ライアン・ムーア&nbsp;...</p></div>
            </div>
        </a><a href='https://tospo-keiba.jp/breaking_news/23900'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ジャパンカップ】「異色のキャリア」で頂点に立ったヴェラ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7IY0AilOBdc-Yu-Ipx185ZShUAUhUjMppXX48CXh7r5W66YEeNTa3UBCzb5ehvX2dA7PsvEAC" alt="【ジャパンカップ】「異色のキャリア」で頂点に立ったヴェラ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>２７日、東京競馬場で行われた第４２回ＧⅠジャパンカップは、ムーア騎乗で３番人気のヴェラアズール（牡５・渡辺）が優勝。１７年以来、５年ぶりとなる外国馬４頭が参戦&nbsp;...</p></div>
            </div>
        </a><a href='https://dir.netkeiba.com/keibamatome/detail.html?no=2502'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ジャパンカップ 結果情報】名手の激励に応えヴェラアズールが ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVx5YNVSwasd0-B4diq7SzczUxpLiS2eDav16Lzio6ba4BRvfuaY0Fgf06iW79Dh_W7k3W7J6X" alt="【ジャパンカップ 結果情報】名手の激励に応えヴェラアズールが ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第42回 ジャパンカップ（2022年11月27日 G1 東京 芝2400m）はユニコーンライオンが先手を取り馬群が一団となり進む中、中団でレースを進めたR.ムーア騎手騎乗の3番人気&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}