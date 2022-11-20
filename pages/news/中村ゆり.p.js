import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>中村ゆり</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,中村ゆり"/>
        <meta name="description" content="Trending News about 中村ゆり" /></Head><Template>
            <h1 style={{fontSize: "30"}}>中村ゆり</h1>
            <Image width={800} height={500} src="https://portal.st-img.jp/thumb/9e7ca849c8ee1f786d0cf203d0a7e7d3_1668878221_l.jpg" alt="中村ゆり"/>
            <h3>Recent News</h3>
            <a href='https://www.nikkansports.com/entertainment/news/202211190001279.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>中村ゆりチャイナドレス姿を公開「美しいしか出てこない ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="中村ゆりチャイナドレス姿を公開「美しいしか出てこない ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優中村ゆり（40）が19日、インスタグラムを更新。TBS系ドラマ「クロサギ」（金曜午後10時）出演時のチャイナドレスの写真をアップした。前日放送された第5話…</p></div>
            </div>
        </a><a href='https://article.auone.jp/detail/1/5/9/202_9_r_20221120_1668878221688145'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【クロサギ】中村ゆりのチャイナドレス姿に絶賛の声相次ぐ「最高 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkMDynDIsSFk4rT1WwRu_MRLs39-cVlFk6Bcc8jKGqGksfyOaMT-5fadirINHU22J0R59t_HEO" alt="【クロサギ】中村ゆりのチャイナドレス姿に絶賛の声相次ぐ「最高 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>女優・中村ゆりが１９日に更新した自身のインスタグラムで、ＴＢＳ系連続ドラマ「クロサギ」（金曜・午後１０時）でのチャイナドレス姿を公開した。</p></div>
            </div>
        </a>
        </Template></>;
}