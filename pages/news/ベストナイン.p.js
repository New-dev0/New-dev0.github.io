import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ベストナイン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ベストナイン"/>
        <meta name="description" content="Trending News about ベストナイン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ベストナイン</h1>
            <Image width={800} height={500} src="https://www.seibulions.jp/ocms/cmn/images/ogimage/img_ogdefault01.png" alt="ベストナイン"/>
            <h3>Recent News</h3>
            <a href='https://www.seibulions.jp/news/detail/00006284.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>山川 穂高選手がベストナイン受賞！｜埼玉西武ライオンズ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQaxl2IEc_QlY3TrHi2PS-_f66GTTIYdkgcoX1hAsPxZeI223Pe0leEdpLgS7tfMi16yfA-ft43" alt="山川 穂高選手がベストナイン受賞！｜埼玉西武ライオンズ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>本日11月24日(木)、2022年表彰選手「ベストナイン」が発表され、一塁手部門で山川穂高選手が受賞しましたので、お知らせいたします。なお、山川選手は3年ぶりのベスト&nbsp;...</p></div>
            </div>
        </a><a href='https://full-count.jp/2022/11/25/post1311012/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>貢献度で“圧倒”も受賞逃す… パのベストナインは順当なのか…データ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQG90mBKsWf5C5cgP_KevScoJtDTP97OGkDCecX3AJFf1yu0sj7xfa4ni1HnAjVPgYU_j5yDrcQ" alt="貢献度で“圧倒”も受賞逃す… パのベストナインは順当なのか…データ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本野球機構は24日、今季のセ・パ両リーグのベストナインを発表した。パ・リーグでは日本一になったオリックスと2位ソフトバンクから最多の3人が選出。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/3bab31aeed83282c202dab1c2380668c82c53c81'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ベストナイン投票結果】パはオリ山本由伸が貫録の最多得票 完全 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQa5Tc4vi_WDqO9AR6uuJW5YwFEDvxYZCHFdCk_zJgKc2IFnH3P3hiRFItGXlkwszgYKKCBIoDy" alt="【ベストナイン投票結果】パはオリ山本由伸が貫録の最多得票 完全 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>セ、パ両リーグは24日、ベストナインを発表した。全国の新聞、通信、放送各社に所属し、プロ野球取材経験5年以上の記者投票により選出された。 パ・リーグでは連覇を&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/sports/npb/20221124-OYT1T50202/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ベストナイン、ヤクルト村上が１２球団最多得票…パの最多は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9kM2D93ngJnAdx8_Au32BdfJrmCbQtm47FaTwJfyAki_476zLIobEfC6JEHOI-gb9Z5kFcAsa" alt="ベストナイン、ヤクルト村上が１２球団最多得票…パの最多は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 プロ野球のセ、パ両リーグのベストナインが２４日、発表された。プロ野球担当記者（有効投票数セ＝２９９、パ＝２６３）の投票で選ばれ、三冠王の&nbsp;...</p></div>
            </div>
        </a><a href='https://dazn.com/ja-JP/news/%E9%87%8E%E7%90%83/2022-11-24-npb-best-nine/36jg6bevl6r1196k8n8h5r45t'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022年度「ベストナイン賞」が発表 セは村上、パは山本らが受賞 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShdgf43PXF9hruvfDY7KgbuTGn_Dp2j9XzMZEemyAHf58dYskPO4JMZwhS3bEt6fBb79rxue4Q" alt="2022年度「ベストナイン賞」が発表 セは村上、パは山本らが受賞 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【プロ野球 ニュース】11月24日、NPBが2022年度「ベストナイン賞」を発表した。</p></div>
            </div>
        </a><a href='https://sports.yahoo.co.jp/column/detail/202211240118-spnaviow'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022年度「ベストナイン」パ・リーグ受賞選手が決定 - スポーツナビ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrmvseQURL2M1NhHCyZY-SbRuT0jmQTEGNCTPL7DUD6iXScLG65vZZWSfDDS0Qd417CVVo0eEH" alt="2022年度「ベストナイン」パ・リーグ受賞選手が決定 - スポーツナビ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月24日、パ・リーグのベストナインの受賞者が発表された。終盤まで激しい優勝争いを見せたオリックスと福岡ソフトバンク…</p></div>
            </div>
        </a>
        </Template></>;
}