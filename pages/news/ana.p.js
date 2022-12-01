import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ANA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ANA"/>
        <meta name="description" content="Trending News about ANA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ANA</h1>
            <Image width={800} height={500} src="https://www.watch.impress.co.jp/img/ipw/list/1459/943/ana0.jpg" alt="ANA"/>
            <h3>Recent News</h3>
            <a href='https://www.watch.impress.co.jp/docs/news/1459943.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ANAとJR東日本がMaaS連携強化「えきねっと×ANA空港アクセス ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQt4NLSkNopbcUxdaRU_iM4wCb-7xdGqwBuu_H74opLi7KDaM3GnJq-XmRro3_n66517kIwqVTf" alt="ANAとJR東日本がMaaS連携強化「えきねっと×ANA空港アクセス ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ANAの経路検索サービス「空港アクセスナビ」から、「えきねっと」へ情報を引き継ぐシステム連携を開始。これまでは、航空券と新幹線や特急列車の予約・決済は別々だったが&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}