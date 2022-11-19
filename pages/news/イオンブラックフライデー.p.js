import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>イオンブラックフライデー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,イオンブラックフライデー"/>
        <meta name="description" content="Trending News about イオンブラックフライデー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>イオンブラックフライデー</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-01059360-okinawat-000-1-view.jpg?exp=10800" alt="イオンブラックフライデー"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/8f13b73749e54ffb212fefb4efe5726be0e5d13c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>フライングセールでIH炊飯器やキャリーケースに長蛇の列 きょう ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSf3nq86tcaEq8pGoMImnbzyq5N4p-8OdBTDkbLiWfClMRus3cQrYh0V14hkgDrkEYnmbmgxW7t" alt="フライングセールでIH炊飯器やキャリーケースに長蛇の列 きょう ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>イオン琉球（南風原町、鯉渕豊太郎社長）は18日から27日まで、沖縄県内のイオン、イオンスタイル、マックスバリュ計39店舗とオンライン特設サイトで「イオン ブラック&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}