import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>スカーレット</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,スカーレット"/>
        <meta name="description" content="Trending News about スカーレット" /></Head><Template>
            <h1 style={{fontSize: "30"}}>スカーレット</h1>
            <Image width={800} height={500} src="https://cdn.snkrdunk.com/uploads/media/20221117101200-0.jpeg" alt="スカーレット"/>
            <h3>Recent News</h3>
            <a href='https://snkrdunk.com/articles/15153/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ポケカ】拡張パック「スカーレットex」の収録カードリスト/予約 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrt3su9W8OFLxHViArkLdsrJBtqxTJGbH8yUBObKx018Zr5SDhiWbSoAQdlOe2m32at72Csjrf" alt="【ポケカ】拡張パック「スカーレットex」の収録カードリスト/予約 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【ポケカ】拡張パック「スカーレットex」の収録カードリスト/予約/抽選/定価/販売店舗まとめ【1/20発売】について. ポケモンカードゲーム 拡張&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}