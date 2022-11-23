import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ブロッコリー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ブロッコリー"/>
        <meta name="description" content="Trending News about ブロッコリー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ブロッコリー</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221121-00000016-gtv-000-2-view.jpg?exp=10800" alt="ブロッコリー"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/6e91257d471fdc6b6f207dbb798767507ca61ab2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ブロッコリーの出荷がピーク 旬の今は茎もおいしく 群馬・桐生市 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQK8iN3uFBU2tVJfpMCFAdShlsiIKSjpoi_FfKF96j9owgvxpdZcFlEwpC5RfF2cgdhQcuOTsdG" alt="ブロッコリーの出荷がピーク 旬の今は茎もおいしく 群馬・桐生市 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>群馬県桐生市では、秋から冬にかけて生産されるブロッコリーが出荷のピークを迎えています。 桐生市、みどり市、太田市の一部にまたがるＪＡにったみどり管内では、秋&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}