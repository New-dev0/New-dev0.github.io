import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>インボイス</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,インボイス"/>
        <meta name="description" content="Trending News about インボイス" /></Head><Template>
            <h1 style={{fontSize: "30"}}>インボイス</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-00000020-nkgendai-000-1-view.jpg?exp=10800" alt="インボイス"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/5be6e8e9a38feeed76517054fc08168618c5d2e3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「税の標語」表彰作品まるでインボイス応援歌？ 制度反対の声が ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS50qvAF7FcY3XD5S7ejfjZrszmmool-hHmzSKj_IknA2Gob0pfwQPjDHVOsVcIsKqjV3LYyFdx" alt="「税の標語」表彰作品まるでインボイス応援歌？ 制度反対の声が ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本の文化の未来が立ち消えてしまう」 16日に開かれたインボイス（適格請求書）制度の問題点を検討する超党派の議員連盟による会合で、制度廃止を強く訴えていたの&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}