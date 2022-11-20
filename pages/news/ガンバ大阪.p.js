import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ガンバ大阪</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ガンバ大阪"/>
        <meta name="description" content="Trending News about ガンバ大阪" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ガンバ大阪</h1>
            <Image width={800} height={500} src="https://sports-pctr.c.yimg.jp/dk/iwiz-sports/text/images/2022/1118/202211180083-spnaviow_2022111801222_view.jpg" alt="ガンバ大阪"/>
            <h3>Recent News</h3>
            <a href='https://sports.yahoo.co.jp/official/detail/202211180083-spnaviow'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ガンバ大阪】松田ガンバの総決算。楽しむ心を忘れず ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPD5oT8zuFNk1M_tq06wFqdGMh_hWje4Qc-uzg07Oks6EvldcBZCBk3BHWDD3edwxuY3tKVJ3V" alt="【ガンバ大阪】松田ガンバの総決算。楽しむ心を忘れず ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>リーグ戦の最終節で、J1残留を決めたガンバだが、まだ今季の戦いは終わっていない。パナソニックスタジアム吹田で行われるプレ…</p></div>
            </div>
        </a>
        </Template></>;
}