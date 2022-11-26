import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>G20</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,G20"/>
        <meta name="description" content="Trending News about G20" /></Head><Template>
            <h1 style={{fontSize: "30"}}>G20</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221116/K10013892601_2211152106_1116042911_01_02.jpg" alt="G20"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221116/k10013892601000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20サミットがきょう閉幕 首脳宣言の採択に向け大詰めの調整</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMbv_77XngJUoMjTaUYFC99t--_1hyH-HiHtlsebm_zLuMciQSg9Bp1PZh2EKb6ZDHlBlwpLid" alt="G20サミットがきょう閉幕 首脳宣言の採択に向け大詰めの調整" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】インドネシアで開かれているG20サミット＝主要20か国の首脳会議は16日、最後の議論を行って閉幕します。ロシアによるウク…</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOGR151JP0V11C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20首脳宣言、ロシア「異論併記」主張 採択へ調整続く</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDP1AkUKztlTUqHUN2cH6YYr6F64nArL6cxmDksxZdSDq6B_bLLJpw-720iWSHKbMMvRbwIhqU" alt="G20首脳宣言、ロシア「異論併記」主張 採択へ調整続く" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>バリ島=竹内康雄、地曳航也】インドネシアで15日開幕した20カ国・地域首脳会議（G20サミット）は、首脳宣言の採択に向けて調整が続いた。事務レベルで合意した文書案に&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/6ad4d2d6e6dda0c9b9f0a3df566d52afae96393c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ｇ２０首脳会議が開幕、首脳宣言草案で核使用や核の威嚇などを ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDHeyXT4uYpTuOdhEx2JnbqOZ0DuCtfEzZspsQTY2I31p7oaDyUXtzG0266EUK3x71AzD-IJpm" alt="Ｇ２０首脳会議が開幕、首脳宣言草案で核使用や核の威嚇などを ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>バリ（インドネシア中部）＝川上大介、安田信介】主要２０か国・地域（Ｇ２０）首脳会議が１５日、インドネシア中部バリ島で２日間の日程で開幕した。</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/5a2693de1cdfa140cf6a1e20948fee313174caf3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20イベントの予定が急きょ日程変更…ポーランドへのミサイル着弾 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8NxsWQeuS1YyfR7tqePrT6TU7NGprCCzjIvzN8bPzHgaPwtgnX5D4LKWkzGZpmaeHODngj9B-wA" alt="G20イベントの予定が急きょ日程変更…ポーランドへのミサイル着弾 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ポーランドへのミサイル着弾という事態を受けて、G20サミットが開かれているインドネシアのバリ島では、G7とNATO（＝北大西洋条約機構）の首脳が集まり緊急の会合が開&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mofa.go.jp/mofaj/fp/pc/page3_003517.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20首脳会合に際してのG7／NATO首脳緊急会合</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="G20首脳会合に際してのG7／NATO首脳緊急会合" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現地時間11月16日、午前8時55分（日本時間同日午前9時55分）から約40分間、ポーランドへのミサイル着弾との情報を受けて、バイデン米大統領の主催により、G20首脳会合&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/ec8a0c0e16c2f98dc30719eeda3615ae392bd00b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ロシア外相「首脳宣言は採択される見通し」 G20サミット（FNN ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhF-83ncSZICcWNiwMdF0ScLCJ2y9DE0SJ0okS3zJCvYERWxUwOfQ4ZqQAHjwp8xRO6K6579ZU" alt="ロシア外相「首脳宣言は採択される見通し」 G20サミット（FNN ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>インドネシアで開かれているG20サミット（主要20カ国・地域首脳会議）の首脳宣言をめぐり、ロシア外相が「採択される見通しだ」と発言。 16日に閉幕するG20サミットの&nbsp;...</p></div>
            </div>
        </a><a href='https://jp.reuters.com/article/g20-summit-declaration-idJPKBN2S50KM'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ｇ２０首脳宣言草案、「大半」がウクライナ戦争非難 ロシア反対か</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6p4VPeqEhGSZJ3AWuqB4v0R3gYF2z7DtYXV_bENJhFQhmCFoYbm5lKw39B72DzBSnvk8JF341" alt="Ｇ２０首脳宣言草案、「大半」がウクライナ戦争非難 ロシア反対か" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ロイターが１５日に確認した２０カ国・地域（Ｇ２０）首脳会議の首脳宣言草案によると、ウクライナでの戦争を「大半の」メンバーが強く非難し、戦争が世界経済の脆弱性&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221116/k10013893011000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20首脳 予定大幅変更し対応協議 ポーランドのミサイル落下で</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSDxbnO6IXMZRCZYe1WJYC0UzoLLTYWUr6b23lATYg1KBPeoBARZpgZtLP3ohZ4Ab7-3eo_u4UP" alt="G20首脳 予定大幅変更し対応協議 ポーランドのミサイル落下で" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】ロシア製のミサイルがポーランド領内に落下し2人が死亡したと伝えられたことを受け、G20サミット＝主要20か国の首脳会議の…</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGKKZO66021270W2A111C2EA2000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20サミット 国際会議、利害対立しやすく</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1glB8nzhm8xHJVwFF_MGEA2ublM-AP6ln_2VE-ep9X6QgnSZvXrtcKGRgr5LPFwZ9qYhsuHYY" alt="G20サミット 国際会議、利害対立しやすく" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本や米国、英国、ドイツをはじめとする主要7カ国（G7）に加え、ロシアや中国、インドなどの新興国を含む20カ国・地域（G20）の首脳級が集まる国際会議。2008年の&nbsp;...</p></div>
            </div>
        </a><a href='https://jp.reuters.com/article/g20-summit-debt-idJPL6N32B0C2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ｇ２０、中所得国の債務悪化を懸念 迅速な対応要請＝声明草案</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ｇ２０、中所得国の債務悪化を懸念 迅速な対応要請＝声明草案" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[ワシントン １５日 ロイター] - ２０カ国・地域（Ｇ２０）首脳は、脆弱な中所得国が直面している「債務状況の悪化」に懸念を表明し、官民のあらゆる債権者に対し、&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}