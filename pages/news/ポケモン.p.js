import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ポケモン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ポケモン"/>
        <meta name="description" content="Trending News about ポケモン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ポケモン</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-00000335-oric-000-1-view.jpg?exp=10800" alt="ポケモン"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/2bf4cb184f4fc506ae27abb3b74bbe2fc706b9a2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『ポケモン』3年ぶり新作発売で早くも世界トレンド1位 予約本数は ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsVX6szPq5Q3bwP7BGvo5wr3DIagvmfjkThNCm55aRL29MSiI6-DYXBjQwjUiT5IHTbyoSBiVA" alt="『ポケモン』3年ぶり新作発売で早くも世界トレンド1位 予約本数は ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>人気ゲーム『ポケットモンスター』のシリーズ完全新作「ポケットモンスター スカーレット・バイオレット」（Nintendo Switch）が18日、世界同時発売された。</p></div>
            </div>
        </a><a href='https://www.famitsu.com/news/202211/18283242.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ポケモンSV攻略】性格一覧。ステータス補正やおすすめも紹介 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRu-7N13LhKERdYEdPeJXn4VkAIdB-Xlen07ryZkr0AJrBzE5sOmlQ_8bpDhufPMYoUu9n_SnYG" alt="【ポケモンSV攻略】性格一覧。ステータス補正やおすすめも紹介 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新作『ポケモンSV（スカーレット・バイオレット）』のポケモンの性格をまとめて掲載。ステータス補正やおすすめの性格も紹介。</p></div>
            </div>
        </a><a href='https://www.nikkei.com/article/DGXZQOUF17B3A0X11C22A1000000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ポケモン新作、予約数が過去最高に Switch向け18日発売</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRPRk5XwrANlHvYdBdjqgFBHtoTJgEHershscfrBpAH-p7QZW58326rRFxmq0nObxB6TLzGjVyH" alt="ポケモン新作、予約数が過去最高に Switch向け18日発売" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ゲーム企画のポケモン（東京・港）は17日、翌日に発売を控えた人気シリーズ「ポケットモンスター」の最新作について、事前予約数がシリーズで過去最高になったことを&nbsp;...</p></div>
            </div>
        </a><a href='https://smartmag.jp/archives/18285/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ポケットモンスター最新作】11月18日発売のゲーム ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQOtCLtuRJ2Y38fntaPsjb37W3_2MKSiAFMtatxYQDhQlCIXfwinrmtuiw1UDh0wgZVeaOAlYUy" alt="【ポケットモンスター最新作】11月18日発売のゲーム ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ポケモン スカーレット』では伝説のポケモン・コライドンが、『ポケモン バイオレット』ではミライドンが登場する。この2匹の伝説のポケモンたちは、なんとしっそうけい&nbsp;...</p></div>
            </div>
        </a><a href='https://www.famitsu.com/news/202211/17283121.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【キミが遊んだのはどのポケモン？】冊子2022年版全ページを公開 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6reCYpqy-WKCz4QvY4pdyF8xGt9Vd6FpA7NU5zUYAk7WGBJ8VczqIERPWWDwNZzLPFnNU6iOv" alt="【キミが遊んだのはどのポケモン？】冊子2022年版全ページを公開 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>『ポケットモンスター 赤・緑・青・ピカチュウ』 &middot; 『ポケットモンスター 金・銀・クリスタルバージョン』 &middot; 『ポケットモンスター ルビー・サファイア・エメラルド』&nbsp;...</p></div>
            </div>
        </a><a href='https://game.watch.impress.co.jp/docs/news/1456429.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>初のオープンワールドRPG！ シリーズ最新作「ポケットモンスター ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRillL3Hdq-so7N_6X0vd8recH4jqRivODhsq4EOCYPqc-2vcXOlk2EFccmFfAmCMgzb34KVxAB" alt="初のオープンワールドRPG！ シリーズ最新作「ポケットモンスター ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ポケモンは、Nintendo Switch用RPG「ポケットモンスター スカーレット」および「ポケットモンスター バイオレット」を11月18日に発売する。</p></div>
            </div>
        </a><a href='https://news.denfaminicogamer.jp/news/221118e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『ポケットモンスター スカーレット・バイオレット』発売開始 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREQ90tn_DWdQpck6sbAThyuN5MIXwrhr62HBr-dX4v9VKf3qXvdGnMB1YWmy2hIYBIqoAylZkj" alt="『ポケットモンスター スカーレット・バイオレット』発売開始 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>株式会社ポケモンは11月18日（金）、『ポケットモンスター スカーレット・バイオレット』の発売を開始した。</p></div>
            </div>
        </a>
        </Template></>;
}