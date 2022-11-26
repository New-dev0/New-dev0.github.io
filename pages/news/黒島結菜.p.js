import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>黒島結菜</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,黒島結菜"/>
        <meta name="description" content="Trending News about 黒島結菜" /></Head><Template>
            <h1 style={{fontSize: "30"}}>黒島結菜</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221125-00000052-mantan-000-1-view.jpg?exp=10800" alt="黒島結菜"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/0b162350ff1a8b4028aecb5db844db24b9fc5d7d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>＜黒島結菜＞「ちむどんどん」の裏話を語る スタッフ100人に自筆 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRywiA0xBlCjVaHCjnp7EciFnsynHQU3khH5tzNdsswzKsnEkkPM_TQqDBX-swxdIP6kk-jOLno" alt="＜黒島結菜＞「ちむどんどん」の裏話を語る スタッフ100人に自筆 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優の黒島結菜さんが、11月25日に放送されるトーク番組「A-Studio＋（エー・スタジオ プラス）」（TBS系、金曜午後11時）に出演する。黒島さんが主演を務めたNHK連続&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nikkan-gendai.com/articles/view/geino/314974'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒島結菜は「ビアボール」CMで好感度回復なるか？ 吉高由里子や ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTDe1cZx-xf4sXcoNvNIaEBLhxdizypereGNMa0p88xbrWYJrHKO2pGfVeY2VoClPYwfxkfme3P" alt="黒島結菜は「ビアボール」CMで好感度回復なるか？ 吉高由里子や ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優の黒島結菜（25）が、サントリーが15日に発売した「ビアボール」の初CMに抜擢されて話題を振りまいている。 ビアボールは、炭酸水で割って、好きな濃さで楽しむ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbbtoday.com/article/2022/11/26/204133.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒島結菜、朝ドラ撮影に不満 今でも納得していないこととは？</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQs2jMWEvhfjZ5DPoWnv74sFi9O-W3v2bjBGrWsJdV5AU7qclEDQU15wtr1LTDmBsl0abVNWf_" alt="黒島結菜、朝ドラ撮影に不満 今でも納得していないこととは？" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>黒島結菜が、25日放送の『A-Studio+』（TBS系）に出演。ヒロインを務めた連続テレビ小説『ちむどんどん』について語る一幕があった。</p></div>
            </div>
        </a><a href='https://mainichikirei.jp/article/20221125dog00m100004000c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>黒島結菜：キスマイ藤ヶ谷に嫉妬？ 「うらやましい！」 妹2人が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGTx-weBQJStmbzGEv309Q0HEIfQSUVBdCTaxJqv_anGPNJIRnNn5XJc7JINzcEYGCX3gebUPD" alt="黒島結菜：キスマイ藤ヶ谷に嫉妬？ 「うらやましい！」 妹2人が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優の黒島結菜さんが、11月25日に放送されるトークバラエティー番組「A-Studio＋（エー・スタジオ プラス）」（TBS系、金曜午後11時）にゲスト出演する。</p></div>
            </div>
        </a>
        </Template></>;
}