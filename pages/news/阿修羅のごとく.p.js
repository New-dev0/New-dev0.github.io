import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>阿修羅のごとく</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,阿修羅のごとく"/>
        <meta name="description" content="Trending News about 阿修羅のごとく" /></Head><Template>
            <h1 style={{fontSize: "30"}}>阿修羅のごとく</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/iwiz-yn/rpr/usuihiroyoshi/00324697/title-1668870196569.jpeg?pri=l&w=800&h=450&order=c2r&cx=0&cy=0&cw=1920&ch=1080&exp=10800" alt="阿修羅のごとく"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/byline/usuihiroyoshi/20221120-00324697'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>名作ドラマ『阿修羅のごとく』再放送で、あらためて知る「向田 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKqMYJPCQcweGV1qpvnkvqGZpoMGngPui51lcnP3tIQYZOnzplqTXKC6zJit2u-hbuNIbUIzE7" alt="名作ドラマ『阿修羅のごとく』再放送で、あらためて知る「向田 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NHKのＢＳプレミアムで再放送された、『阿修羅のごとく』（全3話）。脚本家・向田邦子の凄みを再認識です。</p></div>
            </div>
        </a>
        </Template></>;
}