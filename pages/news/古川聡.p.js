import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>古川聡</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,古川聡"/>
        <meta name="description" content="Trending News about 古川聡" /></Head><Template>
            <h1 style={{fontSize: "30"}}>古川聡</h1>
            <Image width={800} height={500} src="https://www.yomiuri.co.jp/media/2022/11/20221125-OYT1I50166-T.jpg?type=ogp" alt="古川聡"/>
            <h3>Recent News</h3>
            <a href='https://www.yomiuri.co.jp/science/20221125-OYT1T50206/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>古川聡飛行士の宇宙医学実験、研究者２人がデータ書き換えや捏造 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-83Q7R3yg4k1MJ3DEhGBgMtc2BOchXzX7pKQVVb5bMqHDLBIDVJozDGXQVTKbgQUvw90aDxPE" alt="古川聡飛行士の宇宙医学実験、研究者２人がデータ書き換えや捏造 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 宇宙航空研究開発機構（ ＪＡＸＡ （ ジャクサ ） ）は２５日、古川聡宇宙飛行士（５８）が研究実施責任者を務めた宇宙医学の実験で、データ書き換えや&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/lnews/mito/20221125/1070019283.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＪＡＸＡで実験データ書き換え 古川聡宇宙飛行士らの処分検討 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4Z96Zi37jOOjOwZ8-KHa_0Vx7r5UHZtBoCeFzrYsW1StfomvCHa-Ndw4GPWZ9uu9jq9TO3lRM" alt="ＪＡＸＡで実験データ書き換え 古川聡宇宙飛行士らの処分検討 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】ＪＡＸＡ＝宇宙航空研究開発機構が茨城県つくば市にある施設を使って２０１６年から実施した実験で、研究者２人がデータの書き換えなどを行っていた…</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOUC253130V21C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宇宙飛行士・古川聡氏ら責任者の医学研究で不適切行為</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQyaPcUp6PtFj6-uK2wSpjdfQjQ_kCIe18cztLT9GFVZ39usK2f1n6lW2FtS0-e6WCfWq90lIs" alt="宇宙飛行士・古川聡氏ら責任者の医学研究で不適切行為" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>宇宙航空研究開発機構（JAXA）は25日、宇宙飛行士の古川聡氏らが責任者を務めた宇宙に関する医学研究で、データの取り扱いなどに不適切な事案があったことを発表した。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/b5ced550bf0bd5ca65860cd1ebfc37e12003f000'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>古川聡宇宙飛行士が責任者の実験で不正 JAXA「研究全体の科学的 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2n2mUtVb940ROPyI1oPlBns6Aic8D4WHSRNIKWsQVM9iQsT4jp3UvBXcmzc6kkXjlcpzLrr5g" alt="古川聡宇宙飛行士が責任者の実験で不正 JAXA「研究全体の科学的 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>JAXA（宇宙航空研究開発機構）の古川聡（ふるかわ・さとし）宇宙飛行士（58）が責任者を務めた研究で、データに改ざんや捏造（ねつぞう）などがあったことが分かりまし&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221125-IROESQBD3FKXVEAHTIES7LSLII/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>古川聡飛行士の研究で不正、同僚が実験データ捏造 ＪＡＸＡ「適切 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTFhZN3CjyJMrpP7klm9Pw6qhnL3XVcLs0aLv7lp2dhbdYs6yzZhfyxaGzwPO6Ie8cj9yaH0rRX" alt="古川聡飛行士の研究で不正、同僚が実験データ捏造 ＪＡＸＡ「適切 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>宇宙航空研究開発機構（ＪＡＸＡ）は２５日、緊急記者会見を開き、古川聡飛行士（５８）が総括責任者を務めた実験で、参加した研究者がデータを捏造、改ざんする不正&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221125-NS36CLUROJJANJMSUBQHIJJTWQ/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>古川飛行士の研究で不正か ＪＡＸＡ、処分検討</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPRrJ8lU9A0cDPtUXIKIi9GRllrlTUnHCZAbkl3fb1Gy_JMyl7BY1KKS1l_5AfvG-Nx9VHmJeY" alt="古川飛行士の研究で不正か ＪＡＸＡ、処分検討" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>宇宙航空研究開発機構（ＪＡＸＡ）の古川聡飛行士（５８）が総括責任者を務める国際宇宙ステーション（ＩＳＳ）での生活を模した実験で、データの書き換えなどの捏造や&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}