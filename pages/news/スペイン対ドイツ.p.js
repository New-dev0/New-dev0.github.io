import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>スペイン対ドイツ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,スペイン対ドイツ"/>
        <meta name="description" content="Trending News about スペイン対ドイツ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>スペイン対ドイツ</h1>
            <Image width={800} height={500} src="https://s.yimg.jp/images/sports/all_device/common/ogp/soccer_wcup.png" alt="スペイン対ドイツ"/>
            <h3>Recent News</h3>
            <a href='https://soccer.yahoo.co.jp/wcup/category/2022/game/2022112704/text?gk=18'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ - W杯 グループE 第2節 スペイン vs. ドイツ - 試合 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZI17Ple61HOBfLX8gcG4bE595SkjDbkWfcv8vE-8rfQXYgkD99NlwfQ3ATR_NHlb6P_LE-i_w" alt="ワールドカップ - W杯 グループE 第2節 スペイン vs. ドイツ - 試合 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>W杯 グループE 第2節 スペイン vs. ドイツの試合テキスト速報。スポーツ総合サイト、スポーツナビ(スポナビ)のワールドカップページです。最新のニュース､速報、日程、&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b9e77d2b750ae54999cc66e426ec22c7cac28dc2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スペイン対ドイツは０―０で後半へ…１次リーグ最注目のビック ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8MGXLBUggqEeexmllIOimNx7dFtldUNdMwva_8AtYyytQIAlihs4G51manQG9dlbStvY3RvZZ" alt="スペイン対ドイツは０―０で後半へ…１次リーグ最注目のビック ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタールＷ杯▽１次リーグＥ組 スペイン―ドイツ（２７日、アルベイト競技場） 【アルホール２７日＝岡島智哉】１次リーグ屈指の好カードとなった一戦は、０―０のスコア&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/7203a4c7491c901f27d48ecc8def83778d45d13b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ドイツ対スペインは1-1のドロー…ドイツ代表が生き残りに望みを ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcBGvf4qZwTi02IZhKM69Vt3E613008XzAaKumxRzt7jVX8aLcluzziZRmfSDLUgkMdmFrPeJn" alt="ドイツ対スペインは1-1のドロー…ドイツ代表が生き残りに望みを ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタールW杯グループE、スペイン対ドイツの試合はドイツが意地のゴールで引き分けとした。</p></div>
            </div>
        </a><a href='https://www.footballchannel.jp/2022/11/28/post485803/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQD1Eba4Eqgcv3s9rXlgLFYff_71niQSmLINOPnKkWKGQHxp6CaKFItmygkmCLsKkMeVAQB68Oz" alt="..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップカタール2022、グループリーグEの2試合と、グループリーグFの2試合が現地時間27日に行われた。 【カタールW杯の結果を予想して当選金をゲット！</p></div>
            </div>
        </a><a href='https://www.soccerdigestweb.com/news/detail/id=121536'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スペイン先制も、ドイツが83分に追いつき１－１ドロー！日本は２ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxFKriSzHGmdqDbYM-jt4Hcd5KuIywMV_tybFgHYQPKZY8ENiu-0jceEA8MMOBa1jixPwQ_1T5" alt="スペイン先制も、ドイツが83分に追いつき１－１ドロー！日本は２ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現地時間11月27日に開催されたカタール・ワールドカップ（W杯）グループステージ（E組）第２戦目で、スペイン代表とドイツ代表が激突した。</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221128-OYT1T50042/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>スペイン、ドイツと１―１で引き分け…決勝Ｔ進出は第３戦に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWxJPQE0SGtDCPMcylWWTyEyUq-qMEVQ-yKKPlni26IcKr7owtcFmE3gFT75H7c0gJRhQhQF9_" alt="スペイン、ドイツと１―１で引き分け…決勝Ｔ進出は第３戦に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカーのＦＩＦＡワールドカップ（Ｗ杯）カタール大会は２７日（日本時間２８日）、グループリーグＥ組のスペイン代表―ドイツ代表戦が行われ、１―１で&nbsp;...</p></div>
            </div>
        </a><a href='https://hochi.news/articles/20221128-OHT1T51021.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本のためにはスペインＶＳドイツがどんな結果になればいい ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_-ko-dsRZUp3MY9P7X9IHfAEKMKtDlv7DjGS5b0aBHFHmTa6kT6WWG5U-YzVVjoXf70trTIQ1" alt="日本のためにはスペインＶＳドイツがどんな結果になればいい ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>カタールＷ杯Ｅ組は、第２節で日本はコスタリカに敗れた。この後２８日午前４時（日本時間）から、スペインとドイツが対戦。</p></div>
            </div>
        </a>
        </Template></>;
}