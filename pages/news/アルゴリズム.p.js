import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>アルゴリズム</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,アルゴリズム"/>
        <meta name="description" content="Trending News about アルゴリズム" /></Head><Template>
            <h1 style={{fontSize: "30"}}>アルゴリズム</h1>
            <Image width={800} height={500} src="https://i.gzn.jp/img/2022/11/28/recommendation-algorithms/00.jpg" alt="アルゴリズム"/>
            <h3>Recent News</h3>
            <a href='https://gigazine.net/news/20221128-recommendation-algorithms/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>興味のあるものをオススメしてくれる「レコメンデーション」に ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRm90U0VLyCx_Ws2FITjM_NwhYQPmNgFzB6YX6mrNhWulY_0Py8jbPQhxLabBi4BxDdZAsjhqaV" alt="興味のあるものをオススメしてくれる「レコメンデーション」に ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4：リンク予測リンク予測は、「グラフニューラルネットワーク(GNN)」というアルゴリズムを用いて、商品やユーザーというノード間のつながりを予測するもの。通常の&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}