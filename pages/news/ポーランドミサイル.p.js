import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ポーランドミサイル</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ポーランドミサイル"/>
        <meta name="description" content="Trending News about ポーランドミサイル" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ポーランドミサイル</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221116/K10013893851_2211161947_1116202907_01_02.jpg" alt="ポーランドミサイル"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221116/k10013893851000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ミサイル ポーランドに落下 専門家の見立てと今後の行方は？</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7VNWMulAFVfe_wNJQyYFuAPu6baG0ZMlF0PdMVVCW-OxpGU_BxdhCKRDusmf_eWoMkAUDJp9V" alt="ミサイル ポーランドに落下 専門家の見立てと今後の行方は？" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】ポーランドに落下したミサイルについて、16日夕方、ロシアの安全保障に詳しい防衛省防衛研究所の兵頭慎治 政策研究部長に聞き…</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/daafe8687e83b4c9409a51befd299fe901b55cbf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ミサイル着弾】誰が？ポーランドで2人死亡 意図的か偶発的か ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTRkQk8Ya-GS9Gh1lR8dx7RBKhU2NAIfMS24OhoYuDix3h4x1hrqtWc6fN4OCruShjnTSGP64TY" alt="【ミサイル着弾】誰が？ポーランドで2人死亡 意図的か偶発的か ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NATO加盟国での初めての犠牲者に国際社会の緊張が高まっています。ウクライナの国境に近いポーランドの村でロシア製のミサイルが着弾し、2人が死亡しました。</p></div>
            </div>
        </a><a href='https://www.bbc.com/japanese/63644659'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポーランドにミサイル着弾で2人死亡、ウクライナ防空が原因のよう ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHXx5svCnObByoldDBO4AEZmuJNPUquujBdK3qFDaYnHtpn9bEpkPHX6C-TQjbn-8MVLdsNyeH" alt="ポーランドにミサイル着弾で2人死亡、ウクライナ防空が原因のよう ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ウクライナ国境に近いポーランド東部で15日午後、ミサイルが着弾し、2人が死亡した。ポーランド外務省は、領内に着弾したのはロシア製のミサイルだと発表した。</p></div>
            </div>
        </a><a href='https://www.bloomberg.co.jp/news/articles/2022-11-16/RLFTL8T0AFB601'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ＮＡＴＯとポーランド、ミサイルはロシアの意図的な攻撃ではない</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT0PMv73p5QlijrWOAF778FhsMNU3B_UmFt9nTpkTQe60rFLN00ovUkDqTgz0nTk6AGKLrkNB4E" alt="ＮＡＴＯとポーランド、ミサイルはロシアの意図的な攻撃ではない" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>北大西洋条約機構（ＮＡＴＯ）のストルテンベルグ事務総長は16日、ポーランド領内で発生した爆発を巡る初期の調査結果だとして、ウクライナの迎撃が原因だったと説明&nbsp;...</p></div>
            </div>
        </a><a href='https://jp.reuters.com/article/poland-ukraine-idJPKBN2S60CP'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポーランド着弾ミサイル、迎撃でウクライナが発射した可能性ー米 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8AWbE91DoLpwEaezVa3hjO5HW2lMzo74vqUnhSzgMtOexDPuRlRX_S2PsEO2tCiiNI91DOKFO" alt="ポーランド着弾ミサイル、迎撃でウクライナが発射した可能性ー米 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ポーランドのウクライナ国境近くに１５日着弾したミサイルについてＡＰ通信は１６日、米当局者が明らかにした初期段階の情報として、ロシアのミサイルを迎撃するため&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQCJ6K8JQCJUHBI03J.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポーランドにミサイル着弾、2人死亡 ウクライナの迎撃弾の可能性も</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShVOMZnudCR4Ek5gH8HFiyJBOAqe1zyQ8Hu0aM9wKyKNbRJJLKjni1YnTIjXsfPIltxnKwKkTY" alt="ポーランドにミサイル着弾、2人死亡 ウクライナの迎撃弾の可能性も" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ウクライナ国境近くのポーランドの村に15日、ミサイルが着弾し、2人が死亡した。ロシアによるウクライナ侵攻後、周辺国で戦争に絡む死者が出たのは初めてのケースと&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}