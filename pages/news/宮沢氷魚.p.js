import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>宮沢氷魚</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,宮沢氷魚"/>
        <meta name="description" content="Trending News about 宮沢氷魚" /></Head><Template>
            <h1 style={{fontSize: "30"}}>宮沢氷魚</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221115-00065731-forza-000-1-view.jpg?exp=10800" alt="宮沢氷魚"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/7bfc33c530b7b6178a8ce64f70b25f8b3fa47252'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【令和のニュースター】今きてる俳優・宮沢氷魚を５年前から現在 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6zo3_PyTOyRBVHhjTneOKJb4-2vgo49IxHBIhoLQ23KvCoZK3fWr8lvJtPXn1UIDA0aP9HRyL" alt="【令和のニュースター】今きてる俳優・宮沢氷魚を５年前から現在 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>俳優兼モデルの宮沢氷魚（28）さん。2017年に俳優デビューを飾ってから5年の間に、NHKの連続テレビ小説『エール』と『ちむどんどん』の2作に出演し、大きな注目を浴び&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}