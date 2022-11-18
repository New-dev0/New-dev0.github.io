import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ロシア</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ロシア"/>
        <meta name="description" content="Trending News about ロシア" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ロシア</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221117/K10013894351_2211171036_1117105217_01_02.jpg" alt="ロシア"/>
            <h3>Recent News</h3>
            <a href='https://www.jetro.go.jp/biznews/2022/11/e0e83d237871c0c5.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>モスクワ、サンクトペテルブルクの空港で警戒が強化(ロシア ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="モスクワ、サンクトペテルブルクの空港で警戒が強化(ロシア ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>シェレメチェボ空港では、外部からの車両などによる滑走路内への侵入を阻止するコンクリートブロックが追加で設置されたほか、警備員の装備が強化されている。プルコボ空港&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jetro.go.jp/biznews/2022/11/652f52d6a129b449.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>進出企業マインド、ロシアとウクライナで明暗(ウクライナ、ロシア ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="進出企業マインド、ロシアとウクライナで明暗(ウクライナ、ロシア ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>現在、大方の予想に反して低位安定の状況にあるロシア経済だが、グローバル経済から切り離された環境の中で侵攻前の規模に迅速に回復するかは不透明だ。モスクワ事務所の&nbsp;...</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221117/k10013894351000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ミサイル落下めぐり国連安保理で欧米各国とロシアが応酬</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYSTOAseldX1UhA9uewkc3dg8NmNDkdIc83NiCj7T4QuqbkbmHNFQrX1JkNgWObFV202AjaeFJ" alt="ミサイル落下めぐり国連安保理で欧米各国とロシアが応酬" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】ウクライナの隣国でNATO＝北大西洋条約機構の加盟国のポーランドにミサイルが落下し犠牲者が出たことについて、国連の安全保…</p></div>
            </div>
        </a>
        </Template></>;
}