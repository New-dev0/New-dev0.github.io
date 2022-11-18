import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>COCOA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,COCOA"/>
        <meta name="description" content="Trending News about COCOA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>COCOA</h1>
            <Image width={800} height={500} src="https://image.itmedia.co.jp/news/articles/2211/17/cover_news190.jpg" alt="COCOA"/>
            <h3>Recent News</h3>
            <a href='https://www.itmedia.co.jp/news/articles/2211/17/news190.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COCOAを機能停止に 最終アップデート配信開始</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS19aZ3cTnQX1i7qSAHPMg326fLkiA2F7_x9TZGHfIjRPK8COHYVKUzbFhczP4ZYimH4GfN2p2D" alt="COCOAを機能停止に 最終アップデート配信開始" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>厚生労働省は11月17日、新型コロナウイルス接触確認アプリ「COCOA」のアップデート（3.0.0）の配信を開始した。政府による陽性者の全集届け出見直しによるもので、機能&nbsp;...</p></div>
            </div>
        </a><a href='https://news.tv-asahi.co.jp/news_society/articles/000276174.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COCOA停止に最終版のアップデート必要 そこに狙いあれど通知不足</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRF9UZbprRmCu-_wtIvXlGm5LqsJkPGWYfXD1MvBwO5eLOZh2tMDYbQFZCU6yR6Wgw8qzeBr07f" alt="COCOA停止に最終版のアップデート必要 そこに狙いあれど通知不足" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>機能の停止が決まった新型コロナウイルスの接触確認アプリ「COCOA」。インストールした人は「削除するため」だけに新たな作業が必要になるそうです。</p></div>
            </div>
        </a><a href='https://www.gizmodo.jp/2022/11/how-to-uninstall-cocoa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COCOAが終了、17日から機能停止版の配布がスタート。アン ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJj4IZybtKa6-shXYF3KxBYZV_NJLE3ysiPRBEQmgoPxOcH1lEa1H13p6a33ef0xIt23tWR1oI" alt="COCOAが終了、17日から機能停止版の配布がスタート。アン ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>アンインストール前に要チェック。 厚生労働省は、新型コロナウイルス接触確認アプリ(COCOA) のサービス終了を発表しました。機能停止の理由として、陽性者全数届出の&nbsp;...</p></div>
            </div>
        </a><a href='https://smhn.info/202211-cocoa-fin-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COCOA停止。アプリを削除しただけではスマホの電池が減り続ける ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbUBIRyjyeNg8jfP_JDXOOc1a_zXmKmGZoJft1DdflX9pekC2kbbhGhRAv336BGy1S6W444r8i" alt="COCOA停止。アプリを削除しただけではスマホの電池が減り続ける ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>厚生労働省は、接触確認アプリCOCOAの機能停止版の配信を開始しました。アプリバージョンは3.0.0。アップデート後、画面の案内に従い機能停止手続きが必要。</p></div>
            </div>
        </a>
        </Template></>;
}