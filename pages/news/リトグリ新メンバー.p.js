import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>リトグリ新メンバー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,リトグリ新メンバー"/>
        <meta name="description" content="Trending News about リトグリ新メンバー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>リトグリ新メンバー</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221115-00117572-crankinn-000-1-view.jpg?exp=10800" alt="リトグリ新メンバー"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/28cfe038c75a49736504d5f2db3f8b02975ad417'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Little Glee Monster新メンバー、明日発表 “新生リトグリ”が『THE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-4SutI-NuWiA-36lrZS2rIc5XnxqQNPXvgFFjMCUVjUysSWK5K48AOd0EofqqMCgCrJvP_KeO" alt="Little Glee Monster新メンバー、明日発表 “新生リトグリ”が『THE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Little Glee Monsterの新メンバーが、11月16日に放送される朝の情報番組『THE TIME，』（TBS系／毎週月曜～金曜5時20分）内で発表。同番組では3ヵ月にわたるオーディ&nbsp;...</p></div>
            </div>
        </a><a href='https://spice.eplus.jp/articles/310883'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>リトグリ、新メンバーが決定 新たに3名を迎え6名で第二章へ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7Dg49hAajFZIhrvpMUcuqIzx6yGR-Ch2rTdMJzttWxXj8Zz9x8k-yrf-GNDKGhUwB714j3IPY" alt="リトグリ、新メンバーが決定 新たに3名を迎え6名で第二章へ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Little Glee Monsterの第二章を作っていく新たなメンバーを募集するオーディション「M∞NSTER AUDITION」。かれん・MAYU・アサヒのリトグリメンバーとともに活動して&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sanspo.com/article/20221116-JCE5V6K775PBDFUBJZGN2YPPWQ/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>リトグリ新メンバー３人が決定 ６人組で第２章をスタートさせる</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTo2qElJ6voJRGKEzp4DUyoBGrtLjlkeoboSoG2RxzN1tcJLPhUY4Cing0MY8kSfPmHmyItXJH9" alt="リトグリ新メンバー３人が決定 ６人組で第２章をスタートさせる" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女性ボーカルグループ、Ｌｉｔｔｌｅ Ｇｌｅｅ Ｍｏｎｓｔｅｒが１６日、ミカ（１８）、結海（１８）、ｍｉｙｏｕ（１９）の加入を発表した。</p></div>
            </div>
        </a><a href='https://www.sponichi.co.jp/entertainment/news/2022/11/16/kiji/20221116s00041000148000c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>リトグリ 新メンバー発表 7002人から選ばれた3人加入で新たな ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="リトグリ 新メンバー発表 7002人から選ばれた3人加入で新たな ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女性ボーカルグループ「Little Glee Monster」の新メンバーが16日、TBSの情報番組「THE TIME，」（月～金曜前5・20）で発表された。7002人が応募したオーディションで&nbsp;...</p></div>
            </div>
        </a><a href='https://natalie.mu/music/news/501479'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Little Glee Monster新メンバー決定、来週「THE TIME,」で新曲初歌唱</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtrEBWzTZmVarMqkvOhncDfblZ5vvubhZSeU-UCyCP611MHCap4ArUboaafw140aeMNJw5wBWD" alt="Little Glee Monster新メンバー決定、来週「THE TIME,」で新曲初歌唱" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>リトグリはメンバーの芹奈とmanakaの卒業を受け、今年7月より新メンバーオーディション「M∞NSTER AUDITION」を開催。7002名の応募者から最終候補者6名が選出され、10月&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oricon.co.jp/news/2257131/full/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>リトグリ、新メンバー3人加入 6人体制で第二章始動 『THE TIME ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ04nZHi9-wv6T-JGTjE6lSyUv99hdH_dvFOGo8iUINSS50H08ch-2WcWTiH6eebYAvCm7B9TMm" alt="リトグリ、新メンバー3人加入 6人体制で第二章始動 『THE TIME ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ニュース｜ ボーカルグループ・Little Glee Monsterの新メンバーに、ミカ（18）、結海（18）、miyou（19）の3人が決定した。きょう16日放送のTBS系情報番組『THE TIME&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}