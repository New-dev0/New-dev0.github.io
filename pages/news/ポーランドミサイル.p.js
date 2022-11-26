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
            <Image width={800} height={500} src="https://static.reuters.com/resources/r/?m=02&d=20221116&t=2&i=1614429414&r=LYNXMPEIAF01R&w=800" alt="ポーランドミサイル"/>
            <h3>Recent News</h3>
            <a href='https://jp.reuters.com/article/ukraine-crisis-poland-usa-idJPKBN2S51V8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>再送ポーランドにミサイル着弾、ロシアは攻撃否定 ＮＡＴＯが対応 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnkouPKqZ2iFFxlbJ3621eB6QyCjOY9IBNhzxPRQjCANVoobUoQPMC_vy17UQOSmTL51WhtKTE" alt="再送ポーランドにミサイル着弾、ロシアは攻撃否定 ＮＡＴＯが対応 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[ワルシャワ １６日 ロイター] - ポーランド政府は１６日、ロシア製のロケット弾がウクライナ国境付近に着弾したと発表した。この事案を巡りロシア大使を呼び出したと&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yomiuri.co.jp/world/20221116-OYT1T50088/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポーランドがＮＡＴＯに協議要請検討…ミサイル着弾で、バイデン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT3n8AKQ7P3GxIaHmuaQY7WSIujwahzSuwgzBF6EJIDz4iu8DENl_KiA6IEUAx4IYPR_WTmtuOm" alt="ポーランドがＮＡＴＯに協議要請検討…ミサイル着弾で、バイデン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 【リビウ（ウクライナ西部）＝尾関航也】ポーランド外務省は１５日、ミサイルがポーランドのウクライナ国境付近の村に着弾し、２人が死亡したと発表した&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221116/k10013892991000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポーランドのミサイル 米大統領 “ロシアからとは考えにくい”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCUNvhpgGzpb8EFG9fwQDwIchs9ij6-fd3g86LKaq3_mfxJN_ZnUTxfjUcnXAnyJJFek35_lGp" alt="ポーランドのミサイル 米大統領 “ロシアからとは考えにくい”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】ロシア製のミサイルがポーランド領内に落下し、2人が死亡したと伝えられたことについてアメリカのバイデン大統領は、事実関係を…</p></div>
            </div>
        </a><a href='https://www.bbc.com/japanese/63644659'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポーランドにミサイル着弾、2人死亡 ロシアから発射ではなさそうと ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_EewwRBgMbgH3Aaw9fCPTFJXb0fhujikV0MXETPH-16ajXpPf2qLwuwoJ2NAZCxTxXtnjjfYl" alt="ポーランドにミサイル着弾、2人死亡 ロシアから発射ではなさそうと ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ウクライナ国境に近いポーランド東部で15日午後、ミサイルが着弾し、2人が死亡した。ポーランド外務省は、領内に着弾したのはロシア製のミサイルだと発表した。</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOGR15E8Q0V11C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポーランドにミサイル着弾で2人死亡 ロシアは否定</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcReK3Fyv9kRaq55rKBnuHCCI9NcSjXlgURVVvy_Or_ZiJiKksUTGviIkDwvnZB3PBov8hO9pYGO" alt="ポーランドにミサイル着弾で2人死亡 ロシアは否定" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【この記事のポイント】・ロシア製のミサイルがポーランドに着弾、2人死亡と報道・バイデン米大統領はポーランドのドゥダ大統領と電話協議・NATO加盟国は状況を懸念、&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/8b273fdb346fd640e740c56985af4bc4b24164fd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポーランドへのロシア製ミサイル着弾は「ウクライナを狙ったもの ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBbKHDuE_DL6WRDeHnn3wsvK-jrDhcx3VnlJbdFdloSvmgpBTq_-44eGGluvNcHX7p0F7cdOnb" alt="ポーランドへのロシア製ミサイル着弾は「ウクライナを狙ったもの ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>アメリカ国防総省は「裏付ける情報はなく、調査を続けている」と説明。一方で、G20サミットが開かれているインドネシアのバリ島では、G7とNATO（＝北大西洋条約機構）の&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}