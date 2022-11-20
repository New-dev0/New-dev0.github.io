import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>フィギュアスケート</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,フィギュアスケート"/>
        <meta name="description" content="Trending News about フィギュアスケート" /></Head><Template>
            <h1 style={{fontSize: "30"}}>フィギュアスケート</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221119/K10013896881_2211191028_1119123332_01_02.jpg" alt="フィギュアスケート"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221119/k10013896881000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【詳報】NHK杯フィギュア 男子シングル 宇野2連覇 山本2位</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsjniR67vbw89BenIe9_SUQK0v5jmUPD3LS3WAxveNZqoiBG6qdxkmEiT9EtPHW74-6QPjx_ac" alt="【詳報】NHK杯フィギュア 男子シングル 宇野2連覇 山本2位" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】フィギュアスケート、グランプリシリーズの第5戦NHK杯は、19日正午すぎから2日目の競技が行われました。ペアは、三浦選手…</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/winter/20221119-OYT1T50111/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宇野昌磨と山本草太がワンツー、「りくりゅう」圧勝でＧＰ連勝 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVn-mijh_e7ODIMZ8A5O6ZFua9j8tpIts28JMq5Rv6oXTwV8Bd77BttpjMLoOorygvxuNWh9_f" alt="宇野昌磨と山本草太がワンツー、「りくりゅう」圧勝でＧＰ連勝 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 フィギュアスケートのグランプリ（ＧＰ）シリーズ第５戦、ＮＨＫ杯は１９日、札幌市の真駒内セキスイハイムアイスアリーナで各種目のフリーが行われた。</p></div>
            </div>
        </a><a href='https://www.nikkansports.com/sports/news/202211180001536.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【フィギュア】宇野昌磨が逆転V、山本草太２位、友野一希４位 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【フィギュア】宇野昌磨が逆転V、山本草太２位、友野一希４位 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>グランプリ（GP）シリーズ第2戦スケートカナダを逆転で制したSP2位の宇野昌磨（24＝トヨタ自動車）が逆転で2大会連続優勝を決めた。第3戦フランス杯2位で同首…</p></div>
            </div>
        </a><a href='https://mainichi.jp/articles/20221120/ddm/035/050/054000c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>フィギュアスケート NHK杯 やっぱり宇野、逆転連覇 - 毎日新聞</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="フィギュアスケート NHK杯 やっぱり宇野、逆転連覇 - 毎日新聞" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケートのグランプリ（GP）シリーズ第5戦、NHK杯最終日は19日、札幌市真駒内セキスイハイムアイスアリーナで行われ、ペアは三浦璃来、木原龍一組（木下&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sankei.com/article/20221118-ODBXGZLPBZN2VDFLVR4FU4R3Y4/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>フィギュアＮＨＫ杯で山本が男子ＳＰ首位、宇野２位 女子は坂本２ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTRqXTjD55rDPlmIbfBpD5dSGgSD60osfcsoTr2ggTgya4W_lkGt7SayWzrtONMGz5naayMD1z1" alt="フィギュアＮＨＫ杯で山本が男子ＳＰ首位、宇野２位 女子は坂本２ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケートのグランプリ（ＧＰ）シリーズ第５戦、ＮＨＫ杯は１８日、札幌市真駒内セキスイハイムアイスアリーナで開幕し、男子ショートプログラム（ＳＰ）で&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/aab19c723dfde1119f20811ac40d6f70991a2780'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【フィギュア】住吉りをん日本女子初4T成功ならず「跳びたい ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQz14Y3mX-9lK0-ileRAn6bDzR9wYqcINq3KBuPgPUYsLbgHkcFXaZd6d9fJ1aTp_2CiitHsFvI" alt="【フィギュア】住吉りをん日本女子初4T成功ならず「跳びたい ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケート・グランプリ（GP）シリーズ第5戦NHK杯＞◇19日◇札幌市・真駒内セキスイハイムアイスアリーナ◇女子フリー.</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/d335b90f33a6db8b0a871e43451c05d76e354136'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宇野昌磨が逆転優勝！日本勢がワンツーフィニッシュ【フィギュア ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRk93R0IKhDp_0Wbai_1wku33KFo1xULoFzqFb_Yy-IKkPagag1VBjRiDZr028wkHqWfEllx0WI" alt="宇野昌磨が逆転優勝！日本勢がワンツーフィニッシュ【フィギュア ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケートグランプリシリーズ第5戦NHK杯。男子フリーが終了し、ショートプログラム2位から挑んだ宇野昌磨が逆転優勝を果たした。 おとといの公式練習から不調&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}