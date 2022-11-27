import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>宮本浩次</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,宮本浩次"/>
        <meta name="description" content="Trending News about 宮本浩次" /></Head><Template>
            <h1 style={{fontSize: "30"}}>宮本浩次</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221126-00000034-mantan-000-1-view.jpg?exp=10800" alt="宮本浩次"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/0183da7b840f5dd05617a276d0080f2540235b38'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>＜MUSIC FAIR＞出演者＆楽曲公開 宮本浩次が「まちぶせ」カバー ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3fQjBp6TVxA5Xk39RyChuSEsCc3YW7NFFij674w5LC8gvBefKBsN75MlyMto18nLMhCLI5ysa" alt="＜MUSIC FAIR＞出演者＆楽曲公開 宮本浩次が「まちぶせ」カバー ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フジテレビ系の長寿音楽番組「SHIONOGI MUSIC FAIR」（土曜午後6時）。11月26日はデビュー45周年の世良公則さんと、宮本浩次さん、JUJUさんが出演する。</p></div>
            </div>
        </a>
        </Template></>;
}