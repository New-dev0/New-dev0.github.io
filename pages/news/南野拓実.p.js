import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>南野拓実</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,南野拓実"/>
        <meta name="description" content="Trending News about 南野拓実" /></Head><Template>
            <h1 style={{fontSize: "30"}}>南野拓実</h1>
            <Image width={800} height={500} src="https://www.yomiuri.co.jp/media/2022/12/20221206-OYT1I50176-1.jpg?type=ogp" alt="南野拓実"/>
            <h3>Recent News</h3>
            <a href='https://www.yomiuri.co.jp/sports/soccer/worldcup/20221206-OYT1T50205/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>南野拓実「じゃあ、俺が行く」知らなかったＰＫ戦の立候補制 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQh-Wp-zyKSUzed7gbzyq-G1zNvK7ESL2usTAePwkBoG6o5_lamkr8A0nJEvJ58EchrwD18UfUC" alt="南野拓実「じゃあ、俺が行く」知らなかったＰＫ戦の立候補制 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【読売新聞】 サッカー・ＦＩＦＡワールドカップ（Ｗ杯）カタール大会の日本代表メンバーが６日、ＰＫ戦の末にクロアチア代表に屈した決勝トーナメント１回戦から一&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/5f9909693ae68f859ddfcb2978312605d98acb82'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>南野拓実 ＰＫ順番決定の舞台裏「じゃあ、俺がいく」目元潤む ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTTrQUkaXCpb_p3F6kheMebVSyIgSM1J5J9tyUxR_mV7oeoEWaZHkRtqk3tmbVi7uYkZXywiN3z" alt="南野拓実 ＰＫ順番決定の舞台裏「じゃあ、俺がいく」目元潤む ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカーＷ杯カタール大会の決勝トーナメント１回戦でクロアチアに敗れ史上初の８強入りを逃した日本代表は一夜明けた６日、取材に応じた。</p></div>
            </div>
        </a><a href='https://www.soccer-king.jp/news/japan/national/20221207/1717604.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>もがく南野拓実「絶対に4年後のＷ杯でリベンジしたい」…森保監督 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRO2rD94LSECsDAG1kpLP4MAaRbyed8LmzkVCxbv8Kb2skaooIERA7Wf5sxRi2PLn_1j1mm726k" alt="もがく南野拓実「絶対に4年後のＷ杯でリベンジしたい」…森保監督 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本代表MF南野拓実（モナコ／フランス）が、6日に取材対応を行った。 FIFAワールドカップカタール2022・ラウンド16でクロアチア代表と戦い、先制したも···</p></div>
            </div>
        </a><a href='https://web.gekisaka.jp/news/japan/detail/?374643-374643-fl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>森保監督から感謝を伝えられた南野拓実「半泣きでPK外して ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgMxsL3w9B1qtXGAAB9tvZvYw6al_extDp_otlj0-xueYyMumJh43BcVvECMJV1ppGLEKBd5Sf" alt="森保監督から感謝を伝えられた南野拓実「半泣きでPK外して ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>出場試合数45、得点数17、アシスト数8は森保一監督就任以降の日本代表でいずれも最多。エースナンバー10番とともに森保ジャパンの顔であり続けたMF南野拓実(モナコ)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asahi.com/articles/ASQD66Q7BQD6UTQP02S.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5秒間挙がらなかった手…「じゃあ、俺が」 南野拓実が語ったPK戦</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnHFgmolMC1AGOEQyDIlRKl4VLiIalK42tLlIGI3Q_ya6aANai4K8cqf6Iu7_Y5cIDiAFEWR6o" alt="5秒間挙がらなかった手…「じゃあ、俺が」 南野拓実が語ったPK戦" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「じゃあ、俺が」。真っ先に立候補したのが、背番号10のMF南野拓実だった。 サッカー・ワールドカップ（W杯）カタール大会の決勝トーナメント1回戦で5日、クロアチア&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221206-7ZOVSE2J2VGPZGFZUTERKM4GA4/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>南野拓実「チームに迷惑をかけた」 ５秒の沈黙のあとＰＫ１番手に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJ8rxsus2JOqAOXlGLJEypE9KdWOQOn3kJgjWPTYykSw6iMETv-JF2PV8GVVwPcNINEcgqzcpF" alt="南野拓実「チームに迷惑をかけた」 ５秒の沈黙のあとＰＫ１番手に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー・日本代表合宿（６日、カタール・ドーハ）日本代表は５日（日本時間６日）にクロアチアとＷ杯カタール大会・決勝トーナメント１回戦を戦い、ＰＫ戦の末敗退が&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/7ee28150b3d9a896a5823973da6f954cad5e971b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「泣ける」「1番グッときた」ザルツブルクが南野拓実＆ファン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXpH_gm8vG_vl-7rBrlbhXxqvhfLeB9gJWJgQ0FCnutUFvI9OJKj_WoD8WzW2hkDhlvp3Z_wjG" alt="「泣ける」「1番グッときた」ザルツブルクが南野拓実＆ファン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>レッドブル・ザルツブルクの投稿がファンの間で話題となっている。 5日、カタール・ワールドカップ(W杯)のラウンド16の2試合が行われた。</p></div>
            </div>
        </a><a href='https://www.chunichi.co.jp/article/596131'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PK立候補募り５秒の沈黙…南野拓実「じゃあ俺が行く、と」1番手に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxjy7xWR63sK8b_8R54pWKJIzuMKA8CtXFasGi4jNUEGQLn6qeYI9xSIpQU9sdX0oNERNltKCC" alt="PK立候補募り５秒の沈黙…南野拓実「じゃあ俺が行く、と」1番手に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー日本代表のMF南野拓実（モナコ）がPK戦で惜敗したW杯決勝トーナメント1回戦・クロアチア戦から一夜明けた6日、ドーハ市内で取材...</p></div>
            </div>
        </a>
        </Template></>;
}