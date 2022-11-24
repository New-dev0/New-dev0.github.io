import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>渡辺直美</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,渡辺直美"/>
        <meta name="description" content="Trending News about 渡辺直美" /></Head><Template>
            <h1 style={{fontSize: "30"}}>渡辺直美</h1>
            <Image width={800} height={500} src="https://prtimes.jp/i/12678/274/ogp/d12678-274-b16ef11871c2d82d601b-0.png" alt="渡辺直美"/>
            <h3>Recent News</h3>
            <a href='https://prtimes.jp/main/html/rd/p/000000274.000012678.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【NY在住の渡辺直美さんに田中みな実さんがおねだりコール】新 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQutuKL_jwoYHO-QKnMqqppWgSxr1jqWXusYZiIwem5BUkxTushtM__v-WnTAUb867OwqXs--TP" alt="【NY在住の渡辺直美さんに田中みな実さんがおねだりコール】新 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>株式会社エニグモ(代表取締役最高経営責任者：須田将啓 本社：東京都港区、東証プライム：証券コード 3665) は、運営するスペシャルティ・マーケットプレイス『BUYMA(&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}