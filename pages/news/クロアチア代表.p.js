import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>クロアチア代表</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,クロアチア代表"/>
        <meta name="description" content="Trending News about クロアチア代表" /></Head><Template>
            <h1 style={{fontSize: "30"}}>クロアチア代表</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221202-12021281-sph-000-1-view.jpg?exp=10800" alt="クロアチア代表"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/1106eba5f4c70f42a3b1bce416a591ab5997b77e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>クロアチア代表ペリシッチ、１６強進出祝う集合写真を公開 「誇り ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDp9xjLD7H3E9peWmHsk9Navvt2iPo1SU8tv6HSNcwE07J430nw0aexeMuCk-3293-ebxK51pF" alt="クロアチア代表ペリシッチ、１６強進出祝う集合写真を公開 「誇り ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>クロアチア代表のイヴァン・ペリシッチ（トッテナム）が２日のベルギー戦後に自身のインスタグラムを更新。「ひとつのチーム、ひとつの国。全員集合」とつづり、決勝&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}